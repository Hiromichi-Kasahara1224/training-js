//以下の関数を繰り返し (for, while) や条件分岐 (if) を利用せず map, filter, reduce, forEach 等のメソッドを利用して書き直しなさい。

function fizzbuzz_after(n) {
  // 1~nの配列を作成(Array.from()の第一引数で配列のサイズを指定、第二引数でインデックスを配列の値として格納)
  const array = Array.from({ length: n }, (_, i) => i + 1);  //かなり特殊な書き方
  const array = Array(n).fill().map((_, i) => i + 1); //こんな書き方もある
  const array = [...Array(n)].map((_, i) => i + 1); //こんな書き方もある

  // map()を使ってfizzbuzzを実行した配列newArrayを作成
  const newArray = array.map(
    (i) =>
      (i % 15 === 0 && "FizzBuzz") ||   // &&: 左辺が真なら右辺を返す　||: 左辺が偽なら右辺を返す
      (i % 3 === 0 && "Fizz") ||
      (i % 5 === 0 && "Buzz") ||
      i
  );

  newArray.forEach((x) => console.log(x));  // forEach()を使って各要素を出力
}

function sumOfSquaredDifference_after(f, g) {
  const result = f
    .map((value, index) => (value - g[index]) ** 2) // map()メソッドで各要素の差の二乗を計算  // value: 現在の要素  index: 現在のインデックス
    .reduce((sum, squaredDiff) => sum + squaredDiff, 0); // reduce()メソッドで合計を計算 (初期値は0)
  return result;
}

function sumOfEvensIsLargerThan42_after(array) {
  const sum = array
    .filter(x => x % 2 === 0)  // filter()メソッドで偶数だけを抽出
    .reduce((x, y) => x + y, 0);  //reduce()メソッドで合計を計算 (初期値は0)
  return sum >= 42;
}

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function sumOfSquaredDifference(f, g) {
  let result = 0;
  for (let i = 0; i < f.length; i++) {
    result += (f[i] - g[i]) ** 2;
  }
  return result;
}

function sumOfEvensIsLargerThan42(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      continue;
    }
    sum += array[i];
  }
  return sum >= 42;
}
