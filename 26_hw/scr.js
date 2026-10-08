const list = document.querySelector(".todo-list");
const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = input.value.trim();

  if (!value) return;

  const li = document.createElement("li");
  
  li.textContent = value;

  list.append(li);

  form.reset();
});