/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://snp_todo/./src/scss/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_ToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ToDo.js */ \"./src/js/ToDo.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n\nconst todosEl = document.querySelector(\".todos\");\nconst  deleteButtonEl = document.querySelector('.todo__delete-completed');\nconst filterAllEl = document.querySelector('.all');\nconst filterCompletedEl = document.querySelector('.completed');\nconst filterIncompletedEl = document.querySelector('.incompleted');\nlet cardsArray = JSON.parse(localStorage.getItem('cards'));\nif (!cardsArray) {\n    cardsArray = [];\n    updateLocalStorage(cardsArray);\n}\nconst completedEl = document.querySelector('.completed__number');\n\nfunction updateLocalStorage(cardsArray) {\n    localStorage.setItem('cards', JSON.stringify(cardsArray));\n}\n\nconst doAll = () => {\n    todosEl.classList.remove('todos_completed');\n    todosEl.classList.remove('todos_incompleted');\n}\n\nconst doCompleted = () => {\n    todosEl.classList.add('todos_completed');\n    todosEl.classList.remove('todos_incompleted');\n}\n\nconst doIncompleted = () => {\n    todosEl.classList.remove('todos_completed');\n    todosEl.classList.add('todos_incompleted');\n}\n\nfilterAllEl.addEventListener('click', doAll);\nfilterCompletedEl.addEventListener('click', doCompleted);\nfilterIncompletedEl.addEventListener('click', doIncompleted);\n\nconst toggleComplete = (todo, id) => {\n    if ([...todo.classList].includes('todo_complete')) {\n        completedEl.textContent++;\n         deleteButtonEl.classList.add('todo__delete-completed_active');\n    }\n    else {\n        completedEl.textContent--;\n        if (completedEl.textContent === '0') {\n             deleteButtonEl.classList.remove('todo__delete-completed_active');\n        }\n    }\n    const currentTodo = cardsArray.find(elem => elem.id === id);\n    currentTodo.isCompleted = !currentTodo.isCompleted;\n     updateLocalStorage(cardsArray)\n}\n\nconst initToDoMass = (name, isCompleted, id) => {\n    const newToDo = getNewTodo(name, isCompleted, id).getTodo();\n    todosEl.append(newToDo);\n}\n\nfunction update(text, id) {\n    const currentTodo = cardsArray.find(elem => elem.id === id);\n    currentTodo.name = text;\n     updateLocalStorage(cardsArray)\n}\n\nconst getNewTodo = (name, isCompleted, id) => {\n    return new _js_ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default(name, '.todo__template', (todo, text, isCompleted, id) => toggleComplete(todo, text, isCompleted, id), (isCompleted, id) => deleteToDo(isCompleted, id), isCompleted, id, (text, isCompleted, id) => update(text, isCompleted, id));\n}\n\nconst createToDo = (name) => {\n    let newToDoName = name.trim();\n    if (!newToDoName) {\n        return;\n    }\n    const newToDo = getNewTodo(name, false, Date.now());\n    const todo = newToDo.getTodo();\n    todosEl.append(todo);\n    cardsArray.push({name: name, isCompleted: false, id: newToDo.getId()});\n     updateLocalStorage(cardsArray)\n}\n\nconst deleteToDo = (isCompleted, id) => {\n    if (isCompleted) {\n        completedEl.textContent--;\n    }\n    if (completedEl.textContent === '0') {\n        deleteButtonEl.classList.remove('todo__delete-completed_active');\n    }\n    cardsArray = cardsArray.filter(elem => elem.id !== id);\n     updateLocalStorage(cardsArray)\n}\n\nconst deleteCompleted = () => {\n    document.querySelectorAll('.todo.todo_complete').forEach(el => el.remove());\n    cardsArray = cardsArray.filter((elem) => elem.isCompleted === false);\n     updateLocalStorage(cardsArray)\n    completedEl.textContent = 0;\n     deleteButtonEl.classList.remove('todo__delete-completed_active');\n}\n\nfunction onInputNewTodo(e) {\n    if (e.code === \"Enter\") {\n        createToDo(e.target.value);\n        e.target.value = '';\n    }\n}\n\ncardsArray.forEach(elem => {\n    initToDoMass(elem.name, elem.isCompleted, elem.id); \n});\n\nconst completedCardsNum = cardsArray.filter(task => task.isCompleted).length;\ncompletedEl.textContent = completedCardsNum\nif (completedCardsNum) {\n  deleteButtonEl.classList.add('todo__delete-completed_active');\n}\n\ndocument.querySelector('.todo__delete-completed').addEventListener('click', ()=>deleteCompleted())\ndocument.querySelector('.todo__input').addEventListener('keydown', (e)=>onInputNewTodo(e));\n\n\n//# sourceURL=webpack://snp_todo/./src/index.js?");

