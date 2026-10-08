function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Очікував ${expected}, отримав ${actual}`);
      }
    },
  };
}

function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
  } catch (error) {
    console.log(`❌ ${name}\n   ${error.message}`);
  }
}
/////////////

const sum = (a, b) => {
    return a + b;
};
test('sum two positive mumsbers', () => { 
    expect(sum(1, 2)).toBe(3);
};



// test('sum two positive mumsbers', () => { 
//     const actual = sum(1, 2);
//     expect(actual).toBe(3);
// };
const getAgeCategory = (age) => {
    if (typeof age !== 'number' || Number.isNaN(age) || age < 0) {
        return 'некоректний вік';
    if (age <= 12) { return 'child'; }
    if (age >= 13 && age <= 17) { return 'teenager'; }
    if (age >= 18 && age <= 64) { return 'adult'; }
    if (age >= 65) {return 'senior'; }
};
getAgeCategory (24);
test('child 1-12', () => { 
    expect(getAgeCategory (1, 2)).toBe(3);
};
