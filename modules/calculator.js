function calculator(firstNumber) {


    function _sum() {
        let result = 0
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i]
        }

        return result + firstNumber
    }

    function _dif() {
        let result = 0
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i]
        }

        return firstNumber - result
    }

    function _div() {
        let result = 0
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i]
        }

        if (result == 0) {
            throw new Error("На ноль делить нельзя") // выбрасывает ошибку
        }

        if (result < 0) {
            throw new Error("Делитель меньше нуля")
        }

        return firstNumber / result

    }

    function _mul() {
        let result = 0
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i]
        }

        return result * firstNumber
    }
    return {
        sum: _sum,
        dif: _dif,
        div: _div,
        mul: _mul
    }
}
module.exports = calculator