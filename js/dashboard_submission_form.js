// SUBMIT BUTTON
const submitBtn = document.querySelector('#previewSubmissionDetails');

submitBtn.disabled = true;

// VALIDATION FUNCTION
function validateInput() {
  if(projectName.value.length > 4 && projectTagline.value.length > 4 && projectUSe.value.length > 4 && 
    projectChallenge.value.length > 4 && projectTechnology.value.length > 4 && projectLink.value.length > 5 && 
    projectVideoLink.value.length > 5) {
      submitBtn.disabled = false;
  } else {
      submitBtn.disabled = true;
  }
};

// WHEN SUBMIT BUTTON IS CLICKED
submitBtn.addEventListener('click', function() {
  submitBtn.disabled = 'true';
  // console.log('response has been submitted and button disabled');
})

// INPUT VALIDATION
projectName.addEventListener('keyup', function() {
  validateInput();
});
projectTagline.addEventListener('keyup', function() {
  validateInput();
});
projectUSe.addEventListener('keyup', function() {
  validateInput();
});
projectChallenge.addEventListener('keyup', function() {
  validateInput();
});
projectTechnology.addEventListener('keyup', function() {
  validateInput();
});
projectLink.addEventListener('keyup', function() {
  validateInput();
});
projectVideoLink.addEventListener('keyup', function() {
  validateInput();
});


//////// BACCK END CONNECT
// backend connection
// THE SUBMISSION BUTTON
const popUp = document.querySelector(".inputCnt");


const showLoginAlert = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".subForm");
  container.insertBefore(div, popUp);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 15000);
};


const formEvent = submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  submissionInfo(); 
});

const headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
  'withCredentials': true,
}
const id = window.localStorage.getItem("id");
 
const submissionInfo = async () => {
  axios
    .post("https://hackxbackend.herokuapp.com/submission/"+ id, new FormData(formElem), { headers: headers})
    .then((response) => {
      response.data; 
      if (response.status == "200") {
        if (response.data == "Too many files to upload.") {
          showLoginAlert("Too many files to upload.", "error");
        } else if (response.data == "Error when trying to upload files.") {
          showLoginAlert("Error when trying to upload files.", "error");
        }else if (response.data == "Files have been uploaded.") {
          showLoginAlert("Submitted Successfully.", "success");
        } else if (response.data == "Submission Failed") {
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