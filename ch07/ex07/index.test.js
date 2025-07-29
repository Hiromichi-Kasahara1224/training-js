import { bubbleSort } from "./index.js";

describe("bubbleSort", () => {
  test("bubbleSort([1, 4, 8, 10, 11, 12, 3, 2])", () => {
    const a = [1, 4, 8, 10, 11, 12, 3, 2];
    const expected = [1, 2, 3, 4, 8, 10, 11, 12];
    expect(bubbleSort(a)).toEqual(expected);
  });
});