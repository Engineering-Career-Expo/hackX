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
var data;
axios
.get("https://hackxbackend.herokuapp.com/getuser/", { headers: headers},  username)
.then((response) => {
    fullNameCnt.innerHTML = response.data.lastname + " " + response.data.firstname;
    firstnameCnt.innerHTML = response.data.firstname;
    usernameCntHd.innerHTML = username;
    usernameCnt.innerHTML = username;
    lastnameCnt.innerHTML = response.data.lastname;
    emailCnt.innerHTML = response.data.email;
    trackCnt = response.data.dashboard[0];
    ageCnt = response.data.dashboard[1];
    institutionCnt = response.data.dashboard[2];
    console.log(response.data);
})
.catch((error) => console.error(error));