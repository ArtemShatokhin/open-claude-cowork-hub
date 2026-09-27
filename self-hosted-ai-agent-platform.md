# Self-Hosted AI Agent Platform: Definition, Examples, How to Choose

> Canonical: <https://opensourceclaudecowork.com/self-hosted-ai-agent-platform.html>

A self-hosted AI agent platform runs your agents on hardware you control — your laptop, a VPS, your VPC, or on-prem — rather than a vendor's cloud.

## What "self-hosted AI agent platform" means

1. **The runtime lives on your machine.** Agents run in an environment you provision, not a vendor's cloud.
2. **Your configuration is code you own.** Agents, skills, and memory are versioned files in your repo.
3. **Secrets and data stay in your perimeter.** Credentials stored where you control them; model calls to providers you chose.

## Examples

- **Kortix (Suna)** — server-side, Docker, your VPC/on-prem; Elastic 2.0 (source-available); self-host free.
- **OpenWork** — local-first desktop (macOS/Windows/Linux); open source; desktop free.
- **Eigent** — workspace run locally or self-hosted; open source; BYOK or local models.

## Use cases

- **Marketing** — research, drafting, and competitive briefs kept inside your perimeter.
- **Small business** — predictable cost (self-hosting is free), owned data.
- **Engineering** — governed agent fleets landing work through reviewed change requests.

## How to choose

1. Confirm the license (OSI-open vs source-available).
2. Pick hardware: laptop, VPS, VPC, or on-prem.
3. Bring your own model keys or local models.
4. Turn on the human gate (change requests or approvals).

*Independent comparison. Sources: [Kortix/Suna](https://github.com/kortix-ai/suna) · [OpenWork](https://openworklabs.com) · [Eigent](https://www.eigent.ai)*
