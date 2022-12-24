let arr = [3,4,6]

function findPrime (arr) {
    let prime = arr.findIndex(function (item) {
        return isPrime(item)
    })
    if (prime > -1) {
        console.log('Простое число есть в данном массиве!')
        return true
    }
    else console.log('Прстого числа нет в данном массиве!')
    return false
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0)
        return false
    }
    return true
}


findPrime(arr);
