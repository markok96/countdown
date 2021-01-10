const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

let countdownDate = new Date("Jan 1, 2022 00:00:00").getTime();

function updateCount(){
    let currentTime = new Date().getTime();

    let distance = countdownDate - currentTime;

    let daysCalculation = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hoursCalculation = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesCalculation = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondsCalculation = Math.floor((distance % (1000 * 60)) / 1000);
    
    days.innerHTML = `${formatTime(daysCalculation)}`;
    hours.innerHTML = `${formatTime(hoursCalculation)}`;
    minutes.innerHTML = `${formatTime(minutesCalculation)}`;
    seconds.innerHTML = `${formatTime(secondsCalculation)}`;
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

updateCount();

setInterval(updateCount, 1000);