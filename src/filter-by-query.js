/*
Функция фильтрует элементы массива по заданным значениям
*/


function filterByQuery (array, query) {
    let Arr = array.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
    return Arr
}

module.exports = filterByQuery;
