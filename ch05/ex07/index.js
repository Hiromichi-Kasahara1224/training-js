function f() {
  try {
    return true;
  } finally {
    return false;
  }
}

console.log(f());

//予想
//return true が実行されて終了

//結果
//false が返る

//理由
//finally ブロックが実行されると、その中の return false が優先されるため
