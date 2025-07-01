import { check31, check31_ifElse, check31_switch } from "./index.js";

const testCases = [
  { month: "Jan", expected: true },
  { month: "Feb", expected: false },
  { month: "Mar", expected: true },
  { month: "Apr", expected: false },
  { month: "May", expected: true },
  { month: "Jun", expected: false },
  { month: "Jul", expected: true },
  { month: "Aug", expected: true },
  { month: "Sep", expected: false },
  { month: "Oct", expected: true },
  { month: "Nov", expected: false },
  { month: "Dec", expected: true },
];

describe("test05-03_check31", () => {
  testCases.forEach(({ month, expected }) => {
    it(`check31("${month}") should return ${expected}`, () => {
      expect(check31(month)).toEqual(expected);
    });
  });
});

describe("test05-03_check31_ifElse", () => {
  testCases.forEach(({ month, expected }) => {
    it(`check31_ifElse("${month}") should return ${expected}`, () => {
      expect(check31_ifElse(month)).toEqual(expected);
    });
  });
});

describe("test05-03_check31_switch", () => {
  testCases.forEach(({ month, expected }) => {
    it(`check31_switch("${month}") should return ${expected}`, () => {
      expect(check31_switch(month)).toEqual(expected);
    });
  });
});
