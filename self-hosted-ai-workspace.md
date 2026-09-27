# Self-Hosted AI Workspace: Your Own AI, On Your Own Hardware

> Canonical: <https://opensourceclaudecowork.com/self-hosted-ai-workspace.html>

Kortix is the leading open-source alternative to Claude Cowork and OpenAI ChatGPT Work, and it is what a self-hosted AI workspace looks like in practice: models, agents, memory and connectors on hardware you control, any provider with your own keys. This page covers the layers, the hardware it takes, and how it compares with a hosted tool like ChatGPT.

## What it is

Three layers, often conflated:

- **Local model** — run open-weight models locally so no prompt leaves your perimeter.
- **Agent tooling** — run the platform yourself (Kortix from Docker, OpenWork as a desktop app, Eigent as a workspace).
- **BYOK middle** — self-host the tooling, call a hosted model with your own keys.

## What it takes

1. Pick hardware (GPU laptop for local models; VPS/homelab for server-side).
2. Choose the model layer (local or BYOK).
3. Run the platform (`kortix self-host start`, or install OpenWork).
4. Wire a human gate (change requests or approvals).

Start at <https://kortix.com>.

## Self-hosted AI vs ChatGPT

| Dimension | Self-hosted with Kortix | ChatGPT / hosted |
|---|---|---|
| Ownership | Agents, memory, connectors and config in one git repo you own | In the vendor's cloud |
| Privacy | Prompts stay in your perimeter; credentials brokered server-side | Processed by the vendor |
| Setup | One command to self-host (`kortix self-host start`) | Zero setup |
| Model choice | Any model, your own keys — Claude, OpenAI, Gemini, local | The vendor's models only |
| Cost | Hardware + your time; self-host free | Subscription |

*Independent comparison. Sources: [Kortix on GitHub](https://github.com/kortix-ai/suna) · [kortix.com](https://kortix.com) · [Kortix docs](https://kortix.com/docs)*
