let num = prompt("Enter a 3-digit number:");
let n = Number(num);

if (num.length !== 3) {
    alert("Please enter a valid 3-digit number.");
} else {
    let sum = 0;
    let temp = n;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }
    if (sum === n) {
        alert(`${n} is an Armstrong number.`);
    } else {
        alert(`${n} is not an Armstrong number.`);
    }
}