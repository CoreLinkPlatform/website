# Website quality and release gates

WEB-04 turns accessibility, performance, SEO, analytics privacy and release
expectations into repeatable checks for the supported GitHub Pages artifact.

## Required checks

A website change is eligible for deployment only when a clean checkout passes:

```bash
npm ci
npm run lint
npm test
```

`npm test` builds the same static `out/` artifact used by production and then
runs rendered-output and site-quality tests.

## Accessibility baseline

The release tests require:

- Persian `lang=fa` and RTL document direction;
- one primary `h1` on the home page;
- a keyboard skip link;
- explicit `:focus-visible` treatment;
- reduced motion when `prefers-reduced-motion: reduce` is active;
- an `alt` attribute on every rendered image.

These checks are a regression floor, not a claim of full WCAG conformance.
Material UI changes still require keyboard, responsive and contrast review.

## Performance budgets

The exported home artifact currently has deliberately conservative regression
ceilings:

| Resource | Raw-byte ceiling |
| --- | ---: |
| `out/index.html` | 200 KB |
| `out/_next/static/**/*.js` | 2 MB |
| `out/_next/static/**/*.css` | 500 KB |

A budget increase requires evidence explaining the user-visible tradeoff; do not
raise thresholds merely to make CI green. Runtime Core Web Vitals should be
measured against the deployed site when GitHub Pages is healthy.

## SEO and discovery

The static release must contain:

- canonical URL `https://corelinkplatform.ir`;
- title, description and Open Graph metadata;
- index/follow robots metadata;
- `/robots.txt` pointing at `/sitemap.xml`;
- a canonical home entry in `/sitemap.xml`.

Search visibility is not inferred from build success; indexing remains an
external crawler outcome.

## Analytics privacy

No analytics tracker is shipped today. CI rejects common tracker markers
(Google Analytics/Tag Manager, Plausible, Umami and PostHog) until a change
explicitly addresses:

1. purpose and data minimization;
2. owner and retention;
3. consent/legal basis where applicable;
4. tenant/device/customer identifier handling;
5. privacy documentation and opt-out behavior;
6. verification against the deployed artifact.

Never send access tokens, raw device credentials, private tenant data or
provider secrets to analytics.

## Release evidence

For every accepted website release retain:

- PR and exact merged `main` SHA;
- successful Website CI for that SHA;
- successful GitHub Pages deployment for that SHA;
- deployed-site check confirming the expected public claims and discovery files;
- rollback commit/deployment evidence when rollback is required.

GitHub service outages are external blockers: a successful local build or
uploaded artifact does not replace the final deployed-site evidence.
