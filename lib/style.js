// Parses a CSS declaration string ("color:#fff; padding:4px 8px") into a
// React style object. Paren-aware so gradients / url() values stay intact.
export function s(css) {
  if (!css) return {};
  const out = {};
  let depth = 0;
  let buf = '';
  const decls = [];
  for (const ch of css) {
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    if (ch === ';' && depth === 0) {
      decls.push(buf);
      buf = '';
    } else {
      buf += ch;
    }
  }
  if (buf.trim()) decls.push(buf);

  for (const decl of decls) {
    const d = decl.trim();
    if (!d) continue;
    const i = d.indexOf(':');
    if (i < 0) continue;
    const prop = d.slice(0, i).trim();
    const val = d.slice(i + 1).trim();
    // -webkit-foo -> WebkitFoo ; foo-bar -> fooBar
    const key = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[key] = val;
  }
  return out;
}
