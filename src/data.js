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
    return campeonesOrdenados;
  }

  if (valorOrden === 'ZalaA') {
    const campeonesOrdenados = data.reverse();
    return campeonesOrdenados;
  }
};
/*
export const funcionEstrellitas = (constelacion) => {
  const nombreEstrellita = constelacion.forEach(constelacion.name (+ '★'));
  console.log(nombreEstrellita);
  return nombreEstrellita;
};
*/

/* export const funcionEstrellitaOficial = (constelacion) => {
constelacion + '★';
}
Por cada campeón filtrado tiene que pintarse una estrellita. ForEach().
*/
