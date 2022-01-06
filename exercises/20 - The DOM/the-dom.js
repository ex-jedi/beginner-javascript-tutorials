const p = document.querySelector('p');
const divs = document.querySelectorAll('.items img');
const items2 = document.querySelector('.items2');
// Can use querySelector on any element
const items2img = items2.querySelector('img');
const heading = document.querySelector('h2');
// console.dir(heading.textContent); // Getter
// heading.textContent = 'Ahoy there!"'; // Setter

// textContent shows hidden nodes and elements. innerText is aware of styling and shows only actual text. https://wesbos.com/javascript/04-the-dom/element-properties-and-methods/#textcontent-and-innertext

console.dir(heading.innerText); // Getter
console.dir(heading.textContent); // Getter
console.dir(heading.innerHTML); // Getter
console.dir(heading.outerHTML); // Getter

// Adding extra pizza
const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);
// Not good. Causes whole list to re-render
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;

pizzaList.insertAdjacentText('beforeend', '🍕');
pizzaList.insertAdjacentText('afterbegin', '🍕');
