const items = document.querySelector('.items1');
const src = 'https://picsum.photos/400"';
const desc = 'A Pic of Something';
const myHTML = `
<div class="wrapper">
  <h1>Hello ${desc}</h1>
  <img src="${src}" alt="${desc}" />
</div>
`;

items.innerHTML = myHTML;
console.log(items.innerHTML);
