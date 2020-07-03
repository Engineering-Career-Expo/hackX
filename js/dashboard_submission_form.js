// THE INPUT ID
const projectName = document.getElementById('projectName');
const projectTagline = document.getElementById('projectTagline');
const projectUSe = document.getElementById('projectUSe');
const projectChallenge = document.getElementById('projectChallenge');
const projectTechnology = document.getElementById('projectTechnology');
const projectLink = document.getElementById('projectLink');
const projectVideoLink = document.getElementById('projectVideoLink');
const projectImage = document.getElementById('projectImage');


// THE SUBMISSION BUTTON
const submitBtn = document.querySelector('#previewSubmissionDetails');


// THE ACTIVE INPUT HORIZONTAL BORDER ID
var vR1 = document.getElementById('vR1');
var vR2 = document.getElementById('vR2');
var vR3 = document.getElementById('vR3');
var vR4 = document.getElementById('vR4');
var vR5 = document.getElementById('vR5');
var vR6 = document.getElementById('vR6');
var vR7 = document.getElementById('vR7');
var vR8 = document.getElementById('vR8');


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectName.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'visible';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectTagline.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'visible';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectUSe.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'visible';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectChallenge.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'visible';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectTechnology.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'visible';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectLink.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'visible';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectVideoLink.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'visible';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectImage.addEventListener( 'click' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'visible';
});


 // THE INPUT LENGTH COUNTER
function countInput1(str) {
    var lng = str.length;
    document.getElementById('inputCount1').innerHTML =lng + ' / 50';
}
function countInput2(str) {
    var lng = str.length;
    document.getElementById('inputCount2').innerHTML =lng + ' / 200';
}
function countInput3(str) {
    var lng = str.length;
    document.getElementById('inputCount3').innerHTML =lng + ' / 200';
}
function countInput4(str) {
    var lng = str.length;
    document.getElementById('inputCount4').innerHTML =lng + ' / 200';
}
function countInput5(str) {
    var lng = str.length;
    document.getElementById('inputCount5').innerHTML =lng + ' / 200';
}
function countInput6(str) {
    var lng = str.length;
    document.getElementById('inputCount6').innerHTML =lng + ' / 50';
}
function countInput7(str) {
    var lng = str.length;
    document.getElementById('inputCount7').innerHTML =lng + ' / 50';
}


//////// BACCK END CONNECT
// backend connection
const popUp = document.querySelector(".inputCnt");


const showLoginAlert = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".subForm");
  container.insertBefore(div, popUp);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};


const formEvent = submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const proImgVal = projectImage.value;
  const proNameVal = projectName.value;
  const proTagVal = projectTagline.value;
  const proChallVal = projectChallenge.value;
  const proTechVal = projectTechnology.value;
  const proLinkVal = projectLink.value;
  const proVidVal = projectVideoLink.value;
  const Info = await { proImgVal, proNameVal, proTagVal , proChallVal, proTechVal, proLinkVal, proVidVal };
  submissionInfo(Info); 
});

const headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
  'withCredentials': true,
}
const id = window.localStorage.getItem("id");
 
const dashboardInfo = async (Info) => {
  console.log(id, Info, headers)
  axios
    .get("https://hackxbackend.herokuapp.com/submission/"+ id, { headers: headers}, Info)
    .then((response) => {
      response.data;
      // console.log(response)
      if (response.status == "200") {
        localStorage.clear();
        if (response.data == "Redirect To the submitted screen") {
          window.location.href = 'https://hackx.netlify.app/pages/dashboard_submitted_screen';
        } else if (response.data == "Too many files to upload.") {
          showLoginAlert("Too many files to upload.", "error");
        } else if (response.data == "Error when trying to upload files.") {
          showLoginAlert("Error when trying to upload files.", "error");
        }else if (response.data == "Files have been uploaded.") {
          showLoginAlert("Files have been uploaded successfully.", "success");
        } else if (response.data == "Dashboard Submission Failed") {
          showLoginAlert("Unable to submit files.", "error");
        }else if (response.data == 'Invalid Token') {
          showLoginAlert("Unable to submit files.", "error");
        }else if (response.data == 'You are not allowed to access this page.') {
          showLoginAlert('You are not allowed to access this page.', "error");
        } else { 
          showLoginAlert(response.data, "error");
        }
      } else {
        showLoginAlert("Something Went Wrong. Try Again Later", "error");
      }
    })

  .catch((error) => console.error(error.message));
};