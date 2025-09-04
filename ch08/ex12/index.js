export function f(expr) {
  const args = Array.from({ length: 10 }, (_, i) => `a${i + 1}`);    // ['a1', 'a2', ..., 'a10']の配列を作成

  const replaced = expr.replace(/\$([1-9]|10)/g, (_, n) => `a${n}`); // $1, $2, ..., $10をa1, a2, ..., a10に置換
                                                                     // $の後に1-9または10が続くパターンを正規表現でマッチさせる
                                                                     // /gはグローバルマッチを意味し、文字列全体でマッチを探す
                                                                     // nはキャプチャグループにマッチした部分（1-9または10）を表す
                                                                     // `a${n}`はテンプレートリテラルで、nの値を使ってa1, a2, ..., a10を生成

  let body; // 関数の本体部分

  // 式が { で始まっていればブロック式とみなす
  if (replaced.trim().startsWith("{")) {
    body = replaced;              // body = '{ const result = a1 + a2;\n return result; }' のようになる
  } else {
    body = `return ${replaced};`; // body = 'return a1 + a2;' のようになる
  }

  return new Function(...args, body); // args= ['a1'...,'a10'] だが、関数の中で使われない引数は無視される
}

//export function f(expr) {
//  const args = Array.from({ length: 10 }, (_, i) => `a${i + 1}`);  // a1, a2, ..., a10
//  const replaced = expr.replace(/\$([1-9]|10)/g, (_, n) => `a${n}`);
//
//  // 複数行やブロック式かどうかを判定
//  const isBlock = replaced.trim().startsWith("{");
//
//  const body = isBlock ? replaced : `return ${replaced};`; // isBlockがtrueならそのまま、falseならreturn
//
//  return new Function(...args, body);
//}