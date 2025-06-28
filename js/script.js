// script.js
document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  // Function to create a new task element
  function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    const span = document.createElement('span');
    span.textContent = taskText;
    span.style.flexGrow = '1';
    span.addEventListener('click', () => {
      span.classList.toggle('completed');
    });

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm btn-secondary me-2';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      const newTask = prompt('Edit task:', span.textContent);
      if (newTask !== null && newTask.trim() !== '') {
        span.textContent = newTask.trim();
      }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-danger';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    return li;
  }

  // Event listener for adding a task
  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const taskItem = createTaskElement(taskText);
      taskList.appendChild(taskItem);
      taskInput.value = '';
    }
  });

  // Optional: Add task on Enter key press
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTaskBtn.click();
    }
  });
});