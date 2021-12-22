const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// people.forEach((person, index) => {
//   console.group(`${person.name}`);
//   console.log(person.country);
//   console.log(person.cool);
//   console.log('Done');
//   console.groupEnd(`${person.name}`);
// });

people.forEach((person, index) => {
  // Pauses JavaScript to show you a bunch of info.
  // debugger;
  console.log(person.name);
});

// console.table(people);

// Console Methods

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doSomeStuff() {
  console.group('Do stuff');
  console.log('Hello');
  console.warn('Uh oh');
  console.error('Drat!');
  console.groupEnd('Stuff done!');
}

function doctorize(name) {
  // Logs how many times this is run
  // Can pass variables
  console.count(`Running doctorize for ${name}.`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // Will call an error!
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootStrap() {
  go();
}

// Callstack
// bootStrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', (e) => {
  const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
