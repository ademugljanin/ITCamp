// // // let a = prompt("Unesite broj od 1 do 100")

// // // switch (a) {
// // //     case "":
// // //         console.log("Broj je low");
// // //         break;
// // //     case "":
// // //         console.log("Broj je medium");
// // //         break;
// // //     case "":
// // //         console.log("Broj je high");
// // //         break;

// // //     default:
// // //         console.log("Uneli ste pogresan broj, probajte opet...")
// // //     }

// for (let i = 1;i<=50;i++) {
//     if (i%3===0 && i%5===0){
//         console.log ("fizzbuzz")
//     }
//     else if (i%3===0){
//         console.log ("fizz");
//     }
//     else if (i%5===0){
//         console.log ("buzz");
//     }
//     else {
//     console.log (i);
//     }
// }
// fakt = 1;
// for (let j = 1; j <= i; j++) {
//     fakt = fakt * j;
// }
// console.log (fakt);

// function F(n) {
//       if(n == 0) {
//             return 0;
//             }
//  if(n == 1) {    return 1;

// }  else {    return F(n-1) + F(n-2);

// // }}
// var x,y,zvezda;
// for(x=1; x <=10; x++)
// {
//    for (y=1; y < x; y++)
//      {
//     zvezda=zvezda+("*");
//       }
//  console.log(zvezda);
//  zvezda='';
// }

// for (let i = 1; i <= 10; i++) {
//   var red = ""
//     for (let j = 1; j <= 10; j++) {
//       red += `${i * j}\t`;
//     }
//     console.log(red, "\n");
// }
// var pozitivne = 0;
// var negativne = 0;
// var pozBr = 0;
// var negBr = 0;

// for (let i = 1; i <= 10; i++){
//     t = Number(prompt("Unesti trenutnu temperaturu"));
//     console.log(t);
//     if (t>0) {
//       pozBr++;
//       pozitivne += t;
//     }
//     else {
//       negBr++;
//       negativne += t;
//     }
//     }
//     console.log(`Srednja pozitivna je ${pozitivne/pozBr}`);
//     console.log(`Srednja negativna je ${negativne/negBr}`);

// var rec = prompt("Unesite palindrom")
// console.log(rec)

// for (let i = 0; i < rec.length; i++) {
//     if (rec[i] !== rec[rec.length - 1 - i]) {
//       console.log("rec nije palindrome");
//     }
//     if (i === rec.length - 1){
//       console.log("rec je palindrom");
//     }
//   }

// lozinka = prompt("Unesite lozinku");
// loz = 'tajno';

// while(lozinka !== loz){
//     lozinka = prompt("uneli ste pogresnu lozinku probajte opet");
// }
// alert("Tacna lozinka");

// while(true){
//     broj = Number(prompt("unesite broj u rasponu od 10 do 20"))
//     if(broj === 0){
//     alert("Uneli ste nulu prekida se program")
//     break;
//     }
//     if(10 <= broj && broj <=20){
//         alert("Uneli ste validan broj")
//     }
//     else{
//        alert("Uneli ste pogresan broj probajte opet")
//     }
// }
// let rez = 0

// while (1) {
//     operacija = Number(prompt("Unesite broj operacije (1.sabiranje, 2.oduzimanje, 3.mnozenje, 4.deljenje): "))
//     if(operacija === 1){
//         let br1 = Number(prompt("Unesite prvi broj"))
//         let br2 = Number(prompt("Unesite drugi broj"))
//         rez = br1 + br2
//         console.log(rez);
//     }
//     if(operacija === 2){
//         let br1 = Number(prompt("Unesite prvi broj"))
//         let br2 = Number(prompt("Unesite drugi broj"))
//         rez = br1 - br2
//         console.log(rez);
//     }
//     if(operacija === 3){
//         let br1 = Number(prompt("Unesite prvi broj"))
//         let br2 = Number(prompt("Unesite drugi broj"))
//         rez = br1 * br2
//         console.log(rez);
//     }
//     if(operacija === 4){
//         let br1 = Number(prompt("Unesite prvi broj"))
//         let br2 = Number(prompt("Unesite drugi broj"))
//         rez = br1 / br2
//         console.log(rez);
//     }
//     if(operacija >= 5 || operacija <= 0){
//         alert("Izlaz iz programa");
//     }
//     break
// }

