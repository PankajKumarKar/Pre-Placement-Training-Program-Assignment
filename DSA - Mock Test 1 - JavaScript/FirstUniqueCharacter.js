/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
a. 1 <= s.length <= 10^5
b. s consists of only lowercase English letters.
*/

function firstUniqChar(s) {
  const charCount = {}; // Object to store character count

  // Count the occurrences of each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the index of the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount[char] === 1) {
      return i;
    }
  }

  return -1; // No non-repeating character found
}

// Example usage:
const s = "leetcode";
const result = firstUniqChar(s);
console.log(result);
