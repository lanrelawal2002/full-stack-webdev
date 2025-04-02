const fs = require("node:fs");

// function readFile() {
//   let fileData;

//   //   fs.readFile("./data.txt", function (error, fileData) {
//   //     if (error) {
//   //       console.log(error);
//   //     }
//   //     console.log(`File parsing done!!`);
//   //     console.log(fileData.toString());
//   //   });

//   fs.readFile("./data.txt")
//     .then(function (fileData) {
//       console.log(`File parsing done!`);
//       const fullInfo = fileData.toString();
//       console.log(fullInfo);
//       //   console.log(fileData.toString());
//       // return anotherAsyncOperation;
//       return fullInfo;
//     })
//     .then(function (fullInfo) {
//       console.log(`return once`);
//       console.log(fullInfo);
//     })
//     .then(function () {
//       fs.readFile("./data-backup.txt");
//       console.log(`moved on with execution notwithstanding`);
//       console.log(`completed async task`);
//     })
//     .then(function (secondFileData) {
//       console.log(secondFileData.toString());
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   console.log(`Hi there.`);
//   console.log(`There is some space on the hard disk.`);
// }

// readFile();

function exploreFile() {
  fs.readFile("./data.txt", function (error, fileData) {
    console.log(`File Parsing Done!!!`);
    console.log(fileData.toString());
    console.log(`no return once`);
    fs.readFile("./data-backup.txt", function (error, secondFileData) {
      console.log(secondFileData.toString());
      console.log(`This code should come last`);
    });
    console.log(`moved on with execution nowtwithstanding`);
    console.log(`completed async task`);
  });

  console.log(`Hi there.`);
  console.log(`There is some space on the hard disk`);
}

exploreFile();
