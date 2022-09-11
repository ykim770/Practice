// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

// each row i contains the total amount of money that they have
// We can easily try to compress this down into a one dimensional array
function maximumWealth(accounts) {
  const totalWealth = [];
  accounts.forEach(arr => {
    totalWealth.push(arr.reduce((acc, currV) => acc + currV));
  });
  return Math.max(...totalWealth);
}

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

// Faster solution using map
// Spread operator splits up the array accounts
// function maximumWealth(accounts) {
//   return Math.max(
//     ...accounts.map(account => account.reduce((acc, currV) => acc + currV))
//   );
// }
