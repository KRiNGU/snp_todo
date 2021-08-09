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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _js_ToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ToDo.js */ \"./src/js/ToDo.js\");\n\r\n\r\nconst todos = document.querySelector(\".todos\");\r\nconst deleteButton = document.querySelector('.todo__delete-completed');\r\nconst filterAll = document.querySelector('.all');\r\nconst filterCompleted = document.querySelector('.completed');\r\nconst filterIncompleted = document.querySelector('.incompleted');\r\nlet currentFilter = 'All';\r\nlet cardMass = JSON.parse(localStorage.getItem('cards'));\r\nif (!cardMass) {\r\n    cardMass = [];\r\n    localStorage.setItem('cards', JSON.stringify(cardMass));\r\n}\r\nconst completed = document.querySelector('.completed__number');\r\n\r\nconst doFilterAll = () => {\r\n    filterCompleted.classList.remove('current');\r\n    filterIncompleted.classList.remove('current');\r\n    filterAll.classList.add('current');\r\n    const allTodos = document.querySelectorAll('.todo');\r\n    [...allTodos].forEach((elem) => {\r\n        elem.classList.add('todo_active');\r\n    });\r\n    currentFilter = 'All';\r\n}\r\n\r\nconst doFilterCompleted = () => {\r\n    filterCompleted.classList.add('current');\r\n    filterIncompleted.classList.remove('current');\r\n    filterAll.classList.remove('current');\r\n    const allTodos = document.querySelectorAll('.todo');\r\n    [...allTodos].forEach((elem) => {\r\n        elem.classList.remove('todo_active');\r\n        if ([...elem.classList].includes('todo_complete')) {\r\n            elem.classList.add('todo_active');\r\n        }\r\n    });\r\n    currentFilter = 'Completed';\r\n}\r\n\r\nconst doFilterIncompleted = () => {\r\n    filterCompleted.classList.remove('current');\r\n    filterIncompleted.classList.add('current');\r\n    filterAll.classList.remove('current');\r\n    const allTodos = document.querySelectorAll('.todo');\r\n    [...allTodos].forEach((elem) => {\r\n        elem.classList.remove('todo_active');\r\n        if (![...elem.classList].includes('todo_complete')){\r\n            elem.classList.add('todo_active');\r\n        }\r\n    });\r\n    currentFilter = 'Incompleted';\r\n}\r\n\r\nfilterAll.addEventListener('click', doFilterAll);\r\nfilterCompleted.addEventListener('click', doFilterCompleted);\r\nfilterIncompleted.addEventListener('click', doFilterIncompleted);\r\n\r\nconst toggleComplete = (todo, text, isCompleted, id) => {\r\n    if ([...todo.classList].includes('todo_complete')) {\r\n        completed.textContent++;\r\n        deleteButton.classList.add('todo__delete-completed_active');\r\n    }\r\n    else {\r\n        completed.textContent--;\r\n        if (completed.textContent === '0') {\r\n            deleteButton.classList.remove('todo__delete-completed_active');\r\n        }\r\n    }\r\n    cardMass[cardMass.findIndex(elem => elem.id === id)] = {name: text, isCompleted: isCompleted, id: id};\r\n    console.log(cardMass);\r\n    localStorage.setItem('cards', JSON.stringify(cardMass));\r\n    switch (currentFilter) {\r\n        case 'All':\r\n            doFilterAll();\r\n            break;\r\n        case 'Completed':\r\n            doFilterCompleted();\r\n            break;\r\n        case 'Incompleted':\r\n            doFilterIncompleted();\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n}\r\n\r\nconst initToDoMass = (name, isCompleted, id) => {\r\n    const newToDo = getNewTodo(name, isCompleted, id).getTodo();\r\n    todos.append(newToDo);\r\n    if (isCompleted) {\r\n        completed.textContent++;\r\n        deleteButton.classList.add('todo__delete-completed_active');\r\n    }\r\n}\r\n\r\nfunction update(text, isCompleted, id) {\r\n    cardMass[cardMass.findIndex(elem => elem.id === id)] = {name: text, isCompleted: isCompleted, id: id};\r\n    localStorage.setItem('cards', JSON.stringify(cardMass));\r\n}\r\n\r\nconst getNewTodo = (name, isCompleted, id) => {\r\n    return new _js_ToDo_js__WEBPACK_IMPORTED_MODULE_1__.default(name, '.todo__template', (todo, text, isCompleted, id) => toggleComplete(todo, text, isCompleted, id), (isCompleted, id) => deleteToDo(isCompleted, id), isCompleted, id, (text, isCompleted, id) => update(text, isCompleted, id));\r\n}\r\n\r\ncardMass.forEach(elem => {\r\n    initToDoMass(elem.name, elem.isCompleted, elem.id);\r\n});\r\n\r\nconst createToDo = (name) => {\r\n    if (name) {\r\n        const newToDo = getNewTodo(name, false, Date.now());\r\n        todos.append(newToDo.getTodo());\r\n        if (currentFilter === 'Completed') {\r\n            todo.classList.remove('todo_active');\r\n        }\r\n        cardMass.push({name: name, isCompleted: false, id: newToDo.getId()});\r\n        localStorage.setItem('cards', JSON.stringify(cardMass));\r\n    }\r\n}\r\n\r\nconst deleteToDo = (isCompleted, id) => {\r\n    if (isCompleted) {\r\n        completed.textContent--;\r\n    }\r\n    if (completed.textContent === '0') {\r\n        deleteButton.classList.remove('todo__delete-completed_active');\r\n    }\r\n    cardMass = cardMass.filter(elem => elem.id !== id);\r\n    localStorage.setItem('cards', JSON.stringify(cardMass));\r\n}\r\n\r\nconst deleteCompleted = () => {\r\n    const allTodos = document.querySelectorAll('.todo');\r\n    [...allTodos].forEach((elem) => {\r\n        if ([...elem.classList].includes('todo_complete')) {\r\n            elem.remove();\r\n        }\r\n    });\r\n    cardMass = cardMass.filter((elem) => elem.isCompleted === false);\r\n    localStorage.setItem('cards', JSON.stringify(cardMass));\r\n    completed.textContent = 0;\r\n    deleteButton.classList.remove('todo__delete-completed_active');\r\n}\r\n\r\nfunction keyPressedInInput(e) {\r\n    if (e.code === \"Enter\") {\r\n        createToDo(e.target.value);\r\n        e.target.value = '';\r\n    }\r\n}\r\n\r\ndocument.querySelector('.todo__delete-completed').addEventListener('click', ()=>deleteCompleted())\r\ndocument.querySelector('.todo__input').addEventListener('keydown', (e)=>keyPressedInInput(e));\r\n\n\n//# sourceURL=webpack://snp_todo/./src/index.js?");

