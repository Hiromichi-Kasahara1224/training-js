//pattern:1
for (i = 1; i < 101; i++) {
  if (i % 15 !== 0) {
    if (i % 3 !== 0) {
      if (i % 5 !== 0) {
        console.log(i);
      } else {
        console.log("Buzz");
      }
    } else {
      console.log("Fizz");
    }
  } else {
    console.log("FizzBuzz");
  }
}

// pattern:2
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
