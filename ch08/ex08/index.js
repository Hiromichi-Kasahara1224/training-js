export function counterGroup() {
  const counters = [];

  function newCounter() {
    let count = 0;

    const counter = {
      count() {
        return count++;
      },
      reset() {
        count = 0;
      },
      getCount() {
        return count;
      }
    };

    counters.push(counter);
    return counter;
  }

  function total() {
    return counters.reduce((sum, c) => sum + c.getCount(), 0); //reduceメソッドを使用して合計を計算
  }

  function average() {
    if (counters.length === 0) {
      throw new TypeError("No counters exist");
    }
    return total() / counters.length;
  }

  function variance() {
    if (counters.length < 2) {
      throw new TypeError("At least two counters are required");
    }
    const avg = average();
    const sumSq = counters.reduce((sum, c) => {
      const diff = c.getCount() - avg;
      return sum + diff * diff;
    }, 0);
    return sumSq / counters.length;
  }

  return {
    newCounter,
    total,
    average,
    variance
  };
}
