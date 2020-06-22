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
  x = document.querySelector('.progress_bar__circleTwo');
  a = document.querySelector('.progress_bar__circleThree');
  b = document.querySelector('.progress_bar__circleFour');
  y = document.querySelector('.progress_percent');
  z = document.querySelector('.progress_submit a');

  if (n == 2) {
    x.innerHTML = "2";
    x.style.color = "#ffffff";
    x.style.backgroundColor = "#1071F3";
    x.style.height = "40px";
    x.style.width = "40px";
    x.style.marginTop = "0px";
    x.style.lineHeight = "40px";
    y.innerHTML = "50%";
  }
  if (n == 3) {
    a.innerHTML = "3";
    a.style.color = "#ffffff";
    a.style.backgroundColor = "#1071F3";
    a.style.height = "40px";
    a.style.width = "40px";
    a.style.marginTop = "0px";
    a.style.lineHeight = "40px";
    y.innerHTML = "75%";
  }
  if (n == 4) {
    b.innerHTML = "4";
    b.style.color = "#ffffff";
    b.style.backgroundColor = "#1071F3";
    b.style.height = "40px";
    b.style.width = "40px";
    b.style.marginTop = "0px";
    b.style.lineHeight = "40px";
    y.innerHTML = "100%";
    z.style.color = "#ffffff";
    z.style.backgroundColor = "#1071f3";
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