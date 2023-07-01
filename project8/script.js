<<<<<<< HEAD
const textE1 = document.getElementById("text");
const speedE1 = document.getElementById("speed");

const text = "Welcome to the world";
let idx = 1;
let speed = 300 / speedE1.value;

writeText();

function writeText() {
  textE1.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedE1.addEventListener("input", (e) => (speed = 300 / e.target.value));
=======
const textE1 = document.getElementById("text");
const speedE1 = document.getElementById("speed");

const text = "Welcome to the world";
let idx = 1;
let speed = 300 / speedE1.value;

writeText();

function writeText() {
  textE1.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedE1.addEventListener("input", (e) => (speed = 300 / e.target.value));
>>>>>>> d6c20fc8e3ba8b784206dba019cf9f0bcb4a3977
