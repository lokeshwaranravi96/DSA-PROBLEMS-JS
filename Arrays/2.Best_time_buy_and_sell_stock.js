
/**Pattern Learned :- One-pass optimization */

let prices = [7, 1, 5, 3, 6, 4];

function maxProfit(nums) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minPrice) {
      minPrice = nums[i];
    }
  
  let profit= nums[i]-minPrice
    if (maxProfit < profit) {
      maxProfit = profit
    }
  }

  return maxProfit;
}

/** Time complexity = O(n) && Space complexity = O(1) */

console.log("Best Time to Buy and Sell Stock", maxProfit(prices));

