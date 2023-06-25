/*
Question 5
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6
*/

function maximumProduct(nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  const n = nums.length;

  // Return the maximum of two possible products:
  // 1. Product of the three largest elements in the sorted array
  // 2. Product of the two smallest elements (negative values) and the largest element
  return Math.max(
    nums[0] * nums[1] * nums[n - 1],
    nums[n - 1] * nums[n - 2] * nums[n - 3]
  );
}

// Example usage
const nums = [1, 2, 3];
const maxProduct = maximumProduct(nums);
console.log(maxProduct); // Output: 6
