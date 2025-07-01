import { bitCount } from "./index.js";

describe("test04-04", () => {
  it("bitCount(0b111)", () => {
    expect(bitCount(0b111)).toEqual(3);
  });
  it("bitCount(0b1111111111111111111111111111111)", () => {
    expect(bitCount(0b1111111111111111111111111111111)).toEqual(31);
  });
});
