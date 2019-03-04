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

/***/ "./client/src/components/board.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/board.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Board =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Board, _React$Component);\n\n  function Board(props) {\n    var _this;\n\n    _classCallCheck(this, Board);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).call(this, props));\n    _this.state = {\n      count: 0,\n      redTurn: true,\n      gameOver: false,\n      winner: '',\n      board: [['', '', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', ''], ['', '', '', '', '', '', '']]\n    };\n    return _this;\n  }\n\n  _createClass(Board, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"table\", {\n        cellSpacing: \"0\"\n      }, React.createElement(\"tbody\", null, React.createElement(\"tr\", null, React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"0\",\n        \"data-y\": \"0\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"1\",\n        \"data-y\": \"0\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"2\",\n        \"data-y\": \"0\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"3\",\n        \"data-y\": \"0\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"4\",\n        \"data-y\": \"0\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"5\",\n        \"data-y\": \"0\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"6\",\n        \"data-y\": \"0\"\n      }))), React.createElement(\"tr\", null, React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"0\",\n        \"data-y\": \"1\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"1\",\n        \"data-y\": \"1\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"2\",\n        \"data-y\": \"1\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"3\",\n        \"data-y\": \"1\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"4\",\n        \"data-y\": \"1\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"5\",\n        \"data-y\": \"1\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"6\",\n        \"data-y\": \"1\"\n      }))), React.createElement(\"tr\", null, React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"0\",\n        \"data-y\": \"2\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"1\",\n        \"data-y\": \"2\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"2\",\n        \"data-y\": \"2\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"3\",\n        \"data-y\": \"2\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"4\",\n        \"data-y\": \"2\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"5\",\n        \"data-y\": \"2\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"6\",\n        \"data-y\": \"2\"\n      }))), React.createElement(\"tr\", null, React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"0\",\n        \"data-y\": \"3\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"1\",\n        \"data-y\": \"3\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"2\",\n        \"data-y\": \"3\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"3\",\n        \"data-y\": \"3\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"4\",\n        \"data-y\": \"3\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"5\",\n        \"data-y\": \"3\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"6\",\n        \"data-y\": \"3\"\n      }))), React.createElement(\"tr\", null, React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"0\",\n        \"data-y\": \"4\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"1\",\n        \"data-y\": \"4\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"2\",\n        \"data-y\": \"4\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"3\",\n        \"data-y\": \"4\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"4\",\n        \"data-y\": \"4\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"5\",\n        \"data-y\": \"4\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"6\",\n        \"data-y\": \"4\"\n      }))), React.createElement(\"tr\", null, React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"0\",\n        \"data-y\": \"5\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"1\",\n        \"data-y\": \"5\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"2\",\n        \"data-y\": \"5\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"3\",\n        \"data-y\": \"5\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"4\",\n        \"data-y\": \"5\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"5\",\n        \"data-y\": \"5\"\n      })), React.createElement(\"td\", null, React.createElement(\"div\", {\n        className: \"space\",\n        \"data-x\": \"6\",\n        \"data-y\": \"5\"\n      })))));\n    }\n  }]);\n\n  return Board;\n}(React.Component);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeD83MzViIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvdW50OiAwLFxuICAgICAgcmVkVHVybjogdHJ1ZSxcbiAgICAgIGdhbWVPdmVyOiBmYWxzZSxcbiAgICAgIHdpbm5lcjogJycsXG4gICAgICBib2FyZDogW1xuICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxuICAgICAgXVxuICAgIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgY2VsbFNwYWNpbmc9XCIwXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjBcIiBkYXRhLXk9XCIwXCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiMVwiIGRhdGEteT1cIjBcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCIyXCIgZGF0YS15PVwiMFwiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjNcIiBkYXRhLXk9XCIwXCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiNFwiIGRhdGEteT1cIjBcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCI1XCIgZGF0YS15PVwiMFwiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjZcIiBkYXRhLXk9XCIwXCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiMFwiIGRhdGEteT1cIjFcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCIxXCIgZGF0YS15PVwiMVwiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjJcIiBkYXRhLXk9XCIxXCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiM1wiIGRhdGEteT1cIjFcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCI0XCIgZGF0YS15PVwiMVwiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjVcIiBkYXRhLXk9XCIxXCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiNlwiIGRhdGEteT1cIjFcIj48L2Rpdj48L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCIwXCIgZGF0YS15PVwiMlwiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjFcIiBkYXRhLXk9XCIyXCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiMlwiIGRhdGEteT1cIjJcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCIzXCIgZGF0YS15PVwiMlwiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjRcIiBkYXRhLXk9XCIyXCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiNVwiIGRhdGEteT1cIjJcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCI2XCIgZGF0YS15PVwiMlwiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjBcIiBkYXRhLXk9XCIzXCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiMVwiIGRhdGEteT1cIjNcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCIyXCIgZGF0YS15PVwiM1wiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjNcIiBkYXRhLXk9XCIzXCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiNFwiIGRhdGEteT1cIjNcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCI1XCIgZGF0YS15PVwiM1wiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjZcIiBkYXRhLXk9XCIzXCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiMFwiIGRhdGEteT1cIjRcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCIxXCIgZGF0YS15PVwiNFwiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjJcIiBkYXRhLXk9XCI0XCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiM1wiIGRhdGEteT1cIjRcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCI0XCIgZGF0YS15PVwiNFwiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjVcIiBkYXRhLXk9XCI0XCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiNlwiIGRhdGEteT1cIjRcIj48L2Rpdj48L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCIwXCIgZGF0YS15PVwiNVwiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjFcIiBkYXRhLXk9XCI1XCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiMlwiIGRhdGEteT1cIjVcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCIzXCIgZGF0YS15PVwiNVwiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJzcGFjZVwiIGRhdGEteD1cIjRcIiBkYXRhLXk9XCI1XCI+PC9kaXY+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cInNwYWNlXCIgZGF0YS14PVwiNVwiIGRhdGEteT1cIjVcIj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBkYXRhLXg9XCI2XCIgZGF0YS15PVwiNVwiPjwvZGl2PjwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBZ0JBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7QUEvRUE7QUFDQTtBQStFQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/board.jsx\n");

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