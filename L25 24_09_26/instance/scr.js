// функція яка отримує данні - id, name, price
//  та додає до юелки
// 1 створення продукту
// 2 додавання до нього класу
// 3 додавання айдішки...btn знайти куди його правильно вставити

const list = document.querySelector("ul");//создаем переменную список куда будут сохраняться созданные элементы
const createProduct = (id, name, price) => {  //при кожному виклику функції буде в лішку додавати наш продукт
const item = document.createElement("li");// <li></li>
item.classList.add("product");//<li class = "product"></li>
item.setAttribute ("id", id);// <li id = "123" class = "product"></li>

const nameElement = document.createElement("h6");//<h6 class = 'product__name'>name</h6>
nameElement.classList.add("product__name");
nameElement.textContent = name;

const priceElement = document.createElement("div");// <div class = "product__price">price</div>
priceElement.classList.add("product__price");
priceElement.textContent = price;
};
// <li id class = "product" "123" >
// <h6 class = 'product__name'>name</h6>
// <div class = "product__price">price</div>
// </li>

//vkladivaem h i did v aytem
// item.insertAdjacentElement ("beforeend", nameElement);
// item.insertAdjacentElement ("beforeend", priceElement);
item.append(nameElement, priceElement); //- додаємо елементи один за оним
list.insertAdjacentElement ("beforeend", item);
createProduct (1,'Product name 1', 1111); вызвали функцию и передали в нее значения для переменных
createProduct (2,'Product name 2', 1111);
createProduct (3,'Product name 3', 1111);
createProduct (4,'Product name 4', 1111);