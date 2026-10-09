
const sum = (a, b) => {
    return a + b;
};
test('sum two positive numbers', () => { 
    expect(sum(1, 2)).toBe(3);
});




//////htuekzhyb dshfps//////
const str = "мій кіт спить"
str.includes("кіт");
//includes - перший збіг///
const re = /кіт/;
re.test("мій кіт спить");

//global - всі збіги///
const re = /кіт/g;//flag
console.log("Мій кіт спить і твій теж".match(re));

/////includes - trim - toLowerCase
const result = "Мій Кіт спить і твій теж".toLowerCase().includes("кIт".trim().leLowerCase());
console.log(result);



////// i - ignore case - не враховує регістр///
const re = /кіт/i;
console.log("Мій Кіт спить і твій теж".match(re));

//шукати цифру Gthie
const re = /\d/;
console.log(re.test("кімната 1"));

//шукати latin simbols
const re = /\w/;//A || 0 || _
console.log(re.test("кімната 1"));

//serch spaces
const re = /\s/;
console.log(re.test(`кімната 1`));

////// .///
const re = /к.т/gi;
console.log("Мій Кіт спить і твій Кот теж".match(re));

//////один з цих символів///
const re = /к[аоу]т/gi;
console.log("Мій Кот спить і твій КЗт теж".match(re));

//////КРІМ цих символів///
const re = /к[^аоу]т/gi;
console.log("Мій Кот спить і твій КЗт теж".match(re));

///перший випадок де заданої кількісті символів підряд
const re =/\d{4}/;
console.log("12/02/2026".match(re));

///від 3 до 4 перший випадок де заданої кількісті символів підряд
const re =/\d{4}/;
console.log("12/02/999/2026".match(re));

//////чи починається рядок з заданого слова

const str = "Привіт! як справи?";
console.log(str.startsWith("Привіт!"));
//endsWith
const re = /^Привіт!/;
console.log(re.test("Привіт! як справи"));

//////чи start рядок з заданого слова
const re = /Привіт!$/;
console.log(re.test("Як справи. Привіт! "));

const regexp = /^\d{5}$/; // start || end
console.log(regexp.test(12345));
console.log(regexp.test("00000a"));
console.log(regexp.test(12));
console.log(regexp.test("a12345"));


////// 9 і не більше
const regexp = /^\+380\d{9}$/;

console.log(regexp.test("0731002341"));
console.log(regexp.test("+380731002341")); //true
console.log(regexp.test("+380 73 100 2341")); //t
console.log(regexp.test("+380731002_41"));
console.log(regexp.test("+380731002$41"));
console.log(regexp.test("+380002341"));
console.log(regexp.test("+38073100000002341"));
console.log(regexp.test("+380731002341a"));
console.log(regexp.test("a+380731002341a"));
console.log(regexp.test("380731002341"));
console.log(regexp.test("80731002341"));
