var timerTxt = document.querySelectorAll("span");
var actionBtns = document.querySelectorAll("button");
var interval;
var msecs = 0, secs = 0, mins = 0;

document.onload = resetTimer();

function resetTimer() {
    stopTimer();
    msecs = 0, secs = 0, mins = 0;
    timerTxt.forEach(element => {
        element.innerText = '--';
    });
}

function startTimer() {
    if(!interval){
        interval = setInterval(updateTimer, 100)
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function updateTimer() {
    msecs++;
    if(msecs > 10)
    {
        msecs = 0;
        secs++;
        if(secs >= 60)
        {
            secs = 0;
            mins++;
        }
    }

    timerTxt[2].innerText = msecs < 10? '0' + msecs: msecs
    timerTxt[1].innerText = secs < 10? '0' + secs: secs
    timerTxt[0].innerText = mins < 10? '0' + mins: mins
}