import { todos } from "./todoData.js";

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".close-btn");
const filterAll = document.querySelector(".filter-all");
const filterCompleted = document.querySelector(".filter-completed");
const filterIncompleted = document.querySelector(".filter-incompleted");
const filterCustom = document.querySelector(".filter-custom");
const filterOption = filterCustom.querySelector(".filter-option");
const filterOptionLi = filterCustom.querySelectorAll(".filter-option-list li");
const input = document.querySelector(".todo-input");
const addCustom = document.querySelector(".add-custom");
const addOption = addCustom.querySelector(".add-option");
const addOptionLi = addCustom.querySelectorAll(".add-option-list li");
const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".delete-btn");
const completeBtn = document.querySelector(".complete-btn");
const checkAll = document.querySelector(".check-all");
const tbody = document.querySelector("tbody");

if (!localStorage.getItem("todos")) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
let todoData = JSON.parse(localStorage.getItem("todos")) || [];

function createTodoRow(todo) {
  const tr = document.createElement("tr");
  tr.dataset.id = todo.id;
  tr.draggable = true;

  const tdCheck = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  tdCheck.appendChild(checkbox);
  tr.appendChild(tdCheck);

  const tdPriority = document.createElement("td");
  tdPriority.textContent = todo.priority;
  tr.appendChild(tdPriority);

  const tdCompleted = document.createElement("td");
  tdCompleted.textContent = todo.completed ? "Done" : "-";
  tr.appendChild(tdCompleted);

  const tdTitle = document.createElement("td");
  tdTitle.textContent = todo.title;
  tr.appendChild(tdTitle);

  return tr;
}

todoData.forEach((todo) => {
  const tr = createTodoRow(todo);
  tbody.appendChild(tr);
});

addBtn.addEventListener("click", () => {
  const title = input.value;
  const priority = addOption.getAttribute("data-value");

  if (!title) {
    alert("할 일을 입력해주세요.");
    return;
  } else if (!priority) {
    alert("중요도를 선택해주세요.");
    return;
  }

  const newTodo = {
    id: todoData.length + 1,
    title,
    completed: false,
    priority: Number(priority),
  };

  const tr = createTodoRow(newTodo);
  tbody.appendChild(tr);

  todoData.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todoData));

  input.value = "";
  resetDropdowns();
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
    completedTd.textContent = "Done";
    checkbox.checked = false;
  });

  localStorage.setItem("todos", JSON.stringify(todoData));
  checkAll.checked = false;
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

const filterTodo = (filteredData) => {
  tbody.innerHTML = filteredData
    .map((todo) => {
      const status = todo.completed ? "Done" : "-";
      return `
            <tr data-id="${todo.id}" draggable="true">
              <td><input type="checkbox"></td>
              <td>${todo.priority}</td>
              <td>${status}</td>
              <td>${todo.title}</td>
            </tr>
          `;
    })
    .join("");
};

filterAll.addEventListener("click", () => {
  filterTodo(todoData);
  resetDropdowns();
});

filterCompleted.addEventListener("click", () => {
  const filtered = todoData.filter((todo) => todo.completed === true);
  filterTodo(filtered);
  resetDropdowns();
});

filterIncompleted.addEventListener("click", () => {
  const filtered = todoData.filter((todo) => todo.completed === false);
  filterTodo(filtered);
  resetDropdowns();
});

filterCustom.addEventListener("click", (e) => {
  e.stopPropagation();
  const selectedValue = filterOption.getAttribute("data-value");
  console.log(selectedValue);
  if (!selectedValue) return;

  const selectedPriority = Number(selectedValue);
  const filtered = todoData.filter(
    (todo) => todo.priority === selectedPriority
  );

  filterTodo(filtered);
});

let dragged = null;
const dropLine = document.createElement("tr");
dropLine.innerHTML = '<td colspan="100%" id="drop-line"></td>';

tbody.addEventListener("dragstart", (e) => {
  dragged = e.target;
  e.target.classList.add("dragging");
});

tbody.addEventListener("dragover", (e) => {
  e.preventDefault();
  const target = e.target.closest("tr");
  const rect = target.getBoundingClientRect();
  const offset = e.clientY - rect.top;
  const insertAfter = offset > rect.height / 2;

  if (insertAfter) {
    tbody.insertBefore(dropLine, target.nextSibling);
  } else {
    tbody.insertBefore(dropLine, target);
  }
});

tbody.addEventListener("drop", () => {
  tbody.insertBefore(dragged, dropLine);
  dropLine.remove();

  const order = [...tbody.querySelectorAll("tr")].map((tr) => tr.dataset.id);

  todoData = order.map((id) =>
    todoData.find((todo) => todo.id.toString() === id)
  );
  localStorage.setItem("todos", JSON.stringify(todoData));
});

tbody.addEventListener("dragend", () => {
  dropLine.remove();
  if (dragged) dragged.classList.remove("dragging");
});

if (filterCustom) {
  filterCustom.addEventListener("click", (e) => {
    e.stopPropagation();
    filterCustom.classList.toggle("open");
  });
}

filterOptionLi.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const value = item.getAttribute("data-value");
    const text = item.textContent;

    if (filterOption) {
      filterOption.textContent = text;
      filterOption.setAttribute("data-value", value);
    }

    filterCustom.classList.remove("open");

    const selectedValue = filterOption.getAttribute("data-value");
    if (!selectedValue) return;

    const selectedPriority = Number(selectedValue);
    const filtered = todoData.filter(
      (todo) => todo.priority === selectedPriority
    );

    filterTodo(filtered);
  });
});

if (addCustom) {
  addCustom.addEventListener("click", (e) => {
    e.stopPropagation();
    addCustom.classList.toggle("open");
  });
}

addOptionLi.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const value = item.getAttribute("data-value");
    const text = item.textContent;

    if (addOption) {
      addOption.textContent = text;
      addOption.setAttribute("data-value", value);
    }

    addCustom.classList.remove("open");
  });
});

document.addEventListener("click", () => {
  addCustom.classList.remove("open");
});

function resetDropdowns() {
  if (filterOption) {
    filterOption.textContent = "중요도 선택";
    filterOption.removeAttribute("data-value");
  }

  if (addOption) {
    addOption.textContent = "중요도 선택";
    addOption.removeAttribute("data-value");
  }

  filterCustom.classList.remove("open");
  addCustom.classList.remove("open");
}
