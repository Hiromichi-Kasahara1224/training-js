//再帰的
export function powerRecursive(x, n) {
    if (n === 0) return 1; // x^0 = 1
    else if (n % 2 === 0) { // nが偶数の場合
        const half = powerRecursive(x, n / 2);  // x^(n/2)を計算
        return half * half; // (x^(n/2))^2 = x^n
    } else { // nが奇数の場合
        return x * powerRecursive(x, n - 1); // x * x^(n-1) = x^n
    }
}

//ループ
export function powerIterative(x, n) {
    if (n === 0) return 1; // x^0 = 1
    let result = 1;
    let base = x;
    let exponent = n;

    while (exponent > 0) {
      if (exponent % 2 === 1) { // nが奇数の場合 // 5, 1の場合など
        result *= base;
      }
      base *= base; // xを2乗 // 2 -> 4, 4 -> 16
      exponent = Math.floor(exponent / 2); // nを2で割って切り捨て // 5 -> 2, 2 -> 1, 1 -> 0
    }
  return result;
}