/***/ }),

/***/ "./src/js/ToDo.js":
/*!************************!*\
  !*** ./src/js/ToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\n    constructor(text, tmpSelector, completeFunction, deleteFunction, isCompleted, id, update) {\n        this.text = text;\n        this.tmpSelector = tmpSelector;\n        this.complete = completeFunction;\n        this.deleteFunction = deleteFunction;\n        this.isCompleted = isCompleted;\n        this.id = id;\n        this.update = update;\n    }\n\n    _onChange = () => {\n        this.todoText.textContent = this.todoChange.value;\n    }\n\n    _onBlur = (e) => {\n        this._toggleLabelMod();\n        this.update(this.todoText.textContent, this.id);\n        if (!this.todoChange.value) {\n            this._deleteTodo();\n        }\n    };\n\n    _deleteTodo = () => {\n        this.todo.remove();\n        this.deleteFunction(this.isCompleted, this.id);\n    }\n\n    _handleComplete = () => {\n        this.todo.classList.toggle('todo_complete');\n        this.todo.classList.toggle('todo_incomplete');\n        this.todoText.classList.toggle('todo_complete-text');\n        this.todoCompleteButton.classList.toggle('todo__button-complete_completed');\n        this.todoCompleteButton.textContent = this.todoCompleteButton.textContent === \"N\" ? \"Y\" : \"N\";\n        this.isCompleted = !this.isCompleted;\n        this.complete(this.todo, this.id);\n    }\n\n    \n    _onKeyDown = (e) => {\n        if (e.code === \"Enter\") {\n            this._toggleLabelMod();\n            this.todoText.textContent = this.todoChange.value;\n            this.update(this.todoText.textContent, this.id);\n            if (!this.todoChange.value) { \n                this._deleteTodo();\n            }\n        }\n        if (e.code ===  \"Escape\") {\n            this._toggleLabelMod();\n            this.todoChange.value = this.todoText.textContent;\n        }\n    }\n\n    _toggleLabelMod = () => {\n        this.todoChange.classList.remove('todo__change-label_active');\n        this.todoContainer.classList.add('todo__container_active');\n        this.deleteTodoButton.addEventListener('click', this._deleteTodo);\n        this.todoCompleteButton.addEventListener('click', this._handleComplete);\n        this.todoChange.removeEventListener('change', this._onChange);\n        this.todoChange.removeEventListener('keydown', this._onKeyDown);\n        this.todoChange.removeEventListener('blur', this._onBlur);\n    }\n\n    _toggleInputMod = () => {\n        this.todoChange.classList.add('todo__change-label_active');\n        this.todoContainer.classList.remove('todo__container_active');\n        this.deleteTodoButton.removeEventListener('click', this._deleteTodo);\n        this.todoCompleteButton.removeEventListener('click', this._handleComplete);\n        this.todoChange.addEventListener('change', this._onChange);\n        this.todoChange.addEventListener('keydown', this._onKeyDown);\n        this.todoChange.focus();\n        this.todoChange.addEventListener('blur', this._onBlur);\n    }\n\n    _setEventListeners() {\n        this.deleteTodoButton.addEventListener('click', this._deleteTodo);\n        this.todoCompleteButton.addEventListener('click', this._handleComplete);\n        this.todoText.addEventListener('dblclick', this._toggleInputMod);\n    }\n\n    _getTemplate() {\n        return document.querySelector(this.tmpSelector).content;\n    }\n\n    getId = () => this.id;\n\n    getTodo() {\n        this.todo = this._getTemplate().querySelector('.todo').cloneNode(true);\n        this.todoText = this.todo.querySelector('.todo__text');\n        this.todoCompleteButton = this.todo.querySelector('.todo__button-complete');\n        this.deleteTodoButton = this.todo.querySelector('.todo__button-delete');\n        this.todoChange = this.todo.querySelector('.todo__change-label');\n        this.todoContainer = this.todo.querySelector('.todo__container');\n        this.todoCompleteButton.textContent = 'N';\n        this.todo.classList.add('todo_incomplete');\n        if (this.isCompleted) {\n            this.todo.classList.toggle('todo_complete');\n            this.todo.classList.toggle('todo_incomplete');\n            this.todoText.classList.toggle('todo_complete-text');\n            this.todoCompleteButton.classList.toggle('todo__button-complete_completed');\n            this.todoCompleteButton.textContent = this.todoCompleteButton.textContent === \"N\" ? \"Y\" : \"N\";\n        }\n        this.todoText.textContent = this.text;\n        this.todoChange.value = this.text;\n        this._setEventListeners();\n        return this.todo;\n    }\n}\n\n//# sourceURL=webpack://snp_todo/./src/js/ToDo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;