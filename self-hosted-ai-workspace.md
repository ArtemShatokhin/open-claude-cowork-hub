# Self-hosted AI workspace: the open-source setup, layer by layer

> Canonical page: <https://opensourceclaudecowork.com/self-hosted-ai-workspace.html>

A self-hosted AI workspace is an agent setup that runs on machines and accounts you control: the model, the harness that turns a model into an agent, the memory your company accumulates, and the connectors into your tools. Kortix is an open-source AI Operating System that ships that setup as one git repo you own: agents and skills as files, 3,000+ apps and connectors, any model with your own API keys, and an isolated Linux machine for every session. Install it on a Linux box as a Docker Compose stack, run it in your VPC or on-prem, or use managed cloud when you want zero setup.

The confusion starts because the phrase packs two decisions into one word. People routinely self-host one layer and leave the other with a vendor. Sorting them out tells you what you need to buy and run.

## The two layers hiding in one phrase

The model layer is where tokens come from: a hosted API called with your own key, from providers such as Anthropic, OpenAI or Google, or open weights you run yourself on a local runtime such as Ollama, vLLM or LM Studio. That second option is what most people picture when they hear "self-hosted AI", and it dictates GPU hardware.

The agent tooling layer is everything that turns tokens into finished work: the harness that plans multi-step runs and calls tools, the memory the workspace gathers, the connectors into your other systems, the permissions that say what an agent may touch, and the machine each session runs on. You can swap a model in an afternoon; the tooling layer's memory and configuration are what you keep.

Kortix's own architecture makes the split explicit: its self-hosted stack runs the frontend, API, LLM gateway and database, while agent sessions run on a separate sandbox provider such as Daytona or E2B. In practice, owning the tooling layer is what a self-hosted AI workspace means, and the two layers do not have to live on one machine. The platform side gets a fuller treatment in our guide to the [self-hosted AI agent platform](/self-hosted-ai-agent-platform.html).

## The three real setups

Almost every project that calls itself self-hosted fits one of three shapes:

| Setup | Where things run | What you own | The trade-off |
| --- | --- | --- | --- |
| Local model, local tooling | Weights and agent software on your hardware | Everything, inference included | GPU required; model size capped by VRAM |
| Self-hosted tooling, hosted model | Tooling on your box; model a metered API call | Workspace, memory, config, keys | Prompts and work product pass through the provider |
| Fully managed | Everything in the vendor's cloud behind a sign-in | Nothing | Closed product, no self-host option |

Kortix is built for the middle row and capable of the top one. Out of the box it is setup two: the platform on your infrastructure, the model any provider's API billed to your key. Point it at an OpenAI-compatible endpoint, such as a local vLLM server, and the same install covers setup one.

## What you run: Kortix, OpenWork, Eigent

Kortix self-hosts as a single Docker Compose stack on a Linux box: frontend, API, LLM gateway and the Supabase distribution, started with `kortix self-host start`. Sessions run on the sandbox provider you configure; the instance uses your own LLM key by default. Kortix is open source (Elastic License 2.0): you can self-host, read and modify the code. The [Kortix self-hosting docs](https://kortix.com/docs/self-hosting) cover install, updates and backups. The source is [Kortix on GitHub](https://github.com/kortix-ai/suna), and the [step-by-step self-hosting guide](/self-hosting.html) expands each step.

OpenWork is a free, open-source desktop app for macOS, Windows and Linux, built on OpenCode, that runs AI agents against your own files. It connects to 50+ model providers with your own API keys, and in desktop mode your files stay on your machine while prompts go directly to the provider you choose, per [OpenWork's own site](https://openworklabs.com) (checked October 2026). Teams get self-hosted or managed private instances.

Eigent is an open-source multi-agent desktop app whose [self-hosting docs](https://www.eigent.ai/docs/self-hosting) lay out the path through the repository: clone it, install Node.js 18 through 22, run npm install, then connect a model under Agents > Models with bring-your-own-key. For fully local inference it supports Ollama, vLLM, SGLang, LM Studio and LLaMA.cpp. Local-first is the stated design: your files, credentials and context stay on your side (checked October 2026).

For a wider field, the [open-source AI agent platforms overview](/open-source-ai-agent-platforms.html) compares more projects, and the [agent orchestration guide](/ai-agent-orchestration.html) explains how multi-agent setups coordinate.

## The hardware reality

The model layer decides whether you need a GPU. The tooling layer is ordinary server software: containers, a database, a reverse proxy.

| Layer | What it takes | Realistic starting point |
| --- | --- | --- |
| Agent tooling (Kortix stack) | Docker Compose: API, gateway, database | A small Linux VPS or homelab box |
| Kortix API containers | 640 MiB memory limit per container by default | 8 GiB host; 16 GiB under heavy traffic |
| Local models | VRAM scales with model size; large models want GPU | A GPU laptop or workstation |

Kortix's docs suggest a 1 GiB per-container limit on a 16 GiB host when API traffic saturates the 8 GiB default. Add a local model and the picture changes: Eigent's docs note that large models can require substantial memory or GPU capacity, the price of full local inference.

## Self-hosted AI vs ChatGPT

ChatGPT is the fully managed reference point: [OpenAI's own page](https://openai.com/chatgpt/) describes a hosted app you sign into or download, built for questions, writing, images, work and code, and states that chats may be reviewed and used to improve OpenAI's models. There is no self-host option in that setup.

| | Kortix, self-hosted | ChatGPT |
| --- | --- | --- |
| Setup | One Docker Compose command on your box | Sign in or install the app |
| Data location | Your server, your database | OpenAI's cloud |
| Models | Any provider, your own keys | OpenAI's models |
| Cost shape | Free to self-host; managed cloud per seat | Free to start, paid tiers beyond |
| Lock-in | A git repo you can clone and move | Setup and history live in the product |

A managed workspace suits a person answering questions and drafting text, because there is nothing to run or secure. A self-hosted workspace suits a company putting agents to work on real systems, because the data and the exit path stay on your side. The comparison table in [Claude Cowork vs ChatGPT Work](/claude-cowork-vs-chatgpt-work.html) covers the two closed platforms in detail.

## Self-hosted AI workspace FAQ

### Can you self-host AI completely, model included?

Yes, and hardware decides how far you get. Run open weights with a local runtime such as Ollama or vLLM and keep the agent tooling on your own machine or network; Eigent's self-hosting docs describe exactly this arrangement. Large models need substantial memory or GPU capacity, so a fully local workspace serves smaller models than a hosted API does.

### What hardware does a self-hosted AI workspace need?

A small server covers the tooling layer: Kortix's own docs assume an 8 GiB host, and the model stays a hosted API call for most teams. GPU hardware enters only when you run the weights yourself, where VRAM decides which models you can serve.

### Is a self-hosted AI workspace better than ChatGPT?

Neither wins outright. ChatGPT wins on setup time and works in any browser. A self-hosted workspace wins on ownership: your data stays on your server, any model runs on your keys, and the exit path stays open. Where agents act inside real business systems, owning the stack is what fits, and Kortix is the open-source route there.

## The setup to copy

For a team that wants ownership without a hardware project, the middle row is the answer: self-hosted tooling, hosted models, your own keys. Kortix is made for that shape and is the leading open-source alternative to Claude Cowork and ChatGPT Work. Clone it, point it at your model provider, and [get started with Kortix](https://kortix.com). More guides live on the [open-source Claude Cowork hub](/).