// let stanje = Number(prompt("Unesite broj ucenika:"));
// let niz= []
// for (i = 0 ;i <  stanje; i++) {
//     niz.push(Number(prompt("Unesite visinu ucenika:")))
// }
// console.log(Math.max(...niz));
// console.log(Math.min(...niz));

// let niz = [];
// niz.length = 10;
// let suma = 0;
// for (let i = 0; i < niz.length; i++) {
//     niz[i] = i + 1;
//     if(niz[i] % 2 == 0) {
//         suma += niz[i]
//     }
// }
// console.log(suma);

// let niz = [];
// niz.length = 10;
// for (let i = 0; i < niz.length; i++) {
//     niz[i] = i + 1;
//     niz[i] = niz[i] * 3;
//     console.log(niz[i]);
// }

// let niz1 = ["prvi", "drugi", "treci", "cetvrti", "peti"];
// let niz2 = [];
// let nizl = niz1.length;

// console.log(niz1);
// console.log(niz2);

// for (let i = 0; i < nizl; i++) {
//     let x = niz1.pop(i);
//     niz2.unshift(x);
// }
// console.log(niz1);
// console.log(niz2);

// var a = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [10,11,12]
// ];
// len = a.length;
// for (let i = 0; i < len; i++) {
//     console.log(`row ${i}`);
//     for (let j = 0; j < len-1; j++) {
//         console.log(a[i][j]);
//     }
// }

// var a = [
//     [1,2,1,24],
//     [8,11,9,4],
//     [7,8,7,27],
//     [7,4,28,12]
// ];
// for (let i = 0; i < a.length; i++) {
//     const row = a[i];
//     red = " ";
//     for (let j = 0; j < row.length; j++) {
//         if (i===j) {
//             a[i][j] = 0;
//         }
//         red += `${row[j]} \t`;

//     }
//     console.log(red);
// }
// console.log(".");
// console.log(".");
// var a = [
//     [1,2,1,24],
//     [8,11,9,4],
//     [7,8,7,27],
//     [7,4,28,12]
// ];
// for (let i = 0; i < a.length; i++) {
//     const row = a[i];
//     red = " ";
//     for (let j = 0; j < row.length; j++) {
//         if(i+j===row.length-1) {
//             a[i][j] = 0;
//         }
//         red += `${row[j]} \t`;

//     }
//         console.log(red);
// }

// let difference = (niz1,niz2) => {
//     for (let i = 0; i < niz1.length; i++) {
//             if(!niz2.includes(niz1[i])){
//                 niz3.push(niz1[i]);
//             }
//     }
//     for (let i = 0; i < niz2.length; i++) {
//         if(!niz1.includes(niz2[i])){
//             niz3.push(niz2[i]);
//         }
// }
//     return niz3;
// }

// var niz1 = [1,2,3];
// var niz2 = [100,2,1,10];
// let niz3 = [];
// console.log(difference(niz1,niz2).sort());

// var arr1 = [1,2,3];
// var arr2 = [2,30,1];
// res = [...new Set([...arr1, ...arr2])];
// console.log(res);
// for (let i = 0; i < arr1.length; i++) {

// }
// function move(arr, old_index, new_index) {
//     while (old_index < 0) {
//         old_index += arr.length;
//     }
//     while (new_index < 0) {
//         new_index += arr.length;
//     }
//     if (new_index >= arr.length) {
//         var k = new_index - arr.length;
//         while ((k--) + 1) {
//             arr.push(undefined);
//         }
//     }
//      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
//    return arr;
// }

// console.log(move([10, 20, 30, 40, 50], 0, 2));

// console.log(move([10, 20, 30, 40, 50], -1, -2));

// function capitalizeString(str) {
//     let fox = prompt("Unesite recenicu");
//     console.log(fox);
//     fox = fox.split(" ");

//     for (let i = 0; i < fox.length; i++) {
//         let rec = fox[i];
//         rec = rec.split("")
//         rec[0] = rec[0].toUpperCase();
//         rec = rec.join(" ")
//         fox[i] = rec;
//     }
//     fox = fox.join(" ")
//     console.log(fox);
//     }
// capitalizeString()
// function amountTocoins(amount, coins)
// {
//  if (amount === 0)
//   {
//      return [];
//    }
//  else
//    {
//      if (amount >= coins[0])
//        {
//         left = (amount - coins[0]);
//         return [coins[0]].concat( amountTocoins(left, coins) );
//         }
//       else
//         {
//          coins.shift();
//          return amountTocoins(amount, coins);
//         }
//     }
// }
// console.log(amountTocoins(46, [25, 10, 5, 2,1]));

