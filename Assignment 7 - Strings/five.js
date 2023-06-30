/*
💡 **Question 5**

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

**Example 1:**

**Input:** s = "abcdefg", k = 2

**Output:**

"bacdfeg"

*/

function reverseStr(s, k) {
  const chars = s.split("");
  let i = 0;

  while (i < chars.length) {
    reverseRange(chars, i, i + k - 1);
    i += 2 * k;
  }

  return chars.join("");
}

function reverseRange(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Example usage
const s = "abcdefg";
const k = 2;
const result = reverseStr(s, k);
console.log(result); // "bacdfeg"
