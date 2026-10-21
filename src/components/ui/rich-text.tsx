/**
 * The handbook's text renderer. Inline markup (**bold**, `code`, [links](url)) via the shared
 * parser, plus a small block parser of my own that adds two things the copy sheets use: ``` fences
 * (rendered through the exhibit plate) and `|`-tables (rendered as hairline tables, e.g. the
 * Windows client facts). Headings are h2/h3 so every page keeps one h1.
 *
 * Inline code renders at the surrounding size (no 0.9em shrink), so nothing falls under the
 * 13px marketing floor inside a comparison cell or a caption.
 */
import type { ReactNode } from 'react';
import { CodeBlock } from '@/components/ui/code-block';
import { parseInline } from '@/lib/markdown';
import { cn } from '@/lib/utils';

const EXTERNAL = /^https?:\/\//;

export function Inline({ text }: { text: string }): ReactNode {
  return parseInline(text).map((t, i) => {
    switch (t.kind) {
      case 'text':
        return t.text;
      case 'strong':
        return (
          <strong key={i} className="text-foreground-strong font-medium">
            {t.text}
          </strong>
        );
      case 'code':
        return (
          <code key={i} className="bg-muted text-foreground rounded-sm px-1 py-0.5">
            {t.text}
          </code>
        );
      case 'link':
        return (
          <a
            key={i}
            href={t.href}
            rel={EXTERNAL.test(t.href) ? 'nofollow noopener' : undefined}
            className="text-foreground decoration-kortix-base-ink hover:decoration-foreground underline decoration-1 underline-offset-4 transition-colors duration-fast"
          >
            {t.text}
          </a>
        );
    }
  });
}

type Block =
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'p'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'ol'; items: string[]; start?: number }
  | { kind: 'code'; lang: string; lines: string[] }
  | { kind: 'table'; head: string[]; rows: string[][] };

const isTableRow = (line: string) => /^\s*\|.*\|\s*$/.test(line);
const cellsOf = (line: string) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim());
const isDivider = (line: string) => /^\s*\|?[\s:|-]+\|?\s*$/.test(line) && /-/.test(line);

function parseBlocks(body: string): Block[] {
  const lines = body.replace(/\r\n/g, '\n').split('\n');
  const blocks: Block[] = [];
  let para: string[] = [];
  let list: { kind: 'ul' | 'ol'; items: string[]; start?: number } | null = null;

  const flush = () => {
    if (para.length) blocks.push({ kind: 'p', text: para.join(' ') });
    para = [];
    if (list) blocks.push(list);
    list = null;
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]!;
    const fence = /^```(\w*)\s*$/.exec(line);
    if (fence) {
      flush();
      const code: string[] = [];
      i += 1;
      while (i < lines.length && !/^```\s*$/.test(lines[i]!)) code.push(lines[i++]!);
      blocks.push({ kind: 'code', lang: fence[1] || 'text', lines: code });
      continue;
    }
    if (isTableRow(line) && isDivider(lines[i + 1] ?? '')) {
      flush();
      const head = cellsOf(line);
      const rows: string[][] = [];
      i += 2;
      while (i < lines.length && isTableRow(lines[i]!)) rows.push(cellsOf(lines[i++]!));
      i -= 1;
      blocks.push({ kind: 'table', head, rows });
      continue;
    }
    if (/^\s*$/.test(line)) {
      if (para.length) blocks.push({ kind: 'p', text: para.join(' ') });
      para = [];
      continue;
    }
    const h = /^(#{2,3})\s+(.*)$/.exec(line);
    if (h) {
      flush();
      blocks.push({ kind: h[1]!.length === 2 ? 'h2' : 'h3', text: h[2]!.trim() });
      continue;
    }
    const ul = /^\s*[-*]\s+(.*)$/.exec(line);
    const ol = /^\s*(\d+)\.\s+(.*)$/.exec(line);
    if (ul || ol) {
      const kind = ul ? 'ul' : 'ol';
      if (para.length) {
        blocks.push({ kind: 'p', text: para.join(' ') });
        para = [];
      }
      if (!list || list.kind !== kind) {
        if (list) blocks.push(list);
        const start = ol ? Number(ol[1]) : 1;
        list = start === 1 ? { kind, items: [] } : { kind, items: [], start };
      }
      list.items.push((ul ? ul[1] : ol![2])!.trim());
      continue;
    }
    if (list) {
      blocks.push(list);
      list = null;
    }
    para.push(line.trim());
  }
  flush();
  return blocks;
}

/** Long-form prose on the handbook's reading measure. */
export function Prose({ body, className }: { body: string; className?: string }) {
  const blocks = parseBlocks(body);
  return (
    <div className={cn('w-full max-w-2xl', className)}>
      {blocks.map((b, i) => {
        const first = i === 0;
        switch (b.kind) {
          case 'h2':
            return (
              <h2
                key={i}
                className={cn('text-foreground-strong text-2xl tracking-tight text-balance sm:text-3xl', first ? '' : 'mt-12')}
              >
                <Inline text={b.text} />
              </h2>
            );
          case 'h3':
            return (
              <h3 key={i} className={cn('text-foreground-strong text-lg text-balance', first ? '' : 'mt-8')}>
                <Inline text={b.text} />
              </h3>
            );
          case 'p':
            return (
              <p key={i} className={cn('text-muted-foreground text-base leading-relaxed text-pretty', first ? '' : 'mt-4')}>
                <Inline text={b.text} />
              </p>
            );
          case 'ul':
          case 'ol': {
            const List = b.kind === 'ul' ? 'ul' : 'ol';
            return (
              <List
                key={i}
                start={b.kind === 'ol' ? b.start : undefined}
                className={cn(
                  'text-muted-foreground mt-4 space-y-2 pl-5 text-base leading-relaxed',
                  b.kind === 'ul' ? 'marker:text-kortix-base-ink list-disc' : 'marker:text-muted-foreground list-decimal',
                )}
              >
                {b.items.map((item, j) => (
                  <li key={j} className="pl-1 text-pretty">
                    <Inline text={item} />
                  </li>
                ))}
              </List>
            );
          }
          case 'code':
            return (
              <div key={i} className={cn('w-full max-w-3xl', first ? '' : 'mt-6')}>
                <CodeBlock
                  artifact={{
                    /* A prose fence carries a language, not a file name, so the plate has no
                       caption bar rather than a leaked `text` or `sh` label. */
                    file: '',
                    lang: b.lang === 'yaml' || b.lang === 'sh' || b.lang === 'ts' ? b.lang : 'text',
                    lines: b.lines,
                  }}
                />
              </div>
            );
          case 'table':
            return (
              <div key={i} className={cn('w-full max-w-3xl overflow-x-auto', first ? '' : 'mt-6')}>
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr>
                      {b.head.map((h) => (
                        <th key={h} scope="col" className="border-border text-foreground-strong border-b py-2 pr-4 font-medium">
                          <Inline text={h} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c} className="border-border text-muted-foreground border-b py-2 pr-4 leading-relaxed align-top">
                            <Inline text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
