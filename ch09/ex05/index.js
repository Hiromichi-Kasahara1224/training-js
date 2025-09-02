export function instanceOf(object, constructor) {
  if (object == null || typeof object !== "object") return false;

  // Object.getPrototypeOf(object)で一つ上のプロトタイプを取得
  let proto = Object.getPrototypeOf(object);
  const targetProto = constructor.prototype;

  // プロトタイプチェーンをたどりながら、コンストラクターのprototypeプロパティと比較
  while (proto) {
    if (proto === targetProto) return true;

    // さらに一つ上のプロトタイプを取得
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}
