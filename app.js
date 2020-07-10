var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;
var histor = [];
var hist = document.getElementById("history");
var count = 0;

function timer() {
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60) {
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}
function start() {
    interval = setInterval(timer, 10);
    count = 0;
    document.getElementById("startbtn").disabled = true;
    document.getElementById("pausebtn").disabled = false;
    document.getElementById("resetbtn").disabled = false;
}
function stop() {
    clearInterval(interval);
    if (document.getElementById("startbtn").disabled == true) {
        histor.unshift(minHeading.innerHTML + " : " + secHeading.innerHTML + " : " + msecHeading.innerHTML);
    }
    document.getElementById("startbtn").disabled = false;
    document.getElementById("pausebtn").disabled = true;
}
function reset() {
    min = sec = msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    document.getElementById("startbtn").disabled = false;
    document.getElementById("pausebtn").disabled = true;
    document.getElementById("resetbtn").disabled = true;
    stop();
}
function showHistory() {
    if (count == 0) {
        hist.innerHTML = "<ul>";
        for (var i = 0; i < histor.length; i++) {
            hist.innerHTML += "<h2><li>" + histor[i].fontsize(6) + "</li></h2>";
        }
        hist.innerHTML += "</ul>";
        count = 1;
    }
    else if(count == 1) {
        hist.innerHTML = "";
        count = 0;
    }
}
function clearHistory() {
    hist.innerHTML = "";
    histor.splice(0);
}