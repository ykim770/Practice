// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// declare function solution(str)
// Takes in a single string
// Outputs an array populted with 2 characters in each element

// function solution(str, arr = []) {
//   // lets use recursion.
//   // Begin by adding an underscore if the string is odd
//   if (str.length % 2 === 1) str += '_';
//   // Base case, there are no elements remaining in str
//   if (str.length === 0) {
//     return arr;
//   }
//   // Recursive case, move the first two characters into an element in arr
//   arr.push(str[0] + str[1]);
//   return solution(str.substring(2), arr);
// }

// console.log(solution('abcd'));

// Don't want to bank on the fact that I can rely on .includes
// // SOLUTION
function solution(s) {
  return (s + '_').match(/.{2}/g) || [];
}
console.log(solution('abcd'));
// .match returns an array throghout the entirety of the string of matches to the regular expression
// Here .{2} matches any 2 possible characters
