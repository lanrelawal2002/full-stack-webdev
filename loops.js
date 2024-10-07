// ********for loop

// for (let i = 1; i < 10; i += 3) {
//   console.log(i);
// }

// *********for-of loop

const clientele = ["Paris", "London", 18, "Brussels"];

for (const client of clientele) {
  // console.log("welcome to:", client);
  // console.log(client);
  if (client === 18) {
    console.log(typeof client);
    console.log(client);
  }
}

// console.log(clientele.length);

// ********regular for loop with arrays

// for (let i = 0; i < clientele.length; i++) {
//   console.log("The city of:", clientele[i]);
//   console.log(i);
// }

// *********for-in loop

// const loggedInUser = {
//   name: "Lanre",
//   age: 33,
//   isAdmin: true,
// };

// console.log(loggedInUser["isAdmin"]);
// console.log(loggedInUser.isAdmin);

// for (const key in loggedInUser) {
//   if (loggedInUser[key] === 33) {
//     console.log(loggedInUser[key]);
//     console.log(key);
//     console.log(typeof loggedInUser);
//     console.log(typeof key);
//   }
// }

// ************while loop

// let isComplete = false;

// while (!isComplete) {
//   isComplete = confirm("Is the survey complete?");
// }

// console.log("The survey is complete...");

// example 2 while loop

// let quarters = 4;

// while (quarters > 1) {
//   console.log("factory machine still running!");
//   quarters -= 1;
// }

// console.log("FACTORY MACHINE STOPPED..");

// window.confirm("Are you ready?");
