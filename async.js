const fs = require("node:fs/promises");

function readFile() {
  let fileData;

  //   fs.readFile("./data.txt", function (error, fileData) {
  //     if (error) {
  //       console.log(error);
  //     }
  //     console.log(`File parsing done!!`);
  //     console.log(fileData.toString());
  //   });

  fs.readFile("./data.txt")
    .then(function (fileData) {
      console.log(`File parsing done!`);
      const fullInfo = fileData.toString();
      console.log(fullInfo);
      //   console.log(fileData.toString());
      // return anotherAsyncOperation;
      return fullInfo;
    })
    .then(function (fullInfo) {
      console.log(`return once`);
      console.log(fullInfo);
    })
    .then(async function () {
      console.log(`moved on with execution notwithstanding`);
      console.log(`completed async task`);

      try {
        const secondFileData = await fs.readFile("./data-backup.txt");
        return secondFileData;
      } catch (error) {
        console.log(error);
      }
    })
    .then(function (secondFileData) {
      console.log(`this should come last`);
      console.log(secondFileData.toString());
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log(`Hi there.`);
  console.log(`There is some space on the hard disk.`);
}

readFile();
