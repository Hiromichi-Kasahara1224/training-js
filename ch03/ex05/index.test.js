import { convertLFtoCRLF, convertCRLFtoLF } from "./index.js";

describe("convertLFtoCRLF", () => {
  it("Test of convertLFtoCRLF", () => {
    const input = "Hello\nWorld";
    const expectedOutput = "Hello\r\nWorld";
    expect(convertLFtoCRLF(input)).toBe(expectedOutput);
  });
});

describe("convertCRLFtoLF", () => {
  it("Test of convertCRLFtoLF", () => {
    const input = "Hello\r\nWorld";
    const expectedOutput = "Hello\nWorld";
    expect(convertCRLFtoLF(input)).toBe(expectedOutput);
  });
});
