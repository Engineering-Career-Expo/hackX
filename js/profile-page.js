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

axios
.get("https://hackxbackend.herokuapp.com/getuser/",  username, { headers: headers })
.then((response) => {
    usernameCntHd.innerHTML = username;
    usernameCnt.innerHTML = username;
    fullNameCnt.innerHTML = response.data.lastname + " " + response.data.firstname;
    firstnameCnt.innerHTML = response.data.firstname;
    lastnameCnt.innerHTML = response.data.lastname;
    emailCnt.innerHTML = response.data.email;
    trackCnt = response.data.dashboard[0];
    ageCnt = response.data.dashboard[1];
    institutionCnt = response.data.dashboard[2];
    localStorage.setItem("email", response.data.email);
    console.log(response.data);
})
.catch((error) => console.error(error));

function direct() {
  window.location.href = 'https://hackx.netlify.app/pages/profile-username-update';
}