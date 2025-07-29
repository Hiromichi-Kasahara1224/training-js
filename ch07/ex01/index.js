export function addMatrix(matrix1, matrix2) {
  if (
    matrix1.length !== matrix2.length ||      //行の数を比較
    matrix1[0].length !== matrix2[0].length   //列の数を比較
  ) {
    throw new Error("Matrices must have the same dimensions");
  }

  const result = new Array(matrix1.length);
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = new Array(matrix1[i].length).fill(0);   //結果格納用の行列を作成し、初期値を0に設定
  }

  for (let row = 0; row < matrix1.length; row++) {
    for (let col = 0; col < matrix1[row].length; col++) {
      result[row][col] = matrix1[row][col] + matrix2[row][col];  //各要素を加算
    }
  }

  return result;
}

export function multiplyMatrix(matrix1, matrix2) {
  if (matrix1[0].length !== matrix2.length) {  //matrix1 の列数と matrix2 の行数が一致しているか確認
    throw new Error(
      "Number of columns in the first matrix must match the number of rows in the second matrix"
    );
  }

  const result = new Array(matrix1.length);
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = new Array(matrix2[0].length).fill(0);  //結果格納用の行列を作成し、初期値を0に設定
  }

  for (let row = 0; row < matrix1.length; row++) {
    for (let col = 0; col < matrix2[0].length; col++) {
      for (let k = 0; k < matrix1[0].length; k++) {
        result[row][col] += matrix1[row][k] * matrix2[k][col];  //行列の要素を掛け合わせて加算
      }
    }
  }

  return result;
}
