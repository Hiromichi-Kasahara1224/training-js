function fizzbuzz() {
  let result = "";
  for (let n = 1; n <= 100; n++) {
    if (n % 3 === 0 && n % 5 === 0) result += "FizzBuzz\n";
    else if (n % 3 === 0) result += "Fizz\n";
    else if (n % 5 === 0) result += "Buzz\n";
    else result += n + "\n";
  }
  return result;
}

//console.log(fizzbuzz());

export { fizzbuzz };
