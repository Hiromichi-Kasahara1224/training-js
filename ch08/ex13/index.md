````
function f(input) {
  const f = new Function(`return "Hello, " + ${input}`);
  console.log(f());
}
````

上記のコードでは、input をそのまま new Function() に渡しており、
悪意のあるコードがそのまま実行されてしまう危険性がある。

