var createCounter = function (init) {
  let current = init;
  return {
    increment: function () {
      current += 1; // Increment the counter
      return current; // Return the updated value
    },
    decrement: function () {
      current -= 1; // Decrement the counter
      return current; // Return the updated value
    },
    reset: function () {
      current = init; // Reset the counter to the initial value
      return current; // Return the reset value
    },
  };
};
