const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

// рассчет времени
const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// вставляем год на фон
year.innerHTML = currentYear + 1;

// таймер
function updateCounter() {
  const currentTime = new Date();
  const difference = nextYear - currentTime;

  // перевод разници в дату
  const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
  const secondsLeft = Math.floor(difference / 1000) % 60;

  // записываем дату в таймер
  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

// замена прелоадера на таймер
function preloaderAndTimer() {
  preloader.remove();
  countdown.style.display = 'flex';
}
// запуск функции каждую секунду
setInterval(updateCounter, 1000);
// замена прелоадера на таймер
setTimeout(preloaderAndTimer, 2000);
