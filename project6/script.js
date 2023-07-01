const outputE1 = document.querySelector(".text");
const valE1 = document.querySelectorAll(".val");
const clearE1 = document.querySelector(".AC");
const deleteE1 = document.querySelector(".DEL");
const equalE1 = document.querySelector(".equal");

valE1.forEach((val) => {
  val.addEventListener("click", () => {
    outputE1.value += val.value;
  });
});

clearE1.addEventListener("click", () => {
  outputE1.value = "";
});

deleteE1.addEventListener("click", () => {
  outputE1.value = outputE1.value.slice(0, -1);
});

equalE1.addEventListener("click", () => {
  try {
    outputE1.value = eval(outputE1.value);
  } catch (e) {
    alert(e);
  }
});
