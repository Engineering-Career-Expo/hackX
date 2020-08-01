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


const email = localStorage.getItem("email");
var usernameUpdate = document.querySelector('#usernameUpdate');
const username = usernameUpdate;

const submitData = usernameUpdate.addEventListener("submit", async (event) => {
    event.preventDefault();
    const Info = await { email, username };
    infoStuff(Info);
});

const headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
  'withCredentials': true, 
}

const infoStuff = async (Info) => {
    axios
    .put("https://hackxbackend.herokuapp.com/updateUsername/", Info, {headers: headers})
    .then((response) => {
        response.data;
      // console.log(response)
      if (response.status == "200") {
        if (response.data == "username has been updated Successfully.") {
          showLoginAlert("username updated Successfully", "success");
          window.location.href = 'https://hackx.netlify.app/pages/profile-page';
        } else {
          showLoginAlert("Details entered not correct", "error");
        }
      } else {
        showLoginAlert("Something Went Wrong. Try Again Later", "error");
      }
    })
    .catch((error) => console.error(error));
};
