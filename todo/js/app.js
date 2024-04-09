const form = document.getElementById('form');
const inputTitle = document.getElementById('title');
const inputDescription = document.getElementById('description');
const inputDueDate = document.getElementById('duedate');
const checkboxes = document.getElementById('field-checkboxes')
const inputLow = document.getElementById('low');
const inputMedium = document.getElementById('medium');
const inputHigh = document.getElementById('high');
const inputNotes = document.getElementById('notes');
const submit = document.getElementById('submitBtn');
const output = document.getElementById('result')
let notesContainer = [];
let checkboxValue = ''

submit.addEventListener('click', lookInfo);
checkboxes.addEventListener('click', lookCheckbox);
document.addEventListener('DOMContentLoaded', function() {
    notesContainer = JSON.parse(localStorage.getItem('notes')) || [];
    mostrarHTML()

})

function lookCheckbox(e) {
    if(e.target.id === 'low') {
        checkboxValue = e.target.id;
    } else if((e.target.id === 'medium')) {
        checkboxValue = e.target.id;
    } else if(e.target.id === 'high') {
        checkboxValue = e.target.id;
    }
}

function lookInfo(e) {
    e.preventDefault();
    const todoInfo = {
        title: inputTitle.value,
        description: inputDescription.value,
        dueDate: inputDueDate.value,
        priority: checkboxValue,
        notes: inputNotes.value,
        id: Date.now()
    }

    notesContainer = [...notesContainer, todoInfo];

    sincronizarStorage()
    mostrarHTML();
    form.reset();
}

function sincronizarStorage() {
    localStorage.setItem('notes', JSON.stringify(notesContainer));
}

function mostrarHTML() {
    limpiarHTML()
    notesContainer.forEach(note => {
        const {title, description, dueDate, priority, notes, id} = note;
        const container = document.createElement('div');
        container.innerHTML = `
            <h2>${title}</h2>
            <p>${description}</p>
            <p>Due date: ${dueDate}</p>
            <ul>
            <li>${priority}</li>
            </ul>
            <p>${notes}</p>
            <button class="delete" onclick="removeItem(${id})">Delete</button>
        `;
        container.classList.add('containerDiv')
        output.appendChild(container);
    })
}

function limpiarHTML() {
    while(output.firstChild) {
        output.removeChild(output.firstChild)
    }
}

function removeItem(id) {
    notesContainer = notesContainer.filter(item => item.id !== id);
    sincronizarStorage()
    mostrarHTML()
}