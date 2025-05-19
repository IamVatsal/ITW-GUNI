let n = prompt("Enter a Number");

function isArmstrong(n) {
  let sum = 0;
  let temp = n;
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
  }
  if (sum === n) {
    alert(n + " is an Armstrong number.");
    console.log(n + " is an Armstrong number.");
  } else {
    alert(n + " is not an Armstrong number.");
    console.log(n + " is not an Armstrong number.");
  }
}
isArmstrong(n);
