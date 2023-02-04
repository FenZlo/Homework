const mapConcatRandomLetters = require('../src/map-method');
const test = require('test');
const assert = require('node:assert');

test('Check length each elements with default parameters', t => {
    const initialArray = [2,300,4023,'5',6,7,8,9];
    const resultArray = mapConcatRandomLetters(initialArray);
    resultArray.forEach((el, index) => {
        const initialLength = String(initialArray[index]).length;
        assert.strictEqual(el.length, initialLength + 3);
    });
});

test('Check length each elements with define parameters', t => {
    const initialArray = [2,300,4023,'5',6,7,8,9];
    const resultArray = mapConcatRandomLetters(initialArray, 10);
    resultArray.forEach((el, index) => {
        const initialLength = String(initialArray[index]).length;
        assert.strictEqual(el.length, initialLength + 10);
    });
});

test('Check length each elements with define parameters 0', t => {
    const initialArray = [2,300,4023,'5',6,7,8,9];  
    const resultArray = mapConcatRandomLetters(initialArray, 0);
    resultArray.forEach((el, index) => {
        const initialLength = String(initialArray[index]).length;
        assert.strictEqual(el.length, initialLength);
    });
});

test('Check length each elements with error parameters', t => {
    const initialArray = [2,300,4023,'5',6,7,8,9];
    assert.throws(() => {
        mapConcatRandomLetters(initialArray, -1);
    }, new Error('Count parameters can not be a negative number'));
});
