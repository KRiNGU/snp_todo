export default class ToDo {
    constructor(text, tmpSelector, completeFunction, deleteFunction, isCompleted, id, update) {
        this.text = text;
        this.tmpSelector = tmpSelector;
        this.complete = completeFunction;
        this.deleteFunction = deleteFunction;
        this.isCompleted = isCompleted;
        this.id = id;
        this.update = update;
    }

    _handleCompleteView = () => {
        this.todo.classList.toggle('todo_complete');
        this.todo.classList.toggle('todo_incomplete');
        this.todoCompleteButton.textContent = this.todoCompleteButton.textContent === 'N' ? 'Y' : 'N';
    }

    _onChange = () => {
        this.todoText.textContent = this.todoChange.value;
    }

    _onBlur = (e) => {
        this._toggleLabelMod();
        this.update(this.todoText.textContent, this.id);
        if (!this.todoChange.value) {
            this._deleteTodo();
        }
    };

    _deleteTodo = () => {
        this.todo.remove();
        this.deleteFunction(this.isCompleted, this.id);
    }

    _handleComplete = () => {
        this._handleCompleteView();
        this.isCompleted = !this.isCompleted;
        this.complete(this.todo, this.id);
    }

    
    _onKeyDown = (e) => {
        if (e.code === 'Enter') {
            this._toggleLabelMod();
            this.todoText.textContent = this.todoChange.value;
            this.update(this.todoText.textContent, this.id);
            if (!this.todoChange.value) { 
                this._deleteTodo();
            }
        }
        if (e.code ===  'Escape') {
            this._toggleLabelMod();
            this.todoChange.value = this.todoText.textContent;
        }
    }

    _toggleLabelMod = () => {
        this.todoChange.classList.remove('todo__change-label_active');
        this.todoContainer.classList.add('todo__container_active');
        this.deleteTodoButton.addEventListener('click', this._deleteTodo);
        this.todoCompleteButton.addEventListener('click', this._handleComplete);
        this.todoChange.removeEventListener('change', this._onChange);
        this.todoChange.removeEventListener('keydown', this._onKeyDown);
        this.todoChange.removeEventListener('blur', this._onBlur);
    }

    _toggleInputMod = () => {
        this.todoChange.classList.add('todo__change-label_active');
        this.todoContainer.classList.remove('todo__container_active');
        this.deleteTodoButton.removeEventListener('click', this._deleteTodo);
        this.todoCompleteButton.removeEventListener('click', this._handleComplete);
        this.todoChange.addEventListener('change', this._onChange);
        this.todoChange.addEventListener('keydown', this._onKeyDown);
        this.todoChange.focus();
        this.todoChange.addEventListener('blur', this._onBlur);
    }

    _setEventListeners() {
        this.deleteTodoButton.addEventListener('click', this._deleteTodo);
        this.todoCompleteButton.addEventListener('click', this._handleComplete);
        this.todoText.addEventListener('dblclick', this._toggleInputMod);
    }

    _getTemplate() {
        return document.querySelector(this.tmpSelector).content;
    }

    getId = () => this.id;

    getTodo() {
        this.todo = this._getTemplate().querySelector('.todo').cloneNode(true);
        this.todoText = this.todo.querySelector('.todo__text');
        this.todoCompleteButton = this.todo.querySelector('.todo__button-complete');
        this.deleteTodoButton = this.todo.querySelector('.todo__button-delete');
        this.todoChange = this.todo.querySelector('.todo__change-label');
        this.todoContainer = this.todo.querySelector('.todo__container');
        this.todoCompleteButton.textContent = 'N';
        this.todo.classList.add('todo_incomplete');
        if (this.isCompleted) 
            this._handleCompleteView();
        this.todoText.textContent = this.text;
        this.todoChange.value = this.text;
        this._setEventListeners();
        return this.todo;
    }
}