/***/ }),

/***/ "./src/js/ToDo.js":
/*!************************!*\
  !*** ./src/js/ToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\r\n    constructor(text, tmpSelector, completeFunction, deleteFunction, isCompleted, id, update) {\r\n        this.text = text;\r\n        this.tmpSelector = tmpSelector;\r\n        this.complete = completeFunction;\r\n        this.deleteFunction = deleteFunction;\r\n        this.isCompleted = isCompleted;\r\n        this.id = id;\r\n        this.update = update;\r\n    }\r\n\r\n    _doubleClickEvent = () => {\r\n        this.todoText.addEventListener('click', this._toggleInputMod);\r\n        setTimeout(() => this.todoText.removeEventListener('click', this._toggleInputMod), 400);\r\n    }\r\n\r\n    _onChange = () => {\r\n        this.todoText.textContent = this.todoChange.value;\r\n    }\r\n\r\n    _onMouseClick = (e) => {\r\n        if (e.target !== this.todoChange && e.target !== this.todoText) {\r\n            this._toggleLabelMod();\r\n            this.update(this.todoText.textContent, this.isCompleted, this.id);\r\n            if (this.todoChange.value === '') {\r\n                this._deleteTodo();\r\n            }\r\n        }\r\n    };\r\n\r\n    _deleteTodo = () => {\r\n        this.todo.remove();\r\n        this.deleteFunction(this.isCompleted, this.id);\r\n    }\r\n\r\n    _handleComplete = () => {\r\n        this.todo.classList.toggle('todo_complete');\r\n        this.todoText.classList.toggle('todo_complete-text');\r\n        this.todoCompleteButton.classList.toggle('todo__button-complete_completed');\r\n        this.todoCompleteButton.textContent = this.todoCompleteButton.textContent === \"N\" ? \"Y\" : \"N\";\r\n        this.isCompleted = !this.isCompleted;\r\n        this.complete(this.todo, this.text, this.isCompleted, this.id);\r\n    }\r\n\r\n    \r\n    _onKeyDown = (e) => {\r\n        if (e.code === \"Enter\") {\r\n            this._toggleLabelMod();\r\n            this.todoText.textContent = this.todoChange.value;\r\n            this.update(this.todoText.textContent, this.isCompleted, this.id);\r\n            if (this.todoChange.value === '') {\r\n                this._deleteTodo();\r\n            }\r\n        }\r\n    }\r\n\r\n    _toggleLabelMod = () => {\r\n        this.todoChange.classList.remove('todo__change-label_active');\r\n        this.todoContainer.classList.add('todo__container_active');\r\n        this.todoButton.addEventListener('click', this._deleteTodo);\r\n        this.todoCompleteButton.addEventListener('click', this._handleComplete);\r\n        this.todoChange.removeEventListener('change', this._onChange);\r\n        this.todoChange.removeEventListener('keydown', this._onKeyDown);\r\n        document.removeEventListener('click', this._onMouseClick);\r\n    }\r\n\r\n    _toggleInputMod = () => {\r\n        this.todoChange.classList.add('todo__change-label_active');\r\n        this.todoContainer.classList.remove('todo__container_active');\r\n        this.todoButton.removeEventListener('click', this._deleteTodo);\r\n        this.todoCompleteButton.removeEventListener('click', this._handleComplete);\r\n        this.todoChange.addEventListener('change', this._onChange);\r\n        this.todoChange.addEventListener('keydown', this._onKeyDown);\r\n        document.addEventListener('click', this._onMouseClick);\r\n    }\r\n\r\n    _setEventListeners() {\r\n        this.todoButton.addEventListener('click', this._deleteTodo);\r\n        this.todoCompleteButton.addEventListener('click', this._handleComplete);\r\n        this.todoText.addEventListener('click', this._doubleClickEvent);\r\n        this.todo.addEventListener('mouseover', () => {\r\n            this.todoButton.classList.remove('hidden');\r\n        })\r\n        this.todo.addEventListener('mouseout', () => {\r\n            this.todoButton.classList.add('hidden');\r\n        })\r\n\r\n    }\r\n\r\n    _getTemplate() {\r\n        return document.querySelector(this.tmpSelector).content;\r\n    }\r\n\r\n    getText() {\r\n        return this.text;\r\n    }\r\n\r\n    getId = () => {\r\n        return this.id;\r\n    }\r\n\r\n    getTodo() {\r\n        this.todo = this._getTemplate().querySelector('.todo').cloneNode(true);\r\n        this.todoText = this.todo.querySelector('.todo__text');\r\n        this.todoCompleteButton = this.todo.querySelector('.todo__button-complete');\r\n        this.todoButton = this.todo.querySelector('.todo__button-delete');\r\n        this.todoChange = this.todo.querySelector('.todo__change-label');\r\n        this.todoContainer = this.todo.querySelector('.todo__container');\r\n        this.todoCompleteButton.textContent = 'N';\r\n        if (this.isCompleted) {\r\n            this.todo.classList.toggle('todo_complete');\r\n            this.todoText.classList.toggle('todo_complete-text');\r\n            this.todoCompleteButton.classList.toggle('todo__button-complete_completed');\r\n            this.todoCompleteButton.textContent = this.todoCompleteButton.textContent === \"N\" ? \"Y\" : \"N\";\r\n        }\r\n        this.todoText.textContent = this.text;\r\n        this.todoChange.value = this.text;\r\n        this._setEventListeners();\r\n        return this.todo;\r\n    }\r\n}\n\n//# sourceURL=webpack://snp_todo/./src/js/ToDo.js?");

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