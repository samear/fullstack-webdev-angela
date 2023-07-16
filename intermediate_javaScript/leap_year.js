function isLeap(year) {

    if(year % 4 === 0) {
        if(year % 100 === 0) {
            if(year % 400 === 0) {
                return "Leap2";
            }
            else {
                return "Not Leap2";
            }
        }
        else {
            return "Leap1"
        }
    }
    else {
        return "Not Leap";
    }
}

console.log(isLeap(2000000));