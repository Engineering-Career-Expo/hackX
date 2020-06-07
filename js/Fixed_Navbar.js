var myham = document.getElementsByClassName("navbar_myham");
var second = document.getElementsByClassName("navbar_second");
var reg1 = document.getElementsByClassName("navbar_reg1");


myham[0].addEventListener("click",myfunc1)
var a = 0;
function myfunc1(){
reg1[0].style.opacity ="0";

second[0].style.height ="340px"		
second[0].style.width ="auto"				
myham[0].innerHTML ="X"	
a++;

if(a%2 === 0){		
second[0].style.height ="0px"		
second[0].style.overflow ="hidden"		
myham[0].innerHTML ="&#9776"
reg1[0].style.opacity ="1";
		}
 }
