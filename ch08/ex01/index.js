// 引数は2つのため丸括弧必要
// 関数本体がreturn文だけではないのでreturn,中括弧,セミコロン省略不可
export const array_C = (n,c) => {
    let result = [];
    for (let i = 0; i < n; i++) {
        console.log(c);
        result.push(c);
    }
    return result;
}

// 引数は1つのため、丸括弧は不要
// 関数本体がreturn文だけのため、returnとセミコロン、中括弧は省略可能
// prettier-ignore
export const square = x => x * x

// 引数はないため、丸括弧だけ必要
// 関数本体がreturn文だけのため、returnキーワードとセミコロン、中括弧は省略可能
// prettier-ignore
export const getNow = () => Date.now()