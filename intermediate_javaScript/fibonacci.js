function fibonacciGenerator(n) {
    var array = [];
    var value = 0;

    if(n === 1) {
        array.push(0);
    }
    else if(n === 2) {
        array.push(0);
        array.push(1);
    }
    else {
        array = [0, 1];
        for(i=0; i<n - 2; i++) {
            value = array[i] +array[i+1]
            array.push(value);
        }
    }
    console.log(array);
}
output = fibonacciGenerator(2);
console.log(output);