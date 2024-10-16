function memoize(fn) {
  const cache = new Map(); // Use a Map to store the cached results
  let callCount = 0; // Keep track of how many times the original function is called

  const memoizedFn = function (...params) {
    const key = JSON.stringify(params); // Convert parameters to a string to use as the cache key

    if (cache.has(key)) {
      return cache.get(key); // Return the cached result if it exists
    }

    // If the result is not in the cache, call the original function
    callCount++;
    const result = fn(...params);
    cache.set(key, result); // Store the result in the cache

    return result;
  };

  // Attach a method to get the call count
  memoizedFn.getCallCount = () => callCount;

  return memoizedFn;
}
