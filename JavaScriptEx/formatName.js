/*  Create a function to format the name entered by user from any case
    to only Sentence case (First Letter capital)

    Challenge: You can only use String slicing and concatenation.
    No pre-built functions, if-else etc.
    Give an alert saying back hello with the formatted name.
*/

function formatName(userName) {
    // First letter slice + remaining string with lowercase
    let formattedName = (userName.slice(0, 1)).toUpperCase() + (userName.slice(1, userName.length)).toLowerCase();
    alert("Hello " + formattedName);
}

let userName = prompt("Enter your name: ");
formatName(userName);