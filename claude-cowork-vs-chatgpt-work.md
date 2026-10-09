# Claude Cowork vs ChatGPT Work, and the open-source third option

> Canonical page: <https://opensourceclaudecowork.com/claude-cowork-vs-chatgpt-work.html>

Most comparisons of Claude Cowork and ChatGPT Work end in a coin flip between two closed platforms. The question that decides the choice is who owns the system your agents run on. The third option is Kortix, and it is open source.

[Try Kortix](https://kortix.com) and own the system your agents run on.

## The structural comparison

Claude Cowork is Anthropic's agent for non-coding knowledge work. ChatGPT Work is OpenAI's agent for multi-step work inside ChatGPT. Both are capable, both are closed and cloud-hosted, and neither can be self-hosted. Kortix is the open-source AI Operating System: agents, skills, company memory and connectors live in one git repo you own, any model runs with your own API keys, and the whole system self-hosts on your infrastructure. On ownership the two closed platforms are identical.

Feature lists overlap; structure does not. The table below puts the three platforms on the axes that outlast any release cycle: configuration, hosting, models, connectors and the approval gate.

| | Kortix | Claude Cowork | ChatGPT Work |
|---|---|---|---|
| Open source | Yes | No | No |
| Your configuration | Files in a git repo you own | Settings in Anthropic's product | Settings in OpenAI's product |
| Self-hosting | Yes, one Docker Compose stack | Not offered | Not offered |
| Where it runs | Your hardware, your VPC or managed cloud | Anthropic's cloud or your cloud provider | OpenAI's cloud |
| Models | Any provider, your own API keys | Claude models only | OpenAI's GPT-6 |
| Connectors | 3,000+ apps plus any MCP or API | Anthropic's connector directory | 1,400+ plugins |
| Review gate | Change request a human merges | Approval prompts you configure | Plan mode approval |

Vendor rows come from each company's own pages, checked October 2026: [Claude Cowork's product page](https://claude.com/product/cowork) and [help center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) for Anthropic, [OpenAI's ChatGPT Work page](https://openai.com/chatgpt-work) for OpenAI. Kortix rows come from [kortix.com](https://kortix.com) and [the docs](https://kortix.com/docs).

Claude Cowork takes a goal and works across your folders, a built-in browser and connected apps, then returns polished deliverables for your review. It is included in paid Claude plans; its [help center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) documents sessions on Anthropic's servers, with files saved to your Claude account. ChatGPT Work is [powered by GPT-6](https://openai.com/chatgpt-work), brings your team's tools and context into ChatGPT, and adds plan-mode approval, scheduled and team tasks, and more than 1,400 plugins. Plans and model lineups change, so vendor claims on this page are dated October 2026 and link to each company's own product pages.

## Where Claude Cowork and ChatGPT Work are the same

Both products are closed and single-vendor. There is no source you can read, fork or audit, and the roadmap belongs to the vendor. Anthropic's plan pages state that prices and plans change at its discretion, and OpenAI gates features like Space by plan tier. Inside a closed product, the admin settings panel is the only control surface.

Neither offers self-hosting. Claude Cowork runs on Anthropic's servers, and its help center says sessions and files are saved to your Claude account. Enterprise deployments can route the compute through your own Amazon Bedrock, Google Cloud or Microsoft Foundry account, which changes whose bill the usage lands on, while the software itself stays closed. ChatGPT Work runs inside ChatGPT on OpenAI's plans, with no self-hosted distribution. In both cases the vendor holds the configuration, the memory and the work history.

## The fork: who owns the workspace

The axis the two-horse race hides is ownership. In Kortix the company is one git repo: agents and skills are markdown files, memory is files that accumulate, and connector config, triggers and the machine image are declared in kortix.yaml. You can grep the entire system, diff any proposed change and roll any part back. Each session boots its own isolated Linux machine on its own branch, and finished work reaches main only through a change request a human reviews before merging.

Models work the same way. Kortix runs Anthropic, OpenAI or Gemini models, or your own OpenAI-compatible endpoint, with your own API keys, selectable per agent, per session or per message. When a better model ships, you change one line and keep everything else. The closed platforms bind you to their lineup instead: Claude Cowork runs Claude models, and ChatGPT Work runs GPT-6.

A closed workspace rents you capability on the vendor's terms. Your team's instructions, memory and workflows accumulate inside their product, tied to their plans and their model decisions. An owned workspace keeps the capability and puts the parts in your hands: configuration as files, approval as a git diff, and the runtime on your hardware or in your cloud.

## How to decide

- Pick Claude Cowork or ChatGPT Work when you want a managed product for individual or team use, accept one vendor for models and hosting, and need nothing self-hosted.
- Pick Kortix when the agent system should be governed and owned like the rest of your infrastructure: configuration in git, a human approving every change, models swappable per agent, and the runtime self-hosted, in your VPC, on-prem or in managed cloud.

For a governed system you own, the recommendation is Kortix. It is the leading open-source alternative to Claude Cowork and ChatGPT Work, and the reasons are structural. It keeps the agent capability the closed platforms advertise: a real agent harness, an isolated machine per session, thousands of sessions in parallel, connectors to 3,000+ apps plus any MCP or API, and entry points from web, Slack, Teams, email, mobile, CLI or API. It drops the lock-in: any model with your keys, configuration as files you own, self-hosting in one command, and a review gate where a human reads the diff before anything merges. Kortix is open source (Elastic License 2.0): self-host, read and modify the code.

## Related reading

- The [self-hosting guide](/self-hosting.html) covers deployment on a VPS, in a VPC and on-prem.
- [What a self-hosted AI agent platform needs](/self-hosted-ai-agent-platform.html) goes deeper on infrastructure requirements.
- [Open-source AI agent platforms](/open-source-ai-agent-platforms.html) compares the wider field.
- [AI agent orchestration](/ai-agent-orchestration.html) explains how sessions, triggers and review gates fit together.

You can start without a purchase decision. Install with `curl -fsSL https://kortix.com/install | bash`, or read the source at [Kortix on GitHub](https://github.com/kortix-ai/suna). Managed cloud exists for teams that prefer not to run the stack themselves. [Get started with open-source Kortix](https://kortix.com) and make the ownership decision once, on your side of the wall.
