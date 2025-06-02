const obj1 = { x: 1 };
// 問題: ここに1行コードを書くことで以下の行で {x: 1, y: 2} が出力されること
obj1.y = 2;
console.log(obj1);

const obj2 = { x: 1, y: 2 };
// 問題: 以下の行では何が出力されるか、予想してから結果を確認しなさい
console.log(obj1 === obj2); //false

export function equals(o1, o2) {
  if (o1 === o2) return true;
  if (
    o1 === null ||
    o2 === null ||
    typeof o1 !== "object" ||
    typeof o2 !== "object"
  )
    return false;

  const keys1 = Object.keys(o1); // o1 のプロパティ名を取得
  const keys2 = Object.keys(o2); // o2 のプロパティ名を取得

  if (keys1.length !== keys2.length) return false; // プロパティの個数を比較
  for (const key of keys1) {
    if (keys2.includes(key) === false) return false; // プロパティ名（キー）を比較
  }

  for (const key of keys1) {
    if (equals(o1[key], o2[key]) === false) return false; // equal関数を再帰的に使用し、各プロパティの値を比較
    // 理由：o1 のプロパティにオブジェクトや配列が含まれている場合にも対応するため
  }

  // すべてのプロパティが一致する場合は true を返す
  return true;
}
