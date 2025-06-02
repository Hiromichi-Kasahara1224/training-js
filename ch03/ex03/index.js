function Compare(A, B) {
  if (Math.abs(A - B) < 10 ** -10) {
    return true;
  } else {
    return false;
  }
}

export { Compare };
