/**
 * opensourceclaudecowork.com
 *
 * Copy is the content-writer's copy sheets, word for word (data/briefs/oscw-*-sheet.md).
 * Design: the self-hosting handbook — see data/briefs/opensourceclaudecowork.com-design-spec.md.
 * Every string, list, link and artifact on every page comes from here.
 */
import type { Artifact, Cta, CtaSection, Page, SiteConfig } from './src/config/types';

/* ── shared copy, reused across pages ────────────────────────────────────── */

const TRY: Cta = { label: 'Try Kortix', href: 'https://kortix.com', nofollow: true, variant: 'primary' };
const DOCS: Cta = { label: 'Read the docs', href: 'https://kortix.com/docs', nofollow: true, variant: 'secondary' };
const TRUST = 'Open source · Any model, your keys · Self-host, VPC, or on-prem';
const TAGLINE = 'The open-source AI Operating System';

/** The docs overview: project → session → change request. */
const FLOW: Artifact = {
  file: 'project tree',
  lang: 'text',
  lines: [
    'project (git repo + kortix.yaml)',
    '  └─ session ──> isolated sandbox on branch "<uuid>"',
    '  └─ agent commits + pushes',
    '  └─ change request ──> merge ──> default branch',
  ],
  source: 'kortix.com/docs',
};

/** README.md in the Kortix repo: the "AI employee" agent, cropped. */
const AGENT_YAML: Artifact = {
  file: 'kortix.yaml',
  lang: 'yaml',
  lines: [
    '# kortix.yaml',
    'agents:',
    '  support-triage:',
    '    file: agents/support-triage.md   # what it does, in plain markdown',
    '    connectors: all                  # what it may reach',
  ],
  source: 'README.md in https://github.com/kortix-ai/suna',
  copyText: 'agents:\n  support-triage:\n    file: agents/support-triage.md\n    connectors: all\n',
};

/** docs/host: the three-command self-host path. */
const SELF_HOST: Artifact = {
  file: 'terminal',
  lang: 'sh',
  lines: [
    'curl -fsSL https://kortix.com/install | bash',
    'kortix self-host init --domain kortix.example.com',
    'kortix self-host start',
  ],
  source: 'kortix.com/docs/host',
  copyText: 'curl -fsSL https://kortix.com/install | bash\nkortix self-host init --domain kortix.example.com\nkortix self-host start\n',
};

/** The same install as prose's second visual, per the self-hosting sheet. */
const BOOTSTRAP_SH = `curl -fsSL https://github.com/kortix-ai/suna/raw/dev/scripts/kortix-selfhost-up.sh \\
  | bash -s -- --domain kortix.example.com --email ops@example.com`;

const CLOSING: CtaSection = {
  type: 'cta',
  title: 'Run your whole company from one repo you own',
  sub: 'Start with one job, or self-host the whole stack',
  ctas: [TRY, { label: 'Read the self-hosting guide', href: '/self-hosting', variant: 'secondary' }],
  trust: TRUST,
};

/* ── pages ───────────────────────────────────────────────────────────────── */

const home: Page = {
  slug: '',
  navLabel: 'Home',
  title: 'Open Source Claude Cowork Alternative: Kortix',
  metaDescription:
    'Kortix is an open-source alternative to Claude Cowork and ChatGPT Work: your agents, skills, and connectors in one git repo you own, self-hosted or cloud.',
  h1: 'The open-source alternative to Claude Cowork you can own',
  lead: 'Claude Cowork and ChatGPT Work run in the vendor\u2019s cloud, on the vendor\u2019s models, and your configuration lives in their product. Kortix is open source: an AI Operating System where your agents, skills, and connectors live in one git repo you own, on any model, self-hosted or managed cloud.',
  sections: [
    {
      type: 'hero',
      layout: 'field',
      eyebrow: {
        lead: 'The leading open-source alternative to',
        rivals: [
          { label: 'Claude Cowork', glyph: 'claude' },
          { label: 'ChatGPT Work', glyph: 'openai' },
        ],
      },
      tagline: TAGLINE,
      ctas: [TRY, { label: 'How it works', href: '#how-it-works', variant: 'secondary' }],
      artifacts: [FLOW],
      proof: 'Thousands of agents in parallel on one config, each on its own cloud computer.',
      trust: TRUST,
    },
    {
      type: 'logo-strip',
      label: 'One repo, any model, every tool you already run',
      rows: [
        { label: 'Any model, your keys', glyphs: ['claude', 'openai', 'gemini'] },
        { label: '3,000+ apps in a click', glyphs: ['slack', 'teams', 'notion', 'linear', 'github', 'gmail'] },
      ],
    },
    {
      type: 'stack',
      id: 'how-it-works',
      heading: {
        eyebrow: 'How Kortix works',
        title: 'Six layers an AI workforce needs, in one platform you own',
        sub: 'Each layer is a file or a command you can read. The sixth commits the work back into the first.',
      },
      layers: [
        {
          id: 'repo',
          label: 'Repo',
          title: 'One git repo',
          body: 'Your agents, their skills, your company memory and every connector in one git repo you own.',
          artifact: {
            file: 'repo: acme-co',
            lang: 'text',
            lines: ['agents/   skills/   memory/', 'kortix.yaml   rules · triggers · connectors'],
            source: 'kortix.com/docs',
          },
        },
        {
          id: 'connectors',
          label: 'Connectors',
          title: 'Every tool your company runs on',
          body: '3,000+ apps in a click, plus MCP, OpenAPI, Postman, GraphQL and raw HTTP. Connector credentials are brokered server-side and never enter the machine.',
          artifact: AGENT_YAML,
        },
        {
          id: 'models',
          label: 'Models',
          title: 'Any model, your keys',
          body: 'Any model provider with your own keys. Or the ChatGPT plan you already pay for. Or sign in with your OpenCode Console account for OpenCode Zen and Go.',
          artifact: {
            file: 'terminal',
            lang: 'sh',
            lines: ['$ kortix providers login opencode-go', '$ kortix providers login opencode'],
            source: 'kortix.com/docs/project/models',
          },
        },
        {
          id: 'harness',
          label: 'Harness',
          title: 'The harness',
          body: 'OpenCode is the harness. It reads the agent files, skills and harness files in your repo.',
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            lines: ['opencode:', '  config_dir: harnesses/opencode'],
            source: 'kortix.com/docs/project/manifest',
          },
        },
        {
          id: 'computer',
          label: 'Computer',
          title: 'A cloud computer per session',
          body: 'One isolated sandbox per session. Each session has its own isolated machine and branch.',
          artifact: {
            file: 'terminal',
            lang: 'sh',
            lines: ['$ kortix sessions new --prompt "Summarize this week\u2019s commits and open a change request"'],
            source: 'README.md in https://github.com/kortix-ai/suna',
          },
        },
        {
          id: 'review',
          label: 'Review',
          title: 'A change request you merge',
          body: 'Session work reaches main through a change request. Merge is default-deny for agents.',
          artifact: {
            file: 'change request states',
            lang: 'text',
            lines: ['open ──(merge)──▶ merged', 'open ──(close)──▶ closed ──(reopen)──▶ open'],
            source: 'kortix.com/docs/work/change-requests',
          },
        },
      ],
    },
    {
      type: 'use-cases',
      id: 'by-role',
      heading: { eyebrow: 'By role', title: 'Work from every team, as artifacts you can read' },
      artifactLabel: 'Output',
      cards: [
        {
          id: 'engineering',
          tag: 'Engineering',
          headline: 'Reproduces the worst error and opens the fix',
          body: 'It sweeps the day\u2019s errors, reproduces the top one on its own cloud computer, patches it and opens a change request against main.',
          artifact: {
            kind: 'diff',
            file: 'fix-checkout-expiry.diff',
            stat: '+2 −1',
            footer: '9 error groups · top one fixed',
            lines: [
              ' app/checkout/charge.ts',
              '-if (card.expMonth < now.getMonth()) {',
              '+if (isExpired(card, now)) {',
              '+  return fail(402, "card_expired");',
            ],
          },
        },
        {
          id: 'finance',
          tag: 'Finance',
          headline: 'Reconciles the books and explains the variance',
          body: 'It matches the ledger against the bank, chases the missing receipts and closes the month with the variance written out.',
          artifact: {
            kind: 'sheet',
            file: 'finance/fy26-budget.xlsx',
            footer: '1 center over plan',
            columns: ['Cost center', 'Plan', 'Actual'],
            widths: ['46%', '27%', '27%'],
            aligns: ['left', 'right', 'right'],
            rows: [
              { cells: ['R&D platform', '1,225', '1,182'], tone: 'up' },
              { cells: ['Go-to-market', '810', '743'], tone: 'up' },
              { cells: ['Security', '180', '199'], tone: 'down' },
              { cells: ['Total', '2,455', '2,343'], total: true },
            ],
          },
        },
        {
          id: 'product',
          tag: 'Product',
          headline: 'Turns a pile of feedback into themes',
          body: 'It reads what customers said, groups it into themes and ranks them by how often each one comes up.',
          artifact: {
            kind: 'checks',
            file: 'product/feedback.md',
            footer: '3 themes',
            items: [
              { label: 'Export times out', value: '14', tone: 'down' },
              { label: 'Wants CSV export', value: '9', tone: 'warn' },
              { label: 'Onboarding praised', value: '12', tone: 'up' },
            ],
          },
        },
        {
          id: 'marketing',
          tag: 'Marketing & ops',
          headline: 'Runs the SEO program week after week',
          body: 'It tracks the queries you care about, finds the pages losing ground and opens each rewrite as a change request.',
          artifact: {
            kind: 'checks',
            file: 'marketing/seo-weekly.md',
            footer: '2 rewrites, in review',
            items: [
              { label: '/guides/payouts', value: '+7', tone: 'up' },
              { label: '/guides/bank-feed', value: '−2', tone: 'down' },
            ],
          },
        },
      ],
    },
    {
      type: 'open-source',
      stars: { value: 20000, suffix: '+', caption: 'GitHub stars, October 2026' },
      title: 'Open source. Read it, fork it, audit it.',
      links: [
        { label: 'Kortix on GitHub', href: 'https://github.com/kortix-ai/suna', nofollow: true },
        { label: 'Read the docs', href: 'https://kortix.com/docs', nofollow: true },
        { label: 'Open-source AI agent platforms', href: '/open-source-ai-agent-platforms' },
      ],
    },
    {
      type: 'faq',
      id: 'faq',
      heading: { eyebrow: 'FAQ', title: 'Questions people ask before they switch' },
      items: [
        {
          id: 'what-is-kortix',
          question: 'What is Kortix, the open-source alternative to Claude Cowork?',
          answer:
            'Kortix is an open-source AI Operating System. Your agents, their skills, your company memory and every connector live in one git repo you own, and each session runs on its own cloud computer. You can read the code, run it on your own infrastructure and keep the configuration. For how it stacks up against both products, [Read the comparison](https://kortix.com/blog/kortix-vs-claude-cowork).',
        },
        {
          id: 'self-host',
          question: 'Can I self-host it?',
          answer:
            'Yes. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free. It needs the internet: the self-host stack pulls its images when it starts. The full guide is on [Self-hosting](/self-hosting).',
        },
        {
          id: 'models',
          question: 'Which models can I use?',
          answer:
            'Any model provider with your own keys. Or the ChatGPT plan you already pay for. Or sign in with your OpenCode Console account for OpenCode Zen and Go.',
        },
        {
          id: 'merge',
          question: 'Does an agent merge its own work?',
          answer:
            'Work reaches main through a change request you approve. Merge is default-deny for agents, and an admin can grant the merge capability. A session can never merge the change request it opened itself.',
        },
        {
          id: 'price',
          question: 'What does Kortix cost?',
          answer:
            'Free is $0 with 200 credits per month and 1 project. The team plan is $40 per seat per month with 2,500 credits per month per seat, pooled. Self-host is free.',
        },
        {
          id: 'affiliation',
          question: 'Is this site affiliated with Anthropic or OpenAI?',
          answer:
            'No. Claude Cowork and ChatGPT Work are Anthropic and OpenAI products. This site names them only to compare, in [Claude Cowork vs ChatGPT Work](/claude-cowork-vs-chatgpt-work).',
        },
      ],
    },
    CLOSING,
  ],
};

