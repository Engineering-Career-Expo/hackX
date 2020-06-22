// THE INPUT ID
var projectName = document.getElementById('projectName');
var projectTagline = document.getElementById('projectTagline');
var projectUSe = document.getElementById('projectUSe');
var projectChallenge = document.getElementById('projectChallenge');
var projectTechnology = document.getElementById('projectTechnology');
var projectLink = document.getElementById('projectLink');
var projectVideoLink = document.getElementById('projectVideoLink');
var projectImage = document.getElementById('projectImage');


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

/*
if projectName.length
var projectTagline = document.getElementById('projectTagline');
var projectUSe = document.getElementById('projectUSe');
var projectChallenge = document.getElementById('projectChallenge');
var projectTechnology = document.getElementById('projectTechnology');
var projectLink = document.getElementById('projectLink');
var projectVideoLink = document.getElementById('projectVideoLink');
var projectImage = document.getElementById('projectImage');*/


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


// THE INPUT FILE(IMAGE) BEHAVIOR



function readFile() {
    var reader = new FileReaader();
    var file = document.getElementById('demo').files[0];
    reader.onload = function(e) {
        document.getElementById('result').src = e.target.result;
    };
    reader.readAsDataURL(file);
}



function FileDetails() { 
    // GET THE FILE INPUT.
    var fi = document.getElementById('file'); 
    // VALIDATE OR CHECK IF ANY FILE IS SELECTED. 
    if (fi.files.length > 0) { 
    // THE TOTAL FILE COUNT.
    document.getElementById('fp').innerHTML = 'Total Files: <b>' + fi.files.length + '</b></br >';
     // RUN A LOOP TO CHECK EACH SELECTED FILE.
      for (var i = 0; i <= fi.files.length - 1; i++) { var fname = fi.files.item(i).name; 
      // THE NAME OF THE FILE. 
      var fsize = fi.files.item(i).size; 
      // THE SIZE OF THE FILE.
       // SHOW THE EXTRACTED DETAILS ""OF THE FILE.
       document.getElementById('fp').innerHTML = document.getElementById('fp').innerHTML + '<br /> ' + fname + ' (<b>' + fsize + '</b> bytes)'; } } else { alert('Please select a file.') } }
       function readURL(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
    
                    reader.onload = function (e) {
                        $('#blah')
                            .attr('src', e.target.result);
                    };
    
                    reader.readAsDataURL(input.files[0]);
                }
            } 