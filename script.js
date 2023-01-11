const todoList = document.getElementById("todo-list");
const addButton = document.getElementById("add-button");
const removeButton = document.getElementById("remove-button");
const newTask = document.getElementById("new-task");

addButton.addEventListener("click", function() {
  // Create a new list item
  const task = document.createElement("li");
  task.innerHTML = newTask.value;
  task.addEventListener('click', (e) => {
      removeButton.disabled = false;
      removeButton.style.cursor = "pointer";
      removeButton.addEventListener("click", function() {
          e.target.remove();
          removeButton.style.cursor = "not-allowed";
          removeButton.disabled = true;
      });
  });
  // Add the new task to the list
  todoList.appendChild(task);

  // Clear the input field
  newTask.value = "";
});
