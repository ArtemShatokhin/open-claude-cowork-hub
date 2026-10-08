# Self-host an open-source Claude Cowork alternative with Kortix

> Canonical page: <https://opensourceclaudecowork.com/self-hosting.html>

Self-hosting an open-source Claude Cowork alternative comes down to one Docker Compose stack on a Linux box. Kortix, the open-source AI Operating System, is the leading open-source alternative to Claude Cowork and ChatGPT Work. Its self-host install is two CLI commands: `kortix self-host init` renders the stack, and `kortix self-host start` runs it. The runtime, the configuration and the data sit on hardware you control, and agent work reaches your repository only through change requests a human merges.

Self-hosted has a precise meaning here. The Compose stack holds the frontend, the API, the LLM gateway and a vendored Supabase distribution, all on your box. Agents, skills, company memory and connector configuration live in one git repository you own, and every model call runs on your own API keys. Claude Cowork itself has no self-hosted mode; OpenWork's [feature table](https://openworklabs.com) records self-hosting as unavailable for it. The guide to [self-hosted AI agent platforms](/self-hosted-ai-agent-platform.html) defines the properties that separate one from a hosted service.

Kortix is open source (Elastic License 2.0): self-host it, read it and modify it. The code is on [Kortix on GitHub](https://github.com/kortix-ai/suna).

## The install, command by command

The [Kortix self-hosting docs](https://kortix.com/docs) document two routes: a one-shot bootstrap script that installs Docker, the CLI and the stack in a single command on a bare Linux box, and a manual path through the CLI. The manual path is worth knowing in its own right, because it shows exactly what the bootstrap automates.

1. Install the CLI: `curl -fsSL https://kortix.com/install | bash`. The installer ships a prebuilt binary for macOS and Linux; Windows is unsupported.
2. Point DNS and open ports. Create A or AAAA records for your domain and for `api.<domain>`, both aimed at the box, and open ports 80 and 443 so the bundled Caddy proxy can issue its TLS certificate.
3. Render the stack: `kortix self-host init --domain kortix.example.com`. The command writes `docker-compose.yml`, `.env`, a Caddyfile and an updater script into `~/.config/kortix/self-host/<instance>/`, with ports, URLs and keys already generated.
4. Start it: `kortix self-host start`, which runs `docker compose up` for you.
5. Watch it settle: `kortix self-host status`, `kortix self-host logs` and `kortix self-host doctor` report progress while the containers come up.
6. Add the two credentials: `kortix self-host configure` prompts for the sandbox provider key and, optionally, a managed-git token. Sign in to the dashboard afterward and connect your own LLM key in the model picker; self-hosted instances use your own key by default.

Init generates the mechanical parts, so the human inputs reduce to two credentials and a model key.

## Where the install lives on disk

One directory holds the entire instance: `~/.config/kortix/self-host/<instance>/`. Inside the Compose file sit the three application images (frontend, API, LLM gateway), the vendored Supabase distribution (Kong, GoTrue auth, PostgREST, Storage, Realtime, Studio and the Supavisor pooler, every image pinned by digest), and Caddy plus the updater container once a domain is set.

| Under `~/.config/kortix/self-host/<instance>/` | What it holds |
|---|---|
| `docker-compose.yml`, Caddyfile, updater script | The rendered stack definition and settings |
| `volumes/db/data` | The Postgres database |
| `volumes/storage` | File storage |
| `.env` | Every secret and signing key the instance uses |

Memory has a documented default. Each API container is capped at 640 MiB, which the [docs](https://kortix.com/docs) size for an 8 GiB host. On a 16 GiB host whose API traffic reaches that cap, raise the limit to 1 GiB with `kortix self-host env set KORTIX_API_MEMORY_LIMIT=1024m`, then confirm the result with `docker stats --no-stream`.

Treat those paths as the backup set. Kortix has no separate backup system, so copy `volumes/db/data`, `volumes/storage` and `.env` somewhere off the box before you run any destructive command.

## Evaluate first with a tunnel

A first look needs no DNS. Run `kortix self-host init --tunnel cloudflare`, then `kortix self-host start`, and the stack comes up behind a Cloudflare tunnel. The tunnel URL changes on every restart, so treat this mode as evaluation-only.

A persistent domain matters for reasons beyond certificates. Caddy needs a stable name to issue TLS, and agent sandboxes need a stable URL to call back to the API; with neither a domain nor a tunnel, sessions cannot run at all. The domain is the one configuration step that separates a trial from a deployment.

## The merge gate on every change

A session runs an agent on an isolated Linux sandbox, on its own branch, powered by the OpenCode harness. The agent plans, runs tools, commits and pushes. When the work is ready, it opens a change request.

1. A session starts, from the dashboard, Slack, Teams, email, the CLI or an API call.
2. Its agent runs on an isolated sandbox machine with its own branch.
3. The agent commits and pushes the work it did.
4. A change request opens against the project.
5. You read the diff and merge it into the default branch.

From the CLI, the same review is `kortix cr ls` to list change requests, `kortix cr diff 1` to read the patch and `kortix cr merge 1` to land it. Nothing reaches the default branch unreviewed, however the session was started. On a self-hosted box that gate is the point: the agent holds broad tool access inside its sandbox, and the change request is where you keep control. How sessions and reviewers fit into a wider agent operation is the subject of the [AI agent orchestration guide](/ai-agent-orchestration.html).

## What still touches the internet

Two facts matter for planning. First, `kortix self-host start` pulls images from the Kortix organization on Docker Hub, and the bundled updater checks for new images once a day at a fixed local hour (2 a.m. by default); the registry needs no credentials. A self-hosted Kortix keeps its runtime, configuration and data on your box, and it is not an air-gapped install. You can pin an exact version with `kortix self-host update --tag 0.9.84`, or turn auto-update off entirely.

Second, agent sandboxes run off the box. Sessions execute on a separate sandbox provider, Daytona by default, with Platinum and E2B as supported alternatives; the API reaches the provider over egress, and sandbox compute never runs on your hardware. The split keeps parallel sessions off your machine, at the cost of one outbound dependency to plan for.

## Sizing the host

- An 8 GiB host is enough with defaults: keep the 640 MiB per-container API limit.
- A 16 GiB host earns its extra memory under heavy API traffic: raise the limit to 1 GiB.
- The same rendered stack runs unchanged on a laptop, a VPS or any cloud VM; moving to a domain changes one setting, `KORTIX_DOMAIN`.
- Placement is your call: a VPS, a VPC or on-prem hardware all run the same artifact, provided the domain and ports 80 and 443 are in place.

## Narrower alternatives, briefly

Kortix is the recommendation for a governed company system on your own infrastructure. Two other open-source projects fit narrower shapes.

[OpenWork](https://openworklabs.com) is a free, open-source desktop app for macOS, Windows and Linux, built on OpenCode. It runs local-first on your own files with your own model keys, and teams add central management through OpenWork Cloud. It fits an individual workstation best; the team layer lives in its cloud plans.

[Eigent](https://www.eigent.ai/docs) is an open-source desktop app for assembling a multi-agent workforce, built on the CAMEL-AI framework. It deploys locally with your own API keys or local models, and it asks for human input when a task stalls. Teams that want a local agent workspace with a checkpoint in the loop are its audience.

The guide to [open-source AI agent platforms](/open-source-ai-agent-platforms.html) covers the wider field, including these two in context. For the workspace angle in particular, the [self-hosted AI workspace guide](/self-hosted-ai-workspace.html) goes deeper.

## Before you onboard the team

Work through this list before the first teammate signs in:

- A persistent domain with A or AAAA records for the domain and `api.<domain>`, and ports 80 and 443 open.
- A sandbox provider key: Daytona by default, or Platinum or E2B if you prefer.
- Model keys connected in the dashboard's model picker.
- Off-box copies of `volumes/db/data`, `volumes/storage` and `.env`.
- An update policy: the stable channel by default, or a pinned version with auto-update off.
- Named reviewers who read and merge each change request.

## Where to start

One Compose artifact, two commands to render and start it, and a review gate between agent work and your default branch: that is the whole install. Point a domain at a Linux box, run init and start, and your team has an open-source Claude Cowork alternative its work can flow through. [Self-host open-source Kortix](https://kortix.com) to begin, and the [comparisons hub](/) collects the rest of the site's guides, including the [Claude Cowork vs ChatGPT Work breakdown](/claude-cowork-vs-chatgpt-work.html) of the closed suites.
