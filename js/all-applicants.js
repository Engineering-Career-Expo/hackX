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
  let newCont = () => {
    let id = i;
    console.log(id);
      let newPane = 
      `<div class="submission-detail">
          <input type="checkbox">
          <div class="column-one">
              <div class="checkbox" id="checkbox-one"></div>
              <div class="real-submission">
                  <h5 class="submission-tag">Application ${(i + 1)}</h5>
                  <h5 class="participant-name">${doc[i].firstname + " "} ${doc[i].lastname}</h5>
              </div>
          </div>
          <h5 class="time">${doc[i].createdAt}</h5>
      </div>
      <hr class="submission-hr"></hr>`;
      applicont.innerHTML += newPane;
      emArr.push(doc[i].email);
    }
    for(var i = 0; i < doc.length; i++) {
      newCont();
      console.log('boo');
    }
    console.log(emArr);
    localStorage.setItem('emailArray', emArr);
})
.catch((error) => console.error(error));