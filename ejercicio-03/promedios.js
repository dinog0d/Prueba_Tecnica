// ejercicio-03/promedios.js
// Lista de estudiantes con sus respectivas notas
const estudiantes = [ 
    { nombre: "Ana", notas: [3.2, 4.1, 3.9] }, 
    { nombre: "Luis", notas: [2.8, 3.0, 3.5] }, 
    { nombre: "Marta", notas: [4.5, 4.6, 4.9] } 
];
// Función para calcular el promedio de un array de notas
function calcularPromedio(notas) { 
    const suma = notas.reduce((acum, nota) => acum + nota, 0); 
    return suma / notas.length; 
}
// Función para transformar la lista de estudiantes agregando el promedio
function transformarEstudiantes(estudiantes) {
    return estudiantes.map(estudiante => {
        const promedio = calcularPromedio(estudiante.notas);
        return {
            nombre: estudiante.nombre,
            promedio: parseFloat(promedio.toFixed(2))
        };
    });
}
// Obtener la nueva lista de estudiantes con promedios
const estudiantesConPromedio = transformarEstudiantes(estudiantes);
console.log(estudiantesConPromedio);