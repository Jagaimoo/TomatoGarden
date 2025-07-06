const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("label");
  label.textContent = taskText;

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(label);
  taskList.appendChild(taskDiv);

  taskInput.value = "";
});

// Aggiunta tramite "Enter"
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});
