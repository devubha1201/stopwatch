let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    timer = setInterval(updateTime, 10);
    isRunning = true;
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  isRunning = false;
  document.querySelector('.time').innerHTML = formatTime();
}

function updateTime() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  document.querySelector('.time').innerHTML = formatTime();
}

function formatTime() {
  return `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
}

function padTime(value) {
  return value < 10 ? `0${value}` : value;
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
