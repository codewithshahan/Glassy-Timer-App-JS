// script.js
let countdown;

function startTimer() {
    const minutesInput = document.getElementById('minutesInput').value;
    const secondsInput = document.getElementById('secondsInput').value;

    let minutes = parseInt(minutesInput) || 0;
    let seconds = parseInt(secondsInput) || 0;
    let time = minutes * 60 + seconds;

    if (isNaN(time) || time <= 0) {
        alert('Please enter a positive number');
        return;
    }

    clearInterval(countdown); // Stop any previous timer

    countdown = setInterval(() => {
        let mins = Math.floor(time / 60);
        let secs = time % 60;
        document.getElementById('display').textContent = `Time: ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        if (time <= 0) {
            clearInterval(countdown);
            document.getElementById('display').textContent = 'Time: 00:00 - Time’s up!';
        }

        time--;
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    document.getElementById('display').textContent = 'Time: 00:00';
}

function incrementTime(type, amount) {
    const input = document.getElementById(`${type}Input`);
    let value = parseInt(input.value) || 0;
    input.value = Math.max(value + amount, 0);
}

function decrementTime(type, amount) {
    incrementTime(type, -amount);
}

function stopTimer() {
    clearInterval(countdown); // Stop the interval
}
