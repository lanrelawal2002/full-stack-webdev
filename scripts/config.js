function resetConfigField() {
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
}

function openPlayerConfig(event) {
  editedPlayer = event.target.dataset.playerid;
  storedUser = +event.target.dataset.playerposition;
  // if (event.target.id === "edit-player-1-btn") {
  //   editedPlayer = "1";
  // } else if (event.target.id === "edit-player-2-btn") {
  //   editedPlayer = "2";
  // }
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  firstInputElement.value = "";
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

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );

  // updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  // if (editedPlayer === "1") {
  //   updatedPlayerDataElement.children[1].style.color = "rgb(115, 195, 76)";
  // } else if (editedPlayer === "2") {
  //   updatedPlayerDataElement.children[1].style.color = "rgb(201, 12, 101)";
  // }

  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  updatedPlayerDataElement.children[1].style.color = "rgb(115, 195, 76)";

  players[storedUser].name = enteredPlayerName;

  closePlayerConfig();
}
