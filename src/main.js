import LoL from './data/lol/lol.js';
import { funcionDeFiltrado, funcionDeOrden, funcionEstrellitas, funcionEstrellitaOficial } from './data.js';

const champions = LoL.data;
const indexChampions = Object.values(champions);

//Elementos Nav

const buscador = document.getElementById('buscador');
const lupa = document.getElementById('lupa');
const filtro = document.getElementById('filtro');
const orden = document.getElementById('orden');
const cajaCampeones = document.getElementById('Campeones');



const card = (data) => {
  for (let i = 0; i < data.length; i++) {
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
    championName.setAttribute('id', 'championname');
    championName.innerHTML = data[i].name;
    nombreCampeon.appendChild(championName);
    perfilCampeon.appendChild(nombreCampeon);
  }
};

card(indexChampions);

// Nav / Filtrado

filtro.addEventListener('change', () => {
  const rolType = filtro.value;
 let CampeonesYaFiltrados = funcionDeFiltrado(rolType, indexChampions);
 cajaCampeones.innerHTML = '';
 card(CampeonesYaFiltrados);
});

// Nav / Orden

orden.addEventListener('change', () => {
  const OrdenAlfa = orden.value;
  const campeonesOrden = funcionDeOrden(OrdenAlfa, indexChampions);
  console.log('soy el console log del main' + campeonesOrden);
  cajaCampeones.innerHTML = '';
  card(indexChampions);
});

//función estrellitas ★

indexChampions.forEach(funcionEstrellitas);

//función estrellita oficial

/*
const CajaNombreEstrellita = document.getElementById("championname").innerHTML;
CajaNombreEstrellita.forEach(funcionEstrellitaOficial(CajaNombreEstrellita));
*/

//Barra de búsqueda


/* Pasos Lógicos
conectar base de datos al archivo main.js
    mostrar base de datos en consola
    mostrar campeones en consola
mostrar data en un elemento en pantalla

crear elementos para desplegar a los campeones
ajustar la información de cada campeón a la caja que lo contiene (foto, nombre)
repetir el proceso por la totalidad de personajes
*/

/* Pasos de filtrado
Mostrar los datos filtrados.
  mostrar datos en consola para saber que se pueden filtrar.
  aplicar el filtro para todas las categorías.
Tomar el valor del selector "filtros", para poder modificar las tarjetas acorde a los datos filtrados según el valor del selector.
  borrar tarjetas desplegadas
  mostrar datos aplicando el filtro.
  borrar tarjetas que no correspondan a los datos filtrados. */
// Pasos de orden

// Pasos de búsqueda
