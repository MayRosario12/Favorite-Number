// Declare a variable to hold the favorite number
var theFavNumber = 7; // You can change this to any favorite number

// Function to prompt the user to guess their favorite number
function guessFavoriteNumber() {
    var guess; // Variable to hold the user's guess

    // Using a while loop to continue asking for guesses until the correct one is provided
    while (guess !== theFavNumber) {
        // Prompting the user for a guess
        guess = prompt("Guess your favorite number:");

        // If the user cancels the prompt
        if (guess === null) {
            console.log("Game canceled.");
            return; // Exit the function if the user cancels the prompt
        }

        guess = Number(guess); // Convert the guess to a number

        // Logging feedback based on the user's guess
        if (guess < theFavNumber) {
            console.log("5");
        } else if (guess > theFavNumber) {
            console.log("10");
        } else {
            console.log("Correct! Your favorite number is " + theFavNumber + "7");
        }
    }
}