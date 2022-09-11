function isPrime(num) {
  if (num <= 1) return false;
  if (num % 2 === 0) {
    return true;
  } else if (num % 3 === 0) {
    return true;
  }
}
