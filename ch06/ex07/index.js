export function assign(target, ...sources) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  const result = Object(target); // targetがオブジェクトでない場合のため、オブジェクトに変換

  for (const source of sources) {
    if (source != null) {
      // 列挙可能な文字列プロパティと列挙可能なシンボルプロパティを取得
      for (const key of [
        ...Object.keys(source),  // source の列挙可能な文字列プロパティを取得
        ...Object.getOwnPropertySymbols(source).filter((sym) =>  // source のすべての Symbol プロパティを取得
          Object.prototype.propertyIsEnumerable.call(source, sym) // 列挙可能な Symbol プロパティのみをフィルタリング
        ),
      ]) {
        result[key] = source[key]; // 取得したプロパティを result にコピー
      }
    }
  }
  return result;
}
