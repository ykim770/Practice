// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// input a number to take sqrt of
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  // declare root to equal the square root of sq argument
  let root = Math.sqrt(sq);
  // check if the current number is a perfect square
  if (root % 1 === 0) {
    return (root + 1) ** 2;
  }
  // true? sqrt(sq) + 1
  return -1;
}

console.log(findNextSquare(121));
