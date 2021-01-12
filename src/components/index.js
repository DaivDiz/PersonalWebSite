var btns = document.getElementsByTagName('input');
// var section = (location.href).split("#sec")[1];
var views = document.getElementsByTagName('section');
var cont = 1;
var aL = document.getElementById('Arrow_L');
var aR = document.getElementById('Arrow_R');
location.href = "#sec1";
btns[0].checked = "true";

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 39) {
        comp("+");
    }
    if (e.keyCode === 37) {
        comp("-");
    }
})

aL.addEventListener('click', () => {
    comp("-")
})

aR.addEventListener('click', () => {
    comp("+");
})

function comp(op) {
    if (op == "+") {
        cont++;
    }
    if (op == "-") {
        cont--;
    }
    if (cont > views.length) {
        cont = 1;
    }
    if (cont < 1) {
        cont = views.length;
    }

    btns[cont - 1].checked = "true";
    location.href = "#sec" + cont.toString();
}

var c = document.getElementById('BackgroundCanvas');
var $ = c.getContext('2d');

var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;

var draw = function() {
    $.lineWidth = 0.8;
    // $.fillStyle = 'rgba(0, 0, 0, 0.5)';
    $.fillRect(0, 0, w, h);

    for (var i = -400; i < 350; i += 10) {
        $.strokeStyle = 'rgba(255, 125, 0, 0.8)';
        $.beginPath();
        $.moveTo(-400, h / 2);
        for (var j = -500; j < w; j += 4) {
            $.lineTo(5 * Math.cos(i) +
                j + (0.01 * 100 * j),
                Math.floor(h / 2 + j / 2 *
                    Math.cos(j / 50 - t / 50 - i / 118) +
                    (i * 0.9) * Math.cos(j / 25 - (i + t) / 65)));
        }
        $.stroke();
    }
}
var t = 0;

window.addEventListener('resize', function() {
    c.width = w = window.innerWidth;
    c.height = h = window.innerHeight;
}, false);

var run = function() {
    window.requestAnimationFrame(run);
    t += 5;
    draw();
};

run();


var txtContent = document.getElementsByClassName('txt');
var col = document.getElementsByClassName('col');

for (let i = 0; i < col.length; i++) {
    col[i].addEventListener("mouseenter", () => {
        txtContent[i].style.display = "flex";
        col[i].style.height = "300px";
    })
}
for (let i = 0; i < col.length; i++) {
    col[i].addEventListener("mouseleave", () => {
        txtContent[i].style.display = "none";
        col[i].style.height = "150px";
    })
}