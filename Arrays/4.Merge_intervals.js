/** * 
 * Pattern Learned :- Sorting + Interval merging
 * 
 * You are given an array of intervals:
intervals = [[start1,end1],[start2,end2],...]
Merge all overlapping intervals and return the resulting list.
 */

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let i = 0; i < intervals.length; i++) {
    let last = result[result.length - 1];

    if (intervals[i][0] <= last[1]) {
        last[1]=Math.max(last[1],intervals[i][1])
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
}

/** Time complexity = O(n log n) && Space complexity = O(n) */

console.log("Merge intervals", mergeIntervals(intervals));
