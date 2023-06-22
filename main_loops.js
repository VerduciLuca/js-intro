console.log('loooooooops')

// CICLO WHILE ------------------------------------------------------------------------------------------------------------------------------------------------------------------

 // let indice = 0

 // while (indice < 10) {

 //     console.log('sono un\'istruzione che deve essere ripetuta')
    
 //     indice = indice + 1
 //  // indice +=1 (valore che vuoi)
 //  // indice++ (aggiunge uno solo)
 
 // }

//  Questo ciclo richiede che indice sia maggiore di 10 per fermarsi;
//  aggiungendo +1 ogni loop, in 10 loop il nostro indice (0) diventa 10, interrompendo il ciclo


// let indice = 0;

// while (indice < 100) {
//   if (indice % 2 === 0) {
//     console.log(indice);
//   }

//   if (indice % 2 === 1) {
//     console.log("dispari");
//   }

//   indice++;
// }

// EZ
//se il numero è pari lo scrive, se dispari scrive dispari.


// while(true) {

//     const input = prompt('scrivi una frase o scrivi FINE per terminare');

//     if (input==='FINE') {

//         break;
        
//     } else {

//         // alert('la lunghezza della frase è:' + ' ' + input.length)
//         // alt+96 backtick ``
//         alert(`la lunghezza della frase inserita è di ${input.length} caratteri`)
//     }

// }

// Questo era un loop infinito, rotto solo dal break


// CICLO DO WHILE--------------------------------------------------------------------------------------------------------------------------------------------------------
 
// let indice = 0

// do {
//     console.log('sono un\'istruzione in loop')
//     indice++
    
//  } while (indice<10);
//  Con questo il loop viene eseguito almeno una volta , per poi controllare le condizioni nel while

// CICLI NESTATI-------------------------------------------------------------------------------------------------------------------------------------------------------

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {

//         console.log('riga: ' + i + ', colonna: ' +j)
      
        
//     }
   
    
// }


// CICLO FOR---------------------------------------------------------------------------------------------------------------------------------------------------------------

// for (let index = 0; index < 10; index++) {

//     console.log('sono ripetutoooooo waaaaaaa')
    
// }
// // Funziona come il while, ma più compresso. Super vantaggioso, soprattuto per gli indici.

// for (let index = 0; index < 100; index +=2) {

//     console.log('sono un numero pari e sono :' +' '+ index)
// }

// for (let index = 0; index < 100; index++) {
//     if (index<50) {
//         console.log(index*2)
//     }
//     else {
//        console.log(index/2)
        
//     }  
// }

// for (let index = 100; index >= 0; index--) {
//     console.log(index)
//     }

// for (let index = 100; index >=0; index--) {
//     if (index % 2 === 0) {
//         console.log('Pari', index)
        
//     } else {
//         console.log('Dispari', index)
        
//     }
       
// }


// let paperone= prompt('Scrivi una frase e ti verrà spezzata nel log');

// for (let i = 0; i < paperone.length; i++) {
//     const char = paperone [i];
//     console.log(char)
    
    
// }

// ESERCIZIO LIBRO-----------------------------------------------------------------------------------------------------------------------------------------------------

// let startingString = '#'

// for (let i= 0; i < 130; i++) {
//  console.log(startingString)
//  startingString = startingString + '#'

    
// }

// ESERCIZIO 2

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else {
//     if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       if (i % 3 === 0) {
//         console.log("fizz");
//       } else {
//         console.log(i);
//       }
//     }
//   }
// }

// ESERCIZIO 3

// let chessboard = '';

// for (let i = 0; i < 9; i++) {
//    if (i % 2=== 0) {
//     chessboard += ' # # # #\n'
//    }
//    else {
//     chessboard += '# # # # \n'
//    }
  
// }
// console.log(chessboard)

// VERSIONE SIZE

// const size = 6;
// let scacchiera = '';

// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if (i%2=== 0 && j%2===0) {
//             scacchiera += '#'
            
//          }
//         if (i%2===1 && j%2===1) {
//             scacchiera += '#'
//         }
//          else {
//             scacchiera += '0'

//          }     
//     }    
// }
// console.log(scacchiera)

const size = prompt('Inserire le dimensioni desiderate per la tabella');
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

console.log(scacchiera); 

//  bruh  (─‿‿─)  bruh  //

