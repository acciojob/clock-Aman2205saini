//your JS code here. If required.
  function updateTimer() {
            const timerElement = document.getElementById('timer'); // Get the p tag with id 'timer'
            const now = new Date(); // Create a new Date object representing the current date and time

            // Format the time and date in a human-readable format
            const formattedTime = now.toLocaleString();

            // Update the content of the 'timer' element with the formatted date and time
            timerElement.textContent = formattedTime;
        }

        // Call updateTimer once when the page loads
        updateTimer();

        // Set an interval to update the timer every 1000ms (1 second)
        setInterval(updateTimer, 1000);