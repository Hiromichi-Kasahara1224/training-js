// クロージャを使ったプライベート変数
export function PositiveNumber(x) {
  if (x <= 0) {
    throw new Error("require : x > 0");
  }

  let value = x;

  // valueは関数内のローカル変数であるため外部から直接アクセスできない
  return {
    getX() {
      return value;
    },
    setX(newX) {
      if (newX <= 0) {
        throw new Error("require : x > 0");
      }
      value = newX;
    }
  };
}


// #を使ったプライベートフィールド
class PositiveNumber {
  #x; // プライベートフィールド

  constructor(x) {
    if (x <= 0) {
      throw new Error("require : x > 0");
    }
    this.#x = x;
  }

  getX() {
    return this.#x;
  }

  setX(x) {
    if (x <= 0) {
      throw new Error("require : x > 0");
    }
    this.#x = x;
  }
}

