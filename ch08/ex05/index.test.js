import { sequenceToObject } from "./index.js";

describe('sequenceToObject', () => {
  test('sequenceToObject("a", 1, "b", 2) -> { a: 1, b: 2 }', () => {
    expect(sequenceToObject("a", 1, "b", 2)).toEqual({ a: 1, b: 2 });
  });

  test('(sequenceToObject(...input) -> { a: 1, b: 2, c: 3, d: 4, e: 5 }', () => {
    const input = ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5];
    expect(sequenceToObject(...input)).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 });
  });

  test('キーが文字列でないときにエラーを投げる', () => {
    expect(() => sequenceToObject(1, 1)).toThrow();
  });

  test('引数が空の場合に空のオブジェクトを返すこと', () => {
    expect(sequenceToObject()).toEqual({});
  });
});