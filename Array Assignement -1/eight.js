/*
💡 **Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

**Example 1:**
Input: nums = [1,2,2,4]
Output: [2,3]
*/

function findErrorNums(nums) {
  const n = nums.length;
  const count = new Array(n + 1).fill(0);

  let duplicate, missing;

  for (let num of nums) {
    count[num]++;
  }

  for (let i = 1; i <= n; i++) {
    if (count[i] === 0) {
      missing = i;
    } else if (count[i] === 2) {
      duplicate = i;
    }
  }

  return [duplicate, missing];
}

const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result); // Output: [2, 3]
