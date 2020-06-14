// signup 1
const signup = document.querySelector(".signup");
const signup_btn = document.querySelector(".signup-btn");

const showAlert_signup_1 = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".register-form-container");
  container.insertBefore(div, signup);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

let first_name = "";
let last_name = "";
let signup_email = "";
let username = "";
let password = "";
let confirm_password = "";
const signup_1_Event = signup_btn.addEventListener("click", async (event) => {
  event.preventDefault();

  first_name = document.querySelector("#first_name").value;
  last_name = document.querySelector("#last_name").value;
  signup_email = document.querySelector("#signup_email").value;
  username = document.querySelector("#username").value;
  password = document.querySelector("#password").value;
  confirm_password = document.querySelector("#confirm_password").value;
  const signupInfo = await {
    first_name,
    last_name,
    signup_email,
    username,
    password,
    confirm_password,
  };
  if (
    first_name === "" ||
    last_name === "" ||
    signup_email === "" ||
    username === "" ||
    password === "" ||
    confirm_password === ""
  ) {
    showAlert_signup_1("Please Fill All Fields", "error");
  } else if (password != confirm_password) {
    showAlert_signup_1("Passwords Don't Match", "error");
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
          showAlert_signup_2("Signup Failed", "error");
        } else {
          showAlert_signup_2("Signup Successfully", "success");
        }
      } else {
        showAlert_signup_2("Something Went Wrong. Try Again Later", "error");
      }
    })

    .catch((error) => console.error(error));
};
