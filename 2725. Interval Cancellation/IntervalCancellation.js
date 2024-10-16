var cancellable = function (fn, args, t) {
  let results = [];
  let startTime = Date.now(); // start time
  let intervalId = null;

  // imidiate function start
  function callFn() {
    let currentTime = Date.now() - startTime;
    let returned = fn(...args);
    results.push({ time: currentTime, returned });
  }

  // first call function
  callFn();

  // every t mlsecond call function
  intervalId = setInterval(callFn, t);

  // cancelFn making and return
  return function cancelFn() {
    clearInterval(intervalId); // clearInterval
  };
};
