/*
Второй параметр mode отвечает за выбор того, что будет возвращаться в sortArray
Если asc, то возвращается -1 и наоборот.
*/
function sort(array, mode = 'asc') {
  const sortedArray = array.slice(0);
  const numberOfMode = mode === 'asc' ? -1 : 1;

  return sortedArray.sort((a, b) => {
    if (a > b) {
      return -1 * numberOfMode;
    }
    if (a < b) {
      return 1 * numberOfMode;
    }
    return 0;
  });
}
module.exports = sort;
