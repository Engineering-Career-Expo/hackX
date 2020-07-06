// THE INPUT ID
var projectName = document.getElementById('projectName');
var projectTagline = document.getElementById('projectTagline');
var projectUSe = document.getElementById('projectUSe');
var projectChallenge = document.getElementById('projectChallenge');
var projectTechnology = document.getElementById('projectTechnology');
var projectLink = document.getElementById('projectLink');
var projectVideoLink = document.getElementById('projectVideoLink');

// IMAGE INPUT ID'S
var imageFileVal1 = document.getElementById('imageFile');
var imageFileVal2 = document.getElementById('imageFile1');
var imageFileVal3 = document.getElementById('imageFile2');
var imageFileVal4 = document.getElementById('imageFile3');
var imageFileVal5 = document.getElementById('imageFile4');

// ARRAY FOR STORING IMAGES
var imageGallery = [];
console.log(imageGallery);


// ADD ITEM TO ARRAY WHEN CHANGED
// FILE CHANGE 1
imageFileVal1.addEventListener('change', function() {
  var image1 = imageFileVal1.value;
  img1 = image1;
  imageGallery.push(img1);
  console.log(imageGallery);
});
// FILE CHANGE 2
imageFileVal2.addEventListener('change', function() {
  var image2 = imageFileVal2.value;
  img2 = image2;
  imageGallery.push(img2);
  console.log(imageGallery);
});
// FILE CHANGE 3
imageFileVal3.addEventListener('change', function() {
  var image3 = imageFileVal3.value;
  img3 = image3;
  imageGallery.push(img3);
  console.log(imageGallery);
});
// FILE CHANGE 4
imageFileVal4.addEventListener('change', function() {
  var image4 = imageFileVal4.value;
  img4 = image4;
  imageGallery.push(img4);
  console.log(imageGallery);
});
// FILE CHANGE 5
imageFileVal5.addEventListener('change', function() {
  var image5 = imageFileVal5.value;
  img5 = image5;
  imageGallery.push(img5);
  console.log(imageGallery);
});

// DELETE IMAGE
//DELETE 1
document.querySelector("#deleteImage").addEventListener('click', function(e) {
  e.preventDefault();
  var index = imageGallery.indexOf(img1);
  imageGallery.splice(index, 1);
  console.log(imageGallery);
});
//DELETE 2
document.querySelector("#deleteImage1").addEventListener('click', function(e) {
  e.preventDefault();
  var index = imageGallery.indexOf(img2);
  imageGallery.splice(index, 1);
  console.log(imageGallery);
});
//DELETE 3
document.querySelector("#deleteImage2").addEventListener('click', function(e) {
  e.preventDefault();
  var index = imageGallery.indexOf(img3);
  imageGallery.splice(index, 1);
  console.log(imageGallery);
});
//DELETE 4
document.querySelector("#deleteImage3").addEventListener('click', function(e) {
  e.preventDefault();
  var index = imageGallery.indexOf(img4);
  imageGallery.splice(index, 1);
  console.log(imageGallery);
});
//DELETE 5
document.querySelector("#deleteImage4").addEventListener('click', function(e) {
  e.preventDefault();
  var index = imageGallery.indexOf(img5);
  imageGallery.splice(index, 1);
  console.log(imageGallery);
});


//////// BACCK END CONNECT
// backend connection
// THE SUBMISSION BUTTON
const submitBtn = document.querySelector('#previewSubmissionDetails');

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
  const proImgVal = imageGallery;
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