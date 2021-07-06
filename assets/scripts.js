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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _js_ToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ToDo.js */ \"./src/js/ToDo.js\");\n\r\n\r\nconst todos = document.querySelector(\".todos\");\r\nconst deleteButton = document.querySelector('.todo__delete-completed');\r\nlet completed = [];\r\nconst filterAll = document.querySelector('.filter__all');\r\nconst filterCompleted = document.querySelector('.filter__completed');\r\nconst filterIncompleted = document.querySelector('.filter__incompleted');\r\nlet currentFilter = '';\r\n\r\nconst doFilterAll = () => {\r\n    const allTodos = document.querySelectorAll('.todo');\r\n    [...allTodos].forEach((elem) => {\r\n        elem.classList.add('todo_active');\r\n    });\r\n    currentFilter = 'All';\r\n}\r\n\r\nconst doFilterCompleted = () => {\r\n    const allTodos = document.querySelectorAll('.todo');\r\n    [...allTodos].forEach((elem) => {\r\n        elem.classList.remove('todo_active');\r\n        if ([...elem.classList].includes('todo_complete')) {\r\n            elem.classList.add('todo_active');\r\n        }\r\n    });\r\n    currentFilter = 'Completed';\r\n}\r\n\r\nconst doFilterIncompleted = () => {\r\n    const allTodos = document.querySelectorAll('.todo');\r\n    [...allTodos].forEach((elem) => {\r\n        elem.classList.remove('todo_active');\r\n        if (![...elem.classList].includes('todo_complete')){\r\n            elem.classList.add('todo_active');\r\n        }\r\n    });\r\n    currentFilter = 'Incompleted';\r\n}\r\n\r\nfilterAll.addEventListener('click', doFilterAll);\r\nfilterCompleted.addEventListener('click', doFilterCompleted);\r\nfilterIncompleted.addEventListener('click', doFilterIncompleted);\r\n\r\nconst toggleComplete = (todo) => {\r\n    const buttonText = todo.querySelector('.todo__button-complete');\r\n    if (!completed.find(x => x === todo)) {\r\n        buttonText.textContent = 'Y';\r\n        completed.push(todo);\r\n        deleteButton.classList.add('todo__delete-completed_active');\r\n    }\r\n    else {\r\n        buttonText.textContent = 'N';\r\n        completed = completed.filter(elem => todo !== elem);\r\n        if (completed.length === 0) {\r\n            deleteButton.classList.remove('todo__delete-completed_active');\r\n        }\r\n    }\r\n    switch (currentFilter) {\r\n        case 'All':\r\n            doFilterAll();\r\n            break;\r\n        case 'Completed':\r\n            doFilterCompleted();\r\n            break;\r\n        case 'Incompleted':\r\n            doFilterIncompleted();\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n}\r\n\r\nconst addToDo = (name) => {\r\n    const newToDo = new _js_ToDo_js__WEBPACK_IMPORTED_MODULE_1__.default(name, '.todo__template', (elem)=>toggleComplete(elem), document).getTodo();\r\n    todos.append(newToDo);\r\n}\r\n\r\nconst deleteCompleted = () => {\r\n    completed.forEach(elem => elem.remove());\r\n    deleteButton.classList.remove('todo__delete-completed_active');\r\n}\r\n\r\nfunction keyPressedInInput(e) {\r\n    if (e.code === \"Enter\") {\r\n        addToDo(e.target.value);\r\n        e.target.value = '';\r\n    }\r\n}\r\n\r\ndocument.querySelector('.todo__delete-completed').addEventListener('click', ()=>deleteCompleted())\r\ndocument.querySelector('.todo__input').addEventListener('keydown', (e)=>keyPressedInInput(e));\r\n\r\naddToDo('first');\r\naddToDo('second');\r\naddToDo('third');\r\naddToDo('forth');\r\naddToDo('fifth');\r\n\n\n//# sourceURL=webpack://snp_todo/./src/index.js?");

