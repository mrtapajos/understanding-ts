let userInput: unknown;
let userName: string

userInput = 5;
userInput = 'AA';

if (typeof userInput == 'string') {
    userName = userInput;
}

function generateError(message:string, code:number): never{
    throw {message:message, errorCode: code};
}

generateError('An error has ocurred!', 400)
// userName = userInput
