function myFilter(array, handler, thisArg) {

    let fn = handler;

    if (thisArg) {
        fn = handler.bind(thisArg)
    }

    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}
module.exports = {
    filter: myFilter
}