function check31_ifElse(monthName) {
  const monthsWith31Days = ["Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"];

  if (monthsWith31Days.includes(monthName)) {
    return true;
  } else {
    return false;
  }
}

function check31_switch(monthName) {
  switch (monthName) {
    case "Jan":
    case "Mar":
    case "May":
    case "Jul":
    case "Aug":
    case "Oct":
    case "Dec":
      return true;
    default:
      return false;
  }
}

function check31(monthName) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthIndex = months.indexOf(monthName); //配列の中から指定した値の位置を探す (0~11)

  //console.log(monthIndex); // 月のインデックスを表示

  const date = new Date(2025, monthIndex + 1, 0); //0は1月,1は2月 // 翌月の0日＝指定月の最終日 //ローカルタイムゾーンで設定

  //console.log("Date: ", date); // UTC日時を表示
  //console.log("UTC日時: ", date.toUTCString()); // UTC日時を表示
  //console.log("ローカル日時: ", date.toString()); // ローカル日時を表示
  //console.log("日時の値: ", date.getDate()); // 日付の値を表示

  return date.getDate() === 31;
}

console.log(check31("Jan")); // true

export { check31, check31_ifElse, check31_switch };
