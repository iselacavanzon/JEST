const reverseWords = require('../reverseWords'); // Importamos la función que vamos a probar

// Describimos el grupo de pruebas para la función reverseWords
describe('reverseWords', () => {
    // Primera prueba: Verificar que la función invierte correctamente el orden de las palabras en una cadena
    test('should return the words in reverse order', () => {
        const sentence = "Hello world";
        const expected = "world Hello";
        expect(reverseWords(sentence)).toBe(expected); // Comprobamos que el resultado sea el esperado
    });

    // Segunda prueba: Verificar que la función maneja correctamente una cadena con una sola palabra
    test('should return the same word for a single word sentence', () => {
        const sentence = "Hello";
        const expected = "Hello";
        expect(reverseWords(sentence)).toBe(expected); // Comprobamos que el resultado sea la misma palabra
    });

    // Tercera prueba: Verificar que la función maneja correctamente una cadena vacía
    test('should return an empty string for an empty sentence', () => {
        const sentence = "";
        const expected = "";
        expect(reverseWords(sentence)).toBe(expected); // Comprobamos que el resultado sea una cadena vacía
    });
});
