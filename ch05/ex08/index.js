let x = 0;

for (let i = 1; i <= 5; i++) {
  x = i;
  try {
    throw Error();
  } catch {
    break;
  } finally {
    continue;
  }
}

console.log(x);

// 予想
//エラーがスローされ、break;でループが終了しそうだが、continue;があるため、ループは続行される。

// 結果
// ループは終了せず、最終的に x は 5 になる。
