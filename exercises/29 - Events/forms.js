const bbc = document.querySelector('.bbc');
bbc.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e);
  console.log('Clicked');
  const pageChange = confirm('This website might be malicious!');
  if (pageChange) window.location = e.currentTarget.href;
});
