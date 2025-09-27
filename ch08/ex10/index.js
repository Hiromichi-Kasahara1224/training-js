export function addMyCall(fn) {
  fn.myCall = function (thisArg, ...args) {
    const bound = this.bind(thisArg, ...args); // bindでthisを固定
    return bound();
  };
}


// 例
const sqaure = (n) => n * n;

addMyCall(square);

console.log(sqaure.myCall(null, 5)); // 25

function Product(name, price) {
  this.name = name;
  this.price = price;
}

addMyCall(Product);

const that = {};
Product.myCall(that, "Apple", 100);
console.log(that); // { name: 'Apple', price: 100 }
