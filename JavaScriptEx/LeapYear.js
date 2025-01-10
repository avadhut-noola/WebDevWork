function isLeap(year) {

    /* Finding leap year rules: 
    1. Evenly Divisible by 4 -> Leap
    2. Evenly Divisible by 400 -> Leap
    3. Not Leap if divisible by 100 */

    if( ((year % 4) === 0 && (year % 100) !== 0 ) || (year % 400) === 0 ) {
        console.log("Leap year.");

        } else {
        console.log("Not leap year.");
        }
    }

isLeap(prompt("Enter a year"));