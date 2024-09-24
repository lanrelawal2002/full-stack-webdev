// LAN's

// let inputElement = document.querySelector("input");
// let countingSpanElement = document.getElementById("remaining-chars");

// function processOutput(event) {
//   let inputedText = event.target.value;
//   let textCount = inputedText.length;
//   // console.log(textCount);

//   countingSpanElement.textContent = textCount;
// }

// inputElement.addEventListener("input", processOutput);

// MAX's

const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

// console.dir(productNameInputElement);

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const inputedText = event.target.value;
  const inputedTextLength = inputedText.length;

  // remainingCharsElement.textContent = inputedTextLength;

  // let remainingCharacters = event.target.maxLength - inputedTextLength;

  const remainingCharacters = maxAllowedChars - inputedTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
