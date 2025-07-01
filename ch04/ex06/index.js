// 何らかのリサイズを行う関数と思って読んで下さい
//
// - params には undefined またはオブジェクトが与えられる
// - params.maxWidth が与えられる場合 (正の整数と仮定して良い) はその値を利用する
// - params.maxHeight が与えられる場合 (正の整数と仮定して良い) はその値を利用する
function resize(params) {
  let maxWidth = 600;
  let maxHeight = 480;

  if (params && params.maxWidth) {
    maxWidth = params.maxWidth;
  }

  if (params && params.maxHeight) {
    maxHeight = params.maxHeight;
  }

  console.log({ maxWidth, maxHeight });
}

function resize1(params) {
  let maxWidth = 600;
  let maxHeight = 480;
  params && params.maxWidth && (maxWidth = params.maxWidth); // paramsが存在し、params.maxWidthがtruthyな値の場合、右側の代入が実行される
  params && params.maxHeight && (maxHeight = params.maxHeight); // paramsがnullまたはundefinedの場合、&&の左側がfalseとなり、右側の代入は実行されない
  return { maxWidth, maxHeight };
}

function resize2(params) {
  let maxWidth = (params && params.maxWidth) || 600; // paramsが存在し、params.maxWidthがtruthyな値の場合、その値がmaxWidthに代入される
  let maxHeight = (params && params.maxHeight) || 480; // paramsがnullまたはundefinedの場合、||の左側がfalseとなり、右側のデフォルト値が代入される
  return { maxWidth, maxHeight };
}

function resize3(params) {
  let maxWidth = 600;
  let maxHeight = 480;
  //maxWidth = params.maxWidth; //params.maxWidthがnullまたはundefinedの場合、エラーになる
  maxHeight = params?.maxHeight; //params?.maxHeightがnullまたはundefinedの場合でもエラーにならず、undefinedを返す
  return { maxWidth, maxHeight };
}

function resize4(params) {
  let maxWidth = params?.maxWidth ?? 600; //params?.maxHeightがnullまたはundefinedの場合undefinedを返すので、デフォルト値の600を代入する
  let maxHeight = params?.maxHeight ?? 480; //paramsに?が無いと、paramsがnullまたはundefinedの場合エラーになる
  return { maxWidth, maxHeight };
}

export { resize, resize1, resize2, resize3, resize4 };
