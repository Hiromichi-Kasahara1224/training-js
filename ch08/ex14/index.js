export function any(...func) {
  return function(value) {
    return func.some(fn => fn(value));
  };
}

const isNonZero = any(
  (n) => n > 0,
  (n) => n < 0
);

console.log(isNonZero(0));     // => false
console.log(isNonZero(42));    // => true
console.log(isNonZero(-0.5));  // => true


export function catching(tryFn, catchFn) {
  return function(...args) {
    try {
      return tryFn(...args);
    } catch (e) {
      return catchFn(e);
    }
  };
}

const safeJsonParse = catching(JSON.parse, (e) => {
  return { error: e.toString() };
});

console.log(safeJsonParse('{"a": 1}'));        // => { a: 1 }
console.log(safeJsonParse("{Invalid Json}"));  // => { error: "SyntaxError: ..." }

