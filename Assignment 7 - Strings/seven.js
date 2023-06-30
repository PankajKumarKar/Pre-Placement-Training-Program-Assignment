/*
💡 **Question 7**

Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**

**Input:** s = "ab#c", t = "ad#c"

**Output:** true

**Explanation:**

Both s and t become "ac".

*/

function processString(str) {
  const processed = [];

  for (const char of str) {
    if (char === "#") {
      processed.pop();
    } else {
      processed.push(char);
    }
  }

  return processed.join("");
}

function areEqualAfterBackspace(s, t) {
  const processedS = processString(s);
  const processedT = processString(t);

  return processedS === processedT;
}

// Example usage
const s = "ab#c";
const t = "ad#c";
const result = areEqualAfterBackspace(s, t);
console.log(result); // true
