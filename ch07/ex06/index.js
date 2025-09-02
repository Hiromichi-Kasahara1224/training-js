const data = [
    { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
    { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
    { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
    { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
    { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
    { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
    { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
    { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
    { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

data.sort((a,b)=>{
  if(a.math > b.math){
      return -1;  //そのままbreak
  }else if(a.math < b.math){
      return 1;   //入れ替えてbreak
  }

  // mathが同じ場合はchemistryで比較
  if(a.chemistry > b.chemistry){
      return -1;
  }else if(a.chemistry < b.chemistry){
      return 1;
  }

  // chemistryも同じ場合はgeographyで比較
  if(a.geography > b.geography){
      return -1;
  }else if(a.geography < b.geography){
      return 1;
  }

  // 全て同じ場合はそのまま
  return 0;
})

//以下のような書き方もある

//data.sort((a, b) => {
//    if (b.math !== a.math) {
//        return b.math - a.math;
//    } else if (b.chemistry !== a.chemistry) {
//        return b.chemistry - a.chemistry;
//    } else {
//        return b.geography - a.geography;
//    }
//});

//data.sort((a, b) => b.math - a.math || b.chemistry - a.chemistry || b.geography - a.geography ); // 複数の条件を一度に比較する方法 //一番きれいな書き方
//data.sort((a, b) => b.geography - a.geography).sort((a, b) => b.chemistry - a.chemistry).sort((a, b) => b.math - a.math);  //安定ソートでないと同じ結果にならない

console.log(data);