const username = window.localStorage.getItem('partName');
const headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
  'withCredentials': true, 
}
const dataField = () => {
  let panes = `
    <div class="user-details-flex">
      <div class="submission-img-container"></div>
      <div class="submission-details-container">
        <p class="application-no">Application #22</p>
        <p class="user-fullname">${fullname}</p>
        <p class="mobile-date-submitted">${time}</p>
        <div class="my-details">
          <p class="details-text">
            Bio: ${bio}
            <br>
            Gender: ${gender}
            <br>
            track: ${track}
            <br>
            Link to past projects: ${link}
            <br>
            Institution: ${institution}
            </p>
          </div>
        </div>
      </div>
    `
}
axios.get("https://hackxbackend.herokuapp.com/getuser?username=" + username, {headers: headers})
.then((response) => {
  let docu = response.data;
	console.log(docu);
  console.log(docu.dashboard[0]);
  console.log(username);
})
.catch((err) => {console.error(err.message)});