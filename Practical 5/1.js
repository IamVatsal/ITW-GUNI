// Create and initialize an array
let arr = [5, 2, 9, 1, 7];

console.log("Original array:", arr);

// push()
arr.push(4);
console.log("After push(4):", arr);

// pop()
arr.pop();
console.log("After pop():", arr);

// reverse()
arr.reverse();
console.log("After reverse():", arr);

// sort()
arr.sort((a, b) => a - b);
console.log("After sort():", arr);

// slice()
let sliced = arr.slice(1, 4);
console.log("After slice(1, 4):", sliced);

// concat()
let arr2 = [10, 11];
let concatenated = arr.concat(arr2);
console.log("After concat([10, 11]):", concatenated);

// splice()
arr.splice(2, 1, 99); // At index 2, remove 1 element and insert 99
console.log("After splice(2, 1, 99):", arr);