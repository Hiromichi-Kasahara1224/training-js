export function sum(array) {
  if (!Array.isArray(array) || array.length === 0) { //arrayがundefined,または配列でない,または長さ0の配列である場合 0 を返す
    return 0;
  }
  return array.reduce((x, y) => x + y, 0);　//配列の要素をすべて足し合わせたものを返す 初期値は0
}

export function join(array, separator = ",") {  //デフォルトのseparatorはカンマ
  if (!Array.isArray(array)) {   //arrayがundefined,または配列でない場合エラー
    throw new Error("Input must be an array");
  }
  return array.reduce(
    (x, y, i) => x + (i === 0 ? "" : separator) + (y ?? ""),    // x: これまでの累積結果, y: 現在の要素, i: 現在のインデックス
    // 最初の要素の前にはseparatorを追加しない
    // yがnullやundefinedのときは""に変換する
    "" // 初期値は空文字列
  );
}

export function reverse(array) {
  if (!Array.isArray(array)) {   //arrayがundefined,または配列でない場合エラー
    throw new Error("Input is not array.");
  }
  // これまでの結果xの前に配列の要素yを順に挿入する
  return array.reduce((x, y) => [y, ...x], []); // x: これまでの累積結果, y: 現在の要素, ...x: xのコピー, 初期値は0
}

export function every(array, func) {
  if (!Array.isArray(array)) {   //第一引数arrayがundefined,または配列でない場合エラー
    throw new Error("Input is not array.");
  }
  if (typeof func !== "function") {    //第二引数funcが関数でない場合エラー
    throw new Error("Input is not function");
  }
  return array.reduce((x, y, index, arr) => func(y, index, arr) && x, true);
} // x: これまでの結果, y: 現在の要素, index: 現在のインデックス, arr: 元の配列(array), 初期値はtrue

export function some(array, func) {
  if (!Array.isArray(array)) {   //第一引数arrayがundefined,または配列でない場合エラー
    throw new Error("Input is not array.");
  }
  if (typeof func !== "function") {    //第二引数funcが関数でない場合エラー
    throw new Error("Input is not function");
  }
  return array.reduce((x, y, index, arr) => func(y, index, arr) || x, false);
} // x: これまでの結果, y: 現在の要素, index: 現在のインデックス, arr: 元の配列(array), 初期値はtrue