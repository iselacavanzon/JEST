const calculateAverage = require('../calculateAverage'); // Importamos la función que vamos a probar

// Describimos el grupo de pruebas para la función calculateAverage
describe('calculateAverage', () => {
    // Primera prueba: Verificar que la función calcula correctamente el promedio de un array de números
    test('should return the average of the numbers in the array', () => {
        const numbers = [1, 2, 3, 4, 5];
        const expected = 3;
        expect(calculateAverage(numbers)).toBe(expected); // Comprobamos que el resultado sea el esperado
    });

    // Segunda prueba: Verificar que la función devuelve 0 cuando el array está vacío
    test('should return 0 for an empty array', () => {
        const numbers = [];
        const expected = 0;
        expect(calculateAverage(numbers)).toBe(expected); // Comprobamos que el resultado sea 0
    });

    // Tercera prueba: Verificar que la función maneja correctamente un array con un solo número
    test('should return the number itself for an array with one number', () => {
        const numbers = [10];
        const expected = 10;
        expect(calculateAverage(numbers)).toBe(expected); // Comprobamos que el resultado sea el único número del array
    });
});
