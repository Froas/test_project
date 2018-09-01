function myForEach(array, fn) {


    for (let i = 0; i < array.length; i++) {
        fn(array[i], fn) // перебор массива и при каждом переборе вызов fn 
    }
}

function myFilter(array, fn) {
    let result = []


    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            result[result.length] = array[i]
        }
    }
    return result
}

function myMap(array, fn) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        result[i] = fn(array[i])


    }
    return result
}

function myReducle(array, fn) {
    let previousResult = []
    let result = []
    for (let i = 0; i < array.length; i++) {
        previousResult[i] += array[i]
        result = (array[i])
    }
    return fn(result, previousResult)
}





module.exports = {
    forEach: myForEach,
    filter: myFilter,
    map: myMap,
    reducle: myReducle,
}