/** Valid Anagram 
 * Technique
Hash Map / Frequency Counter
*/

let s = "anagram";
let t = "nagaram";

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) false;

  let map = {};

  for (let char of str1) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!map[char]) {
      return false;
    }
    map[char]--;
  }
  return true;
}

/** Time complexity = O(n) && Space complexity = O(n) */

console.log("Valid Anagram", isAnagram(s, t));