const selfHosting: Page = {
  slug: 'self-hosting',
  navLabel: 'Self-hosting',
  title: 'Self-host an open-source Claude Cowork alternative',
  metaDescription:
    'Kortix is open source. Self-host it on one Linux box: one Docker Compose stack, two commands, your own model keys, and a change-request gate.',
  h1: 'Self-host an open-source Claude Cowork alternative on your own hardware',
  lead: 'Self-hosting Kortix means running one Docker Compose stack on a Linux box you control. The open-source AI Operating System keeps your agents, skills, company memory and connectors in one git repo you own, and every model call runs on your own API keys.',
  sections: [
    {
      type: 'artifact',
      heading: { eyebrow: 'Quickstart', title: 'Two commands, or one bootstrap script.' },
      artifact: {
        file: 'terminal',
        lang: 'sh',
        lines: [
          'curl -fsSL https://github.com/kortix-ai/suna/raw/dev/scripts/kortix-selfhost-up.sh | bash -s -- --domain kortix.example.com --email ops@example.com',
          'curl -fsSL https://kortix.com/install | bash',
          'kortix self-host init --domain kortix.example.com',
          'kortix self-host start',
        ],
        source: 'kortix.com/docs/host',
      },
      caption:
        'From the Kortix self-hosting docs. The bootstrap script runs on Linux only; the manual CLI path below shows what it automates.',
    },
    {
      type: 'prose',
      body: `## What self-hosting Kortix means

Kortix is the open-source AI Operating System, and self-hosting it means running the whole platform on hardware you control. The runtime, the configuration and the data sit on your Linux box rather than in a vendor\u2019s cloud. Here "self-hosted" has a precise shape: one Docker Compose stack that carries the frontend, the API, the LLM gateway and a bundled Supabase distribution.

Everything that describes how your company works lives in one git repo you own. Your agents, their skills, your company memory and every connector\u2019s configuration are files in that repo, versioned and diffable. Any model provider with your own keys. The code is open source: read it, fork it, audit it on [Kortix on GitHub](https://github.com/kortix-ai/suna).

Self-hosting does not remove the review gate. Agent work still reaches your default branch through a change request a human merges, whether the box is a laptop, a VPS, a VPC or an on-prem server. If you are weighing this against a hosted platform, the [self-hosted AI agent platform guide](/self-hosted-ai-agent-platform) sets the two side by side.

## The install, command by command

Two routes install Kortix. The first is a one-shot bootstrap script for a bare Linux box that installs Docker, installs the \`kortix\` CLI and starts the stack in a single command. [Read the docs](https://kortix.com/docs/host) for both routes.

\`\`\`sh
${BOOTSTRAP_SH}
\`\`\`

That script runs on Linux only. On another operating system, install the CLI directly and use the manual path, which shows exactly what the bootstrap automates.

1. Install the CLI: \`curl -fsSL https://kortix.com/install | bash\`.
2. Point DNS and open ports. Create A or AAAA records for your domain and for \`api.<domain>\`, both aimed at the box, then open ports 80 and 443 so the bundled Caddy proxy can issue its TLS certificate.
3. Render the stack: \`kortix self-host init --domain kortix.example.com\`. The command writes the Compose file, \`.env\`, a Caddyfile and an updater script, with ports, URLs and keys already generated.
4. Start it: \`kortix self-host start\`.
5. Watch it settle: \`kortix self-host status\`, \`kortix self-host logs\` and \`kortix self-host doctor\` report progress while the stack comes up.
6. Add the two credentials: \`kortix self-host configure\` prompts for a sandbox provider key and, optionally, a managed-git token. Then connect your own LLM key in the dashboard\u2019s model picker, because a self-hosted instance uses your key by default.

## Where the instance lives, and what to back up

One directory holds the entire instance: \`~/.config/kortix/self-host/<instance>/\`. The rendered stack definition and settings sit at its root, and the data sits in two directories beneath it.

- \`volumes/db/data\` holds the Postgres database.
- \`volumes/storage\` holds file storage.
- \`.env\` holds every secret and signing key the instance uses.

Kortix has no separate backup system. Copy those three somewhere off the box before you run any destructive command. The [self-hosted AI workspace guide](/self-hosted-ai-workspace) covers how the repo, memory and connectors fit together once the stack is up.

## The change-request gate on every session

Each session has its own isolated machine and branch. OpenCode is the harness. The agent plans, runs tools, commits and pushes, then opens a change request. Session work reaches \`main\` through a change request. Merge is default-deny for agents.

From the CLI the same review works three ways: \`kortix cr ls\` lists change requests, \`kortix cr diff\` reads the patch, and \`kortix cr merge\` lands it. On a self-hosted box that gate is the point. The agent holds broad tool access inside its sandbox, and the change request is where you keep control. Coordinating many sessions across a team is the subject of the [AI agent orchestration guide](/ai-agent-orchestration).

## What still touches the internet

Two facts decide how isolated the box really is. First, \`kortix self-host start\` pulls its images from a registry, so the host needs outbound access to pull them, and the bundled updater checks for new images once a day. Second, agent sessions do not run on your hardware at all. They run on a separate sandbox provider, with Daytona as the default and Platinum and E2B also supported, and the API reaches that provider over egress.

So a self-hosted Kortix is not a fully offline install. The split has a practical payoff: parallel sessions consume the provider\u2019s compute instead of your box\u2019s CPU and memory, which keeps the host small. In exchange you keep one outbound dependency to plan for. To hold a release still, pin an exact version with \`kortix self-host update --tag <version>\` instead of tracking the updater, or turn auto-update off.

## Sizing the host

An 8 GiB host runs the stack with its documented defaults. The API ships with a 640 MiB memory limit, which the docs size for an 8 GiB box. On a 16 GiB host whose API traffic reaches that limit, raise it to 1 GiB with \`kortix self-host env set KORTIX_API_MEMORY_LIMIT=1024m\`, then confirm the result with \`docker stats --no-stream\`.

The same rendered stack runs unchanged on a laptop, a VPS, a VPC or on-prem hardware. Moving from a trial to production changes one setting, the domain, plus the DNS records and open ports that a stable domain needs. The evaluation path skips DNS entirely: \`kortix self-host init --tunnel cloudflare\` brings the stack up behind a tunnel URL that changes on every restart.

## Before you onboard the team

Work through this list before the first teammate signs in:

- A persistent domain with A or AAAA records for the domain and \`api.<domain>\`, and ports 80 and 443 open.
- A sandbox provider key, Daytona by default, or Platinum or E2B if you prefer.
- Model keys connected in the dashboard\u2019s model picker.
- Off-box copies of \`volumes/db/data\`, \`volumes/storage\` and \`.env\`.
- An update policy: the stable channel by default, or a pinned version with auto-update off.
- Named reviewers who read and merge each change request.

With the domain, the keys and the backup copies in place, the first session runs the same way it does on the managed cloud. [Get started](https://kortix.com/blog/getting-started-with-kortix) takes the first project from an empty repo to a merged change request.`,
    },
    {
      type: 'faq',
      id: 'faq',
      heading: { eyebrow: 'FAQ', title: 'Self-hosting questions' },
      items: [
        {
          id: 'hardware',
          question: 'What hardware does a self-hosted Kortix need?',
          answer:
            'An 8 GiB Linux box runs the stack with its defaults. The API ships with a 640 MiB memory limit, and a 16 GiB host earns the larger 1 GiB limit only when API traffic reaches it. Agent sessions run on a separate sandbox provider, so you do not size the box for agent compute.',
        },
        {
          id: 'first-run',
          question: 'What does the first self-host run ask for?',
          answer:
            'The first run asks six things and no model key. GitHub connects in the dashboard under Settings → Git, and models are BYOK in the app. You supply a sandbox provider key, and optionally a managed-git token, through `kortix self-host configure`.',
        },
        {
          id: 'depends-on',
          question: 'What does self-hosting still depend on?',
          answer:
            'Two things outside the box. The stack pulls its images from a registry, and agent sessions run on a separate sandbox provider, with Daytona as the default. A self-hosted instance is not a fully offline install, so keep outbound access to both.',
        },
        {
          id: 'small-team',
          question: 'Can a small team run a self-hosted Kortix?',
          answer:
            'Yes. One 8 GiB host runs the stack, and sessions run off the box, so the hardware does not grow with the team. A small team needs one persistent domain, a sandbox provider key, model keys in the dashboard, and named reviewers for change requests.',
        },
      ],
    },
    {
      type: 'cta',
      title: 'Run your team on an open-source stack you control.',
      sub: 'One Docker Compose stack, a persistent domain, and a change request between agent work and your default branch.',
      ctas: [TRY, { label: 'See the platform guide', href: '/self-hosted-ai-agent-platform', variant: 'secondary' }],
      trust: TRUST,
    },
  ],
};

