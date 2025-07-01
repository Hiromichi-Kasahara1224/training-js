import { f } from "./index.js";

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 };
const expected = { b: 2, d: 4, f: 6, h: 8, j: 10 };

describe("test05-04", () => {
  it("f({ a: 1, b: 2, c: 3, d: 4, e: 5 , f: 6, g: 7, h: 8, i: 9, j: 10 })", () => {
    expect(f(obj)).toEqual(expected);
  });
});

console.log(f(obj));
