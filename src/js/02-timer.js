import flatpickr from "flatpickr"; //бібліотеку flatpickr для того, щоб дозволити користувачеві кросбраузерно вибрати кінцеву дату і час в одному елементі інтерфейсу
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix'; // Для відображення повідомлень користувачеві
//console.log(Notiflix);


function convertMs(ms) {
  // Number of milliseconds per unit of time - ОТримує мілісеккунди, та конвертує їх у дні, години, хвилини, сенкунди.
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};
//console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return value.toString().padStart(2, `0`);
}; // Функція додає 0 перед цифрами 1-9, 0 

const elements = {
  input: document.querySelector(`#datetime-picker`),
  startBtn: document.querySelector(`button[data-start]`),
  timeDays: document.querySelector(`span[data-days]`),
  timeHours: document.querySelector(`span[data-hours]`),
  timeMinutes: document.querySelector(`span[data-minutes]`),
  timeSeconds: document.querySelector(`span[data-seconds]`), 
}

elements.startBtn.disabled = `true`; //кнопка старт неактивна
let timerId = null;
const currentDay = new Date(); //Поточна дата
//let targetDate = new Date(); // Дата в майбутньому

flatpickr(elements.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    // (selectedDates[0] Дата в майбутньому, 
    if (selectedDates[0].getTime() - currentDay.getTime() < 0){
      Notiflix.Report.warning('Worning', 'Please choose a date in the future', 'Close');
      //window.alert("Please choose a date in the future");

    } else {
      elements.startBtn.disabled = ``; //кнопка старт активна
      elements.startBtn.addEventListener(`click`, () => {
       
        timerId = setInterval (() =>{
          const currentTime = new Date();
          const ms = selectedDates[0].getTime() - currentTime.getTime();// getTime() додаємо, щоб отримати мілісекунди
          //console.log(ms);
          elements.timeDays.textContent = addLeadingZero(convertMs(ms).days);
          elements.timeHours.textContent = addLeadingZero(convertMs(ms).hours);
          elements.timeMinutes.textContent = addLeadingZero(convertMs(ms).minutes);
          elements.timeSeconds.textContent = addLeadingZero(convertMs(ms).seconds);
          if (ms < 1000 ){
            clearInterval (timerId)
          }
        }, 1000);

      });
    }
    //console.log(targetDate);
  },
});

