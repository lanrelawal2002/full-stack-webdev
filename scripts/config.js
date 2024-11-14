function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
}

function savePlayerConfig(event) {
  event.preventDefault();
  //   console.dir(event);
  const playerNameConfigFormData = new FormData(event.target);
  //   const playerNameConfigForm = new FormData(formElement);
  //   console.log(typeof playerNameConfigForm);

  const enteredPlayerName = playerNameConfigFormData.get("playername");
  console.log(enteredPlayerName); // same as console.dir in this case
  //   console.log(typeof enteredPlayerName);

  const enteredPlayerBio = playerNameConfigFormData.get("playerbio");
  console.log(enteredPlayerBio);
  //   console.log(typeof enteredPlayerBio);
}
