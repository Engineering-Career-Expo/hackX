var myham = document.getElementsByClassName("myham");
var second = document.getElementsByClassName("second");


myham[0].addEventListener("click",myfunc1)
var a = 0;
function myfunc1(){

second[0].style.height ="270px"		
second[0].style.width ="auto"				
myham[0].innerHTML ="X"	
a++;

if(a%2 === 0){		
second[0].style.height ="0px"		
second[0].style.overflow ="hidden"		
myham[0].innerHTML ="&#9776"
		}	
 }
