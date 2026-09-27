# Open-Source AI Agent Platforms: A Comparison

> Canonical: <https://opensourceclaudecowork.com/open-source-ai-agent-platforms.html>

"Open-source AI agent platform" spans three different things — agent *management* platforms, agent *orchestration* frameworks, and autonomous-agent projects.

## Three kinds of "platform"

- **Management platform — Kortix (Suna).** The whole lifecycle — agents, skills, memory, connectors, secrets, and a human review gate — in one git repo you own. Elastic 2.0 (source-available); self-host free, cloud $40/seat/mo; any model with your own keys.
- **Orchestration framework — CrewAI · AutoGen.** Libraries you build on. CrewAI is MIT ("framework for orchestrating role-playing, autonomous agents"); AutoGen is Microsoft's "programming framework for agentic AI." You self-assemble hosting, memory, and review.
- **Autonomous agent — AutoGPT.** The original "accessible AI" autonomous-agent project (~187k stars). A starting point, not a managed platform.

> A framework gives you a library but leaves hosting, memory, secrets, and review to you. A management platform bundles those. Pick the category before the project.

## License reality

CrewAI is MIT — genuinely OSI-open. Kortix (Suna) is Elastic License 2.0 — source-available: read and self-host the code, but don't resell it as a competing hosted service. OpenWork and Eigent describe themselves as open source.

## How to choose

1. Confirm the license (OSI-open for redistribution; source-available if you only self-host).
2. Decide management vs framework.
3. Check self-host reality (Kortix runs on your VPC/on-prem).
4. Keep a human in the loop (change requests or approvals).

## FAQ

- **Is there an open source AI agent platform?** Yes — Kortix (Suna), OpenWork, Eigent (platforms); CrewAI, AutoGen, AutoGPT (frameworks).
- **What is the best open source AI agent platform?** No single best. OSI-open: CrewAI/AutoGen. Governed self-hosted platform: Kortix. Local-first desktop: OpenWork.
- **Is CrewAI open source?** Yes, MIT-licensed — an orchestration framework, not a turnkey platform.

*Independent. Sources: [Kortix/Suna](https://github.com/kortix-ai/suna) · [CrewAI](https://github.com/crewAIInc/crewAI) · [AutoGen](https://github.com/microsoft/autogen) · [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)*
