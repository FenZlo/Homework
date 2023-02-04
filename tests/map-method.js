const mapConcatRandomLetters = require('../src/map-method');
const test = require('test');
const assert = require('node:assert');

test('Check length each elements with default parametrs', t => {
    const initialArray = [2,300,4023,'5',6,7,8,9];
    const resultArray = mapConcatRandomLetters(initialArray);
    resultArray.forEach((el, index) => {
        const initialLength = String(initialArray[index]).length;
        assert.strictEqual(el.length, initialLength + 3);
    });
});

test('Check length each elements with define parametrs', t => {
    const initialArray = [2,300,4023,'5',6,7,8,9];
    const resultArray = mapConcatRandomLetters(initialArray, 10);
    resultArray.forEach((el, index) => {
        const initialLength = String(initialArray[index]).length;
        assert.strictEqual(el.length, initialLength + 10);
    });
});

test('Check length each elements with define parametrs 0', t => {
    const initialArray = [2,300,4023,'5',6,7,8,9];  
    const resultArray = mapConcatRandomLetters(initialArray, 0);
    resultArray.forEach((el, index) => {
        const initialLength = String(initialArray[index]).length;
        assert.strictEqual(el.length, initialLength);
    });
});

test('Check length each elements with error parametrs', t => {
    const initialArray = [2,300,4023,'5',6,7,8,9];
    assert.throws(() => {
        mapConcatRandomLetters(initialArray, -1);
    }, new Error('Count can not be a negetive number'));
});

//Дописать тесты на то, чтобы у меня генерировалось 0,1,10 и тд рандомных параметров. Имеется ввиду второй параметр mapConcatRandomLetter. 
//Написать тест так, чтобы поймать ошибку ту, которую я ожидаю.
