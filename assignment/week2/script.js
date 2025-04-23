import { todos } from "./todoData.js";

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".close-btn");

const filterAll = document.querySelector(".filter-all");
const filterCompleted = document.querySelector(".filter-completed");
const filterIncompleted = document.querySelector(".filter-incompleted");
const input = document.querySelector(".todo-input");
const selectDrop = document.getElementById("select-drop");
const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".delete-btn");
const completeBtn = document.querySelector(".complete-btn");
const todoList = document.querySelector(".todo-list");
const checkAll = document.querySelector(".check-all");
const tbody = document.querySelector("tbody");

if (!localStorage.getItem("todos")) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
let todoData = JSON.parse(localStorage.getItem("todos")) || [];

todoData.forEach((todo) => {
  const tr = document.createElement("tr");
  tr.dataset.id = todo.id;

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

addBtn.addEventListener("click", () => {
  const title = input.value;
  const priority = selectDrop.value;

  if (!title) {
    alert("할 일을 입력해주세요.");
    return;
  } else if (!priority) {
    alert("중요도를 선택해주세요.");
    return;
  }

  const newTodo = {
    id: todoData.length + 1,
    title: title,
    completed: false,
    priority: Number(priority),
  };

  const tr = document.createElement("tr");
  tr.dataset.id = newTodo.id;

  const tdCheck = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  tdCheck.appendChild(checkbox);
  tr.appendChild(tdCheck);

  const tdPriority = document.createElement("td");
  tdPriority.textContent = priority;
  tr.appendChild(tdPriority);

  const tdCompleted = document.createElement("td");
  tdCompleted.textContent = "false";
  tr.appendChild(tdCompleted);

  const tdTitle = document.createElement("td");
  tdTitle.textContent = title;
  tr.appendChild(tdTitle);

  tbody.appendChild(tr);

  todoData.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todoData));

  input.value = "";
  selectDrop.value = "";
});

checkAll.addEventListener("change", () => {
  const checkBoxes = document.querySelectorAll("tbody input[type='checkbox']");
  checkBoxes.forEach((checkbox) => {
    checkbox.checked = checkAll.checked;
  });
});

tbody.addEventListener("change", (event) => {
  const checkBoxes = document.querySelectorAll("tbody input[type='checkbox']");
  let allChecked = true;

  checkBoxes.forEach((checkbox) => {
    if (!checkbox.checked) {
      allChecked = false;
    }
  });
  checkAll.checked = allChecked;
});

deleteBtn.addEventListener("click", () => {
  const checkedBoxes = document.querySelectorAll(
    "tbody input[type='checkbox']:checked"
  );

  checkedBoxes.forEach((checkbox) => {
    const tr = checkbox.closest("tr");
    const todoId = tr.dataset.id;
    todoData = todoData.filter((todo) => Number(todo.id) !== Number(todoId));
    tr.remove();
  });

  localStorage.setItem("todos", JSON.stringify(todoData));
  checkAll.checked = false;
});

completeBtn.addEventListener("click", () => {
  const checkedBoxes = document.querySelectorAll(
    "tbody input[type='checkbox']:checked"
  );

  checkedBoxes.forEach((checkbox) => {
    const tr = checkbox.closest("tr");
    const todoId = tr.dataset.id;

    const completedTodo = todoData.find(
      (todo) => Number(todo.id) === Number(todoId)
    );

    if (completedTodo.completed == true) {
      modal.style.display = "block";
      return;
    }

    completedTodo.completed = true;

    const completedTd = tr.querySelector("td:nth-child(3)");
    completedTd.textContent = "true";
    checkbox.checked = false;
  });

  localStorage.setItem("todos", JSON.stringify(todoData));
  checkAll.checked = false;
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});
