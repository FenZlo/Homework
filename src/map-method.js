function mapMethod (array) {
    const newArray = array.map(elem => elem + makeRandomLetter(3))
    return newArray;
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

module.exports = mapMethod;