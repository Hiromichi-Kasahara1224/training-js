let o = ["r", "i", "c", "o", "h"];

delete o[3]; // "o"を削除

console.log(o); // ["r", "i", "c", <1 empty item>, "h"]
console.log(o.length); // 5