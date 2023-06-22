// console.log('functions!')


// function square(specialNumber) {
//     const result = specialNumber * specialNumber;
//     return result;
// }

// function logUppercase (stringToLog) {
//     const uppercaseString = stringToLog.toUpperCase ()
//     console.log(uppercaseString)
// }

// function gentleAlert(){
//     alert('bro smetti di pensare a starfield')
// }

// function logMultipleTimes(stringToLog, times){
//     for (let i = 0; i < times; i++) {
//         console.log(stringToLog)      
//     }
// }

// function isEven(number){
//     if (number % 2===0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function pow(base, exponent){
//     const result = base ** exponent;
//     return result
// }

// function lastCharUppercase(selectedString){
//     const char = selectedString [selectedString.length - 1];
//     const charUpperCase = char.toUpperCase();
//     return charUpperCase;

// }
// const pippo = square(16);

// console.log(pippo);

// logUppercase ('viva le f')

// gentleAlert();

// logMultipleTimes ('pizza', 100)

// const pluto = isEven(27)
//  console.log(pluto);

// const paperino = pow(5,3) 
// console.log(paperino)

// const gastone = lastCharUppercase('genova')
// console.log(gastone)

//  // Non per forza serve un return, a meno che non voglia "ritornare" un risultato.


// SINTASSI ALTERNATIVE

// function square (number) {
//     const result = number * number
//     return result
// }

// console.log(square(3))

// // questa è quella standard

// const square2 = function (number){
//     // const result = number * number
//     // return result
//     return number*number;
// }

// console.log (square2 (10))

// //questa è una FUNZIONE ANONIMA, assegnata ad una variabile

// const square3 = (number) => {
//     const result = number * number
//     return result
// }

// console.log(square3(4))

// //questa è una FUNZIONE LAMBDA

// const square4 = (number) =>  number*number;

// const pow = (base,exponent) => base ** exponent;

// console.log(square4(8))
// console.log(pow(4,3))

//niente return perchè freccia senza graffe

// // PARAMETRI------------------------

// function logParameters(parameter1,parameter2){
//     console.log('parametro 1:',parameter1);
//     console.log('parametro 2:',parameter2);
// }

// logParameters('pippo', 5)
// logParameters(27)

// function pow(base,exponent){
// if (base===undefined) {
//     return 'che cavolo stai facendo?!'   
// }

//     if (exponent !== undefined) {
//         const result = base ** exponent;
//         return result
//         }
//         else {
//             const result2 = base ** 2;
//             return result2
//         }
// }
// const pippo= pow(4,4)

// console.log(pippo)

// const pluto= pow(4)

// console.log(pluto)

// const paperino = pow()

// console.log(paperino)

// // VALORI DEFAULT------------------------------------------------------------------------------

// function pow(base = 'cazz fai scemo', exponent = 2) {
//     return (base*exponent);
// }
// console.log(pow(5,3));

// console.log(pow(5));

// const startingString = '11';

// const startingNumber = parseInt(startingString, 2);

// console.log(startingString, typeof startingString);
// console.log(startingNumber, typeof startingNumber);

// // ESERCIZIO 1
// DEFINIRE UNA FUNZIONE 'pow' CHE NON FACCIA USO DELL' OPERATORE '**' 
// NE DELLA LIBERIA MATH

function pow (base, exponent){
    

}

// // ESERCIZIO 2
// DEFINIRE UNA FUNZIONE 'correctCase' CHE PRENDA IN INPUT UNA STRINGA
// E LA RESTITUISCE TRASFORMANDO LA PRIMA LETTERA IN MAIUSCOLO

function correctCase{

}

// // ESERCIZIO 3
// DEFINIRE UNA FUNZIONE 'min' CHE DATI DUE NUMERI
// RESTITUISCA IL MINORE

function min{

}

// // ESERCIZIO 4 
// DEFINIRE UNA FUNZIONE 'clamp' CHE PRENDE COME PARAMETRI 
// TRE NUMERI: VALORE, MASSIMO, MINIMO.
// SE VALORE È MINORE DI MINIMO, RESTITUISCE MINIMO
// SE MAGGIORE DI MASSIMO, RESTITUISCE MASSIMO
// ALTRIMENTI RESITUISCE VALORE

function clamp{

}

// // ESERCIZIO 5
// DEFINIRE UNA FUNZIONE 'chessboard' CHE PRENDE COME PARAMETRO
// 'size' E STAMPA LA SCACCHIERA

function chessboard{

}

// // ESERCIZIO 6
// DEFINIRE UNA FUNZIONE 'ellipse' CHE PRENDE COME PARAMETRO
// UNA STRINGA, SE LA STRINGA È MINORE DI 20 CARATTERI LA RITORNA NON MODIFICATA
// ALTRIMENTI LA TAGLIA A 20 CARATTERI E AGGIUNGE 3 PUNTINI

function ellipse {

}

// // ESERCIZIO 7
// DEFINIRE UNA FUNZIONE 'reverseString' CHE PRENDE COME PARAMETRO
// UNA STRINGA E LA RESTITUSCE AL CONTRARIO
