"use strict";

// can call this before being defined, however, not a great idea.
// declaration
function calcAge(birthYear) {
  // const age = 2037 - birthYear;
  return 2037 - birthYear;
}
const calcAge1 = function (birthYear) {
  return 2037 - birthYear;
};
const age1 = calcAge1(1991);

// the difference is that function expressions cant be accessed before it is defined
// expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

// fat arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age2);

const yearsUntil = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retire = 65 - age;
  return `${firstName} retires in ${retire} years`;
};
console.log(yearsUntil(1991, "bob"));
console.log(yearsUntil(2001, "dave"));
