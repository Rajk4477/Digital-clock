console.log(new Date());

function clock() {
    const fullDate = new Date();
    let hour = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let sec = fullDate.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;

    }
    if (mins < 10) {
        mins = "0" + mins;

    }
    if (sec < 10) {
        sec = "0" + sec;

    }

    document.getElementById('Hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = ":" + mins;
    document.getElementById('seconds').innerHTML = ":" + sec;


}
setInterval(clock, 1000);