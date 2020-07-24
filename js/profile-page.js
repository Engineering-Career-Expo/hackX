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
const username = localStorage.getItem('username');

axios
.get("https://hackxbackend.herokuapp.com/getuser/",  username, { headers: headers})
.then((response) => {
    let d = response.data;
    console.log(d);
})
.catch((error) => console.error(error));

    // GETTING THE DATA FROM THE RESPONSE DATA OBJECT
    var firstname = d.firstname;
    var lastname = d.lastname;
    var email = d.email;
    var track = d.track;
    var age = d.age;
    var institution = d.institution;

    // UPDATING THE DETAILS FROM THE RESPONSE DATA
    fullNameCnt.innerHTML = lastname + " " + firstname;
    usernameCntHd.innerHTML = username;
    usernameCnt.innerHTML = username;
    lastnameCnt.innerHTML = lastname;
    firstnameCnt.innerHTML = firstname;
    emailCnt.innerHTML = email;
    trackCnt.innerHTML = track;
    ageCnt.innerHTML = age;
    institutionCnt.innerHTML = institution;


// I USED CONCEPT TO DO THIS, I DONT COULD NOT TEST IT, PLEASE TEST IT FOR ME
//{
//     "firstname": "ola",
//     "lastname": "unilag",
//     "email": "olaxunilag@gmail.com",
//     "username": "unihack",
//     "track": "health",
//     "age": 20,
//     "institution": "unilag"
//   }