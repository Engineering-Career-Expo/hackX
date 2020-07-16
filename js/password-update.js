// JS FILE FOR THE PASSWORD RESET HTML PAGE
function viewPassword() {
    var passwordInput = document.getElementById('password');
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

  // BACKEND CONNECTION
  const loginForm = document.querySelector(".login-form");

const showLoginAlert = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".login-container");
  container.insertBefore(div, loginForm);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

const formEvent = loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = localStorage.getItem("email");
  const newPassword = document.querySelector('#newPassword').value;
  const password = document.querySelector("#confirmPassword").value;
  const passwordUpdateInfo = await { email, password };
  if (newPassword === "" || confirmPassword === "") {
    showLoginAlert("Please Fill All Fields", "error");
  } else if (newPassword != confirmPassword) {
    showLoginAlert("Password Mismatch", "error");
  } else {
    userDetails(passwordUpdateInfo);
  }
});

const userDetails = async (passwordUpdateInfo) => {
  //http://localhost:8080/updatePassword   
  headers = {
    'Content-Type': 'application/json',
    'withCredentials': true
  }


  axios
    .post("https://hackxbackend.herokuapp.com/updatePassword/",  passwordUpdateInfo, { headers: headers})
    .then((response) => {
      response.data;
      // console.log(response)
      if (response.status == "200") {
        if (response.data == "Password Incorrect") {
          showLoginAlert("Login Incorrect", "error");
        } else if (response.data == "Wrong email entered.") {
          showLoginAlert("Email entered is incorrect", "error");
        } else if (response.data == "Password Mismatch.") {
          showLoginAlert("Password do not match each other", "error");
        } else if (response.data == "Session Redirection To Login page"){
          window.location.href = 'https://hackx.netlify.app/pages/Login';
        }else {
          showLoginAlert("email and username is verified", "success");
          localStorage.setItem("pass", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("username", response.data.username);
          window.location.href = 'https://hackx.netlify.app/pages/Login';

        }
      } else {
        showLoginAlert("Something Went Wrong. Try Again Later", "error");
      }
    })

    .catch((error) => console.error(error));
};
