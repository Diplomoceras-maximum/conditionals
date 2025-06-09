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

// Else If Statement

// Else if statements allow for multiple if statements to check a value against various conditions

/* Syntax of an else if statement

    if (condition1) {
        // code block if condition1 is true
    } else if (condition2) {
        // code block if condition2 is true
    } else if (condition3) {
        // code block if condition3 is true
    } else {
        // code block if none of the conditions are true
    }

*/

let score = 70;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C"); // C (each condition is checked in order until conditional match is met)
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// Else if statements are used to copare a single variable against multiple ranges or values, with no need for multiple stand alone if statements

// Switch Statements

// A switch statement compares a single value against multiple possible cases, an alternative to long else if statements.
// A switch evalautes an expression and executes code based on the matching case value, best for fixed values.

/* Syntax of a switch statement

    switch (expression) {
        case value1:
            // code block for value1
            break;
        case value2:
            // code block for value2
            break;
        case value3:
            // code block for value3
            break;
        default:
            // code block if no cases match
    }

*/

// The expression is evaluated once and is compared with each case value
// If a match is found it funs the associated block, the break statement stops further case checks
// If no match is found, the dafault block runs

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Wednesday (day (case) 3 loggs the dayName of Wednesday)
