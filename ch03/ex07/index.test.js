import { equalArrays } from "./index.js";

test("ch03-ex07", () => {
  //1パターン目
  const x = new String("hello"); //Stringオブジェクトを使用
  const y = "hello"; //文字列リテラルを使用

  expect(equalArrays(x, y)).toBe(true);
  expect(x).not.toEqual(y);
});

test("ch03-ex07", () => {
　//2パターン目
  const a = ["1", "2", "3"];
  const b = "123";

  expect(equalArrays(a, b)).toBe(true);
  expect(a).not.toEqual(b);
});
