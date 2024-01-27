// Получаем элементы DOM
const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');
const notes = [];

// Функция для отрисовки заметок
function render() {
  listElement.innerHTML = '';
  
  if (notes.length === 0) {
    listElement.innerHTML = '<p class="text-light">Заметок нет</p>';
  } else {
    notes.forEach((note, index) => {
      listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note, index));
    });
  }
}

// Функция для добавления новой заметки
function addNote(title) {
  if (title.trim() === '') { //проверка на наличие пустой строки или пробелов
    return;
  }
  
  const newNote = {
    title: title,
    completed: false,
  };
  
  notes.push(newNote);
  render();
  inputElement.value = '';
}

// Функция для переключения статуса выполнения заметки
function toggleNoteCompletion(index) {
  notes[index].completed = !notes[index].completed;
  render();
}

// Функция для удаления заметки
function deleteNote(index) {
  notes.splice(index, 1);
  render();
}

// Функция для получения HTML-шаблона заметки
function getNoteTemplate(note, index) {
  const textDecoration = note.completed ? 'text-decoration-line-through' : '';
  const checkBtnColor = note.completed ? 'warning' : 'success';

  const template = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="${textDecoration}">${note.title}</span>
      <span>
        <span class="btn btn-small btn-${checkBtnColor}" onclick="toggleNoteCompletion(${index})">&check;</span>
        <span class="btn btn-small btn-danger" onclick="deleteNote(${index})">&times;</span>
      </span>
    </li>
  `;

  return template;
}

// Инициализация отображения
render();

// Обработчик нажатия кнопки "Создать"
createBtn.onclick = function () {
  addNote(inputElement.value);
};

// Обработчик нажатия клавиши "Enter" в поле ввода
inputElement.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addNote(inputElement.value);
  }
});
