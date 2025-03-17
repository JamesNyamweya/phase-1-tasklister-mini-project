document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form");
    let taskList = document.getElementById("tasks");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let taskInput = document.getElementById("new-task-description");
        let taskText = taskInput.value;

        if (taskText !== "") {
            let taskItem = document.createElement("li");
            taskItem.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.style.marginLeft = "10px";
            deleteButton.addEventListener("click", () => {
                taskList.removeChild(taskItem);
            });

            taskList.appendChild(taskItem);
            taskList.appendChild(deleteButton);
        }

        taskInput.value = "";
    });
});
