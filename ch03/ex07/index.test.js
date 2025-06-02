import { equalArrays } from "./index.js";

test("ch03-ex07", () => {
  //const x = 'A\uFE0E'; // ここを変更
  //const y = 'A\uFE0F'; // ここを変更

  const x = new String("hello"); //Stringオブジェクトを使用
  const y = "hello"; //文字列リテラルを使用

  expect(equalArrays(x, y)).toBe(true);
  expect(x).not.toEqual(y);
});
