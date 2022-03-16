// Funciones

// v.1
const saludar = function (nombre){
    return `Hola, ${ nombre } `;
  }
  
  // v.2
  const saludar2 = (nombre) => {
    return `Hola, ${ nombre } `;
  }
  
  // v.3
  const saludar3 = (nombre) => `Hola, ${ nombre } `;
  
  
  // return con objetos
  // v.1
  const getUser = ()=> {
    return {
      uid: 'ABSS',
      username: 'password'
    }
  }
  // v.2
  const getUser2 = ()=> ({   
      uid: 'ABSS',
      username: 'password'  
  })
  
  
  
  // Tarea
  // 1.- transformar a funcion felcha
  // 2.- retornar objeto implicito
  // 3.- pruebas
  
  // v.1
  function getUsuarioActivo (nombre) {
    return {
      uid: 'AGT5456',
      username: nombre
    }
  }
  
  // v.2
  const getUsuarioActivo2 = (nombre) => ({  uid: 'AGT5456',username: nombre})
  
  const usuarioActivo = getUsuarioActivo('Harry');
  const usuarioActivo2 = getUsuarioActivo('Harryc');
  
  
  
  
  
  
  console.log( saludar2('hahaha'));
  console.log( saludar3('pepe'));
  console.log( getUser());
  console.log( "==========================================================================>");
  
  console.log( usuarioActivo );
  console.log( usuarioActivo2 );
  