let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];

const average = (array) =>
  array.reduce((oldVal, newVal) => oldVal + newVal) / array.length;

console.log(average(dolphins));
let dolphAvg = average(dolphins);
let koalAvg = average(koalas);

function animalWar() {

    if(koalAvg === dolphAvg && > 100)
    
  if (dolphAvg >= 100 && koalAvg) {
    console.log("Dolphins Win!" + dolphAvg);
  } else {
    if (dolphAvg < 100) {
      console.log("Dolphins lose!" + dolphAvg);
    }
  }

  if (koalAvg >= 100 && dolphAvg) {
    console.log("Koalas Win!" + koalAvg);
  } else {
    if (koalAvg < 100) {
      console.log("Koalas lose!" + dolphAvg);
    }
  }
}

animalWar();
