function whosPaying(names) {
    my_random_number = Math.random() * names.length;
    my_random_number = Math.floor(my_random_number);
    
    buyer = names[my_random_number];
    
    console.log(my_random_number);
    console.log(buyer + " is going to buy lunch today!")

}

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe", "Sam", "Rebecca"];

whosPaying(names);