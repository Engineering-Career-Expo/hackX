const formElement = document.querySelector('#formElement');
let finishBtn = document.querySelector('#finish');
let sureToSubmit = document.querySelector('#submit_popup');
let closeSubmitPopUp = document.querySelector('#close_popup');
//let Submit = document.querySelector('#submit_popup__btn');
finishBtn.onclick = () => {
    sureToSubmit.style.display = "block";
    console.log("opened submit popup");
}
closeSubmitPopUp.onclick = () => {
    console.log('closed submit popup');
}
// // Submit question
// var submitPopup = document.querySelector('#submit_popup');
// var closePopup = document.querySelector('#close_popup');
// finishBtn.onclick = () => {
//   submitPopup.style.display = "block";
//   document.querySelector('.dashboard_all__opacity').style.height = "100%";
//   document.querySelector('.dashboard_all__opacity').style.overflow = "hidden";
// };
// let reDo = () => {
//     submitPopup.style.display = "none";
//     document.querySelector('.dashboard_all__opacity').style.height = "100%";
//     document.querySelector('.dashboard_all__opacity').style.overflow = "auto";
// }
// closePopup.addEventListener('click', () => {
//     submitPopup.style.display = "none";
//     document.querySelector('.dashboard_all__opacity').style.height = "100%";
//     document.querySelector('.dashboard_all__opacity').style.overflow = "auto";
// });

// const popUp = document.querySelector(".response-bar");
// const Submit = document.querySelector(".submit_popup__btn");

// const showLoginAlert = (message, className) => {
//   const div = document.createElement("div");
//   div.className = `alert ${className}`;
//   div.appendChild(document.createTextNode(message));
//   const container = document.querySelector(".participant-info");
//   container.insertBefore(div, popUp);

//   setTimeout(function () {
//     document.querySelector(".alert").remove();
//   }, 12000);
// };

const formEvent = Submit.addEventListener("click", async (event) => {
    event.preventDefault();
    document.querySelector('#submit_popup').style.display = "none";
    dashboardInfo(); 
  });

const headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
  'withCredentials': true, 
}
const id = window.localStorage.getItem("id");

const dashboardInfo = async () => {
  axios
    .post("https://hackxbackend.herokuapp.com/dashboard/"+ id, new FormData(formElement), { headers: headers})
    .then((response) => {
      // console.log(response)
      if (response.status == "200") {
        if (response.data == "Redirect To login") {
          window.location.href = 'https://hackx.netlify.app/pages/login';
        } else if (response.data == "Too many files to upload.") {
          showLoginAlert("Too many files to upload.", "error");
        } else if (response.data == "Error when trying to upload files.") {
          showLoginAlert("Error when trying to upload files.", "error");
        }else if (response.data == "Files have been uploaded.") {
          result.push("Files Submiited");
          document.querySelector('.dashboard_submissionSuccessful').style.display = "block";
          document.querySelector('.dashboard_all__opacity').classList.add('stop_scroll');
          localStorage.setItem("submission", true);
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