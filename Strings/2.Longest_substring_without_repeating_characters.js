/** Longest Substring Without Repeating Characters */

function lengthOfLongestSubstring(str) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    while (set.has(str[i])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[i]);
    maxLength = Math.max(maxLength, i - left + 1);
  }
  return maxLength;
}

/** Time complexity = O(n) && Space complexity = O(n) */

console.log(
  "Longest Substring Without Repeating Characters",
  lengthOfLongestSubstring("abcabcbb"),
);
