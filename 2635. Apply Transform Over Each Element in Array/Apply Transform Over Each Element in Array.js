var map = function (arr, fn) {
  const result = new Array(arr.length); // Pre-allocate the array

  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i], i); // Direct assignment to avoid using push()
  }

  return result;
};
