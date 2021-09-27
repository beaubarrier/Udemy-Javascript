// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. Calculate both their BMIs using the formula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.

let mark = {
  mass: 78,
  height: 1.69,
};
let john = {
  mass: 92,
  height: 1.95,
};
let markHigherBMI;

function calcs() {
  let markMass = mark.mass / mark.height ** 2;
  console.log(markMass);

  let johnMass = john.mass / john.height ** 2;
  console.log(johnMass);

  if (markMass > johnMass) {
    markHigherBMI = true;
  } else {
    markHigherBMI = false;
  }
  console.log(markHigherBMI);
}

calcs();
