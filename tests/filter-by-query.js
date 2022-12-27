const filterByQuery = require('../src/filter-by-query.js');
const test = require('test');
const assert = require('node:assert');

test('Filter by query', t => {
    assert.strictEqual(filterByQuery(['Москва', 'Казань', 'Тобольск'], 'а'))
    assert.strictEqual(filterByQuery(['Moscow', 'Sait-P', 'Vologda'], 'a'))
})
