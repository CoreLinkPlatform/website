# CoreLink Platform Website

Official website for [CoreLink Platform](https://corelinkplatform.ir): connected-product infrastructure for devices, applications, and digital services.

## Stack

- Next.js 16 / React 19 / TypeScript
- Static export (`output: "export"`)
- GitHub Actions deployment to GitHub Pages
- No runtime server or database dependency

## Local development

```bash
npm ci
npm run dev
```

## Verify the GitHub Pages build

```bash
npm run build:github
```

The deployable static site is generated in `out/`.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy-pages.yml` builds and deploys every push to `main`.

In the GitHub repository settings:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Ensure the custom domain is `corelinkplatform.ir`.
4. Point the domain DNS records to GitHub Pages, then enable **Enforce HTTPS** after verification.

## Public developer resources

- [API Contracts](https://github.com/CoreLinkPlatform/api-contracts)
- [Python SDK](https://github.com/CoreLinkPlatform/sdk-python)
- [Java SDK](https://github.com/CoreLinkPlatform/sdk-java)
- [CLI](https://github.com/CoreLinkPlatform/cli)
- [MCP Server](https://github.com/CoreLinkPlatform/mcp-server)
- [Mock Server](https://github.com/CoreLinkPlatform/mock-server)
