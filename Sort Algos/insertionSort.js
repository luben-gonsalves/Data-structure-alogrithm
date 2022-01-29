const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(insertionSort([14, 10, 5, 6]));

console.log(insertionSort([3, 11, 4, 200]));
console.log(insertionSort([5, 4, 3, 2, 1]));
