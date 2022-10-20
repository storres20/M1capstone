/* hamburger */
const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');

const mobLinks = document.querySelectorAll('.mobLinks');
const mobMenu = document.querySelector('.mobMenu');

hamburger.addEventListener('click', () => {
  mobMenu.classList.toggle('hide');
});
cross.addEventListener('click', () => {
  mobMenu.classList.toggle('hide');
});
mobLinks.forEach((item) => {
  item.addEventListener('click', () => {
    mobMenu.classList.add('hide');
  });
});

/* ****** */