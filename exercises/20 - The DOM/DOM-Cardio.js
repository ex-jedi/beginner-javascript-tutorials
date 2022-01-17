// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.className = 'wrapper';

// put it into the body
document.body.append(myDiv);

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const liOne = document.createElement('li');
liOne.textContent = 'One';
myList.append(liOne);
const liTwo = document.createElement('li');
liTwo.textContent = 'Two';
myList.append(liTwo);
const liThree = document.createElement('li');
liThree.textContent = 'Three';
myList.append(liThree);

// put that list into the above wrapper
myDiv.append(myList);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = 'https://picsum.photos/id/237/500';

// set the width to 250
myImg.width = 250;

// add a class of cute
myImg.classList.add('cute');

// add an alt of Cute Puppy
myImg.alt = 'Cute puppy';

// Append that image to the wrapper
myDiv.append(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class="added-html">
  <p>First paragraph</p>
  <p>Second paragraph</p>
</div>
`;

// put this div before the unordered list from above
const ulElement = myDiv.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const addedDiv = myDiv.querySelector('div');
addedDiv.lastElementChild.classList.add('warning');
console.log(addedDiv.lastElementChild.classList);

// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
