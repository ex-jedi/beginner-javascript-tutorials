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
  console.log(data);
  return data;
}

function handleSubmit(event) {
  event.preventDefault();
  const queryForm = event.currentTarget;
  // Disable form
  queryForm.submit.disabled = true;
  // Submit search
  fetchRecipes(queryForm.query.value).catch(handleError);
  console.log(queryForm.query.value);
}

form.addEventListener('submit', handleSubmit);
