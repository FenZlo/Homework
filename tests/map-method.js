const mapMethod = require('../src/map-method');
const test = require('test');
const assert = require('node:assert');

test('Concat with string', t => {
    assert.strictEqual(mapMethod([2,3,4,5,6,7,8,9]), true);
    assert.strictEqual(mapMethod([11,12,13,14,15,21]), true);
    assert.strictEqual(mapMethod([3]), true);
    assert.strictEqual(mapMethod([113]), true)
})
