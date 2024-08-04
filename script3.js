let startStopwatch = document.querySelector('.startStopwatch');
let resetStopwatch = document.querySelector('.resetStopwatch');
let lapStopWatch = document.querySelector('.lapStopWatch');
let stopStopWatch = document.querySelector('.stopStopWatch');
let disStopHours = document.querySelector('.stopHours');
let disStopMinutes = document.querySelector('.stopMinutes');
let disStopSeconds = document.querySelector('.stopSeconds');
let disStopmilli = document.querySelector('.milliSeconds');
startStopwatch.addEventListener('click', startingstopWatchfunc);
stopStopWatch.addEventListener('click', stopStopWatchfunc);
resetStopwatch.addEventListener('click', resetStopwatchfunc);
lapStopWatch.addEventListener('click', lapStopWatchfunc);
let stopWatchTimerId, stopWhour = 0, stowWminute = 0, stopWsecond = 0, stopWmilli = 0;

function startingstopWatchfunc()
{
    stopStopWatch.style.display ="inline";
    lapStopWatch.style.display = "inline";
    resetStopwatch.style.display ="none";
    startStopwatch.style.display = "none";

    stopWatchTimerId = setInterval(() => {
        stopWmilli++;
        
        if (stopWmilli == 100) {
            stopWsecond++;
            stopWmilli = 0;
        }
        if (stopWsecond == 60) {
            stowWminute++;
            stopWsecond = 0;
        }
        if (stowWminute == 60) {
            stopWhour++;
            stowWminute = 0;
        }
        disStopHours.innerHTML = stopWhour;
        disStopMinutes.innerHTML = stowWminute;
        disStopSeconds.innerHTML = stopWsecond;
        disStopmilli.innerHTML = stopWmilli;
        
        disStopHours.innerHTML = String(stopWhour).padStart(2, '0');
        disStopMinutes.innerHTML = String(stowWminute).padStart(2, '0');
        disStopSeconds.innerHTML = String(stopWsecond).padStart(2, '0');
        disStopmilli.innerHTML = String(stopWmilli).padStart(2, '0');
    }, 10);
}

function stopStopWatchfunc()
{
    clearInterval(stopWatchTimerId);
    stopStopWatch.style.display ="none";
    lapStopWatch.style.display = "none";
    resetStopwatch.style.display ="inline";
    startStopwatch.style.display = "inline";
}

function resetStopwatchfunc()
{
    clearInterval(stopWatchTimerId);


        let elements = document.querySelectorAll('.lapTime');
        elements.forEach(element => element.remove());

    stopWhour = 0, stowWminute = 0, stopWsecond = 0, stopWmilli = 0;
    disStopmilli.innerHTML = stopWmilli;
    disStopHours.innerHTML = stopWhour;
    disStopMinutes.innerHTML = stowWminute;
    disStopSeconds.innerHTML = stopWsecond;
    
    disStopHours.innerHTML = String(stopWhour).padStart(2, '0');
    disStopMinutes.innerHTML = String(stowWminute).padStart(2, '0');
    disStopSeconds.innerHTML = String(stopWsecond).padStart(2, '0');
    disStopmilli.innerHTML = String(stopWmilli).padStart(2, '0');
}

function lapStopWatchfunc(){
    let lapTime = `${String(stopWhour).padStart(2, '0')}:${String(stowWminute).padStart(2, '0')}:${String(stopWsecond).padStart(2, '0')}:${String(stopWmilli).padStart(2, '0')}`;
    console.log(lapTime)
    let lapElement = document.createElement('div');
    lapElement.className = 'lapTime';
    lapElement.innerText = lapTime;
    lapStopWatchCont.appendChild(lapElement);
}


let stopWatchseBtn = document.querySelector('.third');
stopWatchseBtn.addEventListener('click', ()=>{
    document.getElementById('alarmclock').style.display = "none";
    document.getElementById('clocktimer').style.display = "none";
    document.getElementById('StopWatch').style.display = "flex";
    
})

