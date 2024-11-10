document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    if (input.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const list = document.getElementById('todo-list');
    const newItem = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = input.value;
    newItem.appendChild(textSpan);

    // Create edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.style.marginLeft = '50px';
    editBtn.onclick = function() {
        const newText = prompt('Edit your task', textSpan.textContent);
        if (newText !== null) {
            textSpan.textContent = newText;
        }
    };

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '5px';
    deleteBtn.onclick = function() {
        list.removeChild(newItem);
    };

    // Add buttons to the new list item
    newItem.appendChild(editBtn);
    newItem.appendChild(deleteBtn);

    // Add the new list item to the list and clear input
    list.appendChild(newItem);
    input.value = '';
});
