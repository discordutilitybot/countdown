var countDownDate = new Date("Feb 1, 2021 12:00:00").getTime();

function timer() {
    var e = (new Date).getTime(),
        t = countDownDate - e,
        n = Math.floor(t / 864e5),
        o = Math.floor(t % 864e5 / 36e5),
        r = Math.floor(t % 36e5 / 6e4),
        a = Math.floor(t % 6e4 / 1e3);
    document.getElementById("timer").innerHTML = n + "d  " + o + "h  " + r + "m  " + a + "s"
}
var x = setInterval(function() {
    timer()
}, 1e3);
timer();
