/*
Create a function that tells us how many days, weeks and months we have left if we live until 90 years old.

It will take your current age as the input and console.logs a message with our time left in this format:
You have x days, y weeks, and z months left.
Where x, y and z are replaced with the actual calculated numbers.

For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.
*/

function lifeInWeeks(age) {

        let remainingYears = 90-age;
        let days = 365 * remainingYears;
        let weeks = 52 * remainingYears;
        let months = 12 * remainingYears;

        console.log("You have "+ days + " days, " + weeks+ " weeks, and "+ months +" months left.")
}

age= prompt("What is your age? ");
lifeInWeeks(age);