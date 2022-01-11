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
let rez = 0

while (1) {
    operacija = Number(prompt("Unesite broj operacije (1.sabiranje, 2.oduzimanje, 3.mnozenje, 4.deljenje): "))
    if(operacija === 1){
        let br1 = Number(prompt("Unesite prvi broj"))
        let br2 = Number(prompt("Unesite drugi broj"))
        rez = br1 + br2
        console.log(rez);
    }
    if(operacija === 2){
        let br1 = Number(prompt("Unesite prvi broj"))
        let br2 = Number(prompt("Unesite drugi broj"))
        rez = br1 - br2
        console.log(rez);
    }
    if(operacija === 3){
        let br1 = Number(prompt("Unesite prvi broj"))
        let br2 = Number(prompt("Unesite drugi broj"))
        rez = br1 * br2
        console.log(rez);
    }
    if(operacija === 4){
        let br1 = Number(prompt("Unesite prvi broj"))
        let br2 = Number(prompt("Unesite drugi broj"))
        rez = br1 / br2
        console.log(rez);
    }
    if(operacija >= 5 || operacija <= 0){
        alert("Izlaz iz programa");
    }
    break
}