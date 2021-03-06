const bbc = document.querySelector('.bbc');
bbc.addEventListener('click', (e) => {
  console.log(e);
  console.log('Clicked');
  const pageChange = confirm('This website might be malicious!');
  if (!pageChange) e.preventDefault();
});

const signup = document.querySelector("[name='signup']");
signup.addEventListener('submit', (e) => {
  const name = e.currentTarget.name.value.toLowerCase();
  if (name.includes('chad')) {
    alert('Sorry bro, no Chads allowed!');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.target.value);
}

signup.addEventListener('keyup', logEvent);
signup.addEventListener('keydown', logEvent);
signup.addEventListener('focus', logEvent);
signup.addEventListener('blur', logEvent);

// Best not to register event on things that aren't keyboard accessable. Can be forced though.
function handlePhotoClick(e) {
  if (e.key === 'Enter' || e.type === 'click') {
    console.log('Click');
  }
}

const photo = document.querySelector('.photo');
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
