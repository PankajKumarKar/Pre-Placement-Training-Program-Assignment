/*
Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/

function moveZeros(nums) {
  let insertPos = 0; // Position to insert non-zero elements

  // Move non-zero elements to the front of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // Fill the remaining positions with zeros
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }

  return nums;
}

// Example usage:
const nums = [0, 1, 0, 3, 12];
const result = moveZeros(nums);
console.log(result);
