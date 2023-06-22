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
console.log('1)')

function pow(base, exponent) {
    let result = base

    for (let i = 1; i < exponent; i++) {

        result = result * base
    }
    return result
}
const result = pow(5, 3)
console.log(result)



// // ESERCIZIO 2
// DEFINIRE UNA FUNZIONE 'correctCase' CHE PRENDA IN INPUT UNA STRINGA
// E LA RESTITUISCE TRASFORMANDO LA PRIMA LETTERA IN MAIUSCOLO
console.log('2)')

function correctCase(string) {
    if (string === undefined) {
        nuovaFrase = 'Non hai inserito nessuna frase'

    } else {
        const char = string[0];
        const nuovaFrase = char.toUpperCase() + string.slice(1); //slice ha due parametri volendo
        return nuovaFrase;
    }
}

const risultato = correctCase('lorem ipsum')
console.log(risultato)

// // // ESERCIZIO 3
// // DEFINIRE UNA FUNZIONE 'min' CHE DATI DUE NUMERI
// // RESTITUISCA IL MINORE
console.log('3)')

function min(num1, num2) {
    if (num1 > num2) {
        const numMin = num2
        return numMin
    }
    else {
        const numMin = num1
        return numMin
    }
}
const risultato3 = min(193597, 19)
console.log(risultato3)

// // // ESERCIZIO 4
// // DEFINIRE UNA FUNZIONE 'clamp' CHE PRENDE COME PARAMETRI
// // TRE NUMERI: VALORE, MASSIMO, MINIMO.
// // SE VALORE È MINORE DI MINIMO, RESTITUISCE MINIMO
// // SE MAGGIORE DI MASSIMO, RESTITUISCE MASSIMO
// // ALTRIMENTI RESITUISCE VALORE
console.log('4)')

function clamp(n,max,min){
    if (n<min) {
        clampResult= min
        return clampResult
    }
    if (n>max) {
        clampResult= max
        return clampResult
        
    } else {
        clampResult = n
        return clampResult
    }
}
const risultato4=clamp(37, 40, 30)
console.log(risultato4)

// // // ESERCIZIO 5
// // DEFINIRE UNA FUNZIONE 'chessboard' CHE PRENDE COME PARAMETRO
// // 'size' E STAMPA LA SCACCHIERA
console.log('5)')

function chessboard(size){
    let scacchiera = '';

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (i % 2 === 0 && j % 2 === 0) {
            scacchiera += '●';
        }
        else
         if (i % 2 === 1 && j % 2 === 1) {
            
            scacchiera += '●';
        }
        else {
            scacchiera += '○';
        }
    }
    scacchiera += '\n'; 
}
 return scacchiera
}

const risultato5=chessboard(4)
console.log(risultato5);
// // // ESERCIZIO 6
// // DEFINIRE UNA FUNZIONE 'ellipse' CHE PRENDE COME PARAMETRO
// // UNA STRINGA, SE LA STRINGA È MINORE DI 20 CARATTERI LA RITORNA NON MODIFICATA
// // ALTRIMENTI LA TAGLIA A 20 CARATTERI E AGGIUNGE 3 PUNTINI
console.log('6)')

function ellipse(string) {
    if (string.length<20) {
        stringNuova=string
        return stringNuova
        }
        else
        {
           stringNuova= string.slice(0,20)+'...'
           return stringNuova
        }
        
}
const risultato6=ellipse('ODDIOADISJAOHDOUHEBNFHIENIij')
console.log(risultato6)


// // ESERCIZIO 7
// DEFINIRE UNA FUNZIONE 'reverseString' CHE PRENDE COME PARAMETRO
// UNA STRINGA E LA RESTITUSCE AL CONTRARIO
console.log('7)')
function reverseString(string) {
    let stringRev=''
    for (let i = string.length -1; i >=0; i--) {   //length -1 indica l'ultimo
        stringRev= stringRev + string[i]   
    }
    return stringRev
}
const risultato7=reverseString('Sono una frase al contrario')
console.log(risultato7)