const platforms: Page = {
  slug: 'open-source-ai-agent-platforms',
  navLabel: 'Platforms',
  title: 'Open Source AI Agent Platforms: Three Categories, Six Projects',
  metaDescription:
    'Open source AI agent platforms fall into three kinds: a company platform, a framework, an autonomous agent. Kortix is the open-source AI Operating System.',
  h1: 'Open source AI agent platforms, three categories compared',
  lead: 'Open source AI agent platforms come in three kinds: a company platform you run, a framework you build on, and an autonomous agent that chases a goal. Kortix is the open-source AI Operating System, and it is the company platform we recommend.',
  sections: [
    {
      type: 'comparison',
      id: 'compare',
      heading: {
        eyebrow: 'Compare',
        title: 'Three kinds of open source AI agent platform, side by side',
        sub: 'Kortix is the company platform; OpenWork a Cowork desktop, CrewAI a framework, AutoGPT an autonomous agent.',
      },
      columns: [
        { id: 'kortix', label: 'Kortix', note: 'Company platform', highlight: true, href: 'https://kortix.com', nofollow: true },
        { id: 'openwork', label: 'OpenWork', note: 'Cowork desktop', href: 'https://openworklabs.com', nofollow: true },
        { id: 'crewai', label: 'CrewAI', note: 'Framework', href: 'https://github.com/crewAIInc/crewAI', nofollow: true },
        { id: 'autogpt', label: 'AutoGPT', note: 'Autonomous agent', href: 'https://github.com/Significant-Gravitas/AutoGPT', nofollow: true },
      ],
      rows: [
        {
          label: 'What it is',
          cells: [
            { text: 'The open-source AI Operating System, run by a whole company', mark: 'yes' },
            'A Cowork desktop app for your own files',
            'A Python framework for multi-agent workflows',
            'An autonomous agent, a builder and a hosted platform',
          ],
        },
        {
          label: 'Open source',
          cells: [
            { text: 'Yes', mark: 'yes' },
            { text: 'Yes, the desktop app and core packages', mark: 'yes' },
            { text: 'Yes', mark: 'yes' },
            { text: 'Yes, the classic agent', mark: 'yes' },
          ],
        },
        {
          label: 'Self-host',
          cells: [
            { text: 'Self-host is free, on your VPC or on-prem network', mark: 'yes' },
            'Desktop app runs locally; control plane self-hosted',
            'Runs inside your own Python application',
            'Manual: your infrastructure and model keys',
          ],
        },
        {
          label: 'Models',
          cells: [
            'Any model provider with your own keys',
            '50+ providers, your keys, or local models',
            'The LLM providers you configure',
            'Many models; bring your own keys',
          ],
        },
        {
          label: 'Review gate',
          cells: [
            { text: 'Merge is default-deny for agents', mark: 'yes' },
            'Work stays visible on your desktop',
            'You implement approval in your own app',
            'Approvals in the platform; self-hosted, you build them',
          ],
        },
      ],
      footnote: 'Rival cells come from each project\u2019s own site or repo, checked October 2026; Kortix cells from its docs.',
    },
    {
      type: 'prose',
      body: `## Three categories hide inside the label

A search for an open source AI agent platform returns projects that share a name and almost nothing else. The label covers three categories: a company platform an organization runs as infrastructure, a framework developers build on, and an autonomous agent that chases a goal on its own. The category decides what you install, what you build, and who reviews the work. Kortix is the open-source AI Operating System, and it is the company-platform option this page recommends.

### The company platform: an AI Operating System you run

A company platform is infrastructure a whole organization runs on: named agents, shared skills, company memory, connectors to real tools, and a gate a person holds on changes. Kortix holds all of that in one git repo you own. \`kortix.yaml\` declares the connectors, triggers and machine image; agents and skills are markdown; company memory is files that accumulate. Sessions run on their own isolated machine, and finished work reaches \`main\` through a change request a person merges.

OpenWork and Eigent belong to this family at a smaller scope, as Cowork-style desktop apps. OpenWork is a desktop app for macOS, Windows and Linux where agents work on your own files, built on OpenCode ([openworklabs.com](https://openworklabs.com), [the repo](https://github.com/different-ai/openwork)). Eigent coordinates a multi-agent workforce on the CAMEL-AI framework, with local or self-hosted deployment ([eigent.ai](https://eigent.ai), [its repo](https://github.com/eigent-ai/eigent)). Both serve one person or a small team locally. A company platform adds governed sessions, org-wide memory, and an approval gate that spans the organization.

### The framework: coordination code you build on

A framework is a library for defining agents and the handoffs between them, and it runs inside an application you write, host and secure. CrewAI is an open-source Python framework built around Crews, role-based teams of agents, and Flows, event-driven workflows, with a commercial control plane sold beside it ([CrewAI on GitHub](https://github.com/crewAIInc/crewAI)). AutoGen is a framework for multi-agent AI applications from Microsoft, and its repository states it is in maintenance mode, pointing new projects to Microsoft Agent Framework ([AutoGen on GitHub](https://github.com/microsoft/autogen)). A framework leaves the company surroundings to you: hosting, secrets, shared memory, and the step where a person approves a change. The [AI agent orchestration explainer](/ai-agent-orchestration) covers the handoff mechanics.

### The autonomous agent: one loop chasing a goal

An autonomous single-agent project gives an agent a goal and lets it loop through planning, acting and observing until it decides the job is done. AutoGPT is the archetype, with a classic standalone agent and a newer visual builder plus a hosted platform ([AutoGPT on GitHub](https://github.com/Significant-Gravitas/AutoGPT)). It is strong at one bounded loop, and it carries no org-wide memory or shared connector layer behind it.

### Kortix: the platform with the rest already in place

Kortix ships what the platform category describes. Agents reach 3,000+ apps in a click, plus MCP, OpenAPI, Postman, GraphQL and raw HTTP, with connector credentials brokered server-side and never entering the machine. Every tool call is set to Allow, Ask or Block, down to the arguments of each call. Models come as any model provider with your own keys, or the ChatGPT plan you already pay for. Company memory lives as files in the same repo, and session work reaches \`main\` through a change request. The install is three commands:

\`\`\`sh
curl -fsSL https://kortix.com/install | bash
kortix init
kortix ship
\`\`\`

Every session runs on its own isolated machine and branch. The [self-hosted AI agent platform](/self-hosted-ai-agent-platform) and [self-hosted AI workspace](/self-hosted-ai-workspace) pages cover day-to-day operation, and the [Kortix docs](https://kortix.com/docs) and [Kortix on GitHub](https://github.com/kortix-ai/suna) carry the detail.

### Why the category decides the build

Agent work in a framework becomes a build project, because you also deploy the runtime, the model keys, the secrets and the approval step. An autonomous agent such as AutoGPT suits one bounded loop and leaves org-wide memory and shared connectors out. A company platform ships those surroundings prebuilt. On Kortix, a scheduled job runs in its own isolated sandbox, does the work, and opens a change request with the result before anyone signs in.

### Start with the scope you need

- Agent steps inside an application you already run: a framework fits. CrewAI for Crews and Flows, and AutoGen only for work already on it.
- One agent with a goal and a visual builder: AutoGPT, self-hosted or hosted.
- A Cowork-style workspace for one person or a small team: OpenWork on the desktop, or Eigent for a multi-agent workforce.
- A governed system for a whole company, in a repo you own: Kortix, which is why it leads the comparison table on this page.

The closed platforms get their own comparison in [Claude Cowork vs ChatGPT Work](/claude-cowork-vs-chatgpt-work), and the [home page](/) covers the wider field.`,
    },
    {
      type: 'faq',
      id: 'faq',
      heading: { eyebrow: 'FAQ', title: 'Questions about open source AI agent platforms' },
      items: [
        {
          id: 'full-platform',
          question: 'Is there a full open source AI agent platform?',
          answer:
            'Yes. Kortix is the open-source AI Operating System: your agents, their skills, your company memory, and every connector live in one git repo you own. Each session runs on its own isolated machine and branch, and session work reaches `main` through a change request. Self-host is free.',
        },
        {
          id: 'crewai',
          question: 'Is CrewAI a platform or a framework?',
          answer:
            'CrewAI is a framework. It is an open-source Python library for building multi-agent workflows, with Crews for role-based teams of agents and Flows for event-driven control. It runs inside an application you write, host and secure. The runtime, company memory, connector layer and approval gate are things you add around it.',
        },
        {
          id: 'vs-framework',
          question: 'How is Kortix different from a framework?',
          answer:
            'A framework is code you build on; Kortix is the platform the code runs on. It ships the runtime, per-tool permissions set to Allow, Ask or Block, shared company memory, and the change-request gate a person merges. Agents and skills are still files you write, and the rest arrives already assembled.',
        },
        {
          id: 'must-self-host',
          question: 'Do I have to self-host Kortix?',
          answer:
            'No. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free, and it runs as one Docker Compose stack on hardware you control. Models are any provider with your own keys.',
        },
      ],
    },
    {
      type: 'cta',
      title: 'Run your whole company from one repo you own.',
      sub: 'Start with one job, then grow.',
      ctas: [TRY, { label: 'Read the guide', href: 'https://kortix.com/blog/open-source-ai-agent-platform', variant: 'secondary' }],
      trust: TRUST,
    },
  ],
};

