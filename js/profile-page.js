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
var fullNameCnt = document.getElementById('full-name');
var user_name = document.querySelector('#user-name');
//var user_name = document.querySelector('.user-name');
var user_Name = document.querySelector('#user_name');
var lastnameCnt = document.getElementById('last-name');
var firstnameCnt = document.getElementById('first-name');
var emailCnt = document.getElementById('email-address');
var trackCnt = document.getElementById('track');
var institutionCnt = document.getElementById('institution');


// GETTING THE DATA FROM THE BACKEND
const headers = {
    'Content-Type': 'application/json',
    'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
    'withCredentials': true, 
}
const username = localStorage.getItem('username');
console.log(username);
user_name.innerHTML = username;
user_Name.innerHTML = username;

axios
.get("https://hackxbackend.herokuapp.com/getuser/",  username, { headers: headers})
.then((response) => {
    //usernameCntHd.innerHTML = username;
    //usernameCnt.innerHTML = username;
    fullNameCnt.innerHTML = response.data.lastname + " " + response.data.firstname;
    firstnameCnt.innerHTML = response.data.firstname;
    lastnameCnt.innerHTML = response.data.lastname;
    emailCnt.innerHTML = response.data.email;
    trackCnt = response.data.dashboard[0];
    //ageCnt = response.data.dashboard[1];
    institutionCnt = response.data.dashboard[2];
    localStorage.setItem("email", response.data.email);
    console.log(response.data);
})
.catch((error) => console.error(error));