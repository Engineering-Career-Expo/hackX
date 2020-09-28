let avatarSubmissionFlex = document.querySelector('.avatar-submission-flex');
let id = window.localStorage.getItem('myId');
const imgId = window.localStorage.getItem('usersImageId');
var imageId;
var fullname; var time; var bio; var picture; var gender; var number; var track; var link; var institution; var department;

const username = window.localStorage.getItem('partName');
const headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
  'withCredentials': true, 
}
const dataField = () => {
  let panes = `
    <div class="user-details-flex">
      <div class="submission-img-container"></div>
      <div class="submission-details-container">
        <p class="application-no"><b class="spannybolder">Application #${id}</b></p>
        <p class="user-fullname"><b class="spannybolder">${fullname}</b></p>
        <p class="mobile-date-submitted"><b class="spannybolder">${time}</b></p>
        <div class="my-details">
          <p class="details-text">
            <span class="spannybold">Bio:</span> <span class="unspannyB">${bio}</span>
            <br>
            <span class="spannybold">Biodata:</span> 
            <br>
            <span class="spannybold">Gender:</span> <span class="unspannyB">${gender}</span>
            <br>
            <span class="spannybold">Number:</span> <span class="unspannyB">${number}</span>
            <br>
            <span class="spannybold">Track:</span> <span class="unspannyB">${track}</span>
            <br>
            <span class="spannybold">Link to past projects:</span> <span class="unspannyB">${link}</span>
            <br>
            <span class="spannybold">Instiution:</span> <span class="unspannyB">${institution}</span>
            <br>
            <span class="spannybold">Department:</span> <span class="unspannyB">${department}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="date-submitted-container">
        <p class="date-submitted">
          Jul 19, 2020, 10:09AM (16 hours ago)
        </p>
      </div>
    </div>
    `;
    avatarSubmissionFlex.innerHTML = panes;
}
axios.get("https://hackxbackend.herokuapp.com/getuser?username=" + username, {headers: headers})
.then((response) => {
  let docu = response.data;
  console.log(docu);
  firstname = docu.firstname;
  lastname = docu.lastname;
  fullname = firstname + " " + lastname;
  bio = docu.dashboard[0].bio;
  //picture = docu.dashboard[0].picture.;
  gender = docu.dashboard[0].gender;
  number = docu.dashboard[0].number;
  track = docu.dashboard[0].track;
  link = docu.dashboard[0].link;
  institution = docu.dashboard[0].institution;
  department = docu.dashboard[0].department;
  console.log(docu.dashboard[0]);
  console.log(username);
  console.log(id);
  dataField();
  console.log(imgId);
  imageId = imgId;

  
})
.catch((err) => {console.error(err.message)});

axios.get("https://hackxbackend.herokuapp.com/dashboardImages?id=5f5e762c52ddc7001785c836", {headers: headers})
  .then((response) => {
    console.log(response.data);
  }).catch((err) => {console.error(err.message)});

 // localhost:8080/dashboardImages?id=5efbab83e79ce11900ad71cf

 const deleteUser = () => {
  axios.get("https://hackxbackend.herokuapp.com/deleteuser?username?" + username , { headers: headers })
  .then((response) => {
    if(response.data == "olax has been deleted.");
    console.log('user admission has been rejected and successfully deleted');
  })
  .catch((error) => console.error(error));
}