const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
// Need to go to URL in a browser to request temporary access
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

function handleError(err) {
  console.log('Ruh Roh!');
  console.log(err);
}

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

function displayRecipes(recipes) {
  console.log('Display recipes...');
  console.log(recipes);
}

async function handleSubmit(event) {
  event.preventDefault();
  const queryForm = event.currentTarget;
  // Disable form
  queryForm.submit.disabled = true;
  // Submit search
  const recipes = await fetchRecipes(queryForm.query.value).catch(handleError);
  displayRecipes(recipes.results);
  queryForm.submit.disabled = false;
}

form.addEventListener('submit', handleSubmit);
