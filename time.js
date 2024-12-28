function updateClock() {
    const now = new Date();

    // Get current hours, minutes, seconds, and day
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const dayIndex = now.getDay();

    // Determine AM/PM
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight

    // Update time
    document.querySelector('.hour').textContent = hours.toString().padStart(2, '0');
    document.querySelector('.min').textContent = minutes.toString().padStart(2, '0');
    document.querySelector('.sec').textContent = seconds.toString().padStart(2, '0');
    document.querySelector('.period').textContent = period;

    // Update active day in the week
    const days = document.querySelectorAll('.week div');
    days.forEach((day, index) => {
        if (index === dayIndex) {
            day.classList.add('active');
        } else {
            day.classList.remove('active');
        }
    });
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
