// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// function logger(n){
//     let i;
//     for (let i = 0; i < n; i++) {
//         console.log("My name is Adem"  );
//     }
// }
// logger(5);

// function fruitProcessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }
// console.log(calcAge1(1995));

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// console.log(calcAge1(1995), calcAge2(1996));

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991,'Adem'));
// console.log(yearsUntilRetirement(1980,'Bob'));

// function cutFruitPieces(fruit){
//     return fruit*4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2,3));

// const calcAverage = (n, m, q) => {
//   return (n + m + q) / 3;
// };
// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= avgKoalas * 2) {
//     return `Dolphins win! (${avgDolphins} : ${avgKoalas})`;
//   }
//   else if (avgKoalas >= avgDolphins * 2) {
//     return `Koalas win! (${avgKoalas} : ${avgDolphins})`;
//   }
//   else {
//       return `No team wins...`;
//   }
// };
// var Dolphins = calcAverage(44,23,71);
// var Koalas = calcAverage(65,54,49);

// var result = checkWinner(Dolphins,Koalas);
// console.log(result);

// var Dolphins = calcAverage(85,54,41);
// var Koalas = calcAverage(23,34,27);

// var result = checkWinner(Dolphins,Koalas);
// console.log(result);

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Adem";
// const adem = [firstName, "Ugljanin", "2037 - 1991", "Coder", friends];
// console.log(adem);
// console.log(adem.length);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];
// friends.push('Jay');
// console.log(friends);

// friends.unshift('John');
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes(23));4

// if (friends.includes('Steven')){
//     console.log("You have a friend called Steven");
// }

/************************Coding Challenge************************/

// const calcTip = (bill) => {
//   return bill >= 50 && bill <=300 ? bill *0.15 : bill*0.2;
// };

// const bills = [125, 555, 44];
// var tips = [];
// var total = [];
// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   total.push(bills[i] + tips[i]);
// }
// console.log(tips);
// console.log(total);

// const adem = {
//   firstName: "Adem",
//   lastName: "Ugljanin",
//   age: 2037 - 1991,
//   job: "coder",
//   friends: ["Amir", "Tarik", "Emin"],
// };

// console.log(adem);
// console.log(adem.lastName);
// console.log(adem["lastName"]);

// const nameKey = "Name";
// console.log(adem["first" + nameKey]);
// console.log(adem["last" + nameKey]);

// const intrestedIn = prompt(
//   "What do you want to know about Adem? Choose between firstName, lastName, age, job and friends"
// );

// if (adem[intrestedIn]) {
//   console.log(adem[intrestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job and friends"
//   );
// }

// adem.location = "Novi Pazar";
// adem["twitter"] = "@ademugljanin";
// console.log(adem);

// console.log(
//   `Adem has ${adem.friends.length} friends and his best friend is ${adem.friends[0]} `
// );

// const adem = {
//   firstName: "Adem",
//   lastName: "Ugljanin",
//   age: 1991,
//   job: "coder",
//   friends: ["Amir", "Tarik", "Emin"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     return 2037 - this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-years old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers's license`;
//   },
// };
// console.log(adem.calcAge());
// console.log(adem["calcAge"]());

// console.log(adem.getSummary());

/*******************CODING CHALLENGE*********************/

// const john = {
//   name: "John",
//   surname: "Bauman",
//   weight: "78",
//   height: "1.69",
//   calcBMI: function () {
//     return this.weight / this.height ** 2;
//   },
// };
// const mark = {
//   name: "Mark",
//   surname: "Hauman",
//   weight: "92",
//   height: "1.95",
//   calcBMI: function () {
//     return this.weight / this.height ** 2;
//   },
// };

// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(
//     `${john.name}'s BMI (${john.calcBMI()}) is higher than ${
//       mark.name
//     }'s (${mark.calcBMI()})!`
//   );
// } else {
//   console.log(
//     `${mark.name}'s BMI (${mark.calcBMI()}) is higher than ${
//       john.name
//     }'s (${john.calcBMI()})!`
//   );
// }
