import {fetchBreeds, fetchCatByBreed} from "./cat-api"
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const catSelect = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info")
const problem = document.querySelector(".error");
const loader = document.querySelector(".loader");

loader.style.display = "none";


fetchBreeds(catSelect.value)
    .then(data => {
        catsList(data)
    })
    .catch(error => {
        Notiflix.Notify.failure(
            'Oops! Something went wrong! Try reloading the page!'
          );
    })


const catsList = (list) => {
    list.forEach(element => {
        const newCat = document.createElement("option");
        catSelect.append(newCat)
        newCat.value = element.id
        newCat.textContent = element.name
})}

const catFoto = () => {
    loader.style.display = "block"
    catInfo.style.display = "none"
    fetchCatByBreed(catSelect.value)
    .then(data => {
        setTimeout
        catDescr(data)
    }, 1000)
    .catch(error => {
        loader.style.display = "none";
        Notiflix.Notify.failure(
            'Oops! Something went wrong! Try reloading the page!'
          );
    })
}

const catDescr = (img) => {
    fetchBreeds(catSelect.value)
        .then(data => {
            const info = data.find(option => option.id === catSelect.value)
            catInfo.innerHTML = `
            <h2>${info.name}</h2>
            <img src="${img.url}"height="400"></img>
            <p>${info.description}</p>
            <p><b>Temperament: </b>${info.temperament}</p>`
            catInfo.style.display = "block"
            loader.style.display = "none"
        })
        .catch(error => {
            problem.style.display = "block";
            Notiflix.Notify.failure(
                'Oops! Something went wrong! Try reloading the page!'
              );
        })
}

catSelect.addEventListener("input", catFoto)