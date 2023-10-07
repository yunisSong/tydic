function getCurrentTime() {
  const now = new Date();
  // const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  return `${hours}:${minutes}`;
}

export default getCurrentTime;
