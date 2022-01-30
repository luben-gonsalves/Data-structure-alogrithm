function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, startIndex, endIndex) {
  if (startIndex >= endIndex) return;
  let pivotIndex = startIndex;
  let leftIndex = startIndex + 1;
  let rightIndex = endIndex;
  while (rightIndex >= leftIndex) {
    if (
      array[leftIndex] > array[pivotIndex] &&
      array[rightIndex] < array[pivotIndex]
    ) {
      [array[leftIndex], array[rightIndex]] = [
        array[rightIndex],
        array[leftIndex],
      ];
    }
    if (array[leftIndex] <= array[pivotIndex]) {
      leftIndex += 1;
    }
    if (array[rightIndex] >= array[pivotIndex]) {
      rightIndex -= 1;
    }

    [array[rightIndex], array[pivotIndex]] = [
      array[pivotIndex],
      array[rightIndex],
    ];
    leftSubArrayIsSmaller =
      rightIndex - 1 - startIndex < endIndex - (rightIndex + 1);
    if (leftSubArrayIsSmaller) {
      quickSortHelper(array, startIndex, rightIndex - 1);
      quickSortHelper(array, rightIndex + 1, endIndex);
    } else {
      quickSortHelper(array, rightIndex + 1, endIndex);
      quickSortHelper(array, startIndex, rightIndex - 1);
    }
  }
}

console.log(quickSort([1, 2, 5, 3, 15, 12]));
