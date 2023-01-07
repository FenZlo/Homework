function sortMethod (array) {
    return array.sort(parameterComparison)
}

function parameterComparison (a, b) {
    if (a.length < b.length) {
        return -1;
      }
      if (a.length > b.length) {
        return 1;
      }
      return 0; 
}

module.exports = sortMethod;