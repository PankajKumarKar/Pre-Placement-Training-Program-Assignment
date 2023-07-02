/*
💡 **Question 3**

Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

In one **step**, you can delete exactly one character in either string.

**Example 1:**

**Input:** word1 = "sea", word2 = "eat"

**Output:** 2

**Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
*/

function minSteps(word1, word2) {
  return minStepsRecursive(word1, word2, 0, 0);
}

function minStepsRecursive(word1, word2, index1, index2) {
  // Base cases:
  // If either index reaches the end of its respective string,
  // return the remaining characters in the other string.
  if (index1 === word1.length) {
    return word2.length - index2;
  }
  if (index2 === word2.length) {
    return word1.length - index1;
  }

  // If the characters at the current indices match, move to the next indices.
  if (word1[index1] === word2[index2]) {
    return minStepsRecursive(word1, word2, index1 + 1, index2 + 1);
  }

  // Calculate the minimum steps by exploring two possibilities:
  // 1. Delete character at index1 from word1 and move to the next index1.
  // 2. Delete character at index2 from word2 and move to the next index2.
  const deleteFromWord1 =
    1 + minStepsRecursive(word1, word2, index1 + 1, index2);
  const deleteFromWord2 =
    1 + minStepsRecursive(word1, word2, index1, index2 + 1);

  // Return the minimum steps from the two possibilities.
  return Math.min(deleteFromWord1, deleteFromWord2);
}

// Example usage:
const word1 = "sea";
const word2 = "eat";
const minNumSteps = minSteps(word1, word2);
console.log(minNumSteps); // Output: 2
