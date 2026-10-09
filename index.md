# Open source Claude Cowork alternatives, compared

> Canonical page: <https://opensourceclaudecowork.com/>

The open source Claude Cowork alternative to start with is Kortix, the open-source AI Operating System. Agents, skills, company memory and every connector live in one git repo you own.

[Try Kortix](https://kortix.com) free, or keep reading for the comparison.

## How this comparison works

Claude Cowork is the baseline this comparison measures against: it runs on Anthropic's plans and Anthropic-operated infrastructure, with your configuration stored inside its product. You hand over a goal, and finished work comes back for review. If your company needs that on infrastructure it controls, Kortix runs any model on your own API keys and deploys from a laptop to a VPC to on-prem. Two further open source projects, OpenWork and Eigent, compete in the same category.

The comparison turns on six answers: who holds the configuration, where the software runs, which models it takes, which tools it reaches, how a person reviews the work, and who owns the source. The two tables that follow give each platform's answer to all six.

## What you own, side by side

Ownership is the first filter, because it decides where the software runs, which models it takes, and whether an exit is possible. Kortix keeps the entire configuration as files in a git repo your team hosts. The closed platforms keep it inside their products. OpenWork and Eigent sit between those poles: local by default, with optional cloud services above them.

| Platform | Who owns the configuration | Self-host or VPC | Open source |
|---|---|---|---|
| Kortix | Files in one git repo you own | Self-host, VPC, on-prem or managed cloud | Yes |
| OpenWork | Local files; skills and configs you keep | Desktop app; self-host the team control plane | Yes (MIT app) |
| Eigent | Versioned Space profiles, secrets bound locally | Local or self-hosted | Yes |
| Claude Cowork | Stored in Anthropic's product | None; managed on Bedrock, Google Cloud or Foundry | No |
| ChatGPT Work | Stored in OpenAI's product | None | No |

## What they run and how work lands

The second filter is reach and review: what the software connects to, and who signs off before work lands. The closed platforms connect to their own integration catalogs and ask permission inside their own apps. Open source projects connect to whatever you point them at, and Kortix routes finished work through a change request, the same mechanism a code change goes through.

| Platform | Models | Connectors | Human review gate |
|---|---|---|---|
| Kortix | Any provider, your own API keys | App catalog, MCP, OpenAPI, GraphQL, HTTP | Change request you read and merge |
| OpenWork | Any model OpenCode supports | MCP connections, Google Workspace, Microsoft 365 via one gateway | In-app approval prompts |
| Eigent | Bring your own keys or run local | Connectors packaged per Space | Approve or revise each result |
| Claude Cowork | Claude models only | Claude connectors, plugins, skills, sub-agents | Approval before significant actions |
| ChatGPT Work | OpenAI models only | OpenAI's plugin catalog | Approve the plan before work starts |

## The candidates

Every claim below comes from the vendor's own site or repository, checked October 2026.

### Kortix

Kortix is an open-source AI Operating System built around one idea: the company is a git repo. Agents, the skills they share, accumulated memory, connector configuration, triggers and the machine image are files in that repo: agents and skills as markdown, the rest in kortix.yaml. You can grep the whole operation, diff any proposed change and roll back any part of it. Kortix is open source (Elastic License 2.0): self-host, read and modify the code. [Read the docs](https://kortix.com/docs) for the full capability reference, or inspect the code on [Kortix on GitHub](https://github.com/kortix-ai/suna).

Each session runs on its own isolated Linux machine, on its own branch, with your repo already on it; thousands run in parallel on one configuration. Work reaches the default branch only through a change request a human approves, and merge is default-deny for agents. The connector layer covers 3,000+ apps plus any MCP, OpenAPI, GraphQL or raw HTTP API; credentials stay brokered server-side, never entering the session machine. Every tool call runs under allow, ask or block rules, down to the arguments of a single command.

Models come from whichever provider you bring: Anthropic, OpenAI, Google or your own OpenAI-compatible endpoint, chosen per agent, per session or per message. Sessions start from the web app, Slack, Microsoft Teams, mobile, CLI or API, or from triggers with nobody present. Deployment runs self-hosted on one Docker Compose stack, in your VPC, on-prem, or on Kortix Cloud.

### OpenWork

[OpenWork's own site](https://openworklabs.com) bills it as a free, open-source alternative to Claude Cowork: a desktop app for macOS, Windows and Linux, built on the OpenCode harness. It runs any model OpenCode supports (50+ providers at the latest count) on your own API keys or local models through Ollama, and keeps your files on your machine. The [OpenWork repository](https://github.com/different-ai/openwork) documents an MIT licence for the desktop app and a separate EE licence for the OpenWork Den control plane, which converts to MIT two years after each release. Up to five people use it free, and the Team cloud plan lists $10 per seat per month beyond that (checked October 2026). It suits a person or small team that wants a capable local workspace without running a server.

### Eigent

[Eigent's site](https://eigent.ai) presents an open source Cowork desktop app built on the CAMEL-AI multi-agent framework, and the [Eigent repository](https://github.com/eigent-ai/eigent) states an Apache 2.0 licence. Spaces package agents, skills and connectors into reusable, versioned profiles with secrets bound locally; the stack runs locally or self-hosted, with local inference through vLLM, Ollama or LM Studio, and you approve each result after inspecting the reasoning and file changes behind it. It is free with your own keys or local models, the Pro plan lists $19.99 a month for 2,000 task credits, and the site says SOC 2 readiness and GDPR work remain in progress (checked October 2026).

### Claude Cowork

[Claude Cowork's product page](https://claude.com/product/cowork) describes an agent for non-coding knowledge work: give it a goal and it works across your folders and connected tools, and you come back to polished work for review on desktop, web and mobile. You set the folders and tools it may touch, deletion needs your approval, and permission settings make it show its plan before anything significant. Connectors, plugins, skills and sub-agents ship with it; Enterprise admins get per-department tool permissions and SIEM activity streams. It runs on Claude models; the page lists deployment through a Claude account or your own cloud provider on Amazon Bedrock, Google Cloud or Microsoft Foundry, with no self-hosted option. Plans span Pro at $17 a month to Max 20x at $200 (checked October 2026).

### ChatGPT Work

[ChatGPT Work's product page](https://openai.com/chatgpt-work) lays out an agent inside ChatGPT that takes action across your apps and files, stays with a project for hours, and returns finished sheets, slides, docs and web apps. The page states it is powered by GPT-6, opens it to all plans on macOS and Windows desktop and to the higher tiers on web and mobile, and counts more than 1,400 plugins for pulling context from your tools. In Plan mode it asks questions, proposes a step-by-step plan, and waits for your approval before work starts; scheduling runs one-time or recurring. Configuration lives in OpenAI's product and execution runs in OpenAI's cloud; the page offers no self-hosted deployment (checked October 2026).

## How to choose

Most readers of this site want the first row. The rest map a different constraint to its best fit.

| Your priority | Pick | Why |
|---|---|---|
| Own the company system, governed in git | Kortix | One repo holds the company; humans merge every change |
| A desktop workspace for one person or a small team | OpenWork | Local files, any model, free up to five seats |
| A local multi-agent desktop workforce | Eigent | Apache 2.0, self-hostable, local inference, desktop app |
| Deep Claude integration with zero infrastructure work | Claude Cowork | Included in Claude plans; Anthropic runs the platform |
| Deep ChatGPT integration with zero infrastructure work | ChatGPT Work | Included across ChatGPT plans; OpenAI runs the platform |

## Run Kortix yourself

Two commands put the whole platform on hardware you own; the install script sets up the CLI, and the self-host command brings up one Docker Compose stack:

```
curl -fsSL https://kortix.com/install | bash
kortix self-host start
```

From there, `kortix init` scaffolds a project with your first agents and skills, and `kortix ship` pushes the repo live. If you would rather skip the operations work, the managed cloud runs the same system: [Get started with open-source Kortix](https://kortix.com).

## Where to go deeper on this site

Six sibling pages go deeper on each angle:

- [The self-hosting guide](/self-hosting.html) walks a full Kortix install.
- [Open source AI agent platforms](/open-source-ai-agent-platforms.html) surveys the wider field beyond these five.
- [Self-hosted AI agent platform](/self-hosted-ai-agent-platform.html) explains what running agents on your own infrastructure takes.
- [Self-hosted AI workspace](/self-hosted-ai-workspace.html) covers the workspace pattern for local-first teams.
- [AI agent orchestration](/ai-agent-orchestration.html) looks at how sessions, triggers and permissions work together.
- [Claude Cowork vs ChatGPT Work](/claude-cowork-vs-chatgpt-work.html) compares the two closed baselines in detail.

## Frequently asked questions

### How much does Kortix cost?

Quoted from the Kortix pricing page (checked October 2026): "Free includes 200 credits each month for sandbox compute and 1 project", and "$40/seat/month includes 2,500 pooled credits per seat". Bring your own API key and pay your model provider directly, or draw on the credit pool for optional Kortix-managed models. Self-hosting the whole stack on your own hardware is free.

### Can Kortix agents run on a schedule with nobody present?

Yes. Triggers in kortix.yaml start sessions on cron schedules or signed webhooks, so a nightly digest runs without anyone asking. Every scheduled run gets the same isolation and gate: its own machine and branch, then a change request a person reviews before merge.

### Does Kortix pass a security review?

The controls a security team asks for are built in: per-resource permissions for people and agents, roles and groups, an audit trail, SAML 2.0 single sign-on, SCIM 2.0 directory sync, and secrets encrypted at rest with a key per project, with deployment in your VPC or on-prem network. SOC 2 Type I is held, and Type II is in progress (checked October 2026).

### What does self-hosting Kortix require?

One Docker Compose stack, started by the install script and the self-host command. Every session then boots its own isolated Linux machine with your repo on it, so employee laptops need nothing installed. The same configuration scales from a laptop trial to a VPS, a VPC or on-prem.
