/**
 * The postbuild colour check reads CSS: stylesheets, <style> blocks, style="" and SVG paint
 * attributes. Page text is copy, not colour: an issue number such as "#142" in an artifact
 * line must not fail the build (agency run, 2026-10-10).
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { colorLiteralsIn } from './color-literals';

const ACCENT = '#0d7a4f';

test('a hex in page text is copy, not a colour', () => {
  const html = '<main><pre><code>fix(auth): close #142 and #abc</code></pre><p>Issue #deadbeef</p></main>';
  assert.deepEqual(colorLiteralsIn(html, 'html', ACCENT), []);
});

test('colours in <style>, style="" and SVG paint attributes are caught', () => {
  const html =
    '<style>.a{color:#ff0000}</style><div style="background: rgb(1,2,3)"></div>' +
    '<svg><path fill="#00ff00" stroke="hsl(1 2% 3%)"/></svg>';
  const hits = colorLiteralsIn(html, 'html', ACCENT);
  assert.equal(hits.length, 4, hits.join('\n'));
});

test('the accent override, in-page anchors and scripts are allowed', () => {
  const html =
    `<style>:root{--kortix-base:${ACCENT};--ring:${ACCENT}}</style>` +
    '<a href="#faq">FAQ</a><script>self.__next_f.push(["#123456"])</script>';
  assert.deepEqual(colorLiteralsIn(html, 'html', ACCENT), []);
});

test('a stylesheet is checked whole, minus the Tailwind feature query', () => {
  const css = '@supports (not (color:rgb(from red r g b))){.x{color:var(--a)}} .y{border-color:#0000}';
  const hits = colorLiteralsIn(css, 'css', ACCENT);
  assert.equal(hits.length, 1, hits.join('\n'));
  assert.match(hits[0], /#0000/);
});
