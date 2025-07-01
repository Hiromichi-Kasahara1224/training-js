function fibonacci_while(n) {
  let m = [1, 1];
  while (m.length < n) {
    let next = m[m.length - 1] + m[m.length - 2];
    m.push(next);
  }
  return m;
}

function fibonacci_doWhile(n) {
  let m = [1, 1];
  do {
    let next = m[m.length - 1] + m[m.length - 2];
    m.push(next);
  } while (m.length < n);
  return m;
}

function fibonacci_for(n) {
  let m = [1, 1];
  for (let i = 2; i < n; i++) {
    let next = m[i - 1] + m[i - 2];
    m.push(next);
  }
  return m;
}

export { fibonacci_while, fibonacci_doWhile, fibonacci_for };
