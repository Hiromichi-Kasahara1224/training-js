//entries = [
//  { key: "key1", value: "value1", next: undefined },
//  { key: "key2", value: "value2", next: { key: "key3", value: "value3", next: undefined } },
//  undefined,
//];
// { key: ..., value: ..., next: ... } が1つのエントリ
// 衝突（同じインデックスに複数のキーが入る）に対応するために、リンクリスト形式で次のエントリ（next）も保持

export function newHashTable(capacity) {
  return {
    size: 0, // マッピング数を示すプロパティ
    entries: new Array(capacity), // マッピングを格納する固定長の配列

    get(key) {
      const index = hashStringToInt(key, capacity);  // ハッシュ値を計算してインデックスを取得
      let current = this.entries[index];  //インデックスに対応する配列の要素（エントリ）を取得
      while (current) {  // (nextに)エントリが存在する限りループ
        if (current.key === key){
        return current.value;  // キーが一致した場合、値を返す
        }
        current = current.next; // 次の階層のエントリに移動
      }
      return undefined; // キーが見つからない場合はundefinedを返す
    },

    put(key, value) {
      const index = hashStringToInt(key, capacity);  // ハッシュ値を計算してインデックスを取得
      let current = this.entries[index];  //インデックスに対応する配列の要素（エントリ）を取得

      if (!current) {  // エントリ存在しない場合
        this.entries[index] = { key, value, next: undefined };  // 新しいエントリを作成して配列に格納
        this.size++;  // マッピング数を1増やす
        return;
      }
      else{  // エントリが存在する場合
        while (true) {  // エントリが存在する限りループ
          if (current.key === key) {
            current.value = value;  // キーが一致した場合、値を上書きして終了
            return;
          }
          if (!current.next) break; // 次の階層のエントリがない場合、ループを抜ける
          current = current.next; // 次の階層のエントリに移動
        }
        current.next = { key, value, next: undefined };  // 次の階層に新しいエントリを追加
        this.size++;  // マッピング数を1増やす
      }
    },

    remove(key) {
      const index = hashStringToInt(key, capacity);  // ハッシュ値を計算してインデックスを取得
      let current = this.entries[index];  //インデックスに対応する配列の要素（エントリ）を取得
      let prev = null;  // 1つ前のエントリを記録する変数

      while (current) {
        if (current.key === key) {  // キーが一致した場合
          if (prev) {
            prev.next = current.next;　　 // 前のエントリがある場合、前のエントリのnextに現在のエントリのnextを格納 (現在のエントリを削除)
          } else {
            this.entries[index] = current.next;  // 前のエントリがない場合、現在のインデックスに次のエントリを格納 (現在のエントリを削除)
          }
          this.size--;  // マッピング数を1減らす
          return;
        }
        [prev,current] = [current, current.next]; // キーが一致しなかった場合、次の階層のエントリに移動
      }
    },
  };
}

export function hashStringToInt(key, capacity) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);  // 各文字のコードポイントを加算してハッシュ値を計算
    //実際に使用されるハッシュ関数は31や37などの素数を使用することが多い 調べてみて
  }
  return hash % capacity;  // ハッシュ値を容量で割った余りを返す (容量以下の整数に変換)
}

function sample() {
  const hashTable = newHashTable(2);  // ハッシュテーブルの初期化、容量が小さいほど衝突が起こりやすい
  hashTable.put("key1", "value1");  // "key1"に"value1"を格納
  hashTable.put("key2", { value: "value2" });  // "key2"にオブジェクトを格納
  hashTable.put("key3", "value3");

  console.log(`size=${hashTable.size}`); // => size=3
  console.log(`key1=${hashTable.get("key1")}`); // => key1=value1
  console.log(`key2=${JSON.stringify(hashTable.get("key2"))}`); // => key2={"value":"value2"}
  console.log(`key3=${hashTable.get("key3")}`); // => key3=value3

  hashTable.put("key2", "new value");  //"key2" に新しい値 "new value" を上書き。
  console.log(`key2=${hashTable.get("key2")}`); // => key2=new value

  console.log("内部構造（entries）:");
  console.log(JSON.stringify(hashTable.entries, null, 2));  // entriesの内容を表示 // 対象の配列, 変換に使う関数, インデント数

  hashTable.remove("key2");
  console.log(`key2=${hashTable.get("key2")}`); // => key2=undefined
  console.log(`size=${hashTable.size}`); // => size=2
}

//sample();
