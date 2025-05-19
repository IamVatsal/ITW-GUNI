let now = new Date();

let day = String(now.getDate()).padStart(2, '0');
let month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
let year = now.getFullYear();

let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');
let seconds = String(now.getSeconds()).padStart(2, '0');

let dateStr = `${day}/${month}/${year}`;
let timeStr = `${hours}:${minutes}:${seconds}`;

console.log("Date:", dateStr);
console.log("Time:", timeStr);