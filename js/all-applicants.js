let applicont = document.querySelector('#appliContainer');
const headers = {
    'Content-Type': 'application/json',
    'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
    'withCredentials': true, 
  }
  let userNameArr = [];

axios.get("https://hackxbackend.herokuapp.com/alluser" , { headers: headers })
.then((response) => {
  var doc = response.data.doc;
  console.log(doc);
  // var b = JSON.stringify(doc) + "<br><br><br>";
  // applicont.innerHTML += b; 
  var id = 0;
  var usersId = [];
  var demId = "";
  let newCont = () => {
    console.log(id);
    let dateCreated = doc[i].createdAt;
    let editedDate = moment(new Date(dateCreated)).format('YYYY-MM-DD');
    let newPane = 
    `<div class="submission-detail" id= ${demId}>
        <div class="column-one">
            <div class="real-submission">
                <h5 class="submission-tag">Application ${id}</h5>
                <h5 class="participant-name">${doc[i].firstname + " "} ${doc[i].lastname}</h5>
            </div>
        </div>
        <h5 class="time">${editedDate}</h5>
    </div>
    <hr class="submission-hr"></hr>`;
    applicont.innerHTML += newPane;
    userNameArr.push(doc[i].username);
    let viewApplication = () => {
      console.log("this.id");
      window.location.assign('admin-participant-review.html');
    }
  }
    for(var i = doc.length - 1; i > -1; i--) {
      id++;
      demId = `${"pane" + i}`;
      newCont();
      console.log(doc[i].username);
      console.log(doc[i].submission);
      usersId[i] = `${"pane" + i}`;
      //.onclick = viewApplication();
    }
    console.log(usersId);
    console.log(userNameArr);
    localStorage.setItem('usernameArray', userNameArr);
    var panny = document.querySelector('#pane6');
    var finame = document.querySelector('.participant-name');
    var fd = finame.value;
    panny.onclick = function() {
      var ma = this.id;
      console.log(doc[ma].username);
    }
})
.catch((error) => console.error(error));


const deleteUser = () => {
  axios.get("https://hackxbackend.herokuapp.com/deleteuser?username?" + username , { headers: headers })
  .then((response) => {
    if(response.data == "olax has been deleted.");
    console.log('successfully deleted');
  })
  .catch((error) => console.error(error));
}