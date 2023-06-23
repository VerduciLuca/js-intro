console.log("array");

// // ARRAY -------------------------------------------------------------------------------------------------

// // const pippo = ['pane', 'latte', 'pasta', 'hashish'];

// // console.log(pippo)

// // console.log(pippo.length)

// // AGGIUNGERE E TOGLIERE ELEMENTI-------------

// // pippo.push('acqua'); //push inserisce in coda
// // pippo.unshift('biscotti'); // inserisce in testa

// // const elementoCoda = pippo.pop() //rimuove elemento in coda e lo mette in una variabile
// // console.log(elementoCoda)
// // const elementoTesta = pippo.shift() // rimuove elemento in testa e lo mette in una variabile

// // console.log(elementoTesta)

// // console.log(pippo);

// // CICLI ED ARRAY--------------------------------------------------------------------

// // const pluto = [1, 2, 23, -4, 345, 0];

// // console.log(pluto[2])

// // console.log(pluto[0])

// // console.log(pluto[pluto.length -1])

// // for (let i = 0; i < pluto.length; i++) {
// //     const element = pluto[i];
// //     console.log(element);
// // }

// // for (const element of pluto) {          //questo è lo stesso di sopra, ma più breve e non puoi dare valori alla i
// //     console.log(element)
// // }

// // let i = 0;                           // versione while, mi fa cagare
// // while (i<pluto.length) {
// //     const element = pluto[i]
// //     console.log(element)
// //     i++;
// // }

// // for (let i = pluto.length -1; i >=0; i--) {
// //     const element = pluto[i];
// //     console.log(element)
// // }

// // TRASFORMAZIONI DI ARRAY ------------------------------------------------------------------

// // // MAPPING------------------------------------
// // const paperino = [2, 5, -4, 2000, 7, 34];

// function arrayDouble(selectedArray) {
//   const newArray = [];

//   for (let i = 0; i < selectedArray.length; i++) {
//     const element = selectedArray[i];
//     const newElement = element * 2;
//     newArray.push(newElement);
//   }
//   return newArray;
// }
// // console.log("double:", arrayDouble(paperino));

// // function splitIfEven(secondArray) {
// //   let newArray = [];

// //   for (let i = 0; i < secondArray.length; i++) {
// //     const element = secondArray[i];
// //     let newElement;
// //     if (element % 2 === 0) {
// //       newElement = element / 2;
// //     } else {
// //       newElement = element;
// //     }
// //     newArray.push(newElement);
// //   }
// //   return newArray;
// // }

// // console.log("half of even:", splitIfEven(paperino));

// // const paperone = ['qui', 'quo', 'qua'];

// // function upperCaseAll(selectedArray){

// //     let newArray = [];

// //     for (let i = 0; i < selectedArray.length; i++) {
// //       const element = selectedArray[i];

// //       const newElement = element.toUpperCase();

// //       newArray.push(newElement);
// //     }
// //     return newArray;

// // }

// // console.log("uppercase:", upperCaseAll(paperone))

// // FILTERING--------------------------------------------------

// const paperoga = [3, 5, 6, 9, 8, 111, -3, 8, 0];

// function removeEven(selectedArray) {
//   let newArray = [];

//   for (let i = 0; i < selectedArray.length; i++) {
//     const element = selectedArray[i];

//     if (element % 2 !== 0) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }
// console.log("only odd:", removeEven(paperoga));

// function removeNegative(selectedArray) {
//   let newArray = [];

//   for (let i = 0; i < selectedArray.length; i++) {
//     const element = selectedArray[i];

//     if (element >= 0) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

// console.log("no neg:", removeNegative(paperoga));

// //FUNCTION COMPOSITION

// const qui = [3, 5, 6, 9, 8, 111, -3, 8, 0, 20, -10000];

// function removeNegativeAndDouble(selectedArray) {
//   return arrayDouble(removeNegative(selectedArray));
// }

// console.log(removeNegativeAndDouble(qui));

// ESERCIZI------------------------------------------------------------

const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34];
const stringArray = ['23','PIPPO','pluto','la CASA blu','Osvaldo','','porchetta']

// 1) MAPPING FUNCTION CHE PRENDE IN INPUT UN ARRAY DI NUMERI
//    E RESTITUISCE UN ARRAY CON TUTTI I NUMERI DIMINUITI DI 1



// 2) MAPPING FUNCTION CHE PRENDE IN INPUT UN ARRAY DI NUMERI
//    E RESTITUISCE UN ARRAY CON IL VALORE ASSOLUTO DEI VALORI  



// 3) MAPPING FUNCTION CHE PRENDE IN INPUT UN ARRAY DI NUMERI
//    E RESTITUISCE UN ARRAY DI STRINGHE CON SCRITTO PARI SE PARI
//    E DISPARI SE DISPARI



// 4) MAPPING FUNCTION CHE PRENDE IN INPUT UN ARRAY DI STRINGHE
//    E LE RESTITUISCE TUTTE MINUSCOLE



// 5) MAPPING FUNCTION CHE PRENDE IN INPUT UN ARRAY DI STRINGHE
//    E RESTITUISCE UN ARRAY DI NUMERI CON LA LUNGHEZZA DELLE STRINGHE



// 6) MAPPING FUNCTION CHE PRENDE IN INPUT UN ARRAY DI STRINGHE
//    E LE RESTITSCE IN FORMATO camelCase



// 7) FILTER FUNCTION CHE PRENDE IN INPUT UN ARRAY DI STRINGHE 
//    E RESTITUISCE SOLO QUELLE CON PIU DI 3 CARATTERI



// 8) FILTER FUNCTION CHE PRENDE IN INPUT UN ARRAY DI STRINGHE 
//    E RESTITUISCE SOLO QUELLE CHE CONTENGONO LA LETTERA P



// 9) FILTER FUNCTION CHE PRENDE IN INPUT UN ARRAY DI NUMERI
//    E RESTITUISCE I POSITIVI DIVISIBILI PER 3



// 10) E RIFAI IL SITO DI AXIA BRUH 😢😢😢😢😢😢