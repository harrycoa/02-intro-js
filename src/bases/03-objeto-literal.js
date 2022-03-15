
const persona = {
    nombre : 'Harry',
    apellido: 'Coa',
    edad: 45,
    direccion: {
      ciudad: 'New york',
      zio: 5843,
      lat: 4255.44555,
      lng: 441.8712
    }
  }
  
  
  console.table( persona )
  console.log( persona )
  
  // manera incorrecta de crear una copia, ya que solo asigna al espacio de memoria del objeto
  const persona2 = persona;
  persona2.nombre = 'Peter';
  
  
  // manera correcta
  const persona3 = { ...persona };
  
  
  console.log( persona2 )
  console.log( persona3 )
  
  