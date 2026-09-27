# Open Source Claude Cowork Alternatives — Honest Comparison

> A source-cited comparison of open-source and self-hostable Claude Cowork alternatives.
> Canonical page: <https://opensourceclaudecowork.com/>

Claude Cowork is a capable agent for knowledge work — but it is closed, Anthropic-only, and cannot be self-hosted. If you want to own the code, the models, and the infrastructure, these are the open-source and source-available alternatives worth evaluating, side by side.

*Last updated: September 2026 · grounded in each project's public docs.*

## The comparison

| Dimension | Kortix (Suna) | OpenWork | Eigent | Claude Cowork |
|---|---|---|---|---|
| Source | Source-available (Elastic License 2.0 — not OSI-open) | Open source (built on OpenCode) | Open source ("100% open source") | Closed (proprietary, Anthropic) |
| Models | Any provider, your own API keys | 50+ LLMs across providers, BYOK | Cloud, gateway, or local models (BYOK) | Anthropic only (Opus 4.5) |
| Where it runs | Your VPC or on-prem; managed cloud optional | Local-first desktop (macOS/Windows/Linux) | Local or self-hosted; cloud optional | Anthropic cloud only |
| Self-host | Yes (Docker; laptop, VPS, VPC, on-prem) | Yes (files stay on your machine) | Yes (run on your own infra) | No |
| Pricing | Self-host free · cloud $40/seat/mo + usage | Desktop free · Team from $10/seat/mo | Self-host free · cloud from $19.99/mo | Included with Pro / Max |
| Human review | Change-request merge (deny-by-default) | Reviews + approvals | Reviews + approvals, traceability | Sandboxed actions, per-app permission |
| Isolation | Isolated sandbox per session, own branch | Local machine; optional sandboxed cloud | Local execution; scoped browser access | Apple VM (VZVirtualMachine) |

\* License and pricing as published in each project's documentation as of September 2026. Kortix's Elastic License 2.0 is source-available, not OSI-approved.

## The candidates

### Kortix (Suna) — source-available · self-host

<https://github.com/kortix-ai/suna>

An open-source AI Management System and the self-hostable alternative to Claude Cowork. Your agents, skills, memory, and connectors live in one git repo you own. Each session runs in an isolated sandbox on its own branch, and work reaches `main` only through a change request a human approves.

- Elastic License 2.0 — read and self-host the code, but not OSI-open.
- Any model, your own keys; run on your VPC or on-prem.
- Self-host free; managed cloud $40/seat/mo + usage.
- Three commands: `install`, `kortix init`, `kortix ship`.

### OpenWork — open source · desktop

<https://openworklabs.com>

A free, open-source desktop app positioned as the open-source alternative to Claude Cowork and Codex. Built on OpenCode, it runs locally so your files stay on your machine, and it connects to 50+ LLMs with your own keys.

- macOS, Windows, Linux desktop; local-first.
- Anthropic-compatible plugins and skills run as-is.
- OpenWork Connect — an MCP gateway shared across a team.
- Desktop free; Team from $10/seat/mo.

### Eigent — open source · workspace

<https://www.eigent.ai>

An open-source "Cowork desktop" with a workspace model: agents, skills, and connectors are packaged once and reused across sessions. Model-agnostic, with local execution and self-hosted deployment.

- BYOK or local models; cloud, gateway, or local.
- Traceability: inspect sources, file history, approvals.
- Self-host free; cloud from $19.99/mo.
- SOC 2 / GDPR readiness in progress.

### Claude Cowork (Anthropic) — closed · reference

<https://claude.ai>

The closed baseline this site compares against. A research preview that brings Claude Code's agentic capabilities to Claude Desktop — Opus 4.5, Computer Use for screen control, and an Apple VM sandbox. Included with Pro and Max subscriptions.

- Anthropic-only models; no self-host.
- Runs in Anthropic's cloud.
- Closed source — you don't own the configuration.

> **A note on names in this space.** `claudecowork.im` is a keyword-matched *guide site* about Claude Cowork (a tutorial, not an alternative), and `kuse.ai` is a workflow-automation tool aimed at lead generation rather than a self-hosted agent platform. Both rank for "claude cowork" queries but are different products.

## How to choose

The deciding question is not "which is best" but "which failure mode can you live with."

1. **Do you need OSI-open, or is source-available enough?** If your team must redistribute a fork as a hosted service, OpenWork or Eigent's license posture may fit better than Kortix's Elastic 2.0. If you only need to read and self-host the code, source-available is enough.
2. **Where does the work actually run?** Desktop-only and local-first (OpenWork) is simplest. A fleet of org-scale agents that share memory and land work through change requests points to a server-side system (Kortix).
3. **Who reviews the output?** All three keep a human in the loop, but the shape differs: Kortix gates everything behind a deny-by-default change request; OpenWork and Eigent use in-app review and approval flows.
4. **What is your budget ceiling?** Self-hosting is free on all three; the paid tiers differ mainly in managed hosting and team features.

> **Honest caveat.** "Open source" is doing a lot of work in this category. Kortix is *source-available*, not OSI-open — its Elastic 2.0 license forbids offering it as a competing managed service. If that matters for your procurement, check each project's license file, not its marketing page.

## FAQ

**Is there a truly open source alternative to Claude Cowork?**
OpenWork and Eigent describe themselves as open source. Kortix (Suna) is source-available under the Elastic License 2.0 — you can read, fork, and self-host the code, but you can't resell it as a competing hosted service. All three are alternatives in the sense that matter most to self-hosters: you own the code and the data, and you can run them without Anthropic.

**What's the difference between "open source" and "source-available"?**
OSI-approved licenses (MIT, Apache-2.0, GPL) grant broad rights to use, modify, and redistribute, including commercially. Source-available licenses (like Elastic 2.0) publish the code but restrict one or more uses — typically selling it as a hosted service. Kortix is source-available; treat it as "readable and self-hostable," not "OSI-open."

**Can I run these without an Anthropic subscription?**
Yes. Kortix, OpenWork, and Eigent are all model-agnostic: you bring your own API keys (OpenAI, Anthropic, Google, local models) or run local models. Claude Cowork itself is the exception — it is tied to Anthropic's Pro/Max subscriptions.

**Which one is best for a team of non-technical users?**
OpenWork is the most point-and-click (a desktop app with one-click imports). Kortix targets org-scale agent fleets governed through change requests, which suits engineering-led teams. Eigent sits between them with a reusable workspace and review flow.

**Why does `claudecowork.im` rank for this keyword?**
It's a keyword-matched domain hosting a guide *about* Claude Cowork. It ranks because the domain and content are on-topic — a useful reminder that for this term, engines reward sites that are about the term, which is exactly why this comparison hub exists on its own domain.

---

*Independent comparison, not affiliated with Anthropic, OpenWork, or Eigent. "Claude Cowork" is a trademark of Anthropic; used only to identify the product being compared. Sources: [Kortix/Suna](https://github.com/kortix-ai/suna) · [Kortix docs](https://kortix.com/docs) · [OpenWork](https://openworklabs.com) · [Eigent](https://www.eigent.ai)*
