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

// console.log("Lifting weights repetiton 1");
// console.log("Lifting weights repetiton 2");
// console.log("Lifting weights repetiton 3");
// console.log("Lifting weights repetiton 4");
// console.log("Lifting weights repetiton 5");
// console.log("Lifting weights repetiton 6");
// console.log("Lifting weights repetiton 7");
// console.log("Lifting weights repetiton 8");
// console.log("Lifting weights repetiton 9");
// console.log("Lifting weights repetiton 10");

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i}`);

// }
// const ademArray = [
//   'Adem',
//   'Ugljanin',
//   2037 - 1991,
//   'coder',
//   ['Tarik','Amir','Imran'],
//   true
// ]
// const types = [];
// for(let i=0;i<ademArray.length; i++){
//   types[i]= typeof ademArray[i];
//   console.log(ademArray[i]);
// }
// console.log(types);

// const years = [1991,2007,1969,2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037-years[i]);
// }
// console.log(ages);

// for (let i = 0; i < years.length; i++) {
//   if(typeof years[i]==='number') break;
//   console.log(years[i], typeof years[i]);

// }

// const adem = [
//   "Adem",
//   "Ugljanin",
//   2037 - 1991,
//   "coder",
//   ["Tarik", "Amir", "Imran"],
//   true,
// ];

// for (let i = adem.length - 1; i >= 0; i--) {
//   console.log(i,adem[i]);
// }

// for (let i = 1; i < 6; i++) {
//   console.log(`---------------Starting excercise ${i}`);
//   for (let j = 1; j < 6; j++) {
//     console.log(`Excercise ${i}: Lifting weight repetition ${j}`);

//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep<=10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6){
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if(dice === 6)
//   console.log(`Congrats you rolled ${dice}`);
// }

/**********************CODING CHALLENGE**********************/

// const bills = [22,295,176,440,37,105,10,1100,86,52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
//     return bill >= 50 && bill <=300 ? bill *0.15 : bill*0.2;
//   };
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(bills[i] + tips[i]);
//   }
//   console.log(tips, totals);

//   const calcAvg = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum/arr.length;
//   }
//   console.log(calcAvg(totals));


// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   console.log(min, max);
//   return max - -min;
// };

// console.log(calcTempAmplitude(temperatures));

// //Problem 2.

// const temperatures2 = [2,7,5,1,-2,6,4,16,20,-10]
// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   console.log(min, max);
//   return max - -min;
// };

// console.log(calcTempAmplitudeNew(temperatures,temperatures2));

// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         value: Number(prompt('Degrees celsius:')),
//     };

//     const kelvin = measurement.value + 273;
//     return kelvin;
// }
// console.log(measureKelvin());

/***************************CODING CHALLENGE*******************************/

// const test1 = [17, 21, 23];
// const test2 = [12, 5, -5, 0, 4];
// const printForecast = (arr) => {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}C in ${i + 1} days ... `;
//   }
//   console.log("... " + str);
// };
// console.log(printForecast(test1));
