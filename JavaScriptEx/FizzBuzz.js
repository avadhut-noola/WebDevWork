    /* FizzBuzz is popular game where
    1-100 Numbers will be printed with rules:
    For multiples of 3-> Fizz
    For multiples of 5-> Buzz
    For multiples of 3 & 5 both-> FizzBuzz will be called.
    */

    let output = [];
    let counter = 0;
    
    function fizzBuzz() {
        counter++;
        
        if((counter % 3 === 0) && (counter % 5 === 0)) {
            output.push("FizzBuzz");
        }
        else if(counter % 3 === 0 ) {
            output.push("Fizz");
        }
        else if(counter % 5 === 0) {
            output.push("Buzz");
        }  else {
            output.push(counter);
        }
    }

    //main code:

    let length= prompt("Enter no. for FizzBuzz series: ")

    for(let i = 0; i<length; i++) {
        fizzBuzz();
    }

    //Print result array:
    console.log(output);