function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
    return;
}

function addAndHandle(n1 : number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

printResult(add(3, 5));

// let someValue: undefined 

let combineValues: (a: number, b: number) => number;

addAndHandle(6, 9, (result) => {
    console.log(result);
})
