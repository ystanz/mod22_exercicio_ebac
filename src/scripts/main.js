const eventDate = new Date("Nov 19, 2023 19:00:00");
const timeStempEvent = eventDate.getTime();

const countsTime = setInterval(function() {
    const currentTime = new Date();
    const timeStempCurrentTime = currentTime.getTime();

    const distanceToEvent = timeStempEvent - timeStempCurrentTime;

    const daysMs = 1000 * 60 * 60 * 24;
    const hourMs = 1000 * 60 * 60;
    const minMs = 1000 * 60;

    const daysToEvent = Math.floor(distanceToEvent / daysMs);
    const hoursToEvent = Math.floor((distanceToEvent % daysMs) / hourMs);
    const minToEvent = Math.floor((distanceToEvent % hourMs) / minMs);
    const secToEvent = Math.floor((distanceToEvent % minMs) / 1000);
    
    const timer = document.querySelector('#countdown');

    timer.innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minToEvent}m e ${secToEvent}s`;

    if (distanceToEvent < 0) {
        clearInterval(countsTime);
        timer.innerHTML = "Agora já passou, até ano que vem! ;P"
    }
}, 1000)