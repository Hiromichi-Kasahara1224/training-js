1. letの場合

   - 予想：0,100 が表示される
   - 結果: 0,1,2,3,4,5,6,7,8,9 ReferenceError: i is not defined
   - 理由:
     - letはブロックスコープであり、この関数のスコープ内でのみ有効。
     - ループの外で console.log(i); を実行すると ReferenceError になる。

2. varの場合

   - 結果: 0,1,2,3,4,5,6,7,8,9,10
   - 理由:
     - varは関数スコープであり、ループの外でもiが参照可能であるため、ReferenceErrorが出ない
     - function の中の i は その関数スコープ内だけのローカル変数であるため、ループの i には影響を与えない。

3. 消した場合
   - 結果: ReferenceError: i is not defined
   - 理由: 変数iが定義されていないため、参照できない。
