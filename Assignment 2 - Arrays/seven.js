/*
Question 7
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true
*/

function isMonotonic(nums) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      isIncreasing = false;
    }

    if (nums[i] > nums[i - 1]) {
      isDecreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
}

// Example usage
const nums = [1, 2, 2, 3];
const isMonotonicArray = isMonotonic(nums);
console.log(isMonotonicArray); // Output: true
