//予想
//undefined -> undefined
//null -> object
//オブジェクト -> object
//NaN -> number
//数値 -> number
//関数 -> object

console.log(typeof undefined); // "undefined" //typeofは値の型を返す単項演算子 ()はつけない
console.log(typeof null); // "object"
console.log(typeof {}); // "object"
console.log(typeof NaN); // "number"
console.log(typeof 123); // "number"
console.log(typeof function () {}); // "function"
