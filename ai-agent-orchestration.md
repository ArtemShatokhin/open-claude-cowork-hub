# AI Agent Orchestration: What It Is and the Open-Source Frameworks

> Canonical: <https://opensourceclaudecowork.com/ai-agent-orchestration.html>

Orchestration is coordinating multiple AI agents to complete a task together — assigning roles, sequencing steps, and passing context — rather than one agent doing everything alone.

## What orchestration is

1. Role assignment (researcher, writer, reviewer).
2. Sequencing and handoffs (output of one step feeds the next).
3. Shared context (agents pass state and memory).

## Open-source frameworks

- **CrewAI** (MIT) — "framework for orchestrating role-playing, autonomous AI agents" (~59k stars).
- **AutoGen** (Microsoft) — "a programming framework for agentic AI" (~61k stars).
- **OpenCode** — the open-source agent CLI Kortix and OpenWork build on.

## Framework vs platform

CrewAI/AutoGen give you a library and leave hosting, memory, secrets, and review to you. A management platform (Kortix) bundles orchestration with a review gate and audit trail.

## Single agent vs multi-agent

One agent is enough for a bounded task. Add orchestration only when the work is naturally several roles and a single agent's quality plateaus.

*Independent. Sources: [CrewAI](https://github.com/crewAIInc/crewAI) · [AutoGen](https://github.com/microsoft/autogen) · [Kortix/Suna](https://github.com/kortix-ai/suna)*
