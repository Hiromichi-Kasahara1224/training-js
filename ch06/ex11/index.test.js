import { polarPoint } from "./index.js";

describe("test ch06/ex11", () => {
  test("x:NaN のときエラーになること", () => {
    expect(() => {
      polarPoint.x = NaN;
    }).toThrow();
  });

  test("y:NaN のときエラーになること", () => {
    expect(() => {
      polarPoint.y = NaN;
    }).toThrow();
  });

  test("r,theta が定義されているとき x,y が取得できること", () => {
    polarPoint.r = 2;
    polarPoint.theta = Math.PI/3;
    expect(polarPoint.x).toBeCloseTo(1);
    expect(polarPoint.y).toBeCloseTo(Math.sqrt(3));
  });

  test("y が更新されたとき、r,theta が再計算されること", () => {
    polarPoint.y= 1
    expect(polarPoint.r).toBeCloseTo(Math.sqrt(2));
    expect(polarPoint.theta).toBeCloseTo(Math.PI/4);
  });

});