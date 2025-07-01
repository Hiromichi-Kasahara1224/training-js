/* eslint-disable */
for (i = 0; i < 10; i++) {
  (function () {
    i = 100;
  })();
  console.log(i);
}
console.log(i);

// 関数が最初に実行され,100が出力される。
// その後、i++ により101が出力される
