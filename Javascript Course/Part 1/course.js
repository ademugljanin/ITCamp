// const massMark = 95;
// const massJohn = 85;
// const heightMark = 1.88;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark**2;
// const BMIJohn = massJohn / (heightJohn*heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);


// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1995;
// const year = 2037;
// const jonas = 'I am ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const age = 13;

// if (age >= 18) {
//     console.log("Sarah can start the driving license");
// }
// else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// }
// else {
//     century = 21;
// }

// console.log(century);

// const massMark = 95;
// const massJohn = 85;
// const heightMark = 1.88;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark**2;
// const BMIJohn = massJohn / (heightJohn*heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// }
// else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// // Tyoe conversion
// const inputYear = '1991';
// console.log(Number(inputYear) + 18);

// // type coercion
// console.log('i am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all");
// }
// else {
//     console.log('You should get a job');
// }

// let height;
// if (height) {
//     console.log('YAY! Height is defined');
// }
// else {
//     console.log('Height is UNDEFINED');
// }

// const age = 18;
// if (age === 18) {
//     console.log('You just became an adult !(strict)');
// }
// if(age == 18) {
//     console.log('You just became an adult !(loose)');
// }

// const favorite = Number(prompt("What's your favorite number?"));

// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log('Cool! 23 is an amazing number!');
// }
// else if (favorite === 7) {
//     console.log('7 is also a cool number');
// }
// else if (favorite === 9) {
//     console.log('9 is also a cool number');
// }
// else {
//     console.log('Number is not 23 or 7');
// }

// if (favorite !== 23) {
//     console.log('Why not 23?');
// }

// const hasDriversLicense = true // A
// const hasGoodVision = true // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// if(hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// }
// else {
//     console.log("Someone else should drive");
// }

// const isTired = false // C
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive!");
// }
// else {
//     console.log("Someone else should drive");
// }

// const scoreDolphins = (96 +100+89)/3
// const scoreKoalas = (88 + 91 + 110)/3
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// }
// else if (scoreKoalas > scoreDolphins){
//     console.log('Koalas win the trophy');
// }
// else if (scoreDolphins === scoreKoalas){
//     console.log('Both win the trophy');
// }

// BONUS 1
// const scoreDolphins = (97 +112+101)/3
// const scoreKoalas = (109 + 95 + 123)/3
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy');
// }
// else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log('Koalas win the trophy');
// }
// else if (scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100){
//     console.log('Both win the trophy');
// }
// else {
//     console.log('No one wins the trophy');
// }

// const day = 'monday';

// switch(day){
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log({'Prepare theory videos'});
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
//     }



