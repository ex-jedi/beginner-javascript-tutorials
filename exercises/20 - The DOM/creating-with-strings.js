// Creating HTML with strings, backtics and interpolation
const items = document.querySelector('.items1');
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = 'A Pic of Something';
const myHTML = `
<div class="wrapper">
  <h1>Hello ${desc}</h1>
  <img src="${src}" alt="${desc}" />
</div>
`;
items.innerHTML = myHTML;

// Caution! HTML added this way is still a string, it doesn't really create elements.
console.log(typeof myHTML);
