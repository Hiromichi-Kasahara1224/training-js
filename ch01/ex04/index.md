予想：
answer = 0 と表示される

結果：

1. 開発者ツールを開いた状態のタブで HTML を開く場合
   - コンソール上に `{ answer: 42 }` 、`{ answer: 0 }` と表示される。
2. HTML を開いた状態のタブで開発者ツールを開く場合
   - コンソール上に `{ answer: 0 }` 、`{ answer: 0 }` と表示される。

常に期待した結果を得るためには：
オブジェクトのコピーをコンソールに渡す必要がある
console.log(life); を
console.log(structuredClone(life));
に変更する
