let ageSum = 22;
let firstQuestion = "How old are you now?";

let secondPhrase = "There's no way home";
// alert(secondPhrase);

let hobbies = ["Singing", "Writing", "Drawing", "Eating"];
let scores = [22, 19, 18, 105, 973];

let mixedData = [
  "Mapping",
  12,
  "Actors",
  19,
  "Journalist",
  28,
  "Educators",
  57,
];

let mixedForm = [40, "Tables", 16, "Chairs", 72, firstQuestion];

// alert(mixedData);
// alert(mixedForm);

// alert(hobbies[1]);

let newJob = {
  role: "JavaScript Developer",
  level: "Senior Developer",
  location: "Remote",
  salary: 150000,
  duration: "Two Years",
};

let teamAnalysis = { goals: 50, style: "Offensive", nationality: "mixed" };

// alert(teamAnalysis);

// alert(mixedForm[5]);
// alert(teamAnalysis.goals);

let age = 49;
let secondAge = 0;

let studentAge;

function calcNewAge(userAge1, userAge2) {
  return userAge1 + userAge2 - 18;
}

studentAge = calcNewAge(age, secondAge);
console.log(studentAge);

age = 44;
// secondAge = 0;   //secondAge is already known to be zero from line 43 above.

studentAge = calcNewAge(age, secondAge);
console.log(studentAge);

// let candidate = {
//   age: 55,
//   firstName: "Frederick",
//   title: "Director",
//   badges: ["black", "green", "blue", "green"],
//   message() {
//     console.log("Who knows them?");
//   },
// };

// candidate.message();

let winner = {
  years: 15,
  lastName: "Cupper",
  role: "Manager",
  banner(firstDigit, secondDigit) {
    let sum = firstDigit * secondDigit;
    return sum;
  },
};

let total = winner.banner(4, 4);
console.log(total);
