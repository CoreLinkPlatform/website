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

The GitHub Actions workflow performs the same build and uploads `out/` using
the GitHub Pages artifact action. A release is evidenced by the successful
`Deploy to GitHub Pages` run for the exact `main` commit.

## Ownership and release checks

Web Experience owns site content/build correctness. SRE and Release owns the
production deployment/rollback procedure.

Before accepting a website release:

1. build the exact commit with `npm ci && npm run build`;
2. run the repository tests/checks;
3. confirm public maturity/device/SDK claims against current repository/runtime evidence;
4. merge through review;
5. retain the successful GitHub Pages run URL and deployed commit.

## Rollback

Rollback by reverting the offending `main` change through Git, then let the
same GitHub Pages workflow deploy the reverted commit. Record both the failed
or incorrect release commit and the successful rollback deployment run.

Do not manually edit the deployed Pages artifact: source and deployment evidence
must remain reproducible from Git.

## Internal tooling boundary

`npm run build:sites`, `npm run start:sites`, and `npm run install:sites`
exist only for internal preview experiments. They are unsupported alternatives,
are not a production release path, and their success does not satisfy WEB-01
deployment acceptance.
