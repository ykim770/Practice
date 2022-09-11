//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// declare a function moveZeros
// input array
// output sorted array

function moveZeros(arr) {
  // use filter and only push !== 0 numbers to the new array
  const result = arr.filter(el => el !== 0);
  // calculate the length of the array
  if (result.length !== arr.length) {
    while (result.length < arr.length) {
      result.push(0);
    }
  }
  // populate the rest of the array until it is filled with 0 at the end
  return result;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
