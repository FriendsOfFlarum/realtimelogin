module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport *//*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_utils_alertEmailConfirmation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/utils/alertEmailConfirmation */ "flarum/utils/alertEmailConfirmation");
/* harmony import */ var flarum_utils_alertEmailConfirmation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_alertEmailConfirmation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/DiscussionList */ "flarum/components/DiscussionList");
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/SignUpModal */ "flarum/components/SignUpModal");
/* harmony import */ var flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_5__);






flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('fof-realtimelogin', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_2__["extend"])(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'view', function () {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.newLogin) {
      delete flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.newLogin;
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'onsubmit', function (original, e) {
    var _this = this;

    e.preventDefault();
    this.loading = true;
    var data = this.submitData();
    flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.request({
      url: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('baseUrl') + '/register',
      method: 'POST',
      data: data,
      errorHandler: this.onerror.bind(this)
    }).then(function () {
      flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.find('users', data.username).then(function (user) {
        flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user = user;
        flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.find('' + '' + '').then(function () {
          flarum_utils_alertEmailConfirmation__WEBPACK_IMPORTED_MODULE_1___default()(flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a);
          flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.newLogin = true;

          _this.hide();

          _this.loaded.bind(_this);
        });
      });
    });
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_2__["override"])(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'onsubmit', function (original, e) {
    var _this2 = this;

    e.preventDefault();
    this.loading = true;
    var identification = this.identification();
    var password = this.password();
    var remember = this.remember();
    flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.login({
      identification: identification,
      password: password,
      remember: remember
    }, {
      errorHandler: this.onerror.bind(this)
    }).then(function () {
      flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.find('users', identification).then(function (user) {
        flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user = user;
        flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.find('').then(function () {
          flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.newLogin = true;

          _this2.hide();

          _this2.loaded.bind(_this2);
        });
      });
    });
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/DiscussionList":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionList']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionList'];

/***/ }),

/***/ "flarum/components/LogInModal":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LogInModal']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LogInModal'];

/***/ }),

/***/ "flarum/components/SignUpModal":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/SignUpModal']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SignUpModal'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/utils/alertEmailConfirmation":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['utils/alertEmailConfirmation']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/alertEmailConfirmation'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map