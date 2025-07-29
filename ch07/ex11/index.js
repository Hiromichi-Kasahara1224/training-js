// 7.10 で作成した動的配列の push の平均時間計算量を説明しなさい。またその結果を用いて以下の関数 copyA と copyB に対し、array.length を n とした時の時間計算量を求めなさい。

function copyA(array) {
  const result = Array(array.length);
  for (let i = 0; i < array.length; i++) {
    result[i] = array[i];
  }
  return result;
}

// NOTE: copyB よりも copyA の方が効率的に見えるが計算量の観点ではどうだろうか
function copyB(array) {
  const result = [];
  for (const v of array) {
    result.push(v);
  }
  return result;
}
