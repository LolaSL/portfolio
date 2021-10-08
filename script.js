function myAnimation() {
    location.reload();
}


var colors = ["yellow", "white", "teal", "coral", "lime", "lightgrey"];
index = 0;
document.getElementById("button").onclick = function changeColors() {
    document.body.style.background = colors[index];
    index = (index + 1) % colors.length;
}

setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("nav__item_timeline").innerHTML = d.toLocaleTimeString();
}

