// Definimos la función calculateAverage que acepta un array de números
// y devuelve el promedio de esos números
function calculateAverage(numbers) {
    if (numbers.length === 0) return 0; // Si el array está vacío, devolvemos 0
    const sum = numbers.reduce((acc, num) => acc + num, 0); // Sumamos todos los números del array
    return sum / numbers.length; // Dividimos la suma por la cantidad de números para obtener el promedio
}

// Definimos la función reverseWords que acepta una cadena de texto
// y devuelve la misma cadena con el orden de las palabras invertido
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' '); // Dividimos la cadena en palabras, invertimos el orden y unimos las palabras de nuevo en una cadena
}

// Función para mostrar el promedio de los números ingresados
function showAverage() {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(Number); // Convertimos la cadena de entrada en un array de números
    const average = calculateAverage(numbers); // Calculamos el promedio
    document.getElementById('averageResult').innerText = `Promedio: ${average}`; // Mostramos el resultado
}

// Función para mostrar las palabras invertidas de la oración ingresada
function showReversedWords() {
    const input = document.getElementById('sentence').value;
    const reversed = reverseWords(input); // Invertimos las palabras
    document.getElementById('reversedResult').innerText = `Palabra invertida: ${reversed}`; // Mostramos el resultado
}
