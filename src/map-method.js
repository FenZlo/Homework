function mapConcatRandomLetters (array, count = 3) {
    if (count < 0) {
        throw new Error('Count can not be a negetive number')
    }
    return array.map(elem => elem + makeRandomLetter(count))
}

function makeRandomLetter(length) {
    let result = '';
    let content = 'abcdefghijklmnopqrstuvwxyz';
    let contentLength = content.length;
    for ( let i = 0; i < length; i++ ) {
        result += content.charAt(Math.floor(Math.random() * contentLength));
    }
    return result;
}

module.exports = mapConcatRandomLetters;

