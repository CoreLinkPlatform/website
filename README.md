# CoreLink Platform Website

Official website for [CoreLink Platform](https://corelinkplatform.ir).

## Supported production path

**GitHub Pages is the only supported production deployment path.**

- Runtime: static export from Next.js 16 / React 19 / TypeScript.
- Build: `npm ci && npm run build`.
- Artifact: `out/`.
- Deployment: `.github/workflows/deploy-pages.yml` on `main`.
- Production has no application server or database dependency.

See [DEPLOYMENT.md](DEPLOYMENT.md) for release evidence and rollback.

## Local development

```bash
npm ci
npm run dev
npm run build
```

## Internal preview tooling

The `*:sites` scripts and their Vinext/Wrangler/Vite/Cloudflare dependencies are
retained only for internal preview/tooling experiments. They are **not** a
supported CoreLink production deployment path and must not be used as release
evidence for this website.

## Public capability claims

Public maturity follows executable repository/runtime evidence, not roadmap
intent. Use only: **Scaffold, Experimental, Alpha, Beta, Stable, Deprecated,
Planned**.

Current public boundary:

- [API Contracts](https://github.com/CoreLinkPlatform/api-contracts): Alpha,
  `1.0.0-draft`, public Device + Command slice and canonical event envelope.
- [TypeScript SDK](https://github.com/CoreLinkPlatform/sdk-typescript): Prerelease Alpha.
- [Python SDK](https://github.com/CoreLinkPlatform/sdk-python): Prerelease Alpha.
- [Java SDK](https://github.com/CoreLinkPlatform/sdk-java): Scaffold / Planned.
- [CLI](https://github.com/CoreLinkPlatform/cli): Scaffold / Planned.
- [MCP Server](https://github.com/CoreLinkPlatform/mcp-server): Scaffold / Planned.
- [Mock Server](https://github.com/CoreLinkPlatform/mock-server): Scaffold / Planned.

A device/protocol shown on the site is an evaluation candidate, not a support
claim. Device compatibility requires profile-specific validation evidence.
