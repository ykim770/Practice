// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// declare a function pigIt
// input str
// output modified string

function pigIt(str) {
  // split the string into an array based on the spaces
  const strArr = str.split(' ');
  // declare a new array that will be joined
  const returnArr = [];
  // iterate over the string
  for (let i = 0; i < strArr.length; i++) {
    // if the current index is a word (use regex here)
    if (strArr[i].match(/[a-z]/gi)) {
      // move the first letter of the word to the end
      returnArr.push(strArr[i].slice(1) + strArr[i][0] + 'ay');
      // add 'ay' to it
    } else {
      // else
      // simply add that element to the array
      returnArr.push(strArr[i]);
    }
  }
  return returnArr.join(' ');
}

console.log(pigIt('Pig latin is cool'));
