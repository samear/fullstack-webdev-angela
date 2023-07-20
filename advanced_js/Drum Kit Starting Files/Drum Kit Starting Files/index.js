//detecting button - listen only for specific button that have drum class
var size = document.querySelectorAll(".drum").length;

for(var i=0; i<size; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() { //anonymous function sas action as above
    
        var buttonInnerHTML = this.innerHTML;

        console.log("Button click => " + buttonInnerHTML);

        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//detecting keyboard press - listen for the enter HTML doc
document.addEventListener("keydown", function(event) {
    makesound(event.key);
    console.log("Keydown -> " + event.key);
    buttonAnimation(event.key);
});

function makesound(key) {

    switch(key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            break;
        
         case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log('invalid key.')
    }
}

function buttonAnimation(currentkey) {
    console.log("current key: " + currentkey);
    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    // set button back to its original color
    // setTimeout is similar sleep function -- see https://www.w3schools.com/jsref/met_win_settimeout.asp
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}