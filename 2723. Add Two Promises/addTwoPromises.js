var addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]) // resolve two promise
    .then((values) => {
      return values[0] + values[1]; // resolve with the sum of the two numbers
    });
};
