# void 0 を用いる理由

- 以前、undefined はただのグローバル変数であり、以下のように中身を自由に書き換えられた。 　　<br>
  `var undefined = "こんにちは";` 　　<br>
  `alert(undefined)` // "こんにちは" 　　<br><br>
  このようにundefinedの値が常にundefinedであるとは限らないことから、undefinedを使うのは避けるべきであった。　<br><br>

- void 0は、常に"undefined"を返すため、undefinedの値が変わることがなく、これまでは使われていた。<br>

# void 0 を用いる理由

ECMAScript 5 仕様により、undefined は設定不可、書込不可のプロパティとなったから。
