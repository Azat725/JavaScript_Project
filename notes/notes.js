const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = []

function render() {
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes)) 
  }
}

render()

createBtn.onclick = function () {
    listElement.insertAdjacentHTML('beforeend', 
    getNoteTemplate(inputElement.value)
    )
    inputElement.value = ' '
}

function getNoteTemplate(title) {
  return `
    <li
    class="list-group-item d-flex justify-content-between 
    align-items-center"
  >
    <span>${title}</span>
    <span>
      <span class="btn btn-small btn-success">&check;</span>
      <span class="btn btn-small btn-danger">&times;</span>
    </span>
  </li>
  `
}