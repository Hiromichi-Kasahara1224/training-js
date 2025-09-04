export function addMyCall(fn) {
  fn.myCall = function (thisArg, ...args) {
    const bound = this.bind(thisArg, ...args); // bindでthisを固定
    return bound();
  };
}
