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
            this.update(this.todoText.textContent, this.isCompleted, this.id);
            if (this.todoChange.value === '') {
                this._deleteTodo();
            }
        }
    };

    _deleteTodo = () => {
        this.todo.remove();
        this.deleteFunction(this.isCompleted, this.id);
    }

    _handleComplete = () => {
        this.todo.classList.toggle('todo_complete');
        this.todoText.classList.toggle('todo_complete-text');
        this.todoCompleteButton.classList.toggle('todo__button-complete_completed');
        this.todoCompleteButton.textContent = this.todoCompleteButton.textContent === "N" ? "Y" : "N";
        this.isCompleted = !this.isCompleted;
        this.complete(this.todo, this.text, this.isCompleted, this.id);
    }

    
    _onKeyDown = (e) => {
        if (e.code === "Enter") {
            this._toggleLabelMod();
            this.todoText.textContent = this.todoChange.value;
            this.update(this.todoText.textContent, this.isCompleted, this.id);
            if (this.todoChange.value === '') { 
                this._deleteTodo();
            }
        }
        if (e.code ===  "Escape") {
            this._toggleLabelMod();
            this.todoChange.value = this.todoText.textContent;
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
        this.todo.addEventListener('mouseover', () => {
            this.todoButton.classList.remove('hidden');
        })
        this.todo.addEventListener('mouseout', () => {
            this.todoButton.classList.add('hidden');
        })

    }

    _getTemplate() {
        return document.querySelector(this.tmpSelector).content;
    }

    getText() {
        return this.text;
    }

    getId = () => {
        return this.id;
    }

    getTodo() {
        this.todo = this._getTemplate().querySelector('.todo').cloneNode(true);
        this.todoText = this.todo.querySelector('.todo__text');
        this.todoCompleteButton = this.todo.querySelector('.todo__button-complete');
        this.todoButton = this.todo.querySelector('.todo__button-delete');
        this.todoChange = this.todo.querySelector('.todo__change-label');
        this.todoContainer = this.todo.querySelector('.todo__container');
        this.todoCompleteButton.textContent = 'N';
        if (this.isCompleted) {
            this.todo.classList.toggle('todo_complete');
            this.todoText.classList.toggle('todo_complete-text');
            this.todoCompleteButton.classList.toggle('todo__button-complete_completed');
            this.todoCompleteButton.textContent = this.todoCompleteButton.textContent === "N" ? "Y" : "N";
        }
        this.todoText.textContent = this.text;
        this.todoChange.value = this.text;
        this._setEventListeners();
        return this.todo;
    }
}