import  heroes,  { getHeroeById  } from "./data/heroes";
// Promesas

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {        
      const heroe = getHeroeById(1);
    resolve(heroe);
  }, 2000);
});




promesa.then( (heroe) => {
    console.log('Heroe obtenido', heroe);
})
.catch( (error) => console.warn('Error en la promesa', error));




const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {        
            const p1 = getHeroeById(id);
            if (p1 === undefined) {
                reject(`No se encontro el heroe con id ${id}`);
            }
          resolve(p1);
        }, 2000);
    });
}

getHeroeByIdAsync(9)
    .then( console.log)
    .catch( console.warn );