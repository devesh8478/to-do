// Get references to HTML elements
const todoInput = document.getElementById('input');
const todoList = document.getElementById('todo-list');

// Function to add a new todo
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    // Create a new list item
    const li = document.createElement('li');
    li.innerText = todoText;

    // Add event listener to mark item as completed
    li.addEventListener('click', function() {
      li.classList.toggle('completed');
    });

    // Append the new item to the todo list
    todoList.appendChild(li);

    // Clear the input field
    todoInput.value = '';
  }
}
