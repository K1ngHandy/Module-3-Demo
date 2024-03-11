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

const str = 'hello';
changeValue(str);
console.log(str); // hello;
function changeValue(something) {
    console.log(something); // hello
    something = 'something else';
    console.log(something); // something else
}