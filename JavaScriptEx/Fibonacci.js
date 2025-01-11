let series = [];
    function fibonacciGenerator(length) {
        if(length === 1) {
                series = [0];
            }
            else if(length === 2) {
                series = [0, 1];
            } else {
                series = [0, 1];
                for(let i = 2; i<length; i++) {
                    series.push(series[series.length - 2] + series[series.length - 1]);
                }
            }
    }

    //main code:

    let length= prompt("Enter no. for fibonacci series: ");

    fibonacciGenerator(length);
    console.log(series);