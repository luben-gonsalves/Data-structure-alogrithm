const positiveCummulativeSum = (arr) => {
  if (arr.length === 0) return [];
  let res = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    res[i] = res[i - 1] + arr[i];
  }

  return res.filter((num) => num > 0);
};

console.log(positiveCummulativeSum([1, -2, 3, 4, -6]));
console.log(positiveCummulativeSum([1, -1, -1, -1, 1]));
console.log(positiveCummulativeSum([1, 3, 5, 7]));
