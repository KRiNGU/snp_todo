import ToDo from "./js/ToDo.js";
import "./scss/main.scss";
const todosEl = document.querySelector(".todos");
const  deleteButtonEl = document.querySelector('.todo__delete-completed');
const filterAllEl = document.querySelector('.all');
const filterCompletedEl = document.querySelector('.completed');
const filterIncompletedEl = document.querySelector('.incompleted');
let cardsArray = JSON.parse(localStorage.getItem('cards'));
if (!cardsArray) {
    cardsArray = [];
    updateLocalStorage(cardsArray);
}
const completedEl = document.querySelector('.completed__number');

function updateLocalStorage(cardsArray) {
    localStorage.setItem('cards', JSON.stringify(cardsArray));
}

const doAll = () => {
    todosEl.classList.remove('todos_completed');
    todosEl.classList.remove('todos_incompleted');
}

const doCompleted = () => {
    todosEl.classList.add('todos_completed');
    todosEl.classList.remove('todos_incompleted');
}

const doIncompleted = () => {
    todosEl.classList.remove('todos_completed');
    todosEl.classList.add('todos_incompleted');
}

filterAllEl.addEventListener('click', doAll);
filterCompletedEl.addEventListener('click', doCompleted);
filterIncompletedEl.addEventListener('click', doIncompleted);

const toggleComplete = (todo, id) => {
    if ([...todo.classList].includes('todo_complete')) {
        completedEl.textContent++;
         deleteButtonEl.classList.add('todo__delete-completed_active');
    }
    else {
        completedEl.textContent--;
        if (completedEl.textContent === '0') {
             deleteButtonEl.classList.remove('todo__delete-completed_active');
        }
    }
    const currentTodo = cardsArray.find(elem => elem.id === id);
    currentTodo.isCompleted = !currentTodo.isCompleted;
     updateLocalStorage(cardsArray)
}

const initToDoMass = (name, isCompleted, id) => {
    const newToDo = getNewTodo(name, isCompleted, id).getTodo();
    todosEl.append(newToDo);
}

function update(text, id) {
    const currentTodo = cardsArray.find(elem => elem.id === id);
    currentTodo.name = text;
     updateLocalStorage(cardsArray)
}

const getNewTodo = (name, isCompleted, id) => {
    return new ToDo(name, '.todo__template', (todo, text, isCompleted, id) => toggleComplete(todo, text, isCompleted, id), (isCompleted, id) => deleteToDo(isCompleted, id), isCompleted, id, (text, isCompleted, id) => update(text, isCompleted, id));
}

const createToDo = (name) => {
    let newToDoName = name.trim();
    if (!newToDoName) {
        return;
    }
    const newToDo = getNewTodo(name, false, Date.now());
    const todo = newToDo.getTodo();
    todosEl.append(todo);
    cardsArray.push({name: name, isCompleted: false, id: newToDo.getId()});
     updateLocalStorage(cardsArray)
}

const deleteToDo = (isCompleted, id) => {
    if (isCompleted) {
        completedEl.textContent--;
    }
    if (completedEl.textContent === '0') {
        deleteButtonEl.classList.remove('todo__delete-completed_active');
    }
    cardsArray = cardsArray.filter(elem => elem.id !== id);
     updateLocalStorage(cardsArray)
}

const deleteCompleted = () => {
    document.querySelectorAll('.todo.todo_complete').forEach(el => el.remove());
    cardsArray = cardsArray.filter((elem) => elem.isCompleted === false);
     updateLocalStorage(cardsArray)
    completedEl.textContent = 0;
     deleteButtonEl.classList.remove('todo__delete-completed_active');
}

function onInputNewTodo(e) {
    if (e.code === "Enter") {
        createToDo(e.target.value);
        e.target.value = '';
    }
}

cardsArray.forEach(elem => {
    initToDoMass(elem.name, elem.isCompleted, elem.id); 
});

const completedCardsNum = cardsArray.filter(task => task.isCompleted).length;
completedEl.textContent = completedCardsNum
if (completedCardsNum) {
  deleteButtonEl.classList.add('todo__delete-completed_active');
}

document.querySelector('.todo__delete-completed').addEventListener('click', ()=>deleteCompleted())
document.querySelector('.todo__input').addEventListener('keydown', (e)=>onInputNewTodo(e));
