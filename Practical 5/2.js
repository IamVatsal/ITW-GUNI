// Create and initialize a string
let str = "Hello, JavaScript!";

// charAt()
console.log("Character at index 7:", str.charAt(7));

// concat()
let str2 = " Let's learn strings.";
let concatenated = str.concat(str2);
console.log("After concat():", concatenated);

// replace()
let replaced = str.replace("JavaScript", "World");
console.log("After replace():", replaced);

// slice()
let sliced = str.slice(7, 17);
console.log("After slice(7, 17):", sliced);

// toLowerCase()
console.log("toLowerCase():", str.toLowerCase());

// toUpperCase()
console.log("toUpperCase():", str.toUpperCase());

// substring()
let substr = str.substring(7, 17);
console.log("substring(7, 17):", substr);