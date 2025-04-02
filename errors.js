const fs = require("node:fs");

// function readFile() {
//   const fileData = fs.readFileSync("data.json");
//   console.log("Now precess the payment");
// }

// readFile();

// try, catch

// const fs = require("node:fs");

// function readFile() {
//   try {
//     // const fileData = fs.readFileSync("data.json");
//     console.log("Next stage activated.");
//   } catch (error) {
//     console.log("Something went wrong");
//     console.log(error.message);
//   }
// }

// variable scoping and shadowing

function readFile() {
  let fileData;

  try {
    fileData = fs.readFileSync("data.json");
  } catch {
    console.log("Something went wrong");
  }
  console.log(fileData);
  console.log("Hi there.");
}

readFile();
