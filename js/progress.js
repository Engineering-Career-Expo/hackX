


var j = 0;
document.querySelector('#next').addEventListener('click', function() {
	j += 20;
	document.querySelector('.progress_percent').innerHTML = j + "%";
});
document.querySelector("#prev").addEventListener('click', function() {
	j -= 20;
	document.querySelector('.progress_percent').innerHTML = j + "%";
});