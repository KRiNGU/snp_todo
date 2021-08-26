import "./scss/main.scss";
import ToDo from "./js/ToDo.js";
const todos = document.querySelector(".todos");
const deleteButton = document.querySelector('.todo__delete-completed');
const filterAll = document.querySelector('.all');
const filterCompleted = document.querySelector('.completed');
const filterIncompleted = document.querySelector('.incompleted');
let currentFilter = 'All';
let cardMass = JSON.parse(localStorage.getItem('cards'));
if (!cardMass) {
    cardMass = [];
    localStorage.setItem('cards', JSON.stringify(cardMass));
}
const completed = document.querySelector('.completed__number');

const doFilterAll = () => {
    filterCompleted.classList.remove('current');
    filterIncompleted.classList.remove('current');
    filterAll.classList.add('current');
    const allTodos = document.querySelectorAll('.todo');
    [...allTodos].forEach((elem) => {
        elem.classList.add('todo_active');
    });
    currentFilter = 'All';
}

const doFilterCompleted = () => {
    filterCompleted.classList.add('current');
    filterIncompleted.classList.remove('current');
    filterAll.classList.remove('current');
    const allTodos = document.querySelectorAll('.todo');
    [...allTodos].forEach((elem) => {
        elem.classList.remove('todo_active');
        if ([...elem.classList].includes('todo_complete')) {
            elem.classList.add('todo_active');
        }
    });
    currentFilter = 'Completed';
}

const doFilterIncompleted = () => {
    filterCompleted.classList.remove('current');
    filterIncompleted.classList.add('current');
    filterAll.classList.remove('current');
    const allTodos = document.querySelectorAll('.todo');
    [...allTodos].forEach((elem) => {
        elem.classList.remove('todo_active');
        if (![...elem.classList].includes('todo_complete')){
            elem.classList.add('todo_active');
        }
    });
    currentFilter = 'Incompleted';
}

filterAll.addEventListener('click', doFilterAll);
filterCompleted.addEventListener('click', doFilterCompleted);
filterIncompleted.addEventListener('click', doFilterIncompleted);

const toggleComplete = (todo, text, isCompleted, id) => {
    if ([...todo.classList].includes('todo_complete')) {
        completed.textContent++;
        deleteButton.classList.add('todo__delete-completed_active');
    }
    else {
        completed.textContent--;
        if (completed.textContent === '0') {
            deleteButton.classList.remove('todo__delete-completed_active');
        }
    }
    cardMass[cardMass.findIndex(elem => elem.id === id)] = {name: text, isCompleted: isCompleted, id: id};
    console.log(cardMass);
    localStorage.setItem('cards', JSON.stringify(cardMass));
    switch (currentFilter) {
        case 'All':
            doFilterAll();
            break;
        case 'Completed':
            doFilterCompleted();
            break;
        case 'Incompleted':
            doFilterIncompleted();
            break;
        default:
            break;
    }
}

const initToDoMass = (name, isCompleted, id) => {
    const newToDo = getNewTodo(name, isCompleted, id).getTodo();
    todos.append(newToDo);
    if (isCompleted) {
        completed.textContent++;
        deleteButton.classList.add('todo__delete-completed_active');
    }
}

function update(text, isCompleted, id) {
    cardMass[cardMass.findIndex(elem => elem.id === id)] = {name: text, isCompleted: isCompleted, id: id};
    localStorage.setItem('cards', JSON.stringify(cardMass));
}

const getNewTodo = (name, isCompleted, id) => {
    return new ToDo(name, '.todo__template', (todo, text, isCompleted, id) => toggleComplete(todo, text, isCompleted, id), (isCompleted, id) => deleteToDo(isCompleted, id), isCompleted, id, (text, isCompleted, id) => update(text, isCompleted, id));
}

cardMass.forEach(elem => {
    initToDoMass(elem.name, elem.isCompleted, elem.id);
});

const createToDo = (name) => {
    let newToDoName = name;
    while (newToDoName.charAt(0) === ' ') {
        newToDoName = newToDoName.substr(1);
    }
    if (newToDoName) {
        const newToDo = getNewTodo(name, false, Date.now());
        const todo = newToDo.getTodo();
        todos.append(todo);
        if (currentFilter === 'Completed') {
            todo.classList.remove('todo_active');
        }
        cardMass.push({name: name, isCompleted: false, id: newToDo.getId()});
        localStorage.setItem('cards', JSON.stringify(cardMass));
    }
}

const deleteToDo = (isCompleted, id) => {
    if (isCompleted) {
        completed.textContent--;
    }
    if (completed.textContent === '0') {
        deleteButton.classList.remove('todo__delete-completed_active');
    }
    cardMass = cardMass.filter(elem => elem.id !== id);
    localStorage.setItem('cards', JSON.stringify(cardMass));
}

const deleteCompleted = () => {
    const allTodos = document.querySelectorAll('.todo');
    [...allTodos].forEach((elem) => {
        if ([...elem.classList].includes('todo_complete')) {
            elem.remove();
        }
    });
    cardMass = cardMass.filter((elem) => elem.isCompleted === false);
    localStorage.setItem('cards', JSON.stringify(cardMass));
    completed.textContent = 0;
    deleteButton.classList.remove('todo__delete-completed_active');
}

function keyPressedInInput(e) {
    if (e.code === "Enter") {
        createToDo(e.target.value);
        e.target.value = '';
    }
}

document.querySelector('.todo__delete-completed').addEventListener('click', ()=>deleteCompleted())
document.querySelector('.todo__input').addEventListener('keydown', (e)=>keyPressedInInput(e));
