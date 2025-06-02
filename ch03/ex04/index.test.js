import { Compare, Length } from "./index.js";

describe("Length", () => {
  it("Length of '💯' ", () => {
    expect(Length("💯")).toBe(2);
  });

  it("compare '💯', '\uD83D\uDCAF'", () => {
    expect(Compare("💯", "\uD83D\uDCAF")).toBe(true);
  });

  it("compare '💯', '\u{0001F4AF}'", () => {
    expect(Compare("💯", "\u{0001F4AF}")).toBe(true);
  });
});
