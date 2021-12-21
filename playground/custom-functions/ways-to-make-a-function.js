// function doctorize(firstName) {
//   return `Dr ${firstName}`;
// }

// Anonymous function
// function (firstName) {
//   return `Dr ${firstName}`;
// }

// Wont work before it's declared
// doctorize('Mark');

// Does work before it's declared and it's 'hoisted'
// doctorize2('Mark');

// Function expression
// Stores function value as a variable. Technically an anonymous function.
// const doctorise = function (firstName) {
//   return `Dr ${firstName}`;
// };

// Function will be hoisted
// function doctorize2(firstName) {
//   return `Dr ${firstName}`;
// }

// Arrow functions
// Are anonymous functions

// Regular function declaration
// function inchToCM(inches) {
//   return inches * 2.54;
// }

// Function expression
// const inchToCM = function (inches) {
//   return inches * 2.54;
// };

// Arrow function
// const inchToCM = (inches) => inches * 2.54;

// Regular function declaration
// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// ...converted to arrow function
// const add = (a, b = 3) => a + b;

// Returning an object
// function makeBaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };

//   return baby;
// }

// Probably not the best use of an arrow function. Less redable than a regular one
// const makeBaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE - Immediately Invoked Function Expression
// (function (name) {
//   console.log(`Running IFFY ${name}!`);
//   return `Hey there ${name}`;
// })('Bob');

// Method - A function that lives in an object

const mark = {
  firstName: 'Mark',
  sayHi() {
    console.log(`Hi Mark`);
    return `Hi Mark`;
  },
};
