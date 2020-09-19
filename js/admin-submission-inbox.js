// GETTING THE DATA FROM THE BACKEND
const headers = {
    'Content-Type': 'application/json',
    'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
    'withCredentials': true, 
  }
  
  axios.get("https://hackxbackend.herokuapp.com/alluser" , { headers: headers })
  .then((response) => {
    //   console.log(response.data); 
      var doc = response.data.doc;
      for(var i = 0; i < doc.length; i++) {
          var newL = JSON.stringify(doc[i]) + "<br><br><br><br>";
          document.body.innerHTML += newL;
          console.log(doc[i].firstname);
      }
  })
  .catch((error) => console.error(error));


  // var doc = response.data.doc;
  //   console.log(doc); 
  //   let newCont = () => {
  //       let newPane = 
  //       `<div class="submission-detail">
  //           <input type="checkbox">
  //           <div class="column-one">
  //               <div class="checkbox" id="checkbox-one"></div>
  //               <div class="real-submission">
  //                   <h5 class="submission-tag">Application ${(i + 1)}</h5>
  //                   <h5 class="participant-name">${doc[i].name}</h5>
  //               </div>
  //           </div>
  //           <h5 class="time">${doc[i].createdAt}</h5>
  //       </div>
  //       <hr class="submission-hr"></hr>`;
  //       applicont.innerHTML += newPane;
  //   }
  //   for(var i = 0; i < doc.length; i++) {
  //       var bigDocument = JSON.stringify(doc[i]) + "<br><br><br><br>";
  //       newCont();
  //       console.log('boo');

  //   }