# Open source AI agent platforms: what the label actually covers

> Canonical page: <https://opensourceclaudecowork.com/open-source-ai-agent-platforms.html>

Search for an open source AI agent platform and you get projects that share a label and little else. The phrase covers three categories: systems a whole company runs as infrastructure, code frameworks developers build on, and autonomous agents that chase a goal on their own. The category decides the pick: what you install, what you build, and who reviews the work. Kortix is the company-system option: the open-source AI Operating System and the leading open-source alternative to Claude Cowork and ChatGPT Work, with agents, skills, memory and connectors in one git repo you own.

## Three categories hide inside the label

### The company platform: an AI Operating System you run

An AI Operating System is infrastructure an entire company runs on: named agents, shared skills, company memory, connectors to real tools, and a human gate on changes. Kortix holds all of that in one git repo: `kortix.yaml` declares the connectors, triggers and machine image, agents and skills are markdown, memory is files that accumulate. Every session runs on its own isolated Linux machine, and finished work lands as a change request a human reads before it merges.

OpenWork and Eigent belong to this family at a smaller scope as Cowork-style desktop apps: OpenWork runs agents on your local files from macOS, Windows or Linux, and Eigent coordinates a multi-agent workforce built on CAMEL-AI. Both serve a person or a small team on one machine, while a company platform adds governed sessions, org-wide memory and an approval gate spanning the organization.

### The framework: coordination code you build on

