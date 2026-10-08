1. Структура данных Map (Коллекция ключ-значение)
Как делается: Создается через new Map().
Добавление элементов: map.set(key, value).
Проверка наличия ключа: map.has(key).
Получение значения: map.get(key).
Удаление: map.delete(key).
Для чего: Удобна для хранения связанных пар «ключ — значение», где ключом может быть любой тип данных (в отличие от обычных объектов, где ключи — строки/символы).
Что возвращает:
set() возвращает саму коллекцию Map.
has() возвращает логическое значение (true или false).
get() возвращает значение по ключу (или undefined, если ключ не найден).
delete() возвращает true, если элемент был успешно удален, и false, если такого ключа не нашлось.
Пример кода:
JavaScript
const capitals = new Map();
capitals.set("Україна", "Київ");
capitals.set("Франція", "Париж");


console.log(capitals.has("Україна")); // true
console.log(capitals.get("Франція")); // Париж


capitals.delete("Франція");
console.log(capitals.size); // 1




2. Структура данных Set (Коллекция уникальных значений)
Как делается: Создается через new Set().
Добавление элементов: set.add(value).
Проверка наличия: set.has(value).
Для чего: Используется для хранения только уникальных значений (дубликаты автоматически игнорируются) и быстрой проверки их наличия.
Что возвращает:
add() возвращает обновленный Set.
has() возвращает true или false.
Пример кода:
JavaScript
const numbers = new Set();
numbers.add(10);
numbers.add(20);
numbers.add(10); // Дубликат проигнорируется


console.log(numbers.has(10)); // true
console.log(numbers.size); // 2 (только 10 и 20)




3. Методы работы с массивами (очередь / стек)
push(element)
Как делается: array.push(value)
Для чего: Добавляет один или несколько элементов в конец массива.
Что возвращает: Новую длину массива (число).
Пример кода:
JavaScript
const fruits = ["яблуко", "банан"];
const newLength = fruits.push("груша");
console.log(fruits); // ["яблуко", "банан", "груша"]
console.log(newLength); // 3




pop()
Как делается: array.pop()
Для чего: Удаляет последний элемент из конца массива.
Что возвращает: Удаленный элемент.
Пример кода:
JavaScript
const fruits = ["яблуко", "банан", "груша"];
const removed = fruits.pop();
console.log(fruits); // ["яблуко", "банан"]
console.log(removed); // "груша"




unshift(element)
Как делается: array.unshift(value)
Для чего: Добавляет один или несколько элементов в начало массива.
Что возвращает: Новую длину массива (число).
Пример кода:
JavaScript
const fruits = ["банан", "груша"];
fruits.unshift("яблуко");
console.log(fruits); // ["яблуко", "банан", "груша"]




shift()
Как делается: array.shift()
Для чего: Удаляет первый элемент из начала массива.
Что возвращает: Удаленный элемент.
Пример кода:
JavaScript
const fruits = ["яблуко", "банан", "груша"];
const first = fruits.shift();
console.log(fruits); // ["банан", "груша"]
console.log(first); // "яблуко"




4. Поиск элементов в массиве (примитивы)
indexOf(value)
Как делается: array.indexOf(value)
Для чего: Ищет первое вхождение указанного значения в массиве.
Что возвращает: Индекс найденного элемента (число) или -1, если элемент не найден.
Пример кода:
JavaScript
const colors = ["червоний", "зелений", "синій"];
console.log(colors.indexOf("зелений")); // 1
console.log(colors.indexOf("жовтий")); // -1




lastIndexOf(value)
Как делается: array.lastIndexOf(value)
Для чего: Ищет последнее вхождение указанного значения в массиве (двигаясь с конца).
Что возвращает: Индекс найденного элемента или -1.
Пример кода:
JavaScript
const numbers = [1, 2, 3, 2, 1];
console.log(numbers.lastIndexOf(2)); // 3 (находит последнюю двойку)




includes(value)
Как делается: array.includes(value)
Для чего: Проверяет, содержит ли массив определенное значение.
Что возвращает: Логическое значение (true или false).
Пример кода:
JavaScript
const animals = ["кіт", "собака"];
console.log(animals.includes("кіт")); // true
console.log(animals.includes("лев")); // false




5. Методы высшего порядка для массивов (с Callback-функциями)
forEach(callback)
Как делается: array.forEach(function(item, index) { ... })
Для чего: Выполняет указанную функцию один раз для каждого элемента массива (используется для перебора без создания нового массива).
Что возвращает: Всегда возвращает undefined (служит для побочных эффектов, например, подсчета суммы).
Пример кода:
JavaScript
const numbers = [1, 2, 3];
numbers.forEach(function(num) {
  console.log(num * 2); 
});
// Выведет: 2, 4, 6




find(callback)
Как делается: array.find(function(item) { return condition; })
Для чего: Ищет первый элемент массива, который удовлетворяет условию в функции-колбэке.
Что возвращает: Сам найденный элемент (объект или значение) либо undefined, если ничего не подошло.
Пример кода:
JavaScript
const scores = [45, 60, 80, 30];
const highGrade = scores.find(function(score) {
  return score > 50;
});
console.log(highGrade); // 60 (первое число больше 50)




findIndex(callback)
Как делается: array.findIndex(function(item) { return condition; })
Для чего: Ищет индекс первого элемента, удовлетворяющего условию.
Что возвращает: Индекс элемента (число) или -1, если элемент не найден.
Пример кода:
JavaScript
const scores = [45, 60, 80, 30];
const index = scores.findIndex(function(score) {
  return score > 50;
});
console.log(index); // 1 (элемент 60 стоит на индексе 1)




map(callback)
Как делается: array.map(function(item) { ... return newValue; })
Для чего: Создает новый массив, трансформируя каждый элемент исходного массива по заданному правилу.
Что возвращает: Новый массив с измененными элементами той же длины.
Пример кода:
JavaScript
const numbers = [1, 2, 3];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6]




filter(callback)
Как делается: array.filter(function(item) { return condition; })
Для чего: Создает новый массив, включающий в себя только те элементы исходного массива, для которых callback-функция вернула true.
Что возвращает: Новый массив с отфильтрованными элементами (может быть пустым [], если ничего не подошло).
Пример кода:
JavaScript
const ages = [15, 22, 18, 12, 30];
const adults = ages.filter(function(age) {
  return age >= 18;
});
console.log(adults); // [22, 18, 30]




6. Циклы
Классический цикл for
Как делается: for (let i = 0; i < array.length; i++) { ... }
Для чего: Ручной перебор элементов по индексам с возможностью контролировать шаг и направление.
Что возвращает: Сам по себе цикл ничего не возвращает (undefined), но внутри него можно накапливать значения в переменные или прерывать выполнение через return / break.
Пример кода:
JavaScript
const letters = ["a", "b", "c"];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}
// Выведет: "a", "b", "c"




Цикл for...of
Как делается: for (const item of array) { ... } или for (const [key, value] of map) { ... }
Для чего: Удобный и чистый перебор значений элементов массива или пар ключ-значение в коллекциях (Map).
Что возвращает: Ничего (undefined), используется для обхода коллекций.
Пример кода:
JavaScript
const words = ["привіт", "світ"];
for (const word of words) {
  console.log(word);
}
// Выведет: "привіт", "світ"





