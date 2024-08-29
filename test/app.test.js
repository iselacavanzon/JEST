const {addnumbers, substractnumbers, multiplynumbers, dividenumbers}= require('../app');
test('adds 1 + 2 to equal 3', () => {
    expect(addnumbers(1, 2)).toBe(3);
});
test('substracts 2 - 1 to equal 1', () => {
    expect(substractnumbers(2, 1)).toBe(1);
});
test('multiplies 2 * 3 to equal 6', () => {
    expect(multiplynumbers(2, 3)).toBe(6);
});
test('divides 6 / 3 to equal 2', () => {
    expect(dividenumbers(6, 3)).toBe(2);
});


