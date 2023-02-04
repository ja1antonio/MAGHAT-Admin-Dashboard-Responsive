const sideMenu = document.querySelector('aside');
const menuButton = document.querySelector('#menuButton');
const themeToggler = document.querySelector('.themeToggler');
const closeButton = document.querySelector('#closeButton');

// Show Sidebar
menuButton.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});
// Close Sidebar
closeButton.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});
