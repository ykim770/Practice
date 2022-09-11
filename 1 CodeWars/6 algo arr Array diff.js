// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// define a function arrayDiff
// input two arrays
// output a single array with no duplicates

function arrayDiff(a, b) {
  return a.filter(el => !b.includes(el));
}

// O(n) solution

function arrayDiff1(a, b) {
  // declare an object to be used as a hash table
  const bHash = {};
  // populate the hash table with bValue:true pairs
  b.forEach(el => (bHash[el] = true));
  // utilize filter to return a new array that only includes elements whose keys are not in bHash
  return a.filter(el => !bHash[el]);
}
