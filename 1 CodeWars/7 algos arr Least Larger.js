// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// declare function least Larger
// input array and index
// output index of smallest number that is larger or -1 if no such index

function leastLarger(arr, i) {
  const larger = [];
  console.log(arr[i]);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[i]) larger.push(arr[j]);
  }
  if (Object.keys(larger).length === 0) return -1;
  else {
    larger.sort((a, b) => a - b);
    return arr.indexOf(larger[0]);
  }
}

// SOLUTION USING FILTER
const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])));
// Arrow function    args       find index of smallest value in a filtered array of nums > arr[i]
// Spread function here works to
