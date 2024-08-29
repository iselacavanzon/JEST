// Definimos la función reverseWords que acepta una cadena de texto
// y devuelve la misma cadena con el orden de las palabras invertido
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' '); // Dividimos la cadena en palabras, invertimos el orden y unimos las palabras de nuevo en una cadena
}

module.exports = reverseWords; // Exportamos la función para poder utilizarla en las pruebas unitarias
