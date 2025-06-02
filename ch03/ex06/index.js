export function slice(str, indexStart, indexEnd) {
  // indexStart と indexEnd がどちらも undefined の場合
  if (indexStart === undefined && indexEnd === undefined) {
    return str.substring();
  }
  // indexStart と indexEnd のうち片方が undefined の場合
  else if (indexEnd === undefined) {
    if (indexStart < 0) indexStart = str.length + indexStart;
    return str.substring(indexStart);
  }
  // indexStart と indexEnd のどちらも undefined ではない場合
  else {
    if (indexStart < 0) indexStart = str.length + indexStart;
    if (indexEnd < 0) indexEnd = str.length + indexEnd;
    if (Number.isNaN(indexStart)) indexStart = 0;
    if (Number.isNaN(indexEnd)) indexEnd = 0;
    if (indexStart > indexEnd) return "";
    return str.substring(indexStart, indexEnd);
  }
}

let str = "abcdefghijklmnopqrstuvwxyz";
let n = 2;
let m = NaN;

console.log(n, m); // "abcdefghijklmnopqrstuvwxyz"
console.log(slice(str, n, m)); // "Hello"
console.log(str.slice(n, m)); // "Hello"
