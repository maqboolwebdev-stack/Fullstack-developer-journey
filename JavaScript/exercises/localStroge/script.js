const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('ul');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todoText, index) => {
    const li = document.createElement('li');
    const del = document.createElement('button');
    del.textContent = 'Delete';
    li.textContent = todoText;
    li.classList = 'li';
    li.append(del);
    list.append(li);

    del.addEventListener('click', delTodo);
  });
}

function delTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

function addTodo() {
  if (!input.value.trim()) return;

  todos.push(input.value);
  saveTodos();
  renderTodos();
  input.value = '';
  input.focus();
}

btn.addEventListener('click', addTodo);

renderTodos();

window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
  if (e.key === 'Delete') {
    delTodo();
  }
});
