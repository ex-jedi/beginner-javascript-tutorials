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
    <div>
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
  console.log(html.join());
  recipesGrid.innerHTML = html.join('');
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
