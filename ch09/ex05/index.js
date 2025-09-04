// instanceof演算子：あるオブジェクトが特定のコンストラクター関数から生成されたかどうかを確認するために使用される

// instanceofの代替関数
export function instanceOf(object, constructor) {
  if (object == null || typeof object !== "object") return false; // nullやundefined、プリミティブ型はfalseを返す

  let proto = Object.getPrototypeOf(object); // Object.getPrototypeOf(object)で一つ上のプロトタイプを取得
  const targetProto = constructor.prototype; // コンストラクターのprototypeプロパティを取得

  // プロトタイプチェーンをたどりながら、コンストラクターのprototypeプロパティと比較
  while (proto) {
    if (proto === targetProto) return true; // 一致したらtrueを返す

    // さらに一つ上のプロトタイプを取得
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}
