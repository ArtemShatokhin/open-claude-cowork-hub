# Open Source vs Source-Available: What the License Actually Means

> Canonical: <https://opensourceclaudecowork.com/open-source-vs-source-available.html>

"Open source" is doing a lot of work in the AI agent space. Two projects can both call themselves open while granting very different rights.

## Two license families

- **OSI open source** (MIT, Apache-2.0, GPL) — broad rights to use, modify, and redistribute, including commercially. Examples: CrewAI (MIT), AutoGen.
- **Source-available** (Elastic 2.0, BUSL) — code published and self-hostable, but one or more uses restricted (typically reselling as a competing hosted service). Kortix (Suna) uses Elastic 2.0.

## Why it matters

1. Self-hosting only? Both families work.
2. Fork and redistribute? You need OSI-open (MIT/Apache-2.0).
3. Procurement review? Check the license file, not the marketing page.

## Kortix, honestly

Suna is Elastic License 2.0 — source-available, not OSI-open. You can read, fork, and self-host it; you can't resell it as a competing managed service. If you need OSI-open, weigh CrewAI, AutoGen, OpenWork, or Eigent.

*Independent. Sources: [Kortix/Suna](https://github.com/kortix-ai/suna) · [CrewAI](https://github.com/crewAIInc/crewAI) · [AutoGen](https://github.com/microsoft/autogen)*
