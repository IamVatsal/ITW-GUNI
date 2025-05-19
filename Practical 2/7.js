let n = prompt("Enter a Number");
let x = []
for(let i = 2; i <= n; i+=2) {
    x.push(`${i} `);
}
document.writeln(x);