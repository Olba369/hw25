
const sum = (a, b) => {
    return a + b;
};
test('sum two positive numbers', () => { 
    expect(sum(1, 2)).toBe(3);
});

