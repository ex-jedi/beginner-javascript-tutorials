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
  const html = recipes.map(
    (recipe) => `
    <div class='recipe'>
    <h2>
      <a href="${recipe.href}">
        ${recipe.title}
      </a>
    </h2>
    <p>${recipe.ingredients}</p>
    <p>Rating: ${recipe.rating}</p>
    ${
      recipe.thumbnail &&
      `<img src="${recipe.thumbnail}" alt="${recipe.title}" />`
    }
    </div>
    `
  );
  recipesGrid.innerHTML = html.join('');
}

async function fetchAndDisplay(query) {
  // Disable form
  form.submit.disabled = true;
  // Submit search
  const recipes = await fetchRecipes(query).catch(handleError);
  displayRecipes(recipes.results);
  form.submit.disabled = false;
}

async function handleSubmit(event) {
  event.preventDefault();
  const query = event.currentTarget.query.value;
  fetchAndDisplay(query);
}

form.addEventListener('submit', handleSubmit);
fetchAndDisplay('pizza');
