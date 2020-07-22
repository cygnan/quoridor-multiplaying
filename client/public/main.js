var main =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayLikeToArray; });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithHoles; });\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithoutHoles; });\n/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _classCallCheck; });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _createClass; });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _createForOfIteratorHelper; });\n/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n\nfunction _createForOfIteratorHelper(o) {\n  if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {\n    if (Array.isArray(o) || (o = Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o))) {\n      var i = 0;\n\n      var F = function F() {};\n\n      return {\n        s: F,\n        n: function n() {\n          if (i >= o.length) return {\n            done: true\n          };\n          return {\n            done: false,\n            value: o[i++]\n          };\n        },\n        e: function e(_e) {\n          throw _e;\n        },\n        f: F\n      };\n    }\n\n    throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n  }\n\n  var it,\n      normalCompletion = true,\n      didErr = false,\n      err;\n  return {\n    s: function s() {\n      it = o[Symbol.iterator]();\n    },\n    n: function n() {\n      var step = it.next();\n      normalCompletion = step.done;\n      return step;\n    },\n    e: function e(_e2) {\n      didErr = true;\n      err = _e2;\n    },\n    f: function f() {\n      try {\n        if (!normalCompletion && it[\"return\"] != null) it[\"return\"]();\n      } finally {\n        if (didErr) throw err;\n      }\n    }\n  };\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArray; });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArrayLimit; });\nfunction _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableRest; });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableSpread; });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _slicedToArray; });\n/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\");\n\n\n\n\nfunction _slicedToArray(arr, i) {\n  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _toConsumableArray; });\n/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _unsupportedIterableToArray; });\n/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(n);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./src/agents/agent_list.ts":
/*!**********************************!*\
  !*** ./src/agents/agent_list.ts ***!
  \**********************************/
/*! exports provided: agent_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"agent_list\", function() { return agent_list; });\n/* harmony import */ var _alphabeta_alphabeta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alphabeta/alphabeta */ \"./src/agents/alphabeta/alphabeta.ts\");\n// import {naiveAgent} from \"./naive/naive\"\nvar agent_list={// \"Manual\": null,\n\"CPU Lv.1\":function CPULv1(state){return Object(_alphabeta_alphabeta__WEBPACK_IMPORTED_MODULE_0__[\"alphaBetaAgent\"])(state,1);},\"CPU Lv.2\":function CPULv2(state){return Object(_alphabeta_alphabeta__WEBPACK_IMPORTED_MODULE_0__[\"alphaBetaAgent\"])(state,2);},\"CPU Lv.3\":function CPULv3(state){return Object(_alphabeta_alphabeta__WEBPACK_IMPORTED_MODULE_0__[\"alphaBetaAgent\"])(state,3);},\"CPU Lv.4\":function CPULv4(state){return Object(_alphabeta_alphabeta__WEBPACK_IMPORTED_MODULE_0__[\"alphaBetaAgent\"])(state,4);}};\n\n//# sourceURL=webpack://%5Bname%5D/./src/agents/agent_list.ts?");

/***/ }),

/***/ "./src/agents/alphabeta/alphabeta.ts":
/*!*******************************************!*\
  !*** ./src/agents/alphabeta/alphabeta.ts ***!
  \*******************************************/
/*! exports provided: alphaBetaAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"alphaBetaAgent\", function() { return alphaBetaAgent; });\n/* harmony import */ var _tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var _quoridor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../quoridor_core */ \"./src/quoridor_core.ts\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ \"./src/agents/common.ts\");\nfunction shuffle(acts){for(var i=0;i<acts.length;i++){var k=Math.floor(Math.random()*(i+1));var temp=acts[i];acts[i]=acts[k];acts[k]=temp;}}function search(state,depth,alpha,beta,maximize,cpuTurn,first){if(depth==0){var score=-Object(_common__WEBPACK_IMPORTED_MODULE_3__[\"shortestPath\"])(state,cpuTurn)+Object(_common__WEBPACK_IMPORTED_MODULE_3__[\"shortestPath\"])(state,1-cpuTurn);return[score,-1];}var winner=Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_2__[\"isGameOver\"])(state);if(winner>=0){if(winner==cpuTurn)return[+1000,-1];else return[-1000,-1];}var acts=Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_2__[\"getCandidateActs\"])(state);if(first)shuffle(acts);var value=maximize?-1e9:+1e9;var best_act=null;var _iterator=Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(acts),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var act=_step.value;var nstate=state.clone();Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_2__[\"applyAct\"])(nstate,act);var _search=search(nstate,depth-1,alpha,beta,!maximize,cpuTurn,false),_search2=Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_search,2),_score=_search2[0],_=_search2[1];if(maximize){// value = Math.max(value, score);\nif(value<_score){value=_score;best_act=act;}alpha=Math.max(alpha,_score);}else{// value = Math.min(value, score);\nif(value>_score){value=_score;best_act=act;}beta=Math.min(beta,_score);}if(alpha>=beta)break;}}catch(err){_iterator.e(err);}finally{_iterator.f();}return[value,best_act];}function alphaBetaAgent(state,depth){var _search3=search(state,depth,-1e9,+1e9,true,state.turn,true),_search4=Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_search3,2),_=_search4[0],act=_search4[1];return act;}\n\n//# sourceURL=webpack://%5Bname%5D/./src/agents/alphabeta/alphabeta.ts?");

/***/ }),

