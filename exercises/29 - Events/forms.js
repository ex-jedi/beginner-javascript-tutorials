const bbc = document.querySelector('.bbc');
bbc.addEventListener('click', (e) => {
  console.log(e);
  console.log('Clicked');
  const pageChange = confirm('This website might be malicious!');
  if (!pageChange) e.preventDefault();
});
