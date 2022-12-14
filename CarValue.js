


function alphabetToNumber(carModel,carYear) {



  let letterToNumber = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  if (
    typeof carModel !== "string" ||
    typeof carYear !== "number" ||
    carYear < 0
  ) {
    return "Error: There's something wrong with the input"; //to check if carModel/carYear is the right type of input
  }
  if (carModel.length == 1) return letterToNumber[carModel] || " ";

  const lowerCaseInput = carModel.toLowerCase();
  const replaceSpecialChar= lowerCaseInput.replaceAll(/[^a-z]/g, '');
  const splitStringInput = replaceSpecialChar.split("");
  const mapArrayInput = splitStringInput.map(alphabetToNumber);

  const initialValue = 0;
  let carModelValue = mapArrayInput.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  ); // adding the values of the array

  let carValue = carModelValue * 100 + carYear; // calculating the carValue based on the business rules
  return carValue;
}

console.log(alphabetToNumber("CiviC", 2014)); //6614
console.log(alphabetToNumber("911", 2020)); //2020
console.log(alphabetToNumber("Task-Force", -987)); //error
console.log(alphabetToNumber("camry", 2020)); //8020
console.log(alphabetToNumber("", -2014)); //error
console.log(alphabetToNumber("toyota", "twenty")); //error
console.log(alphabetToNumber("civic", "2020")); //error
console.log(alphabetToNumber("$$$", 2020)); 

module.exports = alphabetToNumber;

// const sumOfLetters = (carModel, carYear) => {
//   // filter carmodel to get
//   let myNumber = carModel.replaceAll("", "");
//   let i,
//     n = myNumber.length,
//     acc = 0;
//   for (i = 0; i < n; i++) {
//     acc += parseInt(myNumber[i], 36) - 9;
//   }
//   let totalSum = acc * 100 + parseInt(carYear);
//   if (totalSum >= 0) {
//    return totalSum

//   } else if (isNaN(totalSum) === false) {
//     return console.log("error message");
//   }
// };

// console.log(sumOfLetters("civic", 2014));
