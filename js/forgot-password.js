// DISPLAY THE RESET MESSAGE TO CHECK MAIL FOR PASSWORD RESET LINK
var resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', function showCheckMailMessage() {
  var passwordResetLink = document.getElementById('passwordResetLink');
  var forgotPassword = document.getElementById('forgotPassword');

  passwordResetLink.style.display = 'block';
  forgotPassword.style.display = 'none';
});