/***/ "./src/agents/common.ts":
/*!******************************!*\
  !*** ./src/agents/common.ts ***!
  \******************************/
/*! exports provided: shortestPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shortestPath\", function() { return shortestPath; });\n/* harmony import */ var _tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _quoridor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quoridor_core */ \"./src/quoridor_core.ts\");\nfunction shortestPath(state,player){var q=[[state.poses[player],0]];var visited=new Int8Array(17*17).fill(0);while(q.length>0){var _q$shift=q.shift(),_q$shift2=Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_q$shift,2),now=_q$shift2[0],steps=_q$shift2[1];if(visited[now])continue;visited[now]=1;if(player==0&&now<17)return steps;if(player==1&&now>=16*17)return steps;for(var r=0;r<4;r++){var sub=Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_1__[\"movedPos\"])(now,r);if(sub<0||state.field[sub]>=0)continue;// wall\nvar next=Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_1__[\"movedPos\"])(sub,r);if(visited[next])continue;q.push([next,steps+1]);}}// unreachable\nreturn 1e6;}\n\n//# sourceURL=webpack://%5Bname%5D/./src/agents/common.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var _tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _quoridor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quoridor_core */ \"./src/quoridor_core.ts\");\n/* harmony import */ var _agents_agent_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agents/agent_list */ \"./src/agents/agent_list.ts\");\nvar boardDiv=document.querySelector(\".qf_inner_gameboard\");function turnString(turn){return turn==0?\"b\":\"w\";}function isValid(act){return g_candidate_acts.includes(act);}function invokeAct(event){if(g_gameover)return;if(!g_humans_turn)return;var s=event.target.dataset[\"pos\"];var act=parseInt(s);if(!isValid(act))return;console.log(act);updateBoard(act);var worker=new Worker(\"emissionWorker.js\");worker.addEventListener('message',function(message){});worker.postMessage([act,1]);if(g_gameover)return;if(_agents_agent_list__WEBPACK_IMPORTED_MODULE_3__[\"agent_list\"][g_agent_name]){g_humans_turn=false;g_delayed_shadow_act=null;var d=document.createElement(\"div\");d.style.width=\"440px\";d.style.height=\"40px\";d.style.top=\"-50px\";d.style.left=\"0px\";d.classList.add(\"qf_thinking_text\");d.classList.add(\"to_be_disposed\");d.innerText=\"CPU's TURN...\";boardDiv.appendChild(d);setTimeout(takeCPUTurn,100);}}function takeCPUTurn(){if(g_gameover)return;var worker=new Worker(\"receptionWorker.js\");worker.addEventListener('message',function(message){var _message$data=Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(message.data,2),cpu_act=_message$data[0],turn=_message$data[1];if(g_state.turn!=turn){return;}updateBoard(cpu_act);document.querySelectorAll(\".qf_thinking_text\").forEach(function(d){return d&&d.remove();});if(g_gameover)return;g_humans_turn=true;if(g_delayed_shadow_act!=null){showShadowImpl(g_delayed_shadow_act);g_delayed_shadow_act=null;}});worker.postMessage([g_state,g_agent_name]);}function showShadowImpl(act){if(!isValid(act))return;var _decomposeAct=Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_2__[\"decomposeAct\"])(act),_decomposeAct2=Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_decomposeAct,2),y=_decomposeAct2[0],x=_decomposeAct2[1];if(y%2==0&&x%2==0){// piece shadow\nvar shadowDiv=document.querySelector(\".qf_\"+turnString(g_state.turn)+\"piece2\");shadowDiv.style.top=topPx(y)+2+\"px\";shadowDiv.style.left=topPx(x)+2+\"px\";shadowDiv.style.visibility=\"visible\";}else{// wall shadow\nvar dir=y%2;var _shadowDiv=document.querySelector(\".qf_wall[data-wall_shadow=\\\"\".concat(g_state.turn).concat(dir,\"\\\"]\"));_shadowDiv.style.top=topPx(y)+\"px\";_shadowDiv.style.left=topPx(x)+\"px\";_shadowDiv.style.visibility=\"visible\";}}function showShadowEvent(event){if(g_gameover)return;var act=parseInt(event.target.dataset[\"pos\"]);if(!g_humans_turn){g_delayed_shadow_act=act;return;}showShadowImpl(act);}function clearPieceShadow(event){for(var p=0;p<=1;p++){var shadowDiv=document.querySelector(\".qf_\"+turnString(p)+\"piece2\");shadowDiv.style.visibility=\"hidden\";}}function clearWallShadow(event){for(var p=0;p<=1;p++){for(var dir=0;dir<=1;dir++){var shadowDiv=document.querySelector(\".qf_wall[data-wall_shadow=\\\"\".concat(p).concat(dir,\"\\\"]\"));shadowDiv.style.visibility=\"hidden\";}}}function showWinningText(winning_player){var d=document.createElement(\"div\");d.style.width=\"440px\";d.style.height=\"40px\";if(winning_player==0){d.style.top=\"-50px\";d.classList.add(\"qf_winning_btext\");}else{d.style.top=\"450px\";d.classList.add(\"qf_winning_wtext\");}d.style.left=\"0px\";d.classList.add(\"qf_winning_text\");d.classList.add(\"to_be_disposed\");if(winning_player==0){d.innerText=\"YOU WIN!!\";}else{d.innerText=\"CPU WINS!!\";}boardDiv.appendChild(d);}function topPx(idx){var a=Math.floor((idx+1)/2);var b=Math.floor(idx/2);return 40*a+10*b;}function toggleAgent(event){var checkbox=event.target;if(checkbox.checked){g_agent_name=checkbox.value;}resetGameState();}function initializeAgentButtons(){var buttonsDiv=document.querySelector(\".qf_controlpanel\");var _iterator=Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object.keys(_agents_agent_list__WEBPACK_IMPORTED_MODULE_3__[\"agent_list\"]).entries()),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _step$value=Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_step.value,2),i=_step$value[0],agent_name=_step$value[1];var l=document.createElement(\"label\");l.classList.add(\"qf_toggle_button\");var b=document.createElement(\"div\");b.innerText=agent_name;b.style.width=100+\"px\";b.style.height=25+\"px\";b.style.top=Math.floor(i/4)*30+\"px\";b.style.left=i%4*110+\"px\";b.classList.add(\"qf_control_button\");b.classList.add(\"qf_button_ai\");var r=document.createElement(\"input\");r.type=\"radio\";r.name=\"agent\";r.value=agent_name;if(i==0){r.checked=true;}r.addEventListener(\"click\",toggleAgent);l.appendChild(r);l.appendChild(b);buttonsDiv.appendChild(l);}}catch(err){_iterator.e(err);}finally{_iterator.f();}}function prepareGameState(){// cells\nfor(var y=0;y<17;y+=2){for(var x=0;x<17;x+=2){var d=document.createElement(\"div\");d.style.width=40+\"px\";d.style.height=40+\"px\";d.style.top=topPx(y)+\"px\";d.style.left=topPx(x)+\"px\";d.dataset[\"pos\"]=\"\"+(y*17+x);d.classList.add(\"qf_board_grid\");d.addEventListener(\"click\",invokeAct);d.addEventListener(\"mouseenter\",showShadowEvent);d.addEventListener(\"mouseleave\",clearPieceShadow);boardDiv.appendChild(d);}}// shadow of piece\nfor(var p=0;p<=1;p++){var _d=document.createElement(\"div\");_d.style.width=36+\"px\";_d.style.height=36+\"px\";_d.style.top=\"0px\";_d.style.left=\"0px\";_d.style.visibility=\"hidden\";_d.classList.add(\"qf_piece\");_d.classList.add(\"qf_\"+turnString(p)+\"piece2\");boardDiv.appendChild(_d);}// spaces\nfor(var _y=0;_y<17;_y++){for(var _x=(_y+1)%2;_x<17;_x+=2){var _d2=document.createElement(\"div\");if(_y%2==0){_d2.style.width=10+\"px\";_d2.style.height=40+\"px\";}else{_d2.style.width=40+\"px\";_d2.style.height=10+\"px\";}_d2.style.top=topPx(_y)+\"px\";_d2.style.left=topPx(_x)+\"px\";_d2.dataset[\"pos\"]=\"\"+(_y*17+_x);_d2.classList.add(\"qf_board_space\");_d2.addEventListener(\"click\",invokeAct);_d2.addEventListener(\"mouseenter\",showShadowEvent);_d2.addEventListener(\"mouseleave\",clearWallShadow);boardDiv.appendChild(_d2);}}// shadow of walls\nfor(var _p=0;_p<=1;_p++){for(var dir=0;dir<2;dir++){var _d3=document.createElement(\"div\");if(dir==0){_d3.style.width=10+\"px\";_d3.style.height=90+\"px\";_d3.classList.add(\"qf_hwall\");}else{_d3.style.width=90+\"px\";_d3.style.height=10+\"px\";_d3.classList.add(\"qf_vwall\");}_d3.style.top=\"0px\";_d3.style.left=\"0px\";_d3.style.visibility=\"hidden\";_d3.dataset[\"wall_shadow\"]=\"\".concat(_p).concat(dir);_d3.classList.add(\"qf_wall\");_d3.classList.add(\"qf_\"+turnString(_p)+\"wall2\");boardDiv.appendChild(_d3);}}}function resetGameState(){// remove existing objects\ndocument.querySelectorAll(\".to_be_disposed\").forEach(function(d){return d&&d.remove();});g_state=new _quoridor_core__WEBPACK_IMPORTED_MODULE_2__[\"State\"](0);g_humans_turn=true;g_delayed_shadow_act=null;g_gameover=false;g_candidate_acts=Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_2__[\"getCandidateActs\"])(g_state);// set remaining walls\nfor(var i=0;i<g_state.walls[0];i++){for(var p=0;p<=1;p++){var d=document.createElement(\"div\");d.style.width=10+\"px\";d.style.height=40+\"px\";d.style.top=(p==0?topPx(17):-40)+\"px\";d.style.left=topPx(i*2)-10+\"px\";d.dataset[\"idx\"]=i.toString();d.classList.add(\"qf_wall\");d.classList.add(\"qf_\"+turnString(p)+\"wall\");d.classList.add(\"qf_vwall\");d.classList.add(\"qf_remaining_\"+turnString(p)+\"wall\");// for search\nd.classList.add(\"to_be_disposed\");boardDiv.appendChild(d);}}for(var _p2=0;_p2<=1;_p2++){var _decomposeAct3=Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_2__[\"decomposeAct\"])(g_state.poses[_p2]),_decomposeAct4=Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_decomposeAct3,2),y=_decomposeAct4[0],x=_decomposeAct4[1];var _d4=document.createElement(\"div\");_d4.style.width=36+\"px\";_d4.style.height=36+\"px\";_d4.style.top=topPx(y)+2+\"px\";_d4.style.left=topPx(x)+2+\"px\";_d4.classList.add(\"qf_piece\");_d4.classList.add(\"qf_\"+turnString(_p2)+\"piece\");_d4.classList.add(\"to_be_disposed\");boardDiv.appendChild(_d4);}}function updateBoard(act){var _decomposeAct5=Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_2__[\"decomposeAct\"])(act),_decomposeAct6=Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_decomposeAct5,2),y=_decomposeAct6[0],x=_decomposeAct6[1];if(x%2==0&&y%2==0){// piece movement\nvar pieceDiv=document.querySelector(\".qf_\"+turnString(g_state.turn)+\"piece\");pieceDiv.style.top=topPx(y)+2+\"px\";pieceDiv.style.left=topPx(x)+2+\"px\";}if(x%2!=y%2){// wall\nvar d=document.createElement(\"div\");if(x%2==0){// horizontal\nd.style.width=90+\"px\";d.style.height=10+\"px\";d.style.top=topPx(y)+\"px\";d.classList.add(\"qf_hwall\");}else{// vertical\nd.style.width=10+\"px\";d.style.height=90+\"px\";d.style.top=topPx(y)+\"px\";d.classList.add(\"qf_vwall\");}d.style.left=topPx(x)+\"px\";d.style.transform=\"scale(3)\";d.style.opacity=\"0\";d.classList.add(\"qf_wall\");d.classList.add(\"to_be_disposed\");d.classList.add(\"qf_\"+turnString(g_state.turn)+\"wall\");boardDiv.appendChild(d);// update the number of remaining walls\nvar idx=g_state.walls[g_state.turn]-1;var remaining=document.querySelector(\".qf_remaining_\".concat(turnString(g_state.turn),\"wall[data-idx=\\\"\").concat(idx,\"\\\"]\"));remaining.style.opacity=\"0\";setTimeout(function(){d.style.transform=\"scale(1)\";d.style.opacity=\"1\";},50);}// update the state\nObject(_quoridor_core__WEBPACK_IMPORTED_MODULE_2__[\"applyAct\"])(g_state,act);// update the candidate actions\ng_candidate_acts=Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_2__[\"getCandidateActs\"])(g_state);// check gameover\nvar winner=Object(_quoridor_core__WEBPACK_IMPORTED_MODULE_2__[\"isGameOver\"])(g_state);if(winner>=0){showWinningText(winner);g_gameover=true;}}var g_state=null;var g_agent_name=\"CPU Lv.1\";var g_humans_turn=true;var g_delayed_shadow_act=null;var g_gameover=false;var g_candidate_acts=[];initializeAgentButtons();prepareGameState();resetGameState();\n\n//# sourceURL=webpack://%5Bname%5D/./src/main.ts?");

