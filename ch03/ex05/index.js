function convertLFtoCRLF(text) {
  return text.replace(/(?<!\r)\n/g, "\r\n");
}

/*
 *  replace(A, B)は、Aにマッチする部分をBに置き換える
 *  /.../g は、正規表現の構文で、g は「global（全体）」の意味。つまり、文字列全体を対象にすべての一致を探す。
 *  (?<!...) は「前に...がない」場合にマッチする否定先読みの構文。
 *  \r はキャリッジリターン（CR）を表し、\n はラインフィード（LF）を表す。
 *  つまり、テキスト内のすべての \n のうち、直前に \r がないものだけを \r\n に変換する。
 */

function convertCRLFtoLF(text) {
  return text.replace(/\r\n/g, "\n");
}

// 同様に、テキスト内のすべての CRLF（\r\n）を LF（\n）に変換する

export { convertLFtoCRLF, convertCRLFtoLF };
