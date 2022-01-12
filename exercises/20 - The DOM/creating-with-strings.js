// Creating HTML with strings, backtics and interpolation
const items = document.querySelector('.items1');
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `A Pic of Something <h1>Sup</h1><style>* {display: none;}</style>`;
const myHTML = `
<div class="wrapper">
  <h1>Hello ${desc}</h1>
  <img src="${src}" alt="${desc}" />
</div>
`;

// Turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);
// You can access them like normal DOM elements
console.log(myFragment.querySelector('img'));
document.body.append(myFragment);