/***/ }),

/***/ "./src/quoridor_core.ts":
/*!******************************!*\
  !*** ./src/quoridor_core.ts ***!
  \******************************/
/*! exports provided: movedPos, State, decomposeAct, getCandidateActs, checkReachability, applyAct, isGameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"movedPos\", function() { return movedPos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return State; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decomposeAct\", function() { return decomposeAct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCandidateActs\", function() { return getCandidateActs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkReachability\", function() { return checkReachability; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyAct\", function() { return applyAct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isGameOver\", function() { return isGameOver; });\n/* harmony import */ var _tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js\");\nvar g_dir=[-1,-17,1,17];function movedPos(pos,direction){if(direction==0&&pos%17==0)return-1;if(direction==2&&pos%17==16)return-1;pos+=g_dir[direction];if(pos<0||pos>=17*17)return-1;return pos;}var State=/*#__PURE__*/function(){function State(initial_turn){Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this,State);this.field=void 0;this.turn=void 0;this.walls=void 0;this.poses=void 0;this.field=new Int8Array(17*17).fill(-1);this.turn=initial_turn;this.walls=[10,10];this.poses=[16*17+8,0*17+8];// [black, white]\n}Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(State,[{key:\"toString\",value:function toString(){var s=\"\";for(var y=0;y<17;y++){for(var x=0;x<17;x++){var c=this.field[y*17+x];if(y%2==1&&x%2==1){// none\ns+=\" \";}else if(y%2==1||x%2==1){// wall or floor\ns+=c==-1?\".\":\"#\";}else{// piece or floor\nif(c==-1)s+=\".\";if(c==0)s+=\"B\";if(c==1)s+=\"W\";}}s+=\"\\n\";}s+=\"W:\".concat(this.walls[1],\" / B:\").concat(this.walls[0]);return s;}},{key:\"clone\",value:function clone(){var s=new State(0);s.field.set(this.field);s.turn=this.turn;s.walls=Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.walls);s.poses=Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.poses);return s;}}]);return State;}();function decomposeAct(act){var y=Math.floor(act/17),x=act%17;return[y,x];}function getCandidateActs(state){var acts=[];var pos=state.poses[state.turn];// piece move\nfor(var r=0;r<4;r++){var a1pos=movedPos(pos,r);if(a1pos<0||state.field[a1pos]>=0)continue;var a2pos=movedPos(a1pos,r);if(a2pos!=state.poses[1-state.turn]){// destination is empty\nacts.push(a2pos);}else{// destination is occupied by the opponent\nvar a3pos=movedPos(a2pos,r);if(a3pos<0||state.field[a3pos]>=0){// wall exists behind the opponent\nfor(var turn=1;turn<=3;turn+=2){var r2=(r+turn)%4;var a2t1pos=movedPos(a2pos,r2);var a2t2pos=movedPos(a2t1pos,r2);if(a2t1pos<0||state.field[a2t1pos]>=0)continue;if(state.field[a2t2pos]>=0)continue;acts.push(a2t2pos);}}else{// we can jump across the opponent\nvar a4pos=movedPos(a3pos,r);acts.push(a4pos);}}}// wall placement\nif(state.walls[state.turn]>=1){for(var y=0;y<17;y++){candidate_loop:for(var x=(y+1)%2;x<17;x+=2){var dir=y%2==0?3:2;// the position must not be occupied\nvar places=[];var now=y*17+x;for(var i=0;i<3;i++){places.push(now);if(now<0||state.field[now]>=0)continue candidate_loop;now=movedPos(now,dir);}// temporarily fill the space\nfor(var _i=0;_i<3;_i++){state.field[places[_i]]=6;}// check if the reachability condition holds after placement\nif(checkReachability(state)){acts.push(y*17+x);}// revert the filled space\nfor(var _i2=0;_i2<3;_i2++){state.field[places[_i2]]=-1;}}}}return acts;}function checkReachability(state){loop_player:for(var p=0;p<=1;p+=1){var q=[state.poses[p]];var visited=new Int8Array(17*17).fill(0);while(q.length>0){var now=q.pop();if(visited[now])continue;visited[now]=1;if(p==0&&now<17)continue loop_player;if(p==1&&now>=16*17)continue loop_player;for(var r=0;r<4;r++){var sub=movedPos(now,r);if(sub<0||state.field[sub]>=0)continue;// wall\nvar next=movedPos(sub,r);if(visited[next])continue;q.push(next);}}// unreachable\nreturn false;}return true;}function applyAct(state,act){var _decomposeAct=decomposeAct(act),_decomposeAct2=Object(_tank_disk0_organized_Git_quoridor_multiplaying_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_decomposeAct,2),y=_decomposeAct2[0],x=_decomposeAct2[1];if(x%2==0&&y%2==0){// piece movement\nstate.poses[state.turn]=act;}else if(x%2!=y%2){// wall placement\nstate.walls[state.turn]--;var dir=y%2==0?3:2;var now=act;for(var i=0;i<3;i++){state.field[now]=9;now=movedPos(now,dir);}}state.turn=1-state.turn;}function isGameOver(state){if(state.poses[0]<17){return 0;}else if(state.poses[1]>=16*17){return 1;}return-1;}\n\n//# sourceURL=webpack://%5Bname%5D/./src/quoridor_core.ts?");

/***/ })

/******/ });