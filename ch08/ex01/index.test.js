import { array_C, square, getNow } from "./index.js";

describe("array_C", () => {
  it("returns an array of c repeated n times", () => {
    expect(array_C(3, "a")).toEqual(["a", "a", "a"]);
    expect(array_C(0, "x")).toEqual([]);
  });

  it("prints c n times to console", () => {
    const originalLog = console.log; //console.logを保存

    const calls = [];
    console.log = (msg) => calls.push(msg); //console.logが呼ばれたらcallsに追加

    array_C(2, "z");

    expect(calls.length).toBe(2);
    expect(calls).toEqual(["z", "z"]);

    console.log = originalLog; //console.logを元に戻す
  });
});

describe("square", () => {
  it("returns the square of x", () => {
    expect(square(2)).toBe(4);
    expect(square(-3)).toBe(9);
    expect(square(0)).toBe(0);
  });
});

describe("getNow", () => {
  it("returns a number (timestamp)", () => {
    const before = Date.now();
    const result = getNow();
    const after = Date.now();

    // now は before と after の間であること
    expect(result).toBeGreaterThanOrEqual(before);
    expect(result).toBeLessThanOrEqual(after);
  });
});