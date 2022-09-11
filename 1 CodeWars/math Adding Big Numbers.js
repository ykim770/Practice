// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// DO NOT USE BIG INT

// declare function add
// input two strings
// output string of sum
function add(a, b) {
  // declare a new string that will hold the sum
  let newStr = [];
  // declare a long string that will be iterated over
  let longer = parseInt(a) > parseInt(b) ? a.split('') : b.split();
  let shorter = parseInt(a) > parseInt(b) ? b.split('') : a.split();
  console.log(shorter, longer);
  for (let i = 0; i < shorter.length; i++) {}
  // concatenate the remaining string of longer into newStr
  // return the new string
  return newStr;
}

console.log(add('2', '5'));
console.log(add('123', '456'));
