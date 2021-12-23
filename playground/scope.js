// Global variable. Available everywhere. conbst & let not attached to window object. All other global variables are.
const first = 'mark';
// eslint-disable-next-line prefer-const
let age = 100;
// var is attached to the window
// eslint-disable-next-line no-var
var where = 'here';

// Also available on the window object
function sayHI() {
  console.log('Hi');
}

function go() {
  // Function scope. Variables made in here only available in here
  const hair = 'Black';
  console.log(hair);
  // Global variables available here via scope lookup
  // Function look inside itself for variable first. If it's not here it looks outside.
  const age = 200;
  console.log(age);
}

go();

console.log(are);
console.log(hair);
