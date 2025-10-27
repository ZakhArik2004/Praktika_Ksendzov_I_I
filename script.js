document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.querySelector('.task-form');
    const tasksContainer = document.querySelector('.tasks-container');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const taskInput = document.querySelector('.task-input');
        const taskDescription = document.querySelector('.task-description');
        
        if (taskInput.value.trim() === '') {
            alert('Пожалуйста, введите название задачи');
            return;
        }
        
        createTaskCard(taskInput.value, taskDescription.value);
        
        taskInput.value = '';
        taskDescription.value = '';
    });

    function createTaskCard(title, description) {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';
        
        taskCard.innerHTML = `
            <h3>${escapeHtml(title)}</h3>
            ${description ? `<p>${escapeHtml(description)}</p>` : ''}
            <button class="delete-btn">Удалить</button>
        `;
        
        tasksContainer.appendChild(taskCard);
        
        const deleteBtn = taskCard.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskCard.remove();
        });
    }

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
});