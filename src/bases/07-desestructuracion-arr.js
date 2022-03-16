// Desectructuracion de Arrays

const personas = [ 'harry', 'gok','dex'];
console.log(personas[0]);
console.log(personas[1]);
console.log(personas[2]);


const [ , p2 ] = personas;


console.log(p2)


const retornaArreglo = () => {
  return ['ABC', 123]
}

console.log(retornaArreglo());


const [letra, numero] = retornaArreglo();

console.log(letra , numero);


// Tarea
// imprimir en consola
// 1.- el primer valor del array se llamara nombre
// 2.- se llamara setNombre

const rruseState = (valor) =>{
  return [valor , () => { console.log('Hola mundo') }];
}


const arr = rruseState('gok');
console.log(arr)



const [ nombre2 ,  setNombre] = rruseState('gok');


console.log( nombre2);
setNombre();