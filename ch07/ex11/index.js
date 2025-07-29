// 7.10 で作成した動的配列の push の平均時間計算量を説明しなさい。またその結果を用いて以下の関数 copyA と copyB に対し、array.length を n とした時の時間計算量を求めなさい。

function copyA(array) {
  const result = Array(array.length);  // 同じ長さの空の配列を作成: O(1)
  for (let i = 0; i < array.length; i++) { // 各要素を順にコピー: O(n)
    result[i] = array[i];  // 各要素をコピー: O(1)
  }
  return result;
}

// NOTE: copyB よりも copyA の方が効率的に見えるが計算量の観点ではどうだろうか
function copyB(array) {
  const result = [];  // 空の配列を作成: O(1)
  for (const v of array) {  // 各要素を順にコピー: O(n)
    result.push(v);  // 各要素を追加: O(1) 平均
  }
  return result;
}
