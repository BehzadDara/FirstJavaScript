const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

function addTask() {
  const taskText = input.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = () => {
      todoList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    input.value = '';
  } else {
    alert('Please enter a task');
  }
}

addButton.addEventListener('click', addTask);

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
