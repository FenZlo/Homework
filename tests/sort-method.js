const test = require('test');
const assert = require('node:assert');
const sort = require('../src/sort-method');

test('Check ascending sort function without optional parameters', () => {
  assert.deepStrictEqual(sort(['asd', 'qwee', 'oeimcsidso', ' ']), [' ', 'asd', 'oeimcsidso', 'qwee']);
  assert.deepStrictEqual(sort([10, 1, 3, 4, 11, 69]), [1, 3, 4, 10, 11, 69]);
});

test('Check ascending sort function with optional parameters', () => {
  assert.deepStrictEqual(sort(['asd', 'qwee', 'oeimcsidso', ' '], 'asc'), [' ', 'asd', 'oeimcsidso', 'qwee']);
  assert.deepStrictEqual(sort([10, 1, 3, 4, 11, 69], 'asc'), [1, 3, 4, 10, 11, 69]);
});

test('Check descending sort function', () => {
  assert.deepStrictEqual(sort(['asd', 'qwee', 'oeimcsidso', ' '], 'desc'), ['qwee', 'oeimcsidso', 'asd', ' ']);
  assert.deepStrictEqual(sort([10, 1, 3, 4, 11, 69], 'desc'), [69, 11, 10, 4, 3, 1]);
});

test('Check immutability of sort function', () => {
  const initialArray = [69, 13, 1, 71, 1293];
  // Spred опператор прочитать отдельно. Тут мы копируем все значения из одного массива в другой
  const initialArrayCopy = [...initialArray];
  const sortedArray = sort(initialArray);
  assert.notStrictEqual(sortedArray, initialArray);
  assert.deepStrictEqual(initialArray, initialArrayCopy);
});