const hostedPlatform: Page = {
  slug: 'self-hosted-ai-agent-platform',
  navLabel: 'Self-hosted platform',
  title: 'Open Source Self-Hosted AI Agent Platform: What You Own',
  metaDescription:
    'Kortix is an open-source AI agent platform you self-host as one Docker Compose stack, with any model on your keys and work landing as a change request.',
  h1: 'The open-source self-hosted AI agent platform you run yourself',
  lead: 'A self-hosted AI agent platform runs agent sessions, memory and configuration on machines you control. Kortix is the open-source AI Operating System you can run as one Docker Compose stack, on a laptop, a VPS, a VPC or on-prem.',
  sections: [
    {
      type: 'comparison',
      id: 'compare',
      heading: {
        eyebrow: 'Compare',
        title: 'Three self-hostable projects, measured on the same six rows',
        sub: 'Kortix first, then OpenWork and Eigent, with each cell from that project\u2019s own site or docs.',
      },
      columns: [
        { id: 'kortix', label: 'Kortix', note: 'Our pick', highlight: true, href: 'https://kortix.com/docs/host', nofollow: true },
        { id: 'openwork', label: 'OpenWork', note: 'Desktop', href: 'https://openworklabs.com', nofollow: true },
        { id: 'eigent', label: 'Eigent', note: 'Desktop', href: 'https://www.eigent.ai/docs/self-hosting', nofollow: true },
      ],
      rows: [
        {
          label: 'Runtime',
          cells: [
            { text: 'One Docker Compose stack on your own hardware', mark: 'yes' },
            'Desktop app on your machine; self-host or managed instance',
            'Desktop app; local execution or self-hosted deployment',
          ],
        },
        {
          label: 'Data',
          cells: [{ text: 'In one git repo, on your own disks', mark: 'yes' }, 'Files stay on your machine in desktop mode', 'Local; secrets stay bound locally'],
        },
        {
          label: 'Configuration',
          cells: [
            { text: 'Agents, skills, memory and connectors as repo files', mark: 'yes' },
            'Skills, MCP servers and plugins as shareable packages',
            'Reusable, versioned Space profiles',
          ],
        },
        {
          label: 'Models',
          cells: [
            { text: 'Any provider, your own keys; local models optional', mark: 'yes' },
            '50+ providers, your keys, local models',
            'Bring your own keys, gateways, or local models',
          ],
        },
        {
          label: 'Review gate',
          cells: [
            { text: 'Session work reaches main through a change request', mark: 'yes' },
            'Agent pauses before an outside action, such as a post',
            'Approve the result or ask for revisions',
          ],
        },
        {
          label: 'Open source',
          cells: [{ text: 'Yes, the whole platform', mark: 'yes' }, 'Yes, the desktop app', 'Yes, host it yourself'],
        },
      ],
      footnote: 'Competitor cells taken from each project\u2019s own site or docs, checked October 2026; Kortix cells from its host docs.',
    },
    {
      type: 'prose',
      body: `## What separates self-hosted from managed

A self-hosted AI agent platform runs agent sessions, company memory and configuration on machines you control, so nothing about how your company works sits in a vendor\u2019s account. Kortix, the open-source example the others are measured against, runs that way. Five properties separate a self-hosted platform from a managed one: runtime, data, configuration, model keys, and the review gate. Buyers usually name the first four and miss the fifth.

The runtime is the part you hold. Kortix self-hosts as one Docker Compose stack built from the same images its managed cloud runs, and that stack runs on a laptop, a VPS, a VPC or your own on-prem network. Agent sessions are a deliberate exception: they run on a separate sandbox provider, Daytona by default, with Platinum and E2B supported as well, so the host itself stays small.

The data and the configuration sit on your own disk. A Kortix instance keeps its Postgres database, file storage and secrets in one instance directory you can copy, and the docs count those three as the whole backup. Configuration is more than a settings file: your agents, their skills, your company memory and every connector live in one git repo you own, alongside \`kortix.yaml\`. A managed platform keeps the same material inside its database, so leaving it means losing it.

Model keys are the fourth. A self-hosted instance connects the providers you already pay for: "Any model provider with your own keys. Or the ChatGPT plan you already pay for."

The review gate is the fifth, and the one most teams skip. A managed platform draws its own boundary around what an agent may do. On a self-hosted platform you place the gate yourself, and the strongest form is a change request. On Kortix the gate is structural: "Session work reaches main through a change request. Merge is default-deny for agents." An agent works on its own branch, and a person reads the diff before it lands.

## What you own, and what you still rent

Ownership is a spectrum. Self-hosting moves the runtime, the data and the configuration onto your own hardware, and two bills stay rented whatever you choose.

Hardware you do not physically own is still rented compute. A VPS is your machine in law and someone else\u2019s hardware in fact, and buying a box ends that arrangement. Model inference is the second. Unless you run local models, every project on this page calls a hosted provider, so the token bill keeps arriving. Neither is a hidden cost, and the point is that a self-hosted platform leaves both decisions to you instead of bundling them.

The comparison table on this page measures that split across Kortix, OpenWork and Eigent. For the wider field, see [open-source AI agent platforms](/open-source-ai-agent-platforms).

## The projects that self-host today

Three projects clear the bar for a real self-hosted agent platform, and each takes a different shape. The [open-source Claude Cowork hub](/) collects the rest of this site.

Kortix is an open-source AI Operating System built on one idea: your company is a git repo. Agents, skills, memory, connector configuration and triggers are files in that repo, and \`kortix.yaml\` declares what each session boots and what it may touch. One isolated sandbox per session, each with "its own isolated machine and branch," and session work lands through a change request a person approves. Any model runs on your own keys, and connectors reach "3,000+ apps in a click, plus MCP, OpenAPI, Postman, GraphQL and raw HTTP." The code is public at [Kortix on GitHub](https://github.com/kortix-ai/suna), and self-hosting is three commands ([Read the docs](https://kortix.com/docs/host)):

\`\`\`
curl -fsSL https://kortix.com/install | bash
kortix self-host init --domain kortix.example.com
kortix self-host start
\`\`\`

On a bare Linux box a single bootstrap script installs Docker, installs the CLI and starts the stack together; on another operating system, run those three commands. The instance lands under \`~/.config/kortix/self-host/<instance>/\`, and its updater runs once a day unless you pin a version.

OpenWork is a free, open-source desktop app for macOS, Windows and Linux, built on the OpenCode harness. In desktop mode your files stay on your machine and prompts go straight to the provider you choose, with 50+ providers and local models on your own keys. Teams can self-host the control plane or buy a private managed instance, and its own example pauses the agent before it posts a message to Slack ([openworklabs.com](https://openworklabs.com)).

Eigent is an open-source multi-agent desktop app that organizes work as spaces, sessions and tasks. Its [self-hosting docs](https://www.eigent.ai/docs/self-hosting) lay out three arrangements: a managed application, self-hosted with your own provider APIs, or fully local on runtimes such as Ollama, vLLM or LM Studio. You follow each agent\u2019s progress, inspect its sources and file changes, then approve the result or ask for revisions. For Eigent against other tools, [Read the comparison](https://kortix.com/blog/kortix-vs-eigent-vs-kuse-ai).

## Who self-hosts, and why

### Predictable cost

Per-seat pricing punishes adoption, because every person you add is another line item. Self-hosting moves the bill to what the agents do. You pay your model provider per token at published rates, and the platform costs the hardware it runs on. For Kortix, "Self-host is free," so the only new line is the box. Most [self-hosted AI workspaces](/self-hosted-ai-workspace) follow the same shape: a trigger, an isolated run, and a reviewed output.

### Data you can hand to an auditor

Sessions, memory and connector configuration stay on your disks, which is the difference between showing an auditor your own logs and asking a vendor for theirs. "Secrets are encrypted at rest with a key per project," and "every action is recorded" on the instance you control.

### Governed agent fleets

A security team asks two questions: what may an agent touch, and who reviewed what it changed. Kortix answers both in files. It ships "Per-resource permissions for people and agents. Roles, groups, and an audit trail," and each tool is set to allow, ask or block, down to the arguments of a single call. "An Ask holds the call until a person approves it, then the agent resumes," and the shipped default is plain: "Approval gates you set. Off until you set them." On identity, Kortix ships "SAML 2.0 single sign-on and SCIM 2.0," and "Connector credentials are brokered server-side and never enter the machine." "Thousands of agents in parallel on one config, each on its own cloud computer," and session work reaches the default branch only through a merged change request.

## A checklist before you commit

Five questions settle it:

1. Does it run on my hardware? A Compose stack needs a Linux host with Docker; a desktop app needs your laptop.
2. Whose model keys pay? Your keys mean published rates; credits and seats mean a metered subscription.
3. Where does memory live? Files you can copy and back up beat a database you reach through a vendor login.
4. Is there a human gate? A change request a person merges is the strongest form; a chat log is the weakest.
5. Can I read the configuration? If agents, triggers and permissions are files, every answer is checkable.`,
    },
    {
      type: 'faq',
      id: 'faq',
      heading: { eyebrow: 'FAQ', title: 'Self-hosted platform questions' },
      items: [
        {
          id: 'cost',
          question: 'What does a self-hosted AI agent platform cost to run?',
          answer:
            'Two bills: hardware and tokens. Kortix is free to self-host, so the platform adds nothing beyond the box or VPS. OpenWork\u2019s desktop app is free with your own keys, and its Cloud plan starts charging per seat after the first five; Eigent lists a free tier with your own keys or local models, then paid plans from $19.99 per month. Prices checked October 2026 ([openworklabs.com](https://openworklabs.com), [eigent.ai](https://www.eigent.ai)). Your token bill follows the work the agents do, and headcount never enters it.',
        },
        {
          id: 'small-team',
          question: 'Can a small team actually run one?',
          answer:
            'Yes. A Kortix self-host is one Docker Compose stack on a single Linux host, and OpenWork and Eigent run on an ordinary desktop. The extra work is operational: you own backups, updates and monitoring now. The update schedule and the three things to back up are small next to that, and the bootstrap script gets a bare Linux box running in one command.',
        },
        {
          id: 'memory',
          question: 'Where does company memory live?',
          answer:
            'In a self-hosted Kortix instance it lives in the git repo on your own disks, next to the agents, skills and connector configuration. You back the instance up by copying three things: the Postgres data directory, the storage directory, and the `.env` that holds its keys ([Read the docs](https://kortix.com/docs/host)). Nothing sits in a vendor database you reach through a login.',
        },
      ],
    },
    {
      type: 'cta',
      title: 'Run Kortix on hardware you control.',
      sub: 'Self-host for free, or start on Kortix Cloud and move the same configuration to your own box.',
      ctas: [TRY, { label: 'See the self-hosting guide', href: '/self-hosting', variant: 'secondary' }],
      trust: TRUST,
    },
  ],
};

