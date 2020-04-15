function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                       "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[now.getDay()];
}

function greeting(date) {
  return `Hello world! It's ${dayName(date)}!`;
}