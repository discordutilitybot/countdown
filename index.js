var countDownDate = new Date("Feb 1, 2021 12:00:00").getTime();
function timer() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
        
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    document.getElementById("timer").innerHTML = days + "d  " + hours + "h  "
    + minutes + "m  " + seconds + "s";
}

var x = setInterval(function() {
    timer();
}, 1000);
timer();