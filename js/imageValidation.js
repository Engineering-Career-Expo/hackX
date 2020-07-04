var imageUrl;

// CALLING THE IMAGE UPLOAD
// UPLOAD 1
document.querySelector("#imageUpload").addEventListener('click', function() {
    document.querySelector("#imageFile").click();
});
// UPLOAD 2
document.querySelector("#imageUpload1").addEventListener('click', function() {
    document.querySelector("#imageFile1").click();
});
// UPLOAD 3
document.querySelector("#imageUpload2").addEventListener('click', function() {
    document.querySelector("#imageFile2").click();
});
// UPLOAD 4
document.querySelector("#imageUpload3").addEventListener('click', function() {
    document.querySelector("#imageFile3").click();
});
// UPLOAD 5
document.querySelector("#imageUpload4").addEventListener('click', function() {
    document.querySelector("#imageFile4").click();
});

// IMAGE UPLOAD SEQUENCE
// IMAGE 1
document.querySelector("#imageFile").addEventListener('change', function() {
    // USER'S SELECTED IMAGE
    var file = this.files[0];
    // VALID IMAGE'S TYPE
    var supportedImage = [ 'image/jpeg', 'image/png' ];
    // VALIDATE IMAGE TYPE
    if(supportedImage.indexOf(file.type) == -1) {
        alert('Error : Incorrect file type');
        return;
    }
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
});
// IMAGE 2
document.querySelector("#imageFile1").addEventListener('change', function() {
    // USER'S SELECTED IMAGE
    var file = this.files[0];
    // VALID IMAGE'S TYPE
    var supportedImage = [ 'image/jpeg', 'image/png' ];
    // VALIDATE IMAGE TYPE
    if(supportedImage.indexOf(file.type) == -1) {
        alert('Error : Incorrect file type');
        return;
    }
    // VALIDATE IMAGE SIZE
    if(file.size > 2*1024*1024) {
        alert('Error : Exceeded size 2MB');
        return;
    }
    // WHEN IMAGE VALIDATION IS SUCCESSFUL
    // HIDE THE UPLOAD IMAGE 
    document.querySelector("#imageUpload1").style.display = 'none';
    // SET THE FILE NAME
    document.querySelector("#imageName1").innerText = file.name;
    document.querySelector("#imageName1").style.display = 'block';
    // GET THE LOCAL URL
    imageUrl = URL.createObjectURL(file);
    // SET THE LOCAL URL AS THE IMAGE SRC
    document.querySelector("#imagePreview1").setAttribute('src', imageUrl);
    document.querySelector("#imagePreview1").style.display = 'block';
    // sHOW DELETE BUTTON
    document.querySelector("#deleteImage1").style.display = 'block';
});
// IMAGE 3
document.querySelector("#imageFile2").addEventListener('change', function() {
    // USER'S SELECTED IMAGE
    var file = this.files[0];
    // VALID IMAGE'S TYPE
    var supportedImage = [ 'image/jpeg', 'image/png' ];
    // VALIDATE IMAGE TYPE
    if(supportedImage.indexOf(file.type) == -1) {
        alert('Error : Incorrect file type');
        return;
    }
    // VALIDATE IMAGE SIZE
    if(file.size > 2*1024*1024) {
        alert('Error : Exceeded size 2MB');
        return;
    }
    // WHEN IMAGE VALIDATION IS SUCCESSFUL
    // HIDE THE UPLOAD IMAGE 
    document.querySelector("#imageUpload2").style.display = 'none';
    // SET THE FILE NAME
    document.querySelector("#imageName2").innerText = file.name;
    document.querySelector("#imageName2").style.display = 'block';
    // GET THE LOCAL URL
    imageUrl = URL.createObjectURL(file);
    // SET THE LOCAL URL AS THE IMAGE SRC
    document.querySelector("#imagePreview2").setAttribute('src', imageUrl);
    document.querySelector("#imagePreview2").style.display = 'block';
    // sHOW DELETE BUTTON
    document.querySelector("#deleteImage2").style.display = 'block';
});
// IMAGE 4
document.querySelector("#imageFile3").addEventListener('change', function() {
    // USER'S SELECTED IMAGE
    var file = this.files[0];
    // VALID IMAGE'S TYPE
    var supportedImage = [ 'image/jpeg', 'image/png' ];
    // VALIDATE IMAGE TYPE
    if(supportedImage.indexOf(file.type) == -1) {
        alert('Error : Incorrect file type');
        return;
    }
    // VALIDATE IMAGE SIZE
    if(file.size > 2*1024*1024) {
        alert('Error : Exceeded size 2MB');
        return;
    }
    // WHEN IMAGE VALIDATION IS SUCCESSFUL
    // HIDE THE UPLOAD IMAGE 
    document.querySelector("#imageUpload3").style.display = 'none';
    // SET THE FILE NAME
    document.querySelector("#imageName3").innerText = file.name;
    document.querySelector("#imageName3").style.display = 'block';
    // GET THE LOCAL URL
    imageUrl = URL.createObjectURL(file);
    // SET THE LOCAL URL AS THE IMAGE SRC
    document.querySelector("#imagePreview3").setAttribute('src', imageUrl);
    document.querySelector("#imagePreview3").style.display = 'block';
    // sHOW DELETE BUTTON
    document.querySelector("#deleteImage3").style.display = 'block';
});
// IMAGE 5
document.querySelector("#imageFile4").addEventListener('change', function() {
    // USER'S SELECTED IMAGE
    var file = this.files[0];
    // VALID IMAGE'S TYPE
    var supportedImage = [ 'image/jpeg', 'image/png' ];
    // VALIDATE IMAGE TYPE
    if(supportedImage.indexOf(file.type) == -1) {
        alert('Error : Incorrect file type');
        return;
    }
    // VALIDATE IMAGE SIZE
    if(file.size > 2*1024*1024) {
        alert('Error : Exceeded size 2MB');
        return;
    }
    // WHEN IMAGE VALIDATION IS SUCCESSFUL
    // HIDE THE UPLOAD IMAGE 
    document.querySelector("#imageUpload4").style.display = 'none';
    // SET THE FILE NAME
    document.querySelector("#imageName4").innerText = file.name;
    document.querySelector("#imageName4").style.display = 'block';
    // GET THE LOCAL URL
    imageUrl = URL.createObjectURL(file);
    // SET THE LOCAL URL AS THE IMAGE SRC
    document.querySelector("#imagePreview4").setAttribute('src', imageUrl);
    document.querySelector("#imagePreview4").style.display = 'block';
    // sHOW DELETE BUTTON
    document.querySelector("#deleteImage4").style.display = 'block';
});


