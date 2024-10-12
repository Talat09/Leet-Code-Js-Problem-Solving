var filter = function (arr, fn) {
  const filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filterArr.push(arr[i]);
    }
  }
  return filterArr;
};
