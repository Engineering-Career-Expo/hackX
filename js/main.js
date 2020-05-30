//navbar
var myham = document.getElementsByClassName("navbar_myham");
var second = document.getElementsByClassName("navbar_second");
var reg1 = document.getElementsByClassName("navbar_reg1");

var a = 0;
function myfunc1() {
  reg1[0].style.opacity = "0";

  second[0].style.height = "325px";
  second[0].style.width = "auto";
  myham[0].innerHTML = "X";
  a++;

  if (a % 2 === 0) {
    second[0].style.height = "0px";
    second[0].style.overflow = "hidden";
    myham[0].innerHTML = "&#9776";
    reg1[0].style.opacity = "1";
  }
}
myham[0].addEventListener("click", myfunc1);

//contact
const contactForm = document.querySelector(".contact-form");

const formEvent = contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Submitted");
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const contactInfo = await { name, email, message };
  createContact(contactInfo);
});
const createContact = async (contactInfo) => {
  axios
    .post("http://localhost:8080/contact", contactInfo)
    .then((response) => {
      response.data;
      console.log(`POST: conatact saved`, response.data);
    })

    .catch((error) => console.error(error));
};
