const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        smallest = j;
      }
    }
    swap(arr, smallest, i);
  }
  return arr;
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(selectionSort([3, 11, 4, 200]));
console.log(selectionSort([5, 4, 3, 2, 1]));
