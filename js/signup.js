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
let password = "";
let confirm_password = "";
const signup_1_Event = signup_btn.addEventListener("click", async (event) => {
  // event.preventDefault();

  first_name = document.querySelector("#first_name").value;
  last_name = document.querySelector("#last_name").value;
  signup_email = document.querySelector("#signup_email").value;
  password = document.querySelector("#password").value;
  confirm_password = document.querySelector("#confirm_password").value;
  const signupInfo = await {
    first_name,
    last_name,
    signup_email,
    password,
    confirm_password,
  };
  if (
    first_name === "" ||
    last_name === "" ||
    signup_email === "" ||
    password === "" ||
    confirm_password === ""
  ) {
    showAlert_signup_1("Please Fill All Fields", "error");
  } else {
    if (password != confirm_password) {
      showAlert_signup_1("Passwords Don't Match", "error");
    }
    localStorage.setItem("first_name", first_name);
    localStorage.setItem("last_name", last_name);
    localStorage.setItem("signup_email", signup_email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirm_password", confirm_password);
    // console.log('success')
    // createContact(contactInfo);
  }
});
