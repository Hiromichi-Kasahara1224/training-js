import { escapeSequence_ifElse, escapeSequence_switch } from "./index.js";

const original = "abcdefghijkllmnopqrstuvwxyz 0 b t n v f r \" ' \\ ";
const expected =
  "a\bcde\fghijkllm\nopq\rs\tu\vwxyz \0 \b \t \n \v \f \r \" ' \\\\ ";

describe("test05-02", () => {
  it("escapeSequence_ifElse", () => {
    expect(escapeSequence_ifElse(original)).toEqual(expected);
  });
  it("escapeSequence_switch", () => {
    expect(escapeSequence_switch(original)).toEqual(expected);
  });
});
