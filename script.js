//your code here
document.addEventListener("DOMContentLoaded", function () {
    const newTodoInput = document.getElementById("newTodoInput");
    const addTodoBtn = document.getElementById("addTodoBtn");
    const todoList = document.getElementById("todoList");

    // Function to add a new todo item
    function addTodo() {
        const newTodoText = newTodoInput.value.trim(); // Trim whitespace from input value

        if (newTodoText !== "") { // Check if input value is not empty
            const newTodoItem = document.createElement("li");
            newTodoItem.textContent = newTodoText;

            // Add delete and update buttons to the new todo item
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", function () {
                todoList.removeChild(newTodoItem); // Remove todo item when delete button is clicked
            });

            const updateBtn = document.createElement("button");
            updateBtn.textContent = "Update";
            updateBtn.addEventListener("click", function () {
                const updatedText = prompt("Enter updated todo item:", newTodoText);
                if (updatedText !== null && updatedText.trim() !== "") {
                    newTodoItem.textContent = updatedText.trim(); // Update todo item text
                }
            });

            newTodoItem.appendChild(deleteBtn);
            newTodoItem.appendChild(updateBtn);

            todoList.appendChild(newTodoItem);

            newTodoInput.value = ""; // Clear input value after adding todo
        }
    }

    addTodoBtn.addEventListener("click", addTodo);

    // Additional feature: Replace input value with empty string after clicking todo item
    todoList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            newTodoInput.value = ""; // Clear input value
        }
    });
});
