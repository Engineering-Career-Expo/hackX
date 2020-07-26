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



// ALL THE DATA INPUT ON THE PROFILE PAGE
var fullNameCnt = document.getElementById('fullName');
var usernameCntHd = document.getElementById('usernameHd');
var usernameCnt = document.getElementById('username');
var lastnameCnt = document.getElementById('lastname');
var firstnameCnt = document.getElementById('firstname');
var emailCnt = document.getElementById('email');
var trackCnt = document.getElementById('track');
var ageCnt = document.getElementById('age');
var institutionCnt = document.getElementById('institution');


// GETTING THE DATA FROM THE BACKEND
const headers = {
    'Content-Type': 'application/json',
    'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
    'withCredentials': true, 
}
const username = localStorage.getItem("username");
usernameCntHd.innerHTML = username;
usernameCnt.innerHTML = username;

axios
.get("https://hackxbackend.herokuapp.com/getuser/", { headers: headers},  username)
.then((response) => {
    fullNameCnt.innerHTML = response.data.lastname + " " + response.data.firstname;
    firstnameCnt.innerHTML = response.data.firstname;
    lastnameCnt.innerHTML = response.data.lastname;
    emailCnt.innerHTML = response.data.email;
    trackCnt = response.data.dashboard.track;
    ageCnt = response.data.dashboard.age;
    institutionCnt = response.data.dashboard.institution;
    localStorage.setItem("email", response.data.email);
    console.log(response.data);
})
.catch((error) => console.error(error));

const email = localStorage.getItem("email");
const usernameUpdate = document.querySelector('#usernameUpdate');
const submitData = usernameUpdate.addEventListener("submit", async (event) => {
    event.preventDefault();
    const Info = await { username, email };
    infoStuff(Info);
});

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

function direct() {
  window.location.href = 'https://hackx.netlify.app/pages/profile-username-update';
}