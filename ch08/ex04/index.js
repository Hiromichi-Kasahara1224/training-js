const obj = {
  om: function () {
    const nest = {
      nm: function () { //通常の関数
        console.log(this === obj, this === nest); // 通常の関数では呼び出し元のオブジェクト nest が this になる
      },
      arrow: () => {  //アロー関数
        console.log(this === obj, this === nest); // アロー関数は自身のthisを持たず、外側のスコープからthisを継承するため、obj が this になる
      },
    };
    nest.nm();
    nest.arrow();
  },
};
obj.om();

// 実行結果
// false true
// true false