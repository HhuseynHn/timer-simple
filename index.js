/** @format */

let pause = document.querySelector(".pause");
let contnue = document.querySelector(".continue");
let reset = document.querySelector(".reset");
let timeShow = document.querySelector(".time-show");

let numberTime = 0;
function startTime() {
  numberTime += 1;
  timeShow.innerHTML = numberTime;
}
let interval;
let control = true;
contnue.addEventListener("click", () => {
  if (control) {
    interval = setInterval(startTime, 1000);
    control = false;
  }
});

pause.addEventListener("click", () => {
  clearInterval(interval);
  control = true;
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  numberTime = 0;
  timeShow.innerHTML = 0;
  control = true;
});
