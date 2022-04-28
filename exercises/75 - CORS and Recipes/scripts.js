const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
// Need to go to URL in a browser to request temporary access
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  console.log(data);
  return data;
}

fetchRecipes('pizza');
