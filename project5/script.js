const listEl = document.querySelector(".list");
const liEls = listEl.querySelectorAll(".list li");
const iconsEls = document.querySelectorAll(".icon i");

let isDragging = false;

liEls.forEach((tab) => {
  tab.addEventListener("click", () => {
    listEl.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
  });
});

const handleIcons = (scrollVal) => {
  let maxScrollableWidth = listEl.scrollWidth - listEl.clientWidth;

  iconsEls[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";

  iconsEls[1].parentElement.style.display =
    maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
};

iconsEls.forEach((icon) => {
  icon.addEventListener("click", () => {
    let scrollWidth = (listEl.scrollLeft =
      listEl.scrollLeft + icon.id === "1" ? -250 : 250);
    handleIcons(scrollWidth);
  });
});

listEl.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  listEl.classList.add("dragging");
  listEl.scrollLeft = listEl.scrollLeft - e.movementX;
  handleIcons(listEl.scrollLeft);
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  listEl.classList.remove("dragging");
});

listEl.addEventListener("mousedown", () => (isDragging = true));
