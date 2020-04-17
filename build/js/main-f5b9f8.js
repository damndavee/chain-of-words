/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/base.js":
/*!************************!*\
  !*** ./src/js/base.js ***!
  \************************/
/*! exports provided: DOMelements, clearContainer, updateTextContent, addChild, insertHTML, hideNavigation, clearInput, displayTerms, hideTerms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMelements\", function() { return DOMelements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearContainer\", function() { return clearContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTextContent\", function() { return updateTextContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addChild\", function() { return addChild; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertHTML\", function() { return insertHTML; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideNavigation\", function() { return hideNavigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearInput\", function() { return clearInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayTerms\", function() { return displayTerms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideTerms\", function() { return hideTerms; });\nvar DOMelements = {\n  heading: document.getElementById('heading'),\n  main: document.getElementById('main'),\n  navigation: document.getElementById('navigation'),\n  containerBtn: document.getElementById('container__btn'),\n  container: document.getElementById('container'),\n  playerSelectBox: document.getElementById('numberOfPlayers'),\n  gameTemplate: document.getElementById('game'),\n  gameContainer: document.getElementById('game__container'),\n  gameInput: document.getElementById('game__input'),\n  currentWord: document.getElementById('game__word--current'),\n  currentPlayer: document.getElementById('game__player-name'),\n  currentPlayerStreak: document.getElementById('game__player-streak-count'),\n  streakMessage: document.getElementById('word-streak-msg'),\n  message: document.getElementById('message'),\n  terms: document.getElementById('terms'),\n  showTerms: document.getElementById('show-terms'),\n  hideTerms: document.getElementById('hide-terms')\n};\nfunction clearContainer(parent) {\n  parent.innerHTML = \"\";\n}\nfunction updateTextContent(parent, text) {\n  parent.textContent = text;\n}\nfunction addChild(parent, child) {\n  parent.appendChild(child);\n}\nfunction insertHTML(parent, child) {\n  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"beforeend\";\n  parent.insertAdjacentHTML(position, child);\n}\nfunction hideNavigation() {\n  DOMelements.navigation.style.transform = \"translateY(-100%)\";\n}\nfunction clearInput(e) {\n  e.target.value = '';\n}\nfunction displayTerms() {\n  DOMelements.terms.style.display = 'flex';\n}\nfunction hideTerms() {\n  DOMelements.terms.style.display = 'none';\n}\n\n//# sourceURL=webpack:///./src/js/base.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/js/base.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ \"./src/js/state.js\");\n/* harmony import */ var _model_GameContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/GameContainer */ \"./src/js/model/GameContainer.js\");\n/* harmony import */ var _model_Game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/Game */ \"./src/js/model/Game.js\");\n/* harmony import */ var _model_AddPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/AddPlayer */ \"./src/js/model/AddPlayer.js\");\n\n\n\n\n\n\nvar gameContainer = new _model_GameContainer__WEBPACK_IMPORTED_MODULE_3__[\"GameContainer\"]();\nvar game = new _model_Game__WEBPACK_IMPORTED_MODULE_4__[\"Game\"]();\n_base__WEBPACK_IMPORTED_MODULE_1__[\"DOMelements\"].showTerms.addEventListener('click', _base__WEBPACK_IMPORTED_MODULE_1__[\"displayTerms\"]);\n_base__WEBPACK_IMPORTED_MODULE_1__[\"DOMelements\"].hideTerms.addEventListener('click', _base__WEBPACK_IMPORTED_MODULE_1__[\"hideTerms\"]);\n_base__WEBPACK_IMPORTED_MODULE_1__[\"DOMelements\"].containerBtn.addEventListener('click', function () {\n  return gameContainer.startGame();\n});\n_base__WEBPACK_IMPORTED_MODULE_1__[\"DOMelements\"].main.addEventListener('click', _model_AddPlayer__WEBPACK_IMPORTED_MODULE_5__[\"setPlayer\"]);\n_base__WEBPACK_IMPORTED_MODULE_1__[\"DOMelements\"].gameInput.addEventListener('keydown', function (e) {\n  if (e.keyCode === 13) {\n    game.getLastLetterFromActualWord();\n    game.getFirstLetterFromAddedWord(e);\n    game.compareLettersAndWords(e);\n    gameContainer.updateState();\n  }\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/model/AddPlayer.js":
/*!***********************************!*\
  !*** ./src/js/model/AddPlayer.js ***!
  \***********************************/
