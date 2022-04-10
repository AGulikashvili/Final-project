var burgerButton = document.querySelector('.burgerButton');
var burgerBar = document.querySelector('.burgerBar');

burgerButton.addEventListener('click', function () {
	burgerBar.classList.toggle('toggle');
});