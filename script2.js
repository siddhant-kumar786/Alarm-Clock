let editTimer = document.querySelector('.editTimer');
let setTimerOption = document.getElementById("setTimerOption");
let start = document.querySelector('#start');
let setBtnTimer = document.getElementById('settimer');
let setimerHours = document.getElementById('setimerHours');
let setimerMinutes = document.getElementById('setimerMinutes');
let setimerSeconds = document.querySelector('#setimerSeconds');
let disHours = document.querySelector('.timerHours');
let disMinutes = document.querySelector('.timerMinutes');
let disSeconds = document.querySelector('.timerSeconds');
let timerSeBtn = document.querySelector('.second');

let timerIdOfTimer, timeForTimerRang;
let outputTimer = "00", output1Timer = "00", output2Timer = "00";
let timerIsSet = false, startButtonClicked = false; 
let hour, minute, second;
let setimerSong;
let songPlayed = false;

editTimer.addEventListener('click', () => {

    if(songPlayed == true)
    {
        alert("Please Stop the song first");
    }
    else{
        setTimerOption.style.display = "flex";
    clearInterval(timerIdOfTimer);
    }
    
});
timerSeBtn.addEventListener('click', ()=>{
    document.getElementById('alarmclock').style.display = "none";
    document.getElementById('clocktimer').style.display = "flex";
    document.getElementById('StopWatch').style.display = "none";
    
})

setBtnTimer.addEventListener('click', () => {
    getOptionsTimer();
    setTimerOption.style.display = "none";
    startButtonClicked = false;
    timerIsSet = true;
    start.style.backgroundColor = "green";
    start.innerHTML = "Start";
});

start.addEventListener('click', () => {
    if (timerIsSet && !startButtonClicked) {
        timerStartfunc();
        startButtonClicked = true;
        start.style.backgroundColor = "red";
        start.innerHTML = "Stop";
    } else if (startButtonClicked) {
        stopTimer();
    } else {
        alert('Please set the timer first.');
    }
});

function timerStartfunc() {
    hour = Number.parseInt(outputTimer);
    minute = Number.parseInt(output1Timer);
    second = Number.parseInt(output2Timer);

    timerIdOfTimer = setInterval(() => {
        second--;
        if (second == -1) {
            minute--;
            second = 59;
        }
        if (minute == -1) {
            minute = 59;
            hour--;
        }
        if (hour === 0 && minute === 0 && second === 0) {
            songPlayed = true;
            setimerSong.play();
            clearInterval(timerIdOfTimer);
        }
        disHours.innerHTML = String(hour).padStart(2, '0');
        disMinutes.innerHTML = String(minute).padStart(2, '0');
        disSeconds.innerHTML = String(second).padStart(2, '0');
    }, 1000);
}

function stopTimer() {
    start.style.backgroundColor = "green";
    start.innerHTML = "Start";
    clearInterval(timerIdOfTimer);
    clearInterval(timeForTimerRang);
    if (songPlayed) {
        setimerSong.pause();
        songPlayed = false;
        timerIsSet = false;
        startButtonClicked = false;
    } else {
        timerIsSet = true;
        startButtonClicked = false;
        outputTimer = disHours.innerHTML;
        output1Timer = disMinutes.innerHTML;
        output2Timer = disSeconds.innerHTML;
        hour = Number.parseInt(outputTimer);
        minute = Number.parseInt(output1Timer);
        second = Number.parseInt(output2Timer);
    }
}

function getOptionsTimer() {
    outputTimer = setimerHours.value;
    disHours.innerHTML = String(outputTimer).padStart(2, '0');

    output1Timer = setimerMinutes.value;
    disMinutes.innerHTML = String(output1Timer).padStart(2, '0');

    output2Timer = setimerSeconds.value;
    disSeconds.innerHTML = String(output2Timer).padStart(2, '0');

    let songName = "alarm";
    let timersong = document.getElementById('timersong').value;
    setimerSong = new Audio(songName + timersong + ".mp3");
}

timeForTimerRang = setInterval(() => {
    if (hour === 0 && minute === 0 && second === 0 && !songPlayed) {
        songPlayed = true;
        setimerSong.play();
        clearInterval(timerIdOfTimer);
    }
}, 1000);
