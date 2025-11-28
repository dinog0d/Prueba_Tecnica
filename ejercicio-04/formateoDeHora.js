// ejercicio-04/formateoDeHora.js
// Función para convertir hora de formato 24 horas a 12 horas con AM/PM
function convertir12h(hora24) {
    // Validar casos especiales
    if (!hora24 || typeof hora24 !== 'string') {
        throw new Error('La hora debe ser una cadena válida');
    }
    // Validar formato básico
    if (!/^\d{1,2}:\d{2}$/.test(hora24)) {
        throw new Error('Formato inválido. Use el formato "HH:MM"');
    }
    const [horaStr, minutoStr] = hora24.split(":");
    let hora = parseInt(horaStr, 10);
    const minutoNum = parseInt(minutoStr, 10);
    // Validar rangos
    if (hora < 0 || hora > 23) {
        throw new Error('La hora debe estar entre 00 y 23');
    }
    if (minutoNum < 0 || minutoNum > 59) {
        throw new Error('Los minutos deben estar entre 00 y 59');
    }
    // Asegurar formato de 2 dígitos para minutos
    const minuto = minutoStr.padStart(2, '0');
    let sufijo = "AM";
    if (hora === 0) {
        hora = 12;
        sufijo = "AM";
    } else if (hora === 12) {
        sufijo = "PM";
    } else if (hora > 12) {
        hora = hora - 12;
        sufijo = "PM";
    }
    return `${hora}:${minuto} ${sufijo}`;
}
// Ejemplos de uso
console.log(convertir12h("14:35")); // "2:35 PM"
console.log(convertir12h("00:20")); // "12:20 AM"
console.log(convertir12h("12:05")); // "12:05 PM"
console.log(convertir12h("09:10")); // "9:10 AM"