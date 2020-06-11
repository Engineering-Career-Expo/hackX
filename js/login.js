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
  const password = document.querySelector("#password").value;
  const loginInfo = await { email, password };
  if (email === "" || password === "") {
    showLoginAlert("Please Fill All Fields", "error");
  } else {
    userLogin(loginInfo);
  }
});
part = "https://hackx.netlify.app/login" 
// Change to this to use the api locally.  "http://localhost:8080/login"
const userLogin = async (loginInfo) => {
  axios
    .post(part, loginInfo)
    .then((response) => {
      response.data;
      if (response.status == "200") {
        showLoginAlert("Login Successful", "success");
      } else {
        showLoginAlert("Something Went Wrong. Try Again Later", "error");
      }
    })

    .catch((error) => console.error(error));
};
