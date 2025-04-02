// const { v4 } = require("uuid");

// const codeId = v4();
// console.log(codeId);

// ************************************************

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I am a ${this.title}, I work in ${this["location"]} and earn ${this.salary} pounds annually.`
    );
  }
}

const thirdEmployee = new Job("devOps expert", "nigeria", 12500);
thirdEmployee.hobby = "drawing";

// console.log(thirdEmployee);
// console.log(thirdEmployee.location);
// console.log(thirdEmployee["title"]);

const fourthEmployee = new Job("pentester", "berlin", 18000);

// const allEmployees = [];

// allEmployees.push(thirdEmployee);
// allEmployees.push(fourthEmployee);

// console.log(allEmployees);

// console.log(new Date().toISOString());

// thirdEmployee.describe();
// fourthEmployee.describe();
// console.log(thirdEmployee);

// **************************destructuring objecs and arrays************************

const athletes = {
  bolt: "athlete",
  ronaldo: "footballer",
  lebron: "basketballer",
  region() {
    console.log(
      `${athletes.bolt} from carribbean ${athletes.lebron} from north america ${athletes.ronaldo} from europe`
    );
  },
};

// athletes.region();
// const { region: zone } = athletes;
// zone();

// const { ronaldo: cristiano, lebron: james } = athletes;

// console.log(ronaldo);

// const professionals = athletes;
// professionals.region();

// ******************************************************

// const myList = [2023, "time", "energy", "ambition", "money", 1991];

// let [codeYear, clock, power, drive, resource, birth] = myList;
// console.log(birth);
// console.log(`use your ${resource} wisely!!`);
