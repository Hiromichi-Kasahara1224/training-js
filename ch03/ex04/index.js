function Length(str) {
  return str.length;
}

function Compare(A, B) {
  if (A === B) {
    return true;
  } else {
    return false;
  }
}

console.log(Length("💯")); // 2

export { Compare, Length };
