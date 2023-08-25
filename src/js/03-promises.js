import Notiflix from 'notiflix'; // Для відображення повідомлень користувачеві
//console.log(Notiflix);

const inputForm = document.querySelector('form');

inputForm.addEventListener(`submit`, handlerForm);

function handlerForm (evt){
  evt.preventDefault();
  
  let delay = Number (evt.currentTarget.delay.value);
  let step = Number (evt.currentTarget.step.value);
  let amount = Number (evt.currentTarget.amount.value);
  let position;

  // console.log(delay);
  // console.log(step);
  console.log(amount);
  
  for (let i = 1; i <= amount; i += 1) {
    position = i;
    createPromise(position, delay);   
    delay += step;
    };

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    let promise = new Promise ((resolve, reject) => {
      setTimeout (() => {
        if (shouldResolve) {
          resolve ({position, delay});
        } else {
          reject ({position, delay});           
        }}, delay);
    })
  
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success('Fulfilled promise ${position} in ${delay}ms');

    //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
  .catch(({ position, delay }) => {
      Notiflix.Notify.failure('Rejected promise ${position} in ${delay}ms');

    //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  };
}