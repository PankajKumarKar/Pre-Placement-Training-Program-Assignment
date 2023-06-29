/*
💡 **Question 2**

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

**Input:** nums1 = [1,2,3], nums2 = [2,4,6]

**Output:** [[1,3],[4,6]]

*/

function findDistinctElements(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const distinctNums1 = [];
  const distinctNums2 = [];

  for (const num of set1) {
    if (!set2.has(num)) {
      distinctNums1.push(num);
    }
  }

  for (const num of set2) {
    if (!set1.has(num)) {
      distinctNums2.push(num);
    }
  }

  return [distinctNums1, distinctNums2];
}

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

const answer = findDistinctElements(nums1, nums2);
console.log(answer); // Output: [[1, 3], [4, 6]]
