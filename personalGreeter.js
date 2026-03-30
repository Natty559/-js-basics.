// ==============================
// Assignment 1: The Personal Greeter
// ==============================

// Function Declaration
function createGreeting(firstName, timeOfDay = "Hello") {
    // Create greeting using template literal
    const greeting = `${timeOfDay}, ${firstName}!`;

    // Return the greeting
    return greeting;
}

// Function Calls
let message1 = createGreeting("Sarah", "Good Morning");
let message2 = createGreeting("David", "Good Evening");

// Bonus: default parameter
let message3 = createGreeting("Michael");

// Log results
console.log(message1);
console.log(message2);
console.log(message3);