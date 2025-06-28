function bitCount(n) {
  let count = 0;
  while (n) {
    if(n & 1 === 1) { //00000101 & 00000001 → 00000001 (＆演算)
      count++;
    }
    n = n >> 1;
  }
  return count;
}

export { bitCount };