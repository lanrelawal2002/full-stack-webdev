function resetGame() {
  activePlayer = 0;
  currentRound = 1;
  isGameOver = false;

  gameOverElement.firstElementChild.innerHTML =
    'You won <span id="winner-name">PLAYER NAME</span>!';

  gameOverElement.style.display = "none";

  let gameFieldElementCounter = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;

      const standAloneListItem = gameFieldElements[gameFieldElementCounter];
      standAloneListItem.textContent = "";
      standAloneListItem.classList.remove("disabled");
      gameFieldElementCounter++;
    }
  }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Enter Both Player Names.");
    return;
  }

  resetGame();

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
      return gameData[i][0]; // returns number 1 or 2 as winner
    }

    // Checking for columns
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i]; // returns number 1 or 2 as winner
    }
  }

  // Checking diagonally; top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0]; // returns number 1 or 2 as winner
  }

  // Checking diagonally; bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0]; // returns number 1 or 2 as winner
  }

  if (currentRound === 9) {
    return -1; // For a draw
  }

  return 0; // If no winner is found yet
}

function endGame(placeholderId) {
  gameOverElement.style.display = "block";

  if (placeholderId === 1 || placeholderId === 2) {
    gameOverElement.firstElementChild.firstElementChild.textContent =
      players[placeholderId - 1].name;
  } else if (placeholderId === -1) {
    gameOverElement.firstElementChild.textContent = "It's a draw";
  }
}

function selectGameField(event) {
  //   if (event.target.tagName !== "LI") {
  //     return;
  //   }

  if (isGameOver) {
    return;
  }

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

  if (winnerId !== 0) {
    endGame(winnerId);
    isGameOver = true;
    return;
  }

  currentRound++;

  switchPlayer();
  activePlayerNameElement.textContent = players[activePlayer].name;
}
