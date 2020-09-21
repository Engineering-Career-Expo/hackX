let applicont = document.querySelector('#appliContainer');
const headers = {
    'Content-Type': 'application/json',
    'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
    'withCredentials': true, 
  }
  let emArr = [];

axios.get("https://hackxbackend.herokuapp.com/alluser" , { headers: headers })
.then((response) => {
  var doc = response.data.doc;
  console.log(doc);
  var b = JSON.stringify(doc) + "<br><br><br>";
  applicont.innerHTML += b; 
  var id = 0;
  let newCont = () => {
    console.log(id);
    let dateCreated = doc[i].createdAt;
    let editedDate = moment(new Date(dateCreated)).format('YYYY-MM-DD');
      let newPane = 
      `<div class="submission-detail">
          <input type="checkbox">
          <div class="column-one">
              <div class="checkbox" id="checkbox-one">
                <img src="../assets/images/dashboard/checkmark.svg" class="false-check" id="false-check">
              </div>
              <div class="real-submission">
                  <h5 class="submission-tag">Application ${id}</h5>
                  <h5 class="participant-name">${doc[i].firstname + " "} ${doc[i].lastname}</h5>
              </div>
          </div>
          <h5 class="time">${editedDate}</h5>
      </div>
      <hr class="submission-hr"></hr>`;
      applicont.innerHTML += newPane;
      emArr.push(doc[i].email);
    }
    for(var i = doc.length - 1; i > -1; i--) {
      id++;
      newCont();
      console.log(doc[i].username);
      console.log(doc[i].submission);
    }
    console.log(emArr);
    localStorage.setItem('emailArray', emArr);
    
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