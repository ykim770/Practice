// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// declare a function order
// input string
// output ordered string

// append to string in order
function order(words) {
  // if input string is empty, return an empty string
  //   if (!words) return '';
  // split the string into an array based on each word
  let wordsArr = words.split(' ');
  // declare an ouput array that will store the ordered words
  const output = [];
  // iterate from index 0 to wordsArr.length
  for (let i = 0; i < wordsArr.length; i++) {
    output[wordsArr[i].replace(/\D/g, '')] = wordsArr[i];
  }
  return output.join(' ');
}
console.log(order('is2 Thi1s T4est 3a'));

// Using sort
function order1(words) {
  return words
    .split(' ')
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(' ');
}
console.log(order1('is2 Thi1s T4est 3a'));
