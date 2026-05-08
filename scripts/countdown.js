
const targetDate = new Date("2026-09-19T16:15:00");
const oneSecond = 1000;

const daysCounter = document.getElementById("days");
const daysDescription = document.getElementById("days-description");
const daysLabel = "DIA"

const hoursCounter = document.getElementById("hours");
const hoursDescription = document.getElementById("hours-description");
const hoursLabel = "HORA"

const minutesCounter = document.getElementById("minutes");
const minutesDescription = document.getElementById("minutes-description");
const minutesLabel = "MINUTO"

const secondsCounter = document.getElementById("seconds");
const secondsDescription = document.getElementById("seconds-description");
const secondsLabel = "SEGUNDO"

function startCountdown() {
    if (!reachedTargetDate())
        setInterval(updateCountdown, oneSecond);

    updateCountdown();
}

function reachedTargetDate() {
    const now = new Date();
    const diff = targetDate - now;

    return diff <= 0;
}

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        updateContent(daysCounter, 0, daysDescription, daysLabel);
        updateContent(hoursCounter, 0, hoursDescription, hoursLabel);
        updateContent(minutesCounter, 0, minutesDescription, minutesLabel);
        updateContent(secondsCounter, 0, secondsDescription, secondsLabel);

        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    updateContent(daysCounter, days, daysDescription, daysLabel);
    updateContent(hoursCounter, hours, hoursDescription, hoursLabel);
    updateContent(minutesCounter, minutes, minutesDescription, minutesLabel);
    updateContent(secondsCounter, seconds, secondsDescription, secondsLabel);
}

function updateContent(counter, count, description, label) {
    counter.textContent = count;
    description.textContent = count > 1 ? label + "S" : label;
}

