var linkk = document.querySelector("#link");
var newProfile = document.querySelector(".new-profile");
newProfile.addEventListener('click', () => {
	if (linkk.value.length == 0) {
		showLoginAlert('Link cannot be empty', 'error');
	}else{
		showLoginAlert('Link updated', 'success');
	}
});