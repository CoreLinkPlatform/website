import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = new URL("../", import.meta.url);
const out = new URL("../out/", import.meta.url);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(absolute)));
    else files.push(absolute);
  }
  return files;
}

test("static page exposes baseline accessibility semantics", async () => {
  const html = await readFile(new URL("index.html", out), "utf8");
  const sourceCss = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(html, /<html\b(?=[^>]*\blang=["']fa["'])(?=[^>]*\bdir=["']rtl["'])[^>]*>/i);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, "home page must have exactly one h1");
  assert.match(html, /href=["']#top["'][^>]*>\s*پرش به محتوای اصلی/i);

  for (const image of html.match(/<img\b[^>]*>/gi) ?? []) {
    assert.match(image, /\balt=["'][^"']*["']/i, `image is missing alt: ${image}`);
  }

  assert.match(sourceCss, /:focus-visible/);
  assert.match(sourceCss, /prefers-reduced-motion:\s*reduce/);
});

test("static export contains canonical SEO discovery metadata", async () => {
  const html = await readFile(new URL("index.html", out), "utf8");
  const robots = await readFile(new URL("robots.txt", out), "utf8");
  const sitemap = await readFile(new URL("sitemap.xml", out), "utf8");

  assert.match(html, /<meta(?=[^>]*\bname=["']description["'])(?=[^>]*\bcontent=["'][^"']{40,}["'])[^>]*>/i);
  assert.match(html, /<link(?=[^>]*\brel=["']canonical["'])(?=[^>]*\bhref=["']https:\/\/corelinkplatform\.ir\/?["'])[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*\bproperty=["']og:title["'])[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*index[^"']*follow[^"']*["'])[^>]*>/i);
  assert.match(robots, /Sitemap:\s*https:\/\/corelinkplatform\.ir\/sitemap\.xml/i);
  assert.match(sitemap, /<loc>https:\/\/corelinkplatform\.ir<\/loc>/i);
});

test("production HTML has no unreviewed analytics tracker", async () => {
  const html = await readFile(new URL("index.html", out), "utf8");
  assert.doesNotMatch(
    html,
    /googletagmanager|google-analytics|plausible\.io|umami|posthog/i,
    "analytics requires the documented privacy/consent review before shipping",
  );
});

test("static artifact stays inside release performance budgets", async () => {
  const htmlBytes = (await stat(new URL("index.html", out))).size;
  const staticDir = fileURLToPath(new URL("_next/static/", out));
  const files = await walk(staticDir);

  let jsBytes = 0;
  let cssBytes = 0;
  for (const file of files) {
    const bytes = (await stat(file)).size;
    if (file.endsWith(".js")) jsBytes += bytes;
    if (file.endsWith(".css")) cssBytes += bytes;
  }

  assert.ok(htmlBytes <= 200_000, `HTML budget exceeded: ${htmlBytes} bytes`);
  assert.ok(jsBytes <= 2_000_000, `JS budget exceeded: ${jsBytes} bytes`);
  assert.ok(cssBytes <= 500_000, `CSS budget exceeded: ${cssBytes} bytes`);
});
