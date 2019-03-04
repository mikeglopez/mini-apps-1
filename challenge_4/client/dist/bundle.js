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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/Row.jsx":
/*!***************************************!*\
  !*** ./client/src/components/Row.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Space_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Space.jsx */ \"./client/src/components/Space.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Row =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Row, _React$Component);\n\n  function Row() {\n    _classCallCheck(this, Row);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Row).apply(this, arguments));\n  }\n\n  _createClass(Row, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"tr\", null, React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.props.board,\n        playTurn: this.props.playTurn,\n        x: 0,\n        y: this.props.y\n      })), React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.props.board,\n        playTurn: this.props.playTurn,\n        x: 1,\n        y: this.props.y\n      })), React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.props.board,\n        playTurn: this.props.playTurn,\n        x: 2,\n        y: this.props.y\n      })), React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.props.board,\n        playTurn: this.props.playTurn,\n        x: 3,\n        y: this.props.y\n      })), React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.props.board,\n        playTurn: this.props.playTurn,\n        x: 4,\n        y: this.props.y\n      })), React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.props.board,\n        playTurn: this.props.playTurn,\n        x: 5,\n        y: this.props.y\n      })), React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.props.board,\n        playTurn: this.props.playTurn,\n        x: 6,\n        y: this.props.y\n      })));\n    }\n  }]);\n\n  return Row;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Row);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUm93LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Sb3cuanN4P2Y3Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwYWNlIGZyb20gJy4vU3BhY2UuanN4JztcblxuY2xhc3MgUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD48U3BhY2UgYm9hcmQ9e3RoaXMucHJvcHMuYm9hcmR9IHBsYXlUdXJuPXt0aGlzLnByb3BzLnBsYXlUdXJufSB4PXswfSB5PXt0aGlzLnByb3BzLnl9IC8+PC90ZD5cbiAgICAgICAgPHRkPjxTcGFjZSBib2FyZD17dGhpcy5wcm9wcy5ib2FyZH0gcGxheVR1cm49e3RoaXMucHJvcHMucGxheVR1cm59IHg9ezF9IHk9e3RoaXMucHJvcHMueX0gLz48L3RkPlxuICAgICAgICA8dGQ+PFNwYWNlIGJvYXJkPXt0aGlzLnByb3BzLmJvYXJkfSBwbGF5VHVybj17dGhpcy5wcm9wcy5wbGF5VHVybn0geD17Mn0geT17dGhpcy5wcm9wcy55fSAvPjwvdGQ+XG4gICAgICAgIDx0ZD48U3BhY2UgYm9hcmQ9e3RoaXMucHJvcHMuYm9hcmR9IHBsYXlUdXJuPXt0aGlzLnByb3BzLnBsYXlUdXJufSB4PXszfSB5PXt0aGlzLnByb3BzLnl9IC8+PC90ZD5cbiAgICAgICAgPHRkPjxTcGFjZSBib2FyZD17dGhpcy5wcm9wcy5ib2FyZH0gcGxheVR1cm49e3RoaXMucHJvcHMucGxheVR1cm59IHg9ezR9IHk9e3RoaXMucHJvcHMueX0gLz48L3RkPlxuICAgICAgICA8dGQ+PFNwYWNlIGJvYXJkPXt0aGlzLnByb3BzLmJvYXJkfSBwbGF5VHVybj17dGhpcy5wcm9wcy5wbGF5VHVybn0geD17NX0geT17dGhpcy5wcm9wcy55fSAvPjwvdGQ+XG4gICAgICAgIDx0ZD48U3BhY2UgYm9hcmQ9e3RoaXMucHJvcHMuYm9hcmR9IHBsYXlUdXJuPXt0aGlzLnByb3BzLnBsYXlUdXJufSB4PXs2fSB5PXt0aGlzLnByb3BzLnl9IC8+PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3c7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFiQTtBQUNBO0FBZUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Row.jsx\n");

/***/ }),

/***/ "./client/src/components/Space.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Space.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Space =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Space, _React$Component);\n\n  function Space() {\n    _classCallCheck(this, Space);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Space).apply(this, arguments));\n  }\n\n  _createClass(Space, [{\n    key: \"render\",\n    value: function render() {\n      var style = 'space';\n      var position = this.props.board[this.props.y][this.props.x];\n\n      if (position === '') {\n        style = 'space';\n      } else if (position === 'R') {\n        style = 'red';\n      } else {\n        style = 'black';\n      }\n\n      return React.createElement(\"div\", {\n        board: this.props.board,\n        onClick: this.props.playTurn,\n        className: style,\n        \"data-x\": this.props.x,\n        \"data-y\": this.props.y\n      });\n    }\n  }]);\n\n  return Space;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Space);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvU3BhY2UuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1NwYWNlLmpzeD81MTk4Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNwYWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciBzdHlsZSA9ICdzcGFjZSc7XG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5wcm9wcy5ib2FyZFt0aGlzLnByb3BzLnldW3RoaXMucHJvcHMueF07XG5cbiAgICBpZiAocG9zaXRpb24gPT09ICcnKSB7XG4gICAgICBzdHlsZSA9ICdzcGFjZSc7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ1InKSB7XG4gICAgICBzdHlsZSA9ICdyZWQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZSA9ICdibGFjayc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgYm9hcmQ9e3RoaXMucHJvcHMuYm9hcmR9IG9uQ2xpY2s9e3RoaXMucHJvcHMucGxheVR1cm59IGNsYXNzTmFtZT17c3R5bGV9IGRhdGEteD17dGhpcy5wcm9wcy54fSBkYXRhLXk9e3RoaXMucHJvcHMueX0gLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BhY2U7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7O0FBaEJBO0FBQ0E7QUFrQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Space.jsx\n");

/***/ }),

/***/ "./client/src/components/board.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/board.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Row_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Row.jsx */ \"./client/src/components/Row.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Board =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Board, _React$Component);\n\n  function Board(props) {\n    var _this;\n\n    _classCallCheck(this, Board);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).call(this, props));\n    _this.state = {\n      count: 0,\n      turn: 'R',\n      gameOver: false,\n      winner: '',\n      board: [['', '', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', '']]\n    };\n    _this.playTurn = _this.playTurn.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Board, [{\n    key: \"playTurn\",\n    value: function playTurn(event) {\n      this.checkForWins();\n      var col = event.target.getAttribute('data-x'); // check if column is full\n\n      for (var i = this.state.board.length - 1; i >= 0; i--) {\n        if (this.state.board[i][col] === '') {\n          // column is open\n          this.state.board[i][col] = this.state.turn; // sets the colored piece in the board array\n\n          this.setState({\n            count: this.state.count + 1\n          });\n          this.setState({\n            turn: this.state.turn === 'R' ? 'B' : 'R'\n          });\n          return;\n        }\n      }\n\n      alert('This column is full!');\n      return;\n    }\n  }, {\n    key: \"checkForWins\",\n    value: function checkForWins() {\n      console.log('Checking for wins...');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"table\", {\n        cellSpacing: \"0\"\n      }, React.createElement(\"tbody\", null, React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board,\n        playTurn: this.playTurn,\n        y: 0\n      }), React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board,\n        playTurn: this.playTurn,\n        y: 1\n      }), React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board,\n        playTurn: this.playTurn,\n        y: 2\n      }), React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board,\n        playTurn: this.playTurn,\n        y: 3\n      }), React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board,\n        playTurn: this.playTurn,\n        y: 4\n      }), React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board,\n        playTurn: this.playTurn,\n        y: 5\n      })));\n    }\n  }]);\n\n  return Board;\n}(React.Component);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeD83MzViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3cgZnJvbSAnLi9Sb3cuanN4JztcblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY291bnQ6IDAsXG4gICAgICB0dXJuOiAnUicsXG4gICAgICBnYW1lT3ZlcjogZmFsc2UsXG4gICAgICB3aW5uZXI6ICcnLFxuICAgICAgYm9hcmQ6IFtcbiAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgICAgWycnLCAnJywgJycsICcnLCAnJywgJycsICcnXSxcbiAgICAgIF1cbiAgICB9O1xuXG4gICAgdGhpcy5wbGF5VHVybiA9IHRoaXMucGxheVR1cm4uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHBsYXlUdXJuKGV2ZW50KSB7XG4gICAgdGhpcy5jaGVja0ZvcldpbnMoKTtcblxuICAgIHZhciBjb2wgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKTtcblxuICAgIC8vIGNoZWNrIGlmIGNvbHVtbiBpcyBmdWxsXG4gICAgZm9yICh2YXIgaSA9IHRoaXMuc3RhdGUuYm9hcmQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmJvYXJkW2ldW2NvbF0gPT09ICcnKSB7IC8vIGNvbHVtbiBpcyBvcGVuXG4gICAgICAgIHRoaXMuc3RhdGUuYm9hcmRbaV1bY29sXSA9IHRoaXMuc3RhdGUudHVybjsgLy8gc2V0cyB0aGUgY29sb3JlZCBwaWVjZSBpbiB0aGUgYm9hcmQgYXJyYXlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnQ6IHRoaXMuc3RhdGUuY291bnQgKyAxfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dHVybjogKHRoaXMuc3RhdGUudHVybiA9PT0gJ1InID8gJ0InIDogJ1InKX0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGFsZXJ0KCdUaGlzIGNvbHVtbiBpcyBmdWxsIScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNoZWNrRm9yV2lucygpIHtcbiAgICBjb25zb2xlLmxvZygnQ2hlY2tpbmcgZm9yIHdpbnMuLi4nKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlIGNlbGxTcGFjaW5nPVwiMFwiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPFJvdyBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0gcGxheVR1cm49e3RoaXMucGxheVR1cm59IHk9ezB9IC8+XG4gICAgICAgICAgPFJvdyBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0gcGxheVR1cm49e3RoaXMucGxheVR1cm59IHk9ezF9IC8+XG4gICAgICAgICAgPFJvdyBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0gcGxheVR1cm49e3RoaXMucGxheVR1cm59IHk9ezJ9IC8+XG4gICAgICAgICAgPFJvdyBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0gcGxheVR1cm49e3RoaXMucGxheVR1cm59IHk9ezN9IC8+XG4gICAgICAgICAgPFJvdyBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0gcGxheVR1cm49e3RoaXMucGxheVR1cm59IHk9ezR9IC8+XG4gICAgICAgICAgPFJvdyBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0gcGxheVR1cm49e3RoaXMucGxheVR1cm59IHk9ezV9IC8+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQWVBO0FBakJBO0FBa0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7QUF6REE7QUFDQTtBQXlEQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/board.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/board.jsx */ \"./client/src/components/board.jsx\");\n\nReactDOM.render(React.createElement(_components_board_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('board'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9ib2FyZC5qc3gnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEJvYXJkIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });