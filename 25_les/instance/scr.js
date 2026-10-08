// функція яка отримує данні - id, name, price
//  та додає до юелки
// 1 створення продукту
// 2 додавання до нього класу
// 3 додавання айдішки...btn знайти куди його правильно вставити

const list = document.querySelector("ul");
//Переменная list становится коробкой), куда будут складываться все созданные товары.
const createProduct = (id, name, price) => {  //при кожному виклику функції 
    //буде в лішку додавати наш продукт
const item = `
<li id class = "product" id = "${id}" >
<h6 class = 'product__name'>${name} </h6>
<div class = "product__price">${price}</div>
</li>`;
};
list.insertAdjacentHTML("beforeend", item);

const products = [
  { id: 1, name: "Product name 1", price: 100 },
  { id: 2, name: "Product name 2", price: 200 },
  { id: 3, name: "Product name 3", price: 300 },
  { id: 4, name: "Product name 4", price: 400 },
];

products.forEach ((product) => {// product =  { id: 1, name: "Product name 1", price: 100 },
createProduct(product.id, product.name, product.price,)
});
