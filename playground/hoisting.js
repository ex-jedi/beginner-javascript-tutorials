// Some devs prefer a what does this file do & how does it do it approach to laying out variables, which is one use case for hoisting functions

sayHI();

// Can be run before it's declared 👆🏾
function sayHI() {
  console.log('Hi');
  console.log(add(2, 6));
}

// Can also be r0un before it's declared
function add(a, b) {
  return a + b;
}

// Variable declarations hoisted, but value are not.
console.log(age);
// console.log(cool);
// eslint-disable-next-line no-var
var age = 10;

// Functions attached to variable can't be run before declaration
// go();
const go = function () {
  console.log('Go for it');
};

/* eslint-disable */
const myConst = true;
let myLet = true;
var myVar = true;
