// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  let newArr = str.toLowerCase().split('');
  for (let i = 0; i < newArr.length; i++) {
    if (newArr.slice(i + 1).includes(newArr[i])) {
      return false;
    }
  }
  return true;
}

console.log(isIsogram('Dermatoglyphics'));

// Cool Approach
// A Set is an object that contains only unique values
// A set is made with each new letter encountered in the string
// If the set is of the same size as the length of the string, the string is an isogram and will return true
// If the size of the set is smaller than the length of the string, the string is NOT an isogram and will return false
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
