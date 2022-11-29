const clock = document.querySelector(".clock");
let timeOut = setTimeout(displayTime, 1000);

function displayTime() {
    let date =  new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let morning_night = "AM"

    if (hours > 12) {
        hours = hours - 12;
        morning_night = "PM";
    }
    
    if (hours < 10) {
        hours = "0" + hours;
    }
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    

    let currentTime = `${hours}:${minutes}:${seconds} ${morning_night}`;

    clock.innerText = currentTime;
}

