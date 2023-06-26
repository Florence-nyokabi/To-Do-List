const userContainer = document.getElementById('task-list');
const getUsers = async () => {
  try {
    const response = await fetch('https://dummyjson.com/todos?limit=5');
    const data = await response.json();
    return data.todos;
  } catch (error) {
    console.log(error);
  }
};

const displayUsers = async () => {
  const users = await getUsers();
  console.log(users);
  users.map(item => {
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    let deleteButton = document.createElement('button');
    
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.style.marginRight = '10px';
    
    label.textContent = item.todo;
    
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        deleteTask(item.id);
        li.remove();
      });
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteButton);
      userContainer.appendChild(li);
    }); 
}
const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`https://dummyjson.com/todos/${taskId}`, {
      method: 'DELETE'
    });
  } catch (error) {
    console.log(error);
  }};
displayUsers();

const addNewTask = () => {
  const taskInput = document.getElementById('new-task');
  const newTask = taskInput.value.trim();
  taskInput.value = '';
  if (newTask) {
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    let deleteButton = document.createElement('button');
    
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '10px';

    label.textContent = newTask;

    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', () => {
      li.remove();
    });
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    userContainer.appendChild(li);
}};