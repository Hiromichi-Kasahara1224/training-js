Fizz(3の倍数かつ5の倍数でない)のとき
(i % 3) が 0(false) となるので、 (i % 3 ? "" : "Fizz") は　"Fizz"、
(i % 5) が 0以外(true) となるので、 (i % 5 ? "" : "Buzz") は　"" となる。
よって、"Fizz" + "" = "Fizz" となる。
"Fizz"は true として扱うため、"Fizz" || i の評価は "Fizz" となり、"Fizz" が出力される。

Buzz(5の倍数かつ3の倍数でない)のとき
(i % 3) が 0以外(true) となるので、 (i % 3 ? "" : "Fizz") は　""、
(i % 5) が 0(false) となるので、 (i % 5 ? "" : "Buzz") は　"Buzz" となる。
よって、"" + "Buzz" = "Buzz" となる。
"Buzz"は true として扱うため、"Buzz" || i の評価は "Buzz" となり、"Buzz" が出力される。

FizzBuzz(3の倍数かつ5の倍数)のとき
(i % 3) が 0(false) となるので、 (i % 3 ? "" : "Fizz") は　"Fizz"、
(i % 5) が 0(false) となるので、 (i % 5 ? "" : "Buzz") は　"Buzz" となる。
よって、"Fizz" + "Buzz" = "FizzBuzz" となる。
"FizzBuzz"は true として扱うため、"FizzBuzz" || i の評価は "FizzBuzz" となり、"FizzBuzz" が出力される。

数値(3の倍数でも5の倍数でもない)のとき
(i % 3) が 0以外(true) となるので、 (i % 3 ? "" : "Fizz") は　""、
(i % 5) が 0以外(true) となるので、 (i % 5 ? "" : "Buzz") は　"" となる。
よって、"" + "" = "" となる。
""は false として扱うため、"" || i の評価は i となり、i が出力される。
