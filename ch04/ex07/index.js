// このような関数は絶対に書いてはならない。
function set42(key) {
  eval(`${key} = 42;`);
}

// 例:
//set42("hello");
//console.log(hello); // 42

set42(`
(() => {
  let i = 0;
  while (i < 50) { //tureにすると無限ループ
    console.log("ループ" + i);
    i++;
  }
})()
`);

// 即時実行関数などで無限ループを与えるとシステムに負荷を与えることができる。
