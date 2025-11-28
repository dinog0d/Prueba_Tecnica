// ejercicio-05/filtradoMultiple.js
// Lista de productos disponible 
const productos = Object.freeze([
    { nombre: "Café", precio: 1500, categoria: "bebida" },
    { nombre: "Arepa", precio: 2000, categoria: "comida" },
    { nombre: "Té", precio: 1000, categoria: "bebida" },
    { nombre: "Sandwich", precio: 5500, categoria: "comida" }
]);
// Función para filtrar productos por múltiples criterios
function filtrarProductos(listaProductos, criterios = {}) {
    // Primero verificamos que recibimos un array válido
    if (!Array.isArray(listaProductos)) {
        throw new Error('El primer argumento debe ser un array de productos');
    }
    // Extraemos los criterios de filtrado con valores por defecto sensatos
    const { 
        min = 0,           // Si no especifican mínimo, se usa 0
        max = Infinity,    // Si no especifican máximo, se permite cualquier precio
        categoria = null   // Si no especifican categoría, no filtramos por categoría
    } = criterios;
    // Verificamos que los precios sean números válidos
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Los valores de precio mínimo y máximo deben ser números');
    }
    // Si especificaron categorías, las preparamos para búsqueda rápida
    let categoriasValidas = null;
    if (categoria !== null) {
        // Si es un array de categorías, lo usamos directamente
        // Si es una sola categoría (string), la convertimos a array primero
        const listaCategorias = Array.isArray(categoria) ? categoria : [categoria];
        categoriasValidas = new Set(listaCategorias);
    }
    // Ahora filtramos los productos uno por uno
    return listaProductos.filter(producto => {
        // Verificamos si el precio está en el rango permitido
        const precioEnRango = producto.precio >= min && producto.precio <= max;
        
        // Verificamos si la categoría es válida
        const categoriaValida = categoriasValidas === null || categoriasValidas.has(producto.categoria);
        
        // El producto pasa el filtro solo si cumple AMBAS condiciones
        return precioEnRango && categoriaValida;
    });
}

// Pruebas de la función de filtrado

// Ejemplo 1: Filtrar por rango de precio
console.log('Productos entre $1000 y $3000:');
console.log(filtrarProductos(productos, { min: 1000, max: 3000 }));

// Ejemplo 2: Filtrar por precio Y categoría
console.log('Bebidas entre $1000 y $3000:');
console.log(filtrarProductos(productos, { min: 1000, max: 3000, categoria: 'bebida' }));

// Ejemplo 3: Filtrar por precio y múltiples categorías
console.log('Comida entre $3000 y $6000:');
console.log(filtrarProductos(productos, { min: 3000, max: 6000, categoria: ['comida'] }));

// Ejemplo 4: Sin filtros (devuelve todo)
console.log('Todos los productos (sin filtros):');
console.log(filtrarProductos(productos));

// Ejemplo 5: Filtrar solo por categoría
console.log('Solo bebidas:');
console.log(filtrarProductos(productos, { categoria: 'bebida' }));