// function twiceAsOld(dadYearsOld, sonYearsOld) {
// let twice = dadYearsOld - sonYearsOld * 2;
// return twice < 0 ? twice * (-1) : twice;
// }

// function reverseArray(n) {
//     var num = n.toString();
//     var arr = num.split("");
//     return arr.reverse();
// }
// let brojcic = Number(prompt("Unesite broj"))
// console.log(reverseArray(brojcic));

// function reverseArray(n) {
//     n = n.toString();
//     arr = [];
//     for (i = n.length-1; i >= 0; i--) {
//         arr.push(parseInt(n[i]));
//     }
//     return arr;
// }
// let brojcic = Number(prompt("Unesite broj"))
// console.log(reverseArray(brojcic));

// function duzina(niz) {
//     min1 = niz[0];
//     min2 = niz[0];

//     for (el of niz) {
//         if (min1>el) {
//             min1 = el;
//         }
//         else if (min2>el && min1 < el) {
//             min2 = el;
//         }
//     }
//     console.log(min1);
//     console.log(min2);
// }

// duzina([3,5,2,1,9,3,4]);

// function find(niz) {
//     max = niz[0];
//     min = niz[0]
//     for(i=0;i<=niz.length;i++){
//         if (min>niz[i]){
//             min=niz[i];
//         }
//         if (max<niz[i]) {
//             max=niz[i];
//         }
//         if(Math.abs(min)>max){
//             max=min;
//         }
//     }

//     console.log(max);

// }
// find([3,5,1,2,23,15,231,2,-231,-430,0,-11000,11000]);

// data = [3,0,24,54,0,123,0,32,63]
// function find(niz) {
//     for(i=0;i<niz.length;i++){
//         if(niz[i]===0){
//             niz.splice(i,1);
//             niz.push(0)
//         }
//     }
//     return niz;
// }
// console.log(find(data));

// data = [3,24,54,123,32,63]
// function find(niz) {
//     suma = 0;
//     ars = 1
//     for (let i = 0; i < niz.length; i++) {
//         suma += niz[i];
//     }
//     ars = suma/niz.length;
//     return ars;
// }
// console.log(find(data));

// data = [3,0,24,54,0,123,1,1,1,0,32,63]
// function find(niz) {
//     for(i=0;i<niz.length;i++){
//         if(niz[i]===0){
//             niz.splice(i,1);
//             niz.push(0)
//         }
//         if(niz[i]===1){
//             niz.splice(i,1);
//             niz.unshift(1)
//         }
//     }
//     console.log(niz);
// }
// find(data);

// function sayHello() {
//     console.log("Hello");
// }
// data = [1,2,3,4,5,6];
// data.forEach(sayHello);

// data = [2,5,34,65,43,52,98,23,66]
// a = data.some((el) => {
//     return el > 97;

// })
// console.log(a);

// data = [3,-20,24,54,-15,123,1,-44,32,63]
// function countPositivesSumNegatives(input) {
//     arr = [0,0];
//     input.forEach((el) => {
//         if(el>0){
//             arr[0]++;
//         }
//         else {
//             arr[1]+=el;
//         }

//     })
//     return arr;
// }
// countPositivesSumNegatives(data);

// function powersOfTwo(n) {
//     let result = [];
//     for (let i = 0; i <= n; i++) {
//       result.push(2 ** i);
//     }
//     return result;
//   }
//   powersOfTwo(0);  // [1]
//   powersOfTwo(1);  // [1, 2]
//   powersOfTwo(4);  // [1, 2, 4, 8, 16]

// function iceBrickVolume(radius, bottleLength, rimLength) {
//   return (bottleLength - rimLength) * radius * 2 * radius;
//  }

// function symmetricPoint(p, q) {
//   return [2*q[0]-p[0], 2*q[1]-p[1] ]
// }

// let niz = [1,1,1,5,3,5,1];
// function stray(niz) {
//     let niz1 = niz[0];
//     for(let i=0;i<=niz.length;i++){
//         if(niz1 !== niz[i]){
//             return niz1 = niz[i];
//         }
//     }
// }
// console.log(stray(niz));

