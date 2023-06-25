/*
Question 8
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
*/
function minimumDifference(nums, k) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  const n = nums.length;
  const smallest = nums[0] + k;
  const largest = nums[n - 1] - k;

  // Calculate the initial difference between the maximum and minimum elements
  let initialDifference = nums[n - 1] - nums[0];

  // Check if the smallest and largest values are swapped
  if (smallest > largest) {
    [smallest, largest] = [largest, smallest];
  }

  // Update the difference if necessary
  if (smallest > nums[0]) {
    initialDifference = Math.min(initialDifference, largest - nums[0]);
  }

  if (largest < nums[n - 1]) {
    initialDifference = Math.min(initialDifference, nums[n - 1] - smallest);
  }

  return initialDifference;
}

// Example usage
const nums = [1];
const k = 0;
const minScore = minimumDifference(nums, k);
console.log(minScore); // Output: 0
