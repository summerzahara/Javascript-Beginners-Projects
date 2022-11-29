// Call HMTL Elements
const watch = document.querySelector(".timer");
const start_btn = document.getElementById("start")
const stop_btn = document.getElementById("stop")
const reset_btn = document.getElementById("reset")

let counter = 0;
let interval = null;

// Event Listener
start_btn.addEventListener("click", startTimer);
stop_btn.addEventListener("click", stopTimer);
reset_btn.addEventListener("click", resetTimer);

// Timer function
function stopWatch() {
    counter++

    let hours = Math.floor(counter / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    
    let minutes = Math.floor((counter - (hours * 3600)) / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    let seconds = counter % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    watch.innerText = `${hours}:${minutes}:${seconds}`;
}

// Start Timer
function startTimer() {
    if (interval) {
        return
    }

    interval = setInterval(stopWatch, 1000);
}

// Stop Timer
function stopTimer() {
    clearInterval(interval);
    interval = null;
}

// Reset Timer
function resetTimer() {
    stop();
    counter = 0;
    watch.innerText = "00:00:00";
}