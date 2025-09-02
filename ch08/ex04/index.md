- 予想 -> わからない


- 実行結果

````
false true
true false
````

- 説明
1. nest.nm()　：通常の関数
   - nm は 通常の関数 なので、呼び出し元のオブジェクト nest が this になる
   - よって、this === obj → false、this === nest → true
2. nest.arrow()　：アロー関数
   - arrow は アロー関数 なので、this は 定義されたスコープの this を継承し、obj になる
   - よって、this === obj → true、this === nest → false