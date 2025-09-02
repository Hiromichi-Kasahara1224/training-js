export function powerRecursive(x, n) {
    if (n === 0) return 1;
    else if (n % 2 === 0) {
        const half = powerRecursive(x, n / 2);
        return half * half;
    } else {
        return x * powerRecursive(x, n - 1);
    }
}

export function powerIterative(x, n) {
    if (n === 0) return 1;
    let result = 1;
    let base = x;
    let exponent = n;

    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result *= base;
      }
      base *= base;
      exponent = Math.floor(exponent / 2);
    }
  return result;
}