const cummulativeSum = (arr) => {
  if (arr.length === 0) return [];
  let res = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    res[i] = res[i - 1] + arr[i];
  }
  return res;
};

console.log(cummulativeSum([1, 2, 3, 4]));
console.log(cummulativeSum([1, 1, 1, 1, 1]));
console.log(cummulativeSum([1, 3, 5, 7, 9]));
