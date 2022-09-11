// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// declare a function orderWeight
// input is a string
// output is another string

function orderWeight(str) {
  // probably easiest to split apart the string into an array based on the spaces
  const toArr = str.split(' ');
  // change all values in the array to numbers
  for (let i = 0; i < toArr.length; i++) {
    for (let j = 0; j < toArr[i].length; j++) {
      if (typeof toArr[i] === 'string') toArr[i] = parseInt(toArr[i][j], 10);
      else toArr[i] += parseInt(toArr[i][j], 10);
    }
  }
  return toArr;
}

// console.log('56 65 74 100 99 68 86 180 90'.split(' '));
console.log(orderWeight('56 65 74 100 99 68 86 180 90'));

// solution
function orderWeight(strng) {
  // an arrow function that takes in an argument of a single string, splits it into an array of each character, and reduces the values into a single sum
  const sum = str => str.split('').reduce((sum, el) => sum + +el, 0);
  // a sorting function that runs sum on each element.
  function comp(a, b) {
    let sumA = sum(a);
    let sumB = sum(b);
    // If the weighted sum values are the same, return a number based on whether the reference string comes beforev(negative) or after(positive) the comparison string. Here, a is the reference string and b is the comparison string.
    // If the strings are different, return the difference between A and B. .sort() sorts negatives before and positives after
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  }
  return strng.split(' ').sort(comp).join(' ');
}

const sum = str => str.split('').reduce((sum, el) => sum + +el, 0);
console.log(sum('56 65 74 100 99 68 86 180 90'));
