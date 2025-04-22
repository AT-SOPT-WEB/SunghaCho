import { todos } from "./todoData.js";

const filterAll = document.querySelector(".filter-all");
const filterCompleted = document.querySelector(".filter-completed");
const filterIncompleted = document.querySelector(".filter-incompleted");

const input = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".delete-btn");
const completeBtn = document.querySelector(".complete-btn");
const todoList = document.querySelector(".todo-list");
const tbody = document.querySelector("tbody");

localStorage.setItem("todos", JSON.stringify(todos));
const todoData = JSON.parse(localStorage.getItem("todos"));

todoData.forEach((todo) => {
  const tr = document.createElement("tr");

  const tdCheck = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  tdCheck.appendChild(checkbox);
  tr.appendChild(tdCheck);

  const tdPriority = document.createElement("td");
  tdPriority.textContent = todo.priority;
  tr.appendChild(tdPriority);

  const tdCompleted = document.createElement("td");
  tdCompleted.textContent = todo.completed;
  tr.appendChild(tdCompleted);

  const tdTitle = document.createElement("td");
  tdTitle.textContent = todo.title;
  tr.appendChild(tdTitle);

  tbody.appendChild(tr);
});
