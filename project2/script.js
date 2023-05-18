const btnE1 = document.querySelector(".btn");
const bodyE1 = document.querySelector("body");
let count;
var colors=["green", "red", "yellow", "white", "orange","violet"];

// console.log(colors)

bodyE1.style.background = "black";
btnE1.addEventListener("click", addColor
)
function addColor() {
  console.log("clicked");
  var color = parseInt(Math.random()*colors.length);
  bodyE1.style.background = colors[color];
  count++;
}

