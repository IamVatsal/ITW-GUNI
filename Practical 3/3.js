let n = prompt("Enter a Number");
function numSum(n) {
    let sum = 0;
    n = Number(n); // Convert input to number
    while (n > 0) {
        let digit = n % 10;
        n = Math.floor(n / 10);
        sum += digit;
    }
    return sum;
}
alert(`The sum of the digits is: ${numSum(n)}`);