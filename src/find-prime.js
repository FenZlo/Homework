/*
Функция проверяет наличие простых чисел в массиве
*/

function isPrime(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) { return false; }
  }
  return true;
}

function findPrime(arr) {
  const prime = arr.findIndex((item) => isPrime(item));
  if (prime > -1) {
    return true;
  }
  return false;
}

module.exports = findPrime;
