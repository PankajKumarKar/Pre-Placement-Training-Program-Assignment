/*
💡 **Question 4**

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc"
*/

function reverseWords(s) {
  const words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = reverseString(words[i]);
  }

  return words.join(" ");
}

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Example usage
const s = "Let's take LeetCode contest";
const result = reverseWords(s);
console.log(result); // "s'teL ekat edoCteeL tsetnoc"
