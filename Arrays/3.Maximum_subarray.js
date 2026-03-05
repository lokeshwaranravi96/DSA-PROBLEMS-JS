/**
 * Pattern Learned :- Dynamic Programming
 * 
 * Given an integer array nums, find the contiguous subarray with the largest sum,
 *  and return that sum.
 */

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(nums) {
  let currentMax = nums[0];
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    currentMax = Math.max(nums[i], nums[i] + currentMax);

    maxSum = Math.max(currentMax, maxSum);
  }

  return maxSum;
}

/** Time complexity = O(n) && Space complexity = O(1) */

console.log(" Maximum Subarray (Kadane’s)", maxSubArray(nums));
