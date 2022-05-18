const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

let seconds = 0;
let interval;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);

function startTimer() {
  interval = setInterval(start, 1000);
}

function start() {
  seconds++;

  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = seconds % 60;

  if (h < 10) h = `0${h}`;
  if (m < 10) m = `0${m}`;
  if (s < 10) s = `0${s}`;

  display.textContent = `${h}:${m}:${s}`;
}

function pause() {
  interval = clearInterval(interval);
}

function reset() {
  pause();
  display.textContent = '00:00:00';
  seconds = 0;
}
