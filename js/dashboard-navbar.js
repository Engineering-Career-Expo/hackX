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
