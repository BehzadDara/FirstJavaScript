function formatTime(unit, maxdigitCount) {
  return unit.toString().padStart(maxdigitCount, '0');
}

function updateClock() {
  const now = new Date();
  const hours = formatTime(now.getHours(), 2);
  const minutes = formatTime(now.getMinutes(), 2);
  const seconds = formatTime(now.getSeconds(), 2);
  const miliSeconds = formatTime(now.getMilliseconds(), 3);
  
  const timeString = `${hours}:${minutes}:${seconds}:${miliSeconds}`;

  document.getElementById('digital-clock').textContent = timeString;
}

setInterval(updateClock, 1);

updateClock();
