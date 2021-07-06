import "./scss/main.scss";
import ToDo from "./js/ToDo.js";
const todos = document.querySelector(".todos");
const deleteButton = document.querySelector('.todo__delete-completed');
let completed = [];
const filterAll = document.querySelector('.filter__all');
const filterCompleted = document.querySelector('.filter__completed');
const filterIncompleted = document.querySelector('.filter__incompleted');
let currentFilter = '';

const doFilterAll = () => {
    const allTodos = document.querySelectorAll('.todo');
    [...allTodos].forEach((elem) => {
        elem.classList.add('todo_active');
    });
    currentFilter = 'All';
}

const doFilterCompleted = () => {
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

const toggleComplete = (todo) => {
    const buttonText = todo.querySelector('.todo__button-complete');
    if (!completed.find(x => x === todo)) {
        buttonText.textContent = 'Y';
        completed.push(todo);
        deleteButton.classList.add('todo__delete-completed_active');
    }
    else {
        buttonText.textContent = 'N';
        completed = completed.filter(elem => todo !== elem);
        if (completed.length === 0) {
            deleteButton.classList.remove('todo__delete-completed_active');
        }
    }
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

const addToDo = (name) => {
    const newToDo = new ToDo(name, '.todo__template', (elem)=>toggleComplete(elem), document).getTodo();
    todos.append(newToDo);
}

const deleteCompleted = () => {
    completed.forEach(elem => elem.remove());
    deleteButton.classList.remove('todo__delete-completed_active');
}

function keyPressedInInput(e) {
    if (e.code === "Enter") {
        addToDo(e.target.value);
        e.target.value = '';
    }
}

document.querySelector('.todo__delete-completed').addEventListener('click', ()=>deleteCompleted())
document.querySelector('.todo__input').addEventListener('keydown', (e)=>keyPressedInInput(e));

addToDo('first');
addToDo('second');
addToDo('third');
addToDo('forth');
addToDo('fifth');