const workspace: Page = {
  slug: 'self-hosted-ai-workspace',
  navLabel: 'AI workspace',
  title: 'Self-hosted AI workspace: an open-source stack you own',
  metaDescription:
    'Self-hosted AI workspaces split into a model layer and an agent tooling layer. Kortix is the open-source AI Operating System that ships the second.',
  h1: 'What a self-hosted AI workspace is, and the open-source way to run one',
  lead: 'The phrase self-hosted AI workspace hides two systems: the model that reasons and the agent tooling around it. Kortix is the open-source AI Operating System, and it ships that tooling, plus your agents, skills, memory and connectors, as one git repo you own.',
  sections: [
    {
      type: 'artifact',
      heading: { eyebrow: 'Quickstart', title: 'Three commands on a Linux box.' },
      artifact: {
        file: 'terminal',
        lang: 'sh',
        lines: ['curl -fsSL https://kortix.com/install | bash', 'kortix self-host init --domain kortix.example.com', 'kortix self-host start', 'kortix self-host configure'],
        source: 'kortix.com/docs/host',
        copyText: 'curl -fsSL https://kortix.com/install | bash\nkortix self-host init --domain kortix.example.com\nkortix self-host start\nkortix self-host configure\n',
      },
      caption: 'Kortix self-hosting is one Docker Compose stack on a Linux box. Agent sessions run on a separate sandbox provider, not on this stack.',
    },
    {
      type: 'prose',
      body: `## The two layers a self-hosted AI workspace hides

A self-hosted AI workspace is two systems behind one phrase, and most people mean only one of them. The model layer is the language model that reads a prompt and writes an answer, running as inference on hardware you control. The agent tooling layer is everything around that model: the harness that turns it into an agent, the memory the workspace accumulates, and the connectors that reach your tools.

Self-hosting the tooling and self-hosting the model are separate jobs with separate costs. The tooling is software you run yourself, meaning the platform, its database, its file storage and its app. The model is compute you run, or an API you call. A workspace can own one layer and rent the other, and many real setups do exactly that.

Kortix is the open-source AI Operating System: your agents, their skills, your company memory, and every connector in one git repo you own, with the agents working on real cloud computers. The harness is OpenCode, and it turns any model you connect into an agent that does the work.

## Three arrangements, and the one Kortix is built for

Self-hosted AI workspaces fall into three arrangements. In the first, everything is local: a model runs on your own GPU through a local server, and the tooling runs on the same machine. In the second, the tooling is self-hosted and the model is hosted: you run the platform on your own box and call a provider\u2019s API with your own key. In the third, the whole workspace is managed, and one vendor runs the model and the tooling on its cloud.

Kortix is built for the second arrangement. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free. Any model provider with your own keys. The same wiring also reaches both extremes: an OpenAI-compatible endpoint in front of a local model server, or the managed Kortix Cloud.

## What you can run today

Kortix keeps your agents, skills, memory, connectors and triggers in one git repo, and each session runs on its own isolated sandbox on its own branch. Session work reaches \`main\` through a change request. Merge is default-deny for agents, so a person reads the diff first. It reaches 3,000+ apps in a click, plus MCP, OpenAPI, Postman, GraphQL and raw HTTP, and connector credentials are brokered server-side and never enter the machine. The [self-hosting guide](/self-hosting) walks through the install on your own box.

OpenWork is a free, open-source desktop app for macOS, Windows and Linux that runs agents on your own files. Its own page says it is built on OpenCode and can run self-hosted or as a managed private instance ([openworklabs.com](https://openworklabs.com)). In desktop mode, your files stay on your machine and prompts go to the model provider you connect.

Eigent is an open-source, general-purpose agent desktop app. Its self-hosting docs describe three choices: a managed application, a self-hosted setup with your own key, and a fully local mode on Ollama, vLLM, SGLang, LM Studio or LLaMA.cpp ([Eigent self-hosting docs](https://www.eigent.ai/docs/self-hosting)).

A managed workspace such as ChatGPT runs entirely on the vendor\u2019s cloud with no self-host path, and OpenAI\u2019s own page notes that chats may be reviewed and used to improve its models ([openai.com/chatgpt](https://openai.com/chatgpt/)).

## The hardware reality

Self-hosting the tooling and self-hosting the model need very different hardware. Running Kortix is one Docker Compose stack on a Linux box, and the docs keep its default API memory limit of 640 MiB on an 8 GiB host ([Kortix self-hosting docs](https://kortix.com/docs/host)). Agent sessions run on a separate sandbox provider rather than on that box, so the host does not grow with the number of sessions.

Running a model locally is the other budget. Eigent\u2019s docs state that local model requirements depend on the model and runtime, and that large models can require substantial memory or GPU capacity ([Eigent self-hosting docs](https://www.eigent.ai/docs/self-hosting)). A tooling-only self-host on an 8 GiB box is small and quick. A fully local workspace needs a GPU with enough memory to hold the model weights.

## Self-hosted workspace or a managed workspace

Managed and self-hosted workspaces trade control for setup. A managed workspace starts in minutes, runs on the vendor\u2019s cloud, and keeps your prompts and files under the vendor\u2019s terms. A self-hosted workspace asks for more setup, and in return you own the configuration, pick the model, and keep the memory in a repo you can read and back up.

Kortix leans toward ownership. It is the leading open-source alternative to Claude Cowork and ChatGPT Work. You can run the tooling on your own box, connect any model with your own keys, and still start on the managed cloud for the fast path. The [self-hosted AI agent platform guide](/self-hosted-ai-agent-platform) sets the two sides side by side, [AI agent orchestration](/ai-agent-orchestration) covers running many sessions at once, and [Read the guide](https://kortix.com/blog/best-self-hosted-ai-workspace) goes deeper on self-hosted workspaces.`,
    },
    {
      type: 'comparison',
      id: 'compare',
      heading: { eyebrow: 'Compare', title: 'What you can run, side by side', sub: 'Four ways to get a self-hosted or managed AI workspace, and where each one runs.' },
      columns: [
        { id: 'kortix', label: 'Kortix', note: 'Our pick', highlight: true, href: 'https://kortix.com', nofollow: true },
        { id: 'openwork', label: 'OpenWork', note: 'Desktop', href: 'https://openworklabs.com', nofollow: true },
        { id: 'eigent', label: 'Eigent', note: 'Desktop', href: 'https://www.eigent.ai/docs/self-hosting', nofollow: true },
        { id: 'chatgpt', label: 'ChatGPT', note: 'Managed', href: 'https://openai.com/chatgpt/', nofollow: true },
      ],
      rows: [
        { label: 'Open source', cells: [{ text: 'Yes', mark: 'yes' }, { text: 'Yes', mark: 'yes' }, { text: 'Yes', mark: 'yes' }, { text: 'No', mark: 'no' }] },
        {
          label: 'Where it runs',
          cells: [{ text: 'Kortix Cloud, your VPC, or on-prem', mark: 'yes' }, 'Your desktop, or a private instance', 'Your desktop, or your own server', 'The vendor\u2019s cloud'],
        },
        {
          label: 'Model choice',
          cells: [{ text: 'Any provider with your own keys', mark: 'yes' }, 'Any provider you connect', 'Cloud, your own key, or local', 'OpenAI models'],
        },
        {
          label: 'Built for',
          cells: [{ text: 'Agents and memory in one repo', mark: 'yes' }, 'Files and tools on your desktop', 'A multi-agent desktop workforce', 'Chat and light work'],
        },
        {
          label: 'Work lands as',
          cells: [{ text: 'A change request a person merges', mark: 'yes' }, 'Files you keep', 'Results you review', 'Chat in the vendor\u2019s app'],
        },
      ],
      footnote: 'Rival details come from each project\u2019s own page, checked October 2026.',
    },
    {
      type: 'faq',
      id: 'faq',
      heading: { eyebrow: 'FAQ', title: 'Self-hosted workspace questions' },
      items: [
        {
          id: 'model-included',
          question: 'Can you self-host an AI workspace completely, model included?',
          answer:
            'You can, and it takes two decisions. The tooling self-hosts on a modest Linux box. The model self-hosts only if you run a local server such as Ollama or vLLM on a GPU with enough memory for the weights. Many teams self-host the tooling and call a hosted model with their own key instead.',
        },
        {
          id: 'hardware',
          question: 'What hardware does a self-hosted AI workspace need?',
          answer:
            'For the tooling, one Linux box is enough, and the Kortix docs keep a default API memory limit of 640 MiB on an 8 GiB host. Agent sessions run on a separate sandbox provider, so they add no load to the box. A fully local model is the costly half: large models can require substantial memory or GPU capacity.',
        },
        {
          id: 'better',
          question: 'Is a self-hosted workspace better than a managed one?',
          answer:
            'Not in every case. A managed workspace starts in minutes and keeps your prompts on the vendor\u2019s cloud under its terms. A self-hosted workspace asks for more setup and gives you the configuration, the model choice and the memory in a repo you own. Kortix can run either way.',
        },
      ],
    },
    {
      type: 'cta',
      title: 'Run an open-source AI workspace you own.',
      sub: 'Self-host the tooling, bring any model with your own keys, and land every change through a review.',
      ctas: [TRY, { label: 'See the platform guide', href: '/self-hosted-ai-agent-platform', variant: 'secondary' }],
      trust: TRUST,
    },
  ],
};

