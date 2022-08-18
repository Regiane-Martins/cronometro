let sec = 0;
let min = 0;
let hr = 0;
let interval;

function start() {
  interval = setInterval(watch, 1000);
}

function pause() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  document.getElementById("watch").innerText = "00:00:00";
}

function stp() {
  clearInterval(interval);
}

function watch() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hr++;
  }

  document.getElementById("watch").innerText =
    hr.toString().padStart(2, "0") +
    ":" +
    min.toString().padStart(2, "0") +
    ":" +
    sec.toString().padStart(2, "0");
}
