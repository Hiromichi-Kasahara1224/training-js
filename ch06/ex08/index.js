// テンプレートオブジェクトに存在しないプロパティを対象のオブジェクトから削除する関数
export function restrict(target, template) {  //template: 1つのオブジェクト
  for (const key of Object.keys(target)) {  //targetオブジェクトが持つプロパティをループ
    if (!template.hasOwnProperty(key)) {  //templateオブジェクトに存在しないプロパティは削除
      delete target[key];
    }
  }
  return target;
}

// ソースオブジェクトに存在するプロパティを対象のオブジェクトから削除する関数
export function substract(target, ...sources) {  //sources: オブジェクトの配列 (単数または複数)
  for (const source of sources) {               // sourceオブジェクトをループ
    for (const key of Object.keys(source)) {  // sourceオブジェクトが持つプロパティをループ
      if (target.hasOwnProperty(key)) {  // targetオブジェクトに存在するプロパティは削除
        delete target[key];
      }
    }
  }
  return target;
}
