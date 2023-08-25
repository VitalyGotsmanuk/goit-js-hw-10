const elements = {
    //count: document.querySelector(`#value`), 
    start: document.querySelector(`[data-start]`), //Вибір Старт
    stop: document.querySelector(`[data-stop]`), // Вибір Стоп
    bodyColor: document.querySelector(`body`),
    //butn: document.querySelectorAll(`button`),
}

//console.log(elements.start.dataset);
//console.log(elements.stop.dataset);

//console.dir(elements.bodyColor.style);

elements.start.addEventListener(`click`, handlerStart);
elements.stop.addEventListener(`click`, handlerStop);

let timerId = null;// Створюємо порожню змінну для id в загальній зоні видимості

function handlerStart(evt) {
    
    timerId = setInterval(() => {
        randmColor()
    }, 1000); // Змінює колір фону сторінки кожну секунду (1000 мс)

    elements.start.disabled = `true`; //Робить кнопку Start неактивною
    //console.log (evt.currentTarget);
};

function handlerStop(evt) {
    clearInterval(timerId);
    elements.start.disabled = ``; // Робить кнопку Start активною
    //console.log (evt.currentTarget);
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  } // Функція рандомного кольору

function randmColor(){
   elements.bodyColor.style.backgroundColor = getRandomHexColor();
}; // Функція присвоєння кольору - фону сторінки. МОжливо можна спростити, але працює

