// GETTING THE DATA FROM THE BACKEND
const headers = {
    'Content-Type': 'application/json',
    'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
    'withCredentials': true, 
  }
  
  axios.get("https://hackxbackend.herokuapp.com/alluser" , { headers: headers })
  .then((response) => {
    //   console.log(response.data); 
    //   console.log(response.data.doc);
    //   var obj = response.data.doc[0];
    //   myJson = JSON.stringify(obj);
    //   document.write(myJson);

    //   var obj2 = response.data.doc[1];
    //   myJsonI = JSON.stringify(obj2);
    //   document.write(myJsonI);
      var doc = response.data.doc;
      for(var i = 0; i < doc.length; i++) {
          var newL = JSON.stringify(doc[i]) + "<br><br><br><br>";
          document.body.innerHTML += newL;
          console.log(doc[i].firstname);
      }
  })
  .catch((error) => console.error(error));

// var settings = {
//     "url": "https://hackxbackend.herokuapp.com/alluser",
//     "method": "GET",
//     "timeout": 0,
//     "headers": {
//       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9sYXdhbGViYW1pQGdtYWlsLmNvbSIsImlhdCI6MTU5MDAwMTcxMSwiZXhwIjoxNTkwMDg4MTExfQ.62tVXjiCUxAhR1jBr9jGNIzFssxPi7b0VzRiuqPy4tE"
//     },
//   };
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });