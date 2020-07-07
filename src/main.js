import LoL from './data/lol/lol.js';

const champions = LoL.data;
const indexChampions = Object.values(champions);
console.log(indexChampions);

/* for (let i = 0; i < indexChampions.length; i++) {
  const cajaCampeones = document.getElementById('Campeones');
  const perfilCampeon = document.createElement('div');
  perfilCampeon.setAttribute('id', 'displaycampeon');
  perfilCampeon.setAttribute('class', 'displaycampeon');
  const imgChampion = document.createElement('img');
  imgChampion.setAttribute('src', indexChampions[i].splash);
  cajaCampeones.appendChild(perfilCampeon);
  perfilCampeon.appendChild(imgChampion);
  const nombreCampeon = document.createElement('div');
  nombreCampeon.setAttribute('class', 'nombrecampeon');
  const championName = document.createElement('p');
  championName.setAttribute('class', 'championname');
  championName.innerHTML = indexChampions[i].name;
  nombreCampeon.appendChild(championName);
  perfilCampeon.appendChild(nombreCampeon);
} */

const card = (data) => {
  for (let i = 0; i < data.length; i++) {
    const cajaCampeones = document.getElementById('Campeones');
    const perfilCampeon = document.createElement('div');
    perfilCampeon.setAttribute('id', 'displaycampeon');
    perfilCampeon.setAttribute('class', 'displaycampeon');
    const imgChampion = document.createElement('img');
    imgChampion.setAttribute('src', data[i].splash);
    cajaCampeones.appendChild(perfilCampeon);
    perfilCampeon.appendChild(imgChampion);
    const nombreCampeon = document.createElement('div');
    nombreCampeon.setAttribute('class', 'nombrecampeon');
    const championName = document.createElement('p');
    championName.setAttribute('class', 'championname');
    championName.innerHTML = data[i].name;
    nombreCampeon.appendChild(championName);
    perfilCampeon.appendChild(nombreCampeon);
  }
};

card(indexChampions);

const campeonesTanques = indexChampions.filter(tag => tag.tags == 'Tank')
console.log(campeonesTanques);

//Elementos Nav

const buscador = document.getElementById('buscador');
const lupa = document.getElementById('lupa');
const filtro = document.getElementById('filtro');

/* caja funcionando
const cajaCampeones = document.getElementById('Campeones');
const perfilCampeon = document.createElement('div');
perfilCampeon.setAttribute('id', 'displaycampeon');
perfilCampeon.setAttribute('class', 'displaycampeon');
const imgChampion = document.createElement('img');
imgChampion.setAttribute('src', champions.Aatrox.img);
cajaCampeones.appendChild(perfilCampeon);
perfilCampeon.appendChild(imgChampion);
const nombreCampeon = document.createElement('div');
nombreCampeon.setAttribute('class', 'nombrecampeon');
const championName = document.createElement('p');
championName.setAttribute('class', 'championname');
championName.innerHTML = champions.Aatrox.name;
nombreCampeon.appendChild(championName);
perfilCampeon.appendChild(nombreCampeon);

function showChampions() {
  for (let i = 0; i < indexchampions.lenght; i++) {
    const cajaCampeones = document.getElementById('Campeones');
    const perfilCampeon = document.createElement('div');
    perfilCampeon.setAttribute('id', 'displaycampeon');
    perfilCampeon.setAttribute('class', 'displaycampeon');
    cajaCampeones.appendChild(perfilCampeon)

  } 
}
*/


/*


champions.forEach(mostrarCampeones);

function mostrarCampeones() {
  const cajaCampeones = document.getElementById('Campeones');
  const perfilCampeon = document.createElement('div');
  perfilCampeon.setAttribute('id', 'displaycampeon');
  perfilCampeon.setAttribute('class', 'displaycampeon');
  const imgChampion = document.createElement('img');
  imgChampion.setAttribute('src', champions.img);
  cajaCampeones.appendChild(perfilCampeon);
  perfilCampeon.appendChild(imgChampion);
  const nombreCampeon = document.createElement('div');
  nombreCampeon.setAttribute('class', 'nombrecampeon');
  const championName = document.createElement('p');
  championName.setAttribute('class', 'championname');
  championName.innerHTML = champions.name;
  nombreCampeon.appendChild(championName);
  perfilCampeon.appendChild(nombreCampeon);
}

*/
//const root = document.querySelector("#root");


/*
const requestURL = 'data/lol/lol.json';

const request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.responseType = 'json';
request.send();

request.onload = function() {
    const campeones = request.response;
    populateRoot (campeones);
    showCampeones(campeones)
    console.log(campeones)
}

function populateRoot(jsonObj) {
  const myH1 = document.createElement('h1');
  root.textContent = jsonObj['data'];
  root.appendChild(myH1);
}

function showCampeones(jsonObj) {
  const heroes = jsonObj['data'];

  for (let i = 0; i < heroes.lenght; i++) {
    perfilCampeon.setAttribute('id', 'displaycampeon');
    perfilCampeon.setAttribute('class', 'displaycampeon');

    const nombreCampeon = document.createElement('div');
    nombreCampeon.setAttribute('class', 'nombrecampeon');

    nombreCampeon = heroes[i].name;
    perfilCampeon = heroes[i].img

    cajaCampeones.appendChild(perfilCampeon);
    perfilCampeon.appendChild(nombreCampeon);
  }
}

/*
document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos(){

    //console.log('dentro de la función');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'data/lol/lol.json', true)

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos);

            for(let item of datos){
                console.log(item.data);
            }
        }
    }
}

*/
/* Pasos Lógicos
conectar base de datos al archivo main.js
    mostrar base de datos en consola
    mostrar campeones en consola
mostrar data en un elemento en pantalla

crear elementos para desplegar a los campeones
ajustar la información de cada campeón a la caja que lo contiene (foto, nombre)
repetir el proceso por la totalidad de personajes
*/