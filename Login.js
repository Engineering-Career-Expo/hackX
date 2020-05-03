function viewPassword() {
  var passwordInput = document.getElementById('pword');
  var passStatus = document.getElementById('pass');
 
  if (passwordInput.type == 'password'){
    passwordInput.type='text';
    passStatus.className='fa fa-eye';
    
  }
  else{
    passwordInput.type='password';
    passStatus.className='fa fa-eye-slash';
  }
}
var myham = document.getElementsByClassName("menu");
var second = document.getElementsByClassName("list");


myham[0].addEventListener("click",myfunc1)
var a = 0;
function myfunc1(){

second[0].style.height ="270px"		
second[0].style.width ="auto"				
	
a++;
}