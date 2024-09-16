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

let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

// console.dir(productNameInputElement);

// block below **********************

let maxAllowedChars = productNameInputElement.maxLength;

// function updateRemainingCharacters(event) {
//   let inputedText = event.target.value;
//   let inputedTextLength = inputedText.length;

//   // console.log(typeof event.type);
//   // console.dir(event);
//   // console.log(event);

//   // remainingCharsElement.textContent = inputedTextLength;

//   // let remainingCharacters = event.target.maxLength - inputedTextLength;

//   let remainingCharacters = maxAllowedChars - inputedTextLength;

//   remainingCharsElement.textContent = remainingCharacters;
// }

productNameInputElement.addEventListener(
  "input",
  function updateRemainingCharacters(event) {
    let inputedText = event.target.value;
    let inputedTextLength = inputedText.length;

    // console.log(typeof event.type);
    console.dir(event.target);
    console.log(event.target);

    // remainingCharsElement.textContent = inputedTextLength;

    // let remainingCharacters = event.target.maxLength - inputedTextLength;

    let remainingCharacters = maxAllowedChars - inputedTextLength;

    remainingCharsElement.textContent = remainingCharacters;
  }
);