// DELETE IMAGE
//DELETE 1
document.querySelector("#deleteImage").addEventListener('click', function(e) {
    e.preventDefault();
    URL.revokeObjectURL(imageUrl);
    document.querySelector("#imageUpload").style.display = 'block';
    document.querySelector("#imageFile").value = '';
    document.querySelector("#imageName").style.display = 'none';
    document.querySelector("#imagePreview").style.display = 'none';
    document.querySelector("#deleteImage").style.display = 'none';
});
//DELETE 2
document.querySelector("#deleteImage1").addEventListener('click', function(e) {
    e.preventDefault();
    URL.revokeObjectURL(imageUrl);
    document.querySelector("#imageUpload1").style.display = 'block';
    document.querySelector("#imageFile1").value = '';
    document.querySelector("#imageName1").style.display = 'none';
    document.querySelector("#imagePreview1").style.display = 'none';
    document.querySelector("#deleteImage1").style.display = 'none';
});
//DELETE 3
document.querySelector("#deleteImage2").addEventListener('click', function(e) {
    e.preventDefault();
    URL.revokeObjectURL(imageUrl);
    document.querySelector("#imageUpload2").style.display = 'block';
    document.querySelector("#imageFile2").value = '';
    document.querySelector("#imageName2").style.display = 'none';
    document.querySelector("#imagePreview2").style.display = 'none';
    document.querySelector("#deleteImage2").style.display = 'none';
});
//DELETE 4
document.querySelector("#deleteImage3").addEventListener('click', function(e) {
    e.preventDefault();
    URL.revokeObjectURL(imageUrl);
    document.querySelector("#imageUpload3").style.display = 'block';
    document.querySelector("#imageFile3").value = '';
    document.querySelector("#imageName3").style.display = 'none';
    document.querySelector("#imagePreview3").style.display = 'none';
    document.querySelector("#deleteImage3").style.display = 'none';
});
//DELETE 5
document.querySelector("#deleteImage4").addEventListener('click', function(e) {
    e.preventDefault();
    URL.revokeObjectURL(imageUrl);
    document.querySelector("#imageUpload4").style.display = 'block';
    document.querySelector("#imageFile4").value = '';
    document.querySelector("#imageName4").style.display = 'none';
    document.querySelector("#imagePreview4").style.display = 'none';
    document.querySelector("#deleteImage4").style.display = 'none';
});