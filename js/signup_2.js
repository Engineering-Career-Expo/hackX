// signup_2
const signup_2 = document.querySelector(".signup_2");
const signup_btn_2 = document.querySelector(".signup-btn");

const showAlert_signup_2 = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".register-form-container");
  container.insertBefore(div, signup_2);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

const signup_2_Event = signup_btn_2.addEventListener("click", async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const track = document.querySelector("#track").value;
  const age = document.querySelector("#age").value;
  const institution = document.querySelector("#institution").value;
  const firstname = localStorage.getItem("first_name");
  const lastname = localStorage.getItem("last_name");
  const email = localStorage.getItem("signup_email");
  const password = localStorage.getItem("password");
  const confirmPassword = localStorage.getItem("confirm_password");
  const signupInfo = await {
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    username,
    track,
    age,
    institution,
  };
  signup_btn_2.disabled = true;
  if (username === "" || track === "" || age === "" || institution === "") {
    showAlert_signup_2("Please Fill All Fields", "error");
    signup_btn_2.disabled = false;
  } else {
    console.log("success_2");
    signup_btn_2.disabled = true;
    createSignup(signupInfo);
  }
});

const createSignup = async (signupInfo) => {
  axios
    .post("http://localhost:8080/signup", signupInfo)
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
