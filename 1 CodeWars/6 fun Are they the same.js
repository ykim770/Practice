// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// b should be the square of elements in a

function comp(array1, array2) {
  //your code here
  // If length of 1 and 2 are not same, immediately return false
  if (array1.length !== array2.length) return false;
  // loop through a and set each value equal to its square
  for (let i = 0; i < array1.length; i++) {
    array1[i] = array1[i] ** 2;
  }
  console.log(array1.sort(), array2.sort());
  // return a boolean after sorting both array1 and array2
  return array1.sort().join('') == array2.sort().join('');
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(comp(a1, a2));
