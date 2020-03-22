const _ = require("lodash");

const collection = [1, 2, 3];
const iteratee = (i) => i * 2;

//-----Должна сработать подстановка
const res1 = _.map(collection, iteratee);
console.log(res1);

const res2 = _.map(collection, (i) => i * 2);
console.log(res2);

const res3 = _.map(collection, function(i) { return i * 2; });
console.log(res3);

const someFunc = (col) => {
    return _.map(col, iteratee);
}

const res4 = someFunc(collection);
console.log(res4);

//-----Не должна сработать подстановка
const res5 = collection.map(iteratee);
console.log(res5);

const res6 = Array.isArray(collection) ? collection.map(iteratee) : _.map(collection, iteratee);
console.log(res6);

//-----Должна сработать подстановка (бонусное задание)
const res7 = _.map([1, 2, 3], iteratee);
console.log(res7);
