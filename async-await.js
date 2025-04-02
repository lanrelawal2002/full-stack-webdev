const fs = require("fs/promises");

async function readFile() {
  let fileData;

  fileData = await fs.readFile("data.txt");

  console.log("File parsing done!");
  console.log(fileData.toString());

  console.log("Hi there!");
}

readFile();
