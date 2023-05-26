const inputE1 = document.querySelector(".inputContainer input");
const copyE1 = document.querySelector(".inputContainer i");
const rangeE1 = document.querySelector(".rangeContainer input");
const spanE1 = document.querySelector(".rangeContainer span");
const generateBtnE1 = document.querySelector(".generateBtn");

var chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var password = "";

rangeE1.addEventListener("input", () => {
  spanE1.innerHTML = rangeE1.value;
  generatePassword();
});

function generatePassword() {
  value = rangeE1.value;
  var password = "";
  for (var i = 0; i < value; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);

    password = password + chars[randomNumber];
  }
  inputE1.value = password;
  copyE1.classList.replace("fa-clipboard-check", "fa-clipboard");
}

generateBtnE1.addEventListener("click", () => {
  generatePassword();
});

copyE1.addEventListener("click", () => {
  navigator.clipboard.writeText(inputE1.value);
  copyE1.classList.replace("fa-clipboard", "fa-clipboard-check");
  setTimeout(() => {
    copyE1.classList.replace("fa-clipboard-check", "fa-clipboard");
  }, 1500);
});

generatePassword();
