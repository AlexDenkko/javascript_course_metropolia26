// Tehtävälista
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const list = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const addButton = document.querySelector('.add-btn');
const form = dialog.querySelector('form');
const input = form.querySelector('input');

// Seuraavan uuden tehtävän tunniste
let nextId = Math.max(...todoList.map(todo => todo.id)) + 1;

// Luo yhden tehtävän HTML-elementit
function createTodoElement(todo) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  checkbox.id = `todo-${todo.id}`;

  const label = document.createElement('label');
  label.htmlFor = checkbox.id;
  label.textContent = todo.task;

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete';

  // T1.1: Päivitä completed-arvo, kun valintaruutua napsautetaan
  checkbox.addEventListener('change', () => {
    const item = todoList.find(item => item.id === todo.id);

    if (item) {
      item.completed = checkbox.checked;
    }

    console.log(todoList);
  });

  // T1.2: Poista tehtävä
  deleteButton.addEventListener('click', () => {
    const index = todoList.findIndex(item => item.id === todo.id);

    if (index !== -1) {
      todoList.splice(index, 1);
    }

    // Poista HTML-elementti listasta
    list.removeChild(li);

    console.log(todoList);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteButton);

  return li;
}

// Näytä kaikki tehtävät sivulla
function renderTodoList() {
  list.innerHTML = '';

  todoList.forEach(todo => {
    const li = createTodoElement(todo);
    list.appendChild(li);
  });
}

// T1.3: Avaa uuden tehtävän lisäysikkuna
addButton.addEventListener('click', () => {
  dialog.showModal();
  input.focus();
});

// T1.3: Lisää uusi tehtävä, kun lomake lähetetään
form.addEventListener('submit', event => {
  event.preventDefault();

  const taskName = input.value.trim();

  // Älä lisää tyhjää tehtävää
  if (taskName === '') {
    input.focus();
    return;
  }

  const newTodo = {
    id: nextId,
    task: taskName,
    completed: false,
  };

  nextId += 1;

  todoList.push(newTodo);

  // Lisää uusi tehtävä sivulle
  list.appendChild(createTodoElement(newTodo));

  // Tyhjennä lomake ja sulje ikkuna
  input.value = '';
  dialog.close();

  console.log(todoList);
});

// Näytä alkuperäiset tehtävät
renderTodoList();
