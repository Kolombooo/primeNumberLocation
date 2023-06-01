const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

function checkRotation(input) {

    // Convert the number as a string to an array of digits
    const numArray = Array.from(String(input), Number);

    // Declare how many times we need to rotate the number in order to get all the combinations by getting the strings length
    const rotationToMeet = numArray.length;

    // Initiate the rotations itself
    for (let i = 0; i < rotationToMeet; i++) {

        // Move the first item of the array to the last position
        numArray.push(numArray.shift());

        // Convert the updated (reordered) array to a number
        const numToCheck = numArray.reduce((accum, digit) => (accum * 10) + digit, 0);

        // Check if the rotated number is prime
        if (!isPrime(numToCheck)) { return false; }

    }

    return true;
}

// Starting number
const defaultNum = 0;

// Desired position of the rotating prime number
const n = 100;

// Algorithm active
let done = false;

// Starting position set to the starting number
let i = defaultNum;

// Position of the currently checked number;
let pos = 0;

while (!done) {
    i++;
    if (checkRotation(i)) {
        pos++;
        if (pos === n) {
            done = true;
        }
    }
}

let suffix = "th";

if (n === 1) { suffix = "st"; }
if (n === 2) { suffix = "nd"; }

console.log("+--------------------------------------------------+");
console.log("| The " + n + suffix + " rotating prime number is " + i);
console.log("+--------------------------------------------------+");