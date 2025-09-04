export function counterGroup() {
  const counters = [];

  function newCounter() {
    let count = 0;

    const counter = {
      count() { //countメソッド
        return count++;
      },
      reset() { //resetメソッド
        count = 0;
      },
      getCount() { //getCountメソッド
        return count;
      }
    };

    counters.push(counter);
    return counter;
  }

  // 全カウンターの合計を返す
  function total() {
    return counters.reduce((sum, c) => sum + c.getCount(), 0); //reduceメソッドを使用して合計を計算
  }

  // 全カウンターの平均を返す
  function average() {
    if (counters.length === 0) {
      throw new TypeError("No counters exist"); //カウンターが存在しない場合エラー
    }
    return total() / counters.length; //平均を計算
  }

  // 全カウンターの分散を返す
  function variance() {
    if (counters.length < 2) {
      throw new TypeError("At least two counters are required"); //カウンターが2つ未満の場合エラー
    }
    const avg = average();
    const sumSq = counters.reduce((sum, c) => {
      const diff = c.getCount() - avg;
      return sum + diff * diff;
    }, 0);
    return sumSq / counters.length; //分散を計算
  }

  return {
    newCounter,
    total,
    average,
    variance
  };
}
