/*
Question 7
You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

Example 1:
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

Explanation: The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]
*/

function findMissingRanges(nums, lower, upper) {
  const ranges = [];

  // Helper function to add range to the result
  const addRange = (start, end) => {
    if (start === end) {
      ranges.push(`${start}`);
    } else {
      ranges.push(`${start}->${end}`);
    }
  };

  // Check if a number is missing and add the corresponding range
  const checkMissing = (start, end) => {
    if (start > end) {
      return;
    }
    if (start === end) {
      addRange(start, end);
    } else {
      addRange(start, end);
    }
  };

  // Check the missing numbers before the first element
  checkMissing(lower, nums[0] - 1);

  // Check the missing numbers between consecutive elements
  for (let i = 1; i < nums.length; i++) {
    checkMissing(nums[i - 1] + 1, nums[i] - 1);
  }

  // Check the missing numbers after the last element
  checkMissing(nums[nums.length - 1] + 1, upper);

  return ranges;
}

// Example usage
const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;
const result = findMissingRanges(nums, lower, upper);
console.log(result); // Output: ["2", "4->49", "51->74", "76->99"]