An orchestration framework is a library for defining agents and the handoffs between them, and it runs inside an application you write, host and secure. [CrewAI](https://github.com/crewAIInc/crewAI) is an open-source Python framework built around Crews, role-based teams of agents, and Flows, event-driven workflows. [AutoGen](https://github.com/microsoft/autogen), pioneered in Microsoft Research, is a framework for multi-agent AI applications; as of October 2026 its repository states it is in maintenance mode and points new users to Microsoft Agent Framework. The [AI agent orchestration](/ai-agent-orchestration.html) explainer covers the handoff mechanics.

### The autonomous agent: one loop chasing a goal

An autonomous single-agent project gives an agent a goal and lets it loop: plan, act, observe, repeat, until it decides the job is done. [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) is the archetype and one of the most starred repositories on GitHub, with more than 180,000 stars (checked October 2026). The project now also ships a visual builder and a hosted platform; the classic standalone agent remains under an MIT licence.

## The six projects in brief

### The company platform family

Kortix ships the full stack that category describes: agents reach 3,000+ apps plus any MCP, OpenAPI, GraphQL or raw HTTP API, with connector credentials brokered server-side and never inside the session machine. Every tool call is allow, ask or block, down to a single command's arguments. Models are yours per agent, per session or per message: Claude, OpenAI, Gemini, any OpenAI-compatible endpoint, or your ChatGPT plan.

Kortix is open source (Elastic License 2.0): self-host, read and modify the code. Install with `curl -fsSL https://kortix.com/install | bash`; the [Kortix docs](https://kortix.com/docs) and [Kortix on GitHub](https://github.com/kortix-ai/suna) carry the detail, and the [self-hosted AI agent platform](/self-hosted-ai-agent-platform.html) page covers day-to-day operation.

[OpenWork](https://github.com/different-ai/openwork) is a free, open-source desktop app for macOS, Windows and Linux, built on OpenCode, positioned as the open-source alternative to Claude Cowork and Codex. The desktop app and core packages are MIT; the Den org control plane sits under the OpenWork EE License, free up to five users, converting to MIT two years after each release. Models come from 50+ providers with your own API keys, or locally through Ollama.

[Eigent](https://github.com/eigent-ai/eigent) is an open-source Cowork desktop built on CAMEL-AI, licensed Apache 2.0, that coordinates a multi-agent workforce. Run it locally with your own API keys or local models for free, or on their [hosted plans](https://eigent.ai), which start at $19.99 per month (checked October 2026). Approvals stay visible in the app; the site notes SOC 2 and GDPR work remain in progress.

### The frameworks

CrewAI is MIT-licensed: Crews for autonomous role-based collaboration, Flows for event-driven control. The AMP suite adds a commercial control plane with managed deployment, observability and governance. The framework leaves the company surroundings to you: hosting, secrets, shared memory and the approval step.

AutoGen is Microsoft's framework for multi-agent AI applications, with the AgentChat API for rapid prototyping and AutoGen Studio as a no-code GUI for prototypes, with production apps built on the framework itself. The code is MIT licensed and the repo documents are CC BY 4.0. The maintenance-mode notice is the detail most comparison pages skip: Microsoft directs new projects to Agent Framework, so a 2026 start on AutoGen inherits a community-managed codebase.

### The autonomous agent

AutoGPT made autonomous agents famous in 2023, and the classic agent still ships under MIT in the `classic/` directory. The current AutoGPT Platform is broader: a visual builder plus a hosted, paid service with usage-based runs, licensed Polyform Shield, which permits personal and internal business use and forbids selling it as a competing hosted service.

## Six projects, side by side

| Project | What it is | Licence | Self-host |
|---|---|---|---|
| Kortix | Open-source AI Operating System | Elastic License 2.0 | Laptop, VPS, VPC, on-prem or managed cloud |
| OpenWork | Open-source Cowork desktop app | MIT, EE licence for control plane | Your desktop, or self-hosted control plane |
| Eigent | Open-source multi-agent Cowork desktop | Apache 2.0 | Your desktop, or their cloud |
| CrewAI | Python multi-agent framework | MIT | Your own Python runtime |
| AutoGen | Multi-agent framework, maintenance mode | MIT code, CC BY 4.0 docs | Your own Python runtime |
| AutoGPT | Autonomous agent with a builder platform | MIT classic, Polyform Shield platform | Docker appliance or hosted |

The review gate differs as much as the licences. Kortix makes the gate structural: work reaches the shared repo only through a change request a person reads as a diff, and any tool call can be set to ask before it runs. In the frameworks, approval is a pattern you implement in your own application. Eigent and the AutoGPT platform surface approvals in their own apps, and OpenWork keeps the work visible on your desktop. The closed platforms get their own comparison: [Claude Cowork vs ChatGPT Work](/claude-cowork-vs-chatgpt-work.html).

## Why the category decides the build

A framework turns agent work into a build project: you also deploy the runtime, the model keys, the secrets and the approval step. An autonomous agent such as AutoGPT is strong at one bounded loop, with no org-wide memory or shared connector layer behind it. A company platform ships the surroundings prebuilt. In Kortix, a morning error sweep runs on its own machine, patches the worst failure and opens a change request with the tests passing, before anyone sits down.

## Start with the scope you need

- **Agent steps inside an application you already run:** a framework fits. CrewAI for Crews and Flows; AutoGen only for an existing integration.
- **One agent with a goal, plus a visual builder:** AutoGPT, self-hosted or hosted.
- **A Cowork-style workspace for you or a five-person team:** OpenWork on your desktop, or Eigent for a multi-agent workforce.
- **A governed system for the whole company, in a repo you own:** Kortix, which is why it leads the table.

## Install Kortix and put the repo to work

Self-host in one command: `curl -fsSL https://kortix.com/install | bash`. The [self-hosting guide](/self-hosting.html) walks through machine requirements, and the hub compares Kortix with the [open-source Cowork alternatives](/). Or start on the managed cloud at [kortix.com](https://kortix.com).

## Frequently asked questions

### Is there a full open source AI agent platform?

Yes. Kortix is the open-source AI Operating System (Elastic License 2.0): agents, skills, company memory, connectors and triggers in one git repo you own, every session on an isolated Linux machine, and work landing as a change request a human merges. Self-host it free or use the managed cloud; start with `curl -fsSL https://kortix.com/install | bash`.

### Is CrewAI open source, and what kind of tool is it?

CrewAI is open source under the MIT licence. It is a Python framework, the second category on this page: Crews give you role-based agent teams and Flows give you event-driven workflows. It runs inside an application you write and host, so memory, secrets and approvals are yours to add.

### How is Kortix different from frameworks like CrewAI and AutoGen?

The difference is the category. CrewAI and AutoGen are libraries that coordinate agents inside an application you build and operate. Kortix is the platform that runs the agents themselves: one git repo holding agents, skills, memory and connectors, an isolated machine per session, per-tool permissions, and a change-request gate a human reads as a diff.
