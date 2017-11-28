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
eval("\n\nvar _script_with_export = __webpack_require__(/*! ./js/script_with_export */ 1);\n\nvar _script_with_export2 = _interopRequireDefault(_script_with_export);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mainHTML = '<div id=\"triggerIcon\">\\r\\n    <!-- The icon should be placed here -->\\r\\n</div>\\r\\n<div id=\"main\" class=\"fixed-right-panel\">\\r\\n    <h1>Tag!</h1>\\r\\n    <p>Hello World!</p>\\r\\n</div>';\nvar mainCSS = '.fixed-right-panel{position:fixed;top:0;right:0;min-height:100%;background-color:rgba(145, 0, 0, 0.336);z-index:1;}#triggerIcon{position:fixed;top:2em;right:5em;width:2em;height:2em;background-color:rgb(0, 109, 109);z-index:2;}';\n\n\nvar addCSS = function addCSS(style) {\n    var stylesheet = document.createElement('style');\n    stylesheet.innerHTML = style;\n    document.body.appendChild(stylesheet);\n};\nvar addHTML = function addHTML(html) {\n    $('body').append(html);\n};\n\naddHTML(mainHTML);\naddCSS(mainCSS);\n(0, _script_with_export2.default)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYnVuZGxlci5qcz9hN2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYWluSFRNTCBmcm9tICcuL2h0bWwvaW5kZXguaHRtbCc7XHJcbmltcG9ydCBtYWluQ1NTIGZyb20gJy4vY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBleGVjdXRlU2NyaXB0IGZyb20gJy4vanMvc2NyaXB0X3dpdGhfZXhwb3J0JztcclxuXHJcbmNvbnN0IGFkZENTUyA9IGZ1bmN0aW9uKHN0eWxlKSB7XHJcbiAgICBjb25zdCBzdHlsZXNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIHN0eWxlc2hlZXQuaW5uZXJIVE1MID0gc3R5bGU7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0eWxlc2hlZXQpO1xyXG59O1xyXG5jb25zdCBhZGRIVE1MID0gZnVuY3Rpb24oaHRtbCkge1xyXG4gICAgJCgnYm9keScpLmFwcGVuZChodG1sKTtcclxufTtcclxuXHJcbmFkZEhUTUwobWFpbkhUTUwpO1xyXG5hZGRDU1MobWFpbkNTUyk7XHJcbmV4ZWN1dGVTY3JpcHQoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2J1bmRsZXIuanMiXSwibWFwcGluZ3MiOiI7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************************!*\
  !*** ./src/js/script_with_export.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nexports.default = function () {\n    $(document).ready(function () {\n        $('#triggerIcon').on('click', function (event) {\n            console.log('Clicked icon');\n            console.log(event);\n            console.log('test');\n        });\n    });\n\n    /**\r\n     * @description a template for creating an API caller\r\n     * @example\r\n     * const myAPI = new API('http://example.org/api/');\r\n     * myAPI.myOwnAPICall = function() {\r\n     *   var args = {\r\n     *      action: 'test',\r\n     *      something: 'something'\r\n     *   };\r\n     *   return this.apiCall(args, 'GET');\r\n     * };\r\n     * \r\n     * myApi.myOwnAPICall()\r\n     *  .then(response => console.log(response))\r\n     *  .catch(error => console.error(error));\r\n     */\n\n    var API = function () {\n        function API(baseUrl) {\n            _classCallCheck(this, API);\n\n            this.baseUrl = baseUrl;\n        }\n\n        /** apiCall\r\n         * @param {object}  args - the arguments passed to the api call\r\n         * @param {string}  [subPath='']    - to make an apicall to baseUrl + subpath\r\n         * @param {string}  [method='GET']  - the method used for the api call\r\n         * @returns {Promise<response>}\r\n         * @example\r\n         * var args = {\r\n         *    action: 'signup',\r\n         *    username: 'Tom',\r\n         *    email: 'Tom@tom.tom',\r\n         *    password: '1234b4'\r\n         * };\r\n         * apiCall(args, 'account/', 'POST');\r\n         */\n\n\n        _createClass(API, [{\n            key: 'apiCall',\n            value: function apiCall(args) {\n                var subPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n                var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';\n\n                var url = this.baseUrl + subPath;\n                switch (method) {\n                    case 'GET':\n                        {\n                            // Convert args object to parameter string\t\n                            var parameterString = '?' + Object.entries(args).map(function (argPair) {\n                                return argPair.join('=');\n                            }).join('&');\n                            return this._get(url + parameterString);\n                            break;\n                        }\n                    case 'POST':\n                        {\n                            return this._post(url, args);\n                            break;\n                        }\n                    default:\n                        {\n                            return Promise.reject('unsupported method');\n                        }\n                }\n            }\n        }, {\n            key: '_get',\n            value: function _get(url) {\n                return new Promise(function (resolve, reject) {\n                    $.getJSON(url).done(resolve).fail(reject);\n                });\n            }\n        }, {\n            key: '_post',\n            value: function _post(url, args) {\n                return new Promise(function (resolve, reject) {\n                    $.post(url, args).done(resolve).fail(reject);\n                });\n            }\n        }]);\n\n        return API;\n    }();\n\n    // Create API\n\n\n    var tagAPI = new API('https://stickertags2.glitch.me/');\n};\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvc2NyaXB0X3dpdGhfZXhwb3J0LmpzP2IyNmYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJyN0cmlnZ2VySWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NsaWNrZWQgaWNvbicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBhIHRlbXBsYXRlIGZvciBjcmVhdGluZyBhbiBBUEkgY2FsbGVyXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IG15QVBJID0gbmV3IEFQSSgnaHR0cDovL2V4YW1wbGUub3JnL2FwaS8nKTtcclxuICogbXlBUEkubXlPd25BUElDYWxsID0gZnVuY3Rpb24oKSB7XHJcbiAqICAgdmFyIGFyZ3MgPSB7XHJcbiAqICAgICAgYWN0aW9uOiAndGVzdCcsXHJcbiAqICAgICAgc29tZXRoaW5nOiAnc29tZXRoaW5nJ1xyXG4gKiAgIH07XHJcbiAqICAgcmV0dXJuIHRoaXMuYXBpQ2FsbChhcmdzLCAnR0VUJyk7XHJcbiAqIH07XHJcbiAqIFxyXG4gKiBteUFwaS5teU93bkFQSUNhbGwoKVxyXG4gKiAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG4gKiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICovXHJcbmNsYXNzIEFQSSB7XHJcbiAgICBjb25zdHJ1Y3RvcihiYXNlVXJsKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gIGJhc2VVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIGFwaUNhbGxcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSAgYXJncyAtIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBhcGkgY2FsbFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBbc3ViUGF0aD0nJ10gICAgLSB0byBtYWtlIGFuIGFwaWNhbGwgdG8gYmFzZVVybCArIHN1YnBhdGhcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgW21ldGhvZD0nR0VUJ10gIC0gdGhlIG1ldGhvZCB1c2VkIGZvciB0aGUgYXBpIGNhbGxcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHJlc3BvbnNlPn1cclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiB2YXIgYXJncyA9IHtcclxuICAgICAqICAgIGFjdGlvbjogJ3NpZ251cCcsXHJcbiAgICAgKiAgICB1c2VybmFtZTogJ1RvbScsXHJcbiAgICAgKiAgICBlbWFpbDogJ1RvbUB0b20udG9tJyxcclxuICAgICAqICAgIHBhc3N3b3JkOiAnMTIzNGI0J1xyXG4gICAgICogfTtcclxuICAgICAqIGFwaUNhbGwoYXJncywgJ2FjY291bnQvJywgJ1BPU1QnKTtcclxuICAgICAqL1xyXG4gICAgYXBpQ2FsbChhcmdzLCBzdWJQYXRoPScnLCBtZXRob2Q9J0dFVCcpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmJhc2VVcmwgKyBzdWJQYXRoO1xyXG4gICAgICAgIHN3aXRjaChtZXRob2QpIHtcclxuICAgICAgICAgICAgY2FzZSAnR0VUJzoge1xyXG4gICAgICAgICAgICAgICAgLy8gQ29udmVydCBhcmdzIG9iamVjdCB0byBwYXJhbWV0ZXIgc3RyaW5nXHRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlclN0cmluZyA9ICc/JyArIE9iamVjdC5lbnRyaWVzKGFyZ3MpLm1hcChhcmdQYWlyID0+IGFyZ1BhaXIuam9pbignPScpKS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KHVybCArIHBhcmFtZXRlclN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdQT1NUJzoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc3QodXJsLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgndW5zdXBwb3J0ZWQgbWV0aG9kJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfZ2V0KHVybCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICQuZ2V0SlNPTih1cmwpXHJcbiAgICAgICAgICAgICAgICAuZG9uZShyZXNvbHZlKVxyXG4gICAgICAgICAgICAgICAgLmZhaWwocmVqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9wb3N0KHVybCwgYXJncykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICQucG9zdCh1cmwsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAuZG9uZShyZXNvbHZlKVxyXG4gICAgICAgICAgICAgICAgLmZhaWwocmVqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQ3JlYXRlIEFQSVxyXG5jb25zdCB0YWdBUEkgPSBuZXcgQVBJKCdodHRwczovL3N0aWNrZXJ0YWdzMi5nbGl0Y2gubWUvJyk7XHJcblxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3NjcmlwdF93aXRoX2V4cG9ydC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFUQTtBQTBCQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQTlCQTtBQUFBO0FBQUE7QUE0Q0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUE3REE7QUFBQTtBQUFBO0FBK0RBO0FBQ0E7QUFHQTtBQUNBO0FBcEVBO0FBQUE7QUFBQTtBQXNFQTtBQUNBO0FBR0E7QUFDQTtBQTNFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBNkVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);