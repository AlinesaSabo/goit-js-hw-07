const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector('input[type="number"]');
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    fragment.appendChild(box);
    size += 10;
  }
  boxesContainer.appendChild(fragment);
}

createButton.addEventListener("click", function () {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyButton.addEventListener("click", function () {
  boxesContainer.innerHTML = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
