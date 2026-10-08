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