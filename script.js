document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = `${taskText} <button class='deleteButton'>Delete</button>`;
    taskList.appendChild(newTask);

    taskInput.value = '';

    const deleteButton = newTask.querySelector('.deleteButton');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });
});