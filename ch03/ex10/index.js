let symname1 = Symbol("name"); //name は説明用で、識別には使わない
let symname2 = Symbol("name"); //同じ説明 name を持っていても別のシンボル

let o = {
  [symname1]: "value1",
  [symname2]: "value2",
};

console.log(o[symname1]); // "value1"
console.log(o[symname2]); // "value2"

let symname3 = Symbol.for("name");
let symname4 = Symbol.for("name"); //symname3 と同じシンボルを参照

let p = {
  [symname3]: "value1",
  [symname4]: "value2",
};

console.log(p[symname3]); // "value2"
console.log(p[symname4]); // "value2"
