function makeRandomLetter(length) {
  let result = '';
  const content = 'abcdefghijklmnopqrstuvwxyz';
  const contentLength = content.length;

  for (let i = 0; i < length; i += 1) {
    result += content.charAt(Math.floor(Math.random() * contentLength));
  }

  return result;
}

function mapConcatRandomLetters(array, count = 3) {
  if (count < 0) {
    throw new Error('Count parameters can not be a negative number');
  }

  return array.map((elem) => elem + makeRandomLetter(count));
}

module.exports = mapConcatRandomLetters;
