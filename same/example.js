let arrFunc = require('./modules/function')

let array = [1, 2, 3, 4, 5, 6];


console.log(arrFunc.filter(array, function item() { item > 4 }))