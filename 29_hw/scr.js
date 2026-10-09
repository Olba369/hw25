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

// const getAgeCategory = (age) => {
//   if (typeof age !== "number" || Number.isNaN(age) || age < 0) {
//     return "некоректний вік";
//   }

//   if (age >= 0 && age <= 12) {
//     return "child";
//   }
//   if (age >= 13 && age <= 17) {
//     return "teenager";
//   }
//   if (age >= 18 && age <= 64) {
//     return "adult";
//   }
//   if (age >= 65) {
//     return "senior";
//   }
// };

// //1
// test("child 0-12", () => {
//   expect(getAgeCategory(10)).toBe("child");
// });
// //2
// test("teenager 13-17", () => {
//   expect(getAgeCategory(15)).toBe("teenager");
// });
// //3
// test("adult 18-64", () => {
//   expect(getAgeCategory(24)).toBe("adult");
// });
// //4
// test("senior 65+", () => {
//   expect(getAgeCategory(70)).toBe("senior");
// });
// //5
// test("invalid age", () => {
//   expect(getAgeCategory(-5)).toBe("некоректний вік");
// });
// //6
// test("invalid age", () => {
//   expect(getAgeCategory(0)).toBe("child");
// });

// test("invalid age", () => {
//   expect(getAgeCategory("fvfgbg")).toBe("некоректний вік");
// });
// ////////

const calculateTotal = (price, quantity, discount = 0) => {
  if (
    typeof price !== "number" ||
    Number.isNaN(price) ||
    price <= 0 ||
    typeof quantity !== "number" ||
    Number.isNaN(quantity) ||
    quantity <= 0 ||
    typeof discount !== "number" ||
    Number.isNaN(discount) ||
    discount < 0 ||
    discount > 100
  ) {
    return null;
  }

  // Формула: цена со скидкой, умноженная на количество
  return (price - price * (discount / 100)) * quantity;
};

// Invalid:
test("negative quantity", () => {
  expect(calculateTotal(5, -2.5, 10)).toBe(null);
});
test("negative price", () => {
  expect(calculateTotal(-5, 2.5, 10)).toBe(null);
});

test("zero price", () => {
  expect(calculateTotal(0, 2.5, 100)).toBe(null);
});

test("string discount", () => {
  expect(calculateTotal(5, 2.5, "bjnini")).toBe(null);
});

test(" zero quantity", () => {
  expect(calculateTotal(5, 0, 0)).toBe(null);
});

//valid:
test("valid calculation with discount", () => {
  // 100 - 20% = 80; 80 * 2 = 160
  expect(calculateTotal(100, 2, 20)).toBe(160);
});

test("valid calculation without discount (default 0%)", () => {
  // 100 * 2 = 200
  expect(calculateTotal(100, 2)).toBe(200);
});
