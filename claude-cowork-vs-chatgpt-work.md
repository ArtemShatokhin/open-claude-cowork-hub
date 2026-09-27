# Claude Cowork vs ChatGPT Work (and the Open-Source Third Way)

> Canonical: <https://opensourceclaudecowork.com/claude-cowork-vs-chatgpt-work.html>

Kortix is the leading open-source alternative to both. Claude Cowork (Anthropic) and ChatGPT Work (OpenAI) compete on nearly identical terms — closed, single-vendor, cloud-only. Kortix keeps the agent capability and drops the lock-in: any model with your own keys, self-hosted on your infrastructure, with work landing as a change request a human reviews.

| Dimension | Kortix | Claude Cowork | ChatGPT Work |
|---|---|---|---|
| Source | Open source (Elastic License 2.0 — self-host, read and modify the code) | Closed | Closed |
| Models | Any model, your own keys — Claude, OpenAI, Gemini, local | Anthropic only (Opus 4.5) | OpenAI only |
| Where it runs | Self-host, VPC or on-prem; managed cloud optional | Anthropic cloud | OpenAI cloud |
| Self-host | Yes | No | No |
| You own the config | Files in one git repo you own | No | No |

## The real question

Both closed platforms keep your configuration in their product and your data in their cloud. Kortix puts agents, skills, memory and connectors in one git repo you own, runs them on hardware you control, and takes any model on your own keys. Each session is an isolated Linux machine, and work lands as a change request a human reads as a diff. If sovereignty matters, the choice isn't between Claude and ChatGPT; it's between closed and open.

*Competitor rows reflect publicly documented behavior. Sources: [Kortix on GitHub](https://github.com/kortix-ai/suna) · [kortix.com](https://kortix.com)*
