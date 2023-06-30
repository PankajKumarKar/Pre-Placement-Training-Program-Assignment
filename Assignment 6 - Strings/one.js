/*
💡 **Question 1**

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

**Example 1:**

**Input:** s = "IDID"

**Output:**

[0,4,1,3,2]

*/

function findPermutation(s) {
  const n = s.length;
  const perm = new Array(n + 1);
  let low = 0;
  let high = n;

  for (let i = 0; i <= n; i++) {
    if (i === n || s[i] === "I") {
      perm[i] = low++;
    } else {
      perm[i] = high--;
    }
  }

  return perm;
}

const s = "IDID";
const result = findPermutation(s);
console.log(result);
