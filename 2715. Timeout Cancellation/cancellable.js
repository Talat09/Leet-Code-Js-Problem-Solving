var cancellable = function (fn, args, t) {
  // Set a timeout to call fn after t milliseconds
  const timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  // Return a cancel function that clears the timeout
  return function cancelFn() {
    clearTimeout(timeoutId); // Cancels the scheduled execution
  };
};
