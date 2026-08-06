import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders production static HTML metadata", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /<html\b(?=[^>]*\blang=["']fa["'])(?=[^>]*\bdir=["']rtl["'])[^>]*>/i);
  assert.match(html, /<title>CoreLink Platform \| زیرساخت محصولات متصل<\/title>/i);
  assert.match(html, developmentPreviewMeta);
});
