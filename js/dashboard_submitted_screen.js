let scrName = document.querySelectorAll('#scrName');
let scrTag = document.querySelector('.txtCnt');
let scrProb = document.querySelector('.scrProb')
let scrChallenge = document.querySelector('#scrChallenge');
let techUsedOne = document.querySelector('#techUsedOne');
let techUsedTwo = document.querySelector('#techUsedTwo');
let techUsedThree = document.querySelector('#techUsedThree');
let scrLink = document.querySelector('.link');

const headers = {
    'Content-type': 'application/json',
    'Authorization': 'Bearer' + ' ' + localStorage.getItem('pass'),
    'withCredentials': true
}
let username = localStorage.getItem('username');
axios.get('https://hackxbackend.herokuapp.com/getuser?username=' + username, { headers: headers })
    .then((response) => {
        let res = response.data;
        console.log(res);
        var gottenNumbers = localStorage.getItem('numbers')
        var i = gottenNumbers[gottenNumbers.length - 1];
        for (let j = 0; j < scrName.length; j++) {
            scrName[j].textContent = res.submission[i].name;
        }
        scrTag.textContent = res.submission[i].tagline;
        scrProb.textContent = res.submission[i].problem;
        scrChallenge.textContent = res.submission[i].challenges;
        let techUsed = res.submission[i].technologies;
        let techArray = techUsed.split(',');
        techUsedOne.textContent = techArray[0];
        techUsedTwo.textContent = techArray[1];
        techUsedThree.textContent = techArray[2];
        scrLink.textContent = res.submission[i].link;
    })
    .catch((error) => { console.error(error) })

const id = localStorage.getItem('id')
axios.get('https://hackxbackend.herokuapp.com/submissionImages?id=5ef9f57eece52f1a44d8a3co', { headers: headers })
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => { console.error(error) })