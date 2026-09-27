# AI Agent Orchestration: What It Is and the Open-Source Frameworks

> Canonical: <https://opensourceclaudecowork.com/ai-agent-orchestration.html>

Orchestration coordinates multiple agents toward one outcome — assigning roles, sequencing steps, and passing context. Kortix bundles it: a real agent harness (OpenCode) runs multi-step agent teams with per-tool permissions, and the result lands as a change request a human reads as a diff. This page covers what orchestration is and the open-source frameworks that do it.

## What orchestration is

1. Role assignment (researcher, writer, reviewer).
2. Sequencing and handoffs (output of one step feeds the next).
3. Shared context (agents pass state and memory).

## Open-source frameworks

- **CrewAI** (MIT) — "framework for orchestrating role-playing, autonomous AI agents" (~59k stars).
- **AutoGen** (Microsoft) — "a programming framework for agentic AI" (~61k stars).
- **OpenCode** — the open-source agent harness that powers Kortix. Planning, tool use, multi-step runs that finish, and permissions per tool down to a single command.

## Framework vs platform

CrewAI/AutoGen give you a library and leave hosting, memory, secrets, and review to you. Kortix bundles orchestration with a review gate and audit trail. Start at <https://kortix.com>.

## Single agent vs multi-agent

One agent is enough for a bounded task. Add orchestration only when the work is naturally several roles and a single agent's quality plateaus.

*Independent. Sources: [CrewAI](https://github.com/crewAIInc/crewAI) · [AutoGen](https://github.com/microsoft/autogen) · [Kortix on GitHub](https://github.com/kortix-ai/suna)*