/*! exports provided: setPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPlayer\", function() { return setPlayer; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ \"./src/js/state.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/js/model/Player.js\");\n/* harmony import */ var _GameContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameContainer */ \"./src/js/model/GameContainer.js\");\n\n\n\nvar gameContainer = new _GameContainer__WEBPACK_IMPORTED_MODULE_2__[\"GameContainer\"]();\nfunction setPlayer(e) {\n  if (e.target.className === 'add-player__btn') {\n    var name = e.target.previousSibling.previousSibling;\n    var result = e.target.nextSibling.nextSibling;\n    var warning = e.target.nextSibling.nextSibling.nextSibling.nextSibling;\n    var mainContainer = e.target.parentNode.parentNode.parentNode;\n\n    if (name.value !== '') {\n      _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].players.push(new _Player__WEBPACK_IMPORTED_MODULE_1__[\"Player\"](name.value, _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].players.length));\n      var p = \"<p>Player \".concat(_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].players.length, \": \").concat(name.value, \"</p>\");\n      result.innerHTML += p;\n\n      if (_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].players.length == _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].numberOfPlayers) {\n        mainContainer.remove();\n        _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].playable = true;\n        gameContainer.startGame();\n      }\n    } else {\n      warning.style.display = 'flex';\n      setTimeout(function () {\n        warning.style.display = 'none';\n      }, 1500);\n    }\n\n    name.value = '';\n    name.focus();\n  }\n}\n\n//# sourceURL=webpack:///./src/js/model/AddPlayer.js?");

/***/ }),

