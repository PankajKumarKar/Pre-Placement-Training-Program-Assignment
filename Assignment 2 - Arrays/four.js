/*
Question 4
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
*/

function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  let i = 0;

  while (i < flowerbed.length) {
    // Check if the current plot and its adjacent plots are empty
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1; // Plant a flower in the current plot
      count++; // Increment the count of planted flowers

      if (count >= n) {
        return true; // Enough flowers have been planted
      }
    }

    i++; // Move to the next plot
  }

  return false; // Not enough flowers can be planted
}

// Example usage
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const canPlant = canPlaceFlowers(flowerbed, n);
console.log(canPlant); // Output: true
