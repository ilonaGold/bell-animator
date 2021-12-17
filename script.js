const audio = new Audio("jingle_bells.mp3");
const gif = "santa_dancing.gif";
const bells = document.getElementsByClassName("bells");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const container = document.querySelector(".container");
const greeting = document.getElementById("greeting");
let audioDuration;

playBtn.addEventListener("click", play);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);

function play() {
    audio.play()
    for (let i = 0; i < bells.length; i++) {
        bells[i].classList.add("animate");
        bells[i].style.animationPlayState = "running";
    }
    audioDuration = setTimeout(() => {
        stop();
    }, 102000);
}
 
function pause() {
    audio.pause()
    for (let i = 0; i < bells.length; i++) {
        bells[i].style.animationPlayState = "paused";
    }
    container.style.backgroundImage = "url('santa_dancing.jpg')";
 }

function stop() {
    audio.pause();
    audio.currentTime = 0;
    for (let i = 0; i < bells.length; i++) {
        bells[i].classList.remove("animate");
    }
    container.style.backgroundImage = "none";
    greeting.textContent = "🎄 Jingle all the way! 🎄";
}

function santaDancing() {
    container.style.backgroundImage = "url('santa_dancing.gif')";
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundPosition = "center";
    container.style.backgroundSize = "cover";
    greeting.textContent = "";
}

playBtn.addEventListener("click", santaDancing);





