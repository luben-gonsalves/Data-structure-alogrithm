function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSort(arr, startIndex, endIndex) {
  if (arr.length <= 1) return arr;

  var swapPosition = Math.floor((arr.length - 1) / 2);
  var pivot = arr.splice(swapPosition, 1);
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([1, 2, 5, 5, 5, 5, 5, 5, 3, 15, 12, 5]));
