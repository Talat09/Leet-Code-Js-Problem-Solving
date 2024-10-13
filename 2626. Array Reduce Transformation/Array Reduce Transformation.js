var reduce = function (nums, fn, init) {
  let res = init; //Declare a variable "res" and set it it equal to the initial value.
  for (let i = 0; i < nums.length; i++) {
    //Loop over each value in the array
    res = fn(res, nums[i]); // set "res" = fn(res, arr[i]).
  }
  return res;
};
