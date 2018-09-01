function isAllTrue(sourse, filterFn) {
    if (filterFn(sourse) === true) {
        return filterFn(sourse)

    } else {
        return false
    }
}

function isNumber(arr) {
    function areNumbers(val) {
        return typeof val === 'number';
    }
    return arr.every(x => areNumbers(x)); //every для перебора каждого элемента 
}

const allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'];

console.log(isAllTrue(noNumbers, isNumber))
console.log(isAllTrue(someNumbers, isNumber))
console.log(isAllTrue(allNumbers, isNumber))

let calculator = require('./modules/calculator')

let myCalculator = calculator(100)



console.log(myCalculator.mul(1, 5))
console.log(myCalculator.sum(1, 2, 3));
console.log(myCalculator.dif(10, 20));
try {
    console.log(myCalculator.div(5));
} catch (e) {
    console.log("Error")
} finally {
    console.log('Finally')
}
console.log(myCalculator.mul(2, 2))