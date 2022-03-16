// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: 'Harry',
    edad: 21,
    clave: 'fx'
  }
  
  
  // Extra
  const { nombre ,edad } = persona;
  
  console.log( nombre );
  console.log( edad );
  
  
  
  const caramelo = ({ clave, nombre, edad , rango = 'Capitan' }) => {
    console.log( nombre, edad , rango);
  
    return {
      nombreClave : clave,
      anios: edad,
      latlng: {
        lat: 14.855,
        lng: -48.96
  
      }
    }
  }
  
  
  console.log("====================>");
  const avenger = caramelo(persona);
  console.log(avenger)
  
  
  // desectrurando
  
  const { nombreClave, latlng: {lat, lng} } = caramelo(persona)
  
  console.log(lat,lng)
  