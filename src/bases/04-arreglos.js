// Arreglos en JS


const arreglo = [1,2,3,4];
/* arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4)
arreglo.push(5) */

let arreglo2 = arreglo
arreglo2.push(6)

console.log( arreglo);
console.log( arreglo2);


let arreglo3 = [...arreglo ,1785]
/* arreglo3.push(8)
arreglo3.push(9)
arreglo3.push(10) */
console.log( arreglo3);


let arreglo4 = []

for ( var i = 0, l = arreglo.length; i < l; i++ ) {
  arreglo4[ i ] = arreglo[ i ];
}

arreglo4.push(7)
console.log( arreglo4);



const arreglo33 = arreglo2.map( function(numero) {
  return numero * 2;
});

console.log(arreglo33)
