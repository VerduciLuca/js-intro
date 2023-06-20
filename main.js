console.log("hello world!");

// //TIPI BASE ------------------------

// // 'fefefe' //string

// // 34  56.65 -23 //number

// // true false //boolean

// // // TIPI STRANI-------------------------------
// //undefined

// //NaN // Not a Number

// null

// //variabili con let, possono cambiare, se serve ---------------------------------------------------------------------
// let pippo = 5;

// console.log(typeof pippo)

// pippo = "viva il caffè!";

// console.log(typeof pippo)

// console.log(pippo);

// //variabili con const, non possono cambiare, il nostro default ---------------------------------------------------------------------
// // const pluto = 12;

// // pluto = 23

// // console.log(pluto)

// //variabili con var, NON LE USARE, mai --------------------------------------------------------------------------
// var paperino = true;
// console.log(paperino);
// paperino = -123;
// console.log(paperino);

// //differenza con let
// // topolino = 5
// // let topolino

// // minnie = 21;
// // var minnie;
// // console.log(minnie)

// //number-------------------------------------------------------------------------------------
// let qui = 5 + 9;
// let qua = 5 * 9;
// let quo = 5/9;
// let paperone = 5 ** 3; //potenza
// let basettoni = 6%5; //modulo (da il resto della divisione, intera)

// console.log(qui);
// console.log(qua);
// console.log(quo);
// console.log (paperone)
// console.log (basettoni)

// let GambaDiLegno = 8%2; //per scoprire se è pari
// console.log(GambaDiLegno);

// let IlNumeroPiuPiccolo = -Infinity;
// let IlNumeroPiuGrande = Infinity;

// //per matematica oltre le basi--------------------------------------------------------------------
// const paperoga = Math.sqrt(16); //libreria Math
// console.log(paperoga)

// //NaN= Not a Number
// const rockerduck = 'pippo' /3
// console.log(rockerduck)

// Boolean------------------------------------------------------------------------------------------------------

const etabeta = true;

console.log(etabeta);

// ! (not) ------------ !true=> false
//                      !false=> true

console.log(!etabeta);

// && (and) true && true => true
//          true && false => false
//          false && true => false
//          false && false => false

const gastone = false;
console.log(etabeta && gastone); //false
console.log(etabeta && !gastone); //true

// || (or) true || true => true
//         true || false => true
//         false || true => true
//         false || false => false
// SE ALMENO UNO È TRUE= TRUE

console.log(etabeta || gastone); //true
console.log(!etabeta || gastone); //false

//true              //true
console.log((etabeta || gastone) && etabeta); // true

// String ---------------------------------------------------------------------------------------------------

// const orazio = "io adoro javasript!";

// console.log(orazio[0]); //nelle graffe l'elemento, contando da 0, spazi contano come carattere
// console.log(orazio[9]);

// const clarabella = "perchè non sono sano di mente";

// console.log(orazio + " " + clarabella);

// const aladin = 27;

// console.log(orazio + 27);

// console.log(clarabella.length)
// console.log(clarabella.toUpperCase())

//undefined and null ----------------------------------------------------------------------

// const macchiaNera = 5; //va riempita subito

// let paperinik; //puoi riempire dopo

// console.log(paperinik); //undefined => scatola vuota

// paperinik = 12;

// console.log(paperinik);

// paperinik = undefined; //NOOOOOOO! per svuotare usa null

// console.log(paperinik);

// paperinik = null;

// console.log(paperinik);

// Operatori di Confronto------------------------------------------------------------

const nonnaPapera = 12;

const ciccio = 24;

const joseCarioca = "12";

console.log(ciccio >= nonnaPapera);

// > (maggiore)
// >= (maggiore o uguale)
// < (minore)
// <= (minore o uguale)

console.log(ciccio <= nonnaPapera);

// !== (diverso)

console.log(ciccio !== nonnaPapera);

// == (uguale con cast) NOOOOOOOO
// === (uguale stretto)

// console.log(nonnaPapera==joseCarioca) //non importa il tipo, converte. NON USARE QUESTO!!!!!!!
// console.log(nonnaPapera===joseCarioca) //te li trova diversi a seconda del tipo. SEMPRE QUESTO!

// Corto circuito degli operatori----------------------------------------------------

// let biancaNeve;

// let ariel = "ciao";

// let cenerentola = biancaNeve || ariel;

// console.log(cenerentola);

//alert e prompt----------------------------------------------------------------

// alert('ciao a tutti!');

// const elsa = prompt ('come ti chiami?');

// console.log(elsa)

// if else control flow -----------------------------------------------------------------------------
// const mulan = prompt('dimmi un numero');

// if (mulan % 2 === 0) {
//     console.log('hai inserito un numero pari');
// } else {
//     console.log('hai inserito un numero dispari')
// }

// console.log('fine del programma')

// // // const jasmine = prompt("dimmi un numero");
// // // const isJasmineDivisibleBy3 = jasmine % 3 ===0;
// // // const isJasmineDivisibleBy5 = jasmine % 5 ===0;

// // // if (isJasmineDivisibleBy3 && isJasmineDivisibleBy5) {
// // //   alert("FIZZBUZZ");
// // // } else if (isJasmineDivisibleBy3) {
// // //   alert("FIZZ");
// // // } else if (isJasmineDivisibleBy5) {
// // //   alert("BUZZ");
// // // } else {
// // //   alert(jasmine);
// // // }

// Switch control flow ------------------------------------------------------------------

const rapunzel = prompt("inserisci FIZZ, BUZZ o FIZZBUZZ");

switch (rapunzel) {
  case "FIZZ":
    alert("Vuoi un numero divisibile per tre");
    break;
  case "BUZZ":
    alert("Vuoi un numero divisibile per cinque");
    break;
  case "FIZZBUZZ":
    alert("Vuoi un numero divisibile per tre e per cinque");
    break;

  default:
    alert('Hai sbagliato ad inserire la parola');
    break;
}
