export function pop(array) {
  return array.slice(0, -1);  // 末尾を除いた配列のコピーを返す
}

export function push(array, num) {
  return [...array, num];  // 配列の末尾にnumを追加して返す
}

export function shift(array) {
  return array.slice(1);  // 先頭を除いた配列のコピーを返す
}

export function unshift(array, num) {
  return [num, ...array];  // 配列の先頭にnumを追加して返す
}

export function sort(array, func) {
  return [...array].sort(func);  // コピーした配列に対してsort()して返す
}

const seq = [1, 2, 3, 4, 5];

console.log(pop(seq)); // [1, 2, 3, 4]
console.log(push(seq, 6)); // [1, 2, 3, 4, 5, 6]
console.log(shift(seq)); // [2, 3, 4, 5]
console.log(unshift(seq, 0)); // [0, 1, 2, 3, 4, 5]
console.log(sort(seq, (a, b) => b - a)); // [5, 4, 3, 2, 1]

// 元の配列は変更されていない
console.log(seq); // [1, 2, 3, 4, 5]

console.log(seq.pop()); // [1, 2, 3, 4]
