// コンポジションを使ってTypedMapを実装する
export class TypedMap { //extendを使わない
  constructor(KeyType, valueType, entries) {
    this.map = new Map(); //Mapのインスタンスを作成してプロパティにセット

    if (entries) {
      for (const [key, value] of entries) {
        if (typeof key !== KeyType || typeof value !== valueType) {
          throw new TypeError(`Wrong type for entry [${key}, ${value}]`);
        }
        this.map.set(key, value); //Mapのsetメソッドを呼び出して初期値をセットする
      }
    }

    this.KeyType = KeyType;
    this.valueType = valueType;
  }

  set(key, value) { // オーバーライドではなく、新たにsetメソッドを定義する
    if (this.KeyType && typeof key !== this.KeyType) {
      throw new TypeError(`${key} is not of type ${this.KeyType}`);
    }
    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`);
    }
    this.map.set(key, value); // Mapのsetメソッドを呼び出して値をセットする
    return this;
  }

  get(key) {
    return this.map.get(key); // Mapのgetメソッドを呼び出して値を取得する
  }

  has(key) {
    return this.map.has(key); // Mapのhasメソッドを呼び出してキーが存在するか確認する
  }

  delete(key) {
    return this.map.delete(key);
  }

  clear() {
    return this.map.clear();
  }

  entries() {
    return this.map.entries();
  }

  keys() {
    return this.map.keys();
  }

  values() {
    return this.map.values();
  }

  [Symbol.iterator]() {
    return this.map[Symbol.iterator]();
  }

  forEach(callback, thisArg) {
    return this.map.forEach(callback, thisArg);
  }

  get size() {
    return this.map.size;
  }
}

/*
// 元のプログラム  //キーと値の型を指定してMapを拡張する
class TypedMap extends Map {
  constructor(KeyType, valueType, entries) { //KeyType: キーの型, valueType: 値の型, entries: 初期値
    if (entries) { //初期値がある場合、型をチェックする
      for (let [k, v] of entries) {
        if (typeof k !== KeyType || typeof v !== valueType) {
          throw new TypeError(`Wrong type for entry [${k}, ${v}]`); //型が違う場合、エラーを投げる
        }
      }
    }
    super(entries); //Mapのコンストラクタを呼び出して初期値をセットする

    this.KeyType = KeyType;
    this.valueType = valueType;
  }

  set(key, value) {　//setメソッドをオーバーライドして、型をチェックする
    if (this.KeyType && typeof key !== this.KeyType) {
      throw new TypeError(`${key} is not of type ${this.KeyType}`);　//キーの型が違う場合、エラーを投げる
    }
    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`);　//値の型が違う場合、エラーを投げる
    }

    return super.set(key, value);　//Mapのsetメソッドを呼び出して値をセットする
  }
}
*/

//使い方
//const map = new TypedMap('string', 'number');　//キーの型をstring、値の型をnumberに指定
//map.set('age', 30);　//正しい型でセット
//
//または
//const initialEntries = [["a", 1], ["b", 2]];
//const map2 = new TypedMap("string", "number", initialEntries);
