// 静的配列(固定長の配列)を扱う関数
export function makeFixedSizeArray(size) {
  const array = new Array(size);  // 指定されたサイズの空配列を作成
  return {  // 配列の操作を提供するオブジェクトを返す

    // getメソッド: 指定されたインデックスの要素を取得する
    get(index) {
      if (index < 0 || array.length <= index) {  // インデックスが範囲外の場合エラーを投げる
        throw new Error(`Array index out of range: ${index}`);
      }
      return array[index];　// 範囲内なら指定されたインデックスの要素を返す
    },

    // setメソッド: 指定されたインデックスの要素を設定する
    set(index, value) {
      if (index < 0 || array.length <= index) {  // インデックスが範囲外の場合エラーを投げる
        throw new Error(`Array index out of range: ${index}`);
      }
      array[index] = value;  // 範囲内なら指定されたインデックスの要素を書き換える
    },

    // lengthメソッド: 配列の長さを返す
    length() {
      return array.length;
    },
  };
}

//下のように、関数をプロパティとして持つオブジェクトを返している (カプセル化のため)
//return {
//  get: function(index) { ... },
//  set: function(index, value) { ... },
//  length: function() { ... },
//};


// 動的配列を扱う関数
export class DynamicSizeArray {
  static INITIAL_SIZE = 4; // 初期サイズ

  // コンストラクタ(クラスからオブジェクトを作るときに最初に呼ばれる関数)
  constructor() {
    this.len = 0;
    this.array = makeFixedSizeArray(DynamicSizeArray.INITIAL_SIZE);  // 初期サイズの固定長配列を作成
  }

  //getメソッド: 指定されたインデックスの要素を取得する
  get(index) {
    if (index < 0 || index >= this.len) {  // インデックスが範囲外の場合エラーを投げる
      throw new Error(`Index out of bounds: ${index}`);
    }
    return this.array.get(index);  // 範囲内なら指定されたインデックスの要素を返す
  }

  // setメソッド: 指定されたインデックスの要素を設定する
  set(index, value) {
    if (index < 0 || index >= this.len) {  // インデックスが範囲外の場合エラーを投げる
      throw new Error(`Array index out of range: ${index}`);
    }
    this.array.set(index, value);  // 範囲内なら指定されたインデックスの要素を書き換える
  }

  // lengthメソッド: 現在の要素数を返す
  length() {
    return this.len;
  }

  // pushメソッド: 新しい要素を追加する
  push(value) {
    // this.array に空が無い場合「再配置」処理を行う
    if (this.len >= this.array.length()) {  // 現在の要素数が配列の長さ以上なら
      // 新しい固定長配列を作成
      const old = this.array;  // 古い配列を一時保存
      this.array = makeFixedSizeArray(old.length() * 2);  // 古い配列の2倍のサイズで新しい配列を作成し、this.arrayに置き換える

      // 古い配列 (old) の要素を新しい配列にコピー
      for (let i = 0; i < this.len; i++) {
        this.array.set(i, old.get(i));
      }
    }
    // 新しい要素を追加
    this.array.set(this.len, value);
    this.len++; // 要素数を増やす
  }
}
