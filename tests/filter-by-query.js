const filterByQuery = require('../src/filter-by-query.js');
const test = require('test');
const assert = require('node:assert');

test('Filter by query', t => {
    assert.deepStrictEqual(filterByQuery(['Москва', 'Казань', 'Тобольск'], 'а'), ['Москва', 'Казань'])
    assert.deepStrictEqual(filterByQuery(['Moscow', 'Sait-P', 'Vologda'], 'a'), ['Sait-P', 'Vologda'])
})

test('Filter by query', t => {
    assert.deepStrictEqual(filterByQuery(['Фар1та', 'Паблик', 'ЛорФарт1кр', ''], 'а'), [''])
    assert.deepStrictEqual(filterByQuery(['Moscow', 'Sait-P', 'Vologda'], 'a'), ['Sait-P', 'Vologda'])
})