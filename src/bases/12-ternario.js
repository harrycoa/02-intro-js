const activo = true;

let mensaje = '';

if ( activo ) {
  mensaje = 'activo';
} else {
  mensaje = 'inactivo';
}

console.log(mensaje);

// v2
const mensaje2 = ( activo ) ? 'activo' : 'inactivo';
console.log(mensaje2);


// v3 ternario 1 (if corto)
const mensaje3 = !activo && 'activo';
console.log(mensaje3);
