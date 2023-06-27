// // console.log('loog')

// // // SCOPE---------------------------------------------------------------------------

// // // // scope globale è dichiarato fuori da qualsiasi graffe

// // let pippo = 10; //scope globale

// // // // scope padre non vede le variabili figli

// // // if(pippo<20){

// // //     pippo += 3;
// // //     let pluto = 4;

// // // }

// // // pluto +=1;

// // // console.log(pippo)
// // // //console.log(pluto)

// // // SCOPE NESTATI------------------------------------------------------------------

// // function createEvenArray(max) {
// //     const tempArray = []
// //     const i=40;
// //     for (let i = 0; i < max; i++) {
// //         if (i%2===0) {
// //         tempArray.push(i)
// //         }

// //     }
// //     return tempArray
// // }

// // console.log(createEvenArray(100))

// // FUNZIONE PARAMETRI ARGS-----------------------------------------------------------

// // function mean() {
// // //     console.log(arguments)
// // //   const sum = v1 + v2 + v3;
// // //   const mean = sum / 3;
// // //   return mean;
// // let sum = 0;
// // for (let i = 0; i < arguments.length; i++) {
// //     const value = arguments[i];
// //     sum+= value

// // }
// // const mean = sum/arguments.length;
// // return mean
// // }

// // console.log(mean(3314,1344,2465,4123431,5315,6435,6454,643,36565455,1,2,4,5,1,1,1,1,1))

// // function sumAll(...args){
// // let sum=0
// // for (let i = 0; i < args.length; i++) {
// //     const element = args[i];
// //     sum= sum + value;
// // }
// //     return sum;
// // }

// // console.log(sumAll(3,4,5))

// // function pippo(v1,v2,...args)

// // REDUCE----------------------------------------------------------------------------

// function sumAllArray(arrayToSum) {

//     let accumulator = 0;

//     for (let i = 0; i < arrayToSum.length; i++) {
//         const current = arrayToSum[i];

//         //put your code here
//         accumulator+= current
//     }
//     return accumulator;
// }
// console.log(sumAllArray([2,3,4,5]))

// function multiplyAllArray(arrayToMultiply) {

//     let accumulator = 1;

//     for (let i = 0; i < arrayToMultiply.length; i++) {
//         const current = arrayToMultiply[i];

//         //put your code here
//         accumulator*= current
//     }
//     return accumulator;
// }
// console.log(multiplyAllArray([2,3,4,5]));

// function join(arrayToJoin) {

//     let accumulator = '';

//     for (let i = 0; i < arrayToJoin.length; i++) {
//         const current = arrayToJoin[i];

//         //put your code here
//         accumulator+= current
//     }
//     return accumulator;
// }
// console.log(join(['qui','quo','qua']));

// function sumEvenAndOdd(arrayToSumEO) {

//     let accumulator = {sumOfEven:0, sumOfOdd:0};

//     for (let i = 0; i < arrayToSumEO.length; i++) {
//         const current = arrayToSumEO[i];

//         //put your code here
//         if (current%2===0) {
//             accumulator.sumOfEven+= current
//         } if (current%3===0) {
//             accumulator.sumOfOdd+= current
//         }
//     }
//     return accumulator;
// }
// console.log(sumEvenAndOdd([1,2,3,4,5,6]));

// // RICORSIONE--------------------------------------------------------------

//FATTORIALE(!)

// 5! = 5*4*3*2*1 = 120

//DEFINIZIONE
//1) 1!=1;
//2) n! = n * (n-1)!

// function factorial(n){
//     if (n===1) {

//         return 1
//     }

//     else return n * factorial(n-1);
// }

function min(v1, v2) {
  let minimum = v1 < v2 ? v1 : v2;
  return minimum;
}
console.log(min(13, 2));

function min2(...args) {
  let accumulator = -Infinity;

  for (let i = 0; i < args.length; i++) {
    const current = args[i];
    if (i === 0) {
      accumulator = current;
    }
    if (accumulator > current) {
      accumulator = current;
    }
  }
  return accumulator;
}

console.log(min2(21, 43, 532, 124));

//1) isEven(0) => true
//2) isEven (1) => false
//3) isEven (n) => isEven(n-2)

function isEven(n) {
  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false;
  }
  return isEven(n - 2);
}

console.log(isEven(3));
console.log(isEven(6));
console.log(isEven(1));

//Barbababo

function countBs(str) {

  let accumulator = 0;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element === "B") {
      accumulator += 1;
    }
  }
  return accumulator;

}

console.log(countBs("BBC"));


function countLetters(str, letter) {

  let accumulator = 0;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element === letter) {
      accumulator += 1;
    }
  }

  return accumulator;

}

console.log(countLetters("BBCCCCCCCCCC", "C"));

function isIsogram(str) {
  lowerString = str.toLowerCase();
  for (let i = 0; i < lowerString.length; i++) {
    for (let j = i + 1; j < lowerString.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("cappello"));