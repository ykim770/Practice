// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.
var runningSum = function (nums) {
  // initialize an array with the first number of nums
  const sum = [nums[0]];
  // declare a for loop to run from nums[1] to the end
  for (let i = 1; i < nums.length; i++) {
    // push the sum of the current value of nums with the
    // previous index of sum
    sum.push(nums[i] + sum[i - 1]);
  }
  // return the sum array
  return sum;
};
console.log(runningSum((nums = [1, 2, 3, 4])));

// Try using reduce
function runningSum1(nums) {
  return nums.reduce(
    (acc, currV, i) => {
      currV = nums[i + 1];
      acc.push(acc[i] + currV);
      return acc;
    },
    [nums[0]]
  );
}
console.log(runningSum1((nums = [1, 2, 3, 4])));
// ISSUE:
// currV is starting at nums[0]
// I want currV to start at nums[1] OR some way of getting no initial value in play
