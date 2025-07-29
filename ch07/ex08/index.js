export function reverse(str) {
  // 書記素単位で文字列を分割するセグメンターを作成
  // undefined:言語 (undefinedでデフォルトを使用)
  // granularity: 分割の粒度 "grapheme"は書記素単位(視角上の1文字)で分割することを指定
  const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });

  // Intl.Segmenter の segment()メソッドでstrを書記素単位に分割し、イテレータを返す
  // (s) => s.segment で イテレータから書記素を取り出し、Array.from()で配列に変換
  const graphemes = Array.from(segmenter.segment(str), (s) => s.segment);

  // 配列を反転させて、結合して返す
  return graphemes.reverse().join("");
}
