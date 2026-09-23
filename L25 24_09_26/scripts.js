const btn = document.querySelector("nav button"); - знайти елемент
console.log(btn.hasAttribute("role"));//true/false

btn.setAttribute("class", "button"); - додавання атрибутів - (назва атрибуту та занчення)
if (!btn.hasAttribute ("role")){btn.setAttribute("role", "admin")};
else {btn.removeAttribute ("role")};

btn.classList.add("btn"); - додати клас елементу
console.log(btn.innerHTML); - вертє хтмл елемента
console.log(btn.textContent); - вертає txt елемента
btn.textContent = "Cart(3)"; - змінює/додає текстовий контент
btn.innerHTML = "Cart <span>(2)</span>";  - змінює хтмл
 
додавати елементи в список, - cделать розметку, до/после элемента/вначале/вконце
const logo = document.querySelector("h1");
logo.insertAdjacentHTML//v chto dobavliaem// ("beforebegin", "<li>Item 3 </li>") "куди", "хтмл" 

Створення та Додвання тега в розмітку
const element3 = document.createElement ("li");<li></li> - створення елементв
 element3.classList.add("item");<li class = "item"></li> - add class
 element3.textContent = "Item 3"; <li class = "item">Item 3</li>
list.insertAdjacentElement("afterbegin", element3 );куди та який єлемент

функція яка отримує данні - id, name, price
 та додає до юелки
1 створення продукту
2 додавання до нього класу
3 додавання айдішки...btn знайти куди його правильно вставити

const list = document.querySelector ("ul");создаем переменную список куда будут сохраняться созданные элементы
const createProduct = (id, name, price) => {};  при кожному виклику функції буде в лішку додавати наш продукт
const item = document.createElement ("li"); <li></li>
item.classList.add("product");<li class = "product"></li>
item.setAttribute ("id", id); <li id = "123" class = "product"></li>

const nameElement = document.createElement("h6");<h6 class = 'product__name'>name</h6>
nameElement.classList.add("product__name");
nameElement.textContent = name;

const priceElement = document.createElement("div"); <div class = "product__price">price</div>
priceElement.classList.add("product__price");
priceElement.textContent = price;

<li id class = "product" "123" >
<h6 class = 'product__name'>name</h6>
<div class = "product__price">price</div>
</li>

//vkladivaem h i did v aytem
// item.insertAdjacentElement ("beforeend", nameElement);
// item.insertAdjacentElement ("beforeend", priceElement);
item.append (nameElement, priceElement); - додаємо елементи один за оним
list.insertAdjacentElement ("beforeend", item);
createProduct (1,'Product name 1', 1111); вызвали функцию и передали в нее значения для переменных
createProduct (2,'Product name 2', 1111);
createProduct (3,'Product name 3', 1111);
createProduct (4,'Product name 4', 1111);