// Variables
const nombre = 'harry';
const ape = 'coa';


// const nombreCompleto = nombre + ' ' + ape;



// Backstics ctrl+alt + cierre corchete

const nombrecompleto = `
${ nombre } 
${ ape }
${ 1 + 1}
`;



console.log(nombrecompleto);


function getSaludo(nombre){
  return 'Holaaaaaaaa' + ' '+ nombre;
}


console.log(`Este es un texto:  ${ getSaludo(nombre) }`);