const units = prompt("Enter the number of units: ");
let charge = 0;
if (units <= 100) charge = units * 1.5;
else if (units <= 200) charge = 100 * 1.5 + (units - 100) * 2.5;
else if (units <= 300) charge = 100 * 1.5 + 100 * 2.5 + (units - 200) * 3.0;
else if (units <= 450) charge = 100 * 1.5 + 100 * 2.5 + 100 * 3.0 + (units - 300) * 4.5;
else charge = 100 * 1.5 + 100 * 2.5 + 100 * 3.0 + 150 * 4.5 + (units - 450) * 6.0;

alert("The total charge is: ₹" + charge);