const toggleButton = document.querySelector('#menu-list');
const navbarLink = document.querySelector('#nav-items');

toggleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    navbarLink.classList.toggle('active');

});