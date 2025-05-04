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

// localStorage에서 todo 불러오기
if (!localStorage.getItem("todos")) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
let todoData = JSON.parse(localStorage.getItem("todos")) || [];

// To-Do row 생성 함수수
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

// todo 데이터 출력
todoData.forEach((todo) => {
  const tr = createTodoRow(todo);
  tbody.appendChild(tr);
});

// 새로운 Todo 생성 및 추가
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

  const maxId = todoData.reduce((max, todo) => Math.max(max, todo.id), 0);

  const newTodo = {
    id: maxId + 1,
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

// 전체 선택/해제 기능
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

// 선택 항목 삭제
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

// 선택 항목 완료 처리 및 모달
completeBtn.addEventListener("click", () => {
  const checkedBoxes = document.querySelectorAll(
    "tbody input[type='checkbox']:checked"
  );

  if (
    Array.from(checkedBoxes).some(
      (checkbox) =>
        todoData.find(
          (todo) =>
            Number(todo.id) === Number(checkbox.closest("tr").dataset.id)
        )?.completed
    )
  ) {
    document.getElementById("modal-text").textContent =
      "이미 완료된 todo입니다.";
    modal.classList.add("show");
    return;
  }

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

// 필터링 기능
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

function handleFilter(isCompleted) {
  const filtered = todoData.filter((todo) => todo.completed === isCompleted);
  filterTodo(filtered);
  resetDropdowns();
}

filterCompleted.addEventListener("click", () => handleFilter(true));
filterIncompleted.addEventListener("click", () => handleFilter(false));

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

// 드래그 앤 드롭 기능
let dragged = null;
const dropLine = document.createElement("tr");
dropLine.innerHTML = '<td colspan="100%" id="drop-line"></td>';

tbody.addEventListener("dragstart", (e) => {
  dragged = e.target;
  e.target.classList.add("dragging");
});

tbody.addEventListener("dragover", (e) => {
  e.preventDefault();
  const targetRow = e.target.closest("tr");
  const { top: rowTop, height: rowHeight } = targetRow.getBoundingClientRect();
  const mouseY = e.clientY;
  const isMouseInLowerHalf = mouseY > rowTop + rowHeight / 2;

  if (isMouseInLowerHalf) {
    tbody.insertBefore(dropLine, targetRow.nextSibling);
  } else {
    tbody.insertBefore(dropLine, targetRow);
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

// 커스텀 드롭다운 옵션 처리
filterOptionLi.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const value = item.getAttribute("data-value");
    const text = item.textContent;

    if (filterOption) {
      filterOption.innerHTML = `${text} <img src="./assets/ic-drop.svg" alt="드롭다운 아이콘" />`;
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
      addOption.innerHTML = `${text} <img src="./assets/ic-drop.svg" alt="드롭다운 아이콘" />`;
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
    filterOption.innerHTML = `
    중요도
    <img src="./assets/ic-drop.svg" alt="드롭다운 아이콘" />
  `;
    filterOption.removeAttribute("data-value");
  }

  if (addOption) {
    addOption.innerHTML = `
  중요도 선택
  <img src="./assets/ic-drop.svg" alt="드롭다운 아이콘" />
`;
    addOption.removeAttribute("data-value");
  }

  filterCustom.classList.remove("open");
  addCustom.classList.remove("open");
}
