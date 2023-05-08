setInterval(setClock, 1000);

const secondHand = document.getElementById("data-second-hand");
const minuteHand = document.getElementById("data-minute-hand");
const hourHand = document.getElementById("data-hour-hand");

function setRotation(element, rotationRatio) {
  element.style.setProperty("transform", `rotate(${rotationRatio * 360}deg)`);
  // element.style.setProperty("--rotation", rotationRatio * 360);
}

// function setSecondHandPosition(angle) {
//   const secondHand = document.getElementById("data-second-hand");
//   secondHand.style.setProperty("transform", `rotate(${angle}deg)`);
// }

// function setMinuteHandPosition(angle) {
//   const minuteHand = document.getElementById("data-minute-hand");
//   secondHand.style.setProperty("transform", `rotate(${angle}deg)`);
// }

// function setHourHandPosition(angle) {
//   const hourHand = document.getElementById("data-hour-hand");
//   secondHand.style.setProperty("transform", `rotate(${angle}deg)`);
// }

function setClock() {
  const currDate = new Date();
  const secondRatio = currDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currDate.getHours()) / 12;
  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hourHand, hourRatio);
}

setClock();
