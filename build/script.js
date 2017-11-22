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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** ./src/bundler.js ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _script_with_export = __webpack_require__(/*! ./js/script_with_export */ 1);\n\nvar _script_with_export2 = _interopRequireDefault(_script_with_export);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mainHTML = '<div id=\"triggerIcon\">\\r\\n    <!-- The icon should be placed here. -->\\r\\n</div>\\r\\n<div id=\"main\" class=\"fixed-right-panel\">\\r\\n    <h1>Tag!</h1>\\r\\n</div>';\nvar mainCSS = '.fixed-right-panel{position:fixed;top:0;right:0;min-height:100%;background-color:rgba(0, 145, 145, 0.719);z-index:1;}#triggerIcon{position:fixed;top:2em;right:5em;width:2em;height:2em;background-color:rgb(0, 109, 109);z-index:2;}';\n\n\nvar addCSS = function addCSS(style) {\n    var stylesheet = document.createElement('style');\n    stylesheet.innerHTML = style;\n    document.body.appendChild(stylesheet);\n};\nvar addHTML = function addHTML(html) {\n    document.body.innerHTML += html;\n};\n\naddHTML(mainHTML);\naddCSS(mainCSS);\n(0, _script_with_export2.default)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYnVuZGxlci5qcz9hN2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYWluSFRNTCBmcm9tICcuL2h0bWwvaW5kZXguaHRtbCc7XHJcbmltcG9ydCBtYWluQ1NTIGZyb20gJy4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBleGVjdXRlU2NyaXB0IGZyb20gJy4vanMvc2NyaXB0X3dpdGhfZXhwb3J0JztcclxuXHJcbmNvbnN0IGFkZENTUyA9IGZ1bmN0aW9uKHN0eWxlKSB7XHJcbiAgICBjb25zdCBzdHlsZXNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIHN0eWxlc2hlZXQuaW5uZXJIVE1MID0gc3R5bGU7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0eWxlc2hlZXQpO1xyXG59O1xyXG5jb25zdCBhZGRIVE1MID0gZnVuY3Rpb24oaHRtbCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gaHRtbDtcclxufTtcclxuXHJcbmFkZEhUTUwobWFpbkhUTUwpO1xyXG5hZGRDU1MobWFpbkNTUyk7XHJcbmV4ZWN1dGVTY3JpcHQoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2J1bmRsZXIuanMiXSwibWFwcGluZ3MiOiI7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************************!*\
  !*** ./src/js/script_with_export.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function () {\n    $(document).ready(function () {\n        $('#triggerIcon').on('click', function (event) {\n            console.log('Clicked icon');\n            console.log(event);\n            console.log('test');\n        });\n    });\n};\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvc2NyaXB0X3dpdGhfZXhwb3J0LmpzP2IyNmYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJyN0cmlnZ2VySWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NsaWNrZWQgaWNvbicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG4gICAgfSk7XHJcbn0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3NjcmlwdF93aXRoX2V4cG9ydC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);