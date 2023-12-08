const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

const KEY_ITEM = "item";

const CLASS = "class";
const ID = "id";

let todoItems = [];

function localSavedTodos() {
  localStorage.setItem(KEY_ITEM, JSON.stringify(todoItems));
}

function addListItem(todoItem) {
  const li = document.createElement("li");
  li.id = todoItem.id;
  li.setAttribute(CLASS, "li");
  const todoItemBox = document.createElement("span");
  const deleteItemBox = document.createElement("button");
  deleteItemBox.setAttribute(CLASS, "delete-Btn");
  li.appendChild(todoItemBox);
  todoItemBox.innerText = todoItem.text;
  li.appendChild(deleteItemBox);
  deleteItemBox.innerText = "-del-";
  todoList.appendChild(li);
  deleteItemBox.addEventListener("click", onDeleteItemClick);
}

function onDeleteItemClick(e) {
  const li = e.target.parentElement;
  todoItems = todoItems.filter((todoItem) => todoItem.id !== parseInt(li.id));
  li.remove();
  localSavedTodos();
}

function onTodoFormSubmit(e) {
  e.preventDefault();
  const todoItem = todoInput.value;
  todoInput.value = "";
  const todoItemObj = {
    text: todoItem,
    id: Date.now(),
  };
  todoItems.push(todoItemObj);
  localSavedTodos();
  addListItem(todoItemObj);
}

todoForm.addEventListener("submit", onTodoFormSubmit);

const savedTodos = localStorage.getItem(KEY_ITEM);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todoItems = parsedTodos;
  parsedTodos.forEach(addListItem);
}
