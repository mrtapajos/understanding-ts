type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
    input1: Combinable, 
    input2: Combinable,
    resultConversion: ConversionDescriptor,
    ) {
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    }
    if (resultConversion == 'as-number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString();
    }
    return result
}

const combinedAges = combine(30, 26, 'as-text');
console.log(combinedAges)

const combinedStringAges = combine('40', '100', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Maria', 'David', 'as-text');
console.log(combinedNames);



/* console.log(combine('Sam', 'David'))
console.log(combine(4, 6)) */