// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  let numStr = String(num);
  let output = '';
  for (let i = 0; i < numStr.length; i++) {
    let working = numStr[i];
    output += parseInt(working) ** 2;
  }
  return parseInt(output);
}

console.log(squareDigits(9119));

// Coolest Approach
// Utilizes split, map, and join
function squareDigits1(num) {
  return String(+num)
    .split('')
    .map(i => i * i)
    .join('');
}

console.log(squareDigits1(9119));
