function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Enter Both Player Names.");
    return;
  }

  gameAreaElement.style.display = "block";
}
