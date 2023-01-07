const sortMethod = require('../src/sort-method');
const test = require('test');
const assert = require('node:assert');

test('Sort by length of string', t => {
    assert.strictEqual(sortMethod(['asd', 'qwee', 'oeimcsidso', ' ']), [' ', 'asd', 'qwee', 'oeimcsidso']);
    assert.strictEqual(sortMethod([' ', 1]), [' ', 1]);
    assert.strictEqual(sortMethod([' ']), [' ']);
    assert.strictEqual(sortMethod([ ]), [ ])
})  