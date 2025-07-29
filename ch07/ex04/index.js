const data = [
    { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
    { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
    { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
    { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
    { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
    { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
    { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
    { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
    { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

// 1. mathの全員の合計点
const sumMath = data.reduce((x, y) => x + y.math, 0);

// 2. クラスAのchemistryの平均点
let n = 0;
let sum = 0;
data
  .filter((x) => x.class === "A")  //filter()でクラスAのデータだけを抽出
  .forEach((x) => {                //forEach()で繰り返し
    sum += x.chemistry;  //chemistryの点数を全員分足し合わせる
    n++;  //人数カウント
  });
const aveChemClassA = sum / n;　//平均= 合計 / 人数

// 3. 3科目合計点のクラスC内での平均点
let m = 0;
let sum3 = 0;
data
  .filter((x) => x.class === "C")  //filter()でクラスCのデータだけを抽出
  .forEach((x) => {
    sum3 = sum3 + x.math + x.chemistry + x.geography;   //3科目の合計点を全員分足し合わせる
    m++;   //人数カウント
  });
const ave3ClassC = sum3 / m;　//平均= 合計 / 人数

// 4. 3科目合計点が最も高い人のname
let maxName = "";
let maxSum = 0;
data.forEach((x) => {
  let sum = x.math + x.chemistry + x.geography;
  if (sum > maxSum) {
    maxSum = sum;
    maxName = x.name;
  }
});

// 5. 全体のgeographyの標準偏差
const aveGeo = data.reduce((x, y) => x + y.geography, 0)/data.length; // 全体のgeographyの平均点
const sdGeo = Math.sqrt(data.reduce((x, y) => x + (y.geography-aveGeo)**2, 0)/data.length); //標準偏差を計算

console.log(sumMath); // 530
console.log(aveChemClassA); // 45
console.log(ave3ClassC); // 176.66666666666666
console.log(maxName); // Frank
console.log(sdGeo) // 22.3330569358242