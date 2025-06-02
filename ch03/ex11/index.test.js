import { equals } from "./index.js";

describe("equals function tests", () => {
  it("should return true for equals(42, 42)", () => {
    expect(equals(42, 42)).toBe(true);
  });

  it("should return true for equals(null, null)", () => {
    expect(equals(null, null)).toBe(true);
  });

  it("should return false for equals({x: 42}, 42)", () => {
    expect(equals({ x: 42 }, 42)).toBe(false);
  });

  it("should return false for equals(null, {x: 42})", () => {
    expect(equals(null, { x: 42 })).toBe(false);
  });

  it("should return false for equals({x: 1}, {y: 1})", () => {
    expect(equals({ x: 1 }, { y: 1 })).toBe(false);
  });

  it("should return false for equals({x: 1}, {x: 1, y: 1})", () => {
    expect(equals({ x: 1 }, { x: 1, y: 1 })).toBe(false);
  });

  it("should return true for equals({x: {y: {z: 10}}}, {x: {y: {z: 10}}})", () => {
    expect(equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10 } } })).toBe(true);
  });

  it("should return false for equals({x: {y: {z: 10}}}, {x: {y: {z: 10, w: 1}}})", () => {
    expect(equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10, w: 1 } } })).toBe(
      false,
    );
  });
});
