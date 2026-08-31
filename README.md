# CoreLink Platform Website

[![CI](https://github.com/CoreLinkPlatform/website/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/CoreLinkPlatform/website/actions/workflows/ci.yml)
[![GitHub Pages](https://github.com/CoreLinkPlatform/website/actions/workflows/deploy-pages.yml/badge.svg?branch=main)](https://github.com/CoreLinkPlatform/website/actions/workflows/deploy-pages.yml)
[![Production: GitHub Pages](https://img.shields.io/badge/production-GitHub%20Pages-blue)](https://corelinkplatform.ir)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-blue)](https://react.dev/)

Official website for [CoreLink Platform](https://corelinkplatform.ir).

## Supported production path

**GitHub Pages is the supported production deployment path for this website.**

- Runtime: static export from Next.js 16 / React 19 / TypeScript.
- Build: `npm ci && npm run build`.
- Artifact: `out/`.
- Deployment: `.github/workflows/deploy-pages.yml` on `main`.
- Production has no application server or database dependency.

See [DEPLOYMENT.md](DEPLOYMENT.md) for release evidence/rollback, [QUALITY_GATES.md](QUALITY_GATES.md) for accessibility/performance/SEO/analytics-privacy acceptance, and [PUBLIC_CAPABILITY_STATUS.md](PUBLIC_CAPABILITY_STATUS.md) for the public claim inventory.

## Local development

```bash
npm ci
npm run dev
npm run build
npm test
```

## Internal preview tooling

The `*:sites` scripts and Vinext/Wrangler/Vite/Cloudflare-related dependencies are retained only for internal preview/tooling experiments. They are **not** a supported CoreLink production deployment path and must not be used as website release evidence.

## Public product/developer resources

- [CoreLink Console](https://github.com/CoreLinkPlatform/Console) — Alpha hosted SaaS frontend; live journeys remain compatibility/acceptance-gated.
- [Developer Documentation](https://github.com/CoreLinkPlatform/developer-docs)
- [API Contracts](https://github.com/CoreLinkPlatform/api-contracts)
- [TypeScript SDK](https://github.com/CoreLinkPlatform/sdk-typescript)
- [Python SDK](https://github.com/CoreLinkPlatform/sdk-python)
- [Java SDK](https://github.com/CoreLinkPlatform/sdk-java) — Scaffold/Planned
- [CLI](https://github.com/CoreLinkPlatform/cli) — Scaffold/Planned
- [MCP Server](https://github.com/CoreLinkPlatform/mcp-server) — Scaffold/Planned
- [Mock Server](https://github.com/CoreLinkPlatform/mock-server) — Scaffold/Planned
- [Repository Maturity](https://github.com/CoreLinkPlatform/.github/blob/main/REPOSITORY_MATURITY.md)

## Claim policy

Website copy must not turn repository visibility, generated code, demo UI, merged implementation or a release tag into a stronger support claim than the authoritative contract/repository/release evidence. Use the shared maturity vocabulary: Scaffold, Experimental, Alpha, Beta, Stable, Deprecated, Planned.