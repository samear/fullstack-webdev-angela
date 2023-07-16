function bmiCalculater(weight, height) {
    var interpretation;
    var bmi = weight / Math.pow(height, 2);
    
    bmi = Math.floor(bmi);

    if(bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    if(bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    if(bmi > 24.9) {
        interpretation = "Your BMI is "+ bmi + ", so you are overweight.";
    }
    

    return interpretation;
}

console.log(bmiCalculater(65, 1.8));