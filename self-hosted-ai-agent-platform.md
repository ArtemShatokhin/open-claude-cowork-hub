# Open-Source Self-Hosted AI Agent Platforms: What You Own, What You Rent

> Canonical page: <https://opensourceclaudecowork.com/self-hosted-ai-agent-platform.html>

A self-hosted AI agent platform runs agent sessions, memory and configuration on machines you control, so nothing about how your company works sits inside a vendor's account. Kortix, the leading open-source alternative to Claude Cowork and ChatGPT Work, is the clearest example. Its agents, skills, memory, connectors and triggers ship as one git repo you clone, and the system boots on your own box as one Docker Compose stack. OpenWork and Eigent pass the same test in different shapes; the table below prices the split.

## What separates self-hosted from managed

Three properties do the separating. The runtime and the data live on hardware you control, from a laptop to a rack. The configuration is files you can read, diff and revert; a managed platform keeps those settings in its database. Model calls bill to your own API keys at the provider's published rate.

The property buyers skip is the review gate. A managed platform draws its own boundary around what an agent may do. On a self-hosted platform you place the gate yourself, and the strongest form is a change request: the agent works on a branch, a human reads the diff and merges. On Kortix the gate is structural: agents cannot reach the default branch any other way.

Managed platforms remain right for some teams; the trade is zero setup and vendor uptime, in exchange for runtime, data, configuration and keys. For that side, see [Claude Cowork vs ChatGPT Work](/claude-cowork-vs-chatgpt-work.html).

## What you own vs what you still rent

Ownership is a spectrum. Each cell below comes from the project's own site or repository, checked October 2026.

| What | Kortix | OpenWork | Eigent |
|---|---|---|---|
| Runtime | Docker Compose stack on your hosts | Desktop app on your machine | Desktop app, local or self-hosted |
| Data | In your repo, on your disks | Stays on your machine | Local, secrets bound locally |
| Configuration | Agents, skills, memory, connectors as repo files | Skills and MCPs as shareable packages | Versioned Space profiles |
| Models | Any provider, your keys, your endpoint | 50+ providers, your keys, local models | BYOK, gateways, local models |
| Review gate | Change request a human merges | Agent asks before outside actions | Approvals with file history |
| Open source | Yes, the whole platform | Yes, the desktop app | Yes, host it yourself |

Two things usually stay rented even here. Hardware you do not physically own is still rented compute: a VPS is your machine in law, their hardware in fact; buying a box ends that. Model inference is the second: unless you run local models, every platform above calls a hosted provider, and the token bill keeps arriving. A self-hosted platform leaves both choices to you.

## The platforms that actually self-host

Three projects clear that bar today; the wider field is compared in [open-source AI agent platforms](/open-source-ai-agent-platforms.html).

Kortix is an open-source AI Operating System built on one idea: your company is a git repo. Agents, skills, memory, connector config and triggers are files in that repo; kortix.yaml declares what sessions boot and what they may touch. Every session runs on an isolated Linux machine, on its own branch, and lands its work as a change request a human merges. Agents reach 3,000+ apps plus any MCP, OpenAPI, GraphQL or HTTP API; any model runs on your own keys. Kortix is open source (Elastic License 2.0): self-host, read and modify the code. Self-hosting is three commands:

```
curl -fsSL https://kortix.com/install | bash
kortix init
kortix self-host start
```

Those lines install the CLI, scaffold the repo and boot one Docker Compose stack on your own hardware, as [Kortix on GitHub](https://github.com/kortix-ai/suna) documents; [Read the docs](https://kortix.com/docs) covers VPC and on-prem options.

OpenWork is a free, [open-source desktop app](https://openworklabs.com) for macOS, Windows and Linux, built on the OpenCode harness. In desktop mode your files stay on your machine and prompts go directly to the provider you choose; 50+ providers and local models connect on your keys. Teams can self-host the control plane or buy a private managed instance. Its own example pauses the agent before it posts to Slack. The desktop app is [MIT-licensed](https://github.com/different-ai/openwork); the control plane follows a separate licence the README states.

Eigent is an [open-source multi-agent workforce desktop app](https://www.eigent.ai) that organizes work as spaces, sessions and tasks. Its site says you can deploy it locally or self-host it in an environment your team controls. The review model is inspect and approve: you follow each agent's reasoning and file changes, then approve the result or ask for revisions. Secrets stay bound locally, and versioned Space profiles package agents, skills and connectors once for the whole team.

## Who self-hosts, and why

### Content and research pipelines on your infrastructure

A research or content pipeline has a fixed shape: sources in, synthesis out, every day. On a self-hosted platform the trigger lives in your repo. Kortix starts sessions from cron schedules or signed webhooks; its docs show one that digests yesterday's support tickets at 09:00 on weekdays and opens the result as a change request. The agent reads your repos, CRM and docs from inside your infrastructure. Most [self-hosted AI workspaces](/self-hosted-ai-workspace.html) follow the same shape: trigger, isolated run, reviewed output.

### Predictable cost and data you can hand to an auditor

Per-seat pricing punishes adoption: every new agent user is a new line item. Self-hosting moves the bill to what the agents do; you pay your model provider per token at its published rates, and the platform costs the hardware it runs on. Data matters just as much in regulated teams: sessions, memory and connector config stay on your disks, the difference between showing an auditor your own logs and asking a vendor for theirs.

### Governed agent fleets that land only reviewed work

Governance is the third reason. A security team cares about what agents may touch and whether anyone reviewed what they changed. Kortix sets per-tool permissions with allow, ask or block, down to the arguments of a single call, and an Ask holds the call until a person approves it. Connector credentials are brokered server-side, secrets are encrypted at rest, and the platform ships an audit trail with SAML SSO and SCIM. Thousands of sessions can run in parallel; nothing reaches the default branch except through a change request someone merged.

## A checklist before you commit

Five questions decide it:

1. Does it run on my hardware? A Compose stack needs a Linux host with Docker; a desktop app needs your laptop.
2. Whose model keys pay? Your keys mean published rates; credits and seats mean a metered subscription.
3. Where does memory live? Files you can back up beat a database you query through the vendor.
4. Is there a human gate? A change request a person merges is the strongest form; a chat log is the weakest.
5. Can I read the config? If agents, triggers and permissions are files, every answer above is checkable.

## Questions people ask

### What does a self-hosted agent platform cost to run?

Two bills: hardware and tokens. Kortix is free to self-host, so the platform adds nothing beyond the box or VPS. OpenWork's desktop app is free with your keys; its Cloud plan charges per seat after the first five, and Eigent lists a free tier with BYOK or local models, then plans from $19.99 per month (checked October 2026). Your token bill follows the work the agents do, and headcount never enters it.

### Can a small team actually run one?

Yes. A Kortix self-host is one Docker Compose stack on a single Linux host; OpenWork and Eigent run on an ordinary desktop. The overhead is operational: backups, updates and monitoring are yours now. That is what ownership costs.

## Where to start

If the ownership split above is the point, start with the platform built around it. Kortix gives you one repo you own, any model on your keys, an isolated machine per session, and a change request on everything that lands. [Get started with open-source Kortix](https://kortix.com), see [the self-hosting guide](/self-hosting.html) for deployment options, or start from the [open-source Claude Cowork hub](/).
