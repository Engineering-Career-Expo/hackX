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
  const email = document.querySelector("#email").value;
  localStorage.setItem("email", email);
  const username = document.querySelector("#username").value;
  const forgotPasswordInfo = await { email, username };
  if (email === "" || password === "") {
    showLoginAlert("Please Fill All Fields", "error");
  } else {
    userDetails(forgotPasswordInfo);
  }
});

const userDetails = async (forgotPasswordInfo) => {
  //http://localhost:8080/login   
  headers = {
    'Content-Type': 'application/json',
    'withCredentials': true
  }


  axios
    .post("https://hackxbackend.herokuapp.com/forgotPassword/",  forgotPasswordInfo, { headers: headers})
    .then((response) => {
      response.data;
      // console.log(response)
      if (response.status == "200") {
        if (response.data == "Login Incorrect") {
          showLoginAlert("Login Incorrect", "error");
        } else if (response.data == "Wrong email entered.") {
          showLoginAlert("Email or Username entered is incorrect", "error");
        } else if (response.data == "Wrong username entered.") {
          showLoginAlert("Email or username entered is incorrect", "error");
        } else if (response.data == "Session Redirection To email verification page"){
          window.location.href = 'https://hackx.netlify.app/pages/email-verification';
        }else {
          showLoginAlert("email and username is verified", "success");
          localStorage.setItem("pass", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("username", response.data.username);
          window.location.href = 'https://hackx.netlify.app/pages/email-verification';

        }
      } else {
        showLoginAlert("Something Went Wrong. Try Again Later", "error");
      }
    })

    .catch((error) => console.error(error));
};
