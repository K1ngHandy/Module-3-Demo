// var something = 1;
// var something = 2;
// console.log(something); // 2

// let something = 1;
// let something = 2;
// console.log(something); // SyntaxError: Identifier 'something' has already been declared

// let something = 1;
// something = 2;
// console.log(something); // 2

// const something = 1;
// something = 2;
// console.log(something); // TypeError: Assignment to constant variable.

// sayHello(); // hello
// function sayHello() {
//     console.log('hello');
// }

// sayHello(); // ReferenceError: Cannot access 'sayHello' before initialization
// const sayHello = () => {
//     console.log('hello');
// }

// const str = 'hello';
// str[1] = 'y';
// console.log(str); // hello

// const str = 'hello';
// changeValue(str);
// console.log(str); // hello;
// function changeValue(something) {
//     console.log(something); // hello
//     something = 'something else';
//     console.log(something); // something else
// }

// const a = [1, 2, 3, 4];
// const b = a;
// console.log(a); // [1, 2, 3, 4]
// console.log(b); // [1, 2, 3, 4]

// const a = [1, 2, 3, 4];
// function changeValue(arr) {
//     arr[1] = 20;
// }
// changeValue(a);
// console.log(a); // [ 1, 20, 3, 4 ]

// const a = [1, 2, 3, 4];
// const b = [...a];
// b[1] = 10;
// console.log(a); // [ 1, 2, 3, 4 ]
// console.log(b); // [ 1, 10, 3, 4 ]

// const obj = {name: 'Jacob', age: 31, profession: 'software engineer'};
// const otherObj = {...obj};
// otherObj.name = 'James';
// console.log(obj); // { name: 'Jacob', age: 31, profession: 'software engineer' }
// console.log(otherObj); // { name: 'James', age: 31, profession: 'software engineer' }

// const obj = {name: 'Jacob', age: 31, profession: 'software engineer'};
// const otherObj = {...obj, name: 'James'};
// console.log(obj); // { name: 'Jacob', age: 31, profession: 'software engineer' }
// console.log(otherObj); // { name: 'James', age: 31, profession: 'software engineer' }

// let a = 10;
// let b = 'something';
// let c = true;
// let d = 50;
// !(a === 10 || b && c || d > 100)
// !(10 === 10 || 'something' && true || 50 > 100)
// !(true || true && true || false)
// !(true || true || false)
// !(true || false)
// !(true)
// false

// const person = {name: 'Jacob', age: 31};
// if (person.name === 'Jacob') {
//     console.log(`Jacob is ${person.age} years old`); // Jacob is 31 years old
// }

// const person = undefined;
// if (person.name === 'Jacob') {
//     console.log(`Jacob is ${person.age} years old`); // TypeError: Cannot read properties of undefined (reading 'name')
// }

const person = undefined;
if (person && person.name === 'Jacob') {
    console.log(`Jacob is ${person.age} years old`);
} else {
    console.log('else'); // else
}
