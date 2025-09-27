//再帰的
export function powerRecursive(x, n) {
    if (n === 0) return 1; // x^0 = 1
    if (n === 1) return x; // x^1 = x
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
    if (n === 1) return x; // x^1 = x

    let result = 1;

    while (n > 0) {
      if (n % 2 === 1) { // nが奇数の場合 // 5, 1の場合など
        result *= x;
        n -= 1; // nを1減らす
      }
      x *= x; // xを2乗 // 2 -> 4, 4 -> 16
      n = Math.floor(n / 2); // nを2で割る // 4 -> 2, 2 -> 1
    }
  return result;
}