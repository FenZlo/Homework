const findPrime = require('../src/find-prime');
const test = require('test');
const assert = require('node:assert');

test('Check with primes numbers', t => {
    assert.strictEqual(findPrime([2,3,4,5,6,7,8,9]), true);
    assert.strictEqual(findPrime([11,12,13,14,15,21]), true);
    assert.strictEqual(findPrime([3]), true);
    assert.strictEqual(findPrime([113]), true)
})

test('Check without primes numbers', t => {
    assert.strictEqual(findPrime([4,6,8]), false);
    assert.strictEqual(findPrime([12,14,18,22]), false);
    assert.strictEqual(findPrime([100]), false);
    assert.strictEqual(findPrime([]), false)
})
