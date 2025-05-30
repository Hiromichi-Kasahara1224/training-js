import { abs, sum, factorial } from "./index.js";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  describe("sum", () => {
    it("returns 0 for empty array", () => {
      expect(sum([])).toBe(0);
    });

    it("returns the same value for single-element array", () => {
      expect(sum([5])).toBe(5);
    });

    it("returns the correct sum for multiple elements", () => {
      expect(sum([1, 2, 3, 4])).toBe(10);
    });

    it("handles negative numbers", () => {
      expect(sum([-1, -2, 3])).toBe(0);
    });
  });

  describe("factorial", () => {
    it("returns 1 for 0", () => {
      expect(factorial(0)).toBe(1);
    });

    it("returns 1 for 1", () => {
      expect(factorial(1)).toBe(1);
    });

    it("returns correct factorial for positive integers", () => {
      expect(factorial(5)).toBe(120);
    });
  });
});
