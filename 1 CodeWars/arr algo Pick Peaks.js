// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

function pickPeaks(arr) {
  // declare an object with pos: [] and peaks: []
  const obj = { pos: [], peaks: [] };
  // iterate through the given array
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], arr[i + 1], arr[i - 1]);
    // check to see if the surrounding numbers are larger
    if (arr[i] >= arr[i + 1] && arr[i] > arr[i - 1]) {
      // arr[i] must be greater than the number before but can be greater than or equal to the following number. This allows for plateau cases to be handled
      if (arr[i] !== arr[arr.length - 1] || arr[i] !== arr[i + 1]) {
        obj.pos.push(i);
        obj.peaks.push(arr[i]);
      }
    }
  }
  return obj;
}

console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]));
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2])); // pos : [2,4] peak : [3,2]

//SOLUTION
function pickPeaksSolved(arr) {
  var result = { pos: [], peaks: [] };
  if (arr.length > 2) {
    // What does this pos do?
    var pos = -1;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        // pos is reassigned to the index IF curr > previous
        pos = i;
      } else if (arr[i] < arr[i - 1] && pos != -1) {
        // pos remains reassigned through the next loop if this else if block is not entered
        result.pos.push(pos);
        result.peaks.push(arr[pos]);
        pos = -1;
      }
    }
  }
  return result;
}
