const evenNumberDigits = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let digits = arr[i].toString().length;
    if (digits % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(
  evenNumberDigits([42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442])
);
