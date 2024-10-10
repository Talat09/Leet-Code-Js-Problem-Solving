var createCounter = function (n) {
  let firstCall = true;
  let currentValue; // To store the current value
  return function () {
    if (firstCall) {
      firstCall = false;
      currentValue = n;
      return currentValue;
    } else {
      currentValue = currentValue + 1;
      return currentValue;
    }
  };
};
