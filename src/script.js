const startingMinutes = 30;
let time = startingMinutes * 60;
var cron;

const countdownEl = document.getElementById('counter');

function start()
{

    if (time == 1800)
    {
        cron = setInterval(timer, 1000);
    }
}

function pause()
{
    clearInterval(cron);
}

function reset()
{
    clearInterval(cron);
    time = startingMinutes * 60;

    countdownEl.innerText = '30 : 00';
}

function timer()
{
    const minutes = Math.floor(time / 60);
    let seconds = (time - 1) % 60;
    
    countdownEl.innerHTML = `${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`;
    time--;
    if (time == 0)
    {
        time = startingMinutes * 60;
        countdownEl.innerHTML = `${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`;
        pause();
    }
}

