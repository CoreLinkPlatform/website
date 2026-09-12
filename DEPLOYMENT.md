# Website deployment

## Decision

The supported production target for `link.coreplatform.ir` is **GitHub Pages**.
The site is a static Next.js export. No Cloudflare/Vinext/Wrangler runtime is
part of the production contract.

`corelinkplatform.ir` is retained only as a legacy hostname and should issue a
permanent redirect to `https://link.coreplatform.ir`. It must not be configured
as a second GitHub Pages custom domain for this repository.

## Reproducible build

From a clean checkout with Node 22.13 or newer:

```bash
npm ci
npm run lint
npm test
test -d out
```

The GitHub Actions workflow performs the same build and uploads `out/`. A
release is evidenced by the successful `Deploy to GitHub Pages` run for the
exact `main` commit.

## Ownership and release checks

Web Experience owns site content/build correctness. SRE and Release owns the
production deployment/rollback procedure.

Before accepting a website release:

1. build and test the exact commit with `npm ci && npm run lint && npm test`;
2. verify the accessibility, performance, SEO and privacy gates in [QUALITY_GATES.md](QUALITY_GATES.md);
3. review public maturity/device/SDK claims against repository/runtime evidence;
4. verify GitHub Pages reports `link.coreplatform.ir` as the custom domain;
5. verify `corelinkplatform.ir` returns a permanent redirect to `https://link.coreplatform.ir`;
6. merge through review;
7. retain the successful GitHub Pages run URL and deployed commit.

## Rollback

Revert the offending `main` change through Git, then let the same GitHub Pages
workflow deploy the reverted commit. Record the bad release commit and the
successful rollback deployment run. Do not manually edit the Pages artifact.

## Internal tooling boundary

`npm run build:sites`, `npm run start:sites`, and `npm run install:sites`
are internal preview experiments. They are unsupported production alternatives
and their success does not satisfy WEB-01 deployment acceptance.
