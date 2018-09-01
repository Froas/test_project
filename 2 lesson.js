function consoleRec(sourse, i) {

    if (i < 5) {
        console.log(sourse.shift())
        consoleRec(sourse, i + 1)

    }
}
consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], 0)


function consoleRec(sourse, i) {
    // Условие для выхода
    if (sourse.length - 1 >= i) {
        // Печать
        console.log(sourse[i]);
        // Вызов рекурсии
        consoleRec(sourse, i + 1)
    }
}

consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], 0)



function consoleRec(src) {

    if (src.length === 0) return; // крайний случай, пустой массив
    console.log(src.shift()); // действие текущей итерации
    consoleRec(src); // рекурсивный вызов для уменьшенного массива
}
consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции']);