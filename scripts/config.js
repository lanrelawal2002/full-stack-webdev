function resetConfigField() {
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
}

function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  //   console.dir(event);
  const playerNameConfigFormData = new FormData(event.target);
  //   const playerNameConfigForm = new FormData(formElement);
  //   console.log(typeof playerNameConfigForm);
  //   console.log(playerNameConfigFormData);

  const enteredPlayerName = playerNameConfigFormData
    .get("playername")
    .trim()
    .toUpperCase();
  // console.log(enteredPlayerName); same as console.dir in this case
  //   console.log(typeof enteredPlayerName);

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent =
      'Please enter a valid name. Press "reset" button if needed to clear the input field.';
    return;
  }
}
