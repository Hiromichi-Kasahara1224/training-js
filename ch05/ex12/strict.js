obj = { a: 3, b: 4 }; //objを宣言していない
with (obj) {
  //with文はstrictモードでは使えない
  a = b;
}

console.log({ obj });
