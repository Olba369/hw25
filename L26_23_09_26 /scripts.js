
///////////////26
const btn =  document.querySelector("button"); 
const handleButtonClick = () => {console.log("Hello")};
btn.addEventListener('focus', handleButtonClick);- передпэмо 2 парам - подія, ф-ція
отримка і валідація з інпута/чекбокса/текст ареа

/////що ввели в інпут
const input = document.querySelector("input")
const handleInputChange = (event) => {console.log("Change")};
};
input.addEventListener("input", handleInputChange);
/////
видалення обробників
btn.removeEventListener ("input", handleInputChange);
/////
зміна деф поведінки
const link =  document.querySelector("a");
const handleLinkClick = (event) => {
event.preventDefault();
console.log("Link cick");
};
link.addEventListener("click", handleLinkClick);
/////
const products = [
  { name: 'Ноутбук', price: 30000, inStock: true },
  { name: 'Миша', price: 800, inStock: false },
  { name: 'Клавіатура', price: 2500, inStock: false },
];

let filterChip = "all";// inStock, notInStock'

const list = document.querySelector("ul");///

const filteredProductd = products.filter((item)) => {
if (filterChip === "all"){
    return true;
}
else if (filterChip === "inStock") 
    {if (item.inStock){
        return true;
    } else {return false;
    }
    }
else if (filterChip === "notInStock") 
 {if (item.inStock){
        return false;
    } else {return false;
    }
    }
const renderProducts = () => {}
products.forEach((item) => ////генеруємо продукт
const product = `
    <li>
        <h6>${item.name}</h6>
        <p>Price: ${item.price}</p>
        <p>In stock: ${item.inStock ? "In stock" : "Not in stock"}</p>
    </li>
    `;
    list.insertAdjacentHTML("beforeend", product);//рушимо в ліст
}) ;
const inStockBtn = document.querySelector("#inStock");
const inStockBtn = document.querySelector("#all");
const inStockBtn = document.querySelector("#notInStock");


const handleStockbuttonClick = () => {
    filterChip = "inStock"; 
    console.log(filterchip);
    renderProducts()
};
const handleAllbuttonClick = () => {
    filterChip = "inStock"; 
    console.log(filterchip);
    renderProducts()};
const handleAllbuttonClick = () => {
    filterChip = "inStock"; 
    console.log(filterchip);
    renderProducts()};
inStockBtn.addEventListener("click", handleStockbuttonClick);
allBtn.addEventListener("click", handleAllbuttonClick);
notInStockBtn.addEventListener("click", handleAllbuttonClick);






//////
const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");


 let = inputValue = "";




const handleAddTodo = () => {
    const todo = `<li>${inputValue}</li>`
    list.insertAdjacentElement ("beforeend", todo);
};
btn.addEventListener ("click", handleAddTodo)

const handleInputChange = (event) => {
    inputValue = event.target.value; // забирає значення що ввів юзер і записує його в inputValue 
};
input.addEventListener ("change", handleInputChange);