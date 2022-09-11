// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// declare a function sumIntervals
// Input is an array of arrays
// Return a signle number that describes the length of the intervals

function sumIntervals(arrs) {
  // Our first step should be to loop through the arrays and see if any overlaps exist.
  // Overlaps can be defined as the 2nd el in the array being greater than or equal to the 1st el of another interval, and less than or equal to the 2nd el of another interval
  // This can be achieved by reducing the array of arrays, with an initial value of an array !! What about non adjacent overlaps? For each over acc?
  const intervals = {};
  arrs.forEach(el => {
    intervals[el[0]] = el[1];
  });
  return intervals;
}

// [1,4]
// [3,5]
// NEW INTERVAL = [1,5] 2nd el in Range
// [10,20]
// [9,11]
// NEW INTERVAL = [9,20] 1st el in range
// [9,10]
// [7,12]
// NEW INTERVAL = [7,12] Both el in range
console.log(
  sumIntervals([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
