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
    console.log(
      "Mark is a fatty! His mass is " +
        markMass +
        " Compaired to John whos mass is " +
        johnMass
    );
  } else {
    markHigherBMI = false;
    console.log("John is a fatty!");
  }
  console.log(markHigherBMI);
}

calcs();
