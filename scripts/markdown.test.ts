/**
 * A writer's numbered list with a blank line between items rendered as one <ol> per item, each
 * numbered "1." (styling audit, 2026-10-16). A loose list stays one list.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { parseBlocks } from '../src/lib/markdown';

test('a loose numbered list is one list', () => {
  const blocks = parseBlocks('Steps:\n\n1. Install\n\n2. Scaffold\n\n3. Ship\n');
  assert.deepEqual(blocks, [
    { kind: 'p', text: 'Steps:' },
    { kind: 'ol', items: ['Install', 'Scaffold', 'Ship'] },
  ]);
});

test('a list resumed after a paragraph keeps its numbering', () => {
  const blocks = parseBlocks('1. One\n2. Two\n\nA note.\n\n3. Three\n');
  assert.deepEqual(blocks, [
    { kind: 'ol', items: ['One', 'Two'] },
    { kind: 'p', text: 'A note.' },
    { kind: 'ol', items: ['Three'], start: 3 },
  ]);
});

test('a paragraph after a list ends it', () => {
  const blocks = parseBlocks('- a\n- b\n\nAfter.\n');
  assert.deepEqual(blocks, [
    { kind: 'ul', items: ['a', 'b'] },
    { kind: 'p', text: 'After.' },
  ]);
});
