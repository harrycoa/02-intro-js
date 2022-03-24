
import  heroes,  { owners  } from "./data/heroes";


const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
}


export const getHeroeByOwner = (owner) => {
    return heroes.filter( (heroedc) => heroedc.owner === owner );
}


console.log( getHeroeById (3));
console.log( getHeroeByOwner ('DC'));


console.log(owners);