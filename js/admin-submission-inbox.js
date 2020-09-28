// GETTING THE DATA FROM THE BACKEND
let applicont = document.querySelector('#appliContainer');
const headers = {
    'Content-Type': 'application/json',
    'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
    'withCredentials': true, 
}
let username = "";
let getUser = () => {
    axios.get("https://hackxbackend.herokuapp.com/getuser?username=" + username , { headers: headers })
    .then((response) => {
      var doc = response.data;
      console.log(doc);
      var bes = doc.dashboard[0].bio; 
      document.body.innerHTML += JSON.stringify(bes);
      var dee = JSON.stringify(doc.submission[0]);
      var userSubmission = dee;
      let subName = doc.submission[0].name;
      let subTagline = doc.submission[0].tagline;
      let subProblem = doc.submission[0].problem;
      let subChallenges = doc.submission[0].challenges;
      let subTech = doc.submission[0].technologies;
      let subTechnologies = subTech.split(',');
      let subLinks = doc.submission[0].links;
      let subVidLinks = doc.submission[0].vidLinks;
      let subPictures = doc.submission[0].pictures;
      document.body.innerHTML += "<br><br><br>" + userSubmission;
      let subArr = [ subName, subTagline, subProblem, subChallenges, subTechnologies, subLinks, subVidLinks, subPictures ];
      // console.log(subArr);
      localStorage.setItem("submissionsArray", subArr);
      let id = 0;
      let newCont = () => {
        let dateCreated = doc[i].createdAt;
        let editedDate = moment(new Date(dateCreated)).format('YYYY-MM-DD');
          let newPane = 
          `<div class="submission-detail">
              <input type="checkbox">
              <div class="column-one">
                  <div class="checkbox" id="checkbox-one"></div>
                  <div class="real-submission">
                      <h5 class="submission-tag">Application ${id}</h5>
                      <h5 class="participant-name">${doc[i].firstname + " "} ${doc[i].lastname}</h5>
                  </div>
              </div>
              <h5 class="time">${editedDate}</h5>
          </div>
          <hr class="submission-hr"></hr>`;
          applicont.innerHTML += newPane;
      }
      for(var i = 0; i < doc.length; i++) {
          id++;
          newCont();
          // console.log('boo');
    
      }
    })
    .catch((error) => console.error(error));
}

let inputCnt = document.querySelector('#inputVal');
let userBtn = document.querySelector('#btn-user');
userBtn.onclick = function () {
    username = inputCnt.value;
    // console.log(username);
    getUser();
}