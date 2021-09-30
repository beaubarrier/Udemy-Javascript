"use strict";

function tipCalc(bill, tip) {
  let minTip = 0.15;
  let maxTip = 0.2;

  bill < 50 && bill >= 300 ? (tip = minTip) : (tip = maxTip);

  let tipAmt = bill * tip;
  let finalAmt = tipAmt + bill;

  return console.log(
    `The bill was ${bill}, the tip was ${tipAmt}, the total is ${finalAmt} dollars.`
  );
}

tipCalc(300);
tipCalc(40);
tipCalc(400);