/***/ "./src/js/model/Game.js":
/*!******************************!*\
  !*** ./src/js/model/Game.js ***!
  \******************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ \"./src/js/base.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./src/js/state.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n  }\n\n  _createClass(Game, [{\n    key: \"addStreak\",\n    value: function addStreak() {\n      _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].players[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].turn].streak++;\n    }\n  }, {\n    key: \"resetStreak\",\n    value: function resetStreak() {\n      _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].players[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].turn].streak = 0;\n    }\n  }, {\n    key: \"showStreakMessage\",\n    value: function showStreakMessage() {\n      _base__WEBPACK_IMPORTED_MODULE_0__[\"DOMelements\"].streakMessage.classList.add('show-streak-msg');\n      _base__WEBPACK_IMPORTED_MODULE_0__[\"DOMelements\"].streakMessage.textContent = \"Player: \".concat(_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].currentPlayer, \" has reached 5 words streak! CONGRATULATIONS!!\");\n      setTimeout(function () {\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"DOMelements\"].streakMessage.classList.remove('show-streak-msg');\n      }, 1500);\n    }\n  }, {\n    key: \"checkIfFiveStreak\",\n    value: function checkIfFiveStreak() {\n      if (_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].players[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].turn].streak === 2) {\n        this.showStreakMessage();\n        _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].players[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].turn].points++;\n        this.resetStreak();\n      }\n    }\n  }, {\n    key: \"addPoints\",\n    value: function addPoints() {\n      var len = _base__WEBPACK_IMPORTED_MODULE_0__[\"DOMelements\"].gameInput.value.toLowerCase();\n      var temp = '';\n\n      if (len.length < 2) {\n        _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].players[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].turn].points += 0;\n        temp = '---';\n        this.resetStreak();\n      } else if (len.length > 1 && len.length < 5) {\n        _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].players[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].turn].points += 1;\n        temp = '1p';\n        this.resetStreak();\n      } else if (len.length >= 5 && len.length < 8) {\n        _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].players[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].turn].points += 2;\n        temp = '2p';\n        this.addStreak();\n        this.checkIfFiveStreak();\n      } else if (len.length >= 8) {\n        _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].players[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].turn].points += 3;\n        temp = '3p';\n        this.addStreak();\n        this.checkIfFiveStreak();\n      }\n\n      return temp;\n    }\n  }, {\n    key: \"updatePoints\",\n    value: function updatePoints(node, player) {\n      node.firstChild.nextSibling.lastChild.previousSibling.textContent = \"points: \".concat(player);\n    }\n  }, {\n    key: \"addWord\",\n    value: function addWord() {\n      var _this = this;\n\n      var temp = this.addPoints();\n\n      var tab = _toConsumableArray(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMelements\"].gameContainer.children);\n\n      var template = \"\\n            <div class=\\\"markup\\\">\\n                <span class=\\\"markup_word\\\">\\n                    \".concat(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMelements\"].gameInput.value.toLowerCase() ? _base__WEBPACK_IMPORTED_MODULE_0__[\"DOMelements\"].gameInput.value.toLowerCase() : '---', \"\\n                </span>\\n                    \\n                <span class=\\\"markup__point\\\">\\n                    \").concat(temp, \"\\n                </span>\\n            </div>\\n        \");\n      tab.forEach(function (playerHead) {\n        if (playerHead.firstChild.nextSibling.className.includes('active')) {\n          playerHead.lastChild.previousSibling.innerHTML += template;\n\n          _this.updatePoints(playerHead, _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].players[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].turn].points);\n        }\n      });\n    }\n  }, {\n    key: \"getLastLetterFromActualWord\",\n    value: function getLastLetterFromActualWord() {\n      var word = _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].actualWord;\n      var lastLetter = word.split('').splice(word.length - 1, 1).join('');\n      _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].lastLetter = lastLetter;\n    }\n  }, {\n    key: \"getFirstLetterFromAddedWord\",\n    value: function getFirstLetterFromAddedWord(e) {\n      var word = e.target.value.toLowerCase();\n      var firstLetter = word.split('').splice(0, 1).join('');\n      _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].firstLetter = firstLetter;\n    }\n  }, {\n    key: \"pushWordToAllWordsArray\",\n    value: function pushWordToAllWordsArray(e) {\n      _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].takenWords.push(e.target.value);\n      _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].players[_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].turn].words.push(e.target.value);\n    }\n  }, {\n    key: \"updateActualWord\",\n    value: function updateActualWord(e) {\n      _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].actualWord = e.target.value.toLowerCase();\n      _base__WEBPACK_IMPORTED_MODULE_0__[\"DOMelements\"].currentWord.textContent = \"Current word is: \".concat(_state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].actualWord);\n    }\n  }, {\n    key: \"compareEnteredWordWithArray\",\n    value: function compareEnteredWordWithArray(e) {\n      this.addWord();\n      this.updateActualWord(e);\n      this.pushWordToAllWordsArray(e); // console.log(state.players[state.turn].name);\n    }\n  }, {\n    key: \"displayMessage\",\n    value: function displayMessage(e, fl, ll, indexOfWord) {\n      var msg;\n      var err;\n\n      if (fl !== ll) {\n        msg = \"To s\\u0142owo nie zaczyna si\\u0119 na liter\\u0119: \".concat(ll);\n        err = 'error';\n      } else if (indexOfWord !== -1) {\n        msg = \"S\\u0142owo: \".concat(e.target.value, \" ju\\u017C si\\u0119 pojawi\\u0142o!\");\n        err = 'error';\n      } else {\n        msg = \"S\\u0142owo: \".concat(e.target.value, \" zosta\\u0142o poprawnie dodane!\");\n        err = 'correct';\n      }\n\n      _base__WEBPACK_IMPORTED_MODULE_0__[\"DOMelements\"].message.textContent = msg;\n      _base__WEBPACK_IMPORTED_MODULE_0__[\"DOMelements\"].message.classList.add(err);\n      setTimeout(function () {\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"DOMelements\"].message.textContent = '';\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"DOMelements\"].message.classList.remove(err);\n      }, 2000);\n    }\n  }, {\n    key: \"compareLettersAndWords\",\n    value: function compareLettersAndWords(e) {\n      var indexOfWord = _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].takenWords.indexOf(e.target.value);\n      var fl = _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].firstLetter;\n      var ll = _state__WEBPACK_IMPORTED_MODULE_1__[\"state\"].lastLetter;\n\n      if (fl === ll && indexOfWord === -1) {\n        this.compareEnteredWordWithArray(e);\n      } else {\n        this.resetStreak();\n      }\n\n      this.displayMessage(e, fl, ll, indexOfWord);\n      Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"clearInput\"])(e);\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=webpack:///./src/js/model/Game.js?");

/***/ }),

/***/ "./src/js/model/GameContainer.js":
/*!***************************************!*\
  !*** ./src/js/model/GameContainer.js ***!
  \***************************************/
/*! exports provided: GameContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameContainer\", function() { return GameContainer; });\n/* harmony import */ var _view_addPlayerView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/addPlayerView */ \"./src/js/view/addPlayerView.js\");\n/* harmony import */ var _view_playerView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/playerView */ \"./src/js/view/playerView.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base */ \"./src/js/base.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ \"./src/js/state.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar GameContainer = /*#__PURE__*/function () {\n  function GameContainer() {// this.startGame();\n\n    _classCallCheck(this, GameContainer);\n  }\n\n  _createClass(GameContainer, [{\n    key: \"setBasedWord\",\n    value: function setBasedWord() {\n      var tmpNum = Math.floor(Math.random() * _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].basedWords.length);\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].actualWord = _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].basedWords[tmpNum];\n      _base__WEBPACK_IMPORTED_MODULE_2__[\"DOMelements\"].currentWord.textContent = \"Current word: \".concat(_state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].basedWords[tmpNum]);\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].lastLetter = _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].actualWord.split('').splice(_state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].actualWord.length - 1, 1);\n    }\n  }, {\n    key: \"setTurn\",\n    value: function setTurn() {\n      var tmp = Math.floor(Math.random() * _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].numberOfPlayers);\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].turn = tmp;\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].randNum = _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].turn;\n    }\n  }, {\n    key: \"setState\",\n    value: function setState() {\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].numberOfPlayers = _base__WEBPACK_IMPORTED_MODULE_2__[\"DOMelements\"].playerSelectBox.value;\n      this.setBasedWord();\n      this.setTurn();\n    }\n  }, {\n    key: \"updateDOMStreak\",\n    value: function updateDOMStreak() {\n      _base__WEBPACK_IMPORTED_MODULE_2__[\"DOMelements\"].currentPlayerStreak.textContent = _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].players[_state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].turn].streak;\n    }\n  }, {\n    key: \"changeTurn\",\n    value: function changeTurn() {\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].randNum++;\n      var nop = _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].numberOfPlayers;\n\n      var tab = _toConsumableArray(_base__WEBPACK_IMPORTED_MODULE_2__[\"DOMelements\"].gameContainer.children);\n\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].turn = _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].randNum % nop;\n      tab.forEach(function (node) {\n        if (node.firstChild.nextSibling.className.includes('active')) {\n          node.firstChild.nextSibling.classList.remove('active');\n        }\n      });\n      tab[_state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].turn].firstChild.nextSibling.classList.add('active');\n      this.updateDOMStreak();\n    }\n  }, {\n    key: \"setCurrentPlayer\",\n    value: function setCurrentPlayer() {\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].currentPlayer = _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].players[_state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].turn].name;\n      _base__WEBPACK_IMPORTED_MODULE_2__[\"DOMelements\"].currentPlayer.innerText = \"\".concat(_state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].currentPlayer);\n    }\n  }, {\n    key: \"updateState\",\n    value: function updateState() {\n      this.changeTurn();\n      this.setCurrentPlayer();\n    }\n  }, {\n    key: \"showGameContainer\",\n    value: function showGameContainer() {\n      _base__WEBPACK_IMPORTED_MODULE_2__[\"DOMelements\"].gameTemplate.className = 'game show';\n      _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].players[_state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].turn].activeTurn = true;\n      Object(_view_playerView__WEBPACK_IMPORTED_MODULE_1__[\"generateTemplate\"])();\n    }\n  }, {\n    key: \"playableState\",\n    value: function playableState() {\n      this.showGameContainer();\n      this.updateState();\n    }\n  }, {\n    key: \"unplayableState\",\n    value: function unplayableState() {\n      Object(_view_addPlayerView__WEBPACK_IMPORTED_MODULE_0__[\"addPlayersForm\"])();\n      this.setState();\n    }\n  }, {\n    key: \"startGame\",\n    value: function startGame() {\n      if (_state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].playable) {\n        this.playableState();\n      } else {\n        this.unplayableState();\n      }\n    }\n  }]);\n\n  return GameContainer;\n}();\n\n//# sourceURL=webpack:///./src/js/model/GameContainer.js?");

