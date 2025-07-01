function escapeSequence_ifElse(str) {
  let escaped = "";
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c === "0") {
      escaped += "\0"; // ヌル文字
    } else if (c === "b") {
      escaped += "\b"; // バックスペース
    } else if (c === "t") {
      escaped += "\t"; // タブ
    } else if (c === "n") {
      escaped += "\n"; // 改行
    } else if (c === "v") {
      escaped += "\v"; // 垂直タブ
    } else if (c === "f") {
      escaped += "\f"; // 改ページ
    } else if (c === "r") {
      escaped += "\r"; // 復帰
    } else if (c === '"') {
      escaped += '"'; // ダブルクォート
    } else if (c === "'") {
      escaped += "'"; // シングルクォート
    } else if (c === "\\") {
      escaped += "\\\\"; // バックスラッシュ
    } else {
      escaped += c;
    }
  }
  return escaped;
}

function escapeSequence_switch(str) {
  let escaped = "";
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    switch (c) {
      case "0":
        escaped += "\0"; // ヌル文字
        break;
      case "b":
        escaped += "\b"; // バックスペース
        break;
      case "t":
        escaped += "\t"; // タブ
        break;
      case "n":
        escaped += "\n"; // 改行
        break;
      case "v":
        escaped += "\v"; // 垂直タブ
        break;
      case "f":
        escaped += "\f"; // 改ページ
        break;
      case "r":
        escaped += "\r"; // 復帰
        break;
      case '"':
        escaped += '"'; // ダブルクォート
        break;
      case "'":
        escaped += "'"; // シングルクォート
        break;
      case "\\":
        escaped += "\\\\"; // バックスラッシュ
        break;
      default:
        escaped += c;
    }
  }
  return escaped;
}

export { escapeSequence_ifElse, escapeSequence_switch };

const original = "abcdefghijkllmnopqrstuvwxyz 0 b t n v f r \" ' \\ ";
console.log(original);
console.log(escapeSequence_ifElse(original));
console.log(escapeSequence_switch(original));
