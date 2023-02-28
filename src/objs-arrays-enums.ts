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

enum Role {ADMIN, READ_ONLY, AUTHOR};


const person: {name: string; age: number; hobbies: string[]; role: number;} = {
    name: 'max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    // TUPLE
    role: Role.AUTHOR,
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Volei'];

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) ERROR
}

if (person.role == Role.AUTHOR){
    console.log('Access Confirmed!')
} 