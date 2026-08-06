# Public capability claim inventory

This inventory records the evidence boundary used by website copy. Runtime code
and retained executable evidence outrank README, Issue, Project and marketing
copy when they disagree.

| Public surface | Current maturity | Evidence boundary |
| --- | --- | --- |
| Public API | Alpha / `1.0.0-draft` | `api-contracts`: reviewed Device + Command slice and canonical event envelope |
| TypeScript SDK | Prerelease Alpha | generated client repository; not a Stable supported release |
| Python SDK | Prerelease Alpha | generated client repository; not a Stable supported release |
| Java SDK | Scaffold / Planned | repository scaffold |
| CLI | Scaffold / Planned | repository scaffold |
| MCP server | Scaffold / Planned | repository scaffold |
| Mock server | Scaffold / Planned | repository scaffold |
| Identity / Device registry / Commands | Alpha | implemented platform foundation; release hardening/evidence still gates Stable |
| Digital twin / Telemetry | Experimental | foundation exists; public product acceptance is incomplete |
| Media | Planned | no supported public v1 media claim |
| White-label experience | Planned | product direction; not a released application boundary |

Allowed website maturity terms are **Scaffold, Experimental, Alpha, Beta,
Stable, Deprecated, Planned**.

Device/protocol names shown on the site are evaluation examples. They do not
mean every listed model, firmware or protocol is currently supported. A support
claim requires profile-specific validation evidence.

Review this inventory whenever runtime/contract/SDK maturity changes and before
a public website release.
