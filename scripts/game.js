function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Enter Both Player Names.");
    return;
  }

  gameAreaElement.style.display = "block";
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else if (activePlayer === 1) {
    activePlayer = 0;
  }
}

function selectGameField(event) {
  //   if (event.target.tagName !== "LI") {
  //     return;
  //   }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  switchPlayer();
  activePlayerNameElement.textContent = players[activePlayer].name;
}
