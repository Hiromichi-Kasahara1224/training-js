console.log("𠮷野家"[0]) //�
console.log("吉野家"[0]) //吉
console.log("𠮷".length)  // 2
console.log("吉".length)  // 1
console.log("𠮷".charCodeAt(0).toString(16)) // d842
console.log("𠮷".charCodeAt(1).toString(16)) // dFB7

console.log("👨‍👨‍👧‍👧"[0] ) //�
console.log("👨‍👨‍👧‍👧"[0] .length)    // 1
console.log("👨‍👨‍👧‍👧".length)    // 11

console.log(Array.from("👨‍👨‍👧‍👧"))   //  ['�', '‍',   '�','‍',   '�', '‍','�']
console.log("👨‍👨‍👧‍👧".charCodeAt(0).toString(16))    // d83d
console.log("👨‍👨‍👧‍👧".charCodeAt(1).toString(16))    // dc68
console.log("👨‍👨‍👧‍👧".charCodeAt(2).toString(16))    // 200d ゼロ幅結合子
console.log("👨‍👨‍👧‍👧".charCodeAt(3).toString(16))    // d83d
console.log("👨‍👨‍👧‍👧".charCodeAt(4).toString(16))    // dc69
console.log("👨‍👨‍👧‍👧".charCodeAt(5).toString(16))    // 200d ゼロ幅結合子
console.log("👨‍👨‍👧‍👧".charCodeAt(6).toString(16))    // d83d
console.log("👨‍👨‍👧‍👧".charCodeAt(7).toString(16))    // dc67
console.log("👨‍👨‍👧‍👧".charCodeAt(8).toString(16))    // 200d ゼロ幅結合子
console.log("👨‍👨‍👧‍👧".charCodeAt(9).toString(16))    // d83d
console.log("👨‍👨‍👧‍👧".charCodeAt(10).toString(16))   // dc66
