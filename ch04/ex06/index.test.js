import { resize, resize1, resize2, resize3, resize4 } from "./index.js";

const resizeFunctions = [resize1, resize2, resize4];
const functionNames = ["resize1", "resize2", "resize4"];

resizeFunctions.forEach((resizeFn, index) => {
  describe(`test04-06_${functionNames[index]}`, () => {
    it(`${functionNames[index]}()`, () => {
      expect(resizeFn()).toEqual({ maxWidth: 600, maxHeight: 480 });
    });
    it(`${functionNames[index]}({})`, () => {
      expect(resizeFn({})).toEqual({ maxWidth: 600, maxHeight: 480 });
    });
    it(`${functionNames[index]}({ maxWidth: 1000 })`, () => {
      expect(resizeFn({ maxWidth: 1000 })).toEqual({
        maxWidth: 1000,
        maxHeight: 480,
      });
    });
    it(`${functionNames[index]}({ maxHeight: 2000 })`, () => {
      expect(resizeFn({ maxHeight: 2000 })).toEqual({
        maxWidth: 600,
        maxHeight: 2000,
      });
    });
    it(`${functionNames[index]}({ maxWidth: 1000, maxHeight: 2000 })`, () => {
      expect(resizeFn({ maxWidth: 1000, maxHeight: 2000 })).toEqual({
        maxWidth: 1000,
        maxHeight: 2000,
      });
    });
  });
});
