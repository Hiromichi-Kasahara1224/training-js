import { add, sub, mul, div } from "./index.js";

const a = { real: 1, imag: -2 };
const b = { real: -3, imag: 4 };

describe("test04-01", () => {
  it("testAdd", () => {
    expect(add(a,b)).toEqual({ real: -2, imag: 2 });
  });
  it("testSub", () => {
    expect(sub(a,b)).toEqual({ real: 4, imag: -6 });
  });
  it("testMul", () => {
    expect(mul(a,b)).toEqual({ real: 5, imag: 10 });
  });
  it("testDiv", () => {
    expect(div(a,b)).toEqual({ real: -11/25, imag: 2/25 });
  });
});