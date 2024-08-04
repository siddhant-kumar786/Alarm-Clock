let string = "";
let dateString = "";
let showTime = document.getElementById("showTime");
let showDate = document.getElementById("showDate");
let alarmClkBtn = document.querySelector('.first');

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    day = d.getDate();
    dateString+=day;
    dateString+="/";
    string+=htime;
    string+=": " 
    mtime = d.getMinutes();
    months = d.getMonth();
    dateString+=months;
    dateString+="/";

    string+=mtime;
    string+=": ";
    stime = d.getSeconds();
    year = d.getFullYear();
    dateString+=year;
    string+=stime;
    showTime.innerHTML = string;
    showDate.innerHTML = dateString;
    string = "";
    dateString ="";


}, 1000);

// Add or remove alarm
let setAlarm = document.getElementById('setalarm');
let fixedAlarm = document.getElementById('set');
let content = document.getElementById('content');
let setAlarmOption = document.getElementById('setAlarmOption');
let afterAlarmSet = document.getElementById('afterAlarmSet');
let timeSelect = document.getElementById('timeSelect');
let stopAlarmbtn = document.getElementById('stop');
let mode = document.querySelector('.mode');

let navbar = document.querySelector('nav');
setAlarm.addEventListener('click', ()=>{
    content.classList.add('opacityset');
    setAlarmOption.style.display = "flex";
    setAlarm.style.display = "none";  
})
alarmClkBtn.addEventListener('click', ()=>{
    document.getElementById('clocktimer').style.display = "none";
    document.getElementById('alarmclock').style.display = "flex";
    document.getElementById('StopWatch').style.display = "none";
})

fixedAlarm.addEventListener('click', ()=>{
    content.style.display = "flex";
    setAlarmOption.style.display = "none";
    afterAlarmSet.style.display ="flex";
    setAlarm.style.display = "none";
    content.style.backgroundColor = "#4e4e54";
    content.classList.remove('opacityset');
    getOptions();

})

stopAlarmbtn.addEventListener('click', ()=>{
    afterAlarmSet.style.display = "none";
    content.style.backgroundColor = "black";
    setAlarm.style.display = "flex";
    clearInterval(timerId);
    m.pause();

})
let darkmode = true;
mode.addEventListener('click', () => {
    if (darkmode) {
        navbar.style.backgroundColor = "#007abc";
        content.style.backgroundColor = "white";
        document.getElementById('clocktimer').style.backgroundColor = "white";
        document.getElementById('StopWatch').style.backgroundColor = "white";
        darkmode = false;
    } else {
        navbar.style.backgroundColor = "#4e4e4e";
        content.style.backgroundColor = "black";
        document.getElementById('clocktimer').style.backgroundColor = "black";
        document.getElementById('StopWatch').style.backgroundColor = "black";
        darkmode = true;
    }
});



let settimeAlarm = document.querySelector('.setTime');
let selectHours = document.querySelector('#Hours');
let selectMinutes = document.querySelector('#Minutes');
let output, output1, m;
function getOptions()
{
    output = selectHours.value;
    settimeAlarm.innerHTML = output;
    settimeAlarm.innerHTML += ': '

    
    output1 = selectMinutes.value;
    settimeAlarm.innerHTML += output1;

let songName ="alarm";
let song = document.getElementById('song');
songName+=song.value;
m = new Audio(songName + ".mp3");
}


// alarm starts if the time completed
let alarmRing = false;
function playAlarmifTimeEnd() {
let d = new Date();
if ((output == d.getHours() && output1 == d.getMinutes()) || alarmRing) {
    alarmRing = true;
    m.play();
}
}

let timerId = setInterval(() => {
    playAlarmifTimeEnd();  
}, 1000);

// timer javascript code


