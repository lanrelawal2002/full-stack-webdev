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

  const selectedField = event.target;

  const selectedRow = +selectedField.dataset.row;
  const selectedColumn = +selectedField.dataset.col;

  if (gameData[selectedRow - 1][selectedColumn - 1] > 0) {
    alert("Please Select an Empty Field");
    return;
  }

  gameData[selectedRow - 1][selectedColumn - 1] = activePlayer + 1;

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");
  switchPlayer();
  activePlayerNameElement.textContent = players[activePlayer].name;
}
