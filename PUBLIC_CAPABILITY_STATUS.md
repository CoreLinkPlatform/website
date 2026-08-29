# Public capability claim inventory

This inventory records the evidence boundary used by website copy. Runtime/contract/release evidence outranks README, Issue, Project or marketing copy when they disagree. The organization-wide maturity inventory in `CoreLinkPlatform/.github` is the shared repository-level source of truth.

| Public surface | Current maturity | Evidence boundary |
| --- | --- | --- |
| Public API | Alpha / `1.0.0-draft` | `api-contracts`: reviewed Device + Command slice and canonical event envelope |
| CoreLink Console | Alpha | deployable hosted SaaS frontend exists; live support remains gated by Platform/API compatibility and hosted-alpha acceptance evidence |
| TypeScript SDK | Prerelease Alpha | generated client repository; not a Stable supported package |
| Python SDK | Prerelease Alpha | generated client repository; license/support/publication and conformance gates remain open |
| Java SDK | Scaffold / Planned | no supported Java artifact exists |
| CLI | Scaffold / Planned | no installable supported CLI exists |
| MCP server | Scaffold / Planned | no supported MCP package/tool surface exists |
| Mock server | Scaffold / Planned | no supported mock runtime/package exists |
| Identity / tenancy / Device registry / Commands | Alpha | implemented Platform foundation; release/product evidence still gates Stable |
| Telemetry / location / events | Alpha/Experimental by surface | substantial runtime foundation exists; broader public contract and acceptance work remains active |
| Commercial controls / usage | Alpha/Experimental by surface | runtime/Console foundations exist; public contract and customer acceptance remain gated |
| White-label customization/custom domains | Planned | shared Console boundary exists, but deep white-label customization is not a released supported capability |
| Media | Planned / evidence-gated | no supported public v1 media platform claim |

Allowed website maturity terms are **Scaffold, Experimental, Alpha, Beta, Stable, Deprecated, Planned**.

## Claim rules

- A working Console screen or demo dataset does not prove the corresponding live API is accepted.
- A generated SDK does not prove supported package publication or runtime parity.
- Device/protocol names shown on the site are evaluation examples unless profile-specific support/certification evidence is linked.
- Public API/SDK/tool claims must link to authoritative contract/repository maturity rather than duplicating a roadmap.
- White-label product direction must distinguish the existing shared Console from still-Planned customization/custom-domain capability.

Review this inventory whenever runtime, contract, Console, SDK/tool maturity changes and before each public website release.