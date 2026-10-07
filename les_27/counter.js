const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const currentValue = document.querySelector("h1");

let value = 0;

currentValue.innerText = value;

const handleIncrementValue = () => {
  value = value + 1;
  currentValue.innerText = value;
};

incrementBtn.addEventListener("click", handleIncrementValue);

const handleDecrementBtnValue = () => {
  value = value - 1;
  currentValue.innerText = value;
};

decrementBtn.addEventListener("click", handleDecrementBtnValue);