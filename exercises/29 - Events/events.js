const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

// Good naming idea
function handleClick() {
  console.log('Click');
}

// Function is added without brackets so it doesn't run on load, just when we call it with the event listener.
// butts.addEventListener('click', handleClick);
// cool.addEventListener('click', handleClick);
// butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('Target -', event.target); // Thing that was clicked
  console.log('Current Target -', event.currentTarget); // Thing that fired the event listener
  console.log(event.target === event.currentTarget);
  // Halts event
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', (e) => {
  console.log('Window Clicked');
  console.log(e.target), { capture: true };
});

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mouseenter', function (e) {
  console.log(this);
});
