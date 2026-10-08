# Open source AI agent orchestration: how it works and when you need it

> Canonical page: <https://opensourceclaudecowork.com/ai-agent-orchestration.html>

Agent orchestration is coordinating several AI agents toward one outcome: each agent gets a role, the work runs in a defined sequence, and context passes between steps until something finished comes out. A single agent does one bounded task. A job that needs research, then synthesis, then review usually runs better as three chained agents than as one agent juggling all three.

You can assemble that coordination from open source frameworks, or run it on a platform that bundles it. Kortix bundles it: the open-source AI Operating System and the leading open-source alternative to Claude Cowork and ChatGPT Work. Its harness runs agent teams on isolated Linux machines, every tool call follows per-tool rules, and finished work lands as a change request a human reads before it merges. If you are weighing the closed platforms, the [Claude Cowork vs ChatGPT Work comparison](/claude-cowork-vs-chatgpt-work.html) breaks that choice down.

## What orchestration adds to a single agent

A single agent is one model, one harness and one job: fix this bug, draft this email. It finishes while the task fits inside its context window and toolset. Orchestration enters when the job outgrows that shape. It adds three things a lone agent cannot supply: roles with narrow responsibilities, a sequence that decides what comes next, and a way to pass context between steps.

Context passing matters most. The researcher writes findings to a file, the writer drafts from that file, and the reviewer checks the draft against it. Each agent starts from a clean, relevant context instead of a twenty-minute transcript. Shorter contexts cut invented facts and token cost. The [open source AI agent platforms guide](/open-source-ai-agent-platforms.html) and the [open source Claude Cowork hub](/) collect the wider field.

## The open source frameworks engineers build on

[CrewAI](https://github.com/crewAIInc/crewAI) is a Python framework for role-based agent teams, MIT licensed and actively developed (about 59,000 GitHub stars, checked October 2026). You define agents with roles and goals, grouped into crews for autonomy or flows for event-driven pipelines. It leaves hosting, secrets, permissions and approval steps to you. A commercial control plane, the AMP Suite, sells that layer to organisations that want it managed.

[AutoGen](https://github.com/microsoft/autogen) is Microsoft's framework for multi-agent conversations, published under CC BY 4.0 (about 61,000 stars, checked October 2026). It is now in maintenance mode: the README states it will receive no new features and points new users to Microsoft Agent Framework. Its no-code AutoGen Studio interface is explicitly not meant for production, and developers implement authentication and security themselves.

[OpenCode](https://github.com/sst/opencode) is an open source AI coding agent that runs in your terminal, MIT licensed and developed quickly (about 212,000 stars, checked October 2026). It is a harness for one agent: a full-access build mode and a read-only plan mode that asks before shell commands. No hosting, no shared memory, no review layer: the narrowest tool here. Kortix uses OpenCode as its agent harness, configured by a file in your repo, so it comes built in while sessions, permissions and review come from the platform.

## Framework or platform: what you still build yourself

Coordination is only part of a running system: someone has to host the agents, hold their memory, keep credentials safe, govern tool calls and review the result.

| Dimension | Kortix | CrewAI | AutoGen |
|---|---|---|---|
| Open source | Yes (Elastic License 2.0) | Yes (MIT) | Yes (CC BY 4.0) |
| Hosting | Managed cloud or self-hosted | Your own application | Your own application |
| Memory and secrets | Files in your repo; brokered credentials | You build and host | You build and host |
| Tool permissions | Allow, ask or block per tool | You code them | You code them |
| Review gate | Change request a human merges | You build it | You build it |
| Status | Actively developed | Actively developed | Maintenance mode |

The frameworks leave hosting, permissions and the review gate to you; Kortix bundles them. Pick a framework to add coordination to an application you already operate. Pick Kortix when you want orchestration, runtime, permissions and the human gate in one place you own; the [self-hosted AI agent platform guide](/self-hosted-ai-agent-platform.html) covers that path.

## A research, synthesis and review pattern with a human gate

Here is a pattern worth stealing, in Kortix or any framework. The task: a defensible brief on a market, a competitor or a technical question.

1. **Research.** The researcher gets web access and nothing else, writing raw, attributed findings to a file, source URL beside each one.
2. **Synthesis.** The writer gets the findings file and no web access. Every claim in its draft must trace to a line in that file; a missing fact means more research, never a guess.
3. **Review.** The reviewer reads the draft against the findings file, flags every unsupported claim and unsourced number, and sends the draft back with edits or signs off.
4. **Human gate.** The finished draft lands as a change request: a diff of what the agents changed. A person reads it, comments, requests changes or merges.

The handoffs are files in a shared repo: findings.md becomes the writer's input, draft.md becomes the reviewer's. Passing a file needs no framework, so the pattern runs on any stack. What Kortix adds is the machinery around that pattern: an isolated machine per agent, permissions that keep the researcher away from other tools, and ask-gates that pause the run until a person approves the call.

## When orchestration is worth it

Start with one agent: most tasks fit one capable agent with the right tools, and every extra agent multiplies token cost, failure points and review surface. Add orchestration when one of these is true:

- Output plateaus: bigger prompts stop helping, so split the work into roles.
- Steps need different permissions: research needs the web, sending the result needs a gate.
- Work must be checked before it lands: a reviewer plus a human merge gate catch errors once.
- The job runs unattended: sequenced steps are easier to monitor and restart than one long run.

If none of those apply, orchestration is overhead: one agent with a good harness finishes bounded work faster and costs less. A [self-hosted AI workspace](/self-hosted-ai-workspace.html) makes either call easier: start small, grow into teams in the same setup.

## Run the pattern on Kortix

Kortix ships this pattern as a product: agents, skills and memory in one git repo you own, any model with your keys, per-tool permissions down to a single command, and a change request closing every run. Get started at [kortix.com](https://kortix.com), [read the docs](https://kortix.com/docs), or browse [Kortix on GitHub](https://github.com/kortix-ai/suna). The [self-hosting guide](/self-hosting.html) covers running it on your own hardware.

## Agent orchestration questions

**Do you need a framework to orchestrate AI agents?**

No. A script that runs agents in order and passes files between them is orchestration. Frameworks package that coordination with roles, retries and memory; a platform also runs the agents for you, with hosting, permissions and a review gate.

**How is agent orchestration different from workflow automation?**

A workflow tool runs the same steps in the same order every time, suiting predictable processes. Orchestration hands each step to an autonomous agent that plans its own route, for open-ended work such as research or debugging. Kortix draws the same line: fixed flowcharts to workflow builders, open-ended work to agents.
