/*
Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

**Example 1:**

**Input:** s = "ab", goal = "ba"

**Output:** true

**Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
*/

function canSwapStrings(s, goal) {
  function helper(i, j, count) {
    if (count > 2) {
      return false;
    }

    if (i >= s.length && j >= goal.length) {
      return count === 2;
    }

    if (i < s.length && j < goal.length && s[i] === goal[j]) {
      return helper(i + 1, j + 1, count);
    }

    return (
      (i < s.length && helper(i + 1, j, count + 1)) ||
      (j < goal.length && helper(i, j + 1, count + 1))
    );
  }

  return helper(0, 0, 0);
}

// Example usage:
const s = "ab";
const goal = "ba";
const result = canSwapStrings(s, goal);
console.log(result); // Output: true
