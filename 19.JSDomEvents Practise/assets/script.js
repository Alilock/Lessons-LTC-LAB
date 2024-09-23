const deleteTask = (li) => {

    const deleteButton = li.querySelector('.delete');

    deleteButton.addEventListener('click', (e) => {
        li.remove();
    })
}

const completeTodoTask = (li) => {
    const completeButton = li.querySelector('.complete');

    completeButton.addEventListener('click', (e) => {
        li.style.textDecoration = 'line-through';
    })
}
const addTaskTODO = (data) => {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `<li>${data.task}
    <button class="delete">Delete</button>
    <button class="complete">Complete</button>
    </li>`;
    taskList.appendChild(li);

    deleteTask(li)
    completeTodoTask(li)
}


main();



function main() {

    const addTask = document.getElementById('addTask');
    const xButton = document.getElementById('xbutton');
    xButton.addEventListener('click', (e) => {
        addTask.previousElementSibling.value = ''
    })
    addTask.addEventListener('click', (e) => {
        const value = addTask.previousElementSibling.value
        if (!value) return;
        const data = {
            task: value,
            status: false
        }
        addTaskTODO(data);
        addTask.previousElementSibling.value = ''
    });

}


