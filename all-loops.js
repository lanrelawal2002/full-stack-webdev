// JAVASCRIPT CALCULATOR

const calculateSumButtonElement = document.querySelector(
  "section#calculator button"
);

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber += i;
  }

  const outputResultElement = document.getElementById("calculated-sum");

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
  outputResultElement.style.fontStyle = "italic";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

// HIGHLIGHT LINKS

const highlightLinksButtonElement = document.querySelector(
  "section#highlight-links button"
);

function highLightLinks() {
  const anchorElements = document.querySelectorAll("section#highlight-links a");
  //   console.log(typeof anchorElements);
  //   console.log(anchorElements);

  for (const individualAnchor of anchorElements) {
    individualAnchor.classList.add("highlight");
    // console.log(typeof individualAnchor);
    // console.log(individualAnchor);
  }
}

highlightLinksButtonElement.addEventListener("click", highLightLinks);

// USER DATA

const dummyUserData = {
  firstname: "Lanre",
  lastname: "Lawal",
  age: 33,
};

const displayUserDataButtonElement = document.querySelector(
  "section#user-data button"
);

function displayUserData() {
  const userDataUnorderedList = document.getElementById("output-user-data");

  userDataUnorderedList.innerHTML = "";

  for (const key in dummyUserData) {
    const pairListItemElement = document.createElement("li");
    const listItemString = key.toUpperCase() + ": " + dummyUserData[key];
    pairListItemElement.textContent = listItemString;
    userDataUnorderedList.append(pairListItemElement);
  }

  console.dir(userDataUnorderedList);
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

// STATISTICS

const rollDiceButtonElement = document.querySelector(
  "section#statistics button"
);

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function checkAndComputeRolledNumbers() {
  const userNumberInputElement = document.getElementById("user-target-number");
  const selectedNumber = userNumberInputElement.value;

  const informationContainer = document.getElementById("dice-rolls");
  informationContainer.innerHTML = "";

  // console.log(typeof selectedNumber);

  let throwCounts = 0;

  let matchingNumberAchieved = false;

  while (!matchingNumberAchieved) {
    // if (selectedNumber === randomPlayerNumber) {
    //   matchingNumberAchieved = true;
    // }
    throwCounts++;
    const randomPlayerNumberElement = rollDice();
    const indvidualOutputElement = document.createElement("li");

    statisticsUpdateString =
      "Roll " + throwCounts + ": " + randomPlayerNumberElement;

    indvidualOutputElement.textContent = statisticsUpdateString;
    informationContainer.append(indvidualOutputElement);
    matchingNumberAchieved = selectedNumber == randomPlayerNumberElement;
  }

  // console.log("Selected number equals random number");
  const totalAttempts = document.getElementById("output-total-rolls");
  const expectedNumber = document.getElementById("output-target-number");

  totalAttempts.textContent = throwCounts;
  expectedNumber.textContent = selectedNumber;
}

rollDiceButtonElement.addEventListener("click", checkAndComputeRolledNumbers);
