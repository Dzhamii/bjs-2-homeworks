"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  } 

  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  

  let creditBody = amount - contribution;
  let monthlyPercent = percent / 100 / 12;

  let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1))); // ежемесячный платеж

  let totalAmount = (monthlyPayment * countMonths).toFixed(2);

  return Number(totalAmount);
}


console.log(calculateTotalMortgage(10, 10000, 50000, 12)); 