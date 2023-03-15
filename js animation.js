var x = 0, y = 0, d = "right";

function glow(s) {
    document.querySelector("." + s).classList.toggle("glow");
    var t = setInterval(function() {
        document.querySelector("." + s).classList.toggle("glow");
        clearInterval(t);
    }, 80);
    window.navigator.vibrate(80);
}

function move(s) {
    
    if (!!s) {
        d = s;
        glow(s);
    }

    switch(d) {
        case "right":
            x = (x + 1) % 251;
            break;
        case "down":
            y = (y + 1) % 251;
            break;
        case "left":
            x = (x + 250) % 251;
            break;
        case "up":
            y = (y + 250) % 251;
    }
    
    var e = document.querySelector(".block");
    e.style.left = x + "px";
    e.style.top = y + "px";
}

setInterval(move, 10);