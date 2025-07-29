export function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = array.length - 1; j > i; j--) {
      if (array[j - 1] > array[j]) {
        // 要素を入れ替え
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  return array;
}