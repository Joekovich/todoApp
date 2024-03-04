function addTodo() {
    let todoInput = document.getElementById("todoInput");
    let dueDate = document.getElementById("dueDate");
    let todoList = document.getElementById("todoList");

    if(todoInput.value.trim() === "" || dueDate.value.trim() === "") {
        alert("Please enter a todo and select a date.");
        return;
    }

    //Create new list items
    let li = document.createElement("li");
    let todotext = document.createTextNode(todoInput.value + "(By: " + dueDate.value + ")");
    li.appendChild(todotext);

    //Add the new item to the list
    todoList.appendChild(li);

    //Clear the input fields
    todoInput.value = "";
    dueDate.value = "";
}

console.log(dueDate);