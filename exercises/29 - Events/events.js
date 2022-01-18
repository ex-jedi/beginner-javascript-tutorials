const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

// Good naming idea
function handleClick() {
  console.log('Click');
}

// Function is added without brackets so it doesn't run on load, just when we call it with the event listener.
butts.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);
butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
  console.log('Bought it!');
}

// Regular function
// buyButtons.forEach((buyButton) => {
//   buyButton.addEventListener('click', buyItem);
// });

// Arrow Function
buyButtons.forEach((button) => button.addEventListener('click', buyItem));

console.log(buyButtons);
