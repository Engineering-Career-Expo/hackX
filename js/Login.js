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