const orchestration: Page = {
  slug: 'ai-agent-orchestration',
  navLabel: 'Orchestration',
  title: 'Open Source AI Agent Orchestration: Kortix, CrewAI and AutoGen',
  metaDescription:
    'Compare open-source AI agent orchestration: Kortix, CrewAI and AutoGen. Kortix is open source and runs the loop to a human review gate.',
  h1: 'Open-source AI agent orchestration, run end to end in Kortix',
  lead: 'AI agent orchestration is how a single agent becomes a team: defined roles, a sequence, and context passed from step to step. Kortix is the open-source AI Operating System, with agents, skills, company memory, and connectors in one git repo you own.',
  sections: [
    {
      type: 'comparison',
      id: 'compare',
      heading: {
        eyebrow: 'Compare',
        title: 'The platform and the two frameworks, side by side',
        sub: 'Kortix runs the whole loop; CrewAI and AutoGen are the open-source frameworks you build it on.',
      },
      columns: [
        { id: 'kortix', label: 'Kortix', note: 'Recommended', highlight: true, href: 'https://github.com/kortix-ai/suna', nofollow: true },
        { id: 'crewai', label: 'CrewAI', href: 'https://github.com/crewAIInc/crewAI', nofollow: true },
        { id: 'autogen', label: 'AutoGen', href: 'https://github.com/microsoft/autogen', nofollow: true },
      ],
      rows: [
        {
          label: 'Open source',
          cells: [
            { text: 'Open source. Read it, fork it, audit it.', mark: 'yes' },
            'Open source Python framework for role-based agents.',
            'Open source framework for multi-agent applications.',
          ],
        },
        {
          label: 'Hosting',
          cells: [
            { text: 'Run it on Kortix Cloud, in your VPC, or on-prem network.', mark: 'yes' },
            'You run the Python framework; AMP adds managed or on-prem.',
            'You run it yourself; local or distributed runtime.',
          ],
        },
        {
          label: 'Memory and secrets',
          cells: [
            { text: 'Secrets encrypted at rest, key per project; company memory in the repo.', mark: 'yes' },
            'Agent memory and knowledge files; keys in a .env file.',
            'Model keys through environment variables; no built-in memory store.',
          ],
        },
        {
          label: 'Tool permissions',
          cells: [
            { text: 'Set each tool to Allow, Ask or Block, down to the arguments.', mark: 'yes' },
            'Per-agent tools and guardrails; human review is optional.',
            'Tools passed per agent; no per-call approval documented.',
          ],
        },
        {
          label: 'Review gate',
          cells: [
            { text: 'Work reaches main through a change request; merge is default-deny.', mark: 'yes' },
            'Human review is a task setting; no merge gate.',
            'Human-in-the-loop patterns; no merge-style gate.',
          ],
        },
        {
          label: 'Status',
          cells: [{ text: 'Active. Self-host or Kortix Cloud.', mark: 'yes' }, 'Active development; AMP adds a commercial control plane.', 'Maintenance mode; community managed.'],
        },
      ],
      footnote: 'Framework cells come from each project\u2019s own repository, checked October 2026.',
    },
    {
      type: 'prose',
      body: `## What orchestration adds to a single agent

AI agent orchestration is the coordination of more than one agent so their work moves in a defined order and each step receives the context it needs. A single agent is one prompt with a scoped set of tools: it reads a task, calls tools, and returns a result. Orchestration adds three things on top. Roles give each agent one job. A sequence moves the work through known stages. Context passing carries what one step learned into the next.

A generalist agent that answers everything tends to do each part a little worse than a specialist would. Splitting a job into a researcher, a writer, and a verifier lets each one carry a narrow prompt and a narrow set of tools. The trade is coordination. You now decide the order, hand the context across each boundary, and check the result before it lands.

## The open-source frameworks engineers build on

CrewAI is an open-source Python framework for role-based multi-agent workflows. It gives developers Crews, where agents with defined roles collaborate, and Flows, event-driven code that controls the order of a run. You define each agent with a role, a goal and a set of tools, then run the crew. Its README also lists a commercial suite for managed deployment, observability and governance. ([CrewAI repo](https://github.com/crewAIInc/crewAI))

AutoGen is an open-source programming framework for multi-agent applications from Microsoft. It layers a Core API for message passing, an AgentChat API for common patterns such as group chat, and an extensions layer for model clients and tools. AutoGen\u2019s README says the project is in maintenance mode and points new projects to Microsoft Agent Framework. ([AutoGen repo](https://github.com/microsoft/autogen))

OpenCode is the single-agent harness Kortix runs. It is an open-source coding agent with a build agent for full-access work and a read-only plan agent, and it drives one agent at a time rather than a team. Kortix runs that harness for you. OpenCode is the harness, configured by a file in your repo, so the runtime is something you can read and change. ([OpenCode repo](https://github.com/anomalyco/opencode))

## Framework versus platform, and what you still build

A framework is a library you build a system around. CrewAI and AutoGen give you the abstractions for agents, messages and tool calls. Around them you still build the runtime that hosts each agent, the connection to your company\u2019s tools, the rule for who may approve an action, the place memory lives, and the way a change lands without breaking production. CrewAI\u2019s README lists a commercial control plane for managed deployment, observability and governance, which is the layer the framework itself does not carry. AutoGen\u2019s README says its Studio is for rapid prototyping, not production, and asks developers to add authentication and security themselves. ([CrewAI repo](https://github.com/crewAIInc/crewAI)) ([AutoGen repo](https://github.com/microsoft/autogen))

Kortix is the platform option, and it is where those four pieces already exist. Kortix is an open-source AI Operating System: your agents, their skills, your company memory, and every connector in one git repo you own. ([Read the docs](https://kortix.com/docs)) The platform supplies what a framework leaves to you:

- **A runtime.** One isolated sandbox per session. Each session has its own isolated machine and branch.
- **Tool permissions.** Set each tool to Allow, Ask or Block, down to the arguments of each call. An Ask holds the call until a person approves it, then the agent resumes.
- **Shared memory.** Company memory is plain files in the repo, so each agent reads and updates the same context.
- **A review gate.** Session work reaches main through a change request. Merge is default-deny for agents.

Each session boots its own isolated Linux machine with your repo already on it, so the agent has the tools and the code before it starts.

The division matters when you build to a security review. A framework hands a reviewer a library and leaves the surrounding controls to you. Kortix arrives with the controls beside the agents, and the whole thing self-hosts. Kortix is the leading open-source alternative to Claude Cowork and ChatGPT Work, and you can run it on your own hardware or on managed cloud.

## A research, synthesis and review pattern with a human gate

Three roles and one gate cover most orchestration work. A researcher agent gathers the facts and cites each one. A synthesizer agent drafts from those facts and passes its own assumptions back as open questions. A reviewer agent checks the draft against the sources and flags anything it cannot verify. Each agent runs in its own session, and the draft reaches main only when a person reads the change request and merges it.

\`\`\`yaml
# kortix.yaml
agents:
  researcher:
    file: agents/researcher.md
    connectors: [github]
  synthesizer:
    file: agents/synthesizer.md
  reviewer:
    file: agents/reviewer.md
\`\`\`

The gate is the point of the pattern. A framework can chain the three calls. The part you would otherwise build is the rule that the chain cannot write to main on its own. A session cannot merge a change request it opened itself, so a person reads the diff and decides. That keeps a weak synthesis from becoming the new truth just because an agent produced it.

## When orchestration is worth it

Orchestration earns its cost when the work has more than one stage and a wrong step is expensive. A report that cites sources, a release that has to pass review, a reconciliation that touches money: these split into roles with a check at each boundary. Orchestration is overhead when the task is one lookup or one draft that a single agent finishes in one pass, because the coordination costs more than the work it saves.

A short rule: start with one agent, add a second when a handoff is genuinely a different skill, and add the review gate before the agents touch anything irreversible. Raise the fleet from there. On Kortix, a session runs an agent in an isolated sandbox on its own branch, and thousands of agents run in parallel on one config, each on its own cloud computer.

For the self-hosted path, see the [self-hosted AI agent platform page](/self-hosted-ai-agent-platform) and the [self-hosted AI workspace page](/self-hosted-ai-workspace). To compare the wider field, use the [open-source AI agent platforms comparison](/open-source-ai-agent-platforms), or go [home](/). For a deeper build guide, read the [Kortix blog](https://kortix.com/blog/how-to-build-reliable-ai-agent-workflows) on reliable agent workflows.`,
    },
    {
      type: 'faq',
      id: 'faq',
      heading: { eyebrow: 'FAQ', title: 'Orchestration questions' },
      items: [
        {
          id: 'need-framework',
          question: 'Do you need a framework to orchestrate agents?',
          answer:
            'No. A framework helps you write the coordination code, but you can orchestrate two agents with plain prompts and a queue. A platform like Kortix supplies the runtime, the shared memory and the review gate so you do not rebuild them for every project.',
        },
        {
          id: 'vs-automation',
          question: 'How is orchestration different from workflow automation?',
          answer:
            'Workflow automation runs fixed steps in a fixed order, the same path every time. Orchestration gives each step an agent that can decide how to do its part, so the sequence adapts and the result needs review. Kortix keeps those agents in one repo and lands their work through a change request.',
        },
        {
          id: 'framework-or-platform',
          question: 'Is Kortix a framework or a platform?',
          answer:
            'Kortix is a platform. It uses OpenCode as its agent harness and runs the sessions, the shared memory and the permissions itself, so you write agents and skills instead of plumbing. CrewAI and AutoGen are libraries you build your own system on.',
        },
      ],
    },
    {
      type: 'cta',
      title: 'Run the whole loop in one open-source platform',
      sub: 'Start with one agent, then add the next step.',
      ctas: [TRY, { label: 'Explore self-hosting', href: '/self-hosted-ai-agent-platform', variant: 'secondary' }],
      trust: TRUST,
    },
  ],
};

