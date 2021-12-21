// Function definition
// https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375494555

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // This is the function body
  // console.log('Running Calculate Bill!');

  const total = billAmount + billAmount * taxRate + billAmount * tipRate;

  return total;
}

const myBill = 384;
const myTax = 0.26;

//  Function call or *run*
const myTotal = calculateBill(myBill, myTax);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Karl');
const kate = 220;

myTotal3 = calculateBill(kate + 55, 0.19);

// console.log(myTotal3);

function doctorize(name = 'Carbon Unit') {
  return `Dr ${name}`;
}

// Dwefault value empty string so it doesn't error out
function yell(name = '') {
  return `HEY ${name.toUpperCase()}`;
}

// console.log(yell(doctorize('Mark')));

// How to use a default value in arguments
const myBill4 = calculateBill(200, undefined, 0.25);
console.log(myBill4);
