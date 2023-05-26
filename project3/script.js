const inputE1 = document.querySelector("input");
const searchE1 = document.querySelector(".inputContainer");
const imageBoxE1 = document.querySelectorAll(".imageBox");

function handleSearch(event) {
  if (event.key === "Enter" || event === "search") {
    const inputValue = inputE1.value;
    const value = inputValue.toLowerCase();

    imageBoxE1.forEach((image) => {
      if (value === image.dataset.name) {
        image.getElementsByClassName.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }
}

searchE1.addEventListener("click", () => {
  handleSearch("search");
});

inputE1.addEventListener("keyup", () => {
  if (inputE1.value != "") return;

  imageBoxE1.forEach((image) => {
    image.style.display = "block";
  });
});

inputE1.addEventListener("keyup", handleSearch);
