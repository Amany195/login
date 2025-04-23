// select var
var signbutn = document.querySelector(".signbutn");
var formm = document.querySelector(".formm");
var yourmail = document.querySelector(".yourmail");
var yourpassword = document.querySelector(".yourpassword");
var yes = document.querySelector(".yes");
var buttn = document.querySelector(".buttn");
var message1 = document.querySelector(".message1");

var mailRegex = /^[a-z]{3,}[0-9][0-9]@gmail\.(com)$/;
var passregex = /^[a-zA-z0-9]{5,15}$/;

if (localStorage.getItem("keyy") != null) {
  var list = JSON.parse(localStorage.getItem("keyy"));
} else {
  var list = [];
}
formm.addEventListener("submit", login);

function login(e) {
  e.preventDefault();
  if (validate(passregex, yourpassword) && validate(mailRegex, yourmail)) {
    for (var i = 0; i < list.length; i++) {
      if (
        list[i].mail === yourmail.value &&
        list[i].password === yourpassword.value
      ) {
        window.location.replace("../home.html");
      } else {
      
      }
    }
    yes.classList.remove("d-none");
    console.log("hi");
  } else {
    message1.classList.remove("d-none");
    console.log("no");
  }
}

function clear() {
  namm.value = "";
  yourmail.value = "";
  yourpassword.value = "";
}
function search() {
  for (var i = 0; i < list.length; i++) {
    if (
      list[i].mail === yourmail.value &&
      list[i].password === yourpassword.value
    ) {
      return true;
    }
  }
  return false;
}
function validate(regex, element) {
  if (regex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");

    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.remove("d-none");

    return false;
  }
}

yourmail.addEventListener("input", function () {
  validate(mailRegex, yourmail);
});
yourpassword.addEventListener("input", function () {
  validate(passregex, yourpassword);
});
signbutn.addEventListener("click", function () {
  window.location.replace("../sign.html");
});
