const test = require('test');
const assert = require('node:assert');
const generateNumberSequence = require('../src/number-generator');

test('Check generator of numbers from 0 to 10, the amount of items is 5', () => {
  const numberGenerator = generateNumberSequence({
    count: 5,
    rangeMin: 0,
    rangeMax: 10,
  });
  const seq = numberGenerator();
  assert.strictEqual(seq.length, 5);
});

test('Check generator of numbers for two different arrays', () => {
  const numberGenerator = generateNumberSequence({
    count: 5,
    rangeMin: 0,
    rangeMax: 10,
  });
  const seq = numberGenerator();
  const seq2 = numberGenerator();
  assert.notEqual(seq, seq2);
});

test('Check generator of numbers from 1 to 100, the number of numbers is 3', () => {
  const numberGenerator2 = generateNumberSequence({
    count: 3,
    rangeMin: 1,
    rangeMax: 1000,
  });
  const seq3 = numberGenerator2();
  assert.strictEqual(seq3.length, 3);
});

test('Check generator of numbers for define parameters', () => {
  const numberGenerator = generateNumberSequence({
    count: 5,
  });
  const seq = numberGenerator();
  assert.strictEqual(seq.length, 5);
});

test('Check parametrs of generator for type', () => {
  assert.throws(() => {
    generateNumberSequence(123);
  }, new Error('Config param should be an object'));
});

test('Check parametrs of generator for number of objects', () => {
  assert.throws(() => {
    generateNumberSequence({
      count: 0,
      rangeMin: 1,
    });
  }, new Error('Config.count param should be defined'));
});

test('Check the correctness of the arguments used', () => {
  const numberGenerator = generateNumberSequence({
    count: 5,
    rangeMin: 0,
    rangeMax: 10,
  });
  const seq = numberGenerator();
  seq.forEach((item) => {
    if (item < 0 && item > 10) {
      assert.fail('Huevuy diapazon suchara');
    }
  });
});
