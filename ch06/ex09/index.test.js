import { jest } from "@jest/globals";

test("test", () => {
  const mock = jest.fn();

  const obj = {
    x: 0,
    y: 0,
    sum() {
      mock();
      return this.x + this.y;
    },
  };

  // ここに１行のコードを書く
  // prettier-ignore

  obj.toJSON = function () {return { x: this.x, y: this.y, sum: this.sum() };};

  //JSON.stringify(obj) を呼び出すときに、オブジェクトが toJSON() メソッドを持っていれば、obj.toJSON() の戻り値がそのままJSONに変換される

  //obj.toJSON = function () {
  //  return { x: this.x, y: this.y, sum: this.sum() };
  //};


  //Object.defineProperty(obj, 'sum', { get() { mock(); return this.x + this.y; }, enumerable: true });

  //Object.defineProperty(obj, 'sum', {                    // Object.defineProperty で sum というプロパティを定義(上書き)
  //  get() {                                              // getterを定義 プロパティにアクセスすると実行される
  //    mock();                                            // モック関数を呼び出す
  //    return this.x + this.y; // x + y の合計を返す
  //  },
  //  enumerable: true                                     // enumerable: true にすることで JSON.stringify の対象になる
  //});

  obj.x = 1;
  obj.y = 2;
  expect(JSON.stringify(obj)).toBe(`{"x":1,"y":2,"sum":3}`);
  expect(mock).toHaveBeenCalled();
});