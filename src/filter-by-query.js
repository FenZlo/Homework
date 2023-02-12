/*
Функция фильтрует элементы массива по заданным значениям
*/

function filterByQuery(array, query) {
  return array.filter((el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
}

module.exports = filterByQuery;
