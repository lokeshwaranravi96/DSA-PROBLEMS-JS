/**
  Pattern Learned :- Prefix / Suffix products
 
  * Question
Given an array nums, return an array result such that:
result[i] = product of all elements except nums[i]
You cannot use division.
 */

let nums = [1, 2, 3, 4];
function productExceptSelf(nums) {
  let result = new Array(nums.length).fill(1);

  let leftProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return result;
}

/** Time complexity = O(n) && Space complexity = O(1) */

console.log(" Product of Array Except Self", productExceptSelf(nums));
