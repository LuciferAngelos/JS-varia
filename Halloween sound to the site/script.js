let x = document.querySelector('#sound');
let scream = false;
let screamInterval = 10000;
let interval = 0;

document.querySelector('.halloween').onclick = randomInterval;

x.onended = function () {
    scream = false;
    if (interval == 0) {
        randomInterval();
    }
}

function randomInterval() {
    if (interval == 0 && scream == false) {
        interval = Math.random() * screamInterval;      //случайный интервал
        console.log(interval)
        setTimeout(playAudio, interval);
        document.querySelector('.halloween').classList.add('halloween-active');
        scream = true;
    } else {
        clearInterval(interval);
        interval = 0;
        scream = false;
        document.querySelector('.halloween').classList.remove('halloween-active');
        playAudio();
    }
}

function playAudio() {
    if (scream) {
        x.play();
        interval = 0;
    } else {
        x.pause();
    }
}