/*
Функция проверяет наличие простых чисел в массиве
*/

function findPrime (arr) {
    let prime = arr.findIndex(function (item) {
        return isPrime(item)
    })
    if (prime > -1) {
        return true
    }
    return false
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0)
        return false
    }
    return true
}

 module.exports = findPrime;