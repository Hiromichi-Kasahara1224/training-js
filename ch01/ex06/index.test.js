import { fib } from "./index.js";

describe("math", () => {
  describe("fib", () => {
    it("returns zero value when zero given", () => {
      expect(fib(0)).toBe(0);
    });

    it("returns 5 value when 5 value given", () => {
      expect(fib(5)).toBe(5);
    });

    it("returns 75 value when 2111485077978050 value given", () => {
      expect(fib(75)).toBe(2111485077978050);
    });

    it("returns zero value when negative value given", () => {
      expect(fib(-5)).toBe(0);
    });
  });
});
