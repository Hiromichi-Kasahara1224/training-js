import { Compare } from "./index.js";

describe("Compare", () => {
  it("compare 0.3-0.2, 0.1", () => {
    expect(Compare(0.3 - 0.2, 0.1)).toBe(true);
  });

  it("compare 0.2-0.1, 0.1", () => {
    expect(Compare(0.2 - 0.1, 0.1)).toBe(true);
  });
});
