const mergeSortedArrays = (arr, index) => {
  let result = [];
  let i = 0,
    j = index + 1;

  while (i <= index && j < arr.length) {
    if (arr[i] > arr[j]) {
      result.push(arr[j]);
      j++;
    } else {
      result.push(arr[i]);
      i++;
    }
  }
  while (i <= index) {
    result.push(arr[i]);
    i++;
  }

  while (j < arr.length) {
    result.push(arr[j]);
    j++;
  }
  return result;
};

console.log(mergeSortedArrays([1, 3, 5, 7, 9, 11, 0, 4, 6, 8], 5));
