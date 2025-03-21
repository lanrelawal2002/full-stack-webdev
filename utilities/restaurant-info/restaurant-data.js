const path = require("node:path");
const fs = require("node:fs");

const filePath = path.join(
  __dirname,
  "..",
  "..",
  "databases",
  "restaurants.json"
);

function getStoredRestaurants() {
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}

function writeToJsonFile(availableRestaurants) {
  fs.writeFileSync(filePath, JSON.stringify(availableRestaurants));
}

module.exports = {
  getStoredRestaurants: getStoredRestaurants,
  writeToJsonFile: writeToJsonFile,
};
