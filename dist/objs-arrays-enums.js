"use strict";
/* const person: {
    name: string;
    age: number;
} = {
    name: 'mamae',
    age: 30,
}; */
/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
 */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    // TUPLE
    role: Role.AUTHOR,
};
// person.role.push('admin');
// person.role[1] = 10;
let favoriteActivities;
favoriteActivities = ['Volei'];
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) ERROR
}
if (person.role == Role.AUTHOR) {
    console.log('Access Confirmed!');
}