/***/ }),

/***/ "./src/js/model/Player.js":
/*!********************************!*\
  !*** ./src/js/model/Player.js ***!
  \********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Player = function Player(name, turn) {\n  _classCallCheck(this, Player);\n\n  this.name = name.toLowerCase();\n  this.turn = turn;\n  this.points = 0;\n  this.words = [];\n  this.activeTurn = false;\n  this.streak = 0;\n};\n\n//# sourceURL=webpack:///./src/js/model/Player.js?");

/***/ }),

/***/ "./src/js/state.js":
/*!*************************!*\
  !*** ./src/js/state.js ***!
  \*************************/
/*! exports provided: state, resetState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetState\", function() { return resetState; });\nvar state = {\n  playable: false,\n  players: [],\n  numberOfPlayers: null,\n  turn: null,\n  randNum: 0,\n  result: 0,\n  actualWord: '',\n  takenWords: [],\n  firstLetter: '',\n  lastLetter: '',\n  basedWords: ['trawa', 'kebab', 'kuc', 'drozd', 'ukulele', 'dysortograf', 'dźwig', 'grzech', 'spodenki', 'tramwaj', 'domek', 'król', 'pozdrawiam', 'dominikanin', 'jezioro', 'dowcip', 'helikopter', 'kosmos', 'trabant', 'pokoju', 'Wiesław', 'strzelby', 'raz'],\n  currentPlayer: ''\n};\nfunction resetState() {}\n\n//# sourceURL=webpack:///./src/js/state.js?");

/***/ }),

/***/ "./src/js/view/addPlayerView.js":
/*!**************************************!*\
  !*** ./src/js/view/addPlayerView.js ***!
  \**************************************/
/*! exports provided: addPlayersForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPlayersForm\", function() { return addPlayersForm; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ \"./src/js/base.js\");\n\nfunction addPlayersForm() {\n  var template = \"\\n        <div class=\\\"blur\\\">\\n            <div class=\\\"form\\\">\\n                <div class=\\\"add-player\\\">\\n                    <label class=\\\"add-player__label\\\">Enter name of a player: </label>\\n                    <input type=\\\"text\\\" class=\\\"add-player__input\\\" placeholder=\\\"enter name\\\">\\n                    <button class=\\\"add-player__btn\\\">Add Player</button>\\n\\n                    <div class=\\\"result\\\">\\n                    \\n                    </div>\\n\\n                    <div class=\\\"warning\\\">\\n                        You didn't enter any name!\\n                    </div>\\n                </div>\\n\\n                \\n            </div>\\n        </div>\\n    \";\n  Object(_base__WEBPACK_IMPORTED_MODULE_0__[\"insertHTML\"])(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMelements\"].main, template);\n}\n\n//# sourceURL=webpack:///./src/js/view/addPlayerView.js?");

/***/ }),

/***/ "./src/js/view/playerView.js":
/*!***********************************!*\
  !*** ./src/js/view/playerView.js ***!
  \***********************************/
/*! exports provided: generateTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateTemplate\", function() { return generateTemplate; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ \"./src/js/state.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base */ \"./src/js/base.js\");\n\n\nfunction generateTemplate() {\n  var active;\n  _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].players.forEach(function (player) {\n    if (player.activeTurn === true) {\n      active = 'active';\n    } else {\n      active = '';\n    }\n\n    var template = \"\\n            <div class=\\\"player \".concat(player.name, \"\\\">\\n                <div class=\\\"player__head \").concat(active, \"\\\">\\n                    <p class=\\\"player__name\\\">\").concat(player.name, \"</p>\\n                    <p class=\\\"player__points\\\">points: \").concat(player.points, \"</p>\\n                </div>\\n                <div class=\\\"player__body\\\"></div>\\n            </div>\\n        \");\n    Object(_base__WEBPACK_IMPORTED_MODULE_1__[\"insertHTML\"])(_base__WEBPACK_IMPORTED_MODULE_1__[\"DOMelements\"].gameContainer, template);\n  });\n}\n\n//# sourceURL=webpack:///./src/js/view/playerView.js?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/index.scss?");

/***/ })

/******/ });