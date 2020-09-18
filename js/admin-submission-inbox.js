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