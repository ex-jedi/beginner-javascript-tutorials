// Elements created but not on the page yet
const myParagraph = document.createElement('p');
myParagraph.textContent = `I am a paragraph`;
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/500';
myImage.alt = 'I made a pic';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// Adding elements to page.
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
// appendChild() causes a reflow each time you use it. So better to add get everything ready before you add it to the page
document.body.appendChild(myDiv);

// Adding stuff in specific places with insertAdjacentElement()
const myHeading = document.createElement('h2');
myHeading.textContent = 'I Am A heading';
myDiv.insertAdjacentElement('afterbegin', myHeading);

// Making a list
const myList = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'Three';
myList.appendChild(li);

document.body.insertAdjacentElement('afterbegin', myList);
