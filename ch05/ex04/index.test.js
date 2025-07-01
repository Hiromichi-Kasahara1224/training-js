import { fibonacci_while, fibonacci_doWhile, fibonacci_for } from "./index.js";

const n = 10;
const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

describe("test05-04", () => {
  it("fibonacci_while(10)", () => {
    expect(fibonacci_while(10)).toEqual(expected);
  });
  it("fibonacci_doWhile(10)", () => {
    expect(fibonacci_doWhile(10)).toEqual(expected);
  });
  it("fibonacci_for(10)", () => {
    expect(fibonacci_for(10)).toEqual(expected);
  });
});
