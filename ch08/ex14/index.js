// 残余パラメータとして任意の数の関数を受け取り、いずれかの関数が true を返せば true を返す新たな関数を返すany 関数
export function any(...func) {
  return function(value) {
    return func.some(fn => fn(value)); // some メソッドは、配列の要素のうち、少なくとも1つが条件を満たす場合に true を返す
  };
}

// 実行
const isNonZero = any(
  (n) => n > 0,
  (n) => n < 0
);

console.log(isNonZero(0));     // => false
console.log(isNonZero(42));    // => true
console.log(isNonZero(-0.5));  // => true

// 引数として 2 つの関数を受け取り、1つ目の関数で発生した例外を 2つ目の関数の引数として処理し結果を返す新たな関数を返すcatching 関数
export function catching(tryFn, catchFn) {
  return function(...args) {
    try {
      return tryFn(...args);
    } catch (e) {
      return catchFn(e); // 1つ目の関数で発生した例外を引数とする
    }
  };
}

// 実行
const safeJsonParse = catching(JSON.parse, (e) => {
  return { error: e.toString() };
});

console.log(safeJsonParse('{"a": 1}'));        // => { a: 1 }
console.log(safeJsonParse("{Invalid Json}"));  // => { error: "SyntaxError: ..." }
