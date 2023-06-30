/*

💡 **Question 4**

Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

**Example 1:**

**Input:** nums = [0,1]

**Output:** 2

**Explanation:**

[0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
*/

function findMaxLength(nums) {
  const countMap = { 0: -1 };
  let count = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count--;
    }

    if (count in countMap) {
      const len = i - countMap[count];
      maxLen = Math.max(maxLen, len);
    } else {
      countMap[count] = i;
    }
  }

  return maxLen;
}

const nums = [0, 1];
const result = findMaxLength(nums);
console.log(result);
