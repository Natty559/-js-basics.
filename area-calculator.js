// ==============================
// Assignment 2: The Area Calculator
// ==============================

// Global variable
let unit = "sq ft";

// Arrow Function
const calculateArea = (length, width) => {
    const result = `${length * width} ${unit}`;
    return result;
};

// Function Calls
let area1 = calculateArea(10, 5);
let area2 = calculateArea(8, 4);

// Logging results
console.log(area1);
console.log(area2);

// ==============================
// Bonus: Concise Arrow Function
// ==============================

const calculateAreaSimple = (length, width) => `${length * width} ${unit}`;

console.log(calculateAreaSimple(12, 6));