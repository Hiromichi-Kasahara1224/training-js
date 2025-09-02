const args = [];
function call(...received) {
  args.push(received); //Array.from()を使う必要がない
}

call(1, 2, 3);
call("A", "B");

console.log(args[0]); // [1, 2, 3]
console.log(args[1]); // ["A", "B"]