// function stray(numbers) {
//   num = 0;

//   if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
//     num = numbers[0];
//   }
//   if (
//     numbers[numbers.length - 1] !== numbers[numbers.length - 2] &&
//     numbers[numbers.length - 1] !== numbers[numbers.length - 3]
//   ) {
//     num = numbers[numbers.length - 1];
//   }

//   for (let i = 1; i < numbers.length - 1; i++) {
//     if (numbers[1] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {
//       num = numbers[i];
//       break;
//     }
//   }
//   return num;
// }

// let niz = [12,14,63,72,55,24];

// function inverseSlice(items,a,b) {
//     let niz = [];
//     for (let i = 0; i < items.length; i++) {
//         if(i<a || i>=b){
//             niz.push(items[i]);
//         }

//     }
//     return niz;
// }
// console.log(inverseSlice(niz,2,4));

// let linija = "alpha beta beta gama gama gama delta alpha beta beta gama gama delta";
// function duplicate(linija) {
//     let recPom = ' ';
//     for (let i = 0; i < linija.split(" ").length; i++) {
//         pom1 = linija.split(" ")[i];
//         pom2 = linija.split(" ")[i+1];
//         if(pom1 !== pom2){
//             recPom += pom1 + " ";
//         }
//     }
//     return recPom;
// }
// console.log(duplicate(linija));

// function findLargestSumPair(arr) {
//   let first, second;
//   if (arr[0] > arr[1]) {
//     first = arr[0];
//     second = arr[1];
//   } else {
//     first = arr[1];
//     second = arr[0];
//   }

//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > first) {
//       second = first;
//       first = arr[i];
//     } else if (arr[i] > second && arr[i] != first) second = arr[i];
//   }
//   return first + second;
// }

// let arr1 = [12, 34, 10, 6, 40];
// console.log(findLargestSumPair(arr1));

// function nbYear(p0, percent, aug, p) {

//     var brojac = 0;
//     while (true)
//     {
//       if (p0 >= p)
//       {
//         return brojac;
//       }
//       p0 = p0 * (1 + percent/100) + aug;
//       brojac++;
//     }
//   }
//   console.log(nbYear(1000, 2, 50, 1200));

// let pom = [];
// let niz=[1,8,3,4,7,1,24,126,43,16,84,54];
// for(let i=0;i<=niz.length;i++){
//     for(let j=i+1;j<=niz.length;j++){
//         if(niz[i]<niz[j]){
//             [niz[i],niz[j]] = [niz[j],niz[i]]
//         }
//     }
// }
// console.log(niz);

// function openOrSenior(data){
//     var pom = [];
//     for(let i=0;i<data.length;i++){
//       if(data[i][0]>=55 && data[i][1]>7){
//         pom.push("Senior")
//       }
//       else {
//         pom.push("Open")
//       }
//     }
//     return pom;
//     }
// function addBinary( a, b ){
// var sum = a + b,
//         binary = '';

// while ( sum > 0 ) {
//   binary += ( sum % 2 );
//   sum = Math.floor( sum / 2 );
// }

// return binary;
//   }

// addB = (a, b) => (a + b).toString(2);

// console.log(addB(25, 27));

// function _keys(obj)
//  {
//     if (!isObject(obj)) return [];
//     if (Object.keys) return Object.keys(obj);
//     var keys = [];
//     for (var key in obj) if (_.has(obj, key)) keys.push(key);
//     return keys;
//   }
// function isObject(obj)
// {
//     var type = typeof obj;
//     return type === 'function' || type === 'object' && !!obj;
//   }
// console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

// var library = [
//   {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     readingStatus: false,
//   },
// ];

// for (var i = 0; i < library.length; i++) {
//   var book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
//   if (library[i].readingStatus) {
//     console.log("Already read " + book);
//   } else {
//     console.log("You still need to read " + book);
//   }
// }

// class Osoba{
//   constructor(ime) {
//       this.ime = ime;
//   }
//   objavi() {
//       console.log("Ovo je " + this.ime);
//   }
// }

// o1 = {
//   name: "Dzemil",
//   surname: "Dupljak",
// };
// o2 = {};

// let flatObj = Object.entries(o1).length;

