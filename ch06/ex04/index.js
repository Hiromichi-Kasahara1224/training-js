const obj = {};

// プロパティ 'allTrue' を定義
Object.defineProperty(obj, 'allTrue', {
  value: 5,
  writable: true,       // 書き換え可
  enumerable: true,     // 列挙可
  configurable: true    // 削除可
});

// プロパティ 'allFalse' を定義
Object.defineProperty(obj, 'allFalse', {
  value: 10,
  writable: false,       // 書き換え不可
  enumerable: false,     // 列挙不可
  configurable: false    // 削除不可
});

console.log('初期値 allTrue:', obj.allTrue); // 5
console.log('初期値 allFalse:', obj.allFalse, '\n'); // 10

// プロパティの書き換え
obj.allTrue = 50;
try {
  obj.allFalse = 100;
} catch (e) {
  console.error('書き換えエラー:', e.message);
}
console.log('変更後:', obj.allTrue); // 50 → writable: true のため変更される
console.log('変更後:', obj.allFalse, '\n'); // 10 → writable: false のため変更されない


// hasOwnProperty で確認
console.log('hasOwnProperty allTrue:', obj.hasOwnProperty('allTrue')); // true → 自身のプロパティとして存在
console.log('hasOwnProperty allFalse:', obj.hasOwnProperty('allFalse'), '\n'); // true → 自身のプロパティとして存在


// propertyIsEnumerable で確認
console.log('propertyIsEnumerable allTrue:', obj.propertyIsEnumerable('allTrue')); // true → enumerable: true のため列挙可
console.log('propertyIsEnumerable allFalse:', obj.propertyIsEnumerable('allFalse'), '\n'); // false → enumerable: false のため列挙不可


// プロパティの削除
delete obj.allTrue;
try {
  delete obj.allFalse;
} catch (e) {
  console.error('削除エラー:', e.message);
}
console.log('削除後:', obj.allTrue); // undefined → configurable: true のため削除される
console.log('削除後:', obj.allFalse, '\n'); // 10 → configurable: false のため削除されない