const versus: Page = {
  slug: 'claude-cowork-vs-chatgpt-work',
  navLabel: 'Claude Cowork vs ChatGPT Work',
  title: 'Claude Cowork vs ChatGPT Work: the open-source third option',
  metaDescription:
    'Claude Cowork and ChatGPT Work are closed and single-vendor. Kortix is the open-source third option: one git repo you own, any model, self-host or cloud.',
  h1: 'Claude Cowork vs ChatGPT Work: the open-source option you own',
  lead: 'Claude Cowork and ChatGPT Work both put an agent to work, and both keep the configuration, the models and the work history in the vendor\u2019s product. Kortix is the open source third option: one git repo you own, any model with your own keys, and a self-hosted or managed home for the work.',
  sections: [
    {
      type: 'comparison',
      id: 'compare',
      heading: {
        eyebrow: 'Compare',
        title: 'Kortix, Claude Cowork and ChatGPT Work, side by side',
        sub: 'Kortix is the open-source third option; the rival columns state only what each vendor\u2019s own pages document.',
      },
      columns: [
        { id: 'kortix', label: 'Kortix', note: 'Our pick', highlight: true, href: 'https://kortix.com', nofollow: true },
        { id: 'cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork', nofollow: true },
        { id: 'chatgpt', label: 'ChatGPT Work', href: 'https://openai.com/chatgpt-work', nofollow: true },
      ],
      rows: [
        { label: 'Open source', cells: [{ text: 'Yes', mark: 'yes' }, { text: 'No', mark: 'no' }, { text: 'No', mark: 'no' }] },
        {
          label: 'Your configuration',
          cells: [{ text: 'Files in a git repo you own', mark: 'yes' }, 'In your Claude account', 'In ChatGPT Space'],
        },
        { label: 'Self-hosting', cells: [{ text: 'Yes, self-host is free', mark: 'yes' }, { text: 'No', mark: 'no' }, { text: 'No', mark: 'no' }] },
        {
          label: 'Where it runs',
          cells: [
            { text: 'Kortix Cloud, your VPC, or your own on-prem network', mark: 'yes' },
            'Anthropic\u2019s servers, or your Bedrock, Google Cloud or Microsoft Foundry account',
            'OpenAI\u2019s cloud',
          ],
        },
        {
          label: 'Models',
          cells: [{ text: 'Any model provider with your own keys', mark: 'yes' }, 'Anthropic\u2019s models only', 'OpenAI\u2019s models only'],
        },
        {
          label: 'Connectors',
          cells: [
            { text: '3,000+ apps, plus MCP, OpenAPI, Postman, GraphQL and raw HTTP', mark: 'yes' },
            'Claude connectors and MCP servers',
            '1,400+ plugins',
          ],
        },
        {
          label: 'Review gate',
          cells: [
            { text: 'Session work reaches main through a change request', mark: 'yes' },
            'Approve the plan before significant actions',
            'Plan mode: approve the plan before work starts',
          ],
        },
      ],
      footnote: 'Rival columns state only what each vendor\u2019s own pages document, checked October 2026.',
    },
    {
      type: 'prose',
      body: `## The axes that outlast a release cycle

Claude Cowork is Anthropic\u2019s agent for knowledge work, and ChatGPT Work is OpenAI\u2019s agent for finished work across a team\u2019s tools. Both are closed products from a single vendor, and both change constantly, so a feature-by-feature comparison goes stale within weeks. The questions that keep their answers are structural: who owns the source, whose models run the work, where the configuration and memory live, and where the product can run. On those axes the two closed platforms agree, and Kortix answers differently.

## Where the two closed platforms are the same

Neither Claude Cowork nor ChatGPT Work has a self-hosted edition. [Claude Cowork\u2019s help center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) says its sessions run in the cloud on Anthropic\u2019s servers, in an isolated environment, and that sessions and files are saved to your Claude account. [ChatGPT Work\u2019s page](https://openai.com/chatgpt-work) describes an agent available on macOS, Windows, web and mobile through OpenAI\u2019s service. Neither page offers a way to run the software on hardware you control, and neither publishes the source.

Anthropic and OpenAI hold the configuration, the memory and the work history. Cowork keeps projects, instructions and memory with the Claude account, and stores task history on Anthropic\u2019s systems. ChatGPT Work keeps files and past work in a team space inside ChatGPT. You set the goal and review the output, and the account that holds all of it stays with the vendor.

## The fork: who owns the work

Kortix is the open-source third option. It is an open-source AI Operating System: your agents, skills, company memory, and connectors in one git repo you own. An agent is \`agents/<name>.md\` (behavior) plus an \`agents.<name>\` block in \`kortix.yaml\` (governance). The configuration is a file you can diff and review.

Kortix runs where you choose. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free, and the [self-hosting guide](/self-hosting) covers the install. Each session has its own isolated machine and branch. Session work reaches \`main\` through a change request. Merge is default-deny for agents.

Kortix treats the model as a separate choice. Any model provider with your own keys, and connector credentials are brokered server-side and never enter the machine.

\`\`\`yaml
# kortix.yaml
agents:
  support-triage:
    file: agents/support-triage.md   # what it does, in plain markdown
    connectors: all                  # what it may reach
\`\`\`

The git repo is the fork in the road: the configuration, the memory and the work history are files you read, diff and keep, rather than state that lives with a vendor. Kortix is open source. Read it, fork it, audit it.

## How to decide

If you want an agent that turns a goal into a deck or a report inside the vendor\u2019s app, on the vendor\u2019s model and in the vendor\u2019s cloud, Claude Cowork and ChatGPT Work do that on their own terms. Pick the vendor you already pay for. If the work has to run on infrastructure you control, on a model you choose, with the configuration and history in a repo you own, pick Kortix, the leading open-source alternative to Claude Cowork and ChatGPT Work.

For more detail, the [open-source AI agent platforms](/open-source-ai-agent-platforms) guide maps the field, and the [self-hosted AI agent platform](/self-hosted-ai-agent-platform) page covers running it on your own hardware. For a worked example against one rival, [Read the Kortix blog](https://kortix.com/blog/kortix-vs-claude-cowork).`,
    },
    {
      type: 'faq',
      id: 'faq',
      heading: { eyebrow: 'FAQ', title: 'Questions about the two closed platforms' },
      items: [
        {
          id: 'self-host',
          question: 'Can Claude Cowork or ChatGPT Work be self-hosted?',
          answer:
            'No. [Claude Cowork\u2019s help center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) says its sessions run in the cloud on Anthropic\u2019s servers, in an isolated environment, and [ChatGPT Work](https://openai.com/chatgpt-work) runs on OpenAI\u2019s service. Neither vendor offers a self-hosted edition. Kortix runs where you choose: run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free.',
        },
        {
          id: 'models',
          question: 'Which models does each one run?',
          answer:
            'Claude Cowork runs Anthropic\u2019s models only, and ChatGPT Work runs OpenAI\u2019s models only, so the model and the vendor are the same choice. Kortix separates them: any model provider with your own keys. Or the ChatGPT plan you already pay for. Or sign in with your OpenCode Console account for OpenCode Zen and Go.',
        },
        {
          id: 'third-option',
          question: 'What is the open-source third option?',
          answer:
            'Kortix is an open-source AI Operating System: your agents, skills, company memory, and connectors in one git repo you own. Each session has its own isolated machine and branch, and session work reaches main through a change request. Merge is default-deny for agents, so a person reviews what lands.',
        },
      ],
    },
    {
      type: 'cta',
      title: 'Own the repo your agents run from',
      sub: 'Start with one job, in one repo you own.',
      ctas: [TRY, { label: 'Read the self-hosting guide', href: '/self-hosting', variant: 'secondary' }],
      trust: TRUST,
    },
  ],
};

/* ── the site ────────────────────────────────────────────────────────────── */

const site: SiteConfig = {
  domain: 'opensourceclaudecowork.com',
  siteName: 'Open Source Claude Cowork',
  description:
    'A self-hosting handbook for the open-source alternative to Claude Cowork: self-hosted AI agent platforms, the AI workspace, and orchestration, with Kortix.',
  updated: '2026-10-10',
  lang: 'en',
  accent: '#089f9f',
  fonts: 'system',
  /* A handbook page: a document with a folded corner and two text lines. */
  mark: { path: 'M5 3h9l5 5v13H5Zm2 2v14h10V9h-5V5Zm3 8h5v1.5h-5Zm0 3h5v1.5h-5Z' },
  headerCta: TRY,
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Self-hosting', href: '/self-hosting' },
    { label: 'Platforms', href: '/open-source-ai-agent-platforms' },
    { label: 'Self-hosted platform', href: '/self-hosted-ai-agent-platform' },
    { label: 'AI workspace', href: '/self-hosted-ai-workspace' },
    { label: 'Orchestration', href: '/ai-agent-orchestration' },
    { label: 'Claude Cowork vs ChatGPT Work', href: '/claude-cowork-vs-chatgpt-work' },
  ],
  footer: {
    blurb:
      'A self-hosting handbook for the open-source alternative to Claude Cowork. Our pick for the agent layer is Kortix.',
    columns: [
      {
        title: 'Pages',
        links: [
          { label: 'Home', href: '/' },
          { label: 'Self-hosting', href: '/self-hosting' },
          { label: 'Open-source AI agent platforms', href: '/open-source-ai-agent-platforms' },
          { label: 'Self-hosted AI agent platform', href: '/self-hosted-ai-agent-platform' },
          { label: 'Self-hosted AI workspace', href: '/self-hosted-ai-workspace' },
          { label: 'AI agent orchestration', href: '/ai-agent-orchestration' },
          { label: 'Claude Cowork vs ChatGPT Work', href: '/claude-cowork-vs-chatgpt-work' },
        ],
      },
      {
        title: 'Kortix',
        links: [
          { label: 'kortix.com', href: 'https://kortix.com', nofollow: true },
          { label: 'Read the docs', href: 'https://kortix.com/docs', nofollow: true },
          { label: 'Kortix on GitHub', href: 'https://github.com/kortix-ai/suna', nofollow: true },
        ],
      },
      {
        title: 'For agents',
        links: [
          { label: 'llms.txt', href: '/llms.txt' },
          { label: 'Sitemap', href: '/sitemap.xml' },
          { label: 'Atom feed', href: '/feed.xml' },
        ],
      },
    ],
    legal:
      'Not affiliated with Anthropic or OpenAI. Claude Cowork and ChatGPT Work are products of their owners, named here only to compare.',
  },
  pages: [home, selfHosting, platforms, hostedPlatform, workspace, orchestration, versus],
};

export default site;
