$(document).ready( function() {
	jquery(window).load( function() {
		var userName = localStorage.get('username');
		var displayUserName = document.querySelector('.name');
		if ( userName == undefined ) {
			alert('Username not available');
		}else{
			displayUserName.innerHTML = userName;
		}
	});
});