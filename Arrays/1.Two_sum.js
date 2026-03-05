/**Pattern Learned :- Hash Map */

let nums = [2, 7, 11, 15];
let target = 9;

function findIndexOfSum(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];

    if (map[needed] !== undefined) {
      return [map[needed], i];
    }

    map[nums[i]] = i;
  }
}

/** Time complexity = O(n) && Space complexity = O(n) */

console.log('two sum',findIndexOfSum(nums,target))
