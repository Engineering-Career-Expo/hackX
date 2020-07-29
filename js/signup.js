// signup 1
const signup = document.querySelector(".signup");
const signup_btn = document.querySelector(".signup-btnn");

const showAlert_signup = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".register-form-container");
  container.insertBefore(div, signup);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 9000);
};

let firstname = "";
let lastname = "";
let email = "";
let username = "";
let password = "";
let confirmPassword = "";

// THIS CODE MAKES A BOOLEAN IF THE CONDITION IS MET
var checked = false;
var checkbox = document.querySelector('#policy');
document.querySelector('#policy-set').addEventListener('click', function() {
  if ( checkbox.checked) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
  if (checkbox.checked === false) {
    checked = true;
    console.log('yeah, it worked :) ' + checked);
  } else {
    checked = false;
    console.log('Nah, it didn\'t work :( ' + checked);
  }
});


const signup_1_Event = signup_btn.addEventListener("click", async (event) => {
  event.preventDefault();

  firstname = document.querySelector("#first_name").value;
  lastname = document.querySelector("#last_name").value;
  email = document.querySelector("#signup_email").value;
  username = document.querySelector("#username").value;
  password = document.querySelector("#password").value;
  confirmPassword = document.querySelector("#confirm_password").value;
  const signupInfo = await {
    firstname,
    lastname,
    email,
    username,
    password,
    confirmPassword,
  };
  if (
    firstname === "" ||
    lastname === "" ||
    email === "" ||
    username === "" ||
    password === "" ||
    confirmPassword === "" ||
    checked === false
    
  ) {
    showAlert_signup("Please Fill All Fields", "error");
    console.log('error message');
  } else if (password != confirmPassword) {
    showAlert_signup("Passwords Don't Match", "error");
    console.log('password mismatch');
  } 
  else {
   createSignup(signupInfo);
   console.log('success');
  }
});


const createSignup = async (signupInfo) => {
  axios
    .post("https://hackxbackend.herokuapp.com/signup", signupInfo)
    .then((response) => {
      response.data;
      if (response.status == "200") {
        if (response.data == "Failed to signup") {
          showAlert_signup("Email used already. ", "error");
        } else if(response.data.message == "Successfully Signed Up"){
          localStorage.setItem("username", response.data.username);
          showAlert_signup("Signup Successfully", "success");
          window.location.href = 'https://hackx.netlify.app/pages/dashboard_page'; 
        } else if (response.data == "Session Redirection To Dashboard"){
          window.location.href = 'https://hackx.netlify.app/pages/dashboard_page';
        }else {
          showAlert_signup(response.data, "error");
        }
      } else {
        showAlert_signup("Something Went Wrong. Try Again Later", "error");
      }
    })
    .catch((error) => console.error(error));
};
