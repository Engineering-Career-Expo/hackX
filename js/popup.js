var closePopUp = document.querySelector('#close_image');
var welcomePopUp = document.querySelector('.main_dashboard__welcome');
var allPage = document.querySelector('.main_dashboard__pageAll');
allPage.classList.add('stop_scroll');
closePopUp.addEventListener('click', function() {
	welcomePopUp.style.display = "none";
	allPage.classList.remove('stop_scroll');
});
