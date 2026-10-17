/**
 * Test fixture, not a site: every section type the starter has, in a different order from
 * site.config.ts, with a different accent, the system font stack and the calculator widget.
 * Build it without touching site.config.ts:
 *
 *   SITE_CONFIG=examples/kitchen-sink.config.ts npm run build
 *
 * Sample data in the use-case artifacts is a fictional company's (Acme, Northwind), as claims.md
 * asks. The calculator's "your current tool" price is a number the reader types.
 */
import type { SiteConfig } from '../src/config/types';

const TRY = { label: 'Try Kortix', href: 'https://kortix.com', nofollow: true, variant: 'primary' as const };

const site: SiteConfig = {
  domain: 'kitchen-sink.test',
  siteName: 'Starter Fixture',
  description: 'A fixture that renders every section type of the keyword site starter.',
  updated: '2026-10-09',
  lang: 'en',
  accent: '#0f766e',
  fonts: 'system',
  mark: { path: 'M4 4h16v16H4Zm3 3v10h10V7Z' },
  headerCta: TRY,
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Guide', href: '/guide' },
  ],
  footer: {
    blurb: 'Fixture footer.',
    columns: [{ title: 'Pages', links: [{ label: 'Home', href: '/' }, { label: 'Guide', href: '/guide' }] }],
    legal: 'Fixture. Not a real site.',
  },
  pages: [
    {
      slug: '',
      title: 'Open Source Fixture Home',
      metaDescription: 'Every section type of the starter on one page, for visual checks.',
      h1: 'An open-source fixture for every section',
      lead: 'The leading open-source alternative to Claude Cowork and ChatGPT Work, rendered by every section type this starter ships.',
      sections: [
        {
          type: 'hero',
          eyebrow: {
            lead: 'The leading open-source alternative to',
            rivals: [
              { label: 'Claude Cowork', glyph: 'claude' },
              { label: 'ChatGPT Work', glyph: 'openai' },
            ],
          },
          ctas: [TRY, { label: 'Read the guide', href: '/guide', variant: 'secondary' }],
          artifacts: [
            {
              file: 'kortix.yaml',
              lang: 'yaml',
              lines: ['# kortix.yaml', 'triggers:', '  - slug: daily-digest', '    type: cron', "    cron: '0 0 9 * * 1-5'"],
              source: 'README.md in https://github.com/kortix-ai/suna',
            },
            {
              file: 'terminal',
              lang: 'sh',
              lines: ['$ curl -fsSL https://kortix.com/install | bash', '$ kortix init', '$ kortix ship'],
              copyText: 'curl -fsSL https://kortix.com/install | bash\nkortix init\nkortix ship\n',
            },
          ],
          trust: 'Open source · Any model, your keys · Self-host, VPC, or on-prem',
        },
        {
          type: 'use-cases',
          id: 'use-cases',
          heading: { eyebrow: 'By role', title: 'Work from every team, as artifacts you can read.' },
          artifactLabel: 'Output',
          cards: [
            {
              id: 'engineering',
              tag: 'Engineering',
              headline: 'Reads the logs, ships the fix.',
              body: 'It reproduces the worst error on its own machine, patches it and opens a change request.',
              artifact: {
                kind: 'diff',
                file: 'fix-checkout-expiry.diff',
                lines: [' app/checkout/charge.ts', '-if (card.expMonth < now.getMonth()) {', '+if (isExpired(card, now)) {', ' }'],
                stat: '+1 −1',
                footer: '9 error groups · top one fixed',
              },
            },
            {
              id: 'finance',
              tag: 'Finance',
              headline: 'Does the books, not just the summary.',
              body: 'It reconciles the ledger against the bank and explains the variance.',
              artifact: {
                kind: 'sheet',
                file: 'finance/acme-budget.xlsx',
                columns: ['Center', 'Plan', 'Actual'],
                widths: ['40%', '30%', '30%'],
                aligns: ['left', 'right', 'right'],
                rows: [
                  { cells: ['Platform', '1,225', '1,182'], tone: 'up' },
                  { cells: ['Security', '180', '198'], tone: 'down' },
                  { cells: ['Total', '1,405', '1,380'], total: true },
                ],
                footer: '1 center over plan',
              },
            },
            {
              id: 'product',
              tag: 'Product',
              headline: 'Turns feedback into themes.',
              body: 'It groups what Northwind customers said into themes you can act on.',
              artifact: {
                kind: 'checks',
                file: 'product/feedback.md',
                items: [
                  { label: 'Export times out', value: '14', tone: 'down' },
                  { label: 'Wants CSV', value: '9', tone: 'warn' },
                  { label: 'Onboarding praised', value: '12', tone: 'up' },
                ],
                footer: '3 themes',
              },
            },
            {
              id: 'marketing',
              tag: 'Marketing',
              headline: 'Runs the SEO program.',
              body: 'It finds the pages losing ground and opens each rewrite as a change request.',
              artifact: {
                kind: 'checks',
                file: 'marketing/seo-weekly.md',
                items: [
                  { label: '/guides/payouts', value: '+7', tone: 'up' },
                  { label: '/guides/bank-feed', value: '−2', tone: 'down' },
                ],
                footer: '2 rewrites in a change request',
              },
            },
          ],
        },
        {
          type: 'code-panels',
          heading: { eyebrow: 'Quickstart', title: 'Three commands.' },
          panels: [
            {
              tab: 'CLI',
              file: 'terminal',
              lang: 'sh',
              lines: ['$ curl -fsSL https://kortix.com/install | bash', '$ kortix init', '$ kortix ship'],
              copyText: 'curl -fsSL https://kortix.com/install | bash\nkortix init\nkortix ship\n',
              link: { label: 'CLI reference', href: 'https://kortix.com/docs/cli', nofollow: true },
            },
            {
              tab: 'Self-host',
              file: 'terminal',
              lang: 'sh',
              lines: ['$ kortix self-host init --domain kortix.example.com', '$ kortix self-host start'],
            },
          ],
        },
        {
          type: 'widget',
          heading: { eyebrow: 'Cost', title: 'What a team pays per month.', sub: 'Type your current price per seat.' },
          widget: {
            variant: 'calculator',
            currency: '$',
            seats: { label: 'Seats', min: 1, max: 200, default: 25 },
            periodLabel: '/mo',
            options: [
              { id: 'current', label: 'Your current tool', perSeat: 30, editable: true },
              { id: 'kortix-credits', label: 'Kortix Cloud', perSeat: 0, flat: 50, note: 'Members are free; paid plans start at $50 a month for 5,000 credits in one shared pool', highlight: true },
              { id: 'kortix-self', label: 'Kortix self-hosted', perSeat: 0, note: 'Self-host is free. You pay your own model and compute bills.' },
            ],
            footnote: 'Kortix prices from its pricing page. Usage beyond the plan\'s credits is extra.',
          },
        },
        {
          type: 'trust',
          heading: { eyebrow: 'Security', title: 'Built to survive a security review, not slip past one.' },
          cta: { label: 'Read the security page', href: 'https://kortix.com/security', nofollow: true },
          seals: [
            { line1: 'SOC 2', line2: 'Type I' },
            { line1: 'SOC 2', line2: 'Type II', state: 'In progress' },
            { line1: 'GDPR' },
          ],
        },
        {
          type: 'cta',
          title: 'Run your whole company from one repo you own.',
          ctas: [TRY],
        },
      ],
    },
    {
      slug: 'guide',
      title: 'Open Source Fixture Guide',
      metaDescription: 'A prose page with an artifact, for visual checks.',
      h1: 'An open-source guide page',
      lead: 'Prose first, then an artifact.',
      sections: [
        {
          type: 'prose',
          body: '## A heading\n\nA paragraph with `code`, **bold** and a [link](https://kortix.com/docs).\n\n1. One\n2. Two\n\n```yaml\nagents:\n  kortix:\n    file: agents/kortix.md\n```',
        },
        {
          type: 'artifact',
          heading: { title: 'A diff' },
          artifact: { file: 'change.diff', lang: 'diff', lines: [' agents:', '-  connectors: all', '+  connectors: [github]'] },
        },
      ],
    },
  ],
};

export default site;
