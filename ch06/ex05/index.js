// プロトタイプオブジェクトを作成
const proto = {};
Object.defineProperty(proto, '1', { value: 'proto-1', enumerable: true });
Object.defineProperty(proto, 'b', { value: 'proto-b', enumerable: true });
Object.defineProperty(proto, 'x', { value: 'proto-x', enumerable: true });

// protoをプロトタイプに持つオブジェクトを作成
const obj = Object.create(proto);

// 条件を満たすプロパティを定義
Object.defineProperty(obj, '1', { value: 'own-1', enumerable: true }); // 同名数値
Object.defineProperty(obj, '2', { value: 'own-2', enumerable: true }); // 異なる数値
Object.defineProperty(obj, 'b', { value: 'own-b', enumerable: true }); // 同名文字列
Object.defineProperty(obj, 'c', { value: 'own-c', enumerable: true }); // 異なる文字列
Object.defineProperty(obj, 'x', { value: 'own-x', enumerable: false }); // 同名文字列,列挙不可
Object.defineProperty(obj, 'y', { value: 'own-y', enumerable: false }); // 異なる文字列,列挙不可

// for...in で列挙順を確認
console.log('列挙順の確認');
for (let key in obj) {
  console.log(key, '=', obj[key]);
}

//列挙順の確認
//1 = own-1
//2 = own-2
//b = own-b
//c = own-c
