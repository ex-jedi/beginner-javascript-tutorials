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
myImg.height = 250;

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

// remove the first paragraph
addedDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const HTML = `
  <div class="player-card">
    <h2>${name} — ${age}</h2>
  <p>They are ${height} tall and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
  <button class="delete">Delete</button>
  </div>
  `;

  return HTML;
}

// make a new div with a class of cards
const playersDiv = document.createElement('div');
playersDiv.classList.add('players');

// make 4 player cards using generatePlayerCard

const player1 = generatePlayerCard('Lula', 59, '1.6m');
const player2 = generatePlayerCard('Mayme', 52, '2m');
const player3 = generatePlayerCard('Lora', 26, '1.8m');
const player4 = generatePlayerCard('Helena', 26, '1.5m');

// append those cards to the div
playersDiv.innerHTML = `${player1} ${player2} ${player3} ${player4}`;
console.log(playersDiv);

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('afterbegin', playersDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const deleteButtons = myDiv.querySelectorAll('.delete');

// make out delete function

function deletePlayer() {
  // this.parentElement.remove();
  this.closest('.player-card').remove();
}
// loop over them and attach a listener
deleteButtons.forEach((entry) => {
  entry.addEventListener('click', deletePlayer);
});
