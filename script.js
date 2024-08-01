let string = "";
let dateString = "";
let showTime = document.getElementById("showTime");
let showDate = document.getElementById("showDate");
let m = new Audio("alarm.mp3");
// m.play();
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
    // content.style.display = "none";
    content.classList.add('opacityset');
    // content.style.backgroundColor = "black";
    setAlarmOption.style.display = "flex";
    setAlarm.style.display = "none";
    // setAlarmOption.classList.toggle('animate');
    
})

fixedAlarm.addEventListener('click', ()=>{
    content.style.display = "flex";
    setAlarmOption.style.display = "none";
    afterAlarmSet.style.display ="flex";
    setAlarm.style.display = "none";
    content.style.backgroundColor = "#4e4e54";
    content.classList.remove('opacityset');
    getOptions();
    matchingAlarmVsRealTime();
})

stopAlarmbtn.addEventListener('click', ()=>{
    afterAlarmSet.style.display = "none";
    content.style.backgroundColor = "black";
    setAlarm.style.display = "flex";
})
mode.addEventListener('click', ()=>{
    if(navbar.style.backgroundColor = "4e4e4e")
    {
        navbar.style.backgroundColor = "#007abc";
        content.style.backgroundColor = "white";
    }
    else{
        navbar.style.backgroundColor = "4e4e4e";
        content.style.backgroundColor = "black";
    }
})

let settimeAlarm = document.querySelector('.setTime');
let selectHours = document.querySelector('#Hours');
let selectMinutes = document.querySelector('#Minutes');
let selectAmPm = document.querySelector('#ampm');
let output, output1, output2;
function getOptions()
{
    
            output = selectHours.value;
            console.log(output);
            // console.log(typeof(output));
            settimeAlarm.innerHTML = output;
            settimeAlarm.innerHTML += ': '

            
            output1 = selectMinutes.value;
            settimeAlarm.innerHTML += output1;
            settimeAlarm.innerHTML += " ";

            
            output2 = selectAmPm.value;
            settimeAlarm.innerHTML+= output2;
}
// let newNum = 0;
function matchingAlarmVsRealTime()
{
    if(output2 === "AM" && output === "12")
    {
        output = "0";
    }
    if(output2 === "PM")
    {
        let count = 12;
        let newNum = Number.parseInt(output);
        if(newNum != 12)
            output = count + newNum;
        else 
            output = count;
    }
    console.log(output);
    console.log(output2);
}


let timerId = setInterval(() => {
    m.play();
}, 1000);




