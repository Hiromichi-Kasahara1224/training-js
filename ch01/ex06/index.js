//function fib(n) {
//  if (n <= 0) {
//    return 0;
//  } else if (n === 1) {
//    return 1;
//  } else if (n >= 2) {
//    return fib(n - 1) + fib(n - 2);
//  }
//}

function fib(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let n0 = 0;
    let n1 = 1;
    let result = 0;
    while (n > 1) {
      result = n0 + n1;
      n0 = n1;
      n1 = result;
      n--;
    }
    return result;
  }
}

export { fib };
