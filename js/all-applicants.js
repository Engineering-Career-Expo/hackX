let applicont = document.querySelector('#appliContainer');
const headers = {
    'Content-Type': 'application/json',
    'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
    'withCredentials': true, 
  }
  
axios.get("https://hackxbackend.herokuapp.com/getAllContacts" , { headers: headers })
.then((response) => {
    console.log(response.data); 
    var doc = response.data.doc;
    // let newPane = 
    // `<div class="submission-detail">
    //     <input type="checkbox">
    //     <div class="column-one">
    //         <div class="checkbox" id="checkbox-one"></div>
    //         <div class="real-submission">
    //             <h5 class="submission-tag">Application ${(doc[i] + 1)}</h5>
    //             <h5 class="participant-name">${doc[i].name}</h5>
    //         </div>
    //     </div>
    //     <h5 class="time">${doc[i].createdAt}</h5>
    // </div>
    // <hr class="submission-hr"></hr>`;
    for(var i = 0; i < doc.length; i++) {
        var bigDocument = JSON.stringify(doc[i]) + "<br><br><br><br>";
        applicont.innerHTML += bigDocument;
        console.log('boo');

    }
})
.catch((error) => console.error(error));




