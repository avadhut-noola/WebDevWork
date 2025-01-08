/* Create a BMI calculator using JavaScript functions.
Formula for BMI calculation: weight / height ^ 2
Try to code in less lines*/

function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / Math.pow(height,2));
    return bmi;
}

weight = prompt("Enter weight in kilograms: ")
height= prompt("Enter weight in meters: ")
bmiCalculator(weight, height);