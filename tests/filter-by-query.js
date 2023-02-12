const test = require('test');
const assert = require('node:assert');
const filterByQuery = require('../src/filter-by-query');

test('Filter for words with english letter a', () => {
  assert.deepStrictEqual(filterByQuery(['Москва', 'Казань', 'Тобольск'], 'а'), ['Москва', 'Казань']);
  assert.deepStrictEqual(filterByQuery(['Moscow', 'Sait-P', 'Vologda'], 'a'), ['Sait-P', 'Vologda']);
});

test('Filter for words with russian letter a', () => {
  assert.deepStrictEqual(filterByQuery(['Фар1та', 'Паблик', 'ЛорФарт1кр', ''], 'а'), ['Фар1та', 'Паблик', 'ЛорФарт1кр']);
  assert.deepStrictEqual(filterByQuery(['111', '222', 'A'], 'a'), ['A']);
});
