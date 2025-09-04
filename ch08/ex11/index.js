// 組み込み関数
console.log(Math.max.toString());

// 自作関数
function myFunc(a, b) {
  return a + b;
}
console.log(myFunc.toString());


//実行結果
// console.log(Math.max.toString());
// -> function max() { [native code] }

// console.log(myFunc.toString());
// -> function myFunc(a, b) {
// ->   return a + b;
// -> }
