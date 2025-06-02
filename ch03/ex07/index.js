export function equalArrays(a, b) {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

const A = "A\uFE0E"; // 'A' + Variation Selector-15（テキスト表示）
const B = "A\uFE0F"; // 'A' + Variation Selector-16（絵文字表示）

console.log(A); // 見た目は "A"
console.log(B); // 見た目も "A"（環境によっては違う）
console.log(A.length, B.length); // 2 2
console.log(A === B); // false
