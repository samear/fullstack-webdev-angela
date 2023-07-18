function bottleOfBeer() {
    count = 100;
    while(count > 0) {
        count--;

        //console.log(count + " bottle of beer on the wall, " + count + " bottle of beer. Take " + count + " down, pass it around, " + count + " bottle of beer on the wall.");

        if(count === 0) {
            console.log("No more bottles of beer on the wall, no more bottles of beer.  Go to the store and buy some more, 99 bottles of beer on the wall.")
        }
        else {
            console.log(count + " bottle of beer on the wall, " + count + " bottle of beer. Take " + count + " down, pass it around, " + count + " bottle of beer on the wall.");
        }
    }
    
}