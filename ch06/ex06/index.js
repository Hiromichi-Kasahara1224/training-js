export function getPropertyNames(obj) {
  const result = [];

  // 独自プロパティ（列挙不可含む、Symbol含む）
  const ownKeys = [
    ...Object.getOwnPropertyNames(obj),  // 文字列のプロパティ名を取得 (列挙不可含む) //スプレッド演算子を使用
    ...Object.getOwnPropertySymbols(obj) // Symbolのプロパティ名を取得
  ];
  result.push(...ownKeys); //...はスプレッド 配列の要素を個別に result に追加できる

  // 列挙可能な継承プロパティ（Symbolは除外）
  let proto = Object.getPrototypeOf(obj);  //プロトタイプを取得
  while (proto && proto !== Object.prototype) {  //Object.prototypeにたどり着くまでループ
    for (let key in proto) {  //列挙可能なプロパティのみ対象
      if (!obj.hasOwnProperty(key)) {  // objの独自プロパティに含まれてない場合
        result.push(key);
      }
    }
    proto = Object.getPrototypeOf(proto);  //次のプロトタイプへ
  }
  return result;
}
