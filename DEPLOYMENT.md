# Website deployment

## Decision

The supported production target for `corelinkplatform.ir` is **GitHub Pages**.
The site is a static Next.js export. No Cloudflare/Vinext/Wrangler runtime is
part of the production contract.

## Reproducible build

From a clean checkout with Node 22.13 or newer:

```bash
npm ci
npm run build
test -d out
```

The GitHub Actions workflow performs the same build and uploads `out/`. A
release is evidenced by the successful `Deploy to GitHub Pages` run for the
exact `main` commit.

## Ownership and release checks

Web Experience owns site content/build correctness. SRE and Release owns the
production deployment/rollback procedure.

Before accepting a website release:

1. build the exact commit with `npm ci && npm run build`;
2. run repository checks;
3. review public maturity/device/SDK claims against repository/runtime evidence;
4. merge through review;
5. retain the successful GitHub Pages run URL and deployed commit.

## Rollback

Revert the offending `main` change through Git, then let the same GitHub Pages
workflow deploy the reverted commit. Record the bad release commit and the
successful rollback deployment run. Do not manually edit the Pages artifact.

## Internal tooling boundary

`npm run build:sites`, `npm run start:sites`, and `npm run install:sites`
are internal preview experiments. They are unsupported production alternatives
and their success does not satisfy WEB-01 deployment acceptance.
