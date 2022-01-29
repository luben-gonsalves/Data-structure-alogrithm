const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let noSwap = true;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(bubbleSort([3, 11, 4, 200]));
console.log(bubbleSort([5, 4, 3, 2, 1]));
