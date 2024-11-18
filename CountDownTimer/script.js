const input = document.getElementById('timer-input');
const startButton = document.getElementById('start-button');
const timeDisplay = document.getElementById('time-display');

let countdownInterval;

function startCountdown() {
  let timeLeft = parseInt(input.value);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  input.disabled = true;
  startButton.disabled = true;

  timeDisplay.textContent = `Time remaining: ${timeLeft} seconds`;

  countdownInterval = setInterval(() => {
    timeLeft -= 1;
    timeDisplay.textContent = `Time remaining: ${timeLeft} seconds`;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      timeDisplay.textContent = "Time's up!";
      input.disabled = false;
      startButton.disabled = false;
    }
  }, 1000);
}

startButton.addEventListener('click', startCountdown);
