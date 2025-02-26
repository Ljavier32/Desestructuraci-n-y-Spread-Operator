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

console.log(`Nombre del jugador: ${nombre}, su herramienta primaria es ${herramienta}`);


const nuevoObjeto = {herramienta_adicional : "Sable"};

const nuevoInventario = { ...jugador.inventario, ...nuevoObjeto };

console.log("Nuevo inventario:", nuevoInventario);
