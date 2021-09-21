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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_ToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ToDo.js */ \"./src/js/ToDo.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\r\n\r\nconst todosEl = document.querySelector('.todos');\r\nconst  deleteButtonEl = document.querySelector('.todo__delete-completed');\r\nconst filterAllEl = document.querySelector('.all');\r\nconst filterCompletedEl = document.querySelector('.completed');\r\nconst filterIncompletedEl = document.querySelector('.incompleted');\r\nlet cardsArray = JSON.parse(localStorage.getItem('cards'));\r\nif (!cardsArray) {\r\n    cardsArray = [];\r\n    updateLocalStorage(cardsArray);\r\n}\r\nconst completedEl = document.querySelector('.completed__number');\r\n\r\nfunction updateLocalStorage(cardsArray) {\r\n    localStorage.setItem('cards', JSON.stringify(cardsArray));\r\n}\r\n\r\nconst doAll = () => {\r\n    todosEl.classList.remove('todos_completed');\r\n    todosEl.classList.remove('todos_incompleted');\r\n    filterAllEl.classList.add('current');\r\n    filterCompletedEl.classList.remove('current');\r\n    filterIncompletedEl.classList.remove('current');\r\n}\r\n\r\nconst doCompleted = () => {\r\n    todosEl.classList.add('todos_completed');\r\n    todosEl.classList.remove('todos_incompleted');\r\n    filterCompletedEl.classList.add('current');\r\n    filterAllEl.classList.remove('current');\r\n    filterIncompletedEl.classList.remove('current');\r\n}\r\n\r\nconst doIncompleted = () => {\r\n    todosEl.classList.remove('todos_completed');\r\n    todosEl.classList.add('todos_incompleted');\r\n    filterIncompletedEl.classList.add('current');\r\n    filterCompletedEl.classList.remove('current');\r\n    filterAllEl.classList.remove('current');\r\n}\r\n\r\nfilterAllEl.addEventListener('click', doAll);\r\nfilterCompletedEl.addEventListener('click', doCompleted);\r\nfilterIncompletedEl.addEventListener('click', doIncompleted);\r\n\r\nconst toggleComplete = (todo, id) => {\r\n    if ([...todo.classList].includes('todo_complete')) {\r\n        completedEl.textContent++;\r\n         deleteButtonEl.classList.add('todo__delete-completed_active');\r\n    }\r\n    else {\r\n        completedEl.textContent--;\r\n        if (completedEl.textContent === '0') {\r\n             deleteButtonEl.classList.remove('todo__delete-completed_active');\r\n        }\r\n    }\r\n    const currentTodo = cardsArray.find(elem => elem.id === id);\r\n    currentTodo.isCompleted = !currentTodo.isCompleted;\r\n     updateLocalStorage(cardsArray)\r\n}\r\n\r\nconst initToDoMass = (name, isCompleted, id) => {\r\n    const newToDo = getNewTodo(name, isCompleted, id).getTodo();\r\n    todosEl.append(newToDo);\r\n}\r\n\r\nfunction update(text, id) {\r\n    const currentTodo = cardsArray.find(elem => elem.id === id);\r\n    currentTodo.name = text;\r\n     updateLocalStorage(cardsArray)\r\n}\r\n\r\nconst getNewTodo = (name, isCompleted, id) => {\r\n    return new _js_ToDo_js__WEBPACK_IMPORTED_MODULE_0__.default(name, '.todo__template', (todo, text, isCompleted, id) => toggleComplete(todo, text, isCompleted, id), (isCompleted, id) => deleteToDo(isCompleted, id), isCompleted, id, (text, isCompleted, id) => update(text, isCompleted, id));\r\n}\r\n\r\nconst createToDo = (name) => {\r\n    let newToDoName = name.trim();\r\n    if (!newToDoName) {\r\n        return;\r\n    }\r\n    const newToDo = getNewTodo(name, false, Date.now());\r\n    const todo = newToDo.getTodo();\r\n    todosEl.append(todo);\r\n    cardsArray.push({name: name, isCompleted: false, id: newToDo.getId()});\r\n     updateLocalStorage(cardsArray)\r\n}\r\n\r\nconst deleteToDo = (isCompleted, id) => {\r\n    if (isCompleted) {\r\n        completedEl.textContent--;\r\n    }\r\n    if (completedEl.textContent === '0') {\r\n        deleteButtonEl.classList.remove('todo__delete-completed_active');\r\n    }\r\n    cardsArray = cardsArray.filter(elem => elem.id !== id);\r\n     updateLocalStorage(cardsArray)\r\n}\r\n\r\nconst deleteCompleted = () => {\r\n    document.querySelectorAll('.todo.todo_complete').forEach(el => el.remove());\r\n    cardsArray = cardsArray.filter((elem) => elem.isCompleted === false);\r\n     updateLocalStorage(cardsArray)\r\n    completedEl.textContent = 0;\r\n     deleteButtonEl.classList.remove('todo__delete-completed_active');\r\n}\r\n\r\nfunction onInputNewTodo(e) {\r\n    if (e.code === 'Enter') {\r\n        createToDo(e.target.value);\r\n        e.target.value = '';\r\n    }\r\n}\r\n\r\ncardsArray.forEach(elem => {\r\n    initToDoMass(elem.name, elem.isCompleted, elem.id); \r\n});\r\n\r\nconst completedCardsNum = cardsArray.filter(task => task.isCompleted).length;\r\ncompletedEl.textContent = completedCardsNum\r\nif (completedCardsNum) {\r\n  deleteButtonEl.classList.add('todo__delete-completed_active');\r\n}\r\n\r\ndocument.querySelector('.todo__delete-completed').addEventListener('click', ()=>deleteCompleted())\r\ndocument.querySelector('.todo__input').addEventListener('keydown', (e)=>onInputNewTodo(e));\r\n\n\n//# sourceURL=webpack://snp_todo/./src/index.js?");

