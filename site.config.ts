/**
 * opensourceclaudecowork.com
 *
 * Rebuild (redesign, 2026-10-17). Every page's copy comes from the content-writer's copy
 * sheets at data/briefs/oscw-<slug>-sheet.md, word for word. Every slug in the live
 * sitemap stays a page at the same slug.
 */
import type { Cta, Link, SiteConfig } from './src/config/types';

/* ── shared kit links ────────────────────────────────────────────────────── */

const TRY_KORTIX: Cta = { label: 'Try Kortix', href: 'https://kortix.com', nofollow: true, variant: 'primary' };
const KORTIX_GITHUB: Link = { label: 'Kortix on GitHub', href: 'https://github.com/kortix-ai/suna', nofollow: true };
const KORTIX_DOCS: Link = { label: 'Read the docs', href: 'https://kortix.com/docs', nofollow: true };

const cta = (label: string, href: string): Cta => ({ label, href, nofollow: /^https?:\/\/kortix\.com/.test(href), variant: 'secondary' });

const site: SiteConfig = {
  domain: 'opensourceclaudecowork.com',
  siteName: 'Open Source Claude Cowork',
  description:
    'An independent handbook of open-source alternatives to Claude Cowork: what you can read, what you can host, and what you can review. It recommends Kortix, the open-source AI Operating System.',
  updated: '2026-10-20',
  lang: 'en',
  accent: '#1e3a8a',
  fonts: 'system',
  /* An open repo page with a review check: the site's own mark, in a 24x24 box. */
  mark: {
    path: 'M6 2.5h9.5l4 4v15H4V2.5h2Zm-.5 1.5v16h13V8h-4V4H5.5Zm2.8 9.2 1.4-1.4 2.3 2.3 5-5 1.4 1.4-6.4 6.4-3.7-3.7Z',
  },
  headerCta: TRY_KORTIX,
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Compare', href: '/#comparison' },
    { label: 'Self-hosting', href: '/self-hosting' },
    { label: 'Alternatives', href: '/claude-cowork-alternatives' },
    { label: 'Pricing', href: '/claude-cowork-pricing' },
    { label: 'Platforms', href: '/open-source-ai-agent-platforms' },
    { label: 'Platform guide', href: '/self-hosted-ai-agent-platform' },
    { label: 'Workspace', href: '/self-hosted-ai-workspace' },
    { label: 'Orchestration', href: '/ai-agent-orchestration' },
    { label: 'vs ChatGPT Work', href: '/claude-cowork-vs-chatgpt-work' },
    { label: 'Open source?', href: '/is-claude-cowork-open-source' },
    { label: 'Migrate', href: '/migrate-from-claude-cowork' },
    { label: 'vs OpenWork', href: '/claude-cowork-vs-openwork' },
    { label: 'vs Perplexity Computer', href: '/claude-cowork-vs-perplexity-computer' },
    { label: 'For teams', href: '/claude-cowork-for-teams' },
    { label: 'vs Microsoft Copilot', href: '/claude-cowork-vs-microsoft-copilot' },
    { label: 'Local LLM', href: '/claude-cowork-local-llm' },
    { label: 'For Windows', href: '/claude-cowork-for-windows' },
    { label: 'Privacy', href: '/claude-cowork-data-privacy' },
    { label: 'How to use', href: '/how-to-use-claude-cowork' },
    { label: 'Integrations', href: '/claude-cowork-integrations' },
    { label: 'Plugins', href: '/claude-cowork-plugins' },
    { label: 'Memory', href: '/claude-cowork-memory' },
    { label: 'vs OpenClaw', href: '/claude-cowork-vs-openclaw' },
    { label: 'vs Claude Code', href: '/claude-cowork-vs-claude-code' },
    { label: 'For Mac', href: '/claude-cowork-for-mac' },
    { label: 'Google options', href: '/claude-cowork-alternative-google' },
    { label: 'Free', href: '/claude-cowork-alternative-free' },
    { label: 'Self-hosted Claude Code', href: '/self-hosted-claude-code' },
    { label: 'Self-hosted AI agent', href: '/self-hosted-ai-agent' },
    { label: 'What is Cowork', href: '/what-is-claude-cowork' },
    { label: 'What happened to Cowork', href: '/what-happened-to-claude-cowork' },
    { label: 'Security and audit log', href: '/claude-cowork-security-and-approvals' },
    { label: 'Projects on GitHub', href: '/claude-cowork-github-projects' },
    { label: 'Reddit threads', href: '/open-source-claude-cowork-reddit' },
  ],
  footer: {
    blurb:
      'The self-hosting handbook: an independent guide to open-source alternatives to Claude Cowork, built around three checks, what you can read, what you can host, and what you can review. Our recommendation is Kortix, the open-source AI Operating System.',
    columns: [
      {
        title: 'Start here',
        links: [
          { label: 'Home', href: '/' },
          { label: 'Self-hosting', href: '/self-hosting' },
          { label: 'Alternatives', href: '/claude-cowork-alternatives' },
          { label: 'Pricing', href: '/claude-cowork-pricing' },
          { label: 'Migrate', href: '/migrate-from-claude-cowork' },
          { label: 'How to use', href: '/how-to-use-claude-cowork' },
          { label: 'What Cowork is', href: '/what-is-claude-cowork' },
          { label: 'What happened to Cowork', href: '/what-happened-to-claude-cowork' },
        ],
      },
      {
        title: 'The system',
        links: [
          { label: 'Open-source platforms', href: '/open-source-ai-agent-platforms' },
          { label: 'Self-hosted platform guide', href: '/self-hosted-ai-agent-platform' },
          { label: 'AI workspace', href: '/self-hosted-ai-workspace' },
          { label: 'Orchestration', href: '/ai-agent-orchestration' },
          { label: 'Self-hosted Claude Code', href: '/self-hosted-claude-code' },
          { label: 'Self-hosted AI agent', href: '/self-hosted-ai-agent' },
          { label: 'Local LLM', href: '/claude-cowork-local-llm' },
          { label: 'Integrations', href: '/claude-cowork-integrations' },
          { label: 'Cowork plugins', href: '/claude-cowork-plugins' },
          { label: 'Cowork memory', href: '/claude-cowork-memory' },
        ],
      },
      {
        title: 'Compare',
        links: [
          { label: 'vs ChatGPT Work', href: '/claude-cowork-vs-chatgpt-work' },
          { label: 'vs OpenWork', href: '/claude-cowork-vs-openwork' },
          { label: 'vs Microsoft Copilot', href: '/claude-cowork-vs-microsoft-copilot' },
          { label: 'vs Perplexity Computer', href: '/claude-cowork-vs-perplexity-computer' },
          { label: 'vs OpenClaw', href: '/claude-cowork-vs-openclaw' },
          { label: 'vs Claude Code', href: '/claude-cowork-vs-claude-code' },
          { label: 'Google options', href: '/claude-cowork-alternative-google' },
          { label: 'Projects on GitHub', href: '/claude-cowork-github-projects' },
          { label: 'Reddit threads', href: '/open-source-claude-cowork-reddit' },
        ],
      },
      {
        title: 'Run it',
        links: [
          { label: 'For teams', href: '/claude-cowork-for-teams' },
          { label: 'For Windows', href: '/claude-cowork-for-windows' },
          { label: 'For Mac', href: '/claude-cowork-for-mac' },
          { label: 'Data privacy', href: '/claude-cowork-data-privacy' },
          { label: 'Security and audit log', href: '/claude-cowork-security-and-approvals' },
          { label: 'Free alternative', href: '/claude-cowork-alternative-free' },
          { label: 'Is it open source?', href: '/is-claude-cowork-open-source' },
        ],
      },
      {
        title: 'Kortix',
        links: [{ label: 'kortix.com', href: 'https://kortix.com', nofollow: true }, KORTIX_DOCS, KORTIX_GITHUB],
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
      'Not affiliated with Anthropic, OpenAI, Google or Microsoft. Claude, Claude Cowork, Claude Code, ChatGPT, Gemini, Copilot and the product names on this site belong to their owners. This site names them only to compare.',
  },

  pages: [
    /* ── home ─────────────────────────────────────────────────────────────── */
    {
      slug: '',
      navLabel: 'Home',
      title: 'Self-hosted Claude Cowork alternative: the open-source handbook',
      metaDescription:
        'Kortix is the open-source alternative to Claude Cowork you can read, self-host on your own hardware, and review through a change request.',
      h1: 'An open-source Claude Cowork alternative you can read, host, and review',
      lead: 'Claude Cowork became part of Claude on September 16, 2026, and the question that remains is where the work runs. Kortix is the open-source answer you can host yourself: agents, skills, company memory, and connectors in one git repo you own, on hardware you pick.',
      sections: [
        {
          type: 'hero',
          layout: 'subject',
          eyebrow: { lead: 'The self-hosting handbook' },
          tagline: 'The leading open-source alternative to Claude Cowork and ChatGPT Work',
          ctas: [TRY_KORTIX, { label: 'See the comparison', href: '#comparison', variant: 'secondary' }],
          artifacts: [
            {
              file: 'how work lands',
              lang: 'text',
              source: 'https://kortix.com/docs',
              lines: [
                'A project is a git repo with kortix.yaml at its root.',
                'A session runs one agent in its own sandbox.',
                'The sandbox clones the repo and works on a new branch.',
                "The agent commits, pushes the session branch, and opens a change request against the project's default branch.",
                'A person with the project.gitops.merge permission reviews the change request and merges it into the default branch.',
              ],
            },
          ],
          proof: 'Session work reaches main through a change request. Merge is default-deny for agents.',
          trust: 'Open source · One repo you can read · Your hardware or ours',
        },
        {
          type: 'comparison',
          id: 'comparison',
          heading: {
            title: 'The same three checks, applied to each option',
            sub: "Rival cells come from each vendor's own pages, checked October 2026.",
          },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true },
            { id: 'claude-cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
            { id: 'chatgpt-work', label: 'ChatGPT Work', href: 'https://openai.com/chatgpt-work' },
            { id: 'openwork', label: 'OpenWork', href: 'https://openworklabs.com' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [
                { text: 'Yes', mark: 'yes' },
                { text: 'No', mark: 'no' },
                { text: 'No', mark: 'no' },
                { text: 'Yes', mark: 'yes' },
              ],
            },
            {
              label: 'What you can read',
              cells: [
                'The whole platform: agents, skills, memory, connectors, source',
                'Product page and the Help Center',
                "OpenAI's product and help pages",
                "The desktop app's source",
              ],
            },
            {
              label: 'Where it runs',
              cells: [
                'Kortix Cloud, your VPC, or on-prem',
                "Anthropic's cloud, or Amazon Bedrock, Google Cloud, or Microsoft Foundry",
                "OpenAI's hosted service, plus desktop and mobile apps",
                'Your desktop; self-host or managed instance',
              ],
            },
            {
              label: 'Self-host',
              cells: [
                { text: 'One Docker Compose stack, free', mark: 'yes' },
                { text: 'Not offered', mark: 'no' },
                { text: 'Not offered', mark: 'no' },
                'Self-host or managed private instance',
              ],
            },
            {
              label: 'How work lands',
              cells: [
                'A change request a person merges',
                'Shows its plan and waits for approval',
                'You approve the plan in Plan mode',
                'Waits for a yes before it posts',
              ],
            },
          ],
        },
        {
          type: 'use-cases',
          heading: { title: 'What a session hands back', sub: 'Three jobs, three artifacts, from an ordinary workweek.' },
          artifactLabel: 'Session output',
          cards: [
            {
              id: 'customer-support',
              tag: 'Customer support',
              headline: "Triage the weekend's tickets before standup.",
              body: "A trigger starts the session on Monday morning: the agent groups the tickets, drafts the replies, and flags the two that need a person.",
              artifact: {
                kind: 'checks',
                file: 'support/triage-mon.md',
                footer: '3 groups · replies in review',
                items: [
                  { label: 'Bug reports', value: '18', tone: 'down' },
                  { label: 'Refund requests', value: '6', tone: 'down' },
                  { label: 'Feature asks', value: '9', tone: 'up' },
                ],
              },
            },
            {
              id: 'legal-review',
              tag: 'Legal review',
              headline: 'First pass on a folder of contracts.',
              body: 'The agent reads each agreement against the playbook and returns a memo per contract with the clauses that depart from it.',
              artifact: {
                kind: 'sheet',
                file: 'legal/contract-review.xlsx',
                columns: ['Contract', 'Status', 'Flag'],
                widths: ['32%', '24%', '44%'],
                aligns: ['left', 'left', 'left'],
                toneColumn: 1,
                footer: '3 contracts · 1 escalated',
                rows: [
                  { cells: ['Northwind renewal', 'Flagged', 'Auto-renewal clause'], tone: 'warn' },
                  { cells: ['Globex MSA', 'Escalated', 'No liability cap'], tone: 'down' },
                  { cells: ['Acme NDA', 'Cleared', 'Term within policy'], tone: 'up' },
                ],
              },
            },
            {
              id: 'hiring-ops',
              tag: 'Hiring ops',
              headline: 'Screen the application stack overnight.',
              body: "The session reads each application against the role's rubric, scores it, and drafts the follow-up for everyone who makes the shortlist.",
              artifact: {
                kind: 'checks',
                file: 'hiring/screen-tue.md',
                footer: '5 candidates advance',
                items: [
                  { label: 'Applications read', value: '41', tone: 'up' },
                  { label: 'Strong fits', value: '5', tone: 'up' },
                  { label: 'Follow-ups drafted', value: '5', tone: 'up' },
                ],
              },
            },
          ],
        },
        {
          type: 'code-panels',
          heading: { title: 'Start with three commands', sub: "The README's own commands: an install, a first session, and a trigger." },
          panels: [
            {
              tab: 'Install',
              file: 'terminal',
              lang: 'sh',
              source: 'https://github.com/kortix-ai/suna',
              lines: ['curl -fsSL https://kortix.com/install | bash', 'kortix init', 'kortix ship'],
            },
            {
              tab: 'First session',
              file: 'terminal',
              lang: 'sh',
              source: 'https://github.com/kortix-ai/suna',
              lines: ['kortix sessions new --prompt "Summarize this week\'s commits and open a change request"', 'kortix cr ls'],
            },
            {
              tab: 'A trigger',
              file: 'kortix.yaml',
              lang: 'yaml',
              source: 'https://github.com/kortix-ai/suna',
              lines: [
                'triggers:',
                '  - slug: daily-digest',
                '    type: cron',
                "    cron: '0 0 9 * * 1-5'",
                "    prompt: Summarize yesterday's support tickets and open a change request with the digest.",
              ],
            },
          ],
        },
        {
          type: 'open-source',
          stars: { value: 20000, suffix: '+', caption: 'GitHub stars on the Kortix repo, October 2026' },
          title: 'Open source. Read it, fork it, audit it.',
          links: [KORTIX_GITHUB, KORTIX_DOCS],
        },
        {
          type: 'prose',
          body: `## The merge, in plain terms

On September 16, 2026, Anthropic merged Claude Cowork and chat into one Claude. What Cowork could do now happens in any conversation, with the context, skills, and connectors you already have. Existing Cowork work carries over: chats, projects, artifacts, connectors, and skills ([the announcement](https://claude.com/blog/cowork-is-now-claude)).

The rollout is staged. Pro and Max plans get it first, in the Claude app on web, desktop, and mobile over the coming weeks. Anthropic says Team and Free plans will follow soon, and Enterprise admins will hear at least 30 days before anything changes for their organizations.

The Cowork product page is still live, and it still sells the capability with paid plans. It also carries the note that Cowork consumes limits faster than Chat. Its own FAQ draws the line between Anthropic's two tools: Cowork is for non-coding knowledge work, and Claude Code is for software engineering. The name still points at a real capability. What moved is where that capability lives.

## The question the merge leaves open

A capability inside a vendor's app runs where the vendor runs it. The model is the vendor's, and the files and connectors sit in the vendor's product. None of that configuration is yours to copy out. The point predates the merge, and the merge made it sharper. The question an alternative has to answer is direct: where does the system that does the work run?

This handbook answers it with three checks: what you can read, what you can host, and what you can review. None of them requires asking a vendor for permission.

## What you can read

Kortix is open source, so the readable part is the whole system. Agents are markdown files, skills are folders beside them, and company memory is plain files that accumulate. At the root, kortix.yaml names what each session gets. The starter repo lays it out in ordinary folders: agents, skills, and memory side by side, with the OpenCode config under harnesses/. Nothing important hides behind a dashboard: if a question has an answer, the answer is in a file you can grep.

For the wider field, [how the open-source options differ](https://kortix.com/blog/open-source-ai-agent-platform) sorts frameworks, visual builders, and full platforms by the job each one actually fits.

## What you can host

Self-hosting Kortix is one Docker Compose stack on a Linux box you control. The self-host commands install and run the full stack on your own infrastructure. The same configuration runs unchanged on Kortix Cloud if you would rather start there. [The self-hosting guide](/self-hosting) takes a bare box from nothing to a running stack, and the runtime, the data, and the configuration stay wherever you put them.

## What you can review

The five lines in the hero artifact are the whole gate, read top to bottom. A session works in its own sandbox on a branch of its own, and the agent commits there before opening a change request against the default branch. A person with the merge permission reads it and merges it. Nothing merges itself: work reaches \`main\` through a change request a person approves, unless an admin granted the merge capability. That capability is the \`project.gitops.merge\` grant, and an admin is the one who grants it. Without that grant, the merge waits for a person. Anthropic's Cowork asks before actions by default, and you keep the final say there too. The difference is where the gate sits: here it is the repo's own merge path, on hardware you hold.

## Where the choice stands

Reaching the capability got easier on September 16: open Claude and hand it a task. Deciding where the system around the capability runs is the part that still takes a real answer. The comparison table puts the options through the three checks, and [Kortix vs Claude Cowork](https://kortix.com/blog/kortix-vs-claude-cowork) takes the two products apart in detail.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions before you choose where the work runs', sub: 'Short answers, with the moving facts dated.' },
          items: [
            {
              id: 'open-source-alternative',
              question: 'Is there an open-source alternative to Claude Cowork?',
              answer:
                'Yes. Kortix is an open-source AI Operating System: agents, skills, company memory, and connectors are files in one git repo, and the code itself is public. The same comparison sets it beside Claude Cowork and the open-source desktop options.',
            },
            {
              id: 'self-hosted',
              question: 'Can Kortix be self-hosted?',
              answer:
                'Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free. The [self-hosting guide](/self-hosting) takes a bare Linux box from nothing to a running stack.',
            },
            {
              id: 'september-merge',
              question: 'What happened to Claude Cowork in September 2026?',
              answer:
                'Anthropic merged Cowork and chat into one Claude on September 16, 2026: the capability now runs in any conversation, with your existing context, skills, and connectors ([the announcement](https://claude.com/blog/cowork-is-now-claude)). Pro and Max went first in the rollout, Team and Free follow soon, and existing Cowork work carries over.',
            },
            {
              id: 'free-alternative',
              question: 'Is there a free alternative to Claude Cowork?',
              answer:
                'Claude Cowork works with a paid plan today: Pro starts at $17 a month, and usage limits apply ([the product page](https://claude.com/product/cowork), checked October 2026). Free is $0 with 500 credits per month, managed models, every feature and 1 project. Self-host is free too, so the open-source route adds no subscription beyond the hardware.',
            },
            {
              id: 'who-reviews',
              question: "Who reviews an agent's work?",
              answer:
                'You do, by default. The agent works on its own branch and opens a change request, and a person with the merge permission reads the diff and merges it into the default branch. Nothing merges itself: work reaches \`main\` through a change request a person approves, unless an admin granted the merge capability.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Put the work where you can read it',
          sub: 'Start on Kortix Cloud, or self-host the whole stack on your own box.',
          ctas: [TRY_KORTIX, cta('Read the self-hosting guide', '/self-hosting')],
        },
      ],
    },

    /* ── self-hosting ─────────────────────────────────────────────────────── */
    {
      slug: 'self-hosting',
      navLabel: 'Self-hosting',
      title: 'No self-hosted Claude Cowork: what open source makes yours',
      metaDescription:
        'There is no self-hosted Claude Cowork. The open source stack that runs instead makes the install the easy half of the move.',
      h1: 'Self-hosting a Claude Cowork replacement: open source covers the easy half',
      lead: "No. Claude Cowork runs on Anthropic's servers, and Anthropic publishes no build to install; since September 16, 2026 it is not even a separate product. The stack a team runs instead is Kortix. It is the open-source AI Operating System. This page counts the parts of the move that no installer does for you.",
      sections: [
        {
          type: 'comparison',
          heading: {
            title: 'Where the work, the rules and the review sit',
            sub: "Each rival cell comes from that vendor's own pages, read this month.",
          },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true, href: 'https://kortix.com/docs/host', nofollow: true },
            { id: 'openwork', label: 'OpenWork', href: 'https://openworklabs.com' },
            { id: 'cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
          ],
          rows: [
            { label: 'Open source', cells: ['Yes', 'Yes, the desktop app', 'No'] },
            { label: 'What you install', cells: ['The stack behind `kortix self-host`', 'A desktop app for macOS, Windows, Linux', 'Nothing; it comes with a paid plan'] },
            { label: 'Where the work runs', cells: ['Your server, your VPC or Kortix Cloud', 'Your desktop, plus optional cloud workers', "Anthropic's servers, or your own cloud account"] },
            { label: 'Where the rules live', cells: ['`kortix.yaml` and markdown, in one repo', 'Skills and MCP servers shared by one link', 'Admin settings inside Claude'] },
            { label: 'Who reviews the work', cells: ['A person merges a change request', 'You read the files on your machine', 'Claude asks before acting by default'] },
            { label: 'What a move leaves behind', cells: ['Nothing, once the repo and `.env` are copied', 'History, saved credentials, scheduled tasks', 'Chats, projects and connectors stay in Claude'] },
            { label: 'Model keys', cells: ['Your own provider key, per project', 'Your own keys across 50+ providers', "Anthropic's plan and its usage limits"] },
          ],
        },
        {
          type: 'code-panels',
          heading: {
            title: 'The commands, copied from the docs',
            sub: 'On a server that already runs Docker, a tunnel for a first look, and the review that follows.',
          },
          panels: [
            {
              tab: 'Server',
              file: 'terminal',
              lang: 'sh',
              source: 'https://kortix.com/docs/host',
              lines: [
                'curl -fsSL https://kortix.com/install | bash',
                'kortix self-host init --domain kortix.example.com --admin-email you@example.com',
                'kortix self-host start',
              ],
            },
            {
              tab: 'No domain',
              file: 'terminal',
              lang: 'sh',
              source: 'https://kortix.com/docs/host',
              lines: ['kortix self-host init --tunnel cloudflare', 'kortix self-host start'],
            },
            {
              tab: 'Review',
              file: 'terminal',
              lang: 'sh',
              source: 'https://kortix.com/docs/quickstart',
              lines: [
                'kortix cr ls      # open change requests',
                'kortix cr diff 1  # the unified diff',
                'kortix cr merge 1 # merge into the base branch',
                'git pull          # bring the merged work into your clone',
              ],
            },
          ],
        },
        {
          type: 'prose',
          body: `## Anthropic's own pages settle the first question

Claude Cowork has no self-hosted edition, and nothing is scheduled to change that. The help center describes where the work happens: "Cowork runs your sessions remotely in the cloud (in beta on Team and Enterprise plans), so your sessions and files live with your Claude account and follow you across desktop, web, and mobile" ([Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork), as of October 20, 2026).

The product page offers two placements, and both sit inside Anthropic's estate: a Claude account, or your own cloud provider account through Amazon Bedrock, Google Cloud or Microsoft Foundry ([the Cowork page](https://claude.com/product/cowork), checked October 2026). Neither is a build you put on a machine of your own.

September 16, 2026 removed the last place such an edition could have lived. Anthropic folded Cowork into Claude, and VentureBeat reported that "the Cowork name itself will eventually disappear" ([the report](https://venturebeat.com/technology/anthropic-is-killing-off-cowork-and-folding-it-into-claude-launching-claude-docs-and-claude-slides), September 16, 2026). Existing work carried over: chats, projects, artifacts, connectors and skills.

Waiting will not produce a release. A team that wants the work on hardware it controls is choosing another system, and choosing is the easy part. Carrying is the rest of this page.

## The install a stack finishes for you

The platform a team installs in its place is a set of files. What shapes how its agents work, from the skills they load to the memory they keep to the connectors they reach, sits in a repository the team controls, and the sessions run on real cloud computers.

On a server that already runs Docker and Compose, installing it is the three commands in the first panel (checked October 2026). A bootstrap script does the same job on a bare box. Either route writes four files into one instance directory, \`~/.config/kortix/self-host/<instance>/\`: \`docker-compose.yml\`, \`.env\`, a Caddyfile and \`updater.sh\`. Then \`kortix self-host start\` brings up one Compose project. It holds the web app, the API and the gateway that fronts model calls, a migration job that runs once, a daily updater, and the data, auth and storage services. Caddy holds ports 80 and 443.

The setup questions arrive after the download: a reachability mode, the admin email, the sandbox provider, a preview domain, an update policy. One answer is not optional. The docs say it in two lines: "Sessions run on Platinum sandboxes, not on the server. The instance must be reachable from the internet so those sandboxes can call back." A \`PLATINUM_API_KEY\` pays for that compute, and without it no session starts.

That sentence rearranges the plan a team usually has. The box you own holds the platform. The sessions do not run on it. That means a public address, a DNS record and outbound routes before anything works, and a machine behind a locked rack will not do. Tunnel mode, the second panel, is the cheap trial: the web app stays on \`http://localhost:13737\` and only the API is published, at an address that changes whenever the tunnel restarts.

The last two steps sit outside the terminal. Sign up as the admin, connect GitHub at \`/admin/git\`, create a project, then add a model key inside it. A self-hosted instance has no managed models, so every project brings its own provider key. After that, \`kortix self-host doctor\` lists what is still wrong, and every failing check comes with the value to set.

## What never travels in a move

Two vendors describe the same boundary from opposite sides. OpenWork's migration guide lists what its import does not bring: "Conversation history, saved credentials, and scheduled tasks do not move" ([OpenWork's Cowork migration guide](https://openworklabs.com/docs/start-here/migrate-from-claude-cowork), checked October 2026). Anthropic's version is the mirror image, with the same items staying put because the merge kept them in place, memory included: "Memory is shared between Chat and Claude Cowork when Cowork runs in the cloud" ([the help center](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context), checked October 2026).

Read together, the two lists describe one rule. What travels is the material somebody wrote down: a prompt, a permission, a skill, a cadence. What stays is the history that material produced and the credentials it spent. The [Claude Cowork migration kit](https://github.com/ArtemShatokhin/claude-cowork-migration-kit) keeps that list, dated, beside the checklist for the move. A team planning only the install plans the half a vendor will do for it, and the rebuilt order on [the migration walkthrough of this site](/migrate-from-claude-cowork) is the other half.

## Three things the server has to carry

The first is the rules. \`kortix.yaml\` sits at the root of the project repository, and its agents map holds governance alone: the path of each agent's markdown file, and the connectors, secrets, permissions and skills that agent may use. The template's own comment states the default: v2 is deny-by-default, so an omitted grant resolves to none. The excerpt on this page is six lines of it.

The second is the review. Merge is default-deny for agents. The agent commits to a branch of its own and opens a change request, which proposes to merge that branch into the default branch ([Read the docs](https://kortix.com/docs/quickstart), checked October 2026). It stops there. Someone reads the diff first. The grant decides the rest. The starter agent carries \`kortix_permissions: all\`, which lets the API merge what it opened. The managed skill that Kortix adds to every session tells it to stop there, and to hand the change request up instead. Two controls, and the second one is a person.

The third is the keys. Your provider accounts, one per project, billed by the provider that serves them. Nothing about that bill is ours to change, and the configuration line that names it sits in \`.env\` and in the project, in files a reviewer can read.

The code behind the platform is public, so anyone can read it and change it. When the box stops being interesting, the same install runs on Kortix Cloud, and [the page on whether Claude Cowork is open source](/is-claude-cowork-open-source) covers why the other product has nothing to fork.

## The cost, counted in habits

"Self-host is free." Nothing else in the budget is large. A Linux server with a public IP. A Platinum key. A provider bill per project. Attention is the part that does not come bundled with an install:

- A person owns the review queue. Default-deny means nothing lands until someone merges.
- A person owns the DNS. A and AAAA records for the domain and \`api.<domain>\`, a wildcard \`*.p.<domain>\` for sandbox previews, and ports 80 and 443 open. Without the wildcard, previews fall back to a path proxy that breaks links and doctor fails.
- A person owns the instance directory. It holds the \`.env\` with every secret and signing key, and \`API_KEY_SECRET\` encrypts every stored secret. Lose that value and the stored credentials stop being readable.
- A person closes sign-up once the team is in, with \`EMAIL_URL\` or \`DISABLE_SIGNUP=true\`. Until then, anyone who reaches the instance can create a confirmed account, the admin address included.
- A person watches the updater. It checks once a day, migrates the database before it swaps the app services, keeps the previous version for a rollback, and reports the last outcome in \`kortix self-host status\`.

The bullets are the shape of the answer. Self-hosting a replacement for Cowork is one server and one Compose stack, plus five jobs that a hosted product was quietly doing. A team that can name someone for each of them will run this comfortably, and [what a self-hosted stack keeps after a restart](/self-hosted-ai-agent-platform) is the test to run on the box a month later.

Two alternatives are worth naming and both appear in the table on this page. The desktop case is set out on [the Cowork and OpenWork comparison](/claude-cowork-vs-openwork), which is the nearer read if the work never leaves one laptop.`,
        },
        {
          type: 'artifact',
          heading: { title: 'The file that holds the setup after the move' },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/kortix.yaml',
            lines: [
              '# v2 is deny-by-default: an omitted connectors/secrets/kortix_permissions/',
              '# skills grant resolves to "none", so a scoped specialist starts locked down.',
              'agents:',
              '  kortix:',
              '    file: agents/kortix.md',
              '    kortix_permissions: all',
            ],
          },
          caption:
            "Six lines from the starter manifest: the agent's markdown file, and the grant that decides what it may do without a person.",
        },
        {
          type: 'faq',
          heading: {
            title: 'The four questions this query arrives with',
            sub: 'The answer first, then the fact that moves, dated where it moves.',
          },
          items: [
            {
              id: 'sh-claude-self-hosted',
              question: 'Can Claude be self-hosted?',
              answer:
                "No. Claude runs on Anthropic's servers, or in your own cloud provider account through one of the three the Cowork page names. Anthropic publishes no install and no on-premises edition, so there is nothing to put on a machine of your own.",
            },
            {
              id: 'sh-still-cowork',
              question: 'Does Claude still have cowork?',
              answer:
                'The capability, yes; the name is on its way out. Anthropic folded Cowork into Claude on September 16, 2026, and Claude now decides whether a request gets an answer or a task. Sessions still run in the cloud, and existing chats and projects carried over.',
            },
            {
              id: 'sh-run-locally',
              question: 'Does Claude Cowork run locally?',
              answer:
                "Only the front half. Sessions run on Anthropic's servers, and the desktop app is what reaches local files, your browser and your screen. Anthropic documents no mode that runs a session on a machine you own.",
            },
            {
              id: 'sh-cost',
              question: 'How much does it cost to have Claude Cowork?',
              answer:
                'Nothing beyond a paid Claude plan, which is the only way in: Pro, Max, Team or Enterprise. The [Cowork page](https://claude.com/product/cowork) lists Pro at $17 and Team seats at $20 (checked October 2026).',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Name the reviewer, then run the install',
          sub: 'One Compose stack on a server you own, with a change request as the only way work lands.',
          ctas: [TRY_KORTIX, cta('What survives a reboot', '/self-hosted-ai-agent-platform')],
        },
      ],
    },

    /* ── claude-cowork-plugins ────────────────────────────────────────────── */
    {
      slug: 'claude-cowork-plugins',
      navLabel: 'Plugins',
      title: 'Claude Cowork plugins: open source files, a closed runtime',
      metaDescription:
        'Claude Cowork plugins are forkable files inside a product you do not host. Kortix, the open-source AI Operating System, keeps those parts in your repo.',
      h1: 'Claude Cowork plugins are open source; the runtime is not',
      lead: 'A Claude Cowork plugin is a folder of markdown and JSON that tells Claude how a role gets done: skills, slash commands, connectors, and sub-agents in one package. Kortix, the open-source AI Operating System, keeps the same four things as files in a git repo you own.',
      sections: [
        {
          type: 'prose',
          body: `## What a Claude Cowork plugin holds

Anthropic answers this in one sentence on its help center, and the sentence is worth reading twice. A plugin "bundles skills, connectors, and sub-agents into a single package, so you get a ready-to-go setup from your first conversation instead of configuring each piece yourself" ([Use plugins in Claude](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), checked October 2026).

Four parts sit in the package, and all four are files. A skill is markdown carrying how one job is done, and Claude draws on it when that job comes up. A slash command is an action a person triggers on purpose, typed as \`/sales:call-prep\`. Connectors are declared in \`.mcp.json\` and wire the package to the services the role depends on. Sub-agents ship as separate agents inside the same folder.

Anthropic also says where each part runs. Skills and commands work in chat on the web, in the chat tab of Claude Desktop, and in Cowork. Hooks and sub-agents run in Cowork and Claude Code only, so they appear grayed out in chat. Cowork itself has been part of Claude since September 2026 ([the announcement](https://claude.com/resources/articles/cowork-is-now-claude)).

## The catalogue is a repository anyone can read

Anthropic publishes 11 plugins at [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins), described on the repo as "built for Claude Cowork, also compatible with Claude Code". The set covers a company by job function: sales, legal, finance, marketing, product management, support, data, productivity, enterprise search, bio-research, and one that builds more plugins.

Every folder repeats the same shape. \`.claude-plugin/plugin.json\` is the manifest. \`.mcp.json\` holds the tool connections, \`commands/\` the slash commands, and \`skills/\` the domain knowledge. So a reader can answer the question a buyer actually has, which is what the sales plugin will tell Claude to do with a call transcript, before anyone installs it. Anthropic puts the offer plainly at the end: "Plugins are just markdown files. Fork the repo, make your changes, and submit a PR."

That is the half of the story worth keeping. A team can read the skill a plugin ships, hold it against the way the team works, and fork it. Customizing is mostly file edits. Point \`.mcp.json\` at your own tools, drop your terminology and process into the skill files, adjust the workflow where the team does it differently.

## What a fork cannot reach

Three documented details decide what a forked plugin can touch. None of them lives in the folder a team edits.

The install is an account record. "Plugins you add in Claude on the web or in Claude Desktop are saved to your account, not to your computer", and plugins are available "to all paid plans (Pro, Max, Team, Enterprise)". On Team and Enterprise plans an owner can turn on sharing, and a shared plugin arrives view-only, with access gone when the person leaves the organization. Plugins added from a marketplace cannot be shared at all.

The call leaves from Anthropic's cloud. "In Cowork, connectors reach external services through Anthropic's cloud, not through your local network. A custom connector must point to a server that's reachable over the public internet from Anthropic's IP ranges." A plugin edited to reach an internal inventory service still has to clear that rule. The edit is yours. The network path belongs to the product.

The execution boundary is set the same way. Some plugins ship local MCP servers, which Anthropic says "run on your computer with the same permissions as any other program you run". Its advice follows from that: install only from sources you trust, and Enterprise administrators can switch local MCP servers off.

Put the three side by side and the investment splits in two. The skill you wrote, the commands you renamed and the manifest you forked travel with you. Who may install the package, which network the call leaves from and which processes run beside it are settled by a runtime outside the repository, at a layer your reviewers cannot read.

## The same four parts, as files the company reviews

Kortix is the open-source AI Operating System, and a Kortix project is a git repo. The manifest documents its own layout in the header. \`agents/<name>.md\` holds one agent per file, \`skills/<name>/SKILL.md\` holds a skill every harness loads, \`tools/<name>.ts\` holds a tool the project wrote, and \`kortix.yaml\` sits beside them as the governance layer. The mapping from a Cowork plugin is direct:

- the plugin's skill becomes \`skills/<name>/SKILL.md\`, which a reviewer reads in a change request like any other file;
- its sub-agents become \`agents/<name>.md\`, one markdown file each;
- its connectors become connector grants in \`kortix.yaml\`, and the manifest is deny-by-default, so an omitted grant resolves to none and a scoped agent starts locked down;
- its commands become skills and tools the agent can call, listed under \`tools:\` for every agent of the project.

The manifest section on this page shows six lines of that file: the agent's file pointer, its connector grant, its skills grant, and the repo checkout a session gets in \`/workspace\`. Open source. Read it, fork it, audit it. Session work reaches \`main\` through a change request. Merge is default-deny for agents. [Read the docs](https://kortix.com/docs) for the manifest fields and the self-host install.

Placement is the last piece. One isolated sandbox per session. Each session has its own isolated machine and branch. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free.

So the question a team asks before investing changes shape. With a Cowork plugin, it is whether the tool you need is reachable from Anthropic's IP ranges. With the repo-owned layout, it is whether the file that grants the reach is one you wrote and can show. [Cowork connectors and who holds the credential](/claude-cowork-integrations) takes that second question apart, and [there is no open-source Claude Cowork](/is-claude-cowork-open-source) covers why the product has nothing to fork.

## When a plugin is the right answer

If one person or a small team works inside Claude, the tools are services Anthropic's IP ranges can reach, and nobody needs to approve a config change, install Anthropic's plugins and edit \`.mcp.json\`. An afternoon, no platform to run, and a better starting point than a blank skill file. Building a harness first would buy nothing.

The owned layout starts to pay when the conditions change. Several unattended agents have to share one setup. A connector has to reach a service that is not publicly reachable. A review has to show which agent may touch which system. A person leaving must not take the setup with them. Those are checkable, and a team that fails none of them should keep the plugin and get on with the work.

If the appeal is working on your own files rather than on a system that runs server-side, the [comparison of Cowork against OpenWork](/claude-cowork-vs-openwork) is the nearer read. [The Claude Cowork migration kit](https://github.com/ArtemShatokhin/claude-cowork-migration-kit) is the sibling repository that keeps the dated record of what a move out of Cowork carries and what it leaves behind.`,
        },
        {
          type: 'artifact',
          heading: { title: 'Six lines of the manifest that registers the same four things' },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/kortix.yaml',
            lines: [
              'agents:',
              '  kortix:',
              '    file: agents/kortix.md',
              '    connectors: all',
              '    skills: all',
              '    workspace: { project_repository: true }',
            ],
          },
          caption:
            "The agent's markdown file, its connector grant, its skills grant, and the repo checkout each session gets, exactly as the starter ships them.",
        },
        {
          type: 'faq',
          heading: {
            title: "Plugin questions, answered from Anthropic's own pages",
            sub: 'Each answer starts with the short version.',
          },
          items: [
            {
              id: 'plugins-best',
              question: 'Which plugins for Claude Cowork are best?',
              answer:
                "Anthropic's own legal, sales, and data plugins, because Anthropic publishes them and anyone can read the files before installing. Start with the one matching the role, then edit `.mcp.json` to point at your tools.",
            },
            {
              id: 'plugins-legal',
              question: 'Is there a legal plugin for Claude Cowork?',
              answer:
                'Yes. Anthropic ships one that reviews contracts, triages NDAs, navigates compliance, assesses risk, and drafts templated responses, wired to Slack, Box, Egnyte, Jira, and Microsoft 365.',
            },
            {
              id: 'plugins-claude-ai',
              question: 'Does Claude AI have plugins?',
              answer:
                'Yes. Plugins work on every paid plan, in chat on the web, in the Claude Desktop chat tab, and in Cowork, and the skills and commands they bundle work in all three.',
            },
            {
              id: 'plugins-integrations',
              question: 'What integrations does Claude Cowork have?',
              answer:
                "Cowork reaches tools through connectors, which means a directory of prebuilt apps plus custom remote MCP connectors. In Cowork those calls leave through Anthropic's cloud, so a custom server must be reachable from its IP ranges.",
            },
          ],
        },
        {
          type: 'cta',
          title: 'Read the plugin, then decide who owns the runtime',
          sub: 'One open-source stack, with skills, agents and connectors as files in a repo you own, on Kortix Cloud or your own hardware.',
          ctas: [TRY_KORTIX, cta('Start self-hosting', 'https://opensourceclaudecowork.com/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-memory ─────────────────────────────────────────────── */
    {
      slug: 'claude-cowork-memory',
      navLabel: 'Memory',
      title: 'Claude Cowork memory follows the session, which is why open source keeps it in your repo',
      metaDescription:
        "Cowork memory works in cloud sessions and not in local ones, per Anthropic's help center. Open source Kortix keeps project memory in a repo you own.",
      h1: 'Where Claude Cowork memory lives, and what open source keeps instead',
      lead: "Yes, Claude Cowork has memory, but only when the session runs in the cloud: Anthropic's help center says sessions that run locally on your computer don't use memory. Kortix is the open-source AI Operating System, where project memory is files in a repository you own. What that difference means for a team is the rest of this page.",
      sections: [
        {
          type: 'prose',
          body: `## What Anthropic's help center says about memory

One sentence settles the question. Anthropic's [article on chat search and memory](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context) says this, as of October 20, 2026: "Memory is shared between Chat and Claude Cowork when Cowork runs in the cloud; Cowork sessions that run locally on your computer don't use memory."

A note further down repeats the boundary: "Memory across Cowork and chat only works when Cowork runs in the cloud. It isn't available in Cowork sessions that run locally on your computer." Both sentences come from the same article, and the second one is where the feature stops. Summaries that quote only the first half give the wrong answer to anyone whose session runs on their own machine.

The article also says what memory is made of. Claude saves it as individual topics while you chat, rather than writing a summary after the fact, and each project carries its own. The setting is fixed when a task starts, so a task that begins without memory cannot pick it up later. On Team and Enterprise plans, "owners control whether memory is available, and it's off for each member until they turn it on."

One more fact from the same page matters to anyone comparing setups: memory is switched on by default for Free, Pro, and Max plans, which makes it the default experience for an individual and an opt-in one for a team.

## Where the session runs decides whether memory applies

Anthropic's [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) explains the placement. "Cowork runs your sessions remotely in the cloud (in beta on Team and Enterprise plans), so your sessions and files live with your Claude account and follow you across desktop, web, and mobile." Its mechanics section adds that the work "runs on Anthropic's servers, in an isolated environment, and your sessions and files are saved to your Claude account."

Cloud is the ordinary case today, so the cloud half of the memory article is the half that applies. The answer to "does Claude Cowork have memory" turns on where the session runs.

The product's edges are still moving. The same article now says "Claude Cowork is now just Claude", with Claude deciding whether a request gets a quick answer or a task. Memory behaves as before: it belongs to the account, and it is present when the session runs in the cloud.

## Three questions that separate account memory from company memory

Memory written from one person's chats answers a question about that person. A team has a different question. What does the company know after six months of work, and can anyone open that knowledge, review it, and hand it on? Three questions sort the two arrangements.

**Who can read it.** Memory settings sit on each person's own Settings → Memory screen. On Team and Enterprise plans, a member begins with memory off until they turn it on. What a colleague learned last month is not a document anyone else can open.

**Where it lives.** With the Claude account, on Anthropic's servers, for a session that runs in the cloud. For a session on your own machine, the article says there is no memory to read at all.

**What happens when someone leaves.** A memory built out of one person's chats is held with that account. There is no file to pass to whoever picks up the work, so the context goes with the person.

Account memory does what it says, and it makes one person's Claude more useful over time. The gap opens when "what the company knows" has to hold more than "what I discussed with Claude last month".

## What owned memory looks like in Kortix

In Kortix, memory is a folder. The [Kortix docs](https://kortix.com/docs) describe a project as a git repo with \`kortix.yaml\` at its root, where agents, skills, memory, tools, triggers and connectors are files. The base template says the same in its opening comment block. \`memory/\` is "the project brain (the \`kortix-memory\` skill)", sitting beside \`agents/\`, \`skills/\` and \`tools/\`. The manifest gives the memory tool to every agent of the project, so what one session writes is there for the next person's session in the same repo.

Because memory is a file, a change to it arrives the way every other change does. "Session work reaches \`main\` through a change request. Merge is default-deny for agents." A person reads the diff before it lands, and that review is where a wrong lesson gets caught before it becomes policy. Who can read the folder is an ordinary permission question: "Per-resource permissions for people and agents. Roles, groups, and an audit trail." [The security and approvals page](/claude-cowork-security-and-approvals) takes the gate apart.

Placement stays a choice. "Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free." And the property that matters when a vendor renames a product, merges it, or changes its plan: "Open source. Read it, fork it, audit it." What that covers is set out on [the page about whether Claude Cowork is open source](/is-claude-cowork-open-source).

A person leaving is then a permissions change, and their notes stay in the history. So does every version of a memory file. That history is what a review process needs, and it is the part an account setting cannot give. The [Claude Cowork migration kit](https://github.com/ArtemShatokhin/claude-cowork-migration-kit) lists what moves and what stays when a team leaves Cowork, memory included, each item with the page it came from.

## When account-level memory is enough

For one person working alone, Anthropic's arrangement is the shorter path. Cloud sessions only, and the switch already on. There is no colleague to hand context to and nothing that needs a reviewer, and the memory is genuinely personal: how you like a draft, who your manager is, which deadline moved. Building a repository to hold that would be work with no reader.

The calculation changes with the second person. Two members, each starting with memory off until they turn it on, make a company whose shared knowledge depends on settings nobody audits. That is where a folder in a repo you own starts earning its place.`,
        },
        {
          type: 'artifact',
          heading: { title: 'The layout the base template ships' },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/kortix.yaml',
            lines: [
              '#   agents/<name>.md          one file per agent (`agents.<name>.file`)',
              '#   skills/<name>/SKILL.md    skills, loaded by every harness',
              '#   memory/                   the project brain (the `kortix-memory` skill)',
              '#   tools/<name>.ts           project tools, loaded by every harness (`tools:` below)',
              '#   harnesses/opencode/       files only OpenCode reads (`opencode.config_dir`)',
            ],
          },
          caption: "Five lines from the manifest in the starter's base template.",
        },
        {
          type: 'faq',
          heading: {
            title: 'Four questions the memory answer raises',
            sub: 'Short answers, with the facts that move dated where they are used.',
          },
          items: [
            {
              id: 'memory-feature',
              question: 'Does Claude AI have a memory feature?',
              answer:
                'Yes. Claude builds memory from your chats and saves it as individual topics, each one added as you go. On Team and Enterprise plans an owner decides whether the feature is available.',
            },
            {
              id: 'memory-vs-claude',
              question: 'Is Claude Cowork different from regular Claude?',
              answer:
                'Less than it used to be. Anthropic\'s Cowork article says "Claude Cowork is now just Claude", and Claude now decides whether a request gets a quick answer or a task. Cloud sessions, scheduled tasks and shared memory describe the same product.',
            },
            {
              id: 'memory-files',
              question: 'Does Claude Cowork access your files?',
              answer:
                "Yes. On desktop it reads and writes local files without uploads, and in a cloud session it works on the files you hand it and saves the output to your account. Anthropic's Cowork article documents both.",
            },
            {
              id: 'memory-background',
              question: 'Does Claude Cowork run in the background?',
              answer:
                'Yes, in the cloud. Anthropic says a cloud session keeps working when you close your laptop, and scheduled tasks run with no device online. A task that needs something on your machine reaches it through the desktop app.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Put the memory where your company can keep it',
          sub: 'Start on Kortix Cloud, or self-host the whole stack on your own box.',
          ctas: [TRY_KORTIX, cta('Read the data privacy page', '/claude-cowork-data-privacy')],
        },
      ],
    },

    /* ── open-source-ai-agent-platforms ───────────────────────────────────── */
    {
      slug: 'open-source-ai-agent-platforms',
      navLabel: 'Platforms',
      title: 'Open source AI agent platforms: three kinds, one you can own',
      metaDescription:
        'An open-source AI agent platform means a company platform, a framework, or an autonomous agent, and Kortix is the open-source one a team can own.',
      h1: 'Three kinds of open-source AI agent platform, one to own',
      lead: 'The phrase open-source AI agent platform names three different kinds of software. A company platform, a framework, and an autonomous agent share the search results, and only one is built for a team to own and govern. Kortix is that one: open source, free to self-host, with the operating layer in a repo you own.',
      sections: [
        {
          type: 'comparison',
          heading: { title: 'Three kinds, measured on what a team owns', sub: 'Every rival cell comes from that project\u0027s own site or repository, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true, href: 'https://kortix.com/docs', nofollow: true },
            { id: 'openwork', label: 'OpenWork', href: 'https://openworklabs.com' },
            { id: 'crewai', label: 'CrewAI', href: 'https://www.crewai.com' },
            { id: 'autogpt', label: 'AutoGPT', href: 'https://github.com/Significant-Gravitas/AutoGPT' },
          ],
          rows: [
            {
              label: 'Kind',
              cells: [
                'The company platform, an AI Operating System',
                'Free desktop app for macOS, Windows and Linux',
                'Python framework, a control plane sold beside it',
                'Classic autonomous agent, plus a builder and hosted platform',
              ],
            },
            {
              label: 'Built for',
              cells: [
                'A whole organization',
                'Knowledge workers on their own files',
                'Engineers embedding agents in their own app',
                'Anyone describing a job in plain English',
              ],
            },
            {
              label: 'Memory, skills, connectors',
              cells: [
                'In one git repo you own',
                'On your machine, with skills and MCP servers you add',
                'In your Python code and the app around it',
                'Inside its platform; self-hosted, you run the parts',
              ],
            },
            {
              label: 'Who reviews the work',
              cells: [
                'A person holds the merge',
                'Asks before actions; you approve at the desktop',
                'Approval gates in its control plane',
                'Its dashboard flags actions that need your attention',
              ],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: 'The starter manifest every project begins from' },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://github.com/kortix-ai/suna/blob/main/packages/starter/templates/base/kortix.yaml',
            lines: [
              '# Kortix project manifest. Source of truth for project-wide config that',
              '# lives in git alongside the code. `kortix_version` pins the schema so',
              '# the platform can evolve safely.',
              '# Project layout — harness-neutral content at the root:',
              '#   agents/<name>.md          one file per agent (`agents.<name>.file`)',
              '#   skills/<name>/SKILL.md    skills, loaded by every harness',
              '#   memory/                   the project brain (the `kortix-memory` skill)',
              '#   tools/<name>.ts           project tools, loaded by every harness',
              'kortix_version: 2',
              'agents:',
              '  kortix:',
              '    file: agents/kortix.md',
            ],
          },
          caption: 'The header of kortix.yaml, the file that makes a company platform\u0027s configuration plain files in git.',
        },
        {
          type: 'prose',
          body: `## One label, three kinds of software

Search results for an open-source AI agent platform hold three kinds of software that barely overlap. Every one of them calls itself a platform. A company platform is infrastructure a whole organization runs: named agents, shared skills, company memory, connectors to real tools, and a gate a person holds on changes. A framework is a library a developer composes into an application the team writes, hosts and secures. An autonomous agent is a single loop that takes a goal and works at it until it decides the job is done.

The kind you adopt decides what you own. A framework leaves you owning code you wrote around someone else's library. An autonomous agent leaves you owning the loop and whatever you built around it. A company platform ships the surroundings as the product, so memory, skills, connectors and the review gate arrive in files the team can read. The comparison table on this page sorts four projects into those kinds. The starter manifest shown with it makes the platform kind concrete.

## The company platform: the surroundings ship in the repo

Kortix is the open-source AI Operating System, and it is the company-platform entry in the table. The starter project makes the claim in files. \`kortix.yaml\` opens: "Kortix project manifest. Source of truth for project-wide config that lives in git alongside the code." Core folders carry the substance: \`agents/\` holds one markdown file per agent, \`skills/\` holds how the company does a job, \`memory/\` is the project brain, and \`tools/\` is code every agent may call. Governance sits in the same manifest, next to behavior. An \`agents:\` map grants connectors, secrets, permissions and skills per agent. An omitted grant resolves to none, in the starter's own words: "so a scoped specialist starts locked down".

The openness runs underneath the interface. OpenCode is the harness. The harness module in Kortix's agent-server source registers two adapters, OpenCode and pi, and picks one when a session is provisioned. Agents, skills and tools sit at the repository root, where either harness reads them. A team can therefore read the thing that actually runs its sessions, and see in the same repo where a second runtime plugs in.

The review gate is where the kinds truly separate. Session work reaches \`main\` through a change request. Merge is default-deny for agents. A framework team builds that gate themselves, and an autonomous agent rarely has one at all. Permissions are files too. Per-resource permissions for people and agents. Roles, groups, and an audit trail. Who may reach what is a line in the manifest, and the record of what was done sits beside it.

## The framework: strong code, borrowed time

Anyone searching for an AI orchestration platform, open-source edition, mostly finds frameworks: libraries that coordinate agents and hand you the company around them. CrewAI is the clearest example. Its repository describes an open-source Python framework for orchestrating role-playing autonomous agents, organized into Crews of role-based agents and Flows for event-driven workflows. Its own homepage now leads with something bigger: an enterprise build and runtime, with a control plane in the execution path of every workflow. Approval gates come with it. Both statements describe one company, and the boundary between them is the point. The part you install free is the framework; governed operation arrives with the commercial control plane or with code you write.

AutoGen shows the second risk of the kind, which is time. Microsoft's repository now opens with a caution: the project is archived and no longer maintained. No bug fixes, security fixes, new features or support are coming. New projects are pointed to Microsoft Agent Framework instead (checked October 2026). Nothing in the code stopped working the day support ended; what changed is who answers when it breaks. A framework team accepts that its orchestration layer ages with someone else's priorities. The [AI agent orchestration explainer](/ai-agent-orchestration) on this site covers what those layers do.

## The autonomous agent: one loop, and the rest to build

AutoGPT is the archetype of the third kind, and its repository shows how the kind has grown up. The front page opens with "Describe what you want done. AutoGPT builds the agent, runs it, and reports back". The project now spans the classic standalone agent in its \`classic/\` folder, a visual builder, and a hosted platform (checked October 2026). Self-hosting is the free path, on the project's own description: you provide the infrastructure and the model keys, and you maintain the deployment. A single loop is genuinely good at a bounded job. What it does not carry is the company around the job: organization-wide memory, a shared connector layer, and a review gate that spans people. Those arrive only if you build them, which is the framework trade wearing a friendlier face.

## What owning and governing has to mean

Ask four questions of anything that calls itself an open-source AI agent platform. Can the team read the configuration as files, with history? Can someone other than the author review finished work before it lands? Are permissions written down per resource, for people and for agents? Can you leave, taking the memory and the skills with you?

A framework answers the middle two with whatever code the team has written so far. An autonomous agent rarely reaches them at all. The company-platform kind answers by construction: files in a repo a person merges, grants a reviewer can read, and a gate that holds without anyone watching it. That is why Kortix leads the comparison table on this page. "Own and govern" is a property of the kind before it is a feature of any product. Custom code can even come along: project tools are modules in the same repo, listed in the same manifest, so your own scripts and the agents share one review path.

## Start with the kind, then the project

Pick the kind before the brand. Agent steps inside an application the team already ships call for a framework: CrewAI fits role-based crews in Python, and nothing new should start on AutoGen while it is archived. A single bounded goal suits AutoGPT, self-hosted or on its hosted platform. One person's desktop belongs to OpenWork, free and open source, with agents working on your own files. A governed layer for a whole organization is the company-platform kind. Kortix is the recommendation there: open source, self-host free, the operating layer in a repo the team owns. The [open-source AI agent platforms guide on the Kortix blog](https://kortix.com/blog/open-source-ai-agent-platform) walks the wider field. The [self-hosted AI agent platform page](/self-hosted-ai-agent-platform) on this site covers running one on your own hardware.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions buyers ask before choosing a kind' },
          items: [
            {
              id: 'what-makes-platform',
              question: 'What makes something an open-source AI agent platform?',
              answer:
                'The source is public, you can run it on infrastructure you control, and it hosts agents that carry out work. Three kinds qualify: a company platform, a framework, and an autonomous agent.',
            },
            {
              id: 'crewai-platform',
              question: 'Is CrewAI an open-source AI agent platform?',
              answer:
                'The part you install free is a Python framework. CrewAI\u0027s own site markets an enterprise build and runtime with a control plane around it, so treat it as the framework kind and budget for the runtime and review path yourself.',
            },
            {
              id: 'merge-effect',
              question: 'Did Anthropic merging Cowork into Claude change the open-source field?',
              answer:
                'On September 16, 2026, Anthropic merged Claude Cowork and chat into one Claude, rolling out on Pro and Max plans first, with Team and Free plans to follow soon ([the announcement](https://claude.com/blog/cowork-is-now-claude)). That change stayed inside a hosted product, so the open-source field still splits into the same three kinds.',
            },
            {
              id: 'must-self-host',
              question: 'Do I have to self-host Kortix to own it?',
              answer:
                'No. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free. Owning lives in the repo and the review gate; the building it runs in is a separate choice.',
            },
            {
              id: 'choose-platform',
              question: 'How do I choose the right open-source AI agent platform?',
              answer:
                'Choose the kind first, then compare inside it. A team that wants one governed system for the whole organization wants the company-platform kind, and Kortix is that kind.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Run the kind you can own.',
          sub: 'One manifest, one review gate, and files the whole team can read.',
          ctas: [TRY_KORTIX, KORTIX_DOCS],
        },
      ],
    },

    /* ── self-hosted-ai-agent-platform ────────────────────────────────────── */
    {
      slug: 'self-hosted-ai-agent-platform',
      navLabel: 'Platform guide',
      title: 'Open-source self-hosted AI agent platform: what survives a restart',
      metaDescription:
        'Judge a self-hosted AI agent platform by what survives a restart: the open-source Kortix keeps agents, memory and connector rules as repo files.',
      h1: 'The restart test for an open-source self-hosted AI agent platform',
      lead: 'Reboot the box and count what comes back: a self-hosted AI agent platform is judged by what survives. Kortix, the open-source AI Operating System, keeps one git repo: agents, skills, memory and connector rules as files, with `kortix.yaml` at the root. Three projects take the test on this page.',
      sections: [
        {
          type: 'comparison',
          heading: { title: 'Three projects, one restart test', sub: 'Each rival cell comes from that project\u0027s own site or docs, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true },
            { id: 'openwork', label: 'OpenWork', href: 'https://openworklabs.com' },
            { id: 'eigent', label: 'Eigent', href: 'https://www.eigent.ai/docs/self-hosting' },
          ],
          rows: [
            {
              label: 'Install',
              cells: [
                'One bootstrap script on a Linux server with Docker',
                'A desktop app for macOS, Windows and Linux',
                'Clone the repo, then npm install with Node.js and Python',
              ],
            },
            {
              label: 'Where configuration lives',
              cells: [
                'One git repo: agents, skills, memory, triggers, tools',
                'Skills, MCP servers and plugins packaged for one-click import',
                'A repo checkout with env files and local Spaces',
              ],
            },
            {
              label: 'What a restart keeps',
              cells: [
                'The repo and the instance directory on your disks',
                'Your local files and the packages you imported',
                'Whatever you committed or backed up first',
              ],
            },
            {
              label: 'Model keys',
              cells: ['Your own providers, added in the app', '50+ providers on your own keys', 'Cloud APIs, bring-your-own keys or local runtimes'],
            },
            {
              label: 'Open source',
              cells: ['Yes, the whole platform', 'Yes, the desktop app', 'Yes, the application'],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { eyebrow: 'The header', title: 'Where truth lives' },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://github.com/kortix-ai/suna/blob/main/packages/starter/templates/base/kortix.yaml',
            lines: [
              '# Kortix project manifest. Source of truth for project-wide config that',
              '# lives in git alongside the code. `kortix_version` pins the schema so',
              '# the platform can evolve safely. v2 manifests are YAML-only, with one',
              '# `agents:` map per project — GOVERNANCE ONLY (connectors/secrets/',
              '# kortix_permissions/skills/workspace/enabled), plus `file`, the path of',
              "# the agent's `.md`. Agent BEHAVIOR (description, model, mode, temperature,",
              "# permission, the prompt itself, …) lives entirely in that `.md`'s",
              '# frontmatter + body — a stock OpenCode agent file works as-is.',
            ],
          },
        },
        {
          type: 'artifact',
          heading: { eyebrow: 'The layout', title: 'Every part of the system is a folder' },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://github.com/kortix-ai/suna/blob/main/packages/starter/templates/base/kortix.yaml',
            lines: [
              '#   agents/<name>.md          one file per agent (`agents.<name>.file`)',
              '#   skills/<name>/SKILL.md    skills, loaded by every harness',
              '#   memory/                   the project brain (the `kortix-memory` skill)',
              '#   tools/<name>.ts           project tools, loaded by every harness (`tools:` below)',
            ],
          },
        },
        {
          type: 'artifact',
          heading: { eyebrow: 'The default', title: 'Deny first, in writing' },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://github.com/kortix-ai/suna/blob/main/packages/starter/templates/base/kortix.yaml',
            lines: [
              '# v2 is deny-by-default: an omitted connectors/secrets/kortix_permissions/',
              '# skills grant resolves to "none", so a scoped specialist starts locked down.',
            ],
          },
        },
        {
          type: 'artifact',
          heading: { eyebrow: 'The grants', title: 'One agent\u0027s reach, in eight lines' },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://github.com/kortix-ai/suna/blob/main/packages/starter/templates/base/kortix.yaml',
            lines: [
              'agents:',
              '  kortix:',
              '    file: agents/kortix.md',
              '    connectors: all',
              '    secrets: all',
              '    kortix_permissions: all',
              '    skills: all',
              '    workspace: { project_repository: true }',
            ],
          },
        },
        {
          type: 'prose',
          body: `## What a restart actually tests

Power-cycle the box your agents run on. Then count what comes back without anyone retyping a setting. That count is the honest measure of a self-hosted AI agent platform, because a restart strips a system down to what it actually holds. Files on your disks return as they were. State inside a hosted application returns only if the vendor built an export, in whatever shape the export takes.

Companies that host AI agents on their own hardware usually arrive here after a scare or an audit. A vendor changes a plan, an account gets locked, a reviewer asks to see the logs. The restart turns those worries into one question about location: where do the agents, the memory and the connector rules physically live? Kortix answers with a git repo. The comparison on this page measures two other open-source projects against it, and the wider field is mapped on the [open-source AI agent platforms](/open-source-ai-agent-platforms) page. The [open-source AI agent platform guide](https://kortix.com/blog/open-source-ai-agent-platform) on the Kortix blog takes the same question at book length.

## The manifest declares the fleet

A Kortix project is a git repo with \`kortix.yaml\` at its root. The platform can host that repo, or you connect your own on GitHub. Every moving part of the system is a file inside it. Agents are markdown files under \`agents/\`. Skills are folders with a \`SKILL.md\`. Memory is a directory the sessions read and write. Triggers are entries in the manifest. Most of a project's setup lives in those files, which is what makes it reviewable.

The agents map in the same file carries governance and nothing else: which connectors, secrets, permissions and skills each agent may use. The template says it outright in a comment: v2 is deny-by-default, so an agent with no grant starts with none. What an agent does lives elsewhere, in its own markdown file. That file is a stock OpenCode agent file any editor can open. Tighten one line in the manifest and an agent's reach changes. Tighten one line in the markdown and its behavior does.

Sessions keep the same shape. Each boots in its own sandbox, clones the repo and works on its own branch, so the files are also the material agents edit. When the server restarts, the stack returns from the instance directory and the fleet returns from the repo. The fleet was files all along.

## The review the repo makes possible

When an agent's reach is a line in a file, reviewing it stops being a ceremony. Kortix draws the line at the default branch: "Session work reaches \`main\` through a change request. Merge is default-deny for agents." A person reads the diff before a new permission, a new trigger or a rewritten skill reaches the running system. The same review covers every other file in the repo.

OpenWork's own demo shows its version of the gate. The agent drafts a message and asks before posting it to Slack. That ask lives in the conversation, and a conversation is harder to re-read than a diff.

## What the repo does not hold

Two things stay out of the repo on purpose, and both matter when the lights go out. Secret values live in the instance directory, in one \`.env\` that holds every secret and signing key. Lose its encryption key and stored credentials become unreadable, which is why the self-hosting docs ask you to guard that file. Model keys live in the app, added per project after sign-in.

The sessions themselves never sit on your server. Each boots on a sandbox provider, Daytona by default with Platinum and E2B as alternatives, then calls back to your instance over the network. That split keeps the host small enough to copy. The instance directory holds the Postgres data, the stored files and the \`.env\`, and the docs count it as the whole backup. An auditor reads your repo and that directory directly, with no vendor in the middle.

## From bare box to running instance

The self-hosting docs keep the setup short. You need a Linux server with a public IP, DNS pointed at it, ports 80 and 443 open, and a sandbox provider key. Setup asks for a domain, an admin email and that provider. It does not ask for a model key. You connect your model provider in the app after the first sign-in: any model provider with your own keys. On a bare box, one bootstrap script installs Docker, the CLI and the stack together:

\`\`\`sh
curl -fsSL https://github.com/kortix-ai/suna/raw/dev/scripts/kortix-selfhost-up.sh \\
  | bash -s -- --domain kortix.example.com --email ops@example.com
\`\`\`

A first trial needs no DNS at all. The docs' tunnel mode runs the stack on your own machine and publishes only the API through a Cloudflare tunnel. That is enough to judge the system before you point a production domain at it. Where everything runs stays your choice afterwards: "Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free." Whichever you pick, the restart test never changes. The repo is what survives, so keep it somewhere you control. The [self-hosting walkthrough](/self-hosting) on this site takes each step with its flags, and the [getting-started walkthrough](https://kortix.com/blog/getting-started-with-kortix) covers the first project and first session.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions a self-hosting team asks' },
          items: [
            {
              id: 'cost',
              question: 'What does a self-hosted AI agent platform cost to run?',
              answer:
                'Two bills: the hardware and the tokens. The managed option bills credits: Free is $0 with 500 credits per month, managed models, every feature and 1 project. Paid plans start at $50 a month for 5,000 credits, and members are free, sharing one credit pool. ([Kortix pricing](https://kortix.com/pricing), checked October 2026). OpenWork\u0027s desktop app is free with your own keys; its cloud plan includes five seats before charging $10 a seat a month ([openworklabs.com](https://openworklabs.com), checked October 2026).',
            },
            {
              id: 'why-self-host',
              question: 'Why self-host after Claude Cowork merged into Claude?',
              answer:
                'On September 16, 2026, Anthropic merged Cowork and chat into one Claude. The Cowork capabilities now arrive from any conversation, Pro and Max plans first, with Team and Free following ([the merge announcement](https://claude.com/blog/cowork-is-now-claude), checked October 2026). That product runs on Anthropic\u0027s cloud, and your work sits in its account. Self-hosting answers a different question: whose disks hold the files your agents run on.',
            },
            {
              id: 'move-instance',
              question: 'How do I move an instance to a new server?',
              answer:
                'Stop the stack so the database files stay consistent, copy the instance directory, and start on the new box: a self-hosted AI platform moves that easily only when its state is files. That directory holds every secret and signing key, the Postgres data and the stored files; the docs count it as the whole backup ([Read the docs](https://kortix.com/docs/host)). Your project repos travel the way any git repository does.',
            },
            {
              id: 'updates',
              question: 'What happens when the platform updates itself?',
              answer:
                'The bundled updater checks once a day by default and rolls the app services. The stable channel ships releases that already ran in production; you can pin one exact version instead. Your repo is input the stack reads, so an update rolls images and migrations without touching your files.',
            },
            {
              id: 'model-key',
              question: 'Do I need a model key before the first start?',
              answer:
                'No. Setup asks for a domain, an admin email and a sandbox provider key. The model provider connects in the app after the first sign-in, per project.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Own what a restart brings back',
          sub: 'Start on Kortix Cloud or self-host the same repo on hardware you control.',
          ctas: [TRY_KORTIX, cta('See the self-hosting guide', 'https://opensourceclaudecowork.com/self-hosting')],
        },
      ],
    },

    /* ── self-hosted-ai-workspace ─────────────────────────────────────────── */
    {
      slug: 'self-hosted-ai-workspace',
      navLabel: 'Workspace',
      title: 'Self-hosted AI workspace: the open-source, two-layer build',
      metaDescription:
        'A self-hosted AI workspace is two layers, model and tooling; here is what each costs to host and how the open-source Kortix stack covers both.',
      h1: 'A self-hosted AI workspace is two layers',
      lead: 'A self-hosted AI workspace is two products wearing one name: the model that reasons, and the agent tooling that turns it into finished work. Most tools ship only the model. Kortix is open source and ships both: agents, memory and connectors in one git repo, self-hosted on your own server, with the model layer attached by key.',
      sections: [
        {
          type: 'comparison',
          heading: { title: 'Four workspaces, two layers each', sub: 'Every cell comes from the product\u0027s own site, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true, href: 'https://kortix.com/docs', nofollow: true },
            { id: 'openwork', label: 'OpenWork', href: 'https://openworklabs.com' },
            { id: 'eigent', label: 'Eigent', href: 'https://www.eigent.ai/docs/self-hosting' },
            { id: 'claude-cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [
                { text: 'Yes', mark: 'yes' },
                { text: 'Yes', mark: 'yes' },
                { text: 'Yes', mark: 'yes' },
                { text: 'No', mark: 'no' },
              ],
            },
            {
              label: 'Where the tooling runs',
              cells: [
                'Kortix Cloud, your VPC, or your own network',
                'Your desktop, or a managed private instance',
                'Your machine, from the repo, or Eigent Cloud',
                "Anthropic's apps on web, desktop, and mobile",
              ],
            },
            {
              label: 'Model choice',
              cells: [
                'Your own keys, subscriptions, or custom endpoints',
                'Any model OpenCode supports',
                'Cloud APIs, your own key, or fully local',
                'Claude models; usage limits apply',
              ],
            },
            {
              label: 'Fully local model',
              cells: ['An OpenAI-compatible endpoint', 'Local models included', 'Ollama, vLLM, SGLang, LM Studio, or LLaMA.cpp', { text: 'No', mark: 'no' }],
            },
            {
              label: 'Where agent work runs',
              cells: [
                'Its own sandbox on a separate provider',
                'On your machine, or optional cloud workers',
                'On your machine',
                "In Anthropic's cloud",
              ],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: 'The contract every session starts from' },
          artifact: {
            file: 'agents/kortix.md',
            lang: 'text',
            source: 'https://github.com/kortix-ai/suna/blob/main/packages/starter/templates/base/agents/kortix.md',
            lines: [
              'You are hands-on: you read, edit, run, search, fetch, and ship. The',
              "session you're in is an isolated sandbox — an ephemeral branch of",
              'this repo, your own `/workspace` — so you can install, experiment,',
              'and recover freely. Only what you commit + push survives.',
            ],
          },
          caption: 'Every Kortix project starts from this starter agent file; its opening paragraph tells the agent what a session is.',
        },
        {
          type: 'prose',
          body: `## One phrase covers two different products

The phrase self-hosted AI workspace sells one idea and hides a decision. The model layer is inference: a hosted API behind your key, or a local server on hardware you own. The agent tooling layer is everything that turns a model into a worker. It holds the harness that drives the model, the memory it keeps between tasks, the connectors that reach your company's tools, and the review that decides when work lands.

Search that phrase and most results serve the model layer alone: a chat interface over a local model, running on your machine. A chat box over your own model is useful, and it stops there. Nothing in it outlives a conversation, it reaches none of your company's tools, and no step checks finished work before it goes anywhere. An open source AI workspace earns the name in the second layer, and that is where the comparison on this page sits.

## What each layer costs to host

The tooling layer is a software problem. Kortix's stack is one Docker Compose project on a Linux server with a public IP, installed and updated by the kortix self-host CLI. You point DNS at the server, open ports 80 and 443, and answer the setup questions; the first run asks six things, none of them a model key. Agent sessions never run on that server, though. Each one executes on a separate sandbox provider, such as Daytona, Platinum or E2B, and calls back to the instance's public URL. A self-hosted workspace therefore still needs to be reachable from the internet. The service table in the [Kortix self-hosting docs](https://kortix.com/docs/host) lists every process that runs, and no Redis or separate worker appears in it.

The install is three lines, kept verbatim in the [Kortix self-hosting docs](https://kortix.com/docs/host). For a first look without a domain, the same CLI also offers a Cloudflare tunnel mode that publishes the API and leaves the web app on localhost:

\`\`\`sh
curl -fsSL https://kortix.com/install | bash
kortix self-host init --domain kortix.example.com --admin-email you@example.com
kortix self-host start
\`\`\`

The model layer is a different budget. Renting is one API key: the tooling calls a hosted provider, you pay per token, and no GPU enters the picture. Owning means running inference yourself, and the hardware bill scales with the model. Eigent's [self-hosting docs](https://www.eigent.ai/docs/self-hosting) put it plainly: local model requirements depend on the model and runtime, and large models can require substantial memory or GPU capacity. Most teams who self-host the tooling rent the model, because the control they wanted lived in the tooling layer all along.

## Three ways to split the layers

Every real setup picks a split, and there are three of them. An all-local workspace keeps the model on your GPU and the tooling beside it, entirely inside your own network. A hybrid runs the tooling on your server and rents inference from a provider under your key. The managed pole hands both layers to a vendor. Claude Cowork sits there: it runs in Anthropic's apps on a [paid plan](https://claude.com/product/cowork), and since September 16, 2026 the name describes a capability of the one Claude app.

Kortix, the open-source AI Operating System, is built for the hybrid, and the same wiring reaches both poles. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free. Any model provider with your own keys. Or the ChatGPT plan you already pay for. Or sign in with your OpenCode Console account for OpenCode Zen and Go. For the all-local pole, the [models page](https://kortix.com/docs/project/models) documents a custom provider. Point it at any OpenAI-compatible endpoint, key optional, and a local model server takes the slot a hosted provider would hold. A self-hosted instance has no managed models, so on your own box the model layer is always your key or your hardware.

## The tooling layer is the workspace

Kortix keeps that second layer in one git repo: agents, their skills, company memory, connector rules and triggers sit there as files you can read, diff and back up. A session is one agent run. One isolated sandbox per session. Each session has its own isolated machine and branch. The starter agent file, quoted in the artifact on this page, tells the agent the same thing in its first paragraph. The session is an ephemeral branch of the repo, free to install and break anything, and only what it commits and pushes survives. A chat interface has no equivalent contract, because it has nothing to commit into.

## How the work gets approved

The review step is where workspaces separate for good. OpenWork keeps files on your machine and Eigent returns results in its own app. Neither product's own pages describe a merge-style gate between the agent and the finished output, as of October 2026. Kortix makes the review the only way in. Session work reaches \`main\` through a change request. Merge is default-deny for agents. A person reads the diff before anything lands, so an agent can work all day and still change nothing you have not seen.

Start with the tooling layer. It is the half that decides who owns the work, and a model is a key you can swap next quarter. The install is three lines on one server, and [the self-hosting guide](https://opensourceclaudecowork.com/self-hosting) on this site walks through it step by step. For the chat-first tools this page sets aside, [the workspace guide](https://kortix.com/blog/best-self-hosted-ai-workspace) on Kortix's blog compares six of them in more depth.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions to settle before you install' },
          items: [
            {
              id: 'gpu',
              question: 'Do I need a GPU to self-host an AI workspace?',
              answer:
                'Not for the tooling layer. One Linux server runs it, and agent sessions execute on a separate sandbox provider, so the server stays small however many sessions you start. A GPU matters only when you also self-host the model, and large models can require substantial memory or GPU capacity.',
            },
            {
              id: 'self-host-cowork',
              question: 'Can you self-host Claude Cowork?',
              answer:
                'No. Anthropic merged Claude Cowork and chat into one Claude on September 16, 2026, and the capability runs in Anthropic\u0027s apps with a paid plan. There is no self-host path. Pro and Max plans have it first, with Team and Free to follow, as of October 2026.',
            },
            {
              id: 'both-layers',
              question: 'Can one workspace cover both layers?',
              answer:
                'Yes, and that is the setup worth building. Run the tooling on your own server, then attach the model by key: a hosted provider under your own key, or an OpenAI-compatible endpoint in front of a local model server.',
            },
            {
              id: 'managed',
              question: 'When does a managed workspace make more sense?',
              answer:
                'When setup time outweighs ownership. A managed workspace starts in minutes and runs entirely on the vendor\u0027s terms. Self-hosting asks for the setup first, then hands you the configuration, the model choice, and a company memory you can copy and back up yourself.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Own the tooling layer',
          sub: 'Self-host it on your own server, and swap the model layer by key whenever a better one ships.',
          ctas: [TRY_KORTIX, cta('Read the platform guide', 'https://opensourceclaudecowork.com/self-hosted-ai-agent-platform')],
        },
      ],
    },

    /* ── ai-agent-orchestration ───────────────────────────────────────────── */
    {
      slug: 'ai-agent-orchestration',
      navLabel: 'Orchestration',
      title: 'Open-source AI agent orchestration, run through the review gate',
      metaDescription:
        'Open-source AI agent orchestration where the review gate decides: triggers start sessions on their own branches, and merge is default-deny for agents.',
      h1: 'AI agent orchestration where the review gate decides',
      lead: 'AI agent orchestration is coordination with a stop: triggers start sessions on their own branches, and merge is default-deny for agents. Kortix is open source, so the whole fleet is files in a repo you own, and the gate is a change request a person merges.',
      sections: [
        {
          type: 'comparison',
          heading: { title: 'Four orchestration options, compared on the gate', sub: 'What starts a run, where the wiring lives, and who checks the work.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true },
            { id: 'crewai', label: 'CrewAI', href: 'https://github.com/crewAIInc/crewAI' },
            { id: 'langgraph', label: 'LangGraph', href: 'https://github.com/langchain-ai/langgraph' },
            { id: 'n8n', label: 'n8n', href: 'https://github.com/n8n-io/n8n' },
          ],
          rows: [
            {
              label: 'What it is',
              cells: [
                'The open-source AI Operating System',
                'Python framework for role-based multi-agent workflows',
                'Low-level orchestration framework for stateful agents',
                'Visual automation platform with AI built in',
              ],
            },
            {
              label: 'Where the wiring lives',
              cells: [
                'In your git repo: kortix.yaml and agent files',
                'crew.jsonc and agents/*.jsonc in the project',
                'In your Python or JS code',
                'On the visual canvas, with code when needed',
              ],
            },
            {
              label: 'What starts a run',
              cells: [
                'Cron and webhook triggers in the manifest',
                'Event-driven Flows you write',
                'Your code runs the graph, and durable execution resumes it',
                'Schedule trigger nodes at fixed intervals',
              ],
            },
            {
              label: 'Who checks the work',
              cells: [
                'Merge is default-deny for agents',
                'Human review is a task option',
                'Human-in-the-loop: inspect and edit state mid-run',
                'Human approval steps in the workflow',
              ],
            },
            {
              label: 'Self-hosting',
              cells: ['Self-host is free', 'You run it; AMP adds managed or on-prem', 'You run it, or deploy on LangSmith', 'Self-hostable, or n8n Cloud'],
            },
          ],
          footnote: 'Rival cells come from each project\u0027s own repository and docs, checked October 2026.',
        },
        {
          type: 'code-panels',
          heading: { title: 'The wiring as it ships', sub: 'Straight from the Kortix triggers docs.' },
          panels: [
            {
              tab: 'Cron trigger',
              file: 'kortix.yaml',
              lang: 'yaml',
              source: 'https://kortix.com/docs/connect/triggers',
              lines: [
                'triggers:',
                '  - slug: daily-digest',
                '    type: cron',
                '    cron: "0 0 9 * * 1-5"',
                '    timezone: Europe/Berlin',
                "    prompt: Summarize yesterday's commits and open change requests.",
              ],
            },
            {
              tab: 'Add it',
              file: 'terminal',
              lang: 'sh',
              source: 'https://kortix.com/docs/connect/triggers',
              lines: [
                '$ kortix triggers add daily-digest --type cron \\',
                '  --cron "0 0 9 * * 1-5" --timezone Europe/Berlin \\',
                '  --prompt "Summarize yesterday\u0027s commits and open change requests." --apply',
                '$ kortix triggers fire daily-digest',
              ],
            },
            {
              tab: 'Webhook trigger',
              file: 'terminal',
              lang: 'sh',
              source: 'https://kortix.com/docs/connect/triggers',
              lines: [
                '$ kortix secrets set WEBHOOK_SECRET=- --scope connector',
                '$ kortix triggers add new-lead --type webhook --secret-env WEBHOOK_SECRET \\',
                '  --prompt "A new lead arrived: {{ body.name }} ({{ body.email }}). Add it to the CRM." --apply',
              ],
            },
          ],
        },
        {
          type: 'prose',
          body: `## Orchestration has a start half and a stop half

AI agent orchestration coordinates agents so work moves in an order you chose, with context carried from step to step. Most orchestration platforms compete on the start half: schedules, events, and canvas nodes that fire a run on time. The stop half decides whether any of it is safe. Work that lands in your repo, your systems, or a customer's inbox needs a point where it halts and a person decides. That point is the review gate, and it is the orchestrator that matters.

In Kortix the whole fleet is files in a git repo you own. Agents are markdown files with one governance block each in \`kortix.yaml\`. Triggers are entries in the same file, and company memory is plain files. That makes the wiring of your orchestration text: you read it, version it, and roll it back the way you roll back code.

## The loop from fire to merge

A cron or webhook trigger starts a session with no person present. Two trigger types need nothing extra. Cron takes a six-field schedule with the seconds field first and fires at most once a minute. A webhook fires when a signed POST reaches its URL. Kortix checks the HMAC signature on every request; there is no unsigned webhook. Two more types sit behind project flags. Event triggers subscribe to a connected app; monitors watch the output of a command from your repo.

Each fire renders the trigger's prompt and sends it to the session \`session_mode\` picks. The four values are fresh, reuse, pinned and keyed, and fresh is the default. A fresh fire gets a new session, and each session has its own isolated machine and branch. Continuity has a switch too: a \`session_key\` such as \`digest-{{ cron.scheduled_date }}\` keeps one session per UTC day.

The agent commits to its branch and opens a change request. Session work reaches \`main\` through a change request. Merge is default-deny for agents. A session cannot merge a change request it opened itself, so a person reads the diff and decides what becomes the record.

The gate watches the wiring as well. Edit a trigger inside a session and the change rides that session's branch and change request. The trigger goes live when the change reaches the default branch. When a run goes sideways, \`kortix triggers pause\` stops every automatic fire in the project, and \`resume\` brings them back. Inside a run, the same idea holds at the tool boundary. Approval gates you set. Off until you set them. Set a connector call to Ask and the call waits until a person approves it, then the agent resumes.

## What the gate buys you

A scheduler guarantees timing. It says nothing about what a run produces. A webhook can carry content from a stranger, a cron prompt can drift after a careless edit, and an agent can misread a task. With a merge gate, the worst case is a change request nobody merges. Without one, the worst case reaches production first. That is the argument for calling the gate the orchestrator. It turns unattended work from a risk you monitor into a queue you review.

## Picking an orchestration tool

Ask any candidate three questions: where the wiring lives, what starts a run with nobody present, and what stops the work before it lands. The comparison table on this page asks them of four options. CrewAI and LangGraph are frameworks. They hand you the sequencing primitives and leave hosting, shared memory and the merge gate to you. n8n wires steps on a visual canvas, with approval steps you place in the flow and a server you can run yourself. Kortix carries all three pieces in one system you own.

Orchestration is not always the answer. One agent in one session covers a lookup or a first draft. It earns its keep when work has stages, runs on a clock, or touches something expensive to undo. Start with one agent, put the gate in front of anything an agent could do twice by mistake, and add triggers when the work asks for them. The Kortix blog on [reliable agent workflows](https://kortix.com/blog/how-to-build-reliable-ai-agent-workflows) goes deeper on the patterns. For the setup, the [self-hosting guide](https://opensourceclaudecowork.com/self-hosting) on this site goes from empty server to running instance.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions before you wire triggers', sub: 'Short answers, sourced to the Kortix docs and Anthropic\u0027s announcement.' },
          items: [
            {
              id: 'what-is',
              question: 'What is AI agent orchestration?',
              answer:
                'It is the coordination of more than one agent, or one agent\u0027s repeated runs, so work moves in an order and each step carries the context it needs. In Kortix the wiring is \`kortix.yaml\` and agent files, and the control point is a change request a person merges.',
            },
            {
              id: 'merge-effect',
              question: 'What changed when Claude Cowork merged into Claude?',
              answer:
                'On [September 16, 2026](https://claude.com/blog/cowork-is-now-claude), Anthropic merged Cowork and chat into one Claude, so what Cowork did now runs from any conversation, with the context, skills, and connectors you already have. Tasks can be scheduled to a cadence and run unattended, and by default Claude asks before taking an action. The wiring stays inside Anthropic\u0027s product; on Kortix it is files in a repo you own.',
            },
            {
              id: 'session-mode',
              question: 'What does session_mode control?',
              answer:
                'Which session receives each fire. Fresh starts a new session per fire and is the default, reuse returns to the trigger\u0027s last session, pinned re-prompts one named session, and keyed starts one session per key. Monitors are the exception: they default to reuse.',
            },
            {
              id: 'webhook-auth',
              question: 'Do webhook triggers authenticate?',
              answer:
                'Every webhook trigger needs a signing secret, and Kortix verifies the HMAC-SHA256 signature of each request. There is no unsigned webhook.',
            },
            {
              id: 'stop-all',
              question: 'Can I stop every automated run at once?',
              answer:
                'Yes. \`kortix triggers pause\` stops every automatic fire in the project, schedules and webhooks included, and \`kortix triggers resume\` turns them back on.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Wire the fleet, then gate it',
          sub: 'One trigger, one agent, one change request to start.',
          ctas: [TRY_KORTIX, cta('Read the self-hosting guide', 'https://opensourceclaudecowork.com/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-vs-chatgpt-work ────────────────────────────────────── */
    {
      slug: 'claude-cowork-vs-chatgpt-work',
      navLabel: 'vs ChatGPT Work',
      title: 'Claude Cowork vs ChatGPT Work: the open-source audit decides',
      metaDescription:
        'Compare Claude Cowork and ChatGPT Work on who can review and audit the work, and meet Kortix, the open-source alternative you can self-host.',
      h1: 'Claude Cowork vs ChatGPT Work: open source makes the audit yours',
      lead: 'Claude Cowork and ChatGPT Work both became features of their makers\u0027 chat products in 2026. What separates them now is the audit: who sees what the agent did, and who can check the system it ran on. Kortix is the open-source alternative, its whole system in one git repo you own.',
      sections: [
        {
          type: 'comparison',
          heading: { title: 'Who reviews the work, and who can audit it', sub: 'Rival cells state what each vendor\u0027s own pages document, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true },
            { id: 'claude-cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
            { id: 'chatgpt-work', label: 'ChatGPT Work', href: 'https://openai.com/chatgpt-work' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [
                { text: 'Yes', mark: 'yes' },
                { text: 'No', mark: 'no' },
                { text: 'No', mark: 'no' },
              ],
            },
            {
              label: 'Who reviews the work',
              cells: [
                'Session work reaches `main` through a change request; default-deny for agents',
                'Claude asks before acting; it shows its plan and waits for approval',
                'Plan mode: approve the plan to start the work',
              ],
            },
            {
              label: 'What is recorded',
              cells: [
                'Every action is recorded',
                'Activity streams to your SIEM through OpenTelemetry (Enterprise)',
                'A Compliance API for enterprise oversight',
              ],
            },
            {
              label: 'Where the work runs',
              cells: [
                'Kortix Cloud, your VPC, or your own on-prem network; self-host is free',
                "Anthropic's cloud, or your Bedrock, Google Cloud or Microsoft Foundry account",
                'ChatGPT on macOS and Windows desktop, plus web and mobile',
              ],
            },
            {
              label: 'Where configuration lives',
              cells: [
                'Files in a git repo you own',
                'Your Claude account: chats, projects, artifacts, connectors, skills',
                'Files and past work in ChatGPT Space',
              ],
            },
            {
              label: 'Models',
              cells: ['Any model provider with your own keys', 'Claude models', "OpenAI's GPT models"],
            },
          ],
          footnote: "Rival cells come from Anthropic's and OpenAI's own pages, checked October 2026; sources are linked in the text.",
        },
        {
          type: 'artifact',
          heading: { title: 'From a session branch to a merged change' },
          artifact: {
            file: 'terminal',
            lang: 'sh',
            source: 'https://kortix.com/docs/git',
            lines: [
              'kortix projects clone <project_id> my-project',
              'cd my-project',
              'git checkout -b tighten-triage        # edit agents/, skills/ or kortix.yaml',
              'git commit -am "Tighten the triage prompt"',
              'git push origin tighten-triage',
              'kortix cr open --head tighten-triage --title "Tighten the triage prompt"',
            ],
          },
          caption: 'That page\u0027s audit log records every clone and every push.',
        },
        {
          type: 'prose',
          body: `## Two mergers, one question left

ChatGPT Work has been part of ChatGPT since July 9, 2026. That day OpenAI shipped one desktop app for Chat, Work and Codex, began sunsetting the standalone Atlas browser, and called the result "a partner for your most ambitious work" ([the launch post](https://openai.com/index/chatgpt-for-your-most-ambitious-work), checked October 2026). On September 16, 2026, Anthropic folded Cowork back into Claude. "What Cowork and Design can do is available from any conversation, with the context, skills, and connectors you already have," Anthropic wrote, and existing chats, projects, artifacts, connectors and skills carried over ([the merge post](https://claude.com/blog/cowork-is-now-claude)). Pro and Max plans got the merged Claude first. Team and Free plans "will follow soon", and Enterprise admins were promised at least 30 days' notice before anything changes for their organizations.

After both mergers the products converge on paper. Hand over a goal, and decks, sheets and reports come back. Recurring jobs get scheduled, tools get connected, a plan gets approved. A feature table between the two would be stale within weeks, because both vendors ship weekly. The questions that keep their answers are structural. This page stays on the one most comparisons skip: where the work is reviewed, and who can audit it afterwards. The comparison table on this page compresses the three products into six rows. The rest of the page argues the two rows that decide.

## Where the review happens

Cowork's review is a setting inside the vendor's app. "By default, Claude asks before taking an action," the merge post says. You can let it keep working and check in only when something needs a closer look. "You keep the final say." Tasks can also run unattended on a schedule, so the review can be a check-in after the fact rather than a stop before it.

ChatGPT Work reviews in two places. Plan mode "gathers context, asks questions, and creates a step-by-step plan" that you can edit or approve before work starts. While the agent works, "you can follow its progress, answer questions, change direction, and approve important actions" ([its launch post](https://openai.com/index/chatgpt-for-your-most-ambitious-work)). That review also lives in the vendor's interface, on the vendor's record of what happened.

Kortix moves the gate into git. Session work reaches \`main\` through a change request. Merge is default-deny for agents. An unattended session can work for hours, and what it produced still waits for a person to read the diff and merge it. A rejected change request stays in the history with its diff and the comments that turned it down. The review itself leaves a record you keep.

## Who can audit it

Kortix's answer is short: "Every action is recorded. Reading, exporting and streaming the audit log depend on the plan." The log sits next to the system it describes, in a codebase anyone can read. The [git documentation](https://kortix.com/docs/git) notes that the audit log records each clone and each push. The whole project lives as files in a repo your team owns.

The closed products audit through their own consoles. Cowork streams activity to your SIEM through OpenTelemetry on Enterprise ([its product page](https://claude.com/product/cowork)). ChatGPT Work gives enterprise admins a Compliance API with visibility into conversations and actions at scale ([its launch post](https://openai.com/index/chatgpt-for-your-most-ambitious-work)). Those are genuine controls. Neither vendor, though, publishes the software that produces the reports. On Kortix you can check the report against the thing itself, because the source, the configuration and the history are all files.

## Where it runs, and on whose model

ChatGPT Work runs in ChatGPT: desktop apps for macOS and Windows on every plan, and web and mobile on Plus, Pro, Business, Enterprise or Edu ([its page](https://openai.com/chatgpt-work), checked October 2026). Cowork runs on Anthropic's side of the wall. It uses Anthropic's servers, or your own Amazon Bedrock, Google Cloud or Microsoft Foundry account ([its product page](https://claude.com/product/cowork)). Kortix runs where you point it: "Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free."

The model follows the same split. ChatGPT Work's page said GPT-6 powered it in October 2026, and Cowork runs on Claude models. On either product the model and the vendor are one decision. Kortix separates them: "Any model provider with your own keys. Or the ChatGPT plan you already pay for." A team already paying for ChatGPT can keep that subscription and still move the review and the audit onto ground it controls.

## How to decide

If the work can live in the vendor's app, pick the chat product you already pay for. Both merged agents do what their pages describe. If the work needs a review gate and an audit trail you control, Kortix is the recommendation, the leading open-source alternative to Claude Cowork and ChatGPT Work. The [self-hosting guide](/self-hosting) takes a bare Linux box to a running stack. For more on that side of the comparison, read [open-source ChatGPT Work alternative](https://kortix.com/blog/open-source-chatgpt-work-alternative) on the Kortix blog.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions this comparison gets', sub: 'Short answers, with the moving facts dated.' },
          items: [
            {
              id: 'free',
              question: 'Is ChatGPT Work free to use?',
              answer:
                'OpenAI\u0027s page makes the desktop app available to all plans. Web and mobile need Plus, Pro, Business, Enterprise or Edu ([ChatGPT Work](https://openai.com/chatgpt-work), checked October 2026). Kortix\u0027s self-host is free.',
            },
            {
              id: 'merge',
              question: 'What did the September 2026 merge change about Claude Cowork?',
              answer:
                'On September 16, 2026, Anthropic folded Cowork into Claude. What Cowork did now runs from any conversation with the context, skills, and connectors you already have, and existing work carried over ([the announcement](https://claude.com/blog/cowork-is-now-claude)). Pro and Max plans got it first. Anthropic said Team and Free plans "will follow soon".',
            },
            {
              id: 'audit-log',
              question: 'Does either product keep an audit log?',
              answer:
                'Both document oversight on their bigger plans. Cowork streams activity to your SIEM through OpenTelemetry on Enterprise, and ChatGPT Work offers a Compliance API for enterprise oversight. Neither publishes its source. Kortix records every action, and its source is public.',
            },
            {
              id: 'chatgpt-team',
              question: 'Which one should a team already paying for ChatGPT pick?',
              answer:
                'If the finished work can live inside ChatGPT, ChatGPT Work is the shorter path. If the work needs a review gate and an audit you control, Kortix runs on "Any model provider with your own keys. Or the ChatGPT plan you already pay for."',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Put the audit in a repo you own',
          sub: 'Start on Kortix Cloud, or self-host the whole stack on your own box.',
          ctas: [TRY_KORTIX, KORTIX_DOCS],
        },
      ],
    },

    /* ── claude-cowork-alternatives ───────────────────────────────────────── */
    {
      slug: 'claude-cowork-alternatives',
      navLabel: 'Alternatives',
      title: 'Open-source Claude Cowork alternatives after the merge, sorted by where they run',
      metaDescription:
        'After the September 2026 merge, choosing a Claude Cowork alternative means choosing where the capability runs; these are the open-source options.',
      h1: 'Open-source Claude Cowork alternatives, sorted by where they run',
      lead: 'Claude Cowork merged into Claude on September 16, 2026, so the alternatives you compare now differ by where the capability runs. Three placements cover the open field: your desktop, your own infrastructure, and the vendor\u0027s cloud. Kortix is the open-source option for the second placement, a whole-company system in a git repo you own.',
      sections: [
        {
          type: 'comparison',
          heading: { title: 'The field, sorted by where the capability runs', sub: 'Every rival cell comes from that product\u0027s own pages, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true, href: 'https://kortix.com/docs', nofollow: true },
            { id: 'openwork', label: 'OpenWork', href: 'https://openworklabs.com' },
            { id: 'eigent', label: 'Eigent', href: 'https://www.eigent.ai' },
            { id: 'claude-cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [
                { text: 'Yes', mark: 'yes' },
                { text: 'Yes', mark: 'yes' },
                { text: 'Yes', mark: 'yes' },
                { text: 'No', mark: 'no' },
              ],
            },
            {
              label: 'Where the product runs',
              cells: [
                'Kortix Cloud, VPC, or your own network',
                'A desktop app for macOS, Windows, and Linux',
                'On your machine, or self-hosted',
                "Claude's apps on web, desktop, and mobile",
              ],
            },
            {
              label: 'Where the agent works',
              cells: [
                "In a session's own sandbox",
                'On your machine, with optional cloud workers',
                'On infrastructure your team controls',
                "On Anthropic's servers, or your own cloud account",
              ],
            },
            {
              label: 'Models',
              cells: ['Any model provider with your own keys', 'Any model OpenCode supports', 'Cloud, enterprise gateway, or local models', "Anthropic's models only"],
            },
            {
              label: 'Where configuration lives',
              cells: ['In a git repo you own', 'On your machine, shared as packages', 'In versioned Space profiles', 'In your Claude account'],
            },
            {
              label: 'Free to start',
              cells: ['Self-host is free', 'The desktop app, no account needed', 'Self-hosted, with your own keys', 'A paid Claude plan'],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: 'Where a session\u0027s model comes from' },
          artifact: {
            file: 'docs/project/models',
            lang: 'text',
            source: 'https://kortix.com/docs/project/models',
            lines: [
              "A model is the LLM that a session's agent runs on.",
              'A project can use Kortix-managed models, your own provider API keys, and a ChatGPT or OpenCode subscription.',
              'Sign in instead of a key. Three providers take a device-code login:',
              'kortix providers login openai      # ChatGPT Plus or Pro',
              'kortix providers login opencode    # OpenCode Zen',
              'kortix providers login opencode-go # OpenCode Go',
            ],
          },
          caption: 'The Kortix models docs, where a session\u0027s model is a project setting and the key can be yours.',
        },
        {
          type: 'prose',
          body: `## September 16, 2026 ended the app comparison

On September 16, 2026, Anthropic merged Claude Cowork and chat into one Claude. What Cowork could do now works from any conversation, with the context, skills, and connectors a Claude account already holds. Existing Cowork work carries over: chats, projects, artifacts, connectors, and skills ([the announcement](https://claude.com/blog/cowork-is-now-claude)). The alternatives question moved with it. A list that ranks standalone apps against the Cowork app describes a comparison Anthropic retired that day.

The rollout is still in progress. Pro and Max plans got the merged experience first, in the Claude app on web, desktop, and mobile. Team and Free plans follow soon, and Enterprise admins hear from Anthropic at least 30 days before anything changes for their organizations ([the help center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) tracks the current state). Whether a given plan has the merged experience this month depends on where the rollout has reached.

## Where the capability can run

Three placements cover the field. On your desk, an agent works with the files on your machine and sends prompts to the provider you connect. In your own infrastructure, the platform runs on hardware you control, from a spare server to an on-prem network. In a vendor's cloud, the session lives on someone else's computers and follows your account. The comparison table on this page measures the options on those placements.

Claude Cowork sits in the third placement. Its help center is explicit: the work runs on Anthropic's servers in an isolated environment, and sessions and files are saved to your Claude account. The product page adds one infrastructure choice: you can point Cowork at your own Amazon Bedrock, Google Cloud, or Microsoft Foundry account ([the product page](https://claude.com/product/cowork)). That choice moves where the data sits. The model stays Anthropic's either way.

Kortix is the open-source system built for the second placement, and the leading open-source alternative to Claude Cowork and ChatGPT Work. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free. The project lives in a git repo you own, and the model is a project setting. Any model provider with your own keys.

## Two desktops the merge did not change

OpenWork is a free, open-source desktop app for macOS, Windows, and Linux, built on OpenCode. Its own page calls it the open-source alternative to Claude Cowork and Codex ([openworklabs.com](https://openworklabs.com)). Agents work on your files, and in desktop mode the files stay on your machine. The app runs any model OpenCode supports across 50+ providers with your own keys. Its cloud plan adds central management and org-wide skill sharing, charging $10 per seat per month after the first five seats (checked October 2026).

Eigent takes the same desk and turns it into a workforce. It is an open-source Cowork desktop where several agents share context, use your tools, and hand back results ready for review ([eigent.ai](https://www.eigent.ai)). You deploy it locally or self-hosted, and connect cloud providers, an enterprise gateway, or local models with your own keys. Agents, skills, and connectors are packaged once as versioned Space profiles. Self-hosting is free, and the cloud plans start at $19.99 a month after a trial (checked October 2026).

Neither product lost ground on September 16, 2026. Running on your machine was the pitch from the start, and the merge did nothing to weaken it.

## What the merge reordered

The merge moved the incumbent closer to the reader, and that reordered the field. Cowork used to be a separate place you opened; now it is the same message box as chat. An alternative that offered only a different app for the same hosted job lost its main argument on September 16, 2026.

What survives as a reason to leave is what a conversation cannot offer: the machine the work runs on, the model behind it, and who signs off before it lands. The two desktops answer with the first. Every open option answers with the second, because each one takes the keys you already hold. Kortix answers with the third as a platform rule. Session work reaches \`main\` through a change request. Merge is default-deny for agents. An agent can draft all day and still change nothing until a person reads the diff.

## Choosing by placement

Work that already lives in Claude, on a plan you pay for, belongs with the merged Claude. You accept Anthropic's models, Anthropic's servers, and an approval step the vendor defines, and for fast handoffs inside one app that trade is often right. Cowork needs a paid plan: Pro starts at $17 a month billed annually, and Max at $100 ([claude.com/pricing](https://claude.com/pricing), checked October 2026).

One person's files on one laptop call for a desktop. OpenWork suits the Cowork shape, one agent on your files with no account needed, while Eigent suits a small group of agents that share context. [Claude Cowork vs OpenWork](/claude-cowork-vs-openwork) runs the desktop route through a fuller comparison.

A company that wants the system owned wants Kortix, with configuration, memory, and review in one place. The repo is the unit of ownership, and the change request is the gate a person holds. The [Kortix vs Eigent vs Kuse AI comparison](https://kortix.com/blog/kortix-vs-eigent-vs-kuse-ai) on the Kortix blog sets the desktops against a hosted workspace. Two further lists sit behind it: [the projects on GitHub](/claude-cowork-github-projects), sorted by what each repo keeps, and [what the Reddit threads report](/open-source-claude-cowork-reddit).`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions buyers ask before choosing a placement' },
          items: [
            {
              id: 'old-lists',
              question: 'Are the old Claude Cowork alternatives lists still useful?',
              answer:
                'The ones written before September 16, 2026 compared standalone apps against the Cowork app, and Anthropic merged the two that day ([the announcement](https://claude.com/blog/cowork-is-now-claude)). Sort the current options by where the capability runs: your machine, your own infrastructure, or the vendor\u0027s cloud.',
            },
            {
              id: 'self-host-cowork',
              question: 'Can I self-host Claude Cowork?',
              answer:
                'No. Cowork\u0027s work runs on Anthropic\u0027s servers, and the infrastructure choice it offers is your own Amazon Bedrock, Google Cloud, or Microsoft Foundry account ([the help center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)). Kortix, OpenWork, and Eigent each have a self-host path.',
            },
            {
              id: 'local-models',
              question: 'Which alternatives can run a local model?',
              answer:
                'OpenWork runs any model OpenCode supports, including local ones ([openworklabs.com](https://openworklabs.com)), and Eigent connects local models with your own keys ([eigent.ai](https://www.eigent.ai)). Kortix takes any model provider with your own keys.',
            },
            {
              id: 'cost',
              question: 'What does it cost to run an alternative?',
              answer:
                'The software is free on all three open options, and the model provider still bills unless you run a local model. Kortix runs on credits: Free is $0 with 500 credits per month, managed models, every feature and 1 project. Paid plans start at $50 a month for 5,000 credits, and members are free, sharing one credit pool.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Run the placement you picked',
          sub: 'One install on the managed cloud or your own hardware, and a model you attach by key.',
          ctas: [TRY_KORTIX, cta('Read the self-hosting guide', 'https://opensourceclaudecowork.com/self-hosting')],
        },
      ],
    },

    /* ── is-claude-cowork-open-source ─────────────────────────────────────── */
    {
      slug: 'is-claude-cowork-open-source',
      navLabel: 'Open source?',
      title: 'There is no open-source Claude Cowork to self-host',
      metaDescription:
        'Claude Cowork is not open source: since the September 2026 merge the capability lives inside the closed Claude app, with no repo to read or host.',
      h1: 'There is no open-source Claude Cowork to self-host',
      lead: 'Claude Cowork is closed source. Since September 16, 2026 the capability lives inside the Claude app itself, so there is no repo to read and nothing to host on your own machine. Kortix is the open-source alternative, and its repository is public.',
      sections: [
        {
          type: 'artifact',
          heading: { title: 'The Source row, in the README anyone can open' },
          artifact: {
            file: 'README.md',
            lang: 'text',
            source: 'https://github.com/kortix-ai/suna',
            lines: [
              '## How it compares',
              '',
              '| | Claude Cowork | ChatGPT Work | **Kortix** |',
              '| --- | --- | --- | --- |',
              '| **Source** | Closed | Closed | **Open source — read it, fork it, audit it** |',
              '| **Models** | Anthropic only | GPT-5.6 only | **Any provider, your own API keys** |',
              "| **Where it runs** | Anthropic's cloud, or Bedrock / Google Cloud / Microsoft Foundry — no self-host | OpenAI's cloud, no self-host | **Our cloud, your VPC, or your own on-prem network** |",
              '| **Your configuration** | In their product | In their product | **Files in a git repo you own** |',
              '',
              'Competitor rows reflect publicly documented behavior as of July 2026.',
            ],
          },
          caption: 'Kortix prints this contrast in its own repository, where a visitor can check it line by line.',
        },
        {
          type: 'prose',
          body: `## What Anthropic's own pages say

Claude Cowork is closed source. Anthropic documents the product, prices it, and runs the work on its own servers. None of that comes with published source. The access model fits in one line on [the product page](https://claude.com/product/cowork): Cowork "works with a paid plan" (checked October 2026).

[Anthropic's help center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) describes where the work happens. Claude's work runs on Anthropic's servers, in an isolated environment, and sessions and files are saved to your Claude account. Neither page offers a repository, a download, or a self-hosted edition. Everything you know about how the agent behaves comes from Anthropic's own descriptions, with no published code to check them against.

## The merge folded Cowork into a closed app

On September 16, 2026, Anthropic [merged Claude Cowork and chat into one Claude](https://claude.com/blog/cowork-is-now-claude). The announcement says what Cowork could do "is available from any conversation, with the context, skills, and connectors you already have." Existing work carries over: "your chats, projects, artifacts, connectors, and skills."

The answer was no before the merge, and the merge changed what the no means. While Cowork had its own app, an open-source release would have meant Anthropic publishing one codebase. After September 16 the scheduling, the connectors, and the skills are features of Claude, and Claude's source has never been public. You cannot fork a feature of someone else's product. There is no line where the Cowork part ends and the closed part begins.

## What open source has to hand you

Two things make a product genuinely open source. The read: source anyone can open, so you can check what the agent does before it touches real work. The run: a stack that installs on hardware you control, built from that same source. Claude Cowork offers neither, and after the merge it cannot, because there is no Cowork codebase to publish.

Kortix is built the other way. It is the open-source AI Operating System, and its README carries the one-liner: "Open source. Read it, fork it, audit it." The [Kortix docs](https://kortix.com/docs) define a project as a git repo with kortix.yaml at its root. The agents, skills, memory, tools, triggers and connectors are files in it. Hosting stays a choice: "Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free."

The next question is what to move to. The [migration guide](https://opensourceclaudecowork.com/migrate-from-claude-cowork) on this site gives the order of steps that avoids rework. The [Kortix vs Claude Cowork](https://kortix.com/blog/kortix-vs-claude-cowork) post on the Kortix blog covers the trade in more depth. For the definition itself, [what Claude Cowork is](/what-is-claude-cowork) starts from Anthropic's own pages, and [the projects on GitHub](/claude-cowork-github-projects) sort the open rebuilds by what each repo keeps.`,
        },
        {
          type: 'faq',
          heading: { title: 'Follow-up questions', sub: 'Short answers with their sources, dated where the rollout still moves.' },
          items: [
            {
              id: 'merge-effect',
              question: 'Did the September 16 merge make Claude Cowork open source?',
              answer:
                'No. The merge on September 16, 2026 moved Cowork\u0027s capabilities into the Claude app itself, and [the announcement](https://claude.com/blog/cowork-is-now-claude) describes a product change, with no repository published alongside it.',
            },
            {
              id: 'where-sessions-run',
              question: 'Where do Cowork sessions run?',
              answer:
                'On Anthropic\u0027s servers, in an isolated environment, with sessions and files saved to your Claude account, per [Anthropic\u0027s help center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork). Team and Enterprise plans can route the work through a connected cloud account, Amazon Bedrock, Google Cloud, or Microsoft Foundry, and the software stays Anthropic\u0027s either way.',
            },
            {
              id: 'who-can-use',
              question: 'Who can use Claude Cowork?',
              answer:
                'Since the September 16, 2026 merge, the experience has rolled out to Pro and Max plans first, with Team and Free plans to follow as of October 2026. A paid plan is still the entry point, and Enterprise admins are promised at least 30 days\u0027 notice before anything changes for their organizations.',
            },
            {
              id: 'claude-code',
              question: 'Is Claude Code open source?',
              answer:
                'No. [Anthropic positions](https://claude.com/product/cowork) Claude Code for software engineering and Claude Cowork for non-coding knowledge work, and neither product is published as source you can inspect or host yourself.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Read the source, then host it',
          sub: 'The repository is public, and the self-host install runs the full stack on your own infrastructure.',
          ctas: [TRY_KORTIX, cta('Self-hosting guide', 'https://opensourceclaudecowork.com/self-hosting')],
        },
      ],
    },

    /* ── migrate-from-claude-cowork ───────────────────────────────────────── */
    {
      slug: 'migrate-from-claude-cowork',
      navLabel: 'Migrate',
      title: 'Migrate from Claude Cowork: what no export carries, rebuilt as open-source files',
      metaDescription:
        'Anthropic ships no export out of Claude Cowork, so the move is a rebuild of your setup as files in a repo you own, with open-source Kortix.',
      h1: 'Migrate from Claude Cowork: no export, an open-source rebuild',
      lead: 'There is no export button on Claude Cowork, and the September 2026 merge decided what a move carries: the work stays with the Claude account, so what leaves is the setup. Kortix is open source. Rebuild that setup as files in a repo you own, one job at a time, in an order that loses nothing.',
      sections: [
        {
          type: 'code-panels',
          heading: {
            title: "The setup as files, in the docs' own example",
            sub: "One support agent's file and governance block from the agents docs, plus a cron trigger from the manifest reference.",
          },
          panels: [
            {
              tab: 'The agent file',
              file: 'agents/support.md',
              lang: 'text',
              source: 'https://kortix.com/docs/project/agents',
              lines: [
                '---',
                'description: Answers support tickets from the help desk.',
                'mode: primary',
                'permission:',
                '  bash: ask',
                '---',
                'You answer support tickets. Read the ticket, check the order history,',
                'draft a reply, and submit it for review. Never close a ticket yourself.',
              ],
            },
            {
              tab: 'The governance block',
              file: 'kortix.yaml',
              lang: 'yaml',
              source: 'https://kortix.com/docs/project/agents',
              lines: [
                'kortix_version: 2',
                'default_agent: support',
                'agents:',
                '  support:',
                '    file: agents/support.md',
                '    connectors: [helpdesk]',
                '    secrets: [HELPDESK_API_KEY]',
                '    skills: [kortix-cli, triage]',
                '    kortix_permissions: [project.session.read, project.review.submit]',
              ],
            },
            {
              tab: 'The schedule',
              file: 'triggers/reports/weekly.yaml',
              lang: 'yaml',
              source: 'https://kortix.com/docs/project/manifest',
              lines: [
                'triggers:',
                '  - slug: weekly-report',
                '    type: cron',
                '    agent: kortix',
                '    cron: "0 0 15 * * 0"',
                '    prompt: Build the weekly report.',
              ],
            },
            {
              tab: 'Before the push',
              file: 'terminal',
              lang: 'sh',
              source: 'kortix.com/docs/project/manifest',
              lines: [
                'kortix validate                       # ./kortix.yaml',
                'kortix validate --scopes              # print every grantable kortix_permissions entry',
              ],
            },
          ],
        },
        {
          type: 'prose',
          body: `## What the merge moved, and what it left

On September 16, 2026, Anthropic merged Claude Cowork and chat into one Claude. What Cowork could do now runs in any conversation, and existing work carries over: chats, projects, artifacts, connectors and skills ([the announcement](https://claude.com/blog/cowork-is-now-claude)). Pro and Max plans got the rollout first, in the Claude app on web, desktop and mobile. Team and Free plans follow, and Enterprise admins get at least 30 days' notice before anything changes for their organizations.

The Cowork product page is still live and still tied to a paid plan. It also carries the note that Cowork consumes limits faster than Chat ([the product page](https://claude.com/product/cowork), checked October 2026). For anyone staying on Claude, nothing stops working. The Help Center describes the unified experience as a gradual rollout, with an admin toggle on Enterprise plans ([Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).

A reader planning the exit reads the same carry-over list the other way. The Help Center is explicit about where the work lives: sessions run on Anthropic's servers, and your sessions and files are saved to your Claude account. Projects keep their own files, links, instructions and memory there, plugins are saved to the account, and scheduled tasks run in the cloud with no device online. None of that is offered as an export, as of October 2026. What a person moving can actually take is the setup: the instructions, the memory, the connections and the schedule.

## The setup is the thing you rebuild

Take the Monday brief as the worked case. In Cowork it is a project. Instructions say what the brief covers and how it reads. Memory holds which numbers matter and what changed last quarter. A connector reaches the data, and a schedule fires it every Monday at nine. After the merge all of that keeps working inside Claude, which is exactly why a move is easy to postpone. The setup is account state, and account state is the part a migration leaves behind.

In Kortix, the open-source AI Operating System, the same setup becomes files in one git repo. The code panels on this page show the docs' own worked example: an agent file, its governance block and a cron trigger. Every key comes from the two pages the panels quote: [the agents and permissions docs](https://kortix.com/docs/project/agents) and [the kortix.yaml reference](https://kortix.com/docs/project/manifest). The agent file carries the behavior: the prompt, the mode, and the permission rules that decide which tools run and which wait for a person. The \`agents\` block in \`kortix.yaml\` carries the governance: connectors, secrets, skills and the project permissions the agent holds. A connectors entry carries the reach, and the catalog covers 3,000+ apps in a click, plus MCP, OpenAPI, Postman, GraphQL and raw HTTP. A trigger carries the schedule.

A rebuilt job runs as a session. One isolated sandbox per session. Each session has its own isolated machine and branch. The session clones the repo and works on a branch of its own. Its result comes back as a change request rather than as a file in someone's download folder.

## An order that loses no work

The starter agent file every Kortix session boots from states the constraint in one line: "Only what you commit + push survives." The file, agents/kortix.md, ships in [Kortix on GitHub](https://github.com/kortix-ai/suna). Uncommitted work disappears when a session ends. A migration runs into the same rule from the other side. Whatever exists only inside the Claude account is the material most at risk, so this order writes it down and commits it before anything is rebuilt.

1. Capture the account-only material. For each Cowork project, write out its instructions, the memory it has accumulated, the connector it calls and the cadence it runs on. The merge took the deadline off this step, since the work carries over inside Claude. It stays first anyway: this is the only material with no copy anywhere else.
2. Commit the capture before building. Create the repo, save the inventory as a markdown file, and push. Every later step rebuilds from a file on your own disks instead of from what someone remembers.
3. Rebuild one job. Write the agent file, add its block to \`kortix.yaml\`, and run \`kortix validate\` before the push. One working agent beats five drafted ones.
4. Move the memory beside it. Copy what the project learned into files under \`memory/\`, so the context a session reads is versioned next to the code that uses it.
5. Reconnect the tools. Add the connectors the job needs and name them in the agent's block, as the governance panel on this page shows.
6. Schedule it. A recurring task becomes a \`cron\` trigger: six fields, seconds first, with an explicit timezone.
7. Run one real job and merge its result. The session works on its branch, opens a change request, and a person reads the diff before anything lands. When that first change request merges, the job is migrated, and the next one starts from the capture file.

## The gate survives the move

Cowork's control is a mode you pick. The Help Center names three: Manual, where Claude pauses and asks before each action; Auto, where it keeps working and reviews each action for safety while consuming more of the usage limit; and Skip, where nothing checks the work at all. The announcement puts the default in one sentence: "By default, Claude asks before taking an action."

Kortix keeps the same final say and puts it in the repo. Session work reaches \`main\` through a change request. Merge is default-deny for agents. A person with \`project.gitops.merge\` reads the diff and merges. A session cannot merge the change request it opened unless its grant in \`kortix.yaml\` includes that permission. The governance panel on this page shows the shape in practice. The support agent holds \`project.review.submit\`, so it can hand its work up. It holds no merge permission, so it cannot land its own output.

## Where the rebuilt stack runs

The files decide the behavior; where they run can wait. Build and validate the repo first, and choose the runtime once the first job has merged. The [self-hosting guide](/self-hosting) on this site takes a bare Linux machine from nothing to a running stack, and the setup is the same repo either way.

After the first job merges, the rest of the setup follows the same path, one project at a time. The capture file from the second step says what is still open. For the full walk from an empty repo to a first merged change request, [Get started with Kortix](https://kortix.com/blog/getting-started-with-kortix) covers the first project end to end. The [self-hosted AI workspace guide](/self-hosted-ai-workspace) explains how the repo, the memory and the connectors fit together once they are in place.`,
        },
        {
          type: 'faq',
          heading: { title: 'What the move involves' },
          items: [
            {
              id: 'export',
              question: 'Can I export my Cowork work out of Claude?',
              answer:
                'No file export exists as of October 2026. Sessions run on Anthropic\u0027s servers and save to the Claude account, and Anthropic documents no export of chats, projects, artifacts, connectors or skills. Plan the move as a rebuild of the setup.',
            },
            {
              id: 'merge-effect',
              question: 'Did the September 2026 merge change what migrating means?',
              answer:
                'It changed the urgency, and it sharpened the inventory. Since September 16, 2026, Cowork is a capability of Claude and existing work carries over, so there is no deadline to beat. What leaves is unchanged: instructions, memory, connections and schedules.',
            },
            {
              id: 'approval',
              question: 'Where does the approval step go after the move?',
              answer:
                'The gate moves into the repo. Session work reaches \`main\` through a change request. Merge is default-deny for agents, and the agent\u0027s grant in \`kortix.yaml\` decides what it may do without asking.',
            },
            {
              id: 'model',
              question: 'Which model will the agents run on?',
              answer:
                'Any model provider with your own keys. Or the ChatGPT plan you already pay for. Or sign in with your OpenCode Console account for OpenCode Zen and Go. The agent file names its model, so two agents can run different ones.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Move one job, then the rest',
          sub: 'The capture file keeps the order, and the repo fills in job by job.',
          ctas: [TRY_KORTIX, cta('Read the self-hosting guide', '/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-pricing ────────────────────────────────────────────── */
    {
      slug: 'claude-cowork-pricing',
      navLabel: 'Pricing',
      title: 'Claude Cowork pricing: the plan math, and the open source route',
      metaDescription: 'Claude Cowork has no price of its own and rides Claude plans from $17 a month, while open source Kortix prices credits instead of seats.',
      h1: 'What Claude Cowork costs, and the open source route priced in credits',
      lead: 'Claude Cowork has no price of its own: you buy a Claude plan, and Cowork rides inside it from Pro at $17 a month. Kortix, the open-source alternative, prices credits rather than seats, so the bill tracks the work. The calculator on this page does the plan math.',
      sections: [
        {
          type: 'widget',
          heading: { title: 'The Cowork plan math', sub: 'Pick a seat count and a usage level; the calculator walks the plan ladder at Anthropic\u0027s published rates.' },
          widget: {
            variant: 'calculator',
            currency: '$',
            periodLabel: '/mo',
            seats: { label: 'Seats', min: 1, max: 150, default: 5 },
            options: [
              { id: 'pro', label: 'Pro, one seat', perSeat: 0, flat: 17 },
              { id: 'max-5x', label: 'Max 5x, one seat', perSeat: 0, flat: 100 },
              { id: 'max-20x', label: 'Max 20x, one seat', perSeat: 0, flat: 200 },
              { id: 'team-standard', label: 'Team standard seat', perSeat: 20 },
              { id: 'team-premium', label: 'Team premium seat', perSeat: 100 },
              { id: 'enterprise', label: 'Enterprise seat', perSeat: 20 },
            ],
            footnote:
              'US dollars per month, annual billing unless the line says monthly. The Pro card on Anthropic\u0027s product page says "Claude Cowork consumes limits faster than Chat. For heavy usage, consider upgrading," so heavier use climbs this ladder rather than adding an overage line. On Team, extra usage bills at API rates. Source: claude.com/product/cowork and claude.com/pricing, checked October 2026.',
          },
        },
        {
          type: 'comparison',
          heading: { title: 'Three ways to pay for agent work', sub: 'Each cell comes from the vendor\u0027s own pages, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true },
            { id: 'claude-cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
            { id: 'openwork', label: 'OpenWork', href: 'https://openworklabs.com' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [
                { text: 'Yes', mark: 'yes' },
                { text: 'No', mark: 'no' },
                { text: 'Yes', mark: 'yes' },
              ],
            },
            {
              label: 'What you pay for',
              cells: ['Credits for the agent computer; members are free', 'A Claude plan per person or seat', 'A free desktop app; cloud seats past five'],
            },
            {
              label: 'Entry price',
              cells: ['Free is $0 with 500 credits per month and 1 project', 'Pro, $17 a month billed annually', '$0 on desktop with your own keys'],
            },
            {
              label: 'Next tier up',
              cells: ['Paid plans start at $50 a month for 5,000 credits', 'Max 5x $100, Max 20x $200', '$10 a seat a month on OpenWork Cloud'],
            },
            {
              label: 'A team of five',
              cells: ['Members are free, sharing one credit pool', '5 standard seats, $100 a month billed annually', 'The first 5 seats cost nothing'],
            },
            {
              label: 'Self-hosting',
              cells: [{ text: 'Yes, self-host is free', mark: 'yes' }, { text: 'No', mark: 'no' }, 'Yes, desktop or private instance'],
            },
            {
              label: 'Where it runs',
              cells: [
                'Kortix Cloud, your VPC, or your own on-prem network',
                "Anthropic's cloud; Enterprise can bring its own",
                'Your desktop, or OpenWork Cloud',
              ],
            },
          ],
        },
        {
          type: 'prose',
          body: `## Cowork's price is the plan's price

Ask what Claude Cowork costs and the answer is a plan name. No Anthropic page quotes a Cowork price, because there is none. The product page says it "Works with a paid plan." Its plan cards place Cowork inside Pro at $17 a month, Max 5x at $100, Max 20x at $200, and Team at $20 a seat (checked October 2026). Since September 16, 2026 the question has narrowed further. Anthropic merged Cowork and chat into one Claude, so what Cowork does now arrives from any conversation on the plans that carry it.

That turns "how much is Claude Cowork" into two smaller inputs: how many people need seats, and how hard they work. The calculator on this page runs the arithmetic on Anthropic's published rates. The comparison table on this page sets the plan model beside two open-source shapes.

## The ladder, in dollars

Anthropic's pricing page, checked October 2026, sets the rates. Pro is the entry point: $17 a month billed annually, $200 up front, or $20 billed monthly. Max holds the middle at $100 a month for 5x, $200 for 20x. On Team, a standard seat is $20 a month billed annually, or $25 billed monthly. A premium seat runs $100 billed annually, or $125 monthly. Teams run from 2 to 150 people, and the Team card names Cowork and the Slack connector among what a seat includes. Enterprise is $20 a seat a month billed annually, with a 20-seat minimum and usage at API rates. The Free plan is $0, and Cowork still sits behind a paid plan. Three runs of the calculator, at those rates:

\`\`\`
5 seats, most days     -> Team standard, 5 × $20 = $100 a month billed annually
1 seat, all day        -> Max 20x, $200 a month
2 seats, now and then  -> Team standard, 2 × $20 = $40 a month billed annually
\`\`\`

## What the usage dial does

The second input is usage, and the Pro card on Anthropic's Cowork page says why it belongs in the math. "Claude Cowork consumes limits faster than Chat. For heavy usage, consider upgrading." The plans carry usage limits. Agent work draws them down faster than chat does, because Cowork coordinates sub-agents and tool calls. A person who hands off work all day lands on Max; a team that does lands on premium seats. Team adds one twist the personal plans lack: past the limits, extra usage bills at API rates.

## The open source route prices credits

Kortix repriced in October 2026 and retired its seats. Its price page now lists 500 credits a month on the free plan, 1 project, and paid plans from $50 a month for 5,000 credits. A credit pays for the agent computer, the cloud machine where an agent runs code, browses and edits files. That machine bills per second while it runs and costs nothing while it is stopped ([Kortix pricing](https://kortix.com/pricing)). Add a person and the bill holds; route more work and the credits move.

Self-hosting moves the question off the invoice. "Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free." On hardware you own, the recurring bills are ones you already had: the box and the models. Models stay bring-your-own: "Any model provider with your own keys. Or the ChatGPT plan you already pay for." The [self-hosting guide](https://opensourceclaudecowork.com/self-hosting) on this site takes the setup step by step, and the Kortix blog asks [Is Kortix free?](https://kortix.com/blog/is-kortix-ai-free) at more length.`,
        },
        {
          type: 'faq',
          heading: { title: 'Price questions buyers ask', sub: 'Answers quote each vendor\u0027s own pages, checked October 2026.' },
          items: [
            {
              id: 'separate-billing',
              question: 'Is Claude Cowork billed separately from Claude?',
              answer:
                'No. There is no Cowork price line anywhere; the [Cowork page](https://claude.com/product/cowork) includes it in Pro, Max, Team and Enterprise, and its banner now reads "Claude Cowork is now just Claude."',
            },
            {
              id: 'one-person',
              question: 'How much is Claude Cowork a month for one person?',
              answer:
                'The entry point is Pro: $17 a month billed annually or $20 billed monthly. Anthropic\u0027s Pro card adds that Cowork consumes limits faster than chat, so it points heavy usage at the higher tiers, from Max 5x at $100 a month ([claude.com/pricing](https://claude.com/pricing)).',
            },
            {
              id: 'merge-effect',
              question: 'Did the September 2026 merge change the price?',
              answer:
                'No new price line appeared. The September 16, 2026 merge folded what Cowork does into Claude itself, the same plans cover it, and the rollout reached Pro and Max first, with Team and Free plans following ([the announcement](https://claude.com/blog/cowork-is-now-claude)).',
            },
            {
              id: 'limits',
              question: 'Why did my limits run out faster than in chat?',
              answer:
                'Agent work spends more capacity: Cowork coordinates sub-agents and tool calls, and Anthropic\u0027s page says it consumes limits faster than Chat. On Team, extra usage beyond the limits bills at API rates.',
            },
            {
              id: 'open-source-cost',
              question: 'What does the open source alternative cost?',
              answer:
                'Kortix prices credits: Free is $0 with 500 credits per month, managed models, every feature and 1 project. Paid plans start at $50 a month for 5,000 credits, and members are free, sharing one credit pool. Self-host is free ([Kortix pricing](https://kortix.com/pricing)).',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Start on a credit pool',
          sub: 'Kortix is open source; try it on Kortix Cloud or self-host the stack on your own hardware.',
          ctas: [TRY_KORTIX, cta('See the self-hosting guide', 'https://opensourceclaudecowork.com/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-vs-openwork ────────────────────────────────────────── */
    {
      slug: 'claude-cowork-vs-openwork',
      navLabel: 'vs OpenWork',
      title: 'Claude Cowork vs OpenWork: the open-source alternative a team can govern',
      metaDescription:
        'OpenWork runs agent work on your desktop and Claude Cowork inside Claude; Kortix is the open-source system that runs it server-side, behind a review gate.',
      h1: 'Claude Cowork vs OpenWork: the open-source system with the review gate',
      lead: 'OpenWork is a free, open-source desktop app for work on your own files, and Claude Cowork has been a capability of Claude since September 16, 2026. The choice between them is where the work runs and who reviews it. Kortix is the open-source option that runs the work server-side, behind a change request a person approves.',
      sections: [
        {
          type: 'comparison',
          heading: { title: 'The two questions, asked of all three', sub: 'Each rival cell states only what that vendor\u0027s own pages say, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true },
            { id: 'claude-cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
            { id: 'openwork', label: 'OpenWork', href: 'https://openworklabs.com' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [
                { text: 'Yes', mark: 'yes' },
                { text: 'No', mark: 'no' },
                { text: 'Yes', mark: 'yes' },
              ],
            },
            {
              label: 'Where the work runs',
              cells: [
                'Kortix Cloud, your VPC, or your own on-prem network',
                "Anthropic's cloud or your own cloud provider account",
                'Your desktop; hosted cloud workers optional',
              ],
            },
            {
              label: 'The review before work lands',
              cells: [
                'A change request; merge is default-deny for agents',
                'By default, Claude asks before taking an action',
                'Work lands in the files on your machine',
              ],
            },
            {
              label: 'Where the rules live',
              cells: [
                'In the project repo, as files',
                "In Claude's settings and admin controls",
                'In the desktop app, shared by one link',
              ],
            },
            {
              label: 'Built for',
              cells: ['The whole company, in one repo you own', 'Non-coding knowledge work in Claude', 'Knowledge workers on their own files'],
            },
            {
              label: 'Free to start',
              cells: [{ text: 'Self-host is free', mark: 'yes' }, 'Works with a paid plan', 'Free desktop app; 5 free cloud seats'],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: 'The review gate, in the Kortix docs' },
          artifact: {
            file: 'kortix.com/docs',
            lang: 'text',
            source: 'https://kortix.com/docs',
            lines: [
              'The agent opens a change request',
              'The agent commits, pushes the session branch, and opens a change',
              "request against the project's default branch.",
              '',
              'A person merges it',
              'A person with the project.gitops.merge permission reviews the change request and merges it into the default branch.',
            ],
          },
          caption: 'How agent work lands in a Kortix project: its own branch, a change request, and a person who merges.',
        },
        {
          type: 'prose',
          body: `## What each product is

OpenWork is a free, open-source desktop app for macOS, Windows, and Linux that runs AI agents on your own files, built on OpenCode. That brings more than 50 model providers, on your own keys or a local model. Its docs list the rest of the suite: a web app, an AI gateway for provider access, and an MCP gateway that carries an org's skills into other agent clients ([openworklabs.com](https://openworklabs.com), checked October 2026).

Claude Cowork stopped being a separate destination on September 16, 2026, when Anthropic merged Cowork and chat into one Claude. What Cowork could do now comes from any conversation, with the context, skills, and connectors you already have. The rollout reached Pro and Max plans first; Team and Free plans follow (checked October 2026). The Cowork product page still stands, describing the same job as before: hand over a task, get work back for review, on a paid plan.

Kortix is the open-source AI Operating System: your agents, their skills, your company memory, and every connector in one git repo you own, with the agents working on real cloud computers. The comparison table on this page holds the three side by side. It measures the two questions that separate them: where the work runs, and who reviews it.

## Where the work runs

OpenWork's local story is its strongest feature. In desktop mode your files stay on your machine. Prompts go straight to the provider you choose, its FAQ says, and nothing needs an account to start. A local model keeps the whole loop on one computer. The trade is the computer itself: a desktop app works while the desktop is awake. OpenWork lists scheduled tasks as alpha on its own comparison chart, and hosted cloud workers are an optional extra ([openworklabs.com](https://openworklabs.com), checked October 2026).

Claude Cowork runs the other way. A task keeps going after the laptop closes. A task scheduled to any cadence runs unattended, Anthropic's pages say ([the product page](https://claude.com/product/cowork), checked October 2026). The compute sits on Anthropic's cloud, or on your own cloud provider account if you point it there, and either way the work and its history live inside Claude's product.

Kortix puts the machine in the middle on purpose. One isolated sandbox per session. Each session has its own isolated machine and branch. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free. That move costs something: the work leaves your laptop for a server. The server is what a team can govern, back up, and keep running after everyone goes home.

## Who reviews the work

Anthropic's answer is consent at the moment of action: by default, Claude asks before taking an action, and you keep the final say. A setting lets it keep working and check in when something needs a closer look. Team and Enterprise admins set access by team and control tool permissions by department. Activity streams to a SIEM ([the Cowork product page](https://claude.com/product/cowork), checked October 2026). The record of what the agent did sits next to the work, inside Anthropic's product.

OpenWork's docs cover control over access and distribution. The app works only in folders you authorize; desktop policies manage its reach. A team sets up skills, plugins, and MCP servers once, then shares them through one link, and the cloud plans add roles, SSO, and SCIM ([OpenWork's docs](https://openworklabs.com/docs/start-here/get-started), checked October 2026). Those controls decide who can use the agent. Reviewing what the agent produced is a separate step. On a desktop app, that step happens wherever you happen to read your files.

Kortix puts that step in the repo. Session work reaches \`main\` through a change request. Merge is default-deny for agents. The Kortix docs excerpt on this page shows that path in the product's own words. It runs from a session branch to a change request to a person holding the merge permission. Per-resource permissions for people and agents. Roles, groups, and an audit trail. The rules an agent runs under are files in the same repo, so one review covers what the agent did and what it was allowed to do.

## Match the product to the work

Pick by the shape of the work. One person working through files on one machine is OpenWork's exact job, done free on the model and keys you choose. Handing a task to Claude and coming back to finished work is Cowork's territory now. The capability sits one conversation away, on a paid plan. Work that has to keep running when the office is empty needs a server-side system. Passing a review before it lands is part of the same need. Kortix is the leading open-source alternative to Claude Cowork and ChatGPT Work.

The [self-hosting guide](/self-hosting) on this site walks the install, and the [alternatives roundup](/claude-cowork-alternatives) maps the wider field. For the worked version of this comparison, read the [Kortix vs OpenWork post](https://kortix.com/blog/kortix-vs-openwork) on the Kortix blog. What people reported after installing the desktops is [collected from the Reddit threads](/open-source-claude-cowork-reddit).`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions buyers ask about Claude Cowork and OpenWork' },
          items: [
            {
              id: 'alternative',
              question: 'Is OpenWork an alternative to Claude Cowork?',
              answer:
                'OpenWork\u0027s own site introduces it as "the open-source alternative to Claude Cowork and Codex" ([openworklabs.com](https://openworklabs.com), checked October 2026). That holds for desktop work on your own files, on a model you choose. For work that runs on a server and lands through a review, the open-source option is Kortix.',
            },
            {
              id: 'cost',
              question: 'What does OpenWork cost?',
              answer:
                'The desktop app is free and open source, with your own model keys. The cloud Team plan includes the first 5 seats free, then $10 per seat per month; Enterprise adds SCIM and desktop policies ([OpenWork\u0027s FAQ](https://openworklabs.com), checked October 2026). Claude Cowork works with a paid Claude plan, from Pro at $17 a month billed annually ([Anthropic\u0027s pricing](https://claude.com/pricing), checked October 2026).',
            },
            {
              id: 'merge',
              question: 'What changed when Claude Cowork merged into Claude?',
              answer:
                'On September 16, 2026, Anthropic merged Cowork and chat into one Claude. What Cowork could do now comes from any conversation ([the announcement](https://claude.com/blog/cowork-is-now-claude), checked October 2026). The rollout reached Pro and Max first, with Team and Free plans to follow. The capability moved into every conversation; the work still runs on Anthropic\u0027s side.',
            },
            {
              id: 'server-alternative',
              question: 'Is there an OpenWork alternative that runs the work on a server?',
              answer:
                'Kortix. One isolated sandbox per session, and work reaches \`main\` through a change request a person approves.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Put the work where a person can review it',
          sub: 'One repo, one review gate, self-hosted or on Kortix Cloud.',
          ctas: [TRY_KORTIX, cta('See the self-hosting guide', 'https://opensourceclaudecowork.com/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-vs-perplexity-computer ─────────────────────────────── */
    {
      slug: 'claude-cowork-vs-perplexity-computer',
      navLabel: 'vs Perplexity Computer',
      title: 'Claude Cowork vs Perplexity Computer: the open-source what-you-keep comparison',
      metaDescription:
        'Both hosted workers run in a vendor\u0027s cloud; this open-source comparison of Claude Cowork and Perplexity Computer asks what you keep.',
      h1: 'Claude Cowork vs Perplexity Computer: what you keep when you leave',
      lead: 'Claude Cowork and Perplexity Computer hand a goal to an agent in the vendor\u0027s cloud and return polished deliverables. The comparison that decides anything is what each leaves you holding: your configuration, your history, your connector setup. Kortix is the open-source third option, and it keeps all three in one git repo you own.',
      sections: [
        {
          type: 'comparison',
          heading: { title: 'What each option keeps of yours', sub: 'Every rival cell restates that vendor\u0027s own page, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true },
            { id: 'claude-cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
            { id: 'perplexity', label: 'Perplexity Computer', href: 'https://www.perplexity.ai/computer' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [
                { text: 'Yes', mark: 'yes' },
                { text: 'No', mark: 'no' },
                { text: 'No', mark: 'no' },
              ],
            },
            {
              label: 'Where it runs',
              cells: [
                'Kortix Cloud, your VPC, or your own on-prem network',
                "Anthropic's cloud, or your own Bedrock, Google Cloud, or Foundry account",
                "Perplexity's cloud; every task in an isolated compute environment",
              ],
            },
            {
              label: 'Self-hosting',
              cells: [{ text: 'Yes', mark: 'yes' }, { text: 'Not offered', mark: 'no' }, { text: 'Not offered', mark: 'no' }],
            },
            {
              label: 'Models',
              cells: ['Any model provider with your own keys', "Anthropic's models only", 'Frontier models from several labs, routed per task'],
            },
            {
              label: 'Your configuration',
              cells: [
                'One git repo: agents, skills, connectors, triggers',
                'Skills and connectors live in your Claude account',
                'Skills and connectors live in your Perplexity account',
              ],
            },
            {
              label: 'Your history',
              cells: ['Commits and change requests in the repo', 'Chats, projects, artifacts inside Claude', 'Sessions and deliverables inside Perplexity'],
            },
            {
              label: 'Review gate',
              cells: [
                'Work reaches main through a change request',
                'Shows its plan and waits for approval on significant actions',
                'The orchestrator checks in when the work needs a person',
              ],
            },
            {
              label: 'Entry cost',
              cells: ['Free is $0 with 500 credits per month and 1 project', 'Works with a paid plan', 'On paid plans'],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: 'The configuration, as a file' },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://github.com/kortix-ai/suna/blob/main/packages/starter/templates/base/kortix.yaml',
            lines: [
              '# v2 is deny-by-default: an omitted connectors/secrets/kortix_permissions/',
              '# skills grant resolves to "none", so a scoped specialist starts locked down.',
              'env:',
              '  required: []',
              '  optional: [STRIPE_API_KEY]',
              'agents:',
              '  kortix:',
              '    file: agents/kortix.md',
              '    connectors: all',
              '    secrets: all',
              '    kortix_permissions: all',
              '    skills: all',
            ],
          },
          caption: 'The grant block of the starter \`kortix.yaml\`: connector, secret, and permission rules that live in git, in a file the team owns.',
        },
        {
          type: 'prose',
          body: `## Two hosted workers, one custody question

Claude Cowork and Perplexity Computer take the same kind of job. You describe an outcome. A hosted agent splits it into subtasks and hands back a finished deliverable. Perplexity's announcement calls Computer "a general-purpose digital worker." Each task runs, it says, in an isolated compute environment with a real filesystem, a browser, and tool integrations. Anthropic's page says Cowork completes "tasks you can steer from anywhere," with work handed back "for your review" (checked October 2026).

The features converge because the shapes match. So does the custody arrangement: neither product publishes its source, and neither offers a self-hosted edition. The work runs on the vendor's cloud, under the vendor's terms, inside the vendor's app. A team choosing between them is choosing between two versions of one arrangement. The subscription it already holds usually settles the vendor. What stays open: when the arrangement ends, what comes with you?

## What you keep when you leave

Three things are at stake. Configuration is the agents, the skills, and the rules that govern them. History is the record of what was done, and why. Connector setup is which tools the agent could reach, and with whose credentials. On both hosted workers, all three sit in the vendor's account. Perplexity's Help Center calls installed skills "copies that you manage for your account," listed on a Plugins page. Sessions and deliverables stay inside the product. Anthropic's announcement lists Cowork's carried-over items the same way: "your chats, projects, artifacts, connectors, and skills."

Kortix keeps all three in one place: a git repo where agents, skills, connector rules, and memory are files. The session history is the commit log. Leaving is a clone. The comparison table on this page scores both hosted workers and the repo on those rows.

## What the September merge sharpened

On September 16, 2026, Anthropic merged Cowork and chat into one Claude. What Cowork could do is now available from any conversation, with the context, skills, and connectors you already have ([the announcement](https://claude.com/blog/cowork-is-now-claude)). The rollout is staged: Pro and Max plans first, in the Claude app on web, desktop, and mobile. Team and Free plans follow, and Enterprise admins will hear "at least 30 days before anything changes for their organizations."

The carry-over deserves a second read. Chats, projects, artifacts, connectors, and skills moved because they were already inside one vendor's product. They landed in another corner of that same product. The Cowork page is still live, and it still carries the plan note: works with a paid plan (checked October 2026). It also notes that Cowork consumes limits faster than Chat. A vendor redrawing the product around your setup is what hosting means. It is also the clearest case for keeping the setup somewhere the vendor's product map does not reach.

## Where the day-to-day differs

The mechanics are worth knowing before the custody question ever matters. On Perplexity, a skill deploys specialist sub-agents, "often several in parallel, each handling one part of the task" ([the Help Center](https://www.perplexity.ai/help-center/en/articles/13914413-how-to-use-computer-skills), checked October 2026). You can build your own skill in a conversation with Computer, or upload a SKILL.md file. One frontier model carries the core reasoning; sub-agents route to other models as the task demands. Perplexity can change that roster as models improve ([the announcement](https://www.perplexity.ai/hub/blog/introducing-perplexity-computer)). You can also run dozens of Computers in parallel. The product page sells the pattern plainly: hand off a project, get "polished, reliable deliverables around the clock."

On Cowork, you choose the folders and tools Claude can reach. It shows its plan and waits for your approval before anything significant, and a scheduled task runs unattended ([the product page](https://claude.com/product/cowork)). Anthropic's models carry the work. The app can also reach your own Amazon Bedrock, Google Cloud, or Microsoft Foundry account. Both products hand back polished output, and the system that produced it stays where it is.

## The repo answer

Kortix is the open-source AI Operating System: your agents, their skills, your company memory, and every connector in one git repo you own, with the agents working on real cloud computers. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free. The model layer comes with the repo: any model provider with your own keys. Or the ChatGPT plan you already pay for. The review gate sits in the file layout too. Session work reaches \`main\` through a change request. Merge is default-deny for agents. The grant block in the artifact on this page shows those rules as the starter repo ships them.

Two deeper reads live on the Kortix blog. [Kortix vs Perplexity Computer](https://kortix.com/blog/kortix-vs-perplexity-computer) weighs the hosted worker against the owned system. [Open-source Perplexity Computer alternatives](https://kortix.com/blog/open-source-perplexity-computer) maps the wider open field. The [self-hosting guide](/self-hosting) on this site takes a bare box from nothing to a running stack. Handing an outcome to a hosted worker and getting a deliverable back is a job both do. Either subscription covers it. A setup that outlives the subscription is a different job. The repo is the thing to keep, and Kortix, the leading open-source alternative to Claude Cowork and ChatGPT Work, is where that repo lives.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions buyers ask about the two hosted workers', sub: 'The moving facts carry their dates.' },
          items: [
            {
              id: 'alternative',
              question: 'Is Perplexity Computer an alternative to Claude Cowork?',
              answer:
                'It is the same shape: you describe an outcome, and a hosted worker returns a deliverable. Since September 16, 2026, Cowork is a capability inside Claude rather than a separate app. The practical choice comes down to the plan you already pay for and where you want the work to sit.',
            },
            {
              id: 'self-host',
              question: 'Can either one be self-hosted?',
              answer:
                'Neither offers it. Cowork runs on Anthropic\u0027s cloud or your own Bedrock, Google Cloud, or Foundry account; Computer runs in Perplexity\u0027s cloud. Kortix is the option that installs on your own infrastructure, and self-host is free.',
            },
            {
              id: 'cost',
              question: 'What does Perplexity Computer cost?',
              answer:
                'Perplexity\u0027s plans page lists Pro at $17 a month billed annually with expanded Computer access (checked October 2026). Max is $167 a month billed annually, with the highest usage and 10,000 monthly credits. The launch announcement named Max subscribers as the first audience.',
            },
            {
              id: 'setup-after-merge',
              question: 'What happened to my Cowork setup after the September merge?',
              answer:
                'Anthropic carried it over. Chats, projects, artifacts, connectors, and skills stayed where you left them when Cowork and chat merged on September 16, 2026 ([the announcement](https://claude.com/blog/cowork-is-now-claude)). Pro and Max plans went first, and Team and Free plans follow.',
            },
            {
              id: 'what-you-keep',
              question: 'What do you keep when you move to the open-source option?',
              answer:
                'The repo: agents, skills, memory, and connector rules as files in git, with the work\u0027s record in commits and change requests. Free is $0 with 500 credits per month, managed models, every feature and 1 project. Paid plans start at $50 a month for 5,000 credits, and members are free, sharing one credit pool.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Keep the setup when the subscription ends',
          sub: 'Start on Kortix Cloud, or install the full stack on infrastructure you own.',
          ctas: [TRY_KORTIX, cta('See the alternatives', '/claude-cowork-alternatives')],
        },
      ],
    },

    /* ── claude-cowork-for-teams ──────────────────────────────────────────── */
    {
      slug: 'claude-cowork-for-teams',
      navLabel: 'For teams',
      title: 'Claude Cowork for teams: the open-source governance answer',
      metaDescription:
        'After the September 2026 merge, Claude Team plans still wait behind Pro and Max, so compare who approves, who can read, and where the work runs.',
      h1: 'Open-source governance for teams: who approves, who can read, where it runs',
      lead: 'The Claude Team plan lists Claude Cowork today, yet the merged experience still rolls out to Pro and Max first, with Team and Free to follow soon. The real question for a team is who approves the work, who can read the record, and where it runs. Kortix is the open-source system built to answer all three.',
      sections: [
        {
          type: 'comparison',
          heading: { title: 'Three questions every reviewer asks', sub: 'Rival cells come from Anthropic\u0027s own pricing and product pages, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true },
            { id: 'claude-team', label: 'Claude Team plan', href: 'https://claude.com/pricing' },
          ],
          rows: [
            {
              label: 'Who approves the work',
              cells: ['Approval gates you set. Off until you set them.', 'Claude asks before acting; you keep the final say'],
            },
            {
              label: 'How work lands',
              cells: ['Session work reaches main through a change request', 'You review the finished work and redirect anytime'],
            },
            {
              label: 'Who can see the work',
              cells: ['Per-resource permissions for people and agents', 'Access by team and tool permissions by department'],
            },
            {
              label: 'Who can read the record',
              cells: ['Roles, groups, and an audit trail', 'Audit logs wait for the Enterprise plan'],
            },
            {
              label: 'Where it runs',
              cells: ['Kortix Cloud, in your VPC, or on-prem. Self-host is free', "Anthropic's cloud or your own cloud account; no self-host"],
            },
            {
              label: 'Where the setup lives',
              cells: ['Files in one git repo the team owns', "Chats, projects, and files stay with each member's account"],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: 'The grant that decides who can start a session' },
          artifact: {
            file: 'docs/accounts',
            lang: 'text',
            source: 'https://kortix.com/docs/accounts',
            lines: [
              'Every person holds one account role, and a project role on each project they work in.',
              'Open **Account settings** → **Projects**, pick the project, and select **Grant access**.',
              'Pick a role: **Manager** or **Member**.',
              'Give them at least one agent.',
              'In the Grant access dialog, set Agents to All agents or Only these….',
              'Without an agent grant, a member cannot start a session: the API answers 403 with "You don\u0027t have access to any agent in this project."',
            ],
          },
          caption: 'From Kortix\u0027s accounts and access docs, the same page that documents the account\u0027s audit log and its custom roles.',
        },
        {
          type: 'prose',
          body: `## Team plans are still waiting in the rollout

On September 16, 2026, Anthropic merged Claude Cowork and chat into one Claude. What Cowork could do now happens in any conversation, with the context, skills, and connectors the account already has. Existing Cowork work carries over with it ([the announcement](https://claude.com/blog/cowork-is-now-claude)). The order of the rollout matters to anyone buying for a group. Pro and Max plans go first, on web, desktop, and mobile, over the coming weeks. Team and Free plans "will follow soon". Enterprise admins will hear from Anthropic at least 30 days before anything changes for their organizations.

Checked October 2026, there is no published date for Team plans. A team buying seats this month accepts a rollout whose timing it does not control. The product page still sells Cowork with a paid plan. It counts Cowork among what Team standard and premium seats include, alongside the Slack connector. What no page promises is when the merged experience reaches those seats.

## What the Team plan documents

The plan prices cleanly. A standard seat costs $20 a month billed annually, or $25 monthly ([Anthropic's pricing page](https://claude.com/pricing), checked October 2026). A premium seat costs $100 annual, or $125 monthly, and buys 5x the usage. Teams run from 2 to 150 people. The plan lists Claude Code and Claude Cowork, and pooled API credits reach $500 a month.

The admin controls are real. Anthropic's product page says admins set access by team and manage spend limits. They can also control tool permissions by department, with activity streaming to a SIEM through OpenTelemetry. Anthropic's own comparison table holds the fine print. Role-based access, SCIM, audit logs, and custom data retention are marked No on Team, Yes on Enterprise. The record-keeping arrives with the tier teams cannot buy yet.

## The three questions a sign-off asks

Whoever approves the purchase rarely asks what the agent can do. The review runs through three questions: who approves the work, who can read the record, and where it runs. The table on this page answers all three, cell by cell from each vendor's own pages.

On approvals, Anthropic's model is the person inside the task. Claude asks before taking an action by default. You can let it keep working and check in when something needs a closer look. You keep the final say. That is approval by the person running the task, in that person's conversation. A second person signing off on what the first person's agent did does not appear in the documented flow. The audit log that would carry the record waits for Enterprise.

Where it runs reads the same way. The choice is Anthropic's cloud or the customer's own account on Amazon Bedrock, Google Cloud, or Microsoft Foundry. A self-hosted edition is not on the list.

## The gate, in a repo you own

Kortix is open source, and its governance lives where the work lives: in the repo. The accounts docs write the access model step by step. The excerpt on this page shows the middle of it. Every person holds one account role, and a project role on each project they work in. Granting a project means picking a role, Manager or Member, plus at least one agent. Without an agent grant the API refuses: 403, "You don't have access to any agent in this project."

Visibility is written the same way. A member sees their own sessions and costs. Another person's session answers 404. Widening that is a deliberate act: a custom role with member.read and group.read. The account's audit log sits in the same settings tree.

Approvals and landing get their own lines. Connector calls run allow, ask, or block. An approval holds the call until a person answers. Work lands on the base branch through change requests. A session works on its own branch, and the merge takes a person with the merge permission. The team's setup stays files in that repo: agents, skills, memory, and the rules binding them. A reviewer can read the rule an agent ran under before judging its output.

## Where this leaves a team

The merge made Cowork easier to reach. It changed nothing about who holds the gate. It did put Team plans behind Pro and Max in the queue. For a team whose reviewer wants the gate written down now, Kortix is the recommendation. The rules live in the repo, the record sits in the account by default, and the stack runs where the team puts it. The [self-hosting guide](/self-hosting) covers that path, and [where a full platform beats a framework](https://kortix.com/blog/open-source-ai-agent-platform) sorts the wider open-source field. The Team plan remains a sound buy for teams content with per-person approval and an Enterprise-tier record later. The choice turns on the three questions your reviewer will ask.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions team leads ask', sub: 'Short answers, dated where the facts move.' },
          items: [
            {
              id: 'included',
              question: 'Is Claude Cowork included in the Claude Team plan?',
              answer:
                'Yes, today. The Team plan lists Claude Code and Claude Cowork, and Anthropic\u0027s product page says Cowork and the Slack connector are included on Team standard and premium seats (checked October 2026).',
            },
            {
              id: 'team-date',
              question: 'When does the merged experience reach Team plans?',
              answer:
                'The September 16 announcement puts Pro and Max plans first and says Team and Free plans will follow soon, with Enterprise admins getting at least 30 days\u0027 notice. As of October 2026 there is no published Team date.',
            },
            {
              id: 'approvals',
              question: 'Who approves an agent\u0027s actions on the Team plan?',
              answer:
                'By default Claude asks before taking an action, and the person running the task keeps the final say. The audit log that records what happened is marked for Enterprise in Anthropic\u0027s own comparison table.',
            },
            {
              id: 'set-approvals',
              question: 'How does a team set approvals in Kortix?',
              answer:
                'Through the Grant access flow in the docs: a project role, an agent grant, and allow, ask, or block on connector calls. Landing work is a change request away from the base branch, and merging takes a person.',
            },
            {
              id: 'own-hardware',
              question: 'Can a team run Kortix on its own hardware?',
              answer:
                'Yes. The [self-hosting guide](/self-hosting) takes a bare Linux box to a running stack, and the team\u0027s setup stays files in its own repo.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Put the gate where the team can read it',
          sub: 'Run the team\u0027s agents on a repo the whole team owns.',
          ctas: [TRY_KORTIX, cta('Read the self-hosting guide', '/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-vs-microsoft-copilot ───────────────────────────────── */
    {
      slug: 'claude-cowork-vs-microsoft-copilot',
      navLabel: 'vs Microsoft Copilot',
      title: 'Claude Cowork vs Microsoft Copilot: the open-source admin comparison',
      metaDescription:
        'Compare Claude Cowork and Microsoft Copilot from the admin seat: who sets agent access, where the audit trail lives, and the open-source exit path.',
      h1: "Claude Cowork vs Microsoft Copilot: the admin's open-source comparison",
      lead: "Claude Cowork and Microsoft Copilot both ride inside a vendor's suite: Cowork inside Claude, Copilot inside Microsoft 365. Read from the admin seat, they differ on who sets agent access, where the audit trail lands, and what you can take when you leave. Kortix is the open-source third option, and its answer is a repo you own.",
      sections: [
        {
          type: 'comparison',
          heading: { title: 'The levers, the record, and the exit, compared', sub: 'Every rival cell comes from the vendor\u0027s own pages, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true, href: 'https://kortix.com/docs', nofollow: true },
            { id: 'claude-cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
            {
              id: 'microsoft-copilot',
              label: 'Microsoft Copilot',
              href: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview',
            },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [
                { text: 'Yes', mark: 'yes' },
                { text: 'No', mark: 'no' },
                { text: 'No', mark: 'no' },
              ],
            },
            {
              label: 'Where it runs',
              cells: [
                'Kortix Cloud, your VPC, or your on-prem network. Self-host is free.',
                "Anthropic's cloud, or your Bedrock, Google Cloud, or Microsoft Foundry account",
                "Microsoft's cloud, under Enterprise Data Protection and the EU Data Boundary",
              ],
            },
            {
              label: 'Who sets agent access',
              cells: [
                'Per-resource permissions for people and agents. Roles, groups, and an audit trail.',
                'Admins set access by team, manage spend limits, control tool permissions',
                'Off by default; admins set access and spending limits',
              ],
            },
            {
              label: 'Who approves the work',
              cells: [
                'Work reaches main through a change request. Merge is default-deny for agents.',
                'By default Claude asks before taking an action',
                'Each action waits for approval before it happens',
              ],
            },
            {
              label: 'What stays with you',
              cells: [
                'One git repo you own',
                'Chats, projects, artifacts, connectors, and skills stay in Claude',
                'Work stays inside the Microsoft 365 trust boundary',
              ],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: 'The merge gate and the audit log, as the docs state them' },
          artifact: {
            file: 'kortix.com/docs',
            lang: 'text',
            source: 'https://kortix.com/docs',
            lines: [
              "The agent commits, pushes the session branch, and opens a change request against the project's default branch.",
              'A person with the project.gitops.merge permission reviews the change request and merges it into the default branch.',
              "A session can merge its own change request only when its agent's kortix_permissions grant in kortix.yaml includes project.gitops.merge.",
              'To require a person, give the agent a kortix_permissions list without project.gitops.merge.',
              'Every action is recorded in the audit log.',
              'The log keeps 90 days of events live, and the archive keeps them up to 365 days.',
            ],
          },
          caption: "Lines from the Kortix docs on the gate an admin configures and the record kept behind it, plus Kortix's default-deny rule.",
        },
        {
          type: 'prose',
          body: `## Three products share the Copilot name

Microsoft puts one name on three products, and the comparison changes with the one you mean. The Copilot app for personal accounts is a general assistant. Microsoft 365 Copilot is the paid work service woven through Word, Excel, PowerPoint, Outlook, and Teams ([Microsoft's Copilot overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview)). Its answers draw on web and work data through Microsoft Graph and Work IQ. The third, Copilot Cowork, shares its name with Anthropic's product and is the one most searches mean. It went generally available on June 16, 2026. It sends mail through Outlook, schedules meetings, builds documents, and posts in Teams, and it pauses for approval before each action ([Microsoft's Cowork overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork)).

Claude Cowork changed shape the same season. On September 16, 2026, Anthropic merged Cowork and chat into one Claude, so what Cowork could do now runs from any conversation, with the context, skills, and connectors you already have. Pro and Max plans received it first over the following weeks. Team and Free follow, and Enterprise admins were promised at least 30 days' notice ([Anthropic's announcement](https://claude.com/blog/cowork-is-now-claude)). The product page still describes Cowork as a paid-plan capability, rolling out on web and mobile in beta ([Claude Cowork](https://claude.com/product/cowork)). It also notes that Cowork consumes limits faster than Chat. Strip the names away and the two look alike: a goal goes in, an approval step sits in the middle, finished work comes out. An admin reads them differently. The questions that decide the choice are who holds the controls, what the record shows, and what survives an exit.

## Where the admin's levers sit

Both vendors give admins real controls, and both attach them to the same condition: the controls are settings in a console the vendor operates. Microsoft's Cowork ships off by default. An admin decides when to enable it and who gets access, and sets spending limits at the tenant, group, and user levels ([Microsoft's GA announcement](https://www.microsoft.com/en-us/copilot/blog/2026/06/16/copilot-cowork-is-now-generally-available)). Usage reports break down the same way. Anthropic concentrates its controls on the Team and Enterprise tiers: admins set access by team, manage spend limits, and control tool permissions by department, and Enterprise activity streams to a SIEM through OpenTelemetry ([Claude Cowork](https://claude.com/product/cowork)).

Kortix keeps its levers in the repo instead of a console. Nothing merges itself: work reaches \`main\` through a change request a person approves, unless an admin granted the merge capability ([the Kortix docs](https://kortix.com/docs)). That rule lives in the project's files, so a person can read it, edit it, and roll it back. The console versions are thorough, and they change when the vendor changes them. A grant written in the repo changes when you change it, and the diff is the receipt.

## What the record shows

Microsoft's record is chiefly a cost record. The admin console reports usage at the tenant, group, and user levels, and each task's price appears in credits as it runs ([Microsoft's GA announcement](https://www.microsoft.com/en-us/copilot/blog/2026/06/16/copilot-cowork-is-now-generally-available)). That accountability is what a usage-billed product owes. Anthropic's record leans on the controls that govern access: deleting anything in Cowork needs the person's approval, and Enterprise customers stream activity to their own SIEM through OpenTelemetry ([Claude Cowork](https://claude.com/product/cowork)).

Kortix records the work in two places a team already owns. The audit log keeps 90 days of events live, with an archive up to 365 days ([the Kortix docs](https://kortix.com/docs)). The repo keeps the rest: a session's output arrives as a change request, and its history reads as a git log with a reviewer's decision on each entry. A console answers what was spent; the repo answers what changed, line by line.

## The exit path

Exit is where the tenant question stops being abstract. Copilot's finished work lands in Word, Excel, PowerPoint, Outlook, and Teams, inside the Microsoft 365 tenant ([Microsoft's Copilot overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview)). Enterprise Data Protection and the European Union Data Boundary cover its prompts and responses. Cowork's output lands in the Claude apps, and after the merge the chats, projects, artifacts, connectors, and skills carry over inside Anthropic's product ([Anthropic's announcement](https://claude.com/blog/cowork-is-now-claude)). Leaving either suite means exporting documents and history; the system that produced them, its rules, its memory, and its connectors, stays on the vendor's terms.

The model question sits in the same place. At the June 2026 general availability, Microsoft ran Cowork on Anthropic's models, Opus 4.8 and Sonnet 4.6, with its own Cowork 1 model to follow ([the same announcement](https://www.microsoft.com/en-us/copilot/blog/2026/06/16/copilot-cowork-is-now-generally-available)). A picker lets customers steer cost per task. Vendors rearrange their model menus; a customer picks from the menu. Neither product's pages describe bringing your own provider key.

Kortix is the open-source AI Operating System, and it answers the exit question with a repo. Your agents, skills, company memory, and connectors live in one git repo you own. Each session runs on its own cloud computer. Copy the repo and the system comes with it: agents, rules, memory, and connectors are all files. Moving to new infrastructure means cloning it. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free. Models are BYOK in the app, so the provider is a setting you hold.

Run the decision as three questions instead of a feature count. A team that lives in Word, Excel, and Teams gets answers grounded in its own work data from Copilot ([Microsoft Copilot](https://www.microsoft.com/en-us/copilot)). Work IQ reads the context behind its projects. A team handing off scheduled reports and document work fits Cowork's shape on a Claude plan. When the deciding questions are who administers the agents, what gets recorded, and how you leave, Kortix is the option to weigh first. It lives in your repo instead of someone's tenant. The [alternatives guide](https://opensourceclaudecowork.com/claude-cowork-alternatives) on this site covers the wider open-source field, and Kortix's blog keeps a longer guide to an [open-source Microsoft Copilot alternative](https://kortix.com/blog/open-source-microsoft-copilot-alternative).`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions an admin asks about the two suites', sub: 'Short answers, with the moving facts dated.' },
          items: [
            {
              id: 'equivalent',
              question: 'Which Microsoft product is the equivalent of Claude Cowork?',
              answer:
                'Copilot Cowork, the agent feature inside Microsoft 365 Copilot, generally available since June 16, 2026. It carries out tasks across Outlook, Teams, Word, Excel, and PowerPoint, and waits for approval before each action.',
            },
            {
              id: 'cost',
              question: 'What does each option cost?',
              answer:
                'Microsoft bills a per-person Microsoft 365 Copilot subscription, then Cowork tasks in Copilot Credits at a posted pay-as-you-go rate of $0.01 per credit; Claude includes Cowork in paid plans, Pro at $17 a month billed annually and Max from $100 (checked October 2026). Kortix: Free is $0 with 500 credits per month, managed models, every feature and 1 project. Paid plans start at $50 a month for 5,000 credits, and members are free, sharing one credit pool.',
            },
            {
              id: 'self-host',
              question: 'Can I self-host either vendor\u0027s agent?',
              answer:
                'No. Microsoft runs Copilot as its own cloud service, and Anthropic runs Cowork in its cloud or in a Bedrock, Google Cloud, or Microsoft Foundry account you hold. A cloud account is not an install you operate.',
            },
            {
              id: 'merge-effect',
              question: 'Did the September 2026 merge change this comparison?',
              answer:
                'On September 16, 2026, Anthropic merged Cowork and chat into one Claude, with Pro and Max plans first and Team and Free to follow. The merge moved the capability into every conversation; where it runs and who administers it stayed as they were.',
            },
            {
              id: 'standardize',
              question: 'Should a team standardize on Copilot, Cowork, or Kortix?',
              answer:
                'A team that lives in Word, Excel, and Teams gets answers grounded in its own work data from Copilot, and Cowork fits scheduled reports and document work on a Claude plan. When the deciding questions are who administers the agents, what gets recorded, and how you leave, Kortix is the option to weigh first.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Own the levers, the record, and the exit',
          sub: 'Open source, free to start, and free to self-host.',
          ctas: [TRY_KORTIX, cta('Read the self-hosting guide', 'https://opensourceclaudecowork.com/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-local-llm ──────────────────────────────────────────── */
    {
      slug: 'claude-cowork-local-llm',
      navLabel: 'Local LLM',
      title: 'Claude Cowork on a local LLM: the open-source route and why the model layer decides',
      metaDescription:
        "Claude Cowork runs on Anthropic's plans and models, so a local LLM means an open-source platform whose model layer takes your own endpoint, like Kortix.",
      h1: 'Run Claude Cowork locally? The model layer decides',
      lead: "You can run Claude Cowork locally only as far as the app goes: the work itself runs on Anthropic's models, on an Anthropic plan. If local inference is the constraint, the model layer chooses the platform. Kortix is open source, self-hostable, and reads an OpenAI-compatible endpoint you serve.",
      sections: [
        {
          type: 'code-panels',
          heading: {
            title: 'The two halves, as commands',
            sub: "The local endpoint from Ollama's own docs, and the Kortix model settings that attach it, checked October 2026.",
          },
          panels: [
            {
              tab: 'Serve a model',
              file: 'terminal',
              lang: 'sh',
              source: 'https://ollama.com/blog/openai-compatibility',
              lines: [
                'ollama pull llama2',
                'curl http://localhost:11434/v1/chat/completions \\',
                '  -H "Content-Type: application/json" \\',
                "  -d '{",
                '    "model": "llama2",',
                '    "messages": [',
                '      { "role": "system", "content": "You are a helpful assistant." }',
                '      { "role": "user", "content": "Hello!" }',
                '    ]',
                "  }'",
              ],
            },
            {
              tab: 'The same client, new base URL',
              file: 'client.py',
              lang: 'text',
              source: 'https://ollama.com/blog/openai-compatibility',
              lines: [
                'from openai import OpenAI',
                'client = OpenAI(',
                "    base_url = 'http://localhost:11434/v1',",
                "    api_key='ollama',  # required, but unused",
                ')',
              ],
            },
            {
              tab: 'Attach it in Kortix',
              file: 'models reference',
              lang: 'text',
              source: 'https://kortix.com/docs/project/models',
              lines: [
                'A custom endpoint. For a self-hosted or unlisted OpenAI-compatible endpoint, open the Custom tab.',
                'Enter a provider id, a name, the base URL, a model id and a model name.',
                'The key is optional.',
                'Kortix saves the key as CUSTOM_<ID>_API_KEY and shows an OpenCode provider snippet.',
              ],
            },
          ],
        },
        {
          type: 'prose',
          body: `## Cowork joined Claude, and the work stayed in Anthropic's cloud

On September 16, 2026, Anthropic merged Claude Cowork and chat into one Claude. What Cowork could do became available from any conversation, with the context, skills, and connectors you already have ([Anthropic's announcement](https://claude.com/resources/articles/cowork-is-now-claude)). The Cowork product page still answers the name people search. It says Cowork runs on web, desktop, and mobile, the same Claude wherever you work ([the product page](https://claude.com/product/cowork), checked October 2026). Pro, Max, and Team plans carry it automatically.

The rollout schedule comes from the same announcement. Pro and Max plans got it first, in the Claude app on web, desktop, and mobile over the coming weeks. Anthropic says Team and Free plans "will follow soon", and Enterprise admins hear at least 30 days before anything changes for their organizations. On a given day this October, who can open Cowork depends on where that rollout stands.

Nothing in the merge moved a model onto your hardware. Start a task from your phone and, the product page says, Claude keeps working in the cloud even when your laptop is closed. A local LLM fits none of that.

## Two layers hide inside one search

"Run Claude Cowork locally" bundles two different asks. The model layer decides which LLM answers each step, whose credential pays for it, and which machine generates the tokens. The agent layer is everything around the model: the harness that plans and calls tools, the connectors and memory, and the review that gates finished work.

Cowork is closed on both layers at once. Its agent layer is Anthropic's product. Its model layer is Anthropic's models, reached through an Anthropic plan. A local LLM is a model-layer request, so no app setting will satisfy it: the model was never a setting.

## Where Cowork's model layer actually runs

The product page names the placement options: "Runs where your data lives. Use a Claude account or your own cloud provider: Amazon Bedrock, Google Cloud, or Microsoft Foundry" (checked October 2026). Those are homes for the same hosted service on the same models. A cloud you already hold changes whose account the bill lands on. The tokens still come from Anthropic.

Usage shows the model layer from another side. Agent work draws Claude usage limits, and Anthropic's page warns that "Claude Cowork consumes limits faster than Chat" (checked October 2026). An agent makes many calls per job, so on a hosted plan the price arrives as a burned limit. A local model moves that cost to hardware you already own.

## The local half: an Ollama endpoint you serve

Ollama is a runner for open models on your own machine. Its site leads with "access the latest open models with complete privacy locally or in the cloud" ([Ollama](https://ollama.com), checked October 2026). The library carries the current open-weight families. OpenAI's gpt-oss is among them, listed as "designed for powerful reasoning, agentic tasks, and versatile developer use cases" ([the Ollama library](https://ollama.com/library), checked October 2026).

What makes a local runner attachable is its API shape. Ollama serves an OpenAI-compatible Chat Completions endpoint at http://localhost:11434/v1. Client code written for a hosted provider works against it once the base URL changes ([Ollama's compatibility note](https://ollama.com/blog/openai-compatibility)). In Ollama's own example the key is a placeholder the client requires and ignores, which is the shape a platform has to tolerate. The first panel on this page shows the pull-and-curl check.

## The platform half: what a model layer must accept

Test any candidate platform on the model layer first. Can a session's agent take its model from an endpoint you run? Can that choice differ per agent? Kortix states its model options in one line: "Any model provider with your own keys. Or the ChatGPT plan you already pay for. Or sign in with your OpenCode Console account for OpenCode Zen and Go."

The local endpoint enters through the Custom tab in the model settings. There you enter a provider id, a name, the base URL, a model id and a model name; the key is optional ([the model docs](https://kortix.com/docs/project/models), checked October 2026). A custom provider calls its endpoint directly, not through the gateway. Budgets, logs and routing do not apply to it, and only the OpenCode harness reads it. Whatever metering you want on local-model spend is yours to build. The endpoint also has to be reachable from the instance: localhost works when Ollama runs on the same box as a self-hosted stack.

Hosted providers take the documented CLI instead: \`kortix providers set anthropic\` reads a key from stdin, \`kortix models default <model-id>\` sets the project default, and \`kortix agents model <agent> <model-id>\` pins one agent (checked October 2026). A session that names no model walks that chain from the pin down to the platform default.

The per-agent split is the useful part for a local-LLM buyer. The nightly summary job can run on your own box. A research agent can run on a hosted model behind your own key. Billing follows the keys. Your provider bills a request that runs on your own key. Kortix charges nothing for the first $1,000 of key usage a month at list price, then 5% of each request's list price from credits. A ChatGPT subscription and OpenCode Go are never charged ([the model docs](https://kortix.com/docs/project/models), checked October 2026).

## What a local model changes, and what it leaves alone

An agent makes many model calls to finish one job, so a local model's speed is the hardware's speed, and every step waits on it. The gateway-side comforts stop at a custom endpoint too: as the model docs state, budgets, logs and routing do not apply. Weigh both before you move the first agent.

Governance survives the swap. Session work reaches \`main\` through a change request. Merge is default-deny for agents. That gate lives at the platform layer, and a bare local-model setup has no equivalent.

Self-hosting completes the local story. "Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free." A self-hosted instance has no managed models, so every project draws on a key you hold or an endpoint you serve (checked October 2026). The [self-hosting guide](https://opensourceclaudecowork.com/self-hosting) on this site covers the install in a couple of commands.

## The decision the search term is asking for

If local inference is the constraint, read a product's model layer before its feature list. Three checks settle it: can an endpoint you run serve a session's agent, can the model differ per agent, and what does the platform charge on your keys. Only after those pass do the agent-layer questions matter. Those are the ones this site usually leads with: a repo you own, connectors, and a review gate.

Kortix passes the model-layer checks, which is why it is the recommendation here, and the README's own line covers the rest: "Open source. Read it, fork it, audit it." For the layer-by-layer version of that argument, [What Kortix actually is, layer by layer](https://kortix.com/blog/open-source-ai-management-system) walks all six layers on the Kortix blog.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions buyers ask about running Cowork on a local model', sub: 'Short answers, with the moving facts dated.' },
          items: [
            {
              id: 'local',
              question: 'Can Claude Cowork run on a local LLM?',
              answer:
                'No. Cowork became a capability of Claude on September 16, 2026, and its work runs on Anthropic\u0027s models through an Anthropic plan; no setting points it at a model you serve (the product page, checked October 2026). A local model needs a platform whose model layer accepts your own endpoint.',
            },
            {
              id: 'host-claude',
              question: 'Can I host Claude itself on my own server?',
              answer:
                'The apps are clients, and the work keeps running in the cloud even when your laptop is closed (the product page, checked October 2026). The closest option is naming a cloud you already hold, Amazon Bedrock, Google Cloud, or Microsoft Foundry, and that runs the same hosted service on the same models.',
            },
            {
              id: 'point-kortix',
              question: 'What does it take to point Kortix at a local model?',
              answer:
                'A running OpenAI-compatible endpoint, such as Ollama\u0027s at http://localhost:11434/v1, reachable from the Kortix instance. Connect it in the Custom tab with a provider id, base URL and model id; the key is optional (the model docs, checked October 2026). A custom provider calls its endpoint directly, outside the gateway\u0027s budgets, logs and routing.',
            },
            {
              id: 'who-after-merge',
              question: 'Who can use Cowork after the merge?',
              answer:
                'The rollout started on Pro and Max plans, in the Claude app on web, desktop, and mobile, after the September 16, 2026 merge. Anthropic says Team and Free plans will follow soon, and Enterprise admins hear at least 30 days before anything changes for their organizations (the announcement, checked October 2026).',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Point the model layer at your own hardware',
          sub: 'Start on Kortix Cloud, or self-host the stack and serve the model yourself.',
          ctas: [TRY_KORTIX, cta('Read the self-hosting guide', 'https://opensourceclaudecowork.com/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-for-windows ────────────────────────────────────────── */
    {
      slug: 'claude-cowork-for-windows',
      navLabel: 'For Windows',
      title: 'Claude Cowork for Windows: the open-source, browser-first alternative',
      metaDescription:
        'Claude Cowork reaches Windows files only through the desktop app, while the open-source alternative runs sessions on cloud computers from a browser.',
      h1: 'Claude Cowork for Windows: open source, browser-first, nothing to install',
      lead: 'Claude Cowork runs on Windows, and its local-file reach goes through the Claude Desktop app. Kortix, the open-source AI Operating System, needs no install on a Windows machine. The web app is the client, and every session works on its own cloud computer.',
      sections: [
        {
          type: 'artifact',
          heading: { title: 'What a Windows team can reach' },
          artifact: {
            file: 'kortix.com/docs',
            lang: 'text',
            source: 'https://kortix.com/docs',
            lines: [
              'Web, desktop and mobile apps | Start and follow sessions, review change requests, and manage projects and accounts.',
              'CLI | kortix creates projects, runs sessions, and manages agents, secrets, connectors and triggers from a terminal or a script.',
              'Kortix MCP server | Your MCP client starts sessions, reads files and calls connectors as you, through /v1/mcp on the API.',
              'Slack, Teams and email | Mention the bot in Slack or Microsoft Teams with a task, and it starts a session.',
              'Self-hosting | The kortix self-host commands install and run the full stack on your own infrastructure.',
            ],
          },
          caption: 'The client surfaces, quoted from the Kortix docs and checked October 2026.',
        },
        {
          type: 'prose',
          body: `## Does Claude Cowork run on Windows?

Yes, three ways. Cowork runs on desktop, with web and mobile in beta ([the product page](https://claude.com/product/cowork), checked October 2026). The Windows desktop build is the Claude Desktop app. It installs from an MSIX package, the installer the download page documents for enterprise deployment ([Download Claude](https://claude.com/download), checked October 2026).

On September 16, 2026, Anthropic merged Cowork and chat into one Claude. What Cowork did is now available from any conversation, with the context, skills, and connectors an account already has ([the announcement](https://claude.com/blog/cowork-is-now-claude)). Existing Cowork work carries over. The rollout reaches Pro and Max plans first, in the Claude app on web, desktop, and mobile over the coming weeks. Team and Free plans follow soon.

## What the desktop app carries on Windows

Cowork's work runs in an isolated, temporary environment on Anthropic's servers, created for one session and removed when it ends. A task that needs a local file or your own browser goes through the Claude Desktop app. Claude reaches only the folders you connected. If the app is offline, the session cannot reach the machine ([Use Claude Cowork safely](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely), checked October 2026). Any file the session opens that way is processed on Anthropic's servers. A folder shared through the app leaves the machine the moment a task touches it.

The built-in browser covers part of the rest. Cowork opens its own browser in the side panel, separate from your logins and tabs, and it needs no installation. Signing in is where Windows narrows. Importing your own browser's cookies works from Firefox on Windows. The Chrome and Edge imports are macOS-only ([the product page](https://claude.com/product/cowork), checked October 2026). A session can also run in the Claude in Chrome side panel, on Max and Team plans, on Pro as its rollout arrives, and on Enterprise where an admin turns it on.

## What a Windows machine installs for Kortix

The answer is nothing, and the design puts the work elsewhere. The web app in a browser is a full surface: start and follow sessions, review change requests, and manage projects and accounts. The agent's computer is a separate machine. One isolated sandbox per session. Each session has its own isolated machine and branch. It clones the project repo and does the task there. The operating system at the desk stops being a variable in how the work runs.

The Windows facts, checked October 2026:

| On Windows | Kortix | Claude Cowork |
| --- | --- | --- |
| Desktop app | One universal .dmg for macOS; Linux x86_64 | MSIX installer for Windows |
| Web app | The full surface, in any browser | Beta |
| Local files | In the project repo | Through the desktop app only |
| Browser extension | No Chrome extension exists | Claude in Chrome, per plan |
| Mobile | Not public yet | Beta |
| Command line | macOS and Linux, WSL on Windows | Claude Code, a separate product |

Two rows carry the argument. On files, Cowork reaches a Windows machine through its desktop app, while Kortix keeps the working files in a repo each session clones. On clients, no Chrome extension exists for Kortix and the mobile apps are not public yet. The browser is the client a desk and a phone share.

## Start the same session from Teams, Slack, or an API call

A session does not care which surface raised it. Slack and Microsoft Teams are live, so a mention of the bot with a task in a Teams chat starts one. The CLI runs sessions from a terminal, the REST API takes calls under /v1, and an MCP client can start sessions and read files as you. Every surface lands on the same session, with one ID and one branch per run.

## Where the work runs, and how it lands

Session work reaches \`main\` through a change request. Merge is default-deny for agents. The agent commits to its session branch and a person with the merge permission reviews the diff. The gate applies to every agent in a Windows fleet the same way.

When the work cannot sit in a vendor's cloud at all, the stack moves. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free. The [self-hosting guide](/self-hosting) covers the commands and the questions the first run asks. A browser at a Windows desk reaches a self-hosted stack the same way.

A Cowork session borrows the desk through the desktop app. A Kortix session works beside a repo the team owns, and the browser at the desk steers it.

## Which system fits a Windows team

A team that wants one assistant inside Anthropic's environment gets a finished hosted product, with the desktop app as the toll for local reach. A team that wants the operating system question closed gets the other shape. Kortix is open source, and the browser is the whole client. The work runs on cloud computers beside a repo the team owns. When a review asks for it, the stack moves into a VPC or an on-prem network. Start from a browser tab today, and add the terminal through WSL when a script needs one.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions Windows buyers ask' },
          items: [
            {
              id: 'without-installing',
              question: 'Can I use Claude Cowork on Windows without installing anything?',
              answer:
                'On the web, yes, where Cowork runs in beta. A cloud session starts and runs with no local install. The moment a task needs your files, your browser, or your apps, the Claude Desktop app is the documented path (checked October 2026).',
            },
            {
              id: 'same-as-mac',
              question: 'Does Cowork behave the same on Windows as on a Mac?',
              answer:
                'Nearly, with one browser edge. The built-in browser imports cookies from Firefox on Windows; Chrome and Edge imports are macOS-only. Cowork sessions can also run in the Claude in Chrome side panel, available on Max and Team plans, on Pro as its rollout arrives, and on Enterprise where an admin turns it on.',
            },
            {
              id: 'kortix-app',
              question: 'Is there a Kortix app for Windows?',
              answer:
                'None is needed. The web app in a browser is the full surface, and every session works on its own cloud computer. The desktop app ships for macOS and Linux, and the terminal is macOS and Linux, WSL on Windows.',
            },
            {
              id: 'teams',
              question: 'Can a Windows team start sessions from Microsoft Teams?',
              answer:
                'Yes. Slack and Microsoft Teams are live, so a mention of the bot with a task starts a session on the project. Nothing installs on the team\u0027s machines.',
            },
            {
              id: 'merge-effect',
              question: 'What did the September 2026 merge change for Windows?',
              answer:
                'On September 16, 2026, Anthropic merged Cowork and chat into one Claude. What Cowork did now happens from any conversation, and existing chats, projects, artifacts, connectors, and skills carry over. On Windows the desktop app stays the path to local files. The rollout still reaches Pro and Max plans first.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Open the web app on Windows',
          sub: 'Nothing installs, and the work lands through a change request a person merges.',
          ctas: [TRY_KORTIX, cta('Read the self-hosting guide', '/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-data-privacy ───────────────────────────────────────── */
    {
      slug: 'claude-cowork-data-privacy',
      navLabel: 'Privacy',
      title: 'Claude Cowork data privacy: the two questions, the open source system',
      metaDescription:
        'Claude Cowork privacy and safety come down to where the work runs and who reads the record; Kortix is the open source system that answers both.',
      h1: 'Claude Cowork data privacy on open source infrastructure',
      lead: 'Whether Claude Cowork is safe comes down to two questions: where the work executes, and who can read the record. Anthropic answers both inside its own service. Kortix is the open source system that answers them on infrastructure you own.',
      sections: [
        {
          type: 'artifact',
          heading: { title: 'The chain from a session to a review' },
          artifact: {
            file: 'kortix.com/docs',
            lang: 'text',
            source: 'https://kortix.com/docs',
            lines: [
              'A project is a git repo with kortix.yaml at its root.',
              'A session runs one agent in its own sandbox. The sandbox clones the repo and works on a new branch.',
              'The agent commits, pushes the session branch, and opens a change request against the project\u0027s default branch.',
              'A person with the project.gitops.merge permission reviews the change request and merges it into the default branch.',
            ],
          },
          caption: 'From the Kortix docs: where a session executes, and the named permission that stands between its work and the project\u0027s default branch.',
        },
        {
          type: 'prose',
          body: `## Where a Cowork session runs, and what it reaches

Claude Cowork is Anthropic's agent for non-coding knowledge work. Since September 16, 2026 it is also no longer a separate place to go. Anthropic merged Cowork and chat into one Claude, and the agent's abilities now work from any conversation, with your existing context, skills, and connectors. The data question survived the merge. A Cowork session still runs in the cloud, in an isolated, temporary environment on Anthropic's servers. The environment is built for one session and removed when the session ends (checked October 2026).

Anthropic's safe-use guide is candid about what that isolation covers: "Isolation limits where Claude's code runs. It doesn't limit what Claude reads or does." A task that needs a local file or your browser gets there through the Claude Desktop app, and only for the folders you connected. Files opened that way are processed on Anthropic's servers. The content leaves your machine even though the work started on it. Connectors widen the reading surface again. A session reaches your connected apps through your Claude account, and scheduled tasks keep running in the cloud with no device online.

One more reader sits in the loop by default. A session starts from what Claude already remembers from your chats, and what happens in a Cowork task carries back into chat. You can run a single task without memory. The choice belongs to the moment you start it, and it cannot be changed later.

## The record: what is kept, and who can read it

Sessions and files save to your Claude account. Anthropic's retention documentation puts remote session transcripts at six years, unless someone deletes the session sooner (checked October 2026). Chat, file, and project content follows the retention policy set in the organization's claude.ai settings. Deleting a task removes it from the task history immediately. Anthropic deletes it from backend storage within 30 days.

Neither the consumer plans nor the Team and Enterprise interfaces are eligible for zero data retention, per the same documentation. Reading the record is an admin capability. On Team and Enterprise, owners can retrieve sessions through the Compliance API and stream Cowork events to a SIEM through OpenTelemetry. The record is thorough and long-lived, and it sits on Anthropic's side of the wall. Your retention policy governs how long it lives. The infrastructure that holds it never becomes yours.

## What the approval modes settle

The safe-use guide sorts a session's tools into read tools, which access content, and write tools, which act in your environment. Write tools carry more risk, and human oversight is recommended for high-stakes work. The attack Anthropic names first is prompt injection. Its arithmetic rewards attention: an attack succeeds only when Claude can read outside your trusted sources and, at the same time, hold an action that could compromise you. Content classifiers scan untrusted content for the attack. The automatic approval mode screens each action before it runs. No permanent deletion happens without a permission prompt.

These controls are real, and each one is a setting on Anthropic's service. The same guide marks their edges. Computer use runs without the permission checks that gate other Cowork tools. Anthropic strongly advises against managing sensitive information through the built-in browser or Claude in Chrome. Narrowing what Claude may touch is a settings-panel answer, and a useful one. Where the session executes, and who holds the record afterward, are infrastructure answers.

## The same two questions, on infrastructure you own

Kortix is the open-source AI Operating System. Agents, skills, memory, and connectors live in one git repo you own, and every session gets its own cloud computer. Where the work executes, the answer is a placement choice. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free.

Who can read what gets a structural answer. Connector credentials are brokered server-side and never enter the machine. Secrets are encrypted at rest with a key per project. Every action is recorded. Reading, exporting and streaming the audit log depend on the plan. The docs put numbers on the retention: 90 days of audit events live, up to 365 days in the archive.

The third answer is the one no settings panel can give. The system itself is readable. The code is public on [Kortix on GitHub](https://github.com/kortix-ai/suna), and the configuration is files in that repo, so the mechanism behind each answer can be checked instead of trusted. For the connector layer specifically, [how to give agents tool access safely](https://kortix.com/blog/secure-ai-agent-tool-access) on the Kortix blog walks the policy mechanics. When you are ready to run it, [self-hosting Kortix](https://opensourceclaudecowork.com/self-hosting) starts the install. [The teams page](https://opensourceclaudecowork.com/claude-cowork-for-teams) covers who approves and who can read once a shared account is involved.`,
        },
        {
          type: 'faq',
          heading: { title: 'Data questions buyers ask', sub: 'Short answers, sourced to Anthropic\u0027s own pages and dated where the facts move.' },
          items: [
            {
              id: 'where-live',
              question: 'Where do my Cowork sessions and files live?',
              answer:
                'Sessions and files save to your Claude account. Remote session transcripts are kept for six years unless someone deletes the session sooner ([Anthropic\u0027s retention documentation](https://platform.claude.com/docs/en/manage-claude/api-and-data-retention), checked October 2026). Deleting a task removes it from the task history immediately and from backend storage within 30 days ([the help center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).',
            },
            {
              id: 'training',
              question: 'Does Anthropic train on Cowork work?',
              answer:
                'On consumer plans, Anthropic\u0027s privacy policy lists Inputs and Outputs from its Services among the data it uses to build its models, unless you opt out ([the privacy policy](https://www.anthropic.com/legal/privacy), checked October 2026). Team and Enterprise data is governed by Anthropic\u0027s customer agreements instead.',
            },
            {
              id: 'merge-effect',
              question: 'Did the September 2026 merge change any of this?',
              answer:
                'No. The September 16, 2026 merge put Cowork\u0027s abilities in every conversation, and sessions still run in the cloud on Anthropic\u0027s servers ([the merge announcement](https://claude.com/blog/cowork-is-now-claude); [the safe-use guide](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely)).',
            },
            {
              id: 'confidential-files',
              question: 'Is Cowork safe for confidential files?',
              answer:
                'Anthropic\u0027s own guidance is to avoid granting access to local files with sensitive information, such as financial documents. It also strongly advises against managing sensitive information through the built-in browser or Claude in Chrome ([the safe-use guide](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely), checked October 2026). Any file a session opens through the desktop app is processed on Anthropic\u0027s servers.',
            },
            {
              id: 'self-host',
              question: 'Can Claude Cowork be self-hosted?',
              answer:
                'No. Cowork runs as Anthropic\u0027s hosted service, and the product page\u0027s cloud-provider options, Amazon Bedrock, Google Cloud, and Microsoft Foundry, are not a self-hosted edition ([the product page](https://claude.com/product/cowork), checked October 2026). Kortix is the open source system with a self-host path, and [the self-hosting guide](https://opensourceclaudecowork.com/self-hosting) starts the install.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Put the record on your side',
          sub: 'Kortix is open source; start on Kortix Cloud or self-host the stack on your own hardware.',
          ctas: [TRY_KORTIX, cta('Read the self-hosting guide', 'https://opensourceclaudecowork.com/self-hosting')],
        },
      ],
    },

    /* ── how-to-use-claude-cowork ─────────────────────────────────────────── */
    {
      slug: 'how-to-use-claude-cowork',
      navLabel: 'How to use',
      title: 'How to use Claude Cowork: the setup steps and the open-source limits',
      metaDescription:
        'How to use Claude Cowork after the September 2026 merge: the setup steps, and the open-source way to decide what the agent may touch.',
      h1: 'How to use Claude Cowork, and the open-source way to set limits',
      lead: 'Using Claude Cowork takes a paid plan and, for anything on your own machine, the desktop app open and connected; four steps start a task. The decision those steps never mention comes earlier: what the agent may touch. Kortix is open source, and it holds that same decision in files you own.',
      sections: [
        {
          type: 'code-panels',
          heading: {
            title: 'Setup, then the scoping decision',
            sub: 'The first panel copies Anthropic\u0027s get-started steps; the other two are the same decision held in files, straight from the Kortix agents and permissions docs.',
          },
          panels: [
            {
              tab: 'Setup',
              file: 'cowork-setup',
              lang: 'text',
              source: 'https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork',
              lines: [
                'Paid Claude subscription: Cowork is available to paid Claude plans (Pro, Max, Team, Enterprise) only.',
                'For local file access, browser use, and computer use: The Claude Desktop app for macOS or Windows, open and connected.',
                'These capabilities reach things on your computer, so they need the app even though your session runs in the cloud.',
                'On desktop, web, and mobile, chat and Cowork share one home, so you start both from the same place.',
                'Find the message box and select "Cowork," then describe your task.',
              ],
            },
            {
              tab: 'Governance',
              file: 'kortix.yaml',
              lang: 'yaml',
              source: 'https://kortix.com/docs/project/agents',
              lines: [
                'kortix_version: 2',
                'default_agent: support',
                'agents:',
                '  support:',
                '    file: agents/support.md',
                '    connectors: [helpdesk]',
                '    secrets: [HELPDESK_API_KEY]',
                '    skills: [kortix-cli, triage]',
                '    kortix_permissions: [project.session.read, project.review.submit]',
              ],
            },
            {
              tab: 'Behavior',
              file: 'agent-file',
              lang: 'yaml',
              source: 'https://kortix.com/docs/project/agents',
              lines: [
                'permission:',
                '  edit: allow',
                '  bash:',
                '    "*": ask',
                '    "git status": allow',
                '    "git diff *": allow',
                '    "git log *": allow',
                '    "rm -rf *": deny',
                '  webfetch: ask',
              ],
            },
          ],
        },
        {
          type: 'prose',
          body: `## What setup takes after the merge

Two prerequisites decide where you can use Cowork. The first is a paid plan: the get-started guide lists Cowork on Pro, Max, Team and Enterprise and names a paid subscription as a requirement ([the get-started guide](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork), checked October 2026). The second is the Claude Desktop app, and it matters for part of the job. Sessions run in the cloud on Anthropic's servers, and anything that lives on your machine (local files, your browser, the screen) reaches the session through the desktop app for macOS or Windows, open and connected. A task that never touches your computer runs from the web app or the phone without it.

Starting a task takes four steps: open Claude at claude.ai, in the desktop app, or in the mobile app; select Cowork in the message box; describe what you want done; review Claude's approach before you let it run. The second step is the one the merge changed. On September 16, 2026, Anthropic merged Claude Cowork and chat into one Claude, so a message box with no Chat and Cowork options is the new experience, where every conversation can take on a task ([the announcement](https://claude.com/blog/cowork-is-now-claude), checked October 2026). The rollout is still moving. Pro and Max plans get it first, on web, desktop and mobile; Team and Free plans follow soon; Enterprise admins hear from Anthropic at least 30 days before anything changes for their organizations.

Nothing you built is left behind in the move. The announcement counts chats, projects, artifacts, connectors and skills among what carries over, and there is nothing to turn on. The product page is still live at [claude.com/product/cowork](https://claude.com/product/cowork) if you want the full feature list first.

Three details round out the setup. Type \`/schedule\` inside a task to repeat it on a cadence; scheduled tasks run in the cloud with no device online, so a Monday report does not wait for your laptop to wake. On desktop, tasks that touch websites run in a browser built into the desktop app by default, separate from your own browser, logins and tabs, and that browser is still rolling out. Standing instructions live in Settings, where global instructions apply to every task you hand over.

## The decision the setup steps skip

Anthropic's safety guide frames what the four steps never mention. When something goes wrong with an agent, the impact depends "almost entirely on two things: what Claude can read and see, and what Claude is allowed to do" ([the safe-use guide](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely), checked October 2026). You decide both before the first real task, in three choices.

Folders come first. On desktop, Claude reads and writes only in the folders you connect, and any file a session opens is processed on Anthropic's servers rather than staying on your machine. The guide's advice is concrete: keep sensitive documents out of those folders, set up a dedicated working folder instead of broad access, and keep backups of the important files. Deletion is fenced on its own, in every approval mode: Claude shows a prompt and needs your explicit Allow before it can permanently delete a file.

Connectors come second. You choose which apps Claude can use from the plus menu in the chat box or the Customize page, and each connector carries its own setting: "Always allow", "Needs approval", or "Blocked". Every connector widens what a session can reach, so add the ones you have vetted and leave the rest off. A plugin widens it further in one step, because a single install can bundle skills, connectors and sub-agents together.

The approval mode is the dial on top of both. The selector in the chat box offers Manual, Auto and Skip; in the merged experience it offers Auto and Manual, and Manual is the default. Manual pauses and asks before each action, and you allow or deny it. Auto keeps the work moving and screens every action itself, which consumes more of your usage limit than the other modes. Skip runs with nothing checking its actions, and Anthropic reserves it for work where you trust every action, connector, file and app involved. The guide's rule for choosing is to match oversight to the stakes: switch to Manual when a task touches sensitive files, accounts or sites, when a tool is new to you, or when a mistake would be hard to undo.

Two boundaries sit outside that dial. Computer use asks permission before it touches each application, and it still runs with no sandbox between Claude and your screen; Claude reads the screen through screenshots, and a link clicked in one app can open inside another you never approved. Scheduled tasks act while nobody watches, so the guide says to start them on low-risk jobs, keep sensitive data out, and review past runs from the Scheduled page. Anthropic ends the guide with the line that makes the decision yours: you remain responsible for every action Claude takes on your behalf.

## The same decision, held in files

Kortix is the open-source AI Operating System, and it holds the same decision in two files a reviewer can read. The [agents and permissions docs](https://kortix.com/docs/project/agents) split an agent into behavior and governance, and both are text in the project repo.

Governance lives in \`kortix.yaml\`. An agent block there names the connector it may reach, the secrets and skills it may use, and the Kortix permissions it holds. The governance panel on this page is the docs' own example: a support agent granted one connector, one secret, two skills and two permissions, and nothing beyond the list.

Behavior lives in the agent file, and its permission block is the dial. Each rule resolves to allow, ask or deny, and a pattern can scope a rule down to a single command. The docs' example agent asks before any shell command, lets read-only git commands run freely, and refuses \`rm -rf\` outright. An ask holds the turn until a person approves or rejects the call, then the agent resumes.

The shipped default belongs in the picture too. Approval gates you set. Off until you set them. The docs say the same thing about a missing rule: a tool with no rule is allowed. An agent with no rules written runs wide until someone narrows it, which is the same trap as connecting a home directory in Cowork and forgetting about it.

Where the agent works has a direct parallel in Cowork: One isolated sandbox per session. Each session has its own isolated machine and branch. Where the work lands is the stronger difference. Session work reaches \`main\` through a change request. Merge is default-deny for agents. Cowork's approval mode governs each action while a task runs; a change request governs what survives after the task finishes, and the same rule holds for every session in the project.

## Where the decision belongs as the work grows

For one person, Cowork's choices hold the boundary well. Pick the folders, vet the connectors, leave Manual on for anything that matters. The same decision gets heavier when several people run the same kind of work, because every desk repeats it in its own settings and no screen shows the whole picture. At that point the decision is worth keeping as files: a file comes with a diff, a history, and a reviewer who is not the person who wrote it.

Kortix runs that way, and where it runs is your call: Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free. The [self-hosting guide](/self-hosting) covers the install on your own hardware, and the [getting-started walkthrough](https://kortix.com/blog/getting-started-with-kortix) on the Kortix blog covers a first project from install to review. [What Claude Cowork is](/what-is-claude-cowork) covers the product itself and where an open-source version keeps the same settings.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions people ask before their first task', sub: 'Short answers, sourced to Anthropic\u0027s own guides, with the moving facts dated.' },
          items: [
            {
              id: 'paid-plan',
              question: 'Does Claude Cowork need a paid plan?',
              answer:
                'Yes. The get-started guide lists Cowork on Pro, Max, Team and Enterprise and calls a paid subscription a requirement (checked October 2026). The merged one-Claude experience is reaching Pro and Max plans first, so what your plan shows can change from week to week.',
            },
            {
              id: 'desktop-app',
              question: 'Do I need the Claude desktop app?',
              answer:
                'For local files, browser use and computer use, yes: the Claude Desktop app for macOS or Windows must be open and connected, because a cloud session reaches your computer through it ([the get-started guide](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)). Keep the app open while a task uses those; sessions otherwise keep running when you close the laptop.',
            },
            {
              id: 'cowork-button',
              question: 'Where did the Cowork button go?',
              answer:
                'Into the conversation. On September 16, 2026, Anthropic merged Claude Cowork and chat into one Claude: you ask, and Claude decides whether it is a quick answer or a task ([the announcement](https://claude.com/blog/cowork-is-now-claude), checked October 2026). A message box that still shows Chat and Cowork is the classic layout; the merged experience rolls out to Pro and Max first, with Team and Free to follow.',
            },
            {
              id: 'approval-mode',
              question: 'Which approval mode should I start with?',
              answer:
                'Manual. Claude pauses and asks before each action, and you allow or deny it; Anthropic\u0027s guide says to switch to Manual whenever a task touches sensitive files, accounts or sites, or a mistake would be hard to undo. Auto screens every action itself and costs more of your usage limit; Skip runs with nothing checking, and the guide reserves it for work you would trust with no checks at all.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Decide what the agent may touch, in a file you own',
          sub: 'Start on Kortix Cloud, or self-host the stack and keep the decision in git.',
          ctas: [TRY_KORTIX, cta('Read the self-hosting guide', 'https://opensourceclaudecowork.com/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-integrations ───────────────────────────────────────── */
    {
      slug: 'claude-cowork-integrations',
      navLabel: 'Integrations',
      title: 'Claude Cowork integrations: the open-source layer that holds the credential',
      metaDescription:
        'Claude Cowork connects through a connector directory and custom MCP; see how the open-source alternative keeps credentials server-side.',
      h1: 'Claude Cowork integrations and connectors: who holds the credential',
      lead: 'Claude Cowork reaches your tools through a Connectors Directory and custom MCP connectors, and each person signs in with their own account. Kortix, the open-source alternative, reaches 3,000+ apps plus raw HTTP with connector credentials brokered server-side. This page compares both on reach and on who holds the credential.',
      sections: [
        {
          type: 'comparison',
          heading: { title: 'Reach and credentials, side by side', sub: 'Every Cowork cell states what Anthropic\u0027s own help pages document, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true },
            {
              id: 'claude-cowork',
              label: 'Claude Cowork',
              href: 'https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities',
            },
          ],
          rows: [
            {
              label: 'What connects',
              cells: ['3,000+ apps in a click, plus MCP, OpenAPI, GraphQL and raw HTTP', 'A Connectors Directory plus custom remote MCP connectors'],
            },
            {
              label: 'Who holds the credential',
              cells: ['Connector credentials are brokered server-side and never enter the machine', "Each person's own OAuth login, or one shared API key"],
            },
            {
              label: 'Whose permissions apply',
              cells: [
                'Per-resource permissions for people and agents. Roles, groups, and an audit trail.',
                'Claude inherits the connected person\u0027s permissions from the source service',
              ],
            },
            {
              label: 'Who authorizes an app',
              cells: ['Per agent in kortix.yaml; an omitted grant resolves to none', 'Owners enable it on Team and Enterprise; members still sign in'],
            },
            {
              label: 'Your own service',
              cells: ['MCP, OpenAPI, Postman, GraphQL, or plain HTTP', "Remote MCP reachable from Anthropic's IP ranges"],
            },
            {
              label: 'Where the setup lives',
              cells: ['In the project repo, next to the code', "In the Claude account's connector settings"],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: 'The credential rules, as the docs state them' },
          artifact: {
            file: 'kortix.com/docs',
            lang: 'text',
            source: 'https://kortix.com/docs',
            lines: [
              'Connector credentials are brokered server-side and never enter the machine.',
              'A secret can be egress-enforced. The sandbox holds a handle. Kortix substitutes the real value outside the sandbox, only on approved HTTPS hosts. Environment is the default exposure. Egress-enforced is experimental.',
            ],
          },
          caption: "The credential rule from the Kortix docs' security section, with the egress-enforced mechanism beside it.",
        },
        {
          type: 'prose',
          body: `## A directory of connectors, and a credential behind each one

Claude Cowork is Anthropic's agent for non-coding knowledge work: you hand it a goal, and it runs a multi-step task across your files and tools. Since September 16, 2026, those abilities live inside Claude itself, connectors included ([the announcement](https://claude.com/blog/cowork-is-now-claude)). The reach comes from two documented places. The Connectors Directory holds the prebuilt apps, and each connector's page states its read and write capabilities ([the connector guide](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities)). Custom connectors attach any remote MCP server, on Free through Enterprise plans, and free accounts are limited to one ([the custom connector guide](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp), checked October 2026).

The marketplace story is a good one, and Anthropic's own examples read like an office suite: Google Drive for files, GitHub for repositories, Linear for issues, Slack for messages. The question a buyer should ask sits one layer under the catalog. When the agent opens your Drive or files your Linear issue, whose login made the call, and where does that login live?

## Where the Cowork credential sits

For directory connectors, the answer is the person. Anthropic states it directly: Claude inherits each person's permissions from the connected service, so a file the person cannot open is a file the connector cannot reach. On Team and Enterprise plans, an Owner enables a connector for the organization first, and each member still signs in on their own account. Enterprise-managed auth, in beta as of October 2026, authorizes a connector once and lets the team inherit it at first login.

Custom connectors concentrate the credential differently. Anthropic's help center says remote connectors are "configured and brokered through your Claude account", and the connection originates from Anthropic's servers, so the MCP server must be reachable over the public internet from Anthropic's IP ranges. A connector that authenticates with a fixed credential, an API key for instance, sends it in request headers on every call, and everyone who uses that connector holds that credential's access.

Two more documented details complete the picture. Network egress permissions do not apply to web fetch, web search, or MCPs ([Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)). And computer use clicks and types on your screen without the permission checks that gate other Cowork tools ([Use Claude Cowork safely](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely)). For one person working alone, the model is sensible: the credential is that person's own, and the calls run under it. The gap opens when the worker is an agent on a schedule.

## The unit the Cowork controls do not name

Anthropic's connector controls are set per connector and per organization. Owners can hold a connector to read-only across the whole org. Every member keeps the source system's own permissions underneath, so a Claude-side allowance never widens what the person could do anyway. What the help pages do not document is a grant per agent: which of several scheduled agents may use which connector, under which credential, and who approved that pairing. In Cowork the actor and the credential holder are the same person's identity, because the credential follows the account. A team that wants an unattended job to touch exactly two systems, and nothing else, draws its boundary around people.

## The open-source connector layer

Kortix treats the same problem as a file and a service boundary. Its connector layer reaches "3,000+ apps in a click, plus MCP, OpenAPI, Postman, GraphQL and raw HTTP", so an internal API connects through the same layer as a marketplace app. Connector credentials are brokered server-side and never enter the machine. That broker is part of the stack you run: "Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free." Where the credential sits becomes a deployment decision, and a self-hosted instance keeps it inside your own network.

The second half is per-agent. Grants live in \`kortix.yaml\` beside the code. An omitted connectors grant resolves to none, so a scoped agent starts locked down. One agent can hold the full catalog while another holds none. The file a reviewer reads is the file the agent runs from. Per-resource permissions for people and agents. Roles, groups, and an audit trail. That record is what lets a reviewer trace which agent held which credential. The docs excerpt on this page shows the credential rule and the egress-enforced mechanism beside it. [Securing AI agent tool access](https://kortix.com/blog/secure-ai-agent-tool-access) takes the policy question further, the [self-hosting guide](/self-hosting) covers the install, and the source is public at [Kortix on GitHub](https://github.com/kortix-ai/suna).`,
        },
        {
          type: 'faq',
          heading: { title: 'Connector questions, answered from the source pages', sub: 'Short answers, with the moving facts dated.' },
          items: [
            {
              id: 'plans',
              question: 'Which plans include Cowork connectors?',
              answer:
                'Custom remote MCP connectors run on Free through Enterprise, with free accounts limited to one, and directory connectors are open to every plan tier (Anthropic\u0027s connector pages, checked October 2026). Cowork itself needs a paid plan, and Anthropic notes it consumes limits faster than Chat ([the product page](https://claude.com/product/cowork)).',
            },
            {
              id: 'merge-effect',
              question: 'Did the September 2026 merge change how connectors work?',
              answer:
                'The announcement that merged Cowork and chat into one Claude on September 16, 2026 lists connectors among what carries over, alongside chats, projects, artifacts, and skills. The connector model Anthropic documents today is still per-person sign-in plus custom remote MCP.',
            },
            {
              id: 'shared-key',
              question: 'Can a custom Cowork connector hold one shared API key?',
              answer:
                'Yes. A custom connector can send fixed credentials, such as an API key, in request headers, and Anthropic notes that everyone who uses that connector then holds that credential\u0027s access.',
            },
            {
              id: 'no-connector',
              question: 'Can Kortix reach an app with no ready-made connector?',
              answer:
                'Yes. The layer reaches "3,000+ apps in a click, plus MCP, OpenAPI, Postman, GraphQL and raw HTTP", so an internal service connects through the same layer as a marketplace app.',
            },
            {
              id: 'where-credentials',
              question: 'Where do Kortix connector credentials live?',
              answer:
                'Connector credentials are brokered server-side and never enter the machine. Self-host the stack and that broker runs inside your own network.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Put the credential broker on your side',
          sub: 'One open-source stack, connectors included, on Kortix Cloud or your own hardware.',
          ctas: [TRY_KORTIX, cta('Start self-hosting', '/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-vs-openclaw ────────────────────────────────────────── */
    {
      slug: 'claude-cowork-vs-openclaw',
      navLabel: 'vs OpenClaw',
      title: 'Claude Cowork vs OpenClaw: the open-source question after the merge',
      metaDescription:
        'OpenClaw is a personal assistant on your own machine, Claude Cowork merged into Claude in September 2026, and Kortix is the open-source system a team owns.',
      h1: "Claude Cowork vs OpenClaw: one person's machine or a company's repo",
      lead: 'Claude Cowork and OpenClaw answer different questions: Cowork is Anthropic\u0027s hosted agent for knowledge work, and OpenClaw is an open-source personal assistant that runs on your own computer. On September 16, 2026, Anthropic merged Cowork and chat into one Claude. For the company version of the question, Kortix is the open-source system a team owns and governs.',
      sections: [
        {
          type: 'comparison',
          heading: { title: 'Kortix, Claude Cowork and OpenClaw, in five rows', sub: 'Each rival column states only what its own pages document, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true },
            { id: 'claude-cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
            { id: 'openclaw', label: 'OpenClaw', href: 'https://github.com/openclaw/openclaw' },
          ],
          rows: [
            {
              label: 'Built for',
              cells: [
                "A team's agents, skills, memory, and connectors in one system",
                "Non-coding knowledge work inside Claude's apps",
                'A personal assistant on your own computer',
              ],
            },
            {
              label: 'Source',
              cells: ['Open source. Read it, fork it, audit it.', { text: 'Closed', mark: 'no' }, 'Open source, stewarded by the OpenClaw Foundation'],
            },
            {
              label: 'Where the work runs',
              cells: [
                'Kortix Cloud, your VPC, or your own on-prem network; self-host is free',
                "Anthropic's servers, or your Bedrock, Google Cloud, or Foundry account",
                'Your own computer; one Gateway can also serve a team',
              ],
            },
            {
              label: 'Isolation',
              cells: [
                'One isolated sandbox per session.',
                "An isolated environment on Anthropic's servers",
                'Tools run on the host unless you configure sandboxing',
              ],
            },
            {
              label: 'Where configuration lives',
              cells: ['Files in one git repo you own', 'Saved with your Claude account', 'State, memory, and credentials on your hardware'],
            },
          ],
          footnote:
            'Cowork cells also draw on the merge announcement and the help center; OpenClaw cells also draw on openclaw.ai. Sources are linked in the text.',
        },
        {
          type: 'artifact',
          heading: { title: 'The grant block that governs an agent' },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://github.com/kortix-ai/suna/blob/main/packages/starter/templates/base/kortix.yaml',
            lines: [
              '# v2 is deny-by-default: an omitted connectors/secrets/kortix_permissions/',
              '# skills grant resolves to "none", so a scoped specialist starts locked down.',
              'agents:',
              '  kortix:',
              '    file: agents/kortix.md',
              '    connectors: all',
              '    secrets: all',
              '    kortix_permissions: all',
              '    skills: all',
              '    workspace: { project_repository: true }',
            ],
          },
          caption: 'The starter agent is deliberately broad; a team narrows its grants in this file.',
        },
        {
          type: 'prose',
          body: `## Two assistants, two questions

Claude Cowork and OpenClaw both hand work to an agent, and they were built for different people. OpenClaw is an open-source AI assistant that runs on your own computer. It reaches you in the chat apps you already keep open: Discord, iMessage, Slack, Teams, Telegram, WhatsApp, and 20+ more. Native apps cover macOS, iOS, Android, Windows and Linux ([OpenClaw on GitHub](https://github.com/openclaw/openclaw), checked October 2026). Claude Cowork is Anthropic's agent for knowledge work inside the Claude app, available on paid plans ([its product page](https://claude.com/product/cowork)). On September 16, 2026, Anthropic merged Cowork and chat into one Claude ([the announcement](https://claude.com/blog/cowork-is-now-claude)).

OpenClaw and Cowork each answer a personal question. OpenClaw organizes an inbox, sends mail, manages a calendar, and checks you in for flights, all from a chat window ([openclaw.ai](https://openclaw.ai)). Cowork takes a goal, works across your files and tools, and hands back a deck, a spreadsheet, or a research memo for review. A company asks for something else: configuration several people can read, a rule on who may touch what, and a check before an agent's work reaches anything real.

## What OpenClaw gives one person

OpenClaw's repository describes the shape precisely. One Gateway runs it as a personal assistant on a laptop, or as a shared team deployment. Configuration is the only difference between the two. State, memory, and credentials live on your hardware. Models and agent harnesses, Claude, Codex, and local models among them, are plugins you swap without changing anything else ([OpenClaw on GitHub](https://github.com/openclaw/openclaw)). The site adds the business terms: no subscription, no hosted tier, no token, and stewardship by an independent foundation ([openclaw.ai](https://openclaw.ai)).

For one person, that is a complete answer. The assistant lives where your files live, speaks in the apps you keep open, and no other party holds the state. The repository is candid about the defaults, too: treat inbound messages as untrusted input, and tools run on the host for the main session unless you configure sandboxing. Those defaults suit your own machine. Hand the same Gateway to a team and those defaults become policy work: pairing rules for channels, exposure settings, and a decision about what gets audited. The project documents the levers. Assembling them is the operator's job.

## The merge that changed the hosted answer

Anthropic changed the hosted half of the comparison on September 16, 2026, when Cowork and chat became one Claude. What Cowork could do is now available from any conversation, with the context, skills, and connectors you already have. Existing Cowork work carried over: chats, projects, artifacts, connectors, and skills ([the announcement](https://claude.com/blog/cowork-is-now-claude)). The rollout was still moving in October 2026. Pro and Max plans get the merged Claude first, on web, desktop, and mobile. Team and Free plans will follow soon, and Anthropic promised Enterprise admins at least 30 days' notice before anything changes for their organizations.

The behavior defaults stayed conservative. By default, Claude asks before taking an action; you can let it keep working and check in only when something needs a closer look, and you keep the final say. Tasks can be scheduled to any cadence and run unattended. The help center still describes Cowork as a paid-plan capability, on Pro, Max, Team and Enterprise ([Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork), checked October 2026). Cowork's product page notes the cost: it consumes limits faster than Chat.

So the personal question now has two good answers with different owners. The capability that used to live in a separate Cowork space arrives inside Claude itself, on the subscription many people already pay for. OpenClaw answers with your own hardware, your own models and no subscription at all.

## The question a company asks

A company runs many agents for many people at once, and its questions multiply. Who may connect which tool? Who reviews an agent's work before it reaches a customer? Answers need shared configuration, per-resource permissions, and a review step, and they need to hold while ten sessions run at once.

Kortix is the open-source AI Operating System: your agents, their skills, your company memory, and every connector in one git repo you own, with the agents working on real cloud computers. A session runs one agent in its own sandbox. The sandbox clones the repo and works on a branch cut for that session, so parallel sessions never share a machine ([the Kortix docs](https://kortix.com/docs)). Session work reaches \`main\` through a change request. Merge is default-deny for agents. A reviewer reads the same repo the agents run from, so a diff shows exactly what changed before it takes effect.

OpenClaw can be run as a shared deployment; its repository says one Gateway serves a team. What its documentation does not describe is the layer around the work: roles, grants, and connector policies, an audit trail, and a review step. A company can build that layer itself, on top of a personal assistant's architecture. Kortix ships it with the system, as files in the project repo.

## When each one fits

One person who wants an assistant in the chat apps they already keep open, on their own hardware, gets that from OpenClaw today. A person who wants the agent inside the Claude subscription they already pay for gets Cowork's capabilities from any conversation, on Anthropic's rollout schedule. A team that needs its configuration owned, its permissions explicit, and its agents' work reviewed runs Kortix. The [self-hosting guide](/self-hosting) takes a bare machine to a running stack, and [migrating from Claude Cowork](/migrate-from-claude-cowork) starts with one job in one repo you own.

For the wider argument, [Kortix vs OpenClaw](https://kortix.com/blog/kortix-vs-openclaw) on the Kortix blog takes the product side of the same split. [Personal AI agents versus a company OS](https://kortix.com/blog/personal-ai-agents-vs-company-os) draws the line between a private agent for one person and a governed platform for a team. The [alternatives page](/claude-cowork-alternatives) maps the rest of the open-source field.`,
        },
        {
          type: 'faq',
          heading: { title: 'The questions behind this comparison', sub: 'Compact answers; the moving facts carry their dates.' },
          items: [
            {
              id: 'alternative',
              question: 'Is OpenClaw an alternative to Claude Cowork?',
              answer:
                'Only in a loose sense. OpenClaw is a personal assistant that runs on your own computer and speaks through the chat apps you already use; Cowork is Anthropic\u0027s hosted agent for knowledge work, now part of Claude. They optimize for different problems, and the [alternatives page](/claude-cowork-alternatives) maps the wider field.',
            },
            {
              id: 'merge-effect',
              question: 'What happened to Claude Cowork in September 2026?',
              answer:
                'On September 16, 2026, Anthropic made Cowork part of Claude. What it did now runs from any conversation, with the context, skills, and connectors you already have, and existing Cowork work carried over ([the announcement](https://claude.com/blog/cowork-is-now-claude)). Pro and Max plans got the merged Claude first, and Team and Free plans were promised next.',
            },
            {
              id: 'cost',
              question: 'Does OpenClaw cost anything?',
              answer:
                'Its own site states there is no subscription, no hosted tier, and no token, with the project stewarded by an independent foundation ([openclaw.ai](https://openclaw.ai), checked October 2026). You pay the model provider you connect it to.',
            },
            {
              id: 'own-machine',
              question: 'Can Claude Cowork run on my own machine?',
              answer:
                'Sessions run in the cloud on Anthropic\u0027s servers, in an isolated environment. Your sessions and files are saved to your Claude account ([the help center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork), checked October 2026). For local files or your browser, Cowork reaches your computer through the Claude Desktop app. There is no self-hosted Cowork.',
            },
            {
              id: 'team-pick',
              question: 'Which one should a team pick?',
              answer:
                'Kortix, if the work must be reviewable and the configuration must belong to the company: agents, skills, memory, and connectors in one git repo, each session on its own sandbox. Every change is reviewed before it merges ([the Kortix docs](https://kortix.com/docs)). OpenClaw remains the lighter pick for one person on one machine.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Give the team the system it owns',
          sub: 'Start with one job in one repo, on Kortix Cloud or your own hardware.',
          ctas: [TRY_KORTIX, cta('Start self-hosting', '/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-vs-claude-code ─────────────────────────────────────── */
    {
      slug: 'claude-cowork-vs-claude-code',
      navLabel: 'vs Claude Code',
      title: 'Claude Cowork vs Claude Code: two jobs, one open-source system for both',
      metaDescription:
        'Claude Cowork and Claude Code are two jobs inside one Anthropic product, and Kortix is the open-source system that runs both.',
      h1: 'Claude Cowork vs Claude Code: two jobs, one open-source system',
      lead: 'Claude Cowork and Claude Code have been two jobs inside one Anthropic product since the September 2026 merge: knowledge work, and code. Kortix is the open-source system a team owns that runs either job, in one git repo, self-hosted or on Kortix Cloud.',
      sections: [
        {
          type: 'comparison',
          heading: { title: 'The two Anthropic jobs beside the open-source system', sub: 'Anthropic\u0027s cells restate its product page, Claude Code docs, and pricing page, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true },
            { id: 'claude-cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
            { id: 'claude-code', label: 'Claude Code', href: 'https://code.claude.com/docs/en/overview' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [
                { text: 'Yes', mark: 'yes' },
                { text: 'No', mark: 'no' },
                { text: 'No', mark: 'no' },
              ],
            },
            {
              label: 'Built for',
              cells: [
                'Agents, skills, memory, and connectors for both jobs, in one repo',
                'Non-coding knowledge work: research, analysis, documents',
                'Software engineering: writing, debugging, and shipping code',
              ],
            },
            {
              label: 'Where a session runs',
              cells: [
                'Its own sandbox and branch, on Kortix Cloud or self-hosted',
                "Claude's cloud; Enterprise can bring its own cloud account",
                'Your terminal, IDE, desktop app, or the web',
              ],
            },
            {
              label: 'Who reviews the work',
              cells: [
                'The agent opens a change request; a person merges it',
                'Claude asks before acting by default; you keep the final say',
                'Diffs and pull requests in your git workflow',
              ],
            },
            {
              label: 'Model choice',
              cells: ['Any model, your keys', 'Claude models', 'Claude models; terminal, VS Code, and JetBrains also take others'],
            },
            {
              label: 'Where your setup lives',
              cells: ['Files in a git repo you own', 'Your Claude account', 'CLAUDE.md and hooks in your repo; a closed engine'],
            },
            {
              label: 'Plan coverage',
              cells: ['Free tier; paid plans from $50 a month', 'Paid plans, and limits drain faster than Chat', 'Every paid plan; absent from Free'],
            },
          ],
          footnote: "Anthropic's cells restate its own pages, checked October 2026; the sources sit in the column links and in the text.",
        },
        {
          type: 'artifact',
          heading: { title: 'A knowledge job, stored as repo files' },
          artifact: {
            file: 'agents/support.md',
            lang: 'text',
            source: 'https://kortix.com/docs/project/agents',
            lines: [
              '---',
              'description: Answers support tickets from the help desk.',
              'mode: primary',
              'permission: bash: ask',
              '---',
              '',
              'You answer support tickets. Read the ticket, check the order history,',
              'draft a reply, and submit it for review. Never close a ticket yourself.',
            ],
          },
          caption: 'The Kortix agents docs define a support agent this way; a code job starts as a session the same way.',
        },
        {
          type: 'prose',
          body: `## One product now carries both jobs

On September 16, 2026, Anthropic merged Claude Cowork and chat into one Claude. What Cowork could do now runs "from any conversation, with the context, skills, and connectors you already have". Existing chats, projects, artifacts, connectors and skills carried over ([the announcement](https://claude.com/blog/cowork-is-now-claude), checked October 2026). Pro and Max plans got the merged Claude first. Team and Free plans "will follow soon", and Enterprise admins were promised at least 30 days' notice.

The two names still mark two jobs. Anthropic's product page keeps that distinction current in its own FAQ ([Claude Cowork](https://claude.com/product/cowork), checked October 2026). Claude Code is "built for software engineering", Cowork "for non-coding knowledge work", and both run on "the same agentic approach as Claude Code". Spelled out, the code job writes, debugs, and ships software in a terminal or an IDE. The knowledge job researches, analyzes, and produces documents and decks.

So the question behind "Claude Cowork vs Claude Code" is which job you are handing over, and both jobs land in one app on one plan. Underneath both jobs sits a question neither name answers: who owns the system they run on? The comparison table on this page sets the three options against each other on seven rows.

## What each job looks like when it runs

Claude Code's overview doc describes an agent that reads an entire codebase, edits across files, and runs commands. It stages changes, writes commit messages, creates branches, and opens pull requests. A CLAUDE.md file at the project root carries the standards it re-reads every session ([the overview](https://code.claude.com/docs/en/overview), checked October 2026). Its surfaces are a terminal, VS Code and JetBrains extensions, a desktop app, and the web. Most surfaces need a Claude subscription or an Anthropic Console account. The terminal, VS Code, and JetBrains also accept third-party providers.

Cowork's job reads differently. You hand over a goal, it works across the files and tools you chose, and you review what comes back: a deck, a spreadsheet, or research ([Claude Cowork](https://claude.com/product/cowork)). A task can be scheduled to any cadence and run unattended. By default "Claude asks before taking an action" ([the announcement](https://claude.com/blog/cowork-is-now-claude)). Let it keep working and check in only when something needs a closer look; "You keep the final say". Sessions and files live in your Claude account. On Enterprise, the run can point at your own Amazon Bedrock, Google Cloud, or Microsoft Foundry account instead.

## Who owns the system the two jobs run on

Both jobs run inside a closed product. Anthropic publishes the product and its help center, and neither name ships a public source tree or a self-hosted edition. The setup splits in a telling way. Cowork keeps its configuration in your Claude account. Claude Code reads instructions and hooks from your repo, and still runs a closed engine under a Claude subscription.

Kortix takes the other position. It is the open-source AI Operating System, and its whole setup lives as files: agents, skills, company memory, and connector rules in one git repo ([the docs](https://kortix.com/docs)). Every session runs on its own cloud computer, on its own branch. Open source. Read it, fork it, audit it. The two jobs are two agents in that repo. The starter agent file covers "coding / research / content / ops / data tasks end-to-end". The agents docs show a support-ticket agent built the same way, as a markdown file plus a governance block ([the agents docs](https://kortix.com/docs/project/agents)). A code-heavy team keeps its coding loop too, because OpenCode is the harness.

Either job starts the same way, with one command from the Kortix sessions docs:

\`\`\`sh
kortix sessions new -p "Fix the failing test in src/billing and open a change request" --wait
\`\`\`

Work lands through a change request a person reviews and merges, whichever job produced it. The gate is the same for a support ticket and a failing test.

## What the two jobs cost on one plan

Anthropic's pricing page lists Claude Code on every paid plan and leaves it off the Free plan (checked October 2026). Cowork rides the same ladder: Pro at $17 a month billed annually, Max 5x at $100, Max 20x at $200. Team sits at $20 a standard seat, Enterprise at $20 a seat with a 20-seat minimum ([claude.com/pricing](https://claude.com/pricing)). Both jobs draw on the same usage limits. Anthropic's own card warns that Cowork "consumes limits faster than Chat", so heavy hand-offs push a team up the tiers.

Kortix retired its seats in October 2026 and prices credits: Free is $0 with 500 credits per month, managed models, every feature and 1 project. Paid plans start at $50 a month for 5,000 credits, and members are free, sharing one credit pool. Where the stack runs is a separate decision: run it on Kortix Cloud, in your VPC, or on your own on-prem network, and self-host is free. The [pricing page on this site](/claude-cowork-pricing) works the Anthropic math in detail. The [self-hosting guide](/self-hosting) takes an operator through the install.`,
        },
        {
          type: 'prose',
          body: `## Where each option fits

The job decides first. If the work is code and the team lives in terminals, Claude Code is the direct tool, and a paid plan is the only gate. If the work is documents, research, and recurring reports, hand it to Claude on the plan you already hold. Pick Kortix when the question underneath is ownership. The system running either job has to be open source, in a repo the team controls, on models the team chooses, with review before anything lands. The line between a coding harness and the system around it is the subject of [Kortix vs OpenHands](https://kortix.com/blog/kortix-vs-openhands) on the Kortix blog. The [alternatives map](/claude-cowork-alternatives) covers the wider field of open-source options.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions about the two Anthropic names', sub: 'Sourced answers, dated where the facts move.' },
          items: [
            {
              id: 'merge-claude-code',
              question: 'Did the September 2026 merge fold Claude Code into Claude too?',
              answer:
                'No. The merge brought Cowork\u0027s capabilities into chat, while Claude Code stayed its own product for software engineering, in the terminal, IDE extensions, a desktop app, and the web ([the overview](https://code.claude.com/docs/en/overview), checked October 2026).',
            },
            {
              id: 'plans',
              question: 'Which plans include each one?',
              answer:
                'Claude Code ships on every paid plan and not on Free ([claude.com/pricing](https://claude.com/pricing), checked October 2026). Cowork\u0027s capabilities ride the same paid plans, and the rollout had reached Pro and Max first, with Team and Free to follow, as of October 2026.',
            },
            {
              id: 'replace-code',
              question: 'Does Kortix replace Claude Code?',
              answer:
                'No. OpenCode is the harness. Kortix adds the governed system around it: the repo, the review gate, the connectors, and the memory.',
            },
            {
              id: 'both-jobs',
              question: 'Can one Kortix repo carry both jobs?',
              answer:
                'Yes. Agents are markdown files with governance blocks in kortix.yaml, the starter agent covers coding, research, content, ops, and data tasks, and each job runs as a session on its own sandbox ([the agents docs](https://kortix.com/docs/project/agents)).',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Run both jobs on a system you own',
          sub: 'Open source, free to start, and free to self-host.',
          ctas: [TRY_KORTIX, cta('Read the self-hosting guide', '/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-for-mac ────────────────────────────────────────────── */
    {
      slug: 'claude-cowork-for-mac',
      navLabel: 'For Mac',
      title: 'Claude Cowork for Mac: the desktop trade, and the open-source repo',
      metaDescription:
        "Claude Cowork's Mac reach runs through the desktop app and stops at one machine; the open-source alternative keeps the setup in a repo you own.",
      h1: "The Claude Cowork Mac app's reach ends where the open-source repo starts",
      lead: "Claude Cowork's Mac app is the Claude Desktop app, and the desktop is where its file work is strongest: Claude reads and writes your local folders directly. That reach is also the tie: it needs the app open on that Mac. Kortix is the open-source alternative that keeps the setup in a repo, reachable from any machine.",
      sections: [
        {
          type: 'artifact',
          heading: { title: 'The workflow, one git operation per step' },
          artifact: {
            file: 'docs/quickstart',
            lang: 'text',
            source: 'https://kortix.com/docs/quickstart',
            lines: [
              'Create a project: `kortix init`, `kortix ship` (git init, commit, push to the project\u0027s repository)',
              'Get a project: `kortix projects clone` (git clone through Kortix)',
              'Run a session: `kortix sessions new` (the agent works on its own branch)',
              'Review and merge: `kortix cr merge` (the session branch merges into the default branch)',
            ],
          },
          caption: 'From the Kortix quickstart, whose table reads: every step is a git operation on your project\u0027s repository, from a fresh terminal to a merged change request.',
        },
        {
          type: 'prose',
          body: `## The Mac app is Claude Desktop, on a paid plan

There is no separate Claude Cowork download for the Mac. The Mac app is the Claude Desktop app, and Cowork runs inside it on a paid plan ([the Help Center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork), checked October 2026). The install guide sets macOS 13 (Ventura) or higher as the requirement, with the usual download, open, and sign-in steps ([the install guide](https://support.claude.com/en/articles/10065433-install-claude-desktop)). An active internet connection is required throughout a session.

On September 16, 2026, Anthropic merged Cowork and chat into one Claude. The merged experience rolls out to Pro and Max plans first, on web, desktop, and mobile ([the announcement](https://claude.com/blog/cowork-is-now-claude)). Checked October 2026, the requirements held through that change. The same page still asks for a paid plan and, for anything that touches the Mac, the Desktop app open and connected.

Where the work runs matters to a laptop owner. Claude's work runs on Anthropic's servers, in an isolated environment, and your sessions and files are saved to your Claude account. Close the lid and the session keeps going; scheduled tasks run in the cloud with no device online. The Mac's job is reach. When a task needs a local file, your browser, or your screen, Claude reaches it through the Desktop app on that computer.

Plan for the meter too. The product page warns that Cowork consumes limits faster than Chat ([the product page](https://claude.com/product/cowork), checked October 2026). The Help Center adds one more cost. Auto mode, which lets Claude keep working without asking each time, consumes more of your usage limit than the other modes. Usage limits apply on every plan.

## Where the desktop app earns its keep

The desktop app is the strongest surface Cowork ships, and files are the reason. On desktop, Claude can read from and write to your local files without manual uploads or downloads. The product page describes the same design from the task's side: Cowork works directly in folders and tools you choose, then hands back finished work for review. You point it at a folder, and the work happens in the folder.

The browser story points the same way. On desktop, Claude uses a browser built into the Claude Desktop app by default, with nothing to install, kept separate from your own browser and logins. Computer use exists, and it is the last resort by design: connectors first, the browser next, your screen only when both fail ([the Help Center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)). On a Mac, that whole stack is one download.

Folder instructions make the setup personal. You can attach standing instructions to a local folder you select on desktop. Claude can update them on its own during a session. The folders you connect, those instructions, and the plugins you add are the setup Cowork accumulates. Plugins are saved to your account, so they follow you across surfaces.

## The reach is also the tether

The same capability list explains the lock-in. Local file access, browser use, and computer use need the Claude Desktop app open and connected. They reach things on your computer, while the session itself runs in the cloud ([the Help Center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)). A session keeps running when the app closes. A task that reads your files waits on the app on that Mac.

The account draws a second circle. Sessions cannot be shared with other people; the limitation list allows sharing individual artifacts, and nothing else (checked October 2026). So the unit of work is one person, on one Mac, with one account behind the app. The product page's placement options are Anthropic's cloud or your own account on Amazon Bedrock, Google Cloud, or Microsoft Foundry (checked October 2026). Self-hosting is not among them.

For one person, that is a working setup. A second machine, a rebuilt Mac, or a colleague is where it stops working.

## The open-source half: the setup becomes a repo

Kortix answers the Mac question structurally. It is open source, and the setup, agents, skills, company memory, and connectors, is a set of files in one git repo you own. The work does not wait on your Mac either. Kortix's own line for it: "Thousands of agents in parallel on one config, each on its own cloud computer." Neither the sessions nor the configuration is tied to the machine in front of you.

On a Mac you install nothing to start. The web app runs in a browser: create a project, type the prompt on the project page, and follow the session. If you want a terminal, the CLI's install script supports macOS and Linux on x86_64 and arm64 ([the quickstart](https://kortix.com/docs/quickstart), checked October 2026). Every step from install to a merged change request is a git operation, as the table on this page shows.

There is a desktop app as well. macOS ships one universal \`.dmg\` ([the download page](https://kortix.com/download)). The CLI covers macOS and Linux, WSL on Windows. Where the system itself runs is your choice: "Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free." The desktop app is one way in, the browser and the terminal are the other two. None of the three holds the work; the repo does.`,
        },
        {
          type: 'prose',
          body: `## Choosing on a Mac

The choice comes down to where the useful part lives. If the work is one person's files on one Mac, the desktop app is the right surface. The file reach is real, and the setup is one download and a sign-in. The deliverable comes back while you do something else. Keep the app open and connected for anything that touches the Mac, and watch the usage meter.

If the setup has to outlive the machine, the balance tips to the open-source side. A new Mac or a teammate starts from a clone. The review step is the last row of the table on this page. Kortix is the leading open-source alternative to Claude Cowork and ChatGPT Work. [The self-hosting guide](/self-hosting) takes the do-it-yourself path from a bare box to a running stack.`,
        },
        {
          type: 'faq',
          heading: { title: 'What Mac buyers ask before choosing', sub: 'Sourced answers, with dates where the facts move.' },
          items: [
            {
              id: 'separate-app',
              question: 'Is there a separate Claude Cowork app for Mac?',
              answer:
                'No. Cowork is a capability of Claude, and on a Mac it runs inside the Claude Desktop app, which the install guide puts at macOS 13 (Ventura) or higher ([the install guide](https://support.claude.com/en/articles/10065433-install-claude-desktop), checked October 2026). The September 16, 2026 merge folded Cowork and chat into one Claude ([the announcement](https://claude.com/blog/cowork-is-now-claude)).',
            },
            {
              id: 'without-app',
              question: 'Can I use Cowork on a Mac without the desktop app?',
              answer:
                'On the web at claude.ai, on Pro, Max, and Team plans ([the Help Center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork), checked October 2026). Local file access, browser use, and computer use are the part that needs the app open and connected on that Mac.',
            },
            {
              id: 'team-date',
              question: 'When does the merged Claude reach Team plans?',
              answer:
                'Anthropic says Team and Free plans "will follow soon" behind Pro and Max, and Enterprise admins will hear at least 30 days before anything changes ([the announcement](https://claude.com/blog/cowork-is-now-claude)). As of October 2026 there is no published Team date.',
            },
            {
              id: 'cost',
              question: 'What does the open-source route cost?',
              answer:
                'Free is $0 with 500 credits per month, managed models, every feature and 1 project. Paid plans start at $50 a month for 5,000 credits, and members are free, sharing one credit pool.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Untie the work from one Mac',
          sub: 'Kortix is open source, and the setup is a repo you own: open it from a browser, the CLI, or the desktop app.',
          ctas: [TRY_KORTIX, cta('Read the self-hosting guide', '/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-alternative-google ─────────────────────────────────── */
    {
      slug: 'claude-cowork-alternative-google',
      navLabel: 'Google options',
      title: "Google's Claude Cowork alternative: Gemini Enterprise, Antigravity, and the open source system you can self-host",
      metaDescription:
        'Google answers Claude Cowork with Gemini Enterprise and Antigravity, two closed services; Kortix is the open source alternative you can host yourself.',
      h1: "Google's Claude Cowork alternative is closed; the open source one is yours",
      lead: "Google's answer to Claude Cowork is one agent for work, the product Google's docs still call Gemini Enterprise, with Antigravity beside it for developers. Both are closed services. Kortix is the open source option, and you can host it yourself.",
      sections: [
        {
          type: 'comparison',
          heading: { title: 'Four options, one ownership question', sub: 'Every rival cell comes from that vendor\u0027s own pages, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true, href: 'https://kortix.com/docs', nofollow: true },
            { id: 'gemini-enterprise', label: 'Gemini Enterprise', href: 'https://cloud.google.com/gemini-enterprise' },
            { id: 'antigravity', label: 'Antigravity', href: 'https://antigravity.google' },
            { id: 'claude-cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: ['Yes. Read it, fork it, audit it.', { text: 'No', mark: 'no' }, { text: 'No', mark: 'no' }, { text: 'No', mark: 'no' }],
            },
            {
              label: 'Built for',
              cells: [
                'Agents, skills, memory, and connectors in one repo',
                "One universal agent for a company's knowledge work",
                "Coding agents on a developer's own projects",
                'Non-coding knowledge work on a Claude plan',
              ],
            },
            {
              label: 'Where it runs',
              cells: [
                'Kortix Cloud, your VPC, or your own on-prem network',
                "Google Cloud, under each person's existing permissions",
                "Your machine for projects; Google's service for sign-in and models",
                "Anthropic's cloud, or your Bedrock, Google Cloud, or Microsoft Foundry account",
              ],
            },
            {
              label: 'Model choice',
              cells: [
                'Any model provider with your own keys',
                'Gemini models; Anthropic models admins can enable',
                'Gemini models; Anthropic models admins can enable',
                'Anthropic models',
              ],
            },
            {
              label: 'Who holds the setup',
              cells: [
                'Files in a git repo you own',
                "Config, memory, and history on Google's side",
                "Project files on your disk, account on Google's",
                'Settings inside your Claude account',
              ],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: 'The manifest at the root of a Kortix project' },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://github.com/kortix-ai/suna/blob/main/packages/starter/templates/base/kortix.yaml',
            lines: [
              'kortix_version: 2',
              'default_agent: kortix',
              'project:',
              '  name: "{{projectName}}"',
              'agents:',
              '  kortix:',
              '    file: agents/kortix.md',
              '    connectors: all',
              '    kortix_permissions: all',
              '    skills: all',
            ],
          },
          caption: 'A new Kortix project opens with this file; the agent, its grants, and its tools are lines a person reads and edits.',
        },
        {
          type: 'prose',
          body: `## Google built the Cowork job into one agent

Google introduced its answer on October 8, 2026. That day's keynote at Gemini at Work 2026 announced the Gemini agent as "your new single, universal agent for work". It answers questions, handles knowledge work, creates images and media, and writes and runs code, all from one prompt box. The product page keeps the shape: one agent across email, docs, code, data, and business apps ([Gemini for Business](https://cloud.google.com/gemini-enterprise), [the announcement](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026)). Lengthy jobs run on their own machine in Google Cloud, so work continues after a person logs off. The agent acts under each person's existing permissions and leaves a complete audit trail. A budget cap per project pauses it before it overspends.

A buyer meets three names for one product. Google's own product page titles itself Gemini for Business: The Universal Work Agent. The same page offers a 30-day trial of the Gemini Enterprise Plus edition. Google's documentation tells a different story: every October 2026 update is filed under Gemini Enterprise ([the release notes](https://docs.cloud.google.com/gemini/enterprise/docs/release-notes)). The keynote, the page, and the docs disagree, and all three are Google's own (checked October 2026).

The reach is wide. The page lists more than 100 supported integrations (checked October 2026), from Google Workspace and Microsoft 365 through Slack, Jira, Salesforce, and BigQuery. The keynote describes sub-agents for multi-step tasks. It also describes coworker agents with their own company email address, their own storage, and a defined role. Models route per job. The keynote names Google's Gemini models and Anthropic's Claude models as today's mix. Administrators can switch Claude Opus 5.5 and Claude Sonnet 5.5 on in the app, generally available since October 15, 2026.

Google's own page asks for patience. Not every capability shown is available today. The page lists the gaps: multi-step background task delegation, Gemini on mobile and desktop, and third-party model choice, all early access (checked October 2026). The page and the release notes sit slightly out of step. Date each claim before you rely on it.

## Antigravity is the second Google answer, built for developers

Google Antigravity serves a different worker. Its page lists four surfaces: an agent manager that runs several local agents in parallel, a terminal-first surface, a full agentic IDE, and a Python SDK on its harness ([Antigravity](https://antigravity.google)). Google's release notes name the current version Antigravity 2.0 (October 2026). They group it with the Antigravity CLI and the IDE extensions under Google's AI developer tools.

The getting-started docs show the working arrangement. Agents work inside Projects, and a Project defines which repositories and folders an agent can reach. A task runs in local mode on your active folders or in an isolated git worktree. Sign-in takes a personal Google account or Gemini Enterprise credentials ([the docs](https://antigravity.google/docs/getting-started)). For a software team, it is a serious tool. Research, documents, and business apps are the other product's job.

## Where the ownership question lands

One axis settles this page's choice: who holds the system. Every vendor option on it is a closed service. Cowork runs on Anthropic's cloud, or in your own Amazon Bedrock, Google Cloud, or Microsoft Foundry account ([Claude Cowork](https://claude.com/product/cowork)). Either way, the software is Anthropic's. Gemini Enterprise runs in Google Cloud. Antigravity runs on your machine and signs in to Google's services. None of the three publishes source you can read, and none offers a self-hosted edition. So the configuration, the memory, and the history stay on the vendor's side.

Kortix is the open source option, and the difference is structural. The Kortix docs define the unit: "A project is a git repo with kortix.yaml at its root", and "Agents, skills, memory, tools, triggers and connectors are files in it" ([the Kortix docs](https://kortix.com/docs)). The artifact on this page shows the starter file a new project opens with.

The rest follows from the repo. Connectors reach 3,000+ apps in a click, plus MCP, OpenAPI, Postman, GraphQL and raw HTTP. Models are a choice you hold: any model provider with your own keys. The hosting line is the one no Google product offers. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free, and the [self-hosting guide](https://opensourceclaudecowork.com/self-hosting) on this site walks the install.

That difference shows up in daily work. An agent's reach is a grant list in a file, so a reviewer reads it instead of trusting a settings screen. Moving to new infrastructure means cloning a repo. Nothing here requires a purchase to verify, because the source is public.

## How the choice splits

A team that lives in Google Workspace and Microsoft 365 and accepts Google Cloud as the operator should weigh Gemini Enterprise first, early-access list in view. A software team that wants agents on its own machine and repositories fits Antigravity. For a team that wants the system itself as code it can read, fork, and host, Kortix is the starting point.

Staying inside Anthropic on a paid plan keeps Claude Cowork, which since September 16, 2026 arrives from any conversation in Claude. The [alternatives list](https://opensourceclaudecowork.com/claude-cowork-alternatives) on this site sorts the wider open source field. The Kortix blog keeps a longer guide to [choosing an open source platform your team can own](https://kortix.com/blog/open-source-ai-agent-platform).`,
        },
        {
          type: 'faq',
          heading: { title: "Questions buyers ask about Google's Cowork alternative", sub: 'Answers date the facts that move.' },
          items: [
            {
              id: 'google-answer',
              question: 'Does Google have a Claude Cowork alternative?',
              answer:
                'Yes. Google announced the Gemini agent, its single universal agent for work, on October 8, 2026; the product its docs call Gemini Enterprise works across email, docs, code, data, and business apps, and Google Antigravity covers the developer side.',
            },
            {
              id: 'name',
              question: 'What is Gemini Enterprise called now?',
              answer:
                'The name is mid-change, checked October 2026. Google\u0027s product page titles itself Gemini for Business: The Universal Work Agent, the keynote said the Gemini agent, and Google\u0027s docs and release notes still file the product under Gemini Enterprise.',
            },
            {
              id: 'open-source',
              question: 'Is Google\u0027s Claude Cowork alternative open source?',
              answer:
                'No. Gemini Enterprise and Antigravity are Google services with no source to read and no self-host edition. Kortix is the open source option, and self-host is free.',
            },
            {
              id: 'self-host',
              question: 'Can I self-host Gemini Enterprise or Antigravity?',
              answer:
                'No. Gemini Enterprise runs in Google Cloud, and Antigravity installs on a person\u0027s machine and signs in with a Google account or Gemini Enterprise credentials. Kortix runs on Kortix Cloud, in your VPC, or on your own on-prem network.',
            },
            {
              id: 'merge-effect',
              question: 'Did the September 2026 Cowork merge change the comparison?',
              answer:
                'On September 16, 2026, Anthropic merged Cowork and chat into one Claude, so the capability now arrives from any conversation, rolling out to Pro and Max plans first, with Team and Free plans to follow. Google\u0027s two products did not change, and neither did the ownership question.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Run the open source option yourself',
          sub: 'Kortix is open source; try it on Kortix Cloud or self-host it on your own network.',
          ctas: [TRY_KORTIX, cta('Compare the open-source options', 'https://opensourceclaudecowork.com/claude-cowork-alternatives')],
        },
      ],
    },

    /* ── claude-cowork-alternative-free ───────────────────────────────────── */
    {
      slug: 'claude-cowork-alternative-free',
      navLabel: 'Free',
      title: 'Free Claude Cowork alternative: free tier, free app, or open source',
      metaDescription:
        'A free Claude Cowork alternative can mean a plan tier, a free app, or open-source software you host, and Kortix is the kind you can self-host.',
      h1: 'Free Claude Cowork alternative: free tier, free app, open source',
      lead: 'Free has three meanings in this search: a plan tier, an app that costs nothing, and software that is free because you host it. Claude Cowork, merged into Claude on September 16, 2026, rides paid plans; OpenWork\u0027s desktop app is free; Kortix is open source and free to self-host. Each free carries a catch.',
      sections: [
        {
          type: 'comparison',
          heading: { title: 'Three kinds of free, priced', sub: 'Every rival cell comes from that vendor\u0027s own pages, checked October 2026.' },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true },
            { id: 'claude-cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
            { id: 'openwork', label: 'OpenWork', href: 'https://openworklabs.com' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [
                { text: 'Yes', mark: 'yes' },
                { text: 'No', mark: 'no' },
                { text: 'Yes', mark: 'yes' },
              ],
            },
            {
              label: 'Which free it is',
              cells: ['Free software you host, or Kortix Cloud tiers', 'A capability inside paid Claude plans', 'A free desktop app'],
            },
            {
              label: 'The catch',
              cells: ['You bring the server, a sandbox key and a model key', 'Needs a paid plan and consumes limits faster', 'Your model keys; central management is a cloud plan'],
            },
            {
              label: 'What growth costs',
              cells: ['Paid plans start at $50 a month for 5,000 credits', 'Pro $17, Max 5x $100, Max 20x $200', '$10 a seat a month on OpenWork Cloud'],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: 'What the free software asks you to bring' },
          artifact: {
            file: 'kortix.com/docs/host',
            lang: 'text',
            source: 'https://kortix.com/docs/host',
            lines: [
              'A self-hosted instance is the full Kortix platform on a server you control:',
              'one Docker Compose stack that the kortix self-host CLI installs, configures',
              'and updates.',
              '',
              'Requirements',
              '- A Linux server with a public IP. The bootstrap installs Docker Engine and the Compose plugin.',
              '- A sandbox provider key: Daytona, Platinum or E2B. Without one, sessions do not start.',
              '- A model provider key. You add it in the web app after the first sign-in.',
            ],
          },
          caption: "The project's own install docs state the requirements in one place, so the catch is checkable before the install.",
        },
        {
          type: 'prose',
          body: `## The three meanings of free

A search for a free Claude Cowork alternative returns three kinds of answer. Free means something different in each. The first is a plan tier: a $0 entry inside a product built to upgrade you. The second is an app that costs nothing to download. The bill waits in the model keys you attach. The third is software that is free because you host it, which is what open source makes possible. Anthropic, OpenWork and Kortix each occupy one, and each free has its own catch.

## The plan tier: the capability sits behind a paid plan

On September 16, 2026, Anthropic [merged Claude Cowork and chat into one Claude](https://claude.com/resources/articles/cowork-is-now-claude). What Cowork could do now runs from any conversation, "with the context, skills, and connectors you already have." The rollout reaches Pro and Max plans first, and Anthropic says Team and Free plans "will follow soon." Enterprise admins get at least 30 days' notice before anything changes for their organizations.

The Free plan itself costs $0. Whether it includes the merged capability depends on where that rollout stands on a given day in October 2026. Anthropic's [product page](https://claude.com/product/cowork) still sells Cowork by plan. Pro costs $17 a month billed annually, Max 20x costs $200, and Team seats start at $20. Every plan card notes that usage limits apply, and the page warns that Cowork consumes limits faster than Chat.

The catch of the free tier is that the free stops at the door. The capability lives behind the plan, and the plan meters the work. A free tier is a pricing decision, and the vendor holds the pen.

## The free app: OpenWork's desktop, and where its free stops

OpenWork answers the same search with a download. Its [own site](https://openworklabs.com) calls the desktop app for macOS, Windows and Linux free and open source. It needs no account, keeps your files on your machine, and runs on your own provider keys. On OpenWork Cloud, the first five seats are free. After that the Team plan charges $10 per seat per month and adds SSO and an extension marketplace (checked October 2026).

The catch of the free app is its shape. It works on one machine, on the files that machine holds. Central management, SSO and the seats past five live in the paid cloud. A solo worker with a provider key gets real value at $0. A team that wants the work in one shared place, governed and reviewable, needs more than files on one machine.

## The free software: Kortix, free because you host it

Kortix is the open-source AI Operating System. Its README puts the terms in one line: "Open source. Read it, fork it, audit it." Where it runs is your choice: "Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free." On hardware you hold, the platform itself never sends an invoice.

The catch is written in the project's own install docs, in a section called Requirements. The excerpt on this page shows it. Three items on that list cost money somewhere: the server, the sandbox provider, the model provider. None of them bills through Kortix: the sandbox key goes to the provider that supplies each session's cloud computer. The docs are blunt: sessions do not start without one.

What the hosting buys back is the model choice: "Any model provider with your own keys. Or the ChatGPT plan you already pay for." The routing lives in your repo as a setting. Routine work can point at a cheaper model, and the judgment calls keep the strong one.

Running a box is one kind of free, and it is a job. On Kortix Cloud the same system prices credits instead: Free is $0 with 500 credits per month, managed models, every feature and 1 project. Paid plans start at $50 a month for 5,000 credits, and members are free, sharing one credit pool. Credits pay for the agent computer, the cloud machine where a session runs, and the machine costs nothing while it is stopped. The post [Is Kortix free?](https://kortix.com/blog/is-kortix-ai-free) on the Kortix blog answers the same question at more length.

## Which free fits which reader

Start from the work, and the choice mostly makes itself. One person, one machine, files on that machine, a provider key already in hand: OpenWork's desktop is the free that fits. Shared company work needs the system around the agent. That means one place for memory, connectors and the review step before anything lands. Several people start tasks and hand them on. Kortix is the open-source system for that job. It is free to self-host, and the configuration lives in a repo the whole team can read. Work that must stay inside Anthropic's apps points to the merged Cowork, on a plan that matches the usage.

Among the three, the free that lasts is the one that lives in software you hold. Vendors reprice tiers, and a repo you host is unaffected by any of it. That is the case for Kortix here. The [self-hosting guide](/self-hosting) makes it in install commands, and the [Cowork pricing page](/claude-cowork-pricing) makes it in Anthropic's own plan ladder. Start with the $0 cloud tier, then move the stack to your own server when the work proves itself.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions people ask about a free Cowork alternative', sub: 'Short answers, with the moving facts dated.' },
          items: [
            {
              id: 'free-plan',
              question: 'Is Claude Cowork free on the Free plan?',
              answer:
                'Not in October 2026. The [September 16, 2026 merge](https://claude.com/resources/articles/cowork-is-now-claude) put the rollout on Pro and Max first, and Anthropic says Team and Free plans "will follow soon". The [Cowork page](https://claude.com/product/cowork) still describes a product that works with a paid plan.',
            },
            {
              id: 'still-bills',
              question: 'What does a free open-source alternative still bill me for?',
              answer:
                'The software costs nothing. Your bills are the server, the sandbox provider and the model provider; the Kortix docs state that [sessions do not start without a sandbox key](https://kortix.com/docs/host).',
            },
            {
              id: 'after-free',
              question: 'How much does Kortix cost after the free start?',
              answer:
                'On Kortix Cloud: Free is $0 with 500 credits per month, managed models, every feature and 1 project. Paid plans start at $50 a month for 5,000 credits, and members are free, sharing one credit pool (checked October 2026). Self-hosting stays free, and your costs are the server and your model provider.',
            },
            {
              id: 'team-of-five',
              question: 'Which free fits a team of five?',
              answer:
                'OpenWork\u0027s cloud keeps the first five seats free and charges $10 per seat from the sixth. Cowork rides Claude Team seats from $20 a seat billed annually. Kortix\u0027s members share one credit pool, so a sixth member adds no platform bill; the credits follow the work.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Pick the free you can keep',
          sub: 'Kortix is open source, free to start on the cloud and free to self-host on a server you own.',
          ctas: [TRY_KORTIX, cta('Read the self-hosting guide', 'https://opensourceclaudecowork.com/self-hosting')],
        },
      ],
    },
    /* ── self-hosted-claude-code ─────────────────────────────────────────── */
    {
      slug: 'self-hosted-claude-code',
      navLabel: 'Self-hosted Claude Code',
      title: 'What self-hosted Claude Code leaves you to own, and what open source changes',
      metaDescription:
        "Anthropic's self-hosted Claude Code keeps the control plane and transcript; an open-source harness puts the repo and review on your side.",
      h1: 'Self-hosted Claude Code: where an open-source harness draws the line',
      lead: "Self-hosted Claude Code in 2026 means Anthropic's public beta runs cloud sessions on a runner inside your network, not on your laptop. The control plane, the queue and the transcript stay with Anthropic. Kortix is the open-source AI Operating System that puts the harness, the repo and the review on your side.",
      updated: '2026-10-19',
      sections: [
        {
          type: 'comparison',
          heading: {
            title: 'Self-hosted Claude Code against an open-source harness',
            sub: 'The same four layers, split in different places.',
          },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true },
            { id: 'anthropic-self-hosted', label: 'Anthropic self-hosted Claude Code', href: 'https://code.claude.com/docs/en/self-hosted-environments' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [{ text: 'Yes', mark: 'yes' }, { text: 'No', mark: 'no' }],
            },
            {
              label: 'What runs on your hardware',
              cells: [
                "The platform stack; each session's sandbox stays managed compute",
                'The runner and the Claude Code processes it starts',
              ],
            },
            {
              label: 'Where the control plane lives',
              cells: [
                'In your instance, on your server',
                "Anthropic's infrastructure: orchestration, queueing, the claude.ai interface",
              ],
            },
            {
              label: 'Where session content goes',
              cells: [
                'Your instance, sandbox provider and model provider',
                'api.anthropic.com; Anthropic stores the transcript',
              ],
            },
            {
              label: 'Model choice',
              cells: [
                'Any model provider with your own keys',
                'Anthropic API, Amazon Bedrock or Google Cloud',
              ],
            },
            {
              label: 'Who reviews a change',
              cells: [
                'A person merges; merge is default-deny for agents',
                "Your git host's rules; the runner pushes commits",
              ],
            },
            {
              label: 'Plan needed',
              cells: [
                'Self-host is free',
                'Team or Enterprise; an Owner enables the beta',
              ],
            },
          ],
          footnote: "Anthropic's cells come from its self-hosted environments documentation, checked October 2026.",
        },
        {
          type: 'artifact',
          heading: { title: 'The manifest that defines a project' },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: "https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/kortix.yaml",
            lines: [
              '# Hardware: cpu = cores, memory = GiB, disk = GiB. All optional.',
              '# sandbox:',
              '#   templates:',
              '#     - slug: python',
              '#       name: Python 3.12',
              '#       image: python:3.12-slim',
              '#       cpu: 2',
              '#       memory: 4',
              'agents:',
              '  kortix:',
              '    file: agents/kortix.md',
              '    connectors: all',
            ],
          },
          caption: "A sandbox template and the starter agent's grants, copied from the base kortix.yaml.",
        },
        {
          type: 'prose',
          body: `## Anthropic's beta moves the runner, not the control plane

Anthropic's self-hosted environments are in public beta on Team and Enterprise and off by default; an Owner turns them on in the Cloud environments admin page ([the documentation](https://code.claude.com/docs/en/self-hosted-environments), checked October 2026). Three pieces make the feature. An environment is a named destination in claude.ai admin settings. A runner is a program on a host inside your network. A session is one Claude Code task a developer starts.

When a developer picks your environment, Anthropic's control plane places the session on its queue. A runner claims it, clones the repository the developer chose, and starts a Claude Code process on your host. Traffic back to Anthropic runs over outbound HTTPS: queue polling, the session's event stream, and by default model inference. Anthropic never connects into your network.

That split is the whole story. The runner executes work on your hardware. The queue, the orchestration and the claude.ai interface remain Anthropic-hosted. Repository checkouts, build artifacts, secrets and the files a session creates stay on your machines. The session's content, including prompts, responses and tool results, goes to api.anthropic.com, and Anthropic stores the transcript so the session can resume elsewhere. Model inference uses the Anthropic API unless you configure a runner for Amazon Bedrock or Google Cloud. The transcript goes to Anthropic either way.

Two exclusions narrow the field. The beta is unavailable to organizations with Zero Data Retention enabled or the HIPAA configuration applied. And someone has to build and maintain the runner image, operate the fleet and control its network. Anthropic's own guidance says most teams are better served by its hosted environments.

## The runner image is yours; the queue is not

For a team whose blocker is network reach, the runner image is a real win. Pre-install compilers, SDKs and internal CLIs in the runner image, and every session starts ready to build. Sessions can reach internal services, databases and registries without exposing them to the public internet. A compliance team gets repository checkouts and build artifacts on infrastructure the company controls.

Then look at what the image cannot change. The session still arrives through Anthropic's queue. The transcript still lands on Anthropic's side. The model still comes from Anthropic unless a cloud account takes over inference. The runner is durable work, and it is also a client of a hosted control plane. A team that reads "self-hosted" as "the system is ours" will overestimate what the beta delivers.

The beta fits a specific buyer: an enterprise already on Claude, with cloud sessions in use, whose security review asks where code executes rather than where orchestration lives. That buyer gets network access and a fleet to run. Anthropic stays in the path.

## What open source changes

Kortix takes the other end of the split. The repo is the unit of ownership. Open source. Read it, fork it, audit it.

A project is a git repo with \`kortix.yaml\` at its root, and the manifest holds the pieces that decide how sessions run: sandbox templates, tool lists, agent grants and triggers ([Read the docs](https://kortix.com/docs)). An agent's behavior lives in a markdown file, its governance in the manifest. Change a grant and the change is a diff someone can review.

Sessions do not run on the box that hosts the stack. The self-host README says agent sessions still run on a cloud sandbox provider, Daytona, E2B or Platinum, and that sandboxes are managed compute outside the self-hosted box ([the README](https://github.com/kortix-ai/suna/blob/dev/self-host/README.md), checked October 2026). What stays on your disks is the stack and the instance directory: the database, the stored files and the secrets. What stays in your git is the configuration that defines the fleet. The restart test is the honest one. Power-cycle the host and the stack returns from the instance directory; the agents return from the repo.

The harness is where model choice lives. OpenCode is the harness, and a project can point at a custom OpenAI-compatible endpoint: enter a provider id, base URL and model id, then commit the provider snippet to \`opencode.jsonc\` in the project's config directory ([Read the docs](https://kortix.com/docs/project/models), checked October 2026). Any model provider with your own keys. A self-hosted instance has no managed models, so each project connects its own provider.

That combination changes the question a buyer asks. With Anthropic's beta, the question is which parts of a hosted system can execute in your network. With an open-source harness, it is which files define the system and who may change them. The second question survives a repricing or a product rename, because the answer is a repo you can clone.

## The review gate a runner does not give you

Anthropic's documentation describes the runner's job and stops at the git host. The runner clones and pushes with credentials you configure. What happens between a pushed branch and a merged default branch is your git host's policy, and the review belongs to the team's workflow.

Kortix makes that boundary part of the product. Session work reaches \`main\` through a change request. Merge is default-deny for agents. The agent commits on its session branch, opens the change request and stops. A person reads the diff. An agent can merge only when its grant includes \`project.gitops.merge\`; the starter agent has that grant, and a scoped specialist without it waits for a person.

The gate matters more once configuration lives in the repo. A new skill, a widened connector grant and a changed trigger all arrive as diffs. The same review that catches a bad function catches a permission change. That is the practical difference between owning a runner image and owning the system that defines the work.

## A decision guide for the first quarter

Pick Anthropic's self-hosted environments when the hard requirement is execution inside your network and the rest of the stack can stay with Anthropic. The beta suits an organization on the Team or Enterprise plan that already runs cloud sessions, has people ready to operate a runner fleet, and accepts that the transcript and model calls go to Anthropic. It is the shorter path when the alternative is moving the whole system.

Pick an open-source harness when ownership has to include the configuration, the model route and the review gate, not only the machine that executes. [Kortix](https://kortix.com/blog/self-hosted-claude-cowork) covers that case. Run it on Kortix Cloud, in your VPC, or on [your own on-prem network](/self-hosting). Self-host is free. A team that wants the repo on its own disk and sessions on managed compute can have both.

Change nothing when the team only uses [Claude Code in a terminal or an IDE](/claude-cowork-vs-claude-code). Those sessions already run on the developer's machine, and Anthropic's documentation says there is nothing to configure. A server-side beta adds work only when cloud sessions are part of how the team works.

The mistake to avoid is treating self-hosting as one decision. It is four: where the runner executes, where the control plane lives, where the session content goes, and which files define the system. Anthropic's beta settles the first and keeps the other three. Kortix moves the control plane and the configuration to the team's side, and is candid that sessions still run on managed compute.`,
        },
        {
          type: 'faq',
          heading: {
            title: 'Questions the search box asks',
            sub: "Answers from Anthropic's documentation, checked October 2026.",
          },
          items: [
            {
              id: 'shcc-1',
              question: "Can Claude Code be self-hosted?",
              answer: "Partly. Anthropic's self-hosted environments, in public beta on Team and Enterprise, run cloud sessions on a runner inside your network while the control plane and transcript stay with Anthropic.",
            },
            {
              id: 'shcc-2',
              question: "Can Claude Code use self-hosted models?",
              answer: "Not locally. A runner can send model requests to Amazon Bedrock or Google Cloud, and the session transcript still goes to api.anthropic.com.",
            },
            {
              id: 'shcc-3',
              question: "Can I run Claude Code locally for free?",
              answer: "Yes. In a terminal or IDE, Claude Code runs on the developer's own machine at no hosting cost. The self-hosted beta is for cloud sessions a team dispatches to its own network, and it needs a Team or Enterprise plan.",
            },
          ],
        },
        {
          type: 'cta',
          title: 'Run the system you own',
          sub: 'The repo, the harness and the review stay on your side.',
          ctas: [TRY_KORTIX],
        },
      ],
    },
    /* ── self-hosted-ai-agent ────────────────────────────────────────────── */
    {
      slug: 'self-hosted-ai-agent',
      navLabel: 'Self-hosted AI agent',
      title: 'Open source self-hosted AI agent: what you own, what you rent',
      metaDescription:
        "A self-hosted AI agent is a session machine plus the file that governs what it may touch, and Kortix makes both open source.",
      h1: 'Self-host an open-source AI agent with its own machine and file',
      lead: "A self-hosted AI agent is two things: the machine its session boots on, and the file in your repo that says what the agent may touch. Kortix is open source, and both artifacts are readable before the first session starts. In many stacks that call themselves self-hosted, the machine half is rented.",
      updated: '2026-10-19',
      sections: [
        {
          type: 'artifact',
          id: 'harness',
          heading: {
            eyebrow: "Harness",
            title: "OpenCode turns a model into a session",
            sub: "The harness is the program that gives the model tools and a working directory, and in Kortix it is OpenCode, configured from a folder in the repo.",
          },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: "https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/kortix.yaml",
            lines: [
              "opencode:",
              "  config_dir: harnesses/opencode",
            ],
          },
        },
        {
          type: 'artifact',
          id: 'governance',
          heading: {
            eyebrow: "Governance",
            title: "The manifest says what an agent may touch",
            sub: "Grants live in the agents map, and a grant you leave out resolves to none.",
          },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: "https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/kortix.yaml",
            lines: [
              "agents:",
              "  kortix:",
              "    file: agents/kortix.md",
              "    connectors: all",
              "    secrets: all",
              "    kortix_permissions: all",
            ],
          },
        },
        {
          type: 'artifact',
          id: 'compute',
          heading: {
            eyebrow: "Compute",
            title: "A template names the machine each session boots",
            sub: "The template carries the image or Dockerfile and the hardware, and leaving it out means sessions boot on the platform image.",
          },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: "https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/kortix.yaml",
            lines: [
              "# sandbox:",
              "#   templates:",
              "#     - slug: python",
              "#       image: python:3.12-slim",
              "#       cpu: 2",
              "#       memory: 4",
            ],
          },
        },
        {
          type: 'prose',
          body: `## Which layer becomes yours

People use "self-hosted" for three different layers, and most comparisons start from the wrong one. The model is inference: a hosted API behind your own key, a subscription you already pay for, or a server on your hardware. The harness is the program that turns a model into a session with tools, and in Kortix it is OpenCode. The machine is the sandbox one session runs on, created at the start of the session and discarded at the end.

A self-hosted AI agent, in the sense that matters here, is those parts placed by you: the harness, the file that governs what the agent may reach, and the machine its session runs on. Two of the three are code in a git repo. The third is compute, and in most setups that call themselves self-hosted it is rented from a provider even when [the platform runs on your own server](/self-hosted-ai-agent-platform).

[Kortix](https://kortix.com/blog/best-self-hosted-ai-workspace) is open source, which matters here for a narrow reason. The manifest and the template are readable at a public URL before you install anything, at the same address a reviewer will open later.

## The template decides the machine

The [project manifest](https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/kortix.yaml), \`kortix.yaml\`, carries a \`sandbox.templates\` list. Each entry has a slug and either an \`image\` or a \`dockerfile\` from the repo, plus \`cpu\` in cores, \`memory\` in GiB and \`disk\` in GiB. A project default is set once with \`sandbox.default\`, and a single agent can point at a different template through \`agents.<name>.sandbox\`. Leave the block out and sessions boot on the platform's default image, which clones the repo into \`/workspace\` at start.

Writing the machine down changes a review. An agent that runs a build and an agent that drafts a reply do not need the same memory, and the difference becomes a number in a diff instead of a support request. The template also states a ceiling. A session cannot grow past the box it names, so an agent that runs out of memory is a line to edit.

## The file says what an agent may touch

Governance sits in the \`agents.<name>\` block, and nothing else sits there. Connectors, secrets, skills, Kortix permissions and the workspace boundary are grants. The prompt, the model and the tool rules live in the agent's markdown file, a stock OpenCode agent file that any editor opens. The template calls version 2 deny-by-default: a grant you leave out resolves to none.

This is where a self-hosted install earns the name, because the permission model is a file your review already covers. Grant a connector and the agent can call it. Grant a secret by name and the value stays out of the repo, in the project's secrets, so the file records what is allowed without holding what it unlocks. One line decides what a session can change before it starts. \`workspace.project_repository: true\` gives each session a checkout on its own branch, and \`false\` gives the session no repository access at all.

Connector credentials are brokered server-side and never enter the machine. The file names a connector, and the key stays outside the repo.

## Where the session machine comes from

The Compose project on your server runs the web app, the API, the LLM gateway, the database, auth and storage. None of those services executes an agent turn. Your provider key is what creates each session's machine, on Daytona, E2B or Platinum, and that machine calls back to your instance over the network. The [self-host README](https://github.com/kortix-ai/suna/blob/dev/self-host/README.md) states the consequence without softening it: sandboxes are "managed compute, not part of this box".

So a self-hosted agent in this shape is two ownerships. You hold the file, the review and the stack. You rent the machine, per session, from a provider whose account and key are yours. A security reviewer will ask both questions, and they have different answers.

Renting the machine buys one that is already built: a session starts in seconds, and the work stays off a laptop. The disk it ran on still sits under the provider you chose, under the terms you accepted, which is a boundary worth naming in writing. A team that needs the machine inside its own perimeter is making a second decision, and installing the platform does not make it for them.

One isolated sandbox per session. Each session has its own isolated machine and branch.

## What setup asks for

The README puts the floor at 2 vCPU and 4 GB of memory, with 4 vCPU and 16 GB or more for real use. The server needs a public IP, DNS records for the domain and its API subdomain, and ports 80 and 443 open, as the [self-hosting docs](https://kortix.com/docs/host) lay out. \`kortix self-host init\` then asks about reachability, an admin email, the deployment shape, a sandbox provider and its API key, the optional connector catalog, and the update policy.

No model key appears in that list. A self-hosted instance has no managed models, so the key goes in after the first sign-in, per project ([models docs](https://kortix.com/docs/project/models)). Any model provider with your own keys. A custom OpenAI-compatible endpoint takes the same slot, which is how a local model server joins a self-hosted instance.

Do DNS first, because it is the step that fails. A missing wildcard record for previews turns a link that should open into a path proxy that breaks it.

## Self-hosted or managed, decided by the file

The file travels with the product across placements, so the choice is about who holds what.

- Self-host when the grants, the agent files and the review need to sit behind your own access control, or when a reviewer wants to read the permission file rather than a settings screen.
- Choose the managed cloud when you want the same repo and the same review without owning Postgres, backups and upgrades.
- Self-hosting makes the platform yours. It does not move the session machine. If that machine has to stay on infrastructure you control, the sandbox provider is a separate decision, and it is the one most guides in this category skip.

The test is two questions. Who can change a grant, and where does the machine that executes it live? When both answers are acceptable, the install is a formality.`,
        },
        {
          type: 'faq',
          heading: {
            title: 'Questions people ask before they choose',
          },
          items: [
            {
              id: 'shaa-1',
              question: "Can I host my own AI agent?",
              answer: "Yes. Kortix is open source and [self-hosts as one Docker Compose stack](/self-hosting) on a Linux server you control. Sessions still boot on a sandbox provider you name, so the platform is yours while the session machine is rented.",
            },
            {
              id: 'shaa-2',
              question: "What is a self-hosted AI agent?",
              answer: "It is an agent system you run on infrastructure you control: a harness, a file that governs what the agent may reach, and a machine per session. The machine is often rented from a sandbox provider even when the platform sits on your own server.",
            },
            {
              id: 'shaa-3',
              question: "Which self-hosted AI agent is best?",
              answer: "Pick the one whose permission file you can read and review. Kortix suits teams that declare connectors, secrets and workspace access in a repo, with session work landing through a change request a person approves.",
            },
            {
              id: 'shaa-4',
              question: "What AI platform is best for agents?",
              answer: "One where configuration lives in a repo you own, the model takes your own key, and each session gets its own machine. Kortix is open source and meets all three, on its cloud or on your server.",
            },
          ],
        },
        {
          type: 'cta',
          title: 'Read the manifest, then run it',
          sub: 'One repo holds the agents, the grants and the machine templates.',
          ctas: [TRY_KORTIX],
        },
      ],
    },

    /* ── what-is-claude-cowork ────────────────────────────────────────────── */
    {
      slug: 'what-is-claude-cowork',
      navLabel: 'What is Cowork',
      title: 'What Claude Cowork actually is, and what open source changes about it',
      metaDescription:
        "Claude Cowork is Anthropic's agent for multi-step work, now part of Claude. The open-source difference is where its files, skills and permissions live.",
      h1: 'What Claude Cowork is, and where an open-source version keeps its files',
      lead: "Claude Cowork is Anthropic's agent for multi-step knowledge work: hand it a goal and it reads your files, runs tools, and returns finished documents or slides. Since September 2026 it runs inside Claude itself. Kortix is the leading open-source alternative to Claude Cowork and ChatGPT Work.",
      sections: [
        {
          type: 'prose',
          body: `## What Claude Cowork is

Claude Cowork is Anthropic's agent for multi-step knowledge work. You describe an outcome, it works in the files and tools you name, and it comes back with finished documents, spreadsheets or slides. Claude is the assistant it belongs to, the chat product of the same name. Cowork was the part of Claude built for whole tasks rather than single questions. Anthropic describes it as using "the same agentic architecture that powers Claude Code, with no terminal required" ([help center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).

The two products became one in September 2026. "Starting today, Claude Cowork and chat are merging into one Claude," [Anthropic's announcement](https://claude.com/resources/articles/cowork-is-now-claude) reads, with what Cowork could do now "available from any conversation". Accounts move in stages, so plenty of paid accounts still show separate Chat and Cowork buttons, and Anthropic warns the move is one way once yours is in.

What Anthropic ships, checked October 2026 on its own pages:

- Desktop apps for macOS and Windows on every paid plan, Linux in beta.
- Web and mobile on Pro, Max and Team, plus Claude in Chrome on Max and Team.
- Sessions that run on Anthropic's servers "in an isolated environment", saved to your Claude account, so a task keeps going after your laptop closes.
- Scheduled tasks that run with no device online, memory shared with chat, projects, skills, plugins and connectors.
- A data path you choose: a Claude account, or an Amazon Bedrock, Google Cloud or Microsoft Foundry account ([product page](https://claude.com/product/cowork)).

The price is the subscription rather than the task. The Cowork page includes Cowork in Pro and Enterprise, lists Max at $100 and $200 a month and Team at $20, and applies usage limits to all of them ([the plan math](/claude-cowork-pricing)).

## Where the setup actually lives

Everything that makes Cowork useful to one particular team is configuration. Which folders Claude may read. The connectors it may call. The skills that encode how a job is done here, and the plugins that bundle them. The instructions that apply to every conversation, the projects holding files and context, and the permission setting. That last one decides whether Claude asks first. Manual, where it asks, is the default.

Almost none of that is a file you can open. Anthropic's help center puts folders under "Trusted folders", connectors in "Customize > Connectors", and global instructions in "Instructions for Claude in Settings > General" ([one Claude](https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude)). The sentence worth reading twice is a migration note: "Your chats, tasks, projects, and settings come with you when your account moves over." Everything a team built travels with the account, and the only place it can travel to is another Anthropic account.

That is the design, and Anthropic says so plainly. Its safety page puts the limit in one line: "Isolation limits where Claude's code runs. It doesn't limit what Claude reads or does" ([use Cowork safely](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely)). You are setting permissions inside someone else's product. The loop is the easy part of a system like this; ask any engineer who has wired an agent to a model and a few tools. The environment is the hard part, which is why every serious open-source attempt at Cowork ends up rebuilding the environment rather than the chat.
`,
        },
        {
          type: 'comparison',
          heading: {
            title: 'Where the setup lives, and who keeps it',
            sub: "One row decides the rest: what a person's work is attached to when they leave.",
          },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true, href: 'https://github.com/kortix-ai/suna', nofollow: true },
            { id: 'claude-cowork', label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
            { id: 'openwork', label: 'OpenWork', href: 'https://github.com/different-ai/openwork' },
          ],
          rows: [
            {
              label: 'Where the agent runs',
              cells: [
                'A sandbox per session, on Kortix Cloud or your own network.',
                "Anthropic's servers, or your Bedrock, Google Cloud or Foundry account.",
                'Your own computer; files stay local, cloud optional.',
              ],
            },
            {
              label: 'Where its skills and config live',
              cells: [
                'Files in the project repo: agents/*.md, skills/, kortix.yaml.',
                'Your Claude account: instructions, projects, skills, connectors.',
                'Local to the app; a team admin interface publishes shared skills.',
              ],
            },
            {
              label: 'Which models it can use',
              cells: [
                'Any model provider with your own keys.',
                'Claude models, through the picker in the conversation.',
                '50+ providers, your own API keys, local models via Ollama.',
              ],
            },
            {
              label: 'Who keeps the setup when a person leaves',
              cells: [
                'The repo stays; the next person is invited to it.',
                "It stays in that person's Claude account, with their projects.",
                'The local setup leaves with them.',
              ],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: "Where an agent's permissions are written down" },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/kortix.yaml',
            lines: [
              'agents:',
              '  kortix:',
              '    file: agents/kortix.md',
              '    connectors: all',
              '    secrets: all',
              '    kortix_permissions: all',
              '    skills: all',
            ],
          },
          caption: "The manifest registers what exists and what each agent may reach; the agent's own file holds the prompt.",
        },
        {
          type: 'prose',
          body: `## The same settings, as files in a repo

Kortix takes the other route. The environment is a git repo, and the manifest is a file in it that the repository's own header calls "the source of truth for project-wide config that lives in git alongside the code" ([kortix.yaml](https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/kortix.yaml)). An \`agents:\` map in that file names what each agent may reach. The behavior lives a directory away, in the agent's own markdown file, where three lines settle the prompt, the mode and the permission:

\`\`\`markdown
---
description: "Generic Kortix general knowledge worker. Hands-on, full tool access, handles coding / research / content / ops / data tasks end-to-end in an isolated session sandbox. Edit this file to specialize for your project."
mode: primary
permission: allow
---
\`\`\`

That is the whole of it. Changing what the agent does, or what it is allowed to do, is a diff somebody can read and review before it lands, with the reason written next to it. The starter's own agent file calls that session an ephemeral branch of the repo. Its rule is what makes the arrangement hold: only what you commit and push survives ([agents/kortix.md](https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/agents/kortix.md)).

Open source is what makes the arrangement checkable. "Open source. Read it, fork it, audit it." You can read the loop, read the permission model, and run the whole thing where you choose: "Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free."

## The test that settles the choice

Do three things before you commit a team's work to any of them. Clone it, point an agent at a real folder, and then take away the account that sold it to you. What is left tells you whether you own a setup or rent one.

On the open-source side the answer survives the third step: the repo is still yours, the manifest still says what each agent may reach, and a colleague can be invited to it. On Cowork the setup is the account, so the third step ends the work. If you want the stack on your own hardware next, [the self-hosting guide](/self-hosting) covers the install; [the alternatives page](/claude-cowork-alternatives) sorts the open projects by where they run.`,
        },
        {
          type: 'faq',
          heading: {
            title: 'Two questions the definition leaves open',
            sub: "Short answers, with Anthropic's pages behind the first one.",
          },
          items: [
            {
              id: 'open-source-version',
              question: 'Is there an open-source version of Claude Cowork?',
              answer:
                'No. Anthropic publishes no source for Cowork, and after the September 2026 merge it is a feature of Claude, which ships as a product. Kortix is the open-source alternative, with the agent, its skills and its permissions written as files in a git repo you own.',
            },
            {
              id: 'free',
              question: 'Can I run Claude Cowork for free?',
              answer:
                'Not yet. Cowork is included in the paid Claude plans Anthropic lists, and Anthropic says Team and Free plans follow for the merged experience. Self-host is free.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Keep the setup, not just the subscription',
          sub: 'Your agents, their skills and the permissions they run under, in a repo you can clone today.',
          ctas: [TRY_KORTIX],
        },
      ],
    },

    /* ── claude-cowork-github-projects ────────────────────────────────────── */
    {
      slug: 'claude-cowork-github-projects',
      navLabel: 'Projects on GitHub',
      title: 'Open-source Claude Cowork projects on GitHub, read by what each repo keeps',
      metaDescription:
        'Open-source Claude Cowork projects on GitHub compared by what each repo covers, where the agent runs and when it last changed, plus Kortix.',
      h1: 'Open-source Claude Cowork projects on GitHub, sorted by what each repo keeps',
      lead: 'Seven open-source Claude Cowork projects turn up in the GitHub results, split three ways: a window over someone else\u0027s agent loop, a launcher for someone else\u0027s CLI, or a whole system with its own runtime. Kortix is the open-source AI Operating System: your agents, their skills, your company memory, and every connector in one git repo you own.',
      sections: [
        {
          type: 'comparison',
          heading: {
            title: 'Four of those repos, side by side',
            sub: "Every rival cell comes from that project's own README, checked 19 October 2026.",
          },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true, href: 'https://github.com/kortix-ai/suna', nofollow: true },
            { id: 'openwork', label: 'OpenWork', href: 'https://github.com/different-ai/openwork' },
            { id: 'open-claude-cowork', label: 'Open Claude Cowork', href: 'https://github.com/composio-community/open-claude-cowork' },
            { id: 'open-cowork', label: 'Open Cowork', href: 'https://github.com/OpenCoworkAI/open-cowork' },
          ],
          rows: [
            {
              label: 'What it is',
              cells: [
                'Open-source AI Operating System, configured by a repo',
                'Desktop app built on the OpenCode harness',
                'Desktop chat app on the Claude Agent SDK',
                'Desktop GUI over Claude Code and other models',
              ],
            },
            {
              label: 'Open source',
              cells: [
                { text: 'Yes', mark: 'yes' },
                'The app, yes; ee/ carries enterprise terms',
                { text: 'Yes', mark: 'yes' },
                { text: 'Yes', mark: 'yes' },
              ],
            },
            {
              label: 'Where the agent runs',
              cells: [
                'Kortix Cloud, your VPC, or your own network',
                'Your machine, in the desktop app',
                'A local Node server behind an Electron window',
                'Your desktop, in a VM (WSL2 or Lima)',
              ],
            },
            {
              label: 'Which keys you bring',
              cells: [
                'Any model provider with your own keys',
                '50+ providers, own keys, or a local model',
                'An Anthropic key; OpenCode is optional',
                'Anthropic, OpenRouter, or OpenAI-compatible keys',
              ],
            },
            {
              label: 'Where skills live',
              cells: [
                'skills/ and agents/*.md in the repo you own',
                'In the app; teams publish them from the Den',
                'SKILL.md files under .claude/skills/',
                '.claude/skills/, bundled and editable in the app',
              ],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: 'The manifest, with the agents and their grants in it' },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://kortix.com/docs/project/manifest',
            lines: [
              'kortix_version: 2',
              'default_agent: kortix',
              'env:',
              '  optional: [STRIPE_API_KEY]',
              'agents:',
              '  kortix:',
              '    file: agents/kortix.md',
              '    connectors: all',
              '    secrets: all',
              '    skills: all',
              '    kortix_permissions: all',
            ],
          },
          caption: "The sample project's manifest: the agents, the file each one runs from, and what each may reach.",
        },
        {
          type: 'faq',
          heading: { title: 'Questions the GitHub results raise' },
          items: [
            {
              id: 'open-source-version',
              question: 'Is there an open-source version of Claude Cowork?',
              answer:
                'Yes. Several teams publish one, and they differ on where the agent runs: a desktop app on your own machine, or a server-side system you host yourself. Kortix is the second kind, and its configuration is a git repo you own.',
            },
            {
              id: 'which-to-pick',
              question: 'Which open-source Claude Cowork alternative should a team pick?',
              answer:
                'Kortix, when the work has to outlive one laptop. The repo holds the agents, skills, grants and memory, and a session boots from that checkout instead of from an app someone installed on a desktop.',
            },
            {
              id: 'self-host',
              question: 'Can I self-host these projects?',
              answer:
                'The desktop apps run on your own machine, which is where their files and keys stay. Kortix runs on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free.',
            },
          ],
        },
        {
          type: 'cta',
          title: "One repo, and every agent's rules inside it",
          sub: 'Read the code, run it where you like, keep the configuration in git.',
          ctas: [TRY_KORTIX],
        },
        {
          type: 'prose',
          body: `## Three kinds of project wear the same name

Search GitHub for an open-source Claude Cowork and the first page mixes three different things. The names look alike. The repos are not alike, and the difference decides where your setup ends up.

The first kind is a window over an agent loop that somebody else maintains. Composio's [open-claude-cowork](https://github.com/composio-community/open-claude-cowork) is an Electron chat app on the Claude Agent SDK and Composio's own tool router. Its setup asks for an Anthropic key, and it advertises 500+ app integrations. [OpenWork](https://github.com/different-ai/openwork) is a desktop app built on OpenCode, the same harness Kortix runs. You get a good interface and a fast start, and the loop underneath belongs to someone else.

The second kind launches a CLI you still have to bring. [Open Cowork](https://github.com/OpenCoworkAI/open-cowork) wraps Claude Code, OpenAI, Gemini and DeepSeek in a GUI with installers for Windows and macOS. It keeps the work inside a VM on your own disk, through WSL2 or Lima. [claude-cowork-linux](https://github.com/johnzfitch/claude-cowork-linux) goes the other way and stubs the macOS-only pieces of Anthropic's Claude Desktop, so Cowork mode runs on Linux without a virtual machine. Both are useful when you already have the thing underneath. Neither replaces it.

The third kind owns the runtime. [CoWork OS](https://github.com/CoWork-OS/CoWork-OS) is a desktop app with approval profiles for each risky step, and its memory is markdown in a local git folder. [Kuse Cowork](https://github.com/kuse-ai/kuse_cowork) is a Rust agent for the desktop that takes your own keys and calls your provider directly. Kortix is the server-side member of this group, with the whole setup in one repo you own. The desktop route gets a fuller treatment in the [OpenWork comparison](/claude-cowork-vs-openwork) on this site.

## The column that decides whether you can keep it

Every list ranks these projects on features. Two things printed on the repo matter more a year later, and neither shows up in a screenshot.

The first is what the repo's own terms cover, and OpenWork's README is unusually precise. Everything outside \`ee/\` is open source and free for any use. The \`ee/\` directory, the org control plane it calls OpenWork Den, is public so you can audit it. Production use needs a subscription, free for organizations of up to five people and free to evaluate for 30 days at any size. The other projects here state one set of terms for the whole tree. Read that section before you plan on forking the control plane.

The second is whether terms exist at all. [DevAgentForge's Open-Claude-Cowork](https://github.com/DevAgentForge/Open-Claude-Cowork) is a desktop assistant with a polished README. GitHub records no terms for that repo, which leaves a forker with nothing written down to rely on. What you cannot read, you cannot plan around.

Kortix answers with the dullest arrangement available: the parts a team edits are the files it already cloned. An agent is \`agents/<name>.md\` (behavior) plus an \`agents.<name>\` block in \`kortix.yaml\` (governance). Fork the config and you have forked the setup. The [open-source question](/is-claude-cowork-open-source) gets a longer answer on this site.

## The last push date is the honest feature list

Checked on 19 October 2026, the commit dates split the field. OpenWork and CoWork OS pushed that day. Kuse Cowork pushed on 18 October, Open Cowork on 13 October, claude-cowork-linux on 11 October. Composio's open-claude-cowork last pushed on 23 May 2026, five months behind the rest, and DevAgentForge's on 21 March.

A date is not a quality score. A small project can be finished rather than abandoned. The date does tell you whether anyone is still watching the moving parts. The model APIs these apps call change often, and an app pinned to a spring release has not absorbed the summer's changes. A desktop app that stopped in May still opens. It stops working the week a provider changes an endpoint.

For a team the question is harsher, because by then the setup is more than the app: skills, grants, connector config and memory. Those have to live somewhere that outlasts the window you run them in. Kept inside an app that stopped in May, they are a snapshot of somebody else's project management.

## One afternoon settles it

Clone the repo you are considering. Point it at a folder with real files and give it a task you would actually hand over.

Then take the vendor key away. Unset the Anthropic key and put in a different provider, or a local model. If the app starts, the loop is yours to choose. If it refuses, you have your answer. The open-source Cowork was a window, and the model behind it was never yours.

Last, find where the configuration went. Skills, grants and secrets should be files you can commit and diff. If they are rows in a vendor's table, the app is a rental. One afternoon told you that before your team built anything on top of it.

Kortix holds up on those three steps. Any model provider with your own keys. Sessions boot from a checkout of the project repo. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free, and the [self-hosting guide](/self-hosting) walks the install.`,
        },
      ],
    },

    /* ── open-source-claude-cowork-reddit ─────────────────────────────────── */
    {
      slug: 'open-source-claude-cowork-reddit',
      navLabel: 'Reddit threads',
      title: 'What Reddit threads show about open source Claude Cowork that the lists hide',
      metaDescription:
        'The top open source Claude Cowork lists are published by vendors ranking themselves. Reddit threads record what broke after install, and when.',
      h1: 'Why open source Claude Cowork lists and Reddit threads disagree',
      lead: 'Reddit threads on open source Claude Cowork keep returning to two complaints: a build that works on the maker\u0027s laptop and nowhere else, and terms that change after you depend on them. Kortix is the open-source AI Operating System. The vendor lists that rank well carry neither, and the gap is worth an hour of your time.',
      sections: [
        {
          type: 'prose',
          body: `## The lists are written by one of the entries

Search for an open source Claude Cowork and the same handful of names comes back. The order changes with the page you land on. [Eigent's round-up](https://www.eigent.ai/blog/best-open-source-claude-cowork-alternatives-2026) puts Eigent first and labels it "Best Overall". After it come OpenClaw, Open Cowork, Composio's open Cowork and OpenWork. [Kuse's round-up](https://www.kuse.ai/blogs/top-5-open-source-claude-cowork-alternatives) puts Kuse first. Then OpenWork, Eigent, Composio's project, AionUI.

Both pages lead with the company that pays for the domain. Eigent's page closes by naming Eigent as the one to start with, just before a Download Eigent button. Kuse's page gives Kuse the first slot, then hands its rivals narrower virtues: OpenWork for automation, Eigent for multi-agent work, Composio for integrations, AionUI for monitoring. Three entries repeat across the two lists. What moves is the order, and the top slot always goes to the publisher.

The shape is familiar even without bad faith. A ranked list written by someone with a download button on the page will put their own product first. The shortlist underneath is real. [The alternatives page on this site](/claude-cowork-alternatives) sorts the same projects by where each one runs.

The threads carry an interest too. In [the April r/LocalLLaMA thread about OpenWork's terms](https://www.reddit.com/r/LocalLLaMA/comments/1sgnppg/openwork_an_opensource_claude_cowork_alternative/), the contributor who made the commit declares that stake in his first sentence: "Hey Omar here (OpenWork contributor, made the commit in question)" (I_am_McAdam, 2026-04-09). One reply is a link to the commenter's own project, repeated twice more under the same handle (BidWestern1056, 2026-04-09). Pretending the threads are neutral would be dishonest. What a thread has that a list does not: a date, a reply button, and someone who installed the thing and came back to say what happened next.

## What the threads keep hitting

The demand is consistent. On the [Show HN thread that launched OpenWork in January 2026](https://news.ycombinator.com/item?id=46612494), one commenter described the reader this niche serves. "I was left hoping for something a bit more batteries included to give to my non technical colleagues" (yowlingcat, 2026-01-15). Nobody there wanted a chat window. They wanted a harness they could hand to a colleague who will never open a config file.

The failures are consistent too, and they are not the ones a feature table lists. That April thread went after OpenWork over terms that had changed inside a commit rather than in an announcement. The contributor who made the commit replied, under the handle I_am_McAdam, that the app itself had not changed. What had moved was the cloud and enterprise part. Whatever you make of that decision, note the shape of the complaint: nobody found out from the home page.

Windows broke hardest. Readers complained that the Windows build sat behind a $99-a-year price while it was still broken. The maker's defense in the same thread is the sentence to keep. "We've been testing the builds with Parallels and got to a stage where we could not replicate some of the issues that other people were reporting because 'it worked on our machines'" (Empty_Hovercraft8739, 2026-04-10). Days later the Windows builds were back on the releases page.

The terms problem runs wider than one project. The sharpest comment in that thread is about how long the change sat unnoticed: "Still took 3 weeks. Imagine if it was a backdoor." (lrq3000, 2026-04-09). Another reply names the stake: "transparency is the only currency these projects have. once that's gone, the stars don't mean anything" (Ornery-Peanut-1737, 2026-04-09). A repository you can read is not a guarantee. Someone still has to diff it.

Then the quieter failure, the one that shows up after the demo. A commenter in the same launch thread, thinking about how Cowork handles files, put it plainly. "giving an LLM permission to edit files without being able to track exactly what it's doing still feels risky" (jannesblobel, 2026-01-19). A file agent with no record of its edits is one you cannot review. The thread's advice on timing is worth taking literally: "I ignore these things until they're 3-6 months old and still iterating" (browningstreet, 2026-01-15).

Read the complaints together. None of them is about features. Each is about where the thing runs, who holds the code, and whether you can see what changed. All three are checkable in an hour.`,
        },
        {
          type: 'comparison',
          heading: {
            title: 'What a dated thread gives you that a ranked list does not',
            sub: 'Three ways to arrive at the same shortlist, and who is answerable for each.',
          },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true, href: 'https://github.com/kortix-ai/suna', nofollow: true },
            { id: 'desktop-app', label: 'A desktop app named in a thread' },
            { id: 'vendor-list', label: 'The first entry on a vendor list' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [
                { text: 'Yes', mark: 'yes' },
                { text: 'Yes, per its own repo', mark: 'yes' },
                { text: 'Yes, says the list', mark: 'yes' },
              ],
            },
            {
              label: 'Where the config lives',
              cells: ['A git repo you own', 'Settings inside the app', 'Settings inside the app'],
            },
            {
              label: 'Model keys',
              cells: ['Yours', 'Yours, on its own page', "Yours, on the list's word"],
            },
            {
              label: 'What you can read before install',
              cells: ['The manifest and the agent files', 'Source code on a forge', 'A marketing page'],
            },
            {
              label: 'Who fixes a break',
              cells: ['Your repo, your change requests', 'The maintainer, or you', 'The vendor'],
            },
            {
              label: 'Who recommends it',
              cells: ['This page, and says so', 'A poster, sometimes its author', 'The vendor, in its own first slot'],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: "The whole of one agent's governance, in a file you can diff" },
          artifact: {
            file: 'kortix.yaml',
            lang: 'yaml',
            source: 'https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/kortix.yaml',
            lines: [
              'agents:',
              '  kortix:',
              '    file: agents/kortix.md',
              '    connectors: all',
              '    secrets: all',
              '    kortix_permissions: all',
              '    skills: all',
              '    workspace: { project_repository: true }',
            ],
          },
          caption: "The starter manifest's first agent, quoted from the Kortix starter template.",
        },
        {
          type: 'prose',
          body: `## Five checks that take about an hour

Start with the commit history, filtered to the paths that hold configuration and docs. Look for changes to terms or to the build that no release note mentions. That r/LocalLLaMA thread took three weeks to notice one, which is why the check is yours.

Then open the issue tracker filtered to the operating system you use, and count install problems from the last 60 days. A project with a healthy Mac story and a dead Windows story says so here, in public, long before a round-up mentions it.

Build it from source on a second machine. Or install it there fresh and reproduce one workflow from the project's own documentation. If the setup only works on the machine where the author tested it, you have found the failure the thread described. It cost an hour.

Run one task over a folder of your own files, then look at what changed. Every file the agent touched should appear somewhere you can read, with the old version recoverable. If you cannot answer "what did it do to these files" afterwards, the tool is not ready for work you care about.

Last, decide who can change the rules without you. If you cannot pin a version and revert a configuration change in one command, terms and behavior belong to whoever maintains the project. Your only recourse is to hope they announce the next change.

Kortix is the setup that passed these checks for us, and the reason is structural rather than a feature. The config that governs an agent is a file in your repo, so a change to your setup lands as a diff you can read. Session work reaches \`main\` through a change request. Merge is default-deny for agents. Any model provider with your own keys. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free. [The self-hosting page](/self-hosting) covers what the first run asks for.`,
        },
        {
          type: 'faq',
          heading: { title: 'Questions the threads answer better than the lists' },
          items: [
            {
              id: 'which-alternative',
              question: 'Which open source alternative to Claude Cowork do the threads point to?',
              answer:
                "OpenWork and OpenClaw come up most in the threads, and the round-ups add AionUI and Composio's open Cowork. What the threads reward is a property rather than a product: something you can read, build on your own machines, and keep after a reinstall.",
            },
            {
              id: 'is-it-open-source',
              question: 'Is Claude Cowork open source?',
              answer:
                'No. Cowork runs inside the closed Claude app, and since the September 2026 merge there is no separate surface of it to host. Every project called an open source Claude Cowork alternative is a rebuild of the idea by somebody else, usually as a desktop app. [The longer answer](/is-claude-cowork-open-source) has the dates.',
            },
            {
              id: 'why-orders-differ',
              question: 'Why do vendor lists rank the same products in different orders?',
              answer:
                'Because each list puts its own publisher first and fills the remaining slots with real projects, so the set repeats while the order moves. Read the ordering as an advertisement and the entries as a shortlist, then check the threads for what happened after people installed them.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Start from a config you can read and revert',
          sub: 'Your agents, skills and permissions, as files in a repo you own.',
          ctas: [TRY_KORTIX, cta('Compare the open source options', '/claude-cowork-vs-openwork')],
        },
      ],
    },

    /* ── what-happened-to-claude-cowork ───────────────────────────────────── */
    {
      slug: 'what-happened-to-claude-cowork',
      navLabel: 'What happened to Cowork',
      title: 'What happened to Claude Cowork, and the open-source layer you keep',
      metaDescription:
        'Anthropic merged Claude Cowork into Claude on 16 September 2026. What changed, what did not, and the open-source layer you keep.',
      h1: 'What happened to Claude Cowork, and what open source keeps',
      lead: 'Anthropic merged Claude Cowork into Claude on 16 September 2026, so the Cowork toggle is going away and Claude now decides when a chat becomes a longer job. Kortix is the open-source AI Operating System: your agents, skills, company memory and connectors in one git repo you own. Details checked 20 October 2026.',
      updated: '2026-10-20',
      sections: [
        {
          type: 'prose',
          body: `## The merge, dated

Claude Cowork was Anthropic's mode for work that outlasted a single answer. A request became a job: it read your files, used your connectors, and came back as a document, a spreadsheet or a deck. On 16 September 2026 Anthropic stopped keeping that in a separate place and folded it into Claude itself ([VentureBeat](https://venturebeat.com/technology/anthropic-is-killing-off-cowork-and-folding-it-into-claude-launching-claude-docs-and-claude-slides)).

- **12 January 2026.** Cowork arrived as a research preview for Max subscribers in the macOS desktop app. It was an agentic workspace built on the architecture behind Claude Code, with no terminal ([VentureBeat](https://venturebeat.com/technology/anthropic-is-killing-off-cowork-and-folding-it-into-claude-launching-claude-docs-and-claude-slides)).
- **By 16 September 2026.** Every paid plan carried Cowork, on desktop, web and mobile, and Enterprise accounts had it where an admin enabled it ([VentureBeat](https://venturebeat.com/technology/anthropic-is-killing-off-cowork-and-folding-it-into-claude-launching-claude-docs-and-claude-slides), 16 September 2026).
- **16 September 2026.** "Starting today, Claude Cowork and chat are merging into one Claude," Anthropic's announcement reads ([Anthropic](https://claude.com/resources/articles/cowork-is-now-claude)). Existing chats, projects, artifacts, connectors and skills carry over, the Cowork name will eventually disappear, and Claude Code stays a separate product ([VentureBeat](https://venturebeat.com/technology/anthropic-is-killing-off-cowork-and-folding-it-into-claude-launching-claude-docs-and-claude-slides)).
- **From 16 September 2026.** Pro and Max accounts move first on web, desktop and mobile, with more plans to follow. Enterprise admins hear at least 30 days before anything changes for their organization. For them the unified experience is a beta an admin turns on ([Claude Help Center](https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude)).
- **6 October 2026.** New Cowork tasks on Pro and Max start in the cloud. Work on files stored on your own computer still needs the desktop app open ([ClickForest](https://www.clickforest.com/en/blog/claude-cowork-explained), checked 3 October 2026).

## What did not change

The work still runs on infrastructure the team does not hold. Anthropic's help centre says Cowork "runs your tasks in the cloud" and that "Claude's work runs on Anthropic's servers, in an isolated environment". Sessions and files are saved to the Claude account ([Claude Help Center](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)). An organization can point Claude Desktop at its own inference endpoint instead. Conversation content then goes to Bedrock, Google Cloud or Foundry, and history stays on the device ([Claude docs](https://claude.com/docs/third-party/claude-desktop/overview)). Either arrangement ships a client and a service: Anthropic publishes no Cowork source, and no build of it runs on your own hardware.

Permissions stay inside the product as well. A Manual or Auto setting in the message box decides whether Claude asks before each action ([Claude Help Center](https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude)). On a managed desktop deployment, an MDM profile delivers the configuration ([Claude docs](https://claude.com/docs/third-party/claude-desktop/overview)). A rulebook like that is a screen to click and, at larger companies, a policy file pushed to laptops. Nobody on the team reads it as a diff before it takes effect.

The agent now chooses the moment a chat becomes a job. That handover used to be the person's, a toggle under the input box. After the merge Claude makes it from the prompt, and scheduled tasks keep the job running with no device online ([Claude Help Center](https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude)). For a person this is simpler. For a team, it moves one more decision behind a screen the team does not own. The question of which jobs ran under what permissions then arrives after the fact.

None of that is a flaw in the product Anthropic built. Asking someone to choose between a chat and a job was real friction, and removing the choice is a fair answer to it. The cost lands on the layer underneath, which the merge left exactly where it was.

## What survives the next rename

A label is the cheapest thing a vendor can change. The work, the permissions and the log are the expensive parts, and a rename leaves all three where the last one put them. A team that reopens the question "which Cowork-like product do we buy" will reopen it again at the next announcement. The question that survives is which layer the team holds when the name moves.

Kortix is built so that layer is a repository. An agent is a markdown file under \`agents/\`, and the reach it has is a line in that file's frontmatter. Nothing about it lives in a dashboard; one file is the whole agent. The same file calls the session an ephemeral branch of the repo and says that only what you commit and push survives ([the starter repo](https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/agents/kortix.md)).

\`kortix.yaml\` registers what exists in the project, and each agent enables what it needs by name. An omitted grant resolves to \`none\`, so a narrow agent starts with nothing ([kortix.yaml](https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/kortix.yaml)). Work then lands the way code lands. Session work reaches \`main\` through a change request, and merge is default-deny for agents. An admin can grant \`project.gitops.merge\` to change that.

The repo is readable and the permission is a diff a colleague reviews. Every action is recorded. Reading, exporting and streaming the audit log depend on the plan. Who may merge is written down too. Run it on Kortix Cloud, in your VPC, or on your own on-prem network. Self-host is free.

If you are still working out what the product was, [what Claude Cowork is](/what-is-claude-cowork) covers it. [The alternatives page](/claude-cowork-alternatives) sorts the open projects by where they run, and [moving a team off Cowork](/migrate-from-claude-cowork) covers the handover.`,
        },
        {
          type: 'comparison',
          heading: {
            title: 'Four options, six questions',
            sub: "Kortix is the leading open-source alternative to Claude Cowork and ChatGPT Work, with each rival cell taken from that vendor's own pages in October 2026.",
          },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true, href: 'https://kortix.com', nofollow: true },
            { id: 'claude', label: 'Claude, with Cowork inside it', href: 'https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude' },
            { id: 'openwork', label: 'OpenWork', href: 'https://openworklabs.com' },
            { id: 'chatgpt-work', label: 'ChatGPT Work', href: 'https://openai.com/index/chatgpt-for-your-most-ambitious-work' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [
                { text: 'Yes, the whole platform', mark: 'yes' },
                { text: 'No', mark: 'no' },
                { text: 'Yes, the desktop app', mark: 'yes' },
                { text: 'No', mark: 'no' },
              ],
            },
            {
              label: 'Where the work runs',
              cells: [
                'Kortix Cloud, your VPC or on-prem, one sandbox per session',
                "Anthropic's servers, or your Bedrock, Google Cloud or Foundry endpoint",
                'Your own machine; cloud workers optional',
                "OpenAI's cloud, with a desktop app on your machine",
              ],
            },
            {
              label: 'Where permissions are written',
              cells: [
                'agents/<name>.md, plus grants in kortix.yaml',
                'A Manual or Auto setting per conversation',
                'Local app settings; Enterprise desktop policies',
                'Admin Console, by workspace and group',
              ],
            },
            {
              label: 'Audit trail',
              cells: [
                'Every action is recorded. Reading, exporting and streaming the audit log depend on the plan',
                'Compliance API transcripts for Enterprise; no Cowork events in the audit log',
                'Audit log and spend observability on Enterprise; every agent action attributable and exportable to a SIEM',
                'A Compliance API for Enterprise and Edu',
              ],
            },
            {
              label: 'Self-host',
              cells: [
                { text: 'Yes, on your own network', mark: 'yes' },
                { text: 'No', mark: 'no' },
                { text: 'Yes, or a managed private instance', mark: 'yes' },
                { text: 'No', mark: 'no' },
              ],
            },
            {
              label: 'Model choice',
              cells: [
                'Any model, your keys',
                "Anthropic's models",
                '50+ providers, local models',
                "OpenAI's models",
              ],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: "An agent's permission, as a line in a file" },
          artifact: {
            file: 'agents/kortix.md',
            lang: 'text',
            source: 'https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/agents/kortix.md',
            lines: [
              '---',
              'mode: primary',
              'permission: allow',
              '---',
              'You are a **Kortix general knowledge worker** for **{{projectName}}**.',
              'Only what you commit + push survives.',
            ],
          },
          caption: "A starter agent's frontmatter, and the rule its session runs under.",
        },
        {
          type: 'faq',
          heading: { title: 'Questions the merge left behind', sub: 'Short answers, with the dates Anthropic gives.' },
          items: [
            {
              id: 'still-exist',
              question: 'Does Claude Cowork still exist?',
              answer:
                'Yes, as a capability inside Claude. On Pro and Max its work now happens inside ordinary Claude conversations, and the toggle disappears as the rollout reaches each account; Team accounts still see a separate option for now. Anthropic says the Cowork name will eventually disappear, while the work it did stays.',
            },
            {
              id: 'what-happened',
              question: 'What happened to Claude Cowork?',
              answer:
                'Anthropic merged it into Claude on 16 September 2026, so one conversation can answer a question and then carry on as a longer task. Chats, projects, artifacts, connectors and skills carried over, and Claude now decides when a request becomes a job.',
            },
            {
              id: 'lost-projects',
              question: 'Did I lose my Cowork projects and files?',
              answer:
                'No. Anthropic says existing Cowork tasks, projects, connectors, skills, artifacts and files come with the account, and those tasks open as they did before ([Claude Help Center](https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude)). On desktop, the folder Cowork saved work to is still listed as the storage folder in Settings.',
            },
            {
              id: 'not-visible',
              question: "Why can't I see the new Claude yet?",
              answer:
                'Because the rollout is staged. Pro and Max go first on web, desktop and mobile over the coming weeks, more plans follow, and accounts on the same plan can move at different times. Nothing needs switching on: if the message box still shows Chat and Cowork, the account is not in the wave yet.',
            },
            {
              id: 'claude-code',
              question: 'Is Claude Code going away too?',
              answer:
                'No. Anthropic keeps Claude Code separate for developers working from terminals and IDEs against a codebase, and the September announcement covered Cowork and chat only ([VentureBeat](https://venturebeat.com/technology/anthropic-is-killing-off-cowork-and-folding-it-into-claude-launching-claude-docs-and-claude-slides)).',
            },
            {
              id: 'need-code',
              question: "Do I still need Claude Code if I don't code?",
              answer:
                'No. Cowork already used the same agent architecture as Claude Code without the terminal, and after the merge that work happens in the chat a non-developer already uses.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Clone the layer before the next rename',
          sub: 'Your agents, their permissions and the merge gate live in a repo you can clone today.',
          ctas: [TRY_KORTIX, cta('See how self-hosting works', '/self-hosting')],
        },
      ],
    },

    /* ── claude-cowork-security-and-approvals ─────────────────────────────── */
    {
      slug: 'claude-cowork-security-and-approvals',
      navLabel: 'Security and audit log',
      title: 'An open-source audit trail beats a gateway bolted onto Claude Cowork',
      metaDescription:
        'Anthropic says Audit Logs do not cover Claude Cowork yet. An open-source way to run agents where permissions are files and a person merges the work.',
      h1: 'Claude Cowork security: an open-source audit trail you own',
      lead: 'The open-source answer to "can you see what the agent did?" begins with a fact Anthropic publishes: Audit Logs do not cover Claude Cowork yet, so the record is a transcript feed rather than a log you keep. Kortix is the open-source AI Operating System, and here the record is the place the agent ran. Checked 20 October 2026.',
      updated: '2026-10-20',
      sections: [
        {
          type: 'prose',
          body: `## The audit gap, in the vendor's own words

Anthropic documents the gap itself. In the deployment checklist of its Claude Cowork enterprise administrator guide, one line reads: "Note that Audit Logs do not cover Claude Cowork yet." The sentence immediately after it says "The Compliance API returns Claude Cowork session transcripts for Claude Enterprise organizations." ([Claude Academy](https://academy.claude.com/tutorials/claude-cowork-enterprise-administrator-guide), checked 20 October 2026.)

Harmonic Security's practitioner's guide, last updated 14 September 2026, pairs the two facts and calls the first one a correction: "The Compliance API now covers Cowork. The audit log still does not. This reverses our earlier guidance." The same page adds that "The Audit Log CSV export contains no Cowork event types", and that the Activity Feed "is not retroactive". A team that enables the Compliance API after rollout has a record only from that day forward ([Harmonic Security](https://www.harmonic.security/resources/securing-claude-cowork-a-security-practitioners-guide)).

Three vendors that sell gateways put the exclusion at its widest. TrueFoundry writes that "Cowork activity is explicitly excluded from Anthropic's Audit Logs, Compliance API, and Data Exports on every plan tier, including Enterprise." Mintive's article states "Cowork activity is explicitly excluded from Anthropic's Audit Logs, Compliance API, and Data Exports." Repello AI writes that "Anthropic's native compliance tooling (Audit Logs, Compliance API, Data Exports) does not cover Cowork activity on any plan tier" ([TrueFoundry](https://www.truefoundry.com/blog/claude-cowork-security-risks), [Mintive](https://www.mintmcp.com/blog/claude-cowork-audit-logging-gap), [Repello AI](https://repello.ai/blog/claude-cowork-security)).

Read those three beside the vendor's own page and the finding narrows to something you can check. The audit log gap is real and Anthropic states it. The Compliance API half is behind the product: Anthropic and Harmonic both describe a transcript feed for Enterprise organizations, and the three write-ups describe the state before that feed shipped. What survives all four sources is the part that matters in a review. There is no audit log entry for an agent's action, and no export a team can hold after the contract ends.

All three vendors propose the same compensating control: route OpenTelemetry to your own SIEM. TrueFoundry is direct about what that feed carries, saying that "by default, prompts, MCP server names, tool names, and skill names are excluded from those logs" ([TrueFoundry](https://www.truefoundry.com/blog/claude-cowork-security-risks)). Event-level metadata is not the same record as the command that ran and the file it touched.

Their finding and their remedy come from the same company, which is worth saying plainly. TrueFoundry sells an AI gateway and an MCP gateway, Repello sells an MCP gateway, and Mintive's article recommends MCP gateway visibility. That does not make the observation wrong. The audit log gap is on Anthropic's own page. It does mean the fix was never going to be a proxy. The record it hands you still sits on somebody else's side of the wall.

The defaults are the part a reviewer should check first. Harmonic records that on Team plans Cowork, cloud sessions, Claude in Chrome and the built-in browser all start enabled. It also records that "Allow Automatically approve mode" is on by default, which puts a classifier rather than a person in the reviewer's seat before an action runs. On Enterprise the two browsers were off at launch and then "ON by default from 10 September 2026 unless already disabled", with no notice to members. A team that assumed the safer default was in place is running the other one.

The merge widened who this question applies to. On 16 September 2026 Anthropic folded Cowork into Claude: agentic work now happens inside ordinary conversations, and the Cowork toggle disappears as the rollout reaches each account ([VentureBeat](https://venturebeat.com/technology/anthropic-is-killing-off-cowork-and-folding-it-into-claude-launching-claude-docs-and-claude-slides)). A security team cannot block "Cowork" as a separate product any more and call the review closed.

## Why a gateway is not an audit trail

A gateway records the traffic it can see. It sees a call leave for a model endpoint or an MCP server, and it can hold that call or log its arguments. The file the session opened before the call never crosses it. Neither does the shell line that produced an upload, or the scheduled task that ran at three in the morning. TrueFoundry's guide says where its own coverage stops. Local conversation history and file operations are covered by "your endpoint security posture", meaning disk encryption and EDR, and they never reach the proxy ([TrueFoundry](https://www.truefoundry.com/blog/claude-cowork-security-risks)).

A gateway is also a second product to govern. It has its own deployment, keys, admin surface and uptime, and each of those is another thing to review. When it is down the trail has a hole; when it is misconfigured the hole is silent. The team ends up auditing a proxy's access policy next to the agent's, and the original question has doubled instead of closing.

The third gap is the one no proxy can reach. A gateway can record that an action happened. It cannot record who approved it, because the approval is a click inside the vendor's client, made by the member in the session. In the automatic mode Harmonic describes, there is no click at all and a classifier decides, so the event arrives at the SIEM with no name attached to the decision.

That is the structural point, and it holds whatever the next product is called. When the authority for an action is a setting inside the product, the evidence of that authority is inside the product too. Anything in front of it can witness the action. The place where the agent runs can show the permission that allowed it, and the person who let it through.

## What an auditable agent looks like instead

An auditable system starts with where the permissions are written. In Kortix an agent is two files: \`agents/<name>.md\` for how it behaves, and a block under \`agents:\` in \`kortix.yaml\` for what it may reach. The starter agent opens with \`permission: allow\` in its own frontmatter. The manifest header draws the line the same way: the \`agents:\` map is "GOVERNANCE ONLY", and "Agent BEHAVIOR (description, model, mode, temperature, permission, the prompt itself, …) lives entirely in that \`.md\`'s frontmatter + body" ([kortix.yaml](https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/kortix.yaml)). A permission change is a diff a colleague can read.

Grants fail closed by default. The header states it in the file: "v2 is deny-by-default: an omitted connectors/secrets/kortix_permissions/skills grant resolves to "none", so a scoped specialist starts locked down." Access set in a console is a checkbox somebody ticked. Access written in a repo is a line somebody wrote and somebody else merged.

\`\`\`yaml
# v2 is deny-by-default: an omitted connectors/secrets/kortix_permissions/
# skills grant resolves to "none", so a scoped specialist starts locked down.
\`\`\`

The session is a branch of the repository. The starter agent's body describes the workspace it runs in as "an isolated sandbox", "an ephemeral branch of this repo, your own \`/workspace\`", where "Only what you commit + push survives". Each session gets one isolated sandbox with its own isolated machine and branch. What it writes and what it runs show up as repository state that a diff can reach.

Work then lands the way code lands. Session work reaches the default branch through a change request, and merge is default-deny for agents. A person holding the \`project.gitops.merge\` permission reviews the diff and merges it. The name on that merge is the approval, and it sits in the history beside the change it approved. An auditor who asks who authorized something gets a person, a diff and a timestamp.

The record is the repository. Commits, change requests, reviews and merges live in it, which is why a rename, a plan change or a vendor decision cannot take them away. Kortix runs on Kortix Cloud, in your VPC or on your own on-prem network, and self-host is free. The repo you clone holds the same history as the one you audit. Where the data sits is covered in [Claude Cowork data privacy](/claude-cowork-data-privacy). How sessions run is on [the self-hosted page](/self-hosted-ai-agent), and what the product is in one piece is on [whether Claude Cowork is open source](/is-claude-cowork-open-source).

## A ten-minute review you can run on any product that runs agents

A reviewer can put four questions to any product that runs agents, and each one has an answer that can be shown. The fourth decides most of them, because a settings panel cannot write a file.

- **Where permissions are written.** Ask for a permission change as a diff, and ask what an omitted grant resolves to. A screenshot of a settings panel is not a diff, and "the admin decides" is not an answer about a file.
- **What the log is.** Ask for an export the team keeps after the contract ends, carrying the command, the files touched and the time. If the answer is telemetry, ask whether it carries prompt content by default; on Cowork it does not.
- **Who approves an irreversible action, and what the default is.** Ask what state a new workspace starts in, and whether a person or a classifier reviews. Harmonic's note on Anthropic's own telemetry is the reason to ask: people approved roughly 93% of permission prompts, so an approval nobody reads is a formality.
- **What a session can reach.** Ask whether session work can reach the default branch without a person, and what the session can touch on the network. The answer you want is default-deny, with the grant named and the file it lives in. The four-product table runs those questions, and adds two rows a reviewer asks for: self-hosting and model choice.`,
        },
        {
          type: 'comparison',
          heading: {
            title: 'Four products, seven questions',
            sub: 'Kortix is the leading open-source alternative to Claude Cowork and ChatGPT Work, and every rival cell comes from that vendor\'s own pages or documentation in October 2026.',
          },
          columns: [
            { id: 'kortix', label: 'Kortix', highlight: true, href: 'https://kortix.com', nofollow: true },
            { id: 'claude', label: 'Claude, with Cowork inside it', href: 'https://academy.claude.com/tutorials/claude-cowork-enterprise-administrator-guide' },
            { id: 'openwork', label: 'OpenWork', href: 'https://openworklabs.com/enterprise' },
            { id: 'chatgpt-work', label: 'ChatGPT Work', href: 'https://learn.chatgpt.com/docs/get-started-with-work' },
          ],
          rows: [
            {
              label: 'Open source',
              cells: [
                { text: 'Yes, the whole platform', mark: 'yes' },
                { text: 'No', mark: 'no' },
                { text: 'Yes', mark: 'yes' },
                { text: 'No', mark: 'no' },
              ],
            },
            {
              label: 'Session isolation',
              cells: [
                'One isolated sandbox per session',
                "A sandbox on Anthropic's infrastructure, or a local VM",
                "The member's machine; cloud workers optional",
                'A local sandbox or a Work Cloud session',
              ],
            },
            {
              label: 'Where permissions are written',
              cells: [
                'agents/<name>.md, with grants in kortix.yaml',
                'Custom roles and capabilities in the admin console',
                'Agent permissions and MCP tool policy in the organization',
                'A control under the composer; admins set policy in Agent Security',
              ],
            },
            {
              label: 'Who approves an irreversible action',
              cells: [
                'A person merges the change request',
                'A classifier, unless an admin turns automatic approval off',
                'Tool policy per connection, set by the organization',
                'The member, through Ask for approval',
              ],
            },
            {
              label: 'Audit trail',
              cells: [
                'Every action is recorded. Reading, exporting and streaming the audit log depend on the plan',
                'Compliance API transcripts; no Cowork events in the audit log',
                'Every agent action logged and exportable to a SIEM',
                'Compliance API events; not every local action is recorded',
              ],
            },
            {
              label: 'Self-host',
              cells: [
                'Kortix Cloud, your VPC, or on-prem. Free.',
                { text: 'No', mark: 'no' },
                'Self-host or a managed private instance',
                { text: 'No', mark: 'no' },
              ],
            },
            {
              label: 'Model choice',
              cells: [
                'Any model provider, your own keys',
                "Anthropic's models",
                '50+ providers, or local models',
                'The models OpenAI ships',
              ],
            },
          ],
        },
        {
          type: 'artifact',
          heading: { title: "One agent's permission, as a line in its own file" },
          artifact: {
            file: 'agents/kortix.md',
            lang: 'text',
            source: 'https://github.com/kortix-ai/suna/blob/dev/packages/starter/templates/base/agents/kortix.md',
            lines: [
              '---',
              'mode: primary',
              'permission: allow',
              '---',
              'You are a **Kortix general knowledge worker** for **{{projectName}}**.',
            ],
          },
          caption: "The starter agent's frontmatter, and the workspace rule its session runs under.",
        },
        {
          type: 'faq',
          heading: { title: 'Questions a reviewer asks first', sub: 'Short answers, each sourced to the vendor page it came from.' },
          items: [
            {
              id: 'audit-logs',
              question: "Is Claude Cowork activity captured in Anthropic's audit logs?",
              answer:
                'No. Anthropic\'s administrator guide states that "Audit Logs do not cover Claude Cowork yet", and Harmonic reports that the Audit Log CSV export contains no Cowork event types. Enterprise organizations can retrieve session transcripts through the Compliance API instead, from the day it is enabled.',
            },
            {
              id: 'regulated',
              question: 'Is Claude Cowork safe to use in a regulated industry?',
              answer:
                'Only with Enterprise controls in place, and those still leave the audit gap open. There is no audit-log entry for a Cowork action yet, and automatic approval puts a classifier in the reviewer\'s seat. A regulated team needs Compliance API transcripts enabled before rollout, custom roles that scope Cowork per group, and read-only tools wherever a write is not required.',
            },
            {
              id: 'audit-agent',
              question: 'How do I audit what an AI agent did on my machine?',
              answer:
                "From the agent's own log plus your endpoint record, or from the repository if the agent works in one. Ask the product for an export carrying the command, the files touched, the time and the approver. Where it keeps no such log, telemetry into a SIEM gives events, not content.",
            },
            {
              id: 'vs-claude-code',
              question: 'What is the difference between Claude Cowork and Claude Code from a security perspective?',
              answer:
                'Cowork was the same agent architecture pointed at files, browsers and connectors instead of a repository, and since 16 September 2026 those abilities run inside ordinary Claude conversations. Claude Code stays a separate product for developers working against a codebase from a terminal or an IDE.',
            },
            {
              id: 'self-host',
              question: 'Can you self-host Claude Cowork?',
              answer:
                'No. There is no server to install: Cowork is Anthropic\'s hosted service, and the Bedrock, Google Cloud and Foundry routes change who bills the inference, not who operates the software. Kortix is open source, self-hosts on your own network, and self-host is free.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Put the record where you can read it',
          sub: 'Agents, their permissions and the merge gate live in a repo you can clone today.',
          ctas: [TRY_KORTIX, cta('See the self-hosted option', '/self-hosted-ai-agent')],
        },
      ],
    },

  ],
};

export default site;
