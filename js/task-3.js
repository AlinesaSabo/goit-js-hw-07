const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", handleInput);

function handleInput(event) {
  const nameInputValue = event.currentTarget.value.trim();
  nameOutput.textContent = nameInputValue === "" ? "Anonymous" : nameInputValue;
}
