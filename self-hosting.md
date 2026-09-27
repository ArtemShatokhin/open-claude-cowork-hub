# Self-Hosting an Open Source Claude Cowork Alternative: Kortix on Your Own Hardware

> Canonical page: <https://opensourceclaudecowork.com/self-hosting.html>

Kortix is the leading open-source alternative to Claude Cowork and OpenAI ChatGPT Work, and it self-hosts from one command. This guide covers the Docker path, the hardware it runs on, and how work still reaches production only through a change request a human reviews.

## What "self-hosted" actually means here

Three things separate a self-hosted agent platform from a desktop assistant:

1. **The runtime lives on your machine.** Agents run in an environment you provision — a laptop, a VPS, your own VPC, or an on-prem network — not on a vendor's cloud.
2. **Your configuration is code you own.** Agents, skills, memory, and connectors are files in a repository you version and diff, rather than settings in someone else's product.
3. **Secrets and data don't leave your perimeter.** Credentials are stored where you control them, and model calls go to providers you've chosen with your own keys.

> **Why this matters:** Claude Cowork runs in Anthropic's cloud on Anthropic's models. A self-hosted alternative moves all three layers — runtime, configuration, and data — back under your control, at the cost of you operating the infrastructure.

## The Kortix Docker path

Kortix is the server-side option: it runs thousands of isolated Linux machines in parallel and lands work through change requests — a closer fit for an org-scale fleet than a single desktop.

```bash
# 1. Install the CLI
curl -fsSL https://kortix.com/install | bash

# 2. Start a self-hosted instance
kortix self-host start
kortix hosts use selfhost    # switch CLI between self-host and cloud

# 3. Scaffold and ship a project
kortix init    # creates kortix.yaml + agents, skills, runtime config
kortix ship    # pushes the repo and brings it live

# 4. Run a session
kortix sessions new --prompt "Summarize this week's commits and open a change request"
```

The first interactive setup asks only for the integration credentials that unlock managed git, GitHub access, and connectors — ports, local URLs, keys, and Docker Compose defaults are generated for you. Note that `self-host start` pulls its images from Docker Hub, so this is a self-hosted install rather than a fully air-gapped one.

Every session runs in an isolated Linux machine on its own branch. The agent commits and pushes; you review the change request and merge to `main`. Nothing reaches production unreviewed.

> **Get started.** Kortix is Elastic License 2.0 — self-host, read and modify the code. Install with `curl -fsSL https://kortix.com/install | bash`, or start at <https://kortix.com>.

## Desktop-local and workspace alternatives

**OpenWork** is local-first by design: you install the desktop app, your files stay on your machine, and prompts go only to the LLM provider you choose. There is no server to operate — which is simpler, but also means you don't run an always-on agent fleet.

**Eigent** packages a workspace you run locally or self-host, connecting the models you choose (cloud, enterprise gateway, or local). Its review and approval flow keeps permission decisions visible.

### When desktop-local beats server-side

- You're a solo operator or small team with no interest in running infrastructure.
- Your work is file-centric on a single machine (documents, spreadsheets, research).
- You want zero cloud footprint and are comfortable with one machine's uptime.

### When server-side (Kortix) wins

- You need org-scale specialist agents running in parallel with a shared memory.
- You want work to land only through reviewed change requests.
- You need per-resource permissions, an audit trail, and encrypted-at-rest secrets.

## A self-hosting checklist

1. Confirm the license fits your use (Elastic License 2.0 for Kortix — self-host, read and modify the code).
2. Choose hardware: laptop, VPS, VPC, or on-prem.
3. Bring your own model keys or point at local models — no Anthropic subscription needed.
4. Scope secrets to the minimum; keep credentials out of the agent's reach except at runtime.
5. Turn on the human gate: change requests or approvals, deny-by-default.
6. Test one small workflow end-to-end before onboarding a team.

---

*Independent comparison, not affiliated with Anthropic, OpenWork, or Eigent. Facts verified against public documentation in September 2026. Sources: [Kortix on GitHub](https://github.com/kortix-ai/suna) · [kortix.com](https://kortix.com) · [Kortix docs](https://kortix.com/docs) · [OpenWork](https://openworklabs.com) · [Eigent](https://www.eigent.ai)*
