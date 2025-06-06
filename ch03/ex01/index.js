let A = Infinity + NaN; //NaN
let B = Infinity - NaN; //NaN
let C = Infinity * NaN; //NaN
let D = Infinity / NaN; //NaN

let E = -Infinity + NaN; //NaN
let F = -Infinity - NaN; //NaN
let G = -Infinity * NaN; //NaN
let H = -Infinity / NaN; //NaN

let I = Infinity - Infinity; //NaN
let J = -Infinity - Infinity; //-Infinity
let K = Infinity * -Infinity; //-Infinity
let L = Infinity / -Infinity; //NaN

console.log(A, B, C, D);
console.log(E, F, G, H);
console.log(I, J, K, L);
