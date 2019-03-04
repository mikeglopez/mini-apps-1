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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Space_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Space.jsx */ \"./client/src/components/Space.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Row =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Row, _React$Component);\n\n  function Row() {\n    _classCallCheck(this, Row);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Row).apply(this, arguments));\n  }\n\n  _createClass(Row, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"tr\", null, React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playTurn: this.props.playTurn,\n        x: 0,\n        y: this.props.y\n      })), React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playTurn: this.props.playTurn,\n        x: 1,\n        y: this.props.y\n      })), React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playTurn: this.props.playTurn,\n        x: 2,\n        y: this.props.y\n      })), React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playTurn: this.props.playTurn,\n        x: 3,\n        y: this.props.y\n      })), React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playTurn: this.props.playTurn,\n        x: 4,\n        y: this.props.y\n      })), React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playTurn: this.props.playTurn,\n        x: 5,\n        y: this.props.y\n      })), React.createElement(\"td\", null, React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playTurn: this.props.playTurn,\n        x: 6,\n        y: this.props.y\n      })));\n    }\n  }]);\n\n  return Row;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Row);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUm93LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Sb3cuanN4P2Y3Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwYWNlIGZyb20gJy4vU3BhY2UuanN4JztcblxuY2xhc3MgUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD48U3BhY2UgcGxheVR1cm49e3RoaXMucHJvcHMucGxheVR1cm59IHg9ezB9IHk9e3RoaXMucHJvcHMueX0gLz48L3RkPlxuICAgICAgICA8dGQ+PFNwYWNlIHBsYXlUdXJuPXt0aGlzLnByb3BzLnBsYXlUdXJufSB4PXsxfSB5PXt0aGlzLnByb3BzLnl9IC8+PC90ZD5cbiAgICAgICAgPHRkPjxTcGFjZSBwbGF5VHVybj17dGhpcy5wcm9wcy5wbGF5VHVybn0geD17Mn0geT17dGhpcy5wcm9wcy55fSAvPjwvdGQ+XG4gICAgICAgIDx0ZD48U3BhY2UgcGxheVR1cm49e3RoaXMucHJvcHMucGxheVR1cm59IHg9ezN9IHk9e3RoaXMucHJvcHMueX0gLz48L3RkPlxuICAgICAgICA8dGQ+PFNwYWNlIHBsYXlUdXJuPXt0aGlzLnByb3BzLnBsYXlUdXJufSB4PXs0fSB5PXt0aGlzLnByb3BzLnl9IC8+PC90ZD5cbiAgICAgICAgPHRkPjxTcGFjZSBwbGF5VHVybj17dGhpcy5wcm9wcy5wbGF5VHVybn0geD17NX0geT17dGhpcy5wcm9wcy55fSAvPjwvdGQ+XG4gICAgICAgIDx0ZD48U3BhY2UgcGxheVR1cm49e3RoaXMucHJvcHMucGxheVR1cm59IHg9ezZ9IHk9e3RoaXMucHJvcHMueX0gLz48L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdzsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFiQTtBQUNBO0FBZUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Row.jsx\n");

/***/ }),

/***/ "./client/src/components/Space.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Space.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Space =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Space, _React$Component);\n\n  function Space() {\n    _classCallCheck(this, Space);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Space).apply(this, arguments));\n  }\n\n  _createClass(Space, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        onClick: this.props.playTurn,\n        className: \"space\",\n        \"data-x\": this.props.x,\n        \"data-y\": this.props.y\n      });\n    }\n  }]);\n\n  return Space;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Space);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvU3BhY2UuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1NwYWNlLmpzeD81MTk4Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNwYWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMucHJvcHMucGxheVR1cm59IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PXt0aGlzLnByb3BzLnh9IGRhdGEteT17dGhpcy5wcm9wcy55fSAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGFjZTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7QUFMQTtBQUNBO0FBT0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Space.jsx\n");

/***/ }),

/***/ "./client/src/components/board.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/board.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Row_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Row.jsx */ \"./client/src/components/Row.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Board =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Board, _React$Component);\n\n  function Board(props) {\n    var _this;\n\n    _classCallCheck(this, Board);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).call(this, props));\n    _this.state = {\n      count: 0,\n      redTurn: true,\n      gameOver: false,\n      winner: '',\n      board: [['', '', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', '']]\n    };\n    _this.playTurn = _this.playTurn.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Board, [{\n    key: \"playTurn\",\n    value: function playTurn(event) {\n      // click handling to find column...\n      var clickedSpace = event.target;\n      console.log('clickedSpace is:', clickedSpace);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"table\", {\n        cellSpacing: \"0\"\n      }, React.createElement(\"tbody\", null, React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playTurn: this.playTurn,\n        y: 0\n      }), React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playTurn: this.playTurn,\n        y: 1\n      }), React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playTurn: this.playTurn,\n        y: 2\n      }), React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playTurn: this.playTurn,\n        y: 3\n      }), React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playTurn: this.playTurn,\n        y: 4\n      }), React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playTurn: this.playTurn,\n        y: 5\n      })));\n    }\n  }]);\n\n  return Board;\n}(React.Component);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeD83MzViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3cgZnJvbSAnLi9Sb3cuanN4JztcblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY291bnQ6IDAsXG4gICAgICByZWRUdXJuOiB0cnVlLFxuICAgICAgZ2FtZU92ZXI6IGZhbHNlLFxuICAgICAgd2lubmVyOiAnJyxcbiAgICAgIGJvYXJkOiBbXG4gICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXG4gICAgICBdXG4gICAgfTtcblxuICAgIHRoaXMucGxheVR1cm4gPSB0aGlzLnBsYXlUdXJuLmJpbmQodGhpcyk7XG4gIH1cblxuICBwbGF5VHVybihldmVudCkge1xuICAgIC8vIGNsaWNrIGhhbmRsaW5nIHRvIGZpbmQgY29sdW1uLi4uXG4gICAgdmFyIGNsaWNrZWRTcGFjZSA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZFNwYWNlIGlzOicsIGNsaWNrZWRTcGFjZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBjZWxsU3BhY2luZz1cIjBcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDxSb3cgcGxheVR1cm49e3RoaXMucGxheVR1cm59IHk9ezB9IC8+XG4gICAgICAgICAgPFJvdyBwbGF5VHVybj17dGhpcy5wbGF5VHVybn0geT17MX0gLz5cbiAgICAgICAgICA8Um93IHBsYXlUdXJuPXt0aGlzLnBsYXlUdXJufSB5PXsyfSAvPlxuICAgICAgICAgIDxSb3cgcGxheVR1cm49e3RoaXMucGxheVR1cm59IHk9ezN9IC8+XG4gICAgICAgICAgPFJvdyBwbGF5VHVybj17dGhpcy5wbGF5VHVybn0geT17NH0gLz5cbiAgICAgICAgICA8Um93IHBsYXlUdXJuPXt0aGlzLnBsYXlUdXJufSB5PXs1fSAvPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFlQTtBQWpCQTtBQWtCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBOzs7O0FBeENBO0FBQ0E7QUF3Q0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/board.jsx\n");

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