export default class ToDo {
    constructor(text, tmpSelector, completeFunction, ) {
        this.text = text;
        this.tmpSelector = tmpSelector;
        this.complete = completeFunction;
        this.inputMod = false;
    }

    _doubleClickEvent = () => {
        this.todoText.addEventListener('click', this._toggleInputMod);
        setTimeout(() => this.todoText.removeEventListener('click', this._toggleInputMod), 400);
    }

    _onChange = () => {
        this.todoText.textContent = this.todoChange.value;
    }

    _onMouseClick = (e) => {
        if (e.target !== this.todoChange && e.target !== this.todoText) {
            this._toggleLabelMod();
        }
    };

    _deleteTodo = () => {
        this.todo.remove();
    }

    _handleComplete = () => {
        this.todo.classList.toggle('todo_complete');
        this.todoText.classList.toggle('todo_complete-text');
        this.complete(this.todo);
    }

    
    _onKeyDown = (e) => {
        if (e.code === "Enter") {
            this._toggleLabelMod();
            this.todoText.textContent = this.todoChange.value;
        }
    }

    _toggleLabelMod = () => {
        this.todoChange.classList.remove('todo__change-label_active');
        this.todoContainer.classList.add('todo__container_active');
        this.todoButton.addEventListener('click', this._deleteTodo);
        this.todoCompleteButton.addEventListener('click', this._handleComplete);
        this.todoChange.removeEventListener('change', this._onChange);
        this.todoChange.removeEventListener('keydown', this._onKeyDown);
        document.removeEventListener('click', this._onMouseClick);
    }

    _toggleInputMod = () => {
        this.todoChange.classList.add('todo__change-label_active');
        this.todoContainer.classList.remove('todo__container_active');
        this.todoButton.removeEventListener('click', this._deleteTodo);
        this.todoCompleteButton.removeEventListener('click', this._handleComplete);
        this.todoChange.addEventListener('change', this._onChange);
        this.todoChange.addEventListener('keydown', this._onKeyDown);
        document.addEventListener('click', this._onMouseClick);
    }

    _setEventListeners() {
        this.todoButton.addEventListener('click', this._deleteTodo);
        this.todoCompleteButton.addEventListener('click', this._handleComplete);
        this.todoText.addEventListener('click', this._doubleClickEvent);
    }

    _getTemplate() {
        return document.querySelector(this.tmpSelector).content;
    }

    getText() {
        return this.text;
    }

    getTodo() {
        this.todo = this._getTemplate().querySelector('.todo').cloneNode(true);
        this.todoText = this.todo.querySelector('.todo__text');
        this.todoCompleteButton = this.todo.querySelector('.todo__button-complete');
        this.todoButton = this.todo.querySelector('.todo__button-delete');
        this.todoChange = this.todo.querySelector('.todo__change-label');
        this.todoContainer = this.todo.querySelector('.todo__container');
        this.todoCompleteButton.textContent = 'N';
        this.todoText.textContent = this.text;
        this.todoChange.value = this.text;
        this._setEventListeners();
        return this.todo;
    }
}