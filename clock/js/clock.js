function updateDateTime() {
  const clockElement = document.getElementById("clock");
  const dateElement = document.getElementById("date");
  const now = new Date();

  // Get the date components
  const day = now.getDate();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();

  // Get the time components
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  // Update the date and time display
  dateElement.textContent = `${month} ${day}, ${year}`;
  clockElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();