// for(let i = 0 ; i < flatObj.length ; i++){
//   console.log(flatObj[i]);
//   o2(flatObj[i][1]) = flatObj[i][0];
// }
// console.log(o1);
// console.log("=========================================");
// console.log(o2);

// class Book {
//   constructor(title, genre, author) {
//     this.title = title;
//     this.genre = genre;
//     this.author = author;
//     this.read = false;
//     this.read_date = null;
//   }
// }

// class BookLists {
//   constructor() {
//     this.bookShelf = [];
//     this.booksRead = 0;
//     this.notBooksRead = this.bookShelf - this.booksRead;
//     this.nextBook = null;
//     this.currBook = null;
//     this.lastBook = null;
//   }

//   add(book) {
//     if (book instanceof Book) {
//       //TODO add validation of other properties
//       this.bookShelf.push(book);

//       for (let i = 0; i < this.bookShelf.length; i++) {
//         if (!this.bookShelf[i].read) {
//           this.currBook = this.bookShelf[i];
//           if (this.bookShelf[i + 1]) {
//             this.nextBook = this.bookShelf[i + 1];
//           } else {
//             this.nextBook = null;
//           }
//           break;
//         }
//       }
//     } else {
//       console.log("Invalid argument type");
//     }
//   }
//   finishCurrentBook(book) {
//     for (let i = 0; i < this.bookShelf.length; i++) {
//       const book = this.bookShelf[i];
//       if (book.title === this.currBook.title) {
//         this.bookShelf[i].read = true;
//         this.bookShelf[i].read.date = new Date().now();
//         this.lastBook = this.currBook;
//         this.currBook = this.nextBook;
//         if (this.bookShelf[i + 1]) this.nextBook = this.bookShelf[i + 1];
//         break;
//       }
//     }
//   }
// }
// b1 = new Book("HP1", "magic", "JKR");
// b2 = new Book("HP2", "magic", "JKR");
// b3 = new Book("HP3", "magic", "JKR");
// b4 = new Book("HP4", "magic", "JKR");
// b5 = new Book("HP5", "magic", "JKR");

// bl = new BookLists();

// bl.add(b1);
// bl.add(b2);
// bl.add(b3);
// bl.add(b4);
// bl.add(b5);

// console.log(bl.currBook);
// console.log(bl.nextBook);
// console.log(bl.lastBook);

// console.log(finishCurrentBook(bl));
// console.log(finishCurrentBook(bl));

// console.log(bl.currBook);
// console.log(bl.nextBook);
// console.log(bl.lastBook);

// var cat = {
//   tired : 0,
//   hunger : 0,
//   lonely : 0,
//   happy : 0,
//   sleep : function(n){
//     this.tired-=5*n;
//     this.hunger+=5*n;
//   },
//   feed : function(n){
//     this.happy+=5*n;
//     this.hunger-=5*n;
//   },
//   pet : function(n){
//     this.lonely -=5*n;
//     this.happy +=5*n;
//     this.tired +=5*n;
//   },
//   pat : function(n){
//     if(this.hunger> 40 || this.tired>60){
//       console.log("NE DIRA ME!");
//     }
//     else {
//       console.log("TU ISPOD STOMAKA MAMI, TO ME RADI!");
//     }
//   }

// }
// cat.tired = 30;
// cat.sleep(3);
// cat.feed(4);
// cat.pet(5);
// const {tired,hunger,lonely,happy} = cat;
// console.log("Umor:",tired,"\nGlad",hunger,"\nUsamljenost",lonely,"\nSreca",happy);
// cat.pat();

// data = {
//     a: 1,
//     b: 2
// }
// function without(data, prop){
//     delete data[prop];
//     return data;
// }
// console.log(without(data,'b'));

// var library = [
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true,
//         age: 29
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true,
//         age: 14
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false,
//         age: 25
//     },
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true,
//         age: 19
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true,
//         age: 12
//     },];

// function without(niz){
//     let niz1 = [];
//     for (var i = 0; i < niz.length; i++)
//        {
//            if(niz[i].age > 18){
//                niz1.push(niz[i]);
//            }
//         }
//     return niz1;
// }

// console.log(without(library));

// function wash(dry) {
//     console.log("wash");
//     setTimeout(dry, 3000);
//   }
//   function dry(fold) {
//     console.log("dry");
//     setTimeout(fold, 2000);
//   }
//   function fold(done) {
//     console.log("fold");
//     console.log("done");
//   }

//   setTimeout(() => wash(() => dry(() => fold("done"))), 3000);
// function wash(){
//     setTimeout(()=>{
//         console.log("Wash");
//     },1000)
// }
// function dry(){
//     setTimeout(()=>{
//         console.log("Dry");
//     },2000)
// }
// function fold(){
//     setTimeout(()=>{
//         console.log("Fold");
//         console.log("Done");
//     },3000)
// }
// doLaundry([])

// function a (arg) {
//     console.log("NEKI KOD");
//     console.log("NESTO");
//     arg();
// }

// function hello() {
//   console.log("Hello world");
// }
// a = hello;
// b = a;
// c = b;
// c();

// var library = [
//         {
//             title: 'Bill Gates',
//             author: 'The Road Ahead',
//             readingStatus: true,
//             age: 29
//         },
//         {
//             title: 'Steve Jobs',
//             author: 'Walter Isaacson',
//             readingStatus: true,
//             age: 14
//         },
//         {
//             title: 'Mockingjay: The Final Book of The Hunger Games',
//             author: 'Suzanne Collins',
//             readingStatus: false,
//             age: 25
//         },
//         {
//             title: 'Bill Gates',
//             author: 'The Road Ahead',
//             readingStatus: true,
//             age: 19
//         },
//         {
//             title: 'Steve Jobs',
//             author: 'Walter Isaacson',
//             readingStatus: true,
//             age: 12
//         },];
// var numbers = [45, 4, 9, 16, 25, 13, 38, 68, 61 ,52, 29];
// var evenNumbers = [];
// numbers.forEach((a) => {
//     if(a%2===0){
//         evenNumbers.push(a)
//     }
// });
// console.log(evenNumbers);

// let str = "the quick brown fox"
// var a = str.split('');
// var g = []
// a.forEach((a,b) => {
//     if(b%2==0){
//         g.push(a.toLowerCase());
//     }
//     else {
//         g.push(a.toUpperCase());
//     }
// });
// let b = g.join('');
// console.log(b);

// data = [123, NaN, false, 0, 15, -23, "", undefined, 47, null];
// br = 0;
// data.forEach((a) => {
//   if (!a) {
//     br++;
//   }
// });
// console.log(br);

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 0;
//   if (x === 0) {
//     myResolve("OK!");
//   } else {
//     myReject("Error!");
//   }
// // });
// myPromise
// .then((value) => {
//     console.log(`Then : ${value}`);
//     console.log(`PROGRAM`);
//     console.log(`JE`);
//     console.log(`DOBAR`);
//   })
//   .catch((value) => {
//     console.log(`Catch : ${value}`);
//   })
//   .finally(() =>{
//     console.log(`Uvek ce da se ovo izvrsi!`);
//   })

// function job() {
//   return "Hello world";
// }
// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve(job())
//     },2000);
// });
// myPromise.then((val) => {
//   console.log(val);
// });

// function is_Palindrome(str1) {
//   var rev = str1.split("").reverse().join("");
//   return str1 == rev;
// }

// function longest_palindrome(str1) {
//   var max_length = 0,
//     maxp = "";

//   for (var i = 0; i < str1.length; i++) {
//     var subs = str1.substr(i, str1.length);

//     for (var j = subs.length; j >= 0; j--) {
//       var sub_subs_str = subs.substr(0, j);
//       if (sub_subs_str.length <= 1) continue;

//       if (is_Palindrome(sub_subs_str)) {
//         if (sub_subs_str.length > max_length) {
//           max_length = sub_subs_str.length;
//           maxp = sub_subs_str;
//         }
//       }
//     }
//   }

//   return maxp;
// }
// console.log(longest_palindrome("abracadabra"));

// console.log(
//   longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")
// );

// .then((response) => {
  //   return response.json();
  // })
  // .then((response) => {
    //   console.log(response);
    // });
    
    async function funk() {
      try {
        const resJson = await (
          await fetch("https://jsonplaceholder.typicode.com/users")
        ).json();
        const name = resJson.map((el) => {
          return el.name;
        });
        console.log(name);
      } catch (err) {
        console.log("PROBLEM SA SERVEROM");
      }
    }
    funk();