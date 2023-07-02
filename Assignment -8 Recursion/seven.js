/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

**Example 1:**

**Input:** s = "3[a]2[bc]"

**Output:** "aaabcbc"
*/

function decodeString(s) {
  let index = 0;

  function decodeHelper() {
    let result = "";

    while (index < s.length && s[index] !== "]") {
      if (isNaN(parseInt(s[index]))) {
        result += s[index];
        index++;
      } else {
        let count = 0;
        while (!isNaN(parseInt(s[index]))) {
          count = count * 10 + parseInt(s[index]);
          index++;
        }
        index++; // Skip the opening bracket '['
        const decodedString = decodeHelper();
        index++; // Skip the closing bracket ']'
        result += decodedString.repeat(count);
      }
    }

    return result;
  }

  return decodeHelper();
}

// Example usage:
const s = "3[a]2[bc]";
const decodedString = decodeString(s);
console.log(decodedString); // Output: "aaabcbc"
