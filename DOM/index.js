    var t = 5000;
    h1Str = "Good Bye";

    /* setTimeout(function() {
        console.log("waiting... " + t + "ms");
        console.log("now change text in h1 to " + h1Str)
        document.querySelector("h1").innerHTML = "Good Bye";
    }, t) */

    const myTimeou = setTimeout(myGreeting, t);

    function myGreeting() {

        document.querySelector("h1").innerHTML = h1Str;
    }
