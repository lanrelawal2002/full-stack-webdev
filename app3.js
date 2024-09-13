let paragraphElement = document.querySelector("p");

function changeParagraphText(event) {
  // paragraphElement.textContent = "Hey! You just clicked here.";
  event.target.textContent = "I am using the event.target option";
  console.log("Event type:", event.type);
  console.log("Event target", event.target);
  console.log(event);
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  // let enteredText = inputElement.value;
  // let enteredText = event.target.value;
  let enteredText = event.data;
  // console.log("EVENT TYPE:", event.type);
  // console.log("EVENT TARGET:", event.target);
  console.log(enteredText);
  // console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
