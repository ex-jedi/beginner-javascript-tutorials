// Element created but not on the page yet
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
