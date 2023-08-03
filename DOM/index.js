    var t = 5000;
    h1Str = "Good Bye";
    console.log("waiting... for " + t +"ms. before changing header.")
    document.querySelector('p').innerHTML="running index.js";

    //setTimeout(myGreeting, t);

    /* function myGreeting() {
        document.querySelector("h1").innerHTML = h1Str;
        document.querySelector('h1').style.color='red';
        console.log("done.")
    } */

    // same as above, this is called anonymous function
    setTimeout(function() {
        document.querySelector("h1").innerHTML=h1Str;
        document.querySelector('h1').style.color='red';
        console.log("done.")}, t)

    document.querySelector("a").style.color='red';
    document.querySelectorAll("a")[1].style.color='green';