let ampm = document.getElementById("ampm");

function displayDate() {
  let date = new Date();
  //time
  let hours = date.getHours();
  let minut = date.getMinutes();
  let second = date.getSeconds();
   //date
  let dates = date.getDate();
  let mon = date.getMonth();
  let year = date.getFullYear();

  document.getElementById("date").innerHTML = zero(dates);
  document.getElementById("month").innerHTML = zero(mon);
  document.getElementById("years").innerHTML = year;

  if (hours > 12) {
    hours = hours - 12;
    ampm.innerHTML = "PM";
  }

  document.getElementById("hours").innerHTML = zero(hours);
  document.getElementById("mins").innerHTML = zero(minut);
  document.getElementById("seconds").innerHTML = zero(second);
}

function zero(num) {
  return num < 10 ? "0" + num : num;
}

setInterval(displayDate, 500);
