console.log(`Hello, cat!`);

//import axios from "axios";
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';
//axios.defaults.headers.common["x-api-key"] = "live_cIw52yO9a8fNeUPdIT8YDG8Xlbt8EOc9jUsDsC9wCRmyllMjggiyZl3qIkwZ3D0R";
import Notiflix from 'notiflix'; // Для відображення повідомлень користувачеві
//console.log(Notiflix);

//import {fetchBreeds, fetchCatByBreed} from "./js/cat-api";

const element = {
    select: document.querySelector(`.breed-select`),
    loader: document.querySelector(`.loader`),
    error: document.querySelector(`.error`),
    catInfo: document.querySelector(`.cat-info`)
};

// console.dir(elmnt.loader);
//console.dir(element.catInfo);

const apiKey = `live_cIw52yO9a8fNeUPdIT8YDG8Xlbt8EOc9jUsDsC9wCRmyllMjggiyZl3qIkwZ3D0R`;
const urlBreeds = `https://api.thecatapi.com/v1/breeds`;
const urlCat = `https://api.thecatapi.com/v1/images/search`;

//  виконує HTTP-запит і повертає проміс із масивом порід - результатом запиту.


//console.dir(fetch (`https://api.thecatapi.com/v1/breeds?api_key=live_cIw52yO9a8fNeUPdIT8YDG8Xlbt8EOc9jUsDsC9wCRmyllMjggiyZl3qIkwZ3D0R`))

fetch (`https://api.thecatapi.com/v1/breeds?api_key=live_cIw52yO9a8fNeUPdIT8YDG8Xlbt8EOc9jUsDsC9wCRmyllMjggiyZl3qIkwZ3D0R`)
.then(response =>{
    //console.log(response);
    if(!response.ok){
        throw new Error(response.statusText)
    }
    return response.json();
})
.then(data =>{
    console.log(data[0].id);
    console.log(data[0].name);

})
.catch(err =>{
    console.log(err);
})







// function fetchBreeds() {
//     return fetch (`https://api.thecatapi.com/v1/breeds?api_key=live_cIw52yO9a8fNeUPdIT8YDG8Xlbt8EOc9jUsDsC9wCRmyllMjggiyZl3qIkwZ3D0R`)
//     .then (response => {
//         if (!response.ok) {
//             throw new Error (response.message);
//         }
//         return response.json();



//     })


// }






//element.loader.style.display='none' //не відображає загрузку
//element.error.style.display='none' // не відображає помилку

//element.select.addEventListener(`change`, handlerSelectChange);//

//генерує розмітки випадаючого списку...
// function createSelect (breeds){
//     const markup = breeds.map(breed =>{
//         return `<option value='${breed.reference_image_id}'>${breed.name}</option>`
//     }).join ('');
//     element.select.insertAdjacentHTML('beforeend', markup);

//     new SlimSelect({
//         select: element.select
//       });
// };


new SlimSelect({
   select: element.select,
    data: [{ text: 'Value 1', value: 'value1' }]
});



// function handlerSelectChange (evt){
//     //console.log(evt);
//     element.loader.style.display='';


//     const breedId = evt.target.value;
//     console.log("breedId", breedId);
//     fetchCatByBreed(breedId)
//         .then(breed => renderCard(breed))//
//         .catch(error => {
//             console.log(error);
//             Notiflix.failure(
//                 'Oops! Something went wrong! Try reloading the page!',
//                 );
//         })
//         .finally(() => {
//             element.loader.style.display='none';
            
//     })


// };