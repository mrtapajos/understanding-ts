"use strict";
function add(n1, n2, showResult, phrase) {
    /* if (typeof num1 !== 'number' || typeof num2 != 'number'){
        throw new Error('Incorrect input!')
    }        */
    const result = n1 + n2;
    if (showResult) {
        return phrase + " " + result;
    }
    else {
        return result;
    }
}
const number1 = 6;
const number2 = 5;
const res = add(number1, number2, true, 'test');
console.log(res);
