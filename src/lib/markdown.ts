/**
 * A small markdown subset for config copy. No dependency: the site only needs what a prose
 * section or an answer carries.
 *
 * Blocks: `## h2`, `### h3`, paragraphs, `- ` lists, `1. ` lists, ``` fences.
 * Inline: **bold**, `code`, [text](url).
 */

export type Inline =
  | { kind: 'text'; text: string }
  | { kind: 'strong'; text: string }
  | { kind: 'code'; text: string }
  | { kind: 'link'; text: string; href: string };

export type Block =
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'p'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'ol'; items: string[] }
  | { kind: 'code'; lang: string; lines: string[] };

const INLINE = /(\*\*[^*]+\*\*)|(`[^`]+`)|(\[[^\]]+\]\([^)\s]+\))/g;

export function parseInline(text: string): Inline[] {
  const out: Inline[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE)) {
    const at = m.index ?? 0;
    if (at > last) out.push({ kind: 'text', text: text.slice(last, at) });
    const raw = m[0];
    if (m[1]) out.push({ kind: 'strong', text: raw.slice(2, -2) });
    else if (m[2]) out.push({ kind: 'code', text: raw.slice(1, -1) });
    else {
      const [, label, href] = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(raw) ?? [];
      out.push({ kind: 'link', text: label ?? raw, href: href ?? '#' });
    }
    last = at + raw.length;
  }
  if (last < text.length) out.push({ kind: 'text', text: text.slice(last) });
  return out;
}

/** Plain text of an inline string: markup stripped, link labels kept. */
export function inlineToPlain(text: string): string {
  return parseInline(text)
    .map((t) => t.text)
    .join('');
}

export function parseBlocks(body: string): Block[] {
  const lines = body.replace(/\r\n/g, '\n').split('\n');
  const blocks: Block[] = [];
  let para: string[] = [];
  let list: { kind: 'ul' | 'ol'; items: string[] } | null = null;

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
    if (/^\s*$/.test(line)) {
      flush();
      continue;
    }
    const h = /^(#{2,3})\s+(.*)$/.exec(line);
    if (h) {
      flush();
      blocks.push({ kind: h[1]!.length === 2 ? 'h2' : 'h3', text: h[2]!.trim() });
      continue;
    }
    const ul = /^\s*[-*]\s+(.*)$/.exec(line);
    const ol = /^\s*\d+\.\s+(.*)$/.exec(line);
    if (ul || ol) {
      const kind = ul ? 'ul' : 'ol';
      if (para.length) {
        blocks.push({ kind: 'p', text: para.join(' ') });
        para = [];
      }
      if (!list || list.kind !== kind) {
        if (list) blocks.push(list);
        list = { kind, items: [] };
      }
      list.items.push((ul ?? ol)![1]!.trim());
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
