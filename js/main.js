$(function () {
  var includes = $("[data-include]");
  jQuery.each(includes, function () {
    var file = "../components/" + $(this).data("include") + ".html";
    $(this).load(file);
  });
});

//nav

var myham = document.getElementsByClassName("myham");
var second = document.getElementsByClassName("nav-second");
var reg1 = document.getElementsByClassName("nav-reg1");

myham[0].addEventListener("click", myfunc1);
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
