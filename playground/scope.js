// Global variable. Available everywhere. conbst & let not attached to window object. All other global variables are.
const first = 'mark';
// eslint-disable-next-line prefer-const
let age = 100;
// var is attached to the window
// eslint-disable-next-line no-var
var where = 'here';

// Also available on the window object
// function sayHI() {
//   console.log('Hi');
// }

// function go() {
//   // Function scope. Variables made in here only available in here
//   const hair = 'Black';
//   console.log(hair);
//   // Global variables available here via scope lookup
//   // Function look inside itself for variable first. If it's not here it looks outside.
//   const age = 200;
//   console.log(age);
// }

// go();

// console.log(are);
// console.log(hair);

// if (1 === 1) {
//   const cool = true;
//   // eslint-disable-next-line no-var
//   var neat = true;
//   // eslint-disable-next-line prefer-const
//   let nice = true;
// }

// console.log(neat);
// console.log(nice);
// console.log(cool);

// Function and block scope
// function isCool(name) {
//   let cool;
//   if (name === 'Mark') {
//     cool = true;
//   }
//   return cool;
// }

// The i var variable leaks out. Chaneg to let or const to prevent that
// eslint-disable-next-line no-var
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// const dog = 'Dug';

// function logDog() {
//   console.log(dog);
// }

// function go() {
//   const dog = 'Rusty';
//   logDog(); // Logs 'Dug'. JavaScript doesn't care about where it's run, but where it's defined. Lexical scoping.
// }

// Functions inside a function only available inside it. So yell is only availble inside sayHi
function sayHI(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}
