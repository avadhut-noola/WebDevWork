/* Create a BMI calculator using JavaScript functions.
Formula for BMI calculation: weight / height ^ 2
Try to code in less lines*/

function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / Math.pow(height,2));

    //Updated bmi calculator with added: Message as per different bmi.
    if(bmi <18.5) {
        var interpretation = "Your BMI "+ bmi+", so you are underweight.";
    } 
    else if(bmi >= 18.5 && bmi <=24.9) {
        interpretation = "Your BMI is "+ bmi+", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is "+ bmi+", so you are overweight.";
    }

    return interpretation;
}

weight = prompt("Enter weight in kilograms: ")
height= prompt("Enter weight in meters: ")
bmiCalculator(weight, height);