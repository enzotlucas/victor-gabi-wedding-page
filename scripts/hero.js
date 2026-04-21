
const targetDate = new Date("2026-09-19T16:15:00");
const oneSecond = 1000;

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        daysEl.textContent = 0;
        hoursEl.textContent = 0;
        minutesEl.textContent = 0;
        secondsEl.textContent = 0;

        // opcional: trocar título
        document.querySelector(".title").textContent = "O grande dia CHEGOU!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
}

function startCountdown() {
    setInterval(updateCountdown, oneSecond);

    updateCountdown();
}

