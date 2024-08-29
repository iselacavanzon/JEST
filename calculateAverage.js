// Definimos la función calculateAverage que acepta un array de números
// y devuelve el promedio de esos números
function calculateAverage(numbers) {
    if (numbers.length === 0) return 0; // Si el array está vacío, devolvemos 0
    const sum = numbers.reduce((acc, num) => acc + num, 0); // Sumamos todos los números del array
    return sum / numbers.length; // Dividimos la suma por la cantidad de números para obtener el promedio
}

module.exports = calculateAverage; // Exportamos la función para poder utilizarla en las pruebas unitarias
