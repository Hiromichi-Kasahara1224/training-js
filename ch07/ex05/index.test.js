import { push, pop, shift, unshift, sort } from "./index.js";

const seq = [1, 2, 3, 4, 5];
const before = [...seq]; // 元の配列を保存

describe("pop", () => {
  test("pop([1, 2, 3, 4, 5])", () => {
    const expected = [1, 2, 3, 4];
    expect(pop(seq)).toEqual(expected);
    expect(seq).toEqual(before);
  });
});

describe("push", () => {
  test("push([1, 2, 3, 4, 5], 6)", () => {
    const expected = [1, 2, 3, 4, 5, 6];
    expect(push(seq,6)).toEqual(expected);
    expect(seq).toEqual(before);
  });
});

describe("shift", () => {
    test("shift([1, 2, 3, 4, 5])", () => {
      const expected = [2, 3, 4, 5];
      expect(shift(seq)).toEqual(expected);
      expect(seq).toEqual(before);
    });
  });

describe("unshift", () => {
    test("unshift([1, 2, 3, 4, 5], 0)", () => {
      const expected = [0, 1, 2, 3, 4, 5];
      expect(unshift(seq,0)).toEqual(expected);
      expect(seq).toEqual(before);
    });
  });

describe("sort", () => {
  test("sort(seq, (a, b) => b - a)", () => {
    const expected = [5, 4, 3, 2, 1];
    expect(sort(seq, (a, b) => b - a)).toEqual(expected);
    expect(seq).toEqual(before);
  });
});
