var expect = function (val) {
  let current = val;
  return {
    toBe: function (expectedVal) {
      if (current === expectedVal) {
        return true; // Return true if values are equal
      } else {
        throw new Error("Not Equal"); // Throw an error if values are not equal
      }
    },
    notToBe: function (expectedVal) {
      if (current !== expectedVal) {
        return true; // Return true if values are not equal
      } else {
        throw new Error("Equal"); // Throw an error if values are equal
      }
    },
  };
};
