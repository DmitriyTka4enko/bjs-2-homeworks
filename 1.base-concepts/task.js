"use strict"
function solveEquation(a, b, c) {
  let arr = [];
	let x1;
	let x2;
  const d = b ** 2 - 4 * a * c;

	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		x1 = -b / (2 * a);
		arr.push(x1);
	} else if (d > 0) {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	}
	
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}