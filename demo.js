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

  if (remainingCharacters === 0) {
    productNameInputElement.classList.add("error");
    remainingCharsElement.classList.add("error");
  } else if (remainingCharacters <= 10) {
    productNameInputElement.classList.add("warning");
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.remove("error");
    remainingCharsElement.classList.remove("error");
  } else {
    productNameInputElement.classList.remove("warning");
    remainingCharsElement.classList.remove("warning");
  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
