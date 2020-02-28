var main = "現在、整備中";
var space = '&nbsp;';
var dot = '.';
var count = 0;

var interval = function () {
    var element = document.getElementById("title");
    var text = main;
    switch (count) {
        case 0:
            text += space + space + space;
            break;
        case 1:
            text += dot + space + space;
            break;
        case 2:
            text += dot + dot + space;
            break;
        case 3:
            text += dot + dot + dot;
            break;

    }
    count++;
    if (count > 3) {
        count = 0;
    }
    element.innerHTML = text;
}

setInterval(interval, 1000);
