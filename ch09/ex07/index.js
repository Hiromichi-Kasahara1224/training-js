// LinkedListクラスの実装
export class LinkedList {
  #head = null;
  #tail = null;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  push(value) {
    const newNode = { value, next: null };
    if (!this.#head) { // リストが空の場合
      this.#head = newNode; // 新しいノードをheadに設定
      this.#tail = newNode; // 新しいノードをtailに設定
    } else { // リストに要素がある場合
      this.#tail.next = newNode; // 既存の最後のノードのnextを新しいノードに設定
      this.#tail = newNode; // 新しいノードを最後のノードとして設定
    }
  }

  pushAll(...items) {
    items.forEach((item) => this.push(item)); // 各アイテムをpushメソッドで追加
  }

  toString() {
    let current = this.#head;
    const values = [];
    while (current) {
      values.push(current.value); // ノードの値を配列に追加
      current = current.next;  // 次のノードに移動
    }
    return "[" + values.join(", ") + "]"; // 配列を文字列に変換して返す
  }
}

// これ以下を修正
// 要素のpush回数を記録するLinkedList
export class InstrumentedLinkedList {
  #list; // 追加部分
  #pushCount = 0;

  // 追加部分(コンストラクタ)
  constructor() {
    this.#list = new LinkedList();  // 合成 (クラスの中に別のクラスのインスタンスを持つ)
  }

  /**
   * 要素のpush操作が行われた回数
   */
  get pushCount() {
    return this.#pushCount;
  }

  push(item) {
    this.#list.push(item); // 変更部分（super.push(item);)
    this.#pushCount++;
  }

  pushAll(...items) {
    this.#list.pushAll(...items); // 変更部分（super.pushAll(...items);)
    this.#pushCount += items.length;
  }
}
