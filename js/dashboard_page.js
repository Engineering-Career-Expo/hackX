var head_drop = document.getElementsByClassName("head_drop");
var head_section3 = document.getElementsByClassName("navbar_second");
var reg1 = document.getElementsByClassName("navbar_reg1");


head_drop[0].addEventListener("click",myfunc1)
var a = 0;
function myfunc1(){
		
head_section3[0].style.height ="365px"		
head_section3[0].style.width ="auto"				
head_drop[0].innerHTML ="X"	
a++;

if(a%2 === 0){		
head_section3[0].style.height ="0px"		
head_section3[0].style.overflow ="hidden"		
head_drop[0].innerHTML ="&#9776"
		}
 }
 
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("infoSlide");
  var dots = document.getElementsByClassName("dot");
  var y = document.querySelector('.progress_percent');
  var m = document.querySelector('.progress_bar__circleOne');
  var x = document.querySelector('.progress_bar__circleTwo');
  var a = document.querySelector('.progress_bar__circleThree');
  var b = document.querySelector('.progress_bar__circleFour');
  var p = document.querySelector('.progress_submit a');
  
  if (n == 1) {
  	m.style.backgroundColor = "#1071f3";
  	m.style.height = "40px";
  	m.style.width = "40px";
  	m.style.marginTop = "0px";
  	m.innerHTML = "1";
  	y.innerHTML = "25%";
  }else if (n == 2) {
  	x.style.backgroundColor = "#1071f3";
  	x.style.height = "40px";
  	x.style.width = "40px";
  	x.style.marginTop = "0px";
  	x.innerHTML = "2";
  	y.innerHTML = "50%";
  }else if(n == 3) {
  	a.style.backgroundColor = "#1071f3";
  	a.style.height = "40px";
  	a.style.width = "40px";
  	a.style.marginTop = "0px";
  	a.innerHTML = "3";
  	y.innerHTML = "75%";
  }else{
  	b.style.backgroundColor = "#1071f3";
  	b.style.height = "40px";
  	b.style.width = "40px";
  	b.style.marginTop = "0px";
  	b.innerHTML = "4";
  	y.innerHTML = "100%";
  	p.style.backgroundColor = "#1071f3";
  	p.style.color = "#ffffff";
  }
  if (n > 4) {
      document.getElementById("next").disabled = true;
      document.getElementById("next").style.display = 'none';
      document.getElementById("finish").style.display = 'block';
      return;
}
else {
    document.getElementById("next").disabled = false;
    document.getElementById("next").style.display = 'block';
    document.getElementById("finish").style.display = 'none';
}
  if (n < 2) {
      document.getElementById("prev").disabled = true;
      document.getElementById("prev").style.visibility = 'hidden';
}
else {
    document.getElementById("prev").disabled = false;
    document.getElementById("prev").style.visibility = 'visible';
}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}