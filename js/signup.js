// signup 1
const signup = document.querySelector(".signup");
const signup_btn = document.querySelector(".signup-btn");

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
    confirmPassword === ""
  ) {
    showAlert_signup("Please Fill All Fields", "error");
  } else if (password != confirmPassword) {
    showAlert_signup("Passwords Don't Match", "error");
  } 
  else {
   createSignup(signupInfo);
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
        } else if(response.data == "Successfully Signed Up"){
          showAlert_signup("Signup Successfully", "success");
          window.location.href = 'https://hackx.netlify.app/dashboard'; 
        } else if (response.data == "Session Checker"){
          window.location.href = 'https://hackx.netlify.app/dashboard';
        }else {
          showAlert_signup(response.data, "error");
        }
      } else {
        showAlert_signup("Something Went Wrong. Try Again Later", "error");
      }
    })
    .catch((error) => console.error(error));
};
