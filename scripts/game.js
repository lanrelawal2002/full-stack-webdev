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

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    // checking for rows
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }

    // Checking for columns
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // Checking diagonally; top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // Checking diagonally; bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1; // For a draw
  }

  return 0; // If no winner is found yet
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

  const winnerId = checkForGameOver();
  console.log(winnerId);
  currentRound++;

  switchPlayer();
  activePlayerNameElement.textContent = players[activePlayer].name;
}
