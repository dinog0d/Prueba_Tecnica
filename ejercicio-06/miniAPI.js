// ejercicio-06/miniAPI.js
// Mini API simple para productos
// Variable para almacenar los productos cargados
let productos = null;
// Función para cargar productos desde el archivo JSON
async function cargarProductos() {
    try {
        const response = await fetch('./productos.json');
        if (!response.ok) {
        throw new Error('No se pudo cargar el archivo productos.json');
        }
        productos = await response.json();
        return productos;
    } catch (error) {
        console.error('Error al cargar productos:', error);
        throw error;
    }
}
// Función para buscar un producto por su ID
async function buscarProductoPorId(id) {
    try {
        // Cargar productos si no están cargados
        if (!productos) {
        await cargarProductos();
        }
        // Buscar el producto por ID
        const producto = productos.find(p => p.id === id);
        if (producto) {
        const mensaje = `El ${producto.nombre} cuesta ${producto.precio}`;
        console.log(mensaje);
        return mensaje;
        } else {
        const mensaje = `No se encontró producto con ID ${id}`;
        console.error(mensaje);
        return mensaje;
        }
    } catch (error) {
        const mensaje = `Error al buscar producto: ${error.message}`;
        console.error(mensaje);
        return mensaje;
    }
}

// Ejemplo de uso
buscarProductoPorId(2);