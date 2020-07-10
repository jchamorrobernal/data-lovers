import LoL from './data/lol/lol.js';
/* Manejo de data */

// esta es una función de ejemplo

export const example = () => 'example';

// Filtro

// Variables de filtrado

export const funcionDeFiltrado = (valor, data) => {
  if (valor === 'all') {
    return data;
  }
  const filtroDeCampeones = data.filter((champ) => (champ.tags.includes(valor)));
  return filtroDeCampeones;
};

// Variables de Orden

export const funcionDeOrden = (valorOrden, data) => {
  if (valorOrden === 'AalaZ') {
    const campeonesOrdenados = data.sort().reverse();
    };

  if (valorOrden === 'ZalaA') {
    const campeonesOrdenados = data.reverse();
    return campeonesOrdenados;
  }
};
export const funcionEstrellitaOficial = (constelacion) => {
constelacion + '★';
}


export const funcionEstrellitas = (indexChampions) => {
  const nombreCampeonesEstrellita = indexChampions.name + '★';
  //console.log(nombreCampeonesEstrellita)
}

// Por cada campeón filtrado tiene que pintarse una estrellita. ForEach().
