import { convertLFtoCRLF, convertCRLFtoLF } from "./index.js";

describe("convertLFtoCRLF", () => {
  it("Test of convertLFtoCRLF", () => {
    const input = "He\r\nllo\nWor\nld";
    const expectedOutput = "He\r\nllo\r\nWor\r\nld";
    expect(convertLFtoCRLF(input)).toBe(expectedOutput);
  });
});

describe("convertCRLFtoLF", () => {
  it("Test of convertCRLFtoLF", () => {
    const input = "He\r\nllo\r\nWor\nld";
    const expectedOutput = "He\nllo\nWor\nld";
    expect(convertCRLFtoLF(input)).toBe(expectedOutput);
  });
});
