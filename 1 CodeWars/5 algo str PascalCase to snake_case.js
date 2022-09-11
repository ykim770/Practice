// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

// declare function toUnderscore
// input a string in PascalCase
// return a string in snake_case

// After the first letter, insert underscores before capital letters
// Turn everything to lowercase after underscores are inserted
// return numbers as strings
function toUnderscore(string) {
  if (typeof string === 'number') return string.toString();
  const capitals = string.match(/[A-Z]/g);
  for (let i = 1; i < capitals.length; i++) {
    string = string.replace(capitals[i], '_' + capitals[i]);
  }
  return string.toLowerCase();
}

// Smarter approach
var toUnderscore1;

toUnderscore1 = function (string) {
  return string
    .toString()
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
};
// guarantees a string by first doing .toString()
// splits the string into an array based on uppercase letters
// joins the split string with underscores
// turns the entire string into lower case and returns it
