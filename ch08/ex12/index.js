export function f(expr) {
  const args = Array.from({ length: 10 }, (_, i) => `a${i + 1}`);  // a1, a2, ..., a10
  const replaced = expr.replace(/\$([1-9]|10)/g, (_, n) => `a${n}`);

  // 複数行やブロック式かどうかを判定
  const isBlock = replaced.trim().startsWith("{");

  const body = isBlock ? replaced : `return ${replaced};`; // isBlockがtrueならそのまま、falseならreturn

  return new Function(...args, body);
}