/***/ }),

/***/ "./src/js/ToDo.js":
/*!************************!*\
  !*** ./src/js/ToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\r\n    constructor(text, tmpSelector, completeFunction, ) {\r\n        this.text = text;\r\n        this.tmpSelector = tmpSelector;\r\n        this.complete = completeFunction;\r\n        this.inputMod = false;\r\n    }\r\n\r\n    _doubleClickEvent = () => {\r\n        this.todoText.addEventListener('click', this._toggleInputMod);\r\n        setTimeout(() => this.todoText.removeEventListener('click', this._toggleInputMod), 400);\r\n    }\r\n\r\n    _onChange = () => {\r\n        this.todoText.textContent = this.todoChange.value;\r\n    }\r\n\r\n    _onMouseClick = (e) => {\r\n        if (e.target !== this.todoChange && e.target !== this.todoText) {\r\n            this._toggleLabelMod();\r\n        }\r\n    };\r\n\r\n    _deleteTodo = () => {\r\n        this.todo.remove();\r\n    }\r\n\r\n    _handleComplete = () => {\r\n        this.todo.classList.toggle('todo_complete');\r\n        this.todoText.classList.toggle('todo_complete-text');\r\n        this.complete(this.todo);\r\n    }\r\n\r\n    \r\n    _onKeyDown = (e) => {\r\n        if (e.code === \"Enter\") {\r\n            this._toggleLabelMod();\r\n            this.todoText.textContent = this.todoChange.value;\r\n        }\r\n    }\r\n\r\n    _toggleLabelMod = () => {\r\n        this.todoChange.classList.remove('todo__change-label_active');\r\n        this.todoContainer.classList.add('todo__container_active');\r\n        this.todoButton.addEventListener('click', this._deleteTodo);\r\n        this.todoCompleteButton.addEventListener('click', this._handleComplete);\r\n        this.todoChange.removeEventListener('change', this._onChange);\r\n        this.todoChange.removeEventListener('keydown', this._onKeyDown);\r\n        document.removeEventListener('click', this._onMouseClick);\r\n    }\r\n\r\n    _toggleInputMod = () => {\r\n        this.todoChange.classList.add('todo__change-label_active');\r\n        this.todoContainer.classList.remove('todo__container_active');\r\n        this.todoButton.removeEventListener('click', this._deleteTodo);\r\n        this.todoCompleteButton.removeEventListener('click', this._handleComplete);\r\n        this.todoChange.addEventListener('change', this._onChange);\r\n        this.todoChange.addEventListener('keydown', this._onKeyDown);\r\n        document.addEventListener('click', this._onMouseClick);\r\n    }\r\n\r\n    _setEventListeners() {\r\n        this.todoButton.addEventListener('click', this._deleteTodo);\r\n        this.todoCompleteButton.addEventListener('click', this._handleComplete);\r\n        this.todoText.addEventListener('click', this._doubleClickEvent);\r\n    }\r\n\r\n    _getTemplate() {\r\n        return document.querySelector(this.tmpSelector).content;\r\n    }\r\n\r\n    getText() {\r\n        return this.text;\r\n    }\r\n\r\n    getTodo() {\r\n        this.todo = this._getTemplate().querySelector('.todo').cloneNode(true);\r\n        this.todoText = this.todo.querySelector('.todo__text');\r\n        this.todoCompleteButton = this.todo.querySelector('.todo__button-complete');\r\n        this.todoButton = this.todo.querySelector('.todo__button-delete');\r\n        this.todoChange = this.todo.querySelector('.todo__change-label');\r\n        this.todoContainer = this.todo.querySelector('.todo__container');\r\n        this.todoCompleteButton.textContent = 'N';\r\n        this.todoText.textContent = this.text;\r\n        this.todoChange.value = this.text;\r\n        this._setEventListeners();\r\n        return this.todo;\r\n    }\r\n}\n\n//# sourceURL=webpack://snp_todo/./src/js/ToDo.js?");

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