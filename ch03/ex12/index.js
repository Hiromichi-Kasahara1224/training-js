class Example {
  valueOf() {
    return 42;
  }

  toString() {
    return "Example";
  }
}

let obj = new Example();

console.log(obj); // オブジェクトの参照を表示。valueOf()やtoString()は呼び出されない。

console.log(obj + 0); // obj + 0 のような数値演算ではvalueOf()を暗黙的に呼び出す。
console.log(obj.valueOf()); // 明示的にvalueOf()を呼び出す。

console.log(String(obj)); // String(obj)はtoString()を呼び出す。
console.log(`${obj}`); // テンプレートリテラルはtoString()を呼び出す。` はバッククォート。
console.log(obj.toString()); // 明示的にtoString()を呼び出す。

console.log(obj + ""); // valueOf()を優先して呼び出し、結果がプリミティブ値（数値や文字列など）でなければ toString() を呼び出す。

console.log("${obj}"); // シングルクォートはやダブルクォートはテンプレートリテラルではないため、変数objはそのまま文字列として扱われる。
