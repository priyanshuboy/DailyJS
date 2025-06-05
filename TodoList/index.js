const input = document.querySelector('.input');
const button = document.querySelector('.button');
const todolist = document.querySelector('.todo');

button.addEventListener('click', () => {
  const todo = input.value.trim();

  if (todo !== '') {
    const li = document.createElement('li');
    li.style.marginTop = '10px';

    const span = document.createElement('span');
    span.textContent = todo;

    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.classList.add('deletebutton');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('editbutton');

    // Append text and buttons to li
    li.appendChild(span);
    li.appendChild(deletebtn);
    li.appendChild(editBtn);

    // Add li to the todo list
    todolist.appendChild(li);

    // Clear input
    input.value = '';

    // Delete logic
    deletebtn.addEventListener('click', () => {
      li.remove(); // This removes span, editBtn, and deleteBtn all together
    });

    // Optional: Edit logic
    editBtn.addEventListener('click', () => {
      const newTodo = prompt('Edit your todo:', span.textContent);
      if (newTodo !== null) {
        span.textContent = newTodo.trim();
      }
    });
  }
});
