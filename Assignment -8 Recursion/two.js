/*
💡 **Question 2**

Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

The following rules define a **valid** string:

- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

**Example 1:**

**Input:** s = "()"

**Output:**

true

*/

function isValidString(s) {
  return isValidStringRecursive(s, 0, 0);
}

function isValidStringRecursive(s, index, count) {
  // Base case: If we have reached the end of the string,
  // check if the count of opening and closing parentheses is balanced.
  if (index === s.length) {
    return count === 0;
  }

  const char = s[index];

  // If the current character is '(', increment the count.
  if (char === "(") {
    return isValidStringRecursive(s, index + 1, count + 1);
  }
  // If the current character is ')', decrement the count.
  else if (char === ")") {
    // Check if there is a valid opening parenthesis to match with.
    if (count === 0) {
      return false;
    }
    return isValidStringRecursive(s, index + 1, count - 1);
  }
  // If the current character is '*', try three possibilities:
  // 1. Treat '*' as an empty string.
  // 2. Treat '*' as an opening parenthesis '('.
  // 3. Treat '*' as a closing parenthesis ')'.
  else if (char === "*") {
    // Try treating '*' as an empty string.
    if (isValidStringRecursive(s, index + 1, count)) {
      return true;
    }
    // Try treating '*' as an opening parenthesis '('.
    if (isValidStringRecursive(s, index + 1, count + 1)) {
      return true;
    }
    // Try treating '*' as a closing parenthesis ')'.
    if (count > 0 && isValidStringRecursive(s, index + 1, count - 1)) {
      return true;
    }
  }

  return false; // Invalid character encountered
}

// Example usage:
const s = "()";
const isValid = isValidString(s);
console.log(isValid); // Output: true
