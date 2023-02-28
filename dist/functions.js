"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
    return;
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(3, 5));
// let someValue: undefined 
let combineValues;
addAndHandle(6, 9, (result) => {
    console.log(result);
});
