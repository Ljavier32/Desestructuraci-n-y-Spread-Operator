const jugador = {
    nombre: "Steve",
    experiencia: 15,
    inventario: {
      herramienta: "Pico de diamante",
      comida: "Manzana dorada",
      bloques: 64
    }
  };
  
  const { nombre, inventario: { herramienta } } = jugador;
  console.log(`Nombre: ${nombre}`);
  console.log(`Herramienta principal: ${herramienta}`);
  
  const nuevoObjeto = "Antorcha";
  const nuevoInventario = { ...jugador.inventario, Objeto: nuevoObjeto };
  console.log(nuevoInventario);