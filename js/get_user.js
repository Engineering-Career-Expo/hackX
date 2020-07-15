var userName = localStorage.getItem('username');
console.log(userName);
var displayUserName = document.querySelector('.name');
if ( userName == undefined ) {
	alert('Username not available');
}else{
	displayUserName.innerHTML = userName;
}