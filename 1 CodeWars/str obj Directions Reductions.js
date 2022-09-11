function dirReduc(arr) {
  let joinStr = arr.join('1');
  const dirObj = {
    NORTH1SOUTH: true,
    SOUTH1NORTH: true,
    EAST1WEST: true,
    WEST1EAST: true,
  };
  while (Object.keys(dirObj).some(el => joinStr.includes(el))) {
    arr = joinStr.split('1');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] + '1' + arr[i + 1] in dirObj) {
        arr.splice(i, 2);
        joinStr = arr.join('1');
      }
    }
  }
  return arr;
  // ...
}

let myArr = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'];
dirReduc(myArr);
console.log(dirReduc(myArr));

// Better Approach
// function dirReduc(plan) {
//   var opposite = {
//     NORTH: 'SOUTH',
//     EAST: 'WEST',
//     SOUTH: 'NORTH',
//     WEST: 'EAST',
//   };
//   return plan.reduce(function (dirs, dir) {
//     if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
//     else dirs.push(dir);
//     return dirs;
//   }, []);
// }
