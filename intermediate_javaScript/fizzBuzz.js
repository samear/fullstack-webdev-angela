var output = [];
var count = 1;

function fizzBuzz() {

    while(count <= 100) {
        if(count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
            //count = count + 1;
        }
        else if(count % 3 === 0) {
            output.push("Fizz");
            //count = count + 1;
        }
        else if(count % 5 === 0) {
            output.push("Buzz");
            //count = count + 1;
        }
        else {
            output.push(count);
            //count++;
        }
        count++;
        //console.log(output);
    }
    console.log(output);
}
