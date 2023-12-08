const clock = document.querySelector(".clock");

function nowTime() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, 0);
  const min = String(now.getMinutes()).padStart(2, 0);
  const sec = String(now.getSeconds()).padStart(2, 0);
  clock.innerText = `${hour} : ${min} : ${sec}`;
}

setInterval(nowTime, 1000);
