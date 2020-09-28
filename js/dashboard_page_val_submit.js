

function validateInput() {
    if(bioCntInput.length < 5 && bioCntInput.length > 50 && genderValue.length < 1 && phoneNoVal.length < 10 && 
       phoneNoVal.length > 11 && trackVal.length < 1 && institutionCntVal.length < 1 && departmentCntVal.length < 1 && 
      biodataImg.value.length < 1) {
        document.querySelector('#finish').disabled = true;
        /* console.log("nothing here");
        console.log(bioCntInput);
        console.log(genderValue);
        console.log(phoneNoVal);
        console.log(trackVal);
        console.log(institutionCntVal);
        console.log(departmentCntVal);
        console.log(biodataImg,value);
        */
    } else {
        document.querySelector('#finish').disabled = false;
        // console.log("filled here");
    }
    // console.log("validated");
};





// for Image
var imageUrl;
var file;
// CALLING THE IMAGE UPLOAD
document.querySelector("#imageUpload").addEventListener('click', function() {
    document.querySelector("#imageFile").click();
});
// IMAGE UPLOAD SEQUENCE
document.querySelector("#imageFile").addEventListener('change', function() {
    file = this.files[0];
    // VALIDATE IMAGE SIZE
    if(file.size > 2*1024*1024) {
        alert('Error : Exceeded size 2MB');
        return;
    }
    // WHEN IMAGE VALIDATION IS SUCCESSFUL
    // HIDE THE UPLOAD IMAGE 
    document.querySelector("#imageUpload").style.display = 'none';
    // SET THE FILE NAME
    document.querySelector("#imageName").innerText = file.name;
    document.querySelector("#imageName").style.display = 'block';
    // GET THE LOCAL URL
    imageUrl = URL.createObjectURL(file);
    // SET THE LOCAL URL AS THE IMAGE SRC
    document.querySelector("#imagePreview").setAttribute('src', imageUrl);
    document.querySelector("#imagePreview").style.display = 'block';
    // sHOW DELETE BUTTON
    document.querySelector("#deleteImage").style.display = 'block';
    // SO AS NOT TO SHOW UNNECESSARY SCREEN, I MADE A SMALL VALIDATION FOR IT
});
// DELETE IMAGE
document.querySelector("#deleteImage").addEventListener('click', function(e) {
    e.preventDefault();
    URL.revokeObjectURL(imageUrl);
    document.querySelector("#imageUpload").style.display = 'block';
    document.querySelector("#imageFile").value = '';
    document.querySelector("#imageName").style.display = 'none';
    document.querySelector("#imagePreview").style.display = 'none';
    document.querySelector("#deleteImage").style.display = 'none';
});


// for bio 
var bioCnt = document.querySelector("#bio");
bioCnt.value = bioCnt.value.replace(/^\s*|\s*$/g,'');
let counter = document.querySelector('#count');
var bioCntInput = "";

bioCnt.oninput = () => {
    bioCntInput = bioCnt.value;
    bioCntInput = bioCntInput.replace(/(^\s*)|(\s*$)/gi,"");
    bioCntInput = bioCntInput.replace(/[ ]{2,}/gi," ");
    bioCntInput = bioCntInput.replace(/\n /,"\n");
    var count = (bioCntInput.split(" ").length);
    counter.innerHTML = count + ' / 50 Words';
    if(count > 50) {
        bioCnt.disabled = true;
    }
    if (bioCnt.value.length == 0) {
        counter.innerHTML = '0 / 50 Words';
    }
};

// radio
var genderValue = "";
let radioOne = document.querySelector('#rad1');
let radioTwo = document.querySelector('#rad2');
let radioValueM = () => {
    genderValue = "male";
    // console.log(genderValue);
}
let radioValueF = () => {
    genderValue = "female";
    // console.log(genderValue);
}
var phoneNo = document.querySelector('#phoneNo');
var phoneNoVal = "";
phoneNo.oninput = () => {
    phoneNoVal = phoneNo.value;
    // console.log(phoneNoVal);
}
let biodataImg = document.querySelector('#imageFile');

function validateInput() {
    if(bioCntInput.length < 5 && bioCntInput.length > 50 && genderValue.length < 1 && phoneNoVal.length < 10 && 
       phoneNoVal.length > 11 && trackVal.length < 1 && institutionCntVal.length < 1 && departmentCntVal.length < 1 && 
      biodataImg.value.length < 1) {
        document.querySelector('#finish').disabled = true;
    } else {
        document.querySelector('#finish').disabled = false;
    }
};

// track
let trackVal = "";
let ValidateTrack = () => {  
    var checkboxes = document.getElementsByName("track");  
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems > 1)  
    {  
      showLoginAlert("You can't select more than one track!", "error");  
      return false;  
    }  
} 
const popUp = document.querySelector(".response-bar");
const Submit = document.querySelector(".submit_popup__btn");

const showLoginAlert = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".participant-info");
  container.insertBefore(div, popUp);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 12000);
};

// if (document.querySelector("#customCheckbox").checked){
//   trackVal = document.querySelector("#customCheckbox").value
// }else if(document.querySelector("#customCheckbox2").checked){
//   trackVal = document.querySelector("#customCheckbox2").value
// }else if(document.querySelector("#customCheckbox3").checked){
//   trackVal = document.querySelector("#customCheckbox3").value
// }else if(document.querySelector("#customCheckbox4").checked){
//   trackVal = document.querySelector("#customCheckbox4").value
// }


var institution;
// institution
let institutionCnt = document.querySelector('#institution');
var institutionCntVal = "";
institutionCnt.oninput = () => {
    institutionCntVal = institutionCnt.value;
    institution = institutionCntVal;
    // console.log(institutionCntVal);
    validateInput();
}
// departments
let departmentCnt = document.querySelector('#department');
var departmentCntVal = "";
departmentCnt.oninput = () => {
    departmentCntVal = departmentCnt.value;
    // console.log(departmentCntVal);
    validateInput();
}


// if (localStorage.getItem('bio') !== undefined ) {
//   const formEvent = Submit.addEventListener("click", async (event) => {
//     event.preventDefault();
//     setTimeout(function () {
//       Submit.disabled = true;
//     }, 2000);
//     const linky = document.querySelector("#link").value;
//     const link = [ linky ];
//     const gender = genderValue;
//     const number = phoneNoVal;
//     const institution = institutionCntVal;
//     const department = departmentCntVal;
//     const Info = await { picture, bio, track, link, gender, number, institution, department };
//     dashboardInfo(); 
//   });
// };