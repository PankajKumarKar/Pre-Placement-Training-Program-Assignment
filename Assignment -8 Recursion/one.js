/*
💡 **Question 1**

Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

**Example 1:**

**Input:** s1 = "sea", s2 = "eat"

**Output:** 231

**Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

Deleting "t" from "eat" adds 116 to the sum.

At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

*/

function findMinASCIISum(s1, s2, i = 0, j = 0) {
  // Base case: both indices reached the end of their respective strings
  if (i === s1.length && j === s2.length) {
    return 0;
  }

  // Check if either index has reached the end of its string
  if (i === s1.length) {
    // Delete remaining characters in s2 and add their ASCII values to the sum
    return findMinASCIISum(s1, s2, i, j + 1) + s2.charCodeAt(j);
  }

  if (j === s2.length) {
    // Delete remaining characters in s1 and add their ASCII values to the sum
    return findMinASCIISum(s1, s2, i + 1, j) + s1.charCodeAt(i);
  }

  // Check if characters at indices i and j are the same
  if (s1[i] === s2[j]) {
    // Move to the next indices without adding any ASCII value to the sum
    return findMinASCIISum(s1, s2, i + 1, j + 1);
  }

  // Calculate the minimum ASCII sum by recursively exploring two possibilities:
  // 1. Delete character at index i from s1 and move to the next index i + 1
  // 2. Delete character at index j from s2 and move to the next index j + 1
  const deleteCharFromS1 = findMinASCIISum(s1, s2, i + 1, j) + s1.charCodeAt(i);
  const deleteCharFromS2 = findMinASCIISum(s1, s2, i, j + 1) + s2.charCodeAt(j);

  // Return the minimum sum from the two possibilities
  return Math.min(deleteCharFromS1, deleteCharFromS2);
}

// Example usage:
const s1 = "sea";
const s2 = "eat";
const minASCIISum = findMinASCIISum(s1, s2);
console.log(minASCIISum); // Output: 231
