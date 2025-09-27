export class LinkedList {
  #head = null;
  #tail = null;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  push(value) {
    const newNode = { value, next: null };
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
  }

  pushAll(...items) {
    items.forEach((item) => this.push(item));
  }

  toString() {
    let current = this.#head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return "[" + values.join(", ") + "]";
  }
}

/**
 * 要素のpush回数を記録するLinkedList
 */
export class InstrumentedLinkedList extends LinkedList {
  #pushCount = 0;

  /**
   * 要素のpush操作が行われた回数
   */
  get pushCount() {
    return this.#pushCount;
  }

  push(item) {
    super.push(item);
    this.#pushCount++;
  }

  pushAll(...items) {
    super.pushAll(...items);
    this.#pushCount += items.length;
  }
}

// 以下はテスト結果：エラーになる

// FAIL  ch09/ex07/index.test.js
//  InstrumentedLinkedList
//    √ #push (5 ms)
//    × #pushAll (7 ms)
//
//  ● InstrumentedLinkedList › #pushAll
//
//    expect(received).toBe(expected) // Object.is equality
//
//    Expected: 2
//    Received: 4
//
//      10 |     const list = new InstrumentedLinkedList();
//      11 |     list.pushAll("A", "B");
//    > 12 |     expect(list.pushCount).toBe(2);
//         |                            ^
//      13 |   });
//      14 | });
//      15 |
//
//      at Object.toBe (ch09/ex07/index.test.js:12:28)
//
