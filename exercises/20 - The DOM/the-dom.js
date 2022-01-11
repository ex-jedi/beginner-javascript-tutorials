// const p = document.querySelector('p');
// const divs = document.querySelectorAll('.items img');
// const items2 = document.querySelector('.items2');
// // Can use querySelector on any element
// const items2img = items2.querySelector('img');
// const heading = document.querySelector('h2');
// // console.dir(heading.textContent); // Getter
// // heading.textContent = 'Ahoy there!"'; // Setter

// // textContent shows hidden nodes and elements. innerText is aware of styling and shows only actual text. https://wesbos.com/javascript/04-the-dom/element-properties-and-methods/#textcontent-and-innertext

// console.dir(heading.innerText); // Getter
// console.dir(heading.textContent); // Getter
// console.dir(heading.innerHTML); // Getter
// console.dir(heading.outerHTML); // Getter

// // Adding extra pizza
// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// // Not good. Causes whole list to re-render
// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText('beforeend', '🍕');
// pizzaList.insertAdjacentText('afterbegin', '🍕');

// Classes
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

function isItRound() {
  console.log(pic.classList.contains('round'));
}

pic.addEventListener('click', isItRound);

// Attributes
pic.alt = 'A nice pic'; // setter
console.log(pic.alt); // Getter
console.log(pic.naturalWidth); // Returns 0... because you have to wait for the pic to load...
// like so
pic.addEventListener('load', () => console.log('Natural width - ', pic.naturalWidth));
// pic.width = 200;
// Explicit getters ans setters
console.log(pic.getAttribute('alt'));
// Below works also for non standard attributes
pic.setAttribute('alt', 'A very nice pic');
console.log(pic.getAttribute('alt'));

// Custom data attributes
const custom = document.querySelector('.custom');
console.log(custom);
console.log(custom.dataset);
custom.addEventListener('click', () => alert(`Hello ${custom.dataset.name}. You look ${custom.dataset.mood}.`));
