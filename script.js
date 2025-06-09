// Conditional Statements

// Conditional statements are used to perform different actions based on different conditions

// Javascript conditional statements:
// if (executes a block of code if condition is true)
// else (executes a block of code if same condition is false)
// else if (a new condition if first condition is false)
// switch (many alternative blocks of code)
// ? (inline conditional statement)

// Conditionals are a core part of writing dynamic and interactive code

// IF statement

// The if statement evaluates a condition, and if the result is "true" it executes the block of code

/* Syntax of an if statement

    if (condition) {
        // code to run if condition is true
    }

*/

let year = 2025;

if (year == 2025) {
  console.log("The year is 2025!"); // The year is 2025! (year == 2025 is true)
}

// Else Statement

// The if statement evaluates a condition, and if the result is "false" it executes the else block of code

/* Syntax of an else statement

    if (condition) {
        // code block to be executed if the condition is true
    } else {
        // code block to be executed if the condition is false
    }

*/

let loggedIn = false;

if (loggedIn) {
  console.log("You are logged in.");
} else {
  console.log("Please log in to continue."); // Please log in to continue. (if condiitional is false)
}

// if loggedIn = true, "You are logged in" will be logged to console
// if loggedIn = false, "Please log in to continue" will be logged to console
