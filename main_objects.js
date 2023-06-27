console.log("oggetti!");

//oggetto si inizializza con le graffe
// const studente = {nome: 'Damiano', anno:1993, sposato: false};

// console.log(studente);

// console.log(studente.nome);

// console.log(studente['anno']);

// studente.indirizzo = 'Taggia';

// console.log(studente);

// console.log(Object.keys(studente))

// console.log(Object.values(studente))

// // Loop For In ///////////////////////////////////////////////////////////////////////////////////////////////////

// for (const key in studente) {

//     const value= studente[key]

//     console.log(key, value)

// }

const studente2 = {
  name: "Manuela",
  yob: 1988,
  isMarried: false,
  address: "Genova",
  marks: [8, 9, 7, 8, 10],
  dog: {
    name: "Nala",
    breed: "lupo cecoslovacco",
    yob: 2017,
  },
};

function calculateAge(studente2) {
  const actualYear = new Date().getFullYear();
  const age = actualYear - studente2.yob;
  return age;
}

console.log(calculateAge(studente2));

const student3 = {
  name: "Cesare",
  yob: 2003,
  isMarried: false,
  address: "Genova",
  marks: [9, 9, 7, 8, 6],
  dog: {
    name: "Luna",
    breed: "bull terrier",
    yob: 2016,
  },
};

console.log(calculateAge(student3));

const student4 = {
  name: "Stefano",
  yob: 1998,
  isMarried: false,
  address: "Genova",
  marks: [9, 7, 5, 8, 10],
  dog: null,
};

console.log(calculateAge(student4));

function calculateDogAge(student) {
  if (student.dog) {
    const actualYear = new Date().getFullYear();

    const dogAge = (actualYear - student.dog.yob) * 7;

    return dogAge;
  } else {
    return -1;
  }
}

console.log(calculateDogAge(student4));

function calculateMean(student) {
  let sum = 0;
  for (const mark of student.marks) {
    sum += mark;
  }

  const mean = sum / student.marks.length;
  return mean;
}

console.log(calculateMean(studente2));
