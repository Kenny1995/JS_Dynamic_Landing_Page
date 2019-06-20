// DOM Elements Selection
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

// Show Time
const ShowTime = () => {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  hour = hour % 12 || 12;

  //ouput Time
  time.innerHTML = `${AddZero(hour)}<span>:</span>${AddZero(
    min
  )}<span>:</span>${AddZero(sec)} ${amPm}`;

  setTimeout(ShowTime, 1000);
};

// Add Zeros to the time base
const AddZero = n => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

// set Background and Greeting
const setBgGreet = () => {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12) {
    document.body.style.backgroundImage = "url('./img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    document.body.style.backgroundImage = "url('./img/night.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
};

// Run
ShowTime();
setBgGreet();
