// chatGPT
const rollDiceButtonElement = document.querySelector(
  "section#statistics button"
);

const userNumberInputElement = document.getElementById("user-target-number");
const informationContainer = document.getElementById("dice-rolls");
const totalAttempts = document.getElementById("output-total-rolls");
const expectedNumber = document.getElementById("output-target-number");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function clearPreviousRolls() {
  informationContainer.innerHTML = ""; // Clear previous output
}

function validateInput(input) {
  const number = parseInt(input);
  return !isNaN(number) && number >= 1 && number <= 6;
}

function checkAndComputeRolledNumbers() {
  const selectedNumber = parseInt(userNumberInputElement.value);

  if (!validateInput(selectedNumber)) {
    alert("Please enter a valid number between 1 and 6.");
    return;
  }

  clearPreviousRolls();

  let throwCounts = 0;
  let matchingNumberAchieved = false;

  while (!matchingNumberAchieved) {
    throwCounts++;
    const randomPlayerNumber = rollDice();

    const individualOutputElement = document.createElement("li");
    individualOutputElement.textContent = `Roll ${throwCounts}: ${randomPlayerNumber}`;
    informationContainer.append(individualOutputElement);

    matchingNumberAchieved = selectedNumber === randomPlayerNumber;
  }

  totalAttempts.textContent = throwCounts;
  expectedNumber.textContent = selectedNumber;
}

rollDiceButtonElement.addEventListener("click", checkAndComputeRolledNumbers);
