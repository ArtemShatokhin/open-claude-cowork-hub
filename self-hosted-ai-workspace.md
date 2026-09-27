# Self-Hosted AI Workspace: Your Own AI, On Your Own Hardware

> Canonical: <https://opensourceclaudecowork.com/self-hosted-ai-workspace.html>

A self-hosted AI workspace is the broader idea behind "self-hosted AI": running models and agent tooling on hardware you control instead of renting it from a closed platform.

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

## Self-hosted AI vs ChatGPT

| Dimension | Self-hosted AI | ChatGPT / hosted |
|---|---|---|
| Ownership | You own models, data, config | In the vendor's cloud |
| Privacy | Prompts stay in your perimeter | Processed by the vendor |
| Setup | You operate hardware/tooling | Zero setup |
| Cost | Hardware + your time | Subscription |

*Independent comparison. Sources: [Kortix/Suna](https://github.com/kortix-ai/suna) · [Kortix docs](https://kortix.com/docs)*
