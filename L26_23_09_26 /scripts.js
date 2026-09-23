
///////////////26
const btn =  document.querySelector("button"); //Show message
const handleButtonClick = () => {console.log("Hello")};
btn.addEventListener('click', handleButtonClick);
btn.addEventListener('focus', handleButtonClick);- 2 арг - подія, ф-ція
отримка і валідація з інпута/чекбокса/текст ареа


const input = document.querySelector("input")
const handleInputChange = (event) => {console.log("Change", event.target.value)
};
InputDeviceInfo.addEventListener("input", handleInputChange);
/////
видалення обробників

btn.removeEventListener ("input", handleInputChange);
зміна деф плведінки
const link =  document.querySelector("a");
const handleLinkClick = (event) => {event.preventDefault();
    console.log("Link cick");
};
link.addEventListener("click", handleLinkClick);

const products = [
  { name: 'Ноутбук', price: 30000, inStock: true },
  { name: 'Миша', price: 800, inStock: false },
  { name: 'Клавіатура', price: 2500, inStock: false },
];

];
let filterChip = all, inStock, notInStock'

const list = document.querySelector("ul");
const filterProductd = products.filter((item)) => {
products.forEach((item) => 
    const product = `
    <li>
        <h6>${item.name}</h6>
        <p>Price: ${item.price}</p>
        <p>In stock: ${item.inStock ? "In stock" : "Not in stock"}</p>
    </li>
    `;
    list.insertAdjacentHTML("beforeend", product);
})
const handleStock buttonClick = () =>{};
inStockbtn.addEventListener()
//////
const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");


 let = inputValue = event.target.value;




const handleAddTodo = (event) =>{inputvalue =  event.target.value;
    console.log (input)
};

btn.addEventListener (Click,hamdleaddtodo)
input.addEventListener (Change handle inp change