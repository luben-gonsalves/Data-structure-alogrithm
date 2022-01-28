const indenticalTwins = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

console.log(indenticalTwins([1, 2, 3, 2, 1]));
console.log(indenticalTwins([1, 2, 2, 3, 2, 1]));
console.log(indenticalTwins([1, 1, 1, 1]));
