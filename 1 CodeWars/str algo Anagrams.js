// function anagrams(word, words) {
//   const resultArray = [];
//   const sortedWord = word.split('').sort().join('');
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].split('').sort().join('') === sortedWord)
//       resultArray.push(words[i]);
//   }
//   return resultArray;
// }

// // Better Approach
function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(el => word == el.split('').sort().join(''));
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