/***/ }),

/***/ "./src/js/ToDo.js":
/*!************************!*\
  !*** ./src/js/ToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\r\n    constructor(text, tmpSelector, completeFunction, deleteFunction, isCompleted, id, update) {\r\n        this.text = text;\r\n        this.tmpSelector = tmpSelector;\r\n        this.complete = completeFunction;\r\n        this.deleteFunction = deleteFunction;\r\n        this.isCompleted = isCompleted;\r\n        this.id = id;\r\n        this.update = update;\r\n    }\r\n\r\n    _handleCompleteView = () => {\r\n        this.todo.classList.toggle('todo_complete');\r\n        this.todo.classList.toggle('todo_incomplete');\r\n        this.todoCompleteButton.textContent = this.todoCompleteButton.textContent === 'N' ? 'Y' : 'N';\r\n    }\r\n\r\n    _onChange = () => {\r\n        this.todoText.textContent = this.todoChange.value;\r\n    }\r\n\r\n    _onBlur = (e) => {\r\n        this._toggleLabelMod();\r\n        this.update(this.todoText.textContent, this.id);\r\n        if (!this.todoChange.value) {\r\n            this._deleteTodo();\r\n        }\r\n    };\r\n\r\n    _deleteTodo = () => {\r\n        this.todo.remove();\r\n        this.deleteFunction(this.isCompleted, this.id);\r\n    }\r\n\r\n    _handleComplete = () => {\r\n        this._handleCompleteView();\r\n        this.isCompleted = !this.isCompleted;\r\n        this.complete(this.todo, this.id);\r\n    }\r\n\r\n    \r\n    _onKeyDown = (e) => {\r\n        if (e.code === 'Enter') {\r\n            this._toggleLabelMod();\r\n            this.todoText.textContent = this.todoChange.value;\r\n            this.update(this.todoText.textContent, this.id);\r\n            if (!this.todoChange.value) { \r\n                this._deleteTodo();\r\n            }\r\n        }\r\n        if (e.code ===  'Escape') {\r\n            this._toggleLabelMod();\r\n            this.todoChange.value = this.todoText.textContent;\r\n        }\r\n    }\r\n\r\n    _toggleLabelMod = () => {\r\n        this.todoChange.classList.remove('todo__change-label_active');\r\n        this.todoContainer.classList.add('todo__container_active');\r\n        this.deleteTodoButton.addEventListener('click', this._deleteTodo);\r\n        this.todoCompleteButton.addEventListener('click', this._handleComplete);\r\n        this.todoChange.removeEventListener('change', this._onChange);\r\n        this.todoChange.removeEventListener('keydown', this._onKeyDown);\r\n        this.todoChange.removeEventListener('blur', this._onBlur);\r\n    }\r\n\r\n    _toggleInputMod = () => {\r\n        this.todoChange.classList.add('todo__change-label_active');\r\n        this.todoContainer.classList.remove('todo__container_active');\r\n        this.deleteTodoButton.removeEventListener('click', this._deleteTodo);\r\n        this.todoCompleteButton.removeEventListener('click', this._handleComplete);\r\n        this.todoChange.addEventListener('change', this._onChange);\r\n        this.todoChange.addEventListener('keydown', this._onKeyDown);\r\n        this.todoChange.focus();\r\n        this.todoChange.addEventListener('blur', this._onBlur);\r\n    }\r\n\r\n    _setEventListeners() {\r\n        this.deleteTodoButton.addEventListener('click', this._deleteTodo);\r\n        this.todoCompleteButton.addEventListener('click', this._handleComplete);\r\n        this.todoText.addEventListener('dblclick', this._toggleInputMod);\r\n    }\r\n\r\n    _getTemplate() {\r\n        return document.querySelector(this.tmpSelector).content;\r\n    }\r\n\r\n    getId = () => this.id;\r\n\r\n    getTodo() {\r\n        this.todo = this._getTemplate().querySelector('.todo').cloneNode(true);\r\n        this.todoText = this.todo.querySelector('.todo__text');\r\n        this.todoCompleteButton = this.todo.querySelector('.todo__button-complete');\r\n        this.deleteTodoButton = this.todo.querySelector('.todo__button-delete');\r\n        this.todoChange = this.todo.querySelector('.todo__change-label');\r\n        this.todoContainer = this.todo.querySelector('.todo__container');\r\n        this.todoCompleteButton.textContent = 'N';\r\n        this.todo.classList.add('todo_incomplete');\r\n        if (this.isCompleted) \r\n            this._handleCompleteView();\r\n        this.todoText.textContent = this.text;\r\n        this.todoChange.value = this.text;\r\n        this._setEventListeners();\r\n        return this.todo;\r\n    }\r\n}\n\n//# sourceURL=webpack://snp_todo/./src/js/ToDo.js?");

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