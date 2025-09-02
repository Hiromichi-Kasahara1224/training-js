export function addMyCall(fn) {
  fn.myCall = function (thisArg, ...args) {
    const bound = this.bind(thisArg, ...args);
    return bound();
  };
}
