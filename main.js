/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70);



document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".content");

  if (container) {
    _Starter__WEBPACK_IMPORTED_MODULE_1__["default"].init(container).then(function () {
      var game = new _Game_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    });
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Starter =
/*#__PURE__*/
function () {
  function Starter() {
    var _this = this;

    _classCallCheck(this, Starter);

    pixi_js__WEBPACK_IMPORTED_MODULE_0__["utils"].skipHello(); // pixi app

    this.app = null;
    this._paused = false; // this.isDeveloperMode = true;

    this._init = {};
    this._init.initPromise = new Promise(function (resolve) {
      _this._init.setInitiated = resolve;
    });
    this.size = {
      width: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width,
      height: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height
    };
  }

  _createClass(Starter, [{
    key: "pause",
    value: function pause() {
      if (this._paused) {
        this.ticker.start();
      } else {
        this.ticker.stop();
      }

      this._paused = !this._paused;
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
      var _this$size = this.size,
          width = _this$size.width,
          height = _this$size.height;
      this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"]({
        width: width,
        height: height,
        transparent: true,
        resizeTo: container
      });
      this.app.renderer.autoResize = true;
      container.appendChild(this.app.view);

      window.onresize = function () {
        _this2.resize();
      };

      this.field = _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawSvgSprite({
        parent: this.app.stage,
        name: "bg_1",
        width: width,
        height: height,
        x: width / 2,
        y: height / 2,
        anchor: 0.5
      });
      this.field.interactive = true;
      this.ticker = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Ticker"]();
      this.ticker.start();
      this.ticker.add(function () {
        tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.update();
      });

      this._init.setInitiated();

      this.resize();
      return this._init.initPromise;
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this$size2 = this.size,
          width = _this$size2.width,
          height = _this$size2.height;
      var ratio = width / height;
      var w, h;

      if (window.innerWidth / window.innerHeight >= ratio) {
        w = window.innerHeight * ratio;
        h = window.innerHeight;
      } else {
        w = window.innerWidth;
        h = window.innerWidth / ratio;
      }

      this.app.renderer.resize(w, h);
      this.app.stage.scale.x = w / width;
      this.app.stage.scale.y = h / height;
    }
  }, {
    key: "registerTick",
    value: function registerTick(action) {
      var _this3 = this;

      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(action)) {
        return this.initiated.then(function () {
          var wrap = function wrap() {
            action(_this3.ticker.elapsedMS);
          };

          _this3.ticker.add(wrap);

          return wrap;
        });
      }

      return Promise.reject();
    }
  }, {
    key: "unregisterTick",
    value: function unregisterTick(action) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(action)) {
        this.ticker.remove(action);
      }
    }
  }, {
    key: "initiated",
    get: function get() {
      return this._init.initPromise;
    }
  }]);

  return Starter;
}();

var starter = new Starter();
/* harmony default export */ __webpack_exports__["default"] = (starter);

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SETTINGS = {
  appSizes: {
    width: 1360,
    height: 768
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SETTINGS);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "drawSvgSprite",
    value: function drawSvgSprite(settings) {
      var name = settings.name,
          text = settings.text,
          width = settings.width,
          height = settings.height,
          x = settings.x,
          y = settings.y,
          parent = settings.parent,
          onClick = settings.onClick,
          styles = settings.styles,
          anchor = settings.anchor,
          alpha = settings.alpha;
      var base64source = _images__WEBPACK_IMPORTED_MODULE_1__["default"][name];
      var texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].fromLoader(base64source);
      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](texture);
      width && (sprite.width = width);
      height && (sprite.height = height);
      sprite.x = x;
      sprite.y = y;
      sprite.anchor.set(anchor || 0);
      parent.addChild(sprite);
      sprite.alpha = alpha || 1;

      if (text && width && height) {
        var txt = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](text, styles);
        txt.x = sprite.width / 2;
        txt.y = sprite.height / 2;
        txt.anchor.set(0.5);
        sprite.addChild(txt);
      }

      if (onClick) {
        sprite.interactive = true;
        sprite.on("pointerdown", onClick);
      }

      return sprite;
    }
  }, {
    key: "drawText",
    value: function drawText(settings) {
      var text = settings.text,
          x = settings.x,
          y = settings.y,
          color = settings.color,
          parent = settings.parent,
          style = settings.style;
      var txt = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](text, style);
      txt.x = x;
      txt.y = y;
      txt.anchor.set(0.5);
      return parent.addChild(txt);
    }
  }, {
    key: "drawGraphics",
    value: function drawGraphics(parent, setting) {
      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      graphics.beginFill(setting.color, setting.alpha);
      graphics.drawRoundedRect(setting.x, setting.y, setting.w, setting.h, setting.rounded);
      graphics.endFill();

      if (parent) {
        parent.addChild(graphics);
      }

      return graphics;
    }
  }, {
    key: "drawRoundedEmptyGraphic",
    value: function drawRoundedEmptyGraphic(settings) {
      var x = settings.x,
          y = settings.y,
          lineColor = settings.lineColor,
          parent = settings.parent,
          width = settings.width,
          height = settings.height,
          rounded = settings.rounded,
          lineWidth = settings.lineWidth,
          fillAlpha = settings.fillAlpha,
          fillColor = settings.fillColor,
          text = settings.text,
          style = settings.style;
      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      graphics.lineStyle(lineWidth, lineColor, 1);
      graphics.beginFill(fillColor || 0x000000, fillAlpha);
      graphics.drawRoundedRect(x, y, width, height, rounded);
      graphics.endFill();
      parent.addChild(graphics);

      if (text) {
        Utils.drawText({
          parent: graphics,
          text: text,
          x: x + width / 2,
          y: y + height / 2,
          style: style
        });
      }

      return graphics;
    }
  }, {
    key: "createContainer",
    value: function createContainer(settings) {
      var menuIconContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
      menuIconContainer.x = settings.x;
      menuIconContainer.y = settings.y;
      menuIconContainer.interactive = settings.isInteractive;
      settings.w && (menuIconContainer.width = settings.w);
      settings.h && (menuIconContainer.height = settings.h);

      if (settings.cb) {
        menuIconContainer.interactive = true;
        menuIconContainer.on("pointerdown", settings.cb);
      }

      settings.parent.addChild(menuIconContainer);
      return menuIconContainer;
    }
  }, {
    key: "isFunction",
    value: function isFunction(target) {
      return typeof target === "function";
    }
  }, {
    key: "randomNumber",
    value: function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }, {
    key: "getGuid",
    value: function getGuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  }]);

  return Utils;
}();

/* harmony default export */ __webpack_exports__["default"] = (Utils);

/***/ }),
/* 69 */,
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _ControlPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _LevelManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88);
/* harmony import */ var _Manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var _scenes_GamePauseScene_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91);
/* harmony import */ var _scenes_RestartScene_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92);
/* harmony import */ var _scenes_StartScene_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93);
/* harmony import */ var _scenes_MainGameScene_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86);
/* harmony import */ var _scenes_ShopScene_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94);
/* harmony import */ var _scenes_ContinueGameScene_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96);
/* harmony import */ var _scenes_NextLevelScene_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }















var Game = function Game() {
  var _this = this;

  _classCallCheck(this, Game);

  this.playerInfo = {
    name: null,
    displayName: null,
    type: null,
    playerConfiguration: new _Player_js__WEBPACK_IMPORTED_MODULE_0__["PlayerConfiguration"](),
    player: null
  };
  this._controlPanel = new _ControlPanel_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].registerScene("main", _scenes_MainGameScene_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
  _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].registerScene("continueGame", new _scenes_ContinueGameScene_js__WEBPACK_IMPORTED_MODULE_11__["default"]());
  _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].registerScene("startGame", // pass complete callback
  new _scenes_StartScene_js__WEBPACK_IMPORTED_MODULE_8__["default"](function (_ref) {
    var player = _ref.player;
    var name = player.name,
        displayName = player.displayName,
        type = player.type;
    console.info("startGame - complete", player);
    _this.playerInfo.name = name;
    _this.playerInfo.displayName = displayName;
    _this.playerInfo.type = type;
    _this.playerInfo.player = new type(0, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height / 2 - 75, _this.playerInfo.playerConfiguration);
    _LevelManager_js__WEBPACK_IMPORTED_MODULE_3__["default"].restart();
    _Manager_js__WEBPACK_IMPORTED_MODULE_4__["default"].registerPlayer(_this.playerInfo.player);
    _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].showScene("continueGame");
  }));
  _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].registerScene("pause", new _scenes_GamePauseScene_js__WEBPACK_IMPORTED_MODULE_6__["default"]());
  _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].registerScene("restart", new _scenes_RestartScene_js__WEBPACK_IMPORTED_MODULE_7__["default"]());
  _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].registerScene("shop", new _scenes_ShopScene_js__WEBPACK_IMPORTED_MODULE_10__["default"](this.playerInfo.playerConfiguration));
  _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].registerScene("nextLevelScene", new _scenes_NextLevelScene_js__WEBPACK_IMPORTED_MODULE_12__["default"]());
  _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].showScene("startGame");
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerConfiguration", function() { return PlayerConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gerard", function() { return Gerard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldSchool", function() { return OldSchool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetKrokodil", function() { return InternetKrokodil; });
/* harmony import */ var _Lives_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _HandleUsersActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74);
/* harmony import */ var _components_PlayerGun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81);
/* harmony import */ var _components_HealthBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var PlayerConfiguration =
/*#__PURE__*/
function () {
  function PlayerConfiguration() {
    _classCallCheck(this, PlayerConfiguration);

    this._playerConfiguration = this._default();
    new component_emitter__WEBPACK_IMPORTED_MODULE_3___default.a(this);
  }

  _createClass(PlayerConfiguration, [{
    key: "_default",
    value: function _default() {
      return {
        maxHealth: 5,
        lives: 3,
        //speed: 1,
        timeBetweenShot: 800,
        improvements: {
          shield: false
        }
      };
    }
  }, {
    key: "addImprovement",
    value: function addImprovement(name) {
      this._playerConfiguration.improvements[name] = true;
      this.emit("improvement:add");
    }
  }, {
    key: "increaseSetting",
    value: function increaseSetting(name) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (this._playerConfiguration[name]) {
        this._playerConfiguration[name] += value;
        this.emit("setting-".concat(name, ":changed"), {
          name: name,
          value: this._playerConfiguration[name]
        });
      }
    }
  }, {
    key: "current",
    get: function get() {
      return this._playerConfiguration;
    }
  }]);

  return PlayerConfiguration;
}();

var Player =
/*#__PURE__*/
function () {
  function Player(x, y, configuration) {
    _classCallCheck(this, Player);

    // will be registered from outside
    // this.tick
    // this.container
    this._playerConfiguration = configuration;
    this.container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createContainer({
      x: x,
      y: y
    });
    this.sprite = null;
    this.board = null;
    this.initShield();
    this.init();
    this.gun = null;
    this.initGun();
    this.healthBar = null;
    this.initHealthBar();
    this.initLives();
    this._destroyed = false;
    new component_emitter__WEBPACK_IMPORTED_MODULE_3___default.a(this);
  }

  _createClass(Player, [{
    key: "init",
    value: function init() {}
  }, {
    key: "initShield",
    value: function initShield() {
      this.shield = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createSprite({
        name: "aura",
        x: 0,
        y: -60
      });
      this.shield.anchor.set(0.5);
      this.shield.setParent(this.container);
      new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.shield.scale).to({
        x: [1.2, 1],
        y: [1.2, 1]
      }, 3000).repeat(Infinity).start();
    }
  }, {
    key: "initGun",
    value: function initGun() {
      this.gun = new _components_PlayerGun__WEBPACK_IMPORTED_MODULE_6__["default"](20, -40);
      this.gun.container.setParent(this.container);
    }
  }, {
    key: "initHealthBar",
    value: function initHealthBar() {
      var _this = this;

      var maxHealth = this._playerConfiguration.current.maxHealth;
      this.healthBar = new _components_HealthBar__WEBPACK_IMPORTED_MODULE_7__["default"]({
        x: 0,
        y: 20,
        width: 100,
        maxHealth: maxHealth
      });
      this.healthBar.container.setParent(this.container);

      this._playerConfiguration.on("setting-maxHealth:changed", function (_ref) {
        var value = _ref.value;
        console.info("setting-maxHealth:changed");

        _this.container.removeChild(_this.healthBar.container);

        _this.healthBar.destroy();

        _this.healthBar = new _components_HealthBar__WEBPACK_IMPORTED_MODULE_7__["default"]({
          x: 0,
          y: 20,
          width: 100,
          maxHealth: value
        });

        _this.healthBar.container.setParent(_this.container);
      });
    }
  }, {
    key: "initLives",
    value: function initLives() {
      var _this2 = this;

      var lives = this._playerConfiguration.current.lives;
      this.lives = new _Lives_js__WEBPACK_IMPORTED_MODULE_0__["default"](lives);

      this._playerConfiguration.on("setting-lives:changed", function (_ref2) {
        var value = _ref2.value;
        console.info("setting-lives:changed");

        _this2.lives.destroy();

        _this2.lives = new _Lives_js__WEBPACK_IMPORTED_MODULE_0__["default"](value);
      });
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this3 = this;

      return {
        timeBetweenShot: 800,
        getStartPosition: function getStartPosition() {
          var _this3$container = _this3.container,
              base_x = _this3$container.x,
              base_y = _this3$container.y;

          var _this3$gun$getBulletS = _this3.gun.getBulletStartPosition(),
              gun_x = _this3$gun$getBulletS.x,
              gun_y = _this3$gun$getBulletS.y;

          return {
            x: base_x + gun_x,
            y: base_y + gun_y
          };
        },
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_4__["PlayerDefaultBullet"],
        direction: 1
      };
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      var cursorPosX = _HandleUsersActions_js__WEBPACK_IMPORTED_MODULE_2__["default"].cursorPosition.x;
      var speed = 1;
      var dx = cursorPosX - this.container.x;

      if (dx !== 0) {
        var distance = Math.min(Math.abs(dx), speed * delta);
        this.container.x += Math.sign(dx) * distance;
      }

      var halfWidth = _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2;
      var halfPlayerWidth = this.container.width / 2;

      if (this.container.x + halfPlayerWidth > halfWidth) {
        this.container.x = halfWidth - halfPlayerWidth;
      }

      if (this.container.x - halfPlayerWidth < -halfWidth) {
        this.container.x = -halfWidth + halfPlayerWidth;
      }
    }
  }, {
    key: "_shoot",
    value: function _shoot(delta) {
      var info = this._bulletInfo = this._bulletInfo || this.getBulletInfo();
      info.timeBetweenShot -= delta;

      if (info.timeBetweenShot <= 0) {
        this.gun.animate();

        var _info$getStartPositio = info.getStartPosition(),
            x = _info$getStartPositio.x,
            y = _info$getStartPositio.y;

        gameManager.registerBullet(new info.bulletType(x, y, info.direction, this));
        this._bulletInfo = this.getBulletInfo();
      }
    }
  }, {
    key: "canInteract",
    value: function canInteract() {
      return true;
    }
  }, {
    key: "onCollision",
    value: function onCollision() {
      this.healthBar.decreaseHealth(1);

      if (this.healthBar.health == 0) {
        this.lives.decrease();

        if (this.lives.value == 0) {
          this.destroy();
          return;
        }

        this.healthBar.reset();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._destroyed = true;
      this.emit("destroy");
      this.lives.destroy();
      this.healthBar.destroy();
      this.container.destroy(true);
      this.container = null;
      this.sprite = null;
    }
  }, {
    key: "tick",
    value: function tick(delta) {
      this._move(delta);

      this._shoot(delta); // if (this.shield) {
      //     this.shield.rotation += 0.05;
      // }

    }
  }, {
    key: "previewInfo",
    get: function get() {
      return {
        name: "",
        displayName: ""
      };
    }
  }, {
    key: "collisionInfo",
    get: function get() {
      var _this$container = this.container,
          base_x = _this$container.x,
          base_y = _this$container.y;
      var _this$sprite = this.sprite,
          width = _this$sprite.width,
          height = _this$sprite.height,
          x = _this$sprite.x,
          y = _this$sprite.y;
      return {
        x: base_x + x,
        y: base_y + y,
        width: width,
        height: height
      };
    }
  }, {
    key: "destroyed",
    get: function get() {
      return this._destroyed;
    }
  }], [{
    key: "getAvailablePlayerTypes",
    value: function getAvailablePlayerTypes() {
      return Player._availableImplementations || [];
    }
  }, {
    key: "registerPlayerType",
    value: function registerPlayerType(type) {
      Player._availableImplementations = Player._availableImplementations || [];

      Player._availableImplementations.push(type);
    }
  }]);

  return Player;
}();


var Gerard =
/*#__PURE__*/
function (_Player) {
  _inherits(Gerard, _Player);

  function Gerard() {
    _classCallCheck(this, Gerard);

    return _possibleConstructorReturn(this, _getPrototypeOf(Gerard).apply(this, arguments));
  }

  _createClass(Gerard, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Gerard.prototype), "init", this).call(this);

      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createSprite({
        name: "player_board_1",
        x: 0,
        y: -10
      });
      this.board.anchor.set(0.5);
      this.board.setParent(this.container);
      var name = Gerard.previewInfo.name;
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createSprite({
        name: name,
        x: -40,
        y: -100
      });
      this.sprite.setParent(this.container);
    }
  }], [{
    key: "previewInfo",
    get: function get() {
      return {
        name: "Gerard",
        displayName: "Жерард"
      };
    }
  }]);

  return Gerard;
}(Player);
Player.registerPlayerType(Gerard);
var OldSchool =
/*#__PURE__*/
function (_Player2) {
  _inherits(OldSchool, _Player2);

  function OldSchool() {
    _classCallCheck(this, OldSchool);

    return _possibleConstructorReturn(this, _getPrototypeOf(OldSchool).apply(this, arguments));
  }

  _createClass(OldSchool, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(OldSchool.prototype), "init", this).call(this);

      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createSprite({
        name: "player_board_1",
        x: 0,
        y: -10
      });
      this.board.anchor.set(0.5);
      this.board.setParent(this.container);
      var name = OldSchool.previewInfo.name;
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createSprite({
        name: name,
        x: -40,
        y: -100
      });
      this.sprite.setParent(this.container);
    }
  }], [{
    key: "previewInfo",
    get: function get() {
      return {
        name: "OldSchoolBro",
        displayName: "OldSchool bro"
      };
    }
  }]);

  return OldSchool;
}(Player);
Player.registerPlayerType(OldSchool);
var InternetKrokodil =
/*#__PURE__*/
function (_Player3) {
  _inherits(InternetKrokodil, _Player3);

  function InternetKrokodil() {
    _classCallCheck(this, InternetKrokodil);

    return _possibleConstructorReturn(this, _getPrototypeOf(InternetKrokodil).apply(this, arguments));
  }

  _createClass(InternetKrokodil, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(InternetKrokodil.prototype), "init", this).call(this);

      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createSprite({
        name: "player_board_1",
        x: 0,
        y: -10
      });
      this.board.anchor.set(0.5);
      this.board.setParent(this.container);
      var name = InternetKrokodil.previewInfo.name;
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createSprite({
        name: name,
        x: -40,
        y: -120
      });
      this.sprite.setParent(this.container);
    }
  }], [{
    key: "previewInfo",
    get: function get() {
      return {
        name: "InternetKrokodil",
        displayName: "InternetKrokodil"
      };
    }
  }]);

  return InternetKrokodil;
}(Player);
Player.registerPlayerType(InternetKrokodil);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Lives =
/*#__PURE__*/
function () {
  function Lives(value) {
    var _this = this;

    _classCallCheck(this, Lives);

    this._container = null;
    this._substrate = null;
    this._sprite = null;
    this._spriteText = null;
    this._heartTweenDecrease = null;
    this._heartTweenIncrease = null;
    this._value = value;
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
      _this._init();

      _this._startAnimation();
    });
  }

  _createClass(Lives, [{
    key: "_init",
    value: function _init() {
      this._container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createContainer({
        x: _settings_js__WEBPACK_IMPORTED_MODULE_5__["default"].appSizes.width / 2 - 70,
        y: -(_settings_js__WEBPACK_IMPORTED_MODULE_5__["default"].appSizes.height / 2)
      });
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.addChild(this._container);
      this._substrate = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "lives_substrate",
        x: 0,
        y: 10
      });

      this._substrate.scale.set(0.6);

      this._substrate.anchor.set(0.5, 0);

      this._substrate.setParent(this._container);

      this._sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "live",
        x: -60,
        y: 90
      });

      this._sprite.setParent(this._substrate);

      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this._substrate,
        x: 30,
        y: 110,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_2__["default"].score
      });

      this._update();
    }
  }, {
    key: "decrease",
    value: function decrease() {
      if (this._value == 0) {
        return;
      }

      this._value--;

      this._update();
    }
  }, {
    key: "_update",
    value: function _update() {
      this._spriteText.text = "x ".concat(this._value);
    }
  }, {
    key: "_startAnimation",
    value: function _startAnimation() {
      this._rotationTween = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this._substrate).to({
        rotation: [-0.1, 0, 0.1, 0]
      }, 5000).yoyo(false).repeat(Infinity).start();
    }
  }, {
    key: "_showDecrease",
    value: function _showDecrease() {
      var _this2 = this;

      this._spriteDuplicate.alpha = 1;
      this._heartTweenDecrease = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this._spriteDuplicate.pivot).to({
        y: 550
      }, 1000).easing(tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Easing.Quadratic.Out).onUpdate(function (k) {
        _this2._spriteDuplicate.alpha = 1 - k;
      }).start();
    }
  }, {
    key: "_showIncrease",
    value: function _showIncrease() {
      var _this3 = this;

      this._spriteDuplicate.alpha = 1;
      var sizes = {
        x: [1, 1.2, 1],
        y: [1, 1.2, 1]
      };
      this._heartTweenIncrease = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this._spriteDuplicate.scale).to({
        x: sizes.x,
        y: sizes.y
      }, 300).easing(tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Easing.Quadratic.Out).onComplete(function () {
        _this3._spriteDuplicate.alpha = 0;
      }).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._rotationTween.stop();

      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.removeChild(this._container);

      this._container.destroy(true);
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
  }]);

  return Lives;
}();

/* harmony default export */ __webpack_exports__["default"] = (Lives);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT = {
  align: "center",
  fontFamily: "Comic Sans MS",
  fontWeight: 900,
  lineJoin: "round",
  whiteSpace: "normal"
};
var SHADOWS = {
  type1: {
    dropShadow: true,
    dropShadowAngle: 0.4,
    dropShadowColor: "#0d1144",
    dropShadowDistance: 2
  },
  type2: {
    dropShadow: true,
    dropShadowAlpha: 0.6,
    dropShadowAngle: 1,
    dropShadowBlur: 3,
    dropShadowColor: "#121612",
    dropShadowDistance: 2
  }
};
var DISPLAYING = {
  type1: {
    fillGradientStops: [1],
    letterSpacing: 2,
    miterLimit: 5,
    padding: 4,
    stroke: "#f64949",
    strokeThickness: 2
  },
  type2: {
    fillGradientStops: [0.8],
    letterSpacing: 16,
    lineHeight: 1,
    miterLimit: 11,
    stroke: "#23291e",
    strokeThickness: 2
  }
};
var TYPES = {
  type1: _objectSpread({}, DEFAULT, SHADOWS.type1, DISPLAYING.type1),
  type2: _objectSpread({}, DEFAULT, SHADOWS.type2, DISPLAYING.type2)
};
var STYLES = {
  score: _objectSpread({}, TYPES.type1, {
    fill: "#857833",
    fontSize: 24
  }),
  shop: _objectSpread({}, TYPES.type2, {
    fill: "#9cF353",
    fontSize: 54
  }),
  shoperName: _objectSpread({}, TYPES.type2, {
    fill: "#FC9D17",
    fontSize: 24,
    letterSpacing: 1
  }),
  lives: _objectSpread({}, TYPES.type1, {
    fill: "#857833",
    fontSize: 20
  }),
  IntroPlayerName: _objectSpread({}, TYPES.type1, {
    fill: "#857833",
    fontSize: 30
  }),
  miniBoss: _objectSpread({}, TYPES.type2, {
    fill: "#cc5353",
    fontSize: 24,
    letterSpacing: 1
  }),
  logo: _objectSpread({}, TYPES.type2, {
    fill: "#cc5353",
    fontSize: 54
  })
};
/* harmony default export */ __webpack_exports__["default"] = (STYLES);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphicsHelper; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var _Starter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var GraphicsHelper =
/*#__PURE__*/
function () {
  function GraphicsHelper() {
    _classCallCheck(this, GraphicsHelper);
  }

  _createClass(GraphicsHelper, null, [{
    key: "createContainer",
    value: function createContainer() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _settings$x = settings.x,
          x = _settings$x === void 0 ? 0 : _settings$x,
          _settings$y = settings.y,
          y = _settings$y === void 0 ? 0 : _settings$y,
          _settings$width = settings.width,
          width = _settings$width === void 0 ? 0 : _settings$width,
          _settings$height = settings.height,
          height = _settings$height === void 0 ? 0 : _settings$height;
      var container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
      container.x = x;
      container.y = y;
      container.width = width;
      container.height = height;
      return container;
    }
  }, {
    key: "createSprite",
    value: function createSprite(settings) {
      var name = settings.name,
          _settings$x2 = settings.x,
          x = _settings$x2 === void 0 ? 0 : _settings$x2,
          _settings$y2 = settings.y,
          y = _settings$y2 === void 0 ? 0 : _settings$y2,
          onClick = settings.onClick;
      var base64source = _images__WEBPACK_IMPORTED_MODULE_1__["default"][name];
      var texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].fromLoader(base64source);
      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](texture);
      sprite.x = x;
      sprite.y = y;

      if (onClick) {
        sprite.buttonMode = true;
        sprite.interactive = true;
        sprite.on("pointerdown", onClick);
      }

      return sprite;
    }
  }, {
    key: "crateSceneContainer",
    value: function crateSceneContainer() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _settings$background = settings.background,
          background = _settings$background === void 0 ? null : _settings$background;
      var _starter$size = _Starter_js__WEBPACK_IMPORTED_MODULE_2__["default"].size,
          width = _starter$size.width,
          height = _starter$size.height;
      var container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"](); // move container to screen center

      container.x = width / 2;
      container.y = height / 2;
      container.width = width;
      container.height = height;
      var sprite = background ? GraphicsHelper.createSprite({
        name: background
      }) : new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"]();
      sprite.width = width;
      sprite.height = height;
      sprite.anchor.set(0.5);
      sprite.setParent(container);
      return container;
    }
  }, {
    key: "drawGrid",
    value: function drawGrid(settings) {
      var size = settings.size,
          _settings$capacity = settings.capacity,
          capacity = _settings$capacity === void 0 ? 10 : _settings$capacity,
          _settings$color = settings.color,
          color = _settings$color === void 0 ? 0x00ff00 : _settings$color,
          _settings$alpha = settings.alpha,
          alpha = _settings$alpha === void 0 ? 1 : _settings$alpha;
      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      graphics.lineStyle(1, color, alpha);
      var cellSize = size / capacity;

      _toConsumableArray(Array(capacity).keys()).map(function (x) {
        _toConsumableArray(Array(capacity).keys()).map(function (y) {
          graphics.drawRect(cellSize * x, cellSize * y, cellSize, cellSize);
        });
      });

      return graphics;
    }
  }, {
    key: "drawRect",
    value: function drawRect(settings) {
      var _settings$x3 = settings.x,
          x = _settings$x3 === void 0 ? 0 : _settings$x3,
          _settings$y3 = settings.y,
          y = _settings$y3 === void 0 ? 0 : _settings$y3,
          width = settings.width,
          height = settings.height,
          _settings$color2 = settings.color,
          color = _settings$color2 === void 0 ? 0x00ff00 : _settings$color2,
          _settings$alpha2 = settings.alpha,
          alpha = _settings$alpha2 === void 0 ? 1 : _settings$alpha2;
      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      graphics.lineStyle(1, color, alpha);
      graphics.drawRect(x, y, width, height);
      return graphics;
    }
  }, {
    key: "fillRect",
    value: function fillRect(settings) {
      var _settings$x4 = settings.x,
          x = _settings$x4 === void 0 ? 0 : _settings$x4,
          _settings$y4 = settings.y,
          y = _settings$y4 === void 0 ? 0 : _settings$y4,
          width = settings.width,
          height = settings.height,
          _settings$color3 = settings.color,
          color = _settings$color3 === void 0 ? 0x00ff00 : _settings$color3,
          _settings$alpha3 = settings.alpha,
          alpha = _settings$alpha3 === void 0 ? 1 : _settings$alpha3;
      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      graphics.beginFill(color, alpha);
      graphics.drawRect(x, y, width, height);
      graphics.endFill();
      return graphics;
    }
  }]);

  return GraphicsHelper;
}();



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var HandleUsersActions =
/*#__PURE__*/
function () {
  function HandleUsersActions() {
    var _this = this;

    _classCallCheck(this, HandleUsersActions);

    this.cursorPosition = {
      x: 0,
      y: 0
    };
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.on("pointermove", function (e) {
        return _this.onPointerMove(e);
      });
    });
  }

  _createClass(HandleUsersActions, [{
    key: "onPointerMove",
    value: function onPointerMove(event) {
      var location = event.data.getLocalPosition(_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field);
      this.cursorPosition.x = location.x;
      this.cursorPosition.y = location.y;
    }
  }]);

  return HandleUsersActions;
}();

/* harmony default export */ __webpack_exports__["default"] = (new HandleUsersActions());

/***/ }),
/* 76 */,
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyBulletWater", function() { return EasyBulletWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumBulletWater", function() { return MediumBulletWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardBulletWater", function() { return HardBulletWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterBullet", function() { return WaterBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireBullet", function() { return FireBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthBullet", function() { return EarthBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindBullet", function() { return WindBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDefaultBullet", function() { return PlayerDefaultBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boss_Group_1_Bullet", function() { return Boss_Group_1_Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boss_Group_2_Bullet", function() { return Boss_Group_2_Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boss_Group_3_Bullet", function() { return Boss_Group_3_Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boss_Group_4_Bullet", function() { return Boss_Group_4_Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boss_Group_5_Bullet", function() { return Boss_Group_5_Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supports_Group_1_Bullet", function() { return Supports_Group_1_Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supports_Group_2_Bullet", function() { return Supports_Group_2_Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supports_Group_3_Bullet", function() { return Supports_Group_3_Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supports_Group_4_Bullet", function() { return Supports_Group_4_Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supports_Group_5_Bullet", function() { return Supports_Group_5_Bullet; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Explosion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var Bullet =
/*#__PURE__*/
function () {
  function Bullet(x, y, dir, owner) {
    _classCallCheck(this, Bullet);

    // will be registered from outside
    // this.tick
    this.sprite = null;
    this._owner = owner;
    this._shotTime = 0;
    this._dir = dir;
    this._destroyed = false;
    this.speed = 0.1;
    this.rotation = 0;
    this.init(x, y); // TODO: sprite should be added to MainGameScene (and destroyed as well)

    this.sprite.setParent(_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field);
    new component_emitter__WEBPACK_IMPORTED_MODULE_2___default.a(this);
  }

  _createClass(Bullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_1",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "canInteract",
    value: function canInteract(obj) {
      var isOwnerPlayer = this._owner instanceof _Player__WEBPACK_IMPORTED_MODULE_6__["default"];
      var isOwnerEnemy = this._owner instanceof _Enemy__WEBPACK_IMPORTED_MODULE_7__["default"];
      var isObjPlayer = obj instanceof _Player__WEBPACK_IMPORTED_MODULE_6__["default"];
      var isObjEnemy = obj instanceof _Enemy__WEBPACK_IMPORTED_MODULE_7__["default"];
      return isOwnerPlayer && isObjEnemy || isOwnerEnemy && isObjPlayer;
    }
  }, {
    key: "onCollision",
    value: function onCollision(obj) {
      this.destroy();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._destroyed = true;
      this.emit("destroy");
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.removeChild(this.sprite);
      this._owner = null;
      this.sprite.destroy();
      this.sprite = null;
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.rotation += this.rotation;
    }
  }, {
    key: "tick",
    value: function tick(delta) {
      if (!this.sprite) {
        return;
      }

      this._move(delta);

      if (2 * _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height < this.sprite.y || this.sprite.y < -2 * _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height) {
        this.destroy();
      }
    }
  }, {
    key: "destroyed",
    get: function get() {
      return this._destroyed;
    }
  }, {
    key: "collisionInfo",
    get: function get() {
      var _this$sprite = this.sprite,
          width = _this$sprite.width,
          height = _this$sprite.height,
          x = _this$sprite.x,
          y = _this$sprite.y;
      return {
        x: x - width / 2,
        y: y - height / 2,
        width: width,
        height: height
      };
    }
  }]);

  return Bullet;
}();


var EasyBulletWater =
/*#__PURE__*/
function (_Bullet) {
  _inherits(EasyBulletWater, _Bullet);

  function EasyBulletWater(x, y, dir, owner) {
    var _this;

    _classCallCheck(this, EasyBulletWater);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EasyBulletWater).call(this, x, y, dir, owner));
    _this.speed = 0.2;
    _this.rotation = 0.1;
    return _this;
  }

  _createClass(EasyBulletWater, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_1",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..10", this.collisionInfo.x, this.collisionInfo.y);

      _get(_getPrototypeOf(EasyBulletWater.prototype), "destroy", this).call(this);
    }
  }]);

  return EasyBulletWater;
}(Bullet);
var MediumBulletWater =
/*#__PURE__*/
function (_Bullet2) {
  _inherits(MediumBulletWater, _Bullet2);

  function MediumBulletWater(x, y, dir, owner) {
    var _this2;

    _classCallCheck(this, MediumBulletWater);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MediumBulletWater).call(this, x, y, dir, owner));
    _this2.speed = 0.25;
    _this2.rotation = 0;
    return _this2;
  }

  _createClass(MediumBulletWater, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_3",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this.sprite.scale).to({
        y: [0.6, 1],
        x: [0.6, 1]
      }, 500).repeat(Infinity).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..10", this.collisionInfo.x, this.collisionInfo.y);

      _get(_getPrototypeOf(MediumBulletWater.prototype), "destroy", this).call(this);
    }
  }]);

  return MediumBulletWater;
}(Bullet);
var HardBulletWater =
/*#__PURE__*/
function (_Bullet3) {
  _inherits(HardBulletWater, _Bullet3);

  function HardBulletWater(x, y, dir, owner) {
    var _this3;

    _classCallCheck(this, HardBulletWater);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(HardBulletWater).call(this, x, y, dir, owner));
    _this3.speed = 0.4;
    _this3.rotation = 0;
    return _this3;
  }

  _createClass(HardBulletWater, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_2",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this.sprite.scale).to({
        y: [0.6, 1],
        x: [0.6, 1]
      }, 500).repeat(Infinity).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..10", this.collisionInfo.x, this.collisionInfo.y);

      _get(_getPrototypeOf(HardBulletWater.prototype), "destroy", this).call(this);
    }
  }]);

  return HardBulletWater;
}(Bullet);
var WaterBullet =
/*#__PURE__*/
function (_Bullet4) {
  _inherits(WaterBullet, _Bullet4);

  function WaterBullet(x, y, dir, owner) {
    var _this4;

    _classCallCheck(this, WaterBullet);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(WaterBullet).call(this, x, y, dir, owner));
    _this4.speed = 0.5;
    _this4.rotation = 0;
    return _this4;
  }

  _createClass(WaterBullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_4",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this.sprite.scale).to({
        y: [0.8, 1.2, 1],
        x: [0.8, 1.2, 1]
      }, 700).repeat(Infinity).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..10", this.collisionInfo.x, this.collisionInfo.y);

      _get(_getPrototypeOf(WaterBullet.prototype), "destroy", this).call(this);
    }
  }]);

  return WaterBullet;
}(Bullet);
var FireBullet =
/*#__PURE__*/
function (_Bullet5) {
  _inherits(FireBullet, _Bullet5);

  function FireBullet(x, y, dir, owner) {
    var _this5;

    _classCallCheck(this, FireBullet);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(FireBullet).call(this, x, y, dir, owner));
    _this5.speed = 0.3;
    _this5.rotation = 0.1;
    return _this5;
  }

  _createClass(FireBullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_7",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this.sprite.scale).to({
        y: [0.8, 1.2, 1],
        x: [0.8, 1.2, 1]
      }, 700).repeat(Infinity).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..10", this.collisionInfo.x, this.collisionInfo.y);

      _get(_getPrototypeOf(FireBullet.prototype), "destroy", this).call(this);
    }
  }]);

  return FireBullet;
}(Bullet);
var EarthBullet =
/*#__PURE__*/
function (_Bullet6) {
  _inherits(EarthBullet, _Bullet6);

  function EarthBullet(x, y, dir, owner) {
    var _this6;

    _classCallCheck(this, EarthBullet);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(EarthBullet).call(this, x, y, dir, owner));
    _this6.speed = 0.2;
    _this6.rotation = 0;
    return _this6;
  }

  _createClass(EarthBullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_9",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this.sprite.scale).to({
        y: [1, 1.2, 1],
        x: [1, 1.2, 1]
      }, 700).repeat(Infinity).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..10", this.collisionInfo.x, this.collisionInfo.y);

      _get(_getPrototypeOf(EarthBullet.prototype), "destroy", this).call(this);
    }
  }]);

  return EarthBullet;
}(Bullet);
var WindBullet =
/*#__PURE__*/
function (_Bullet7) {
  _inherits(WindBullet, _Bullet7);

  function WindBullet(x, y, dir, owner) {
    var _this7;

    _classCallCheck(this, WindBullet);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(WindBullet).call(this, x, y, dir, owner));
    _this7.speed = 0.2;
    _this7.rotation = 0.3;
    return _this7;
  }

  _createClass(WindBullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_10",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this.sprite.scale).to({
        y: [1, 1.2, 1],
        x: [1, 1.2, 1]
      }, 700).repeat(Infinity).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..10", this.collisionInfo.x, this.collisionInfo.y);

      _get(_getPrototypeOf(WindBullet.prototype), "destroy", this).call(this);
    }
  }]);

  return WindBullet;
}(Bullet);
var PlayerDefaultBullet =
/*#__PURE__*/
function (_Bullet8) {
  _inherits(PlayerDefaultBullet, _Bullet8);

  function PlayerDefaultBullet(x, y, dir, owner) {
    var _this8;

    _classCallCheck(this, PlayerDefaultBullet);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(PlayerDefaultBullet).call(this, x, y, dir, owner));
    _this8.speed = 0.4;
    _this8.rotation = 0;
    return _this8;
  }

  _createClass(PlayerDefaultBullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "player_default_bullet_1",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      _get(_getPrototypeOf(PlayerDefaultBullet.prototype), "destroy", this).call(this);
    }
  }]);

  return PlayerDefaultBullet;
}(Bullet);
var Boss_Group_1_Bullet =
/*#__PURE__*/
function (_Bullet9) {
  _inherits(Boss_Group_1_Bullet, _Bullet9);

  function Boss_Group_1_Bullet(x, y, dir, owner) {
    var _this9;

    _classCallCheck(this, Boss_Group_1_Bullet);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(Boss_Group_1_Bullet).call(this, x, y, dir, owner));
    _this9.speed = 0.35;
    _this9.rotation = 0.17;
    _this9._dirX = _this9.sprite.x < 0 ? Math.random() : -Math.random();
    return _this9;
  }

  _createClass(Boss_Group_1_Bullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_5",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.x += delta * this.speed * this._dirX;
      this.sprite.rotation += this.rotation;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      _get(_getPrototypeOf(Boss_Group_1_Bullet.prototype), "destroy", this).call(this);
    }
  }]);

  return Boss_Group_1_Bullet;
}(Bullet);
var Boss_Group_2_Bullet =
/*#__PURE__*/
function (_Bullet10) {
  _inherits(Boss_Group_2_Bullet, _Bullet10);

  function Boss_Group_2_Bullet(x, y, dir, owner) {
    var _this10;

    _classCallCheck(this, Boss_Group_2_Bullet);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(Boss_Group_2_Bullet).call(this, x, y, dir, owner));
    _this10.speed = 0.35;
    _this10.rotation = 0.17;
    _this10._dirX = _this10.sprite.x < 0 ? Math.random() : -Math.random();
    return _this10;
  }

  _createClass(Boss_Group_2_Bullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_10",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.x += delta * this.speed * this._dirX;
      this.sprite.rotation += this.rotation;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      _get(_getPrototypeOf(Boss_Group_2_Bullet.prototype), "destroy", this).call(this);
    }
  }]);

  return Boss_Group_2_Bullet;
}(Bullet);
var Boss_Group_3_Bullet =
/*#__PURE__*/
function (_Bullet11) {
  _inherits(Boss_Group_3_Bullet, _Bullet11);

  function Boss_Group_3_Bullet(x, y, dir, owner) {
    var _this11;

    _classCallCheck(this, Boss_Group_3_Bullet);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(Boss_Group_3_Bullet).call(this, x, y, dir, owner));
    _this11.speed = 0.35;
    _this11.rotation = 0.17;
    _this11._dirX = _this11.sprite.x < 0 ? Math.random() : -Math.random();
    return _this11;
  }

  _createClass(Boss_Group_3_Bullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_11",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.x += delta * this.speed * this._dirX;
      this.sprite.rotation += this.rotation;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      _get(_getPrototypeOf(Boss_Group_3_Bullet.prototype), "destroy", this).call(this);
    }
  }]);

  return Boss_Group_3_Bullet;
}(Bullet);
var Boss_Group_4_Bullet =
/*#__PURE__*/
function (_Bullet12) {
  _inherits(Boss_Group_4_Bullet, _Bullet12);

  function Boss_Group_4_Bullet(x, y, dir, owner) {
    var _this12;

    _classCallCheck(this, Boss_Group_4_Bullet);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Boss_Group_4_Bullet).call(this, x, y, dir, owner));
    _this12.speed = 0.35;
    _this12._dirX = _this12.sprite.x < 0 ? Math.random() : -Math.random();
    return _this12;
  }

  _createClass(Boss_Group_4_Bullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_2",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this.sprite.scale).to({
        y: [0.6, 1],
        x: [0.6, 1]
      }, 500).repeat(Infinity).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      _get(_getPrototypeOf(Boss_Group_4_Bullet.prototype), "destroy", this).call(this);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.x += delta * this.speed * this._dirX;
    }
  }]);

  return Boss_Group_4_Bullet;
}(Bullet); //NOT COMPLETED

var Boss_Group_5_Bullet =
/*#__PURE__*/
function (_Bullet13) {
  _inherits(Boss_Group_5_Bullet, _Bullet13);

  function Boss_Group_5_Bullet(x, y, dir, owner) {
    var _this13;

    _classCallCheck(this, Boss_Group_5_Bullet);

    _this13 = _possibleConstructorReturn(this, _getPrototypeOf(Boss_Group_5_Bullet).call(this, x, y, dir, owner));
    _this13.speed = 0.45;
    _this13._dirX = _this13.sprite.x < 0 ? Math.random() : -Math.random();
    return _this13;
  }

  _createClass(Boss_Group_5_Bullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_3",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this.sprite.scale).to({
        y: [0.6, 1],
        x: [0.6, 1]
      }, 500).repeat(Infinity).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      _get(_getPrototypeOf(Boss_Group_5_Bullet.prototype), "destroy", this).call(this);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.x += delta * this.speed * this._dirX;
    }
  }]);

  return Boss_Group_5_Bullet;
}(Bullet);
var Supports_Group_1_Bullet =
/*#__PURE__*/
function (_Bullet14) {
  _inherits(Supports_Group_1_Bullet, _Bullet14);

  function Supports_Group_1_Bullet(x, y, dir, owner) {
    var _this14;

    _classCallCheck(this, Supports_Group_1_Bullet);

    _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Supports_Group_1_Bullet).call(this, x, y, dir, owner));
    _this14.speed = 0.4;
    _this14.rotation = 0.12;
    _this14._dirX = _this14.sprite.x < 0 ? Math.random() : -Math.random();

    _this14._startAnimation();

    return _this14;
  }

  _createClass(Supports_Group_1_Bullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_8",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "_startAnimation",
    value: function _startAnimation() {
      this._animationTween = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this.sprite.scale).to({
        x: [1.3, 0.8, 1],
        y: [1.3, 0.8, 1]
      }, 1000).repeat(Infinity).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      this._animationTween.stop();

      _get(_getPrototypeOf(Supports_Group_1_Bullet.prototype), "destroy", this).call(this);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.x += delta * this.speed * this._dirX;
      this.sprite.rotation += this.rotation;
    }
  }]);

  return Supports_Group_1_Bullet;
}(Bullet);
var Supports_Group_2_Bullet =
/*#__PURE__*/
function (_Bullet15) {
  _inherits(Supports_Group_2_Bullet, _Bullet15);

  function Supports_Group_2_Bullet(x, y, dir, owner) {
    var _this15;

    _classCallCheck(this, Supports_Group_2_Bullet);

    _this15 = _possibleConstructorReturn(this, _getPrototypeOf(Supports_Group_2_Bullet).call(this, x, y, dir, owner));
    _this15.speed = 0.35;
    _this15.rotation = 0.14;
    _this15._dirX = _this15.sprite.x < 0 ? Math.random() : -Math.random();
    return _this15;
  }

  _createClass(Supports_Group_2_Bullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_9",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      _get(_getPrototypeOf(Supports_Group_2_Bullet.prototype), "destroy", this).call(this);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.x += delta * this.speed * this._dirX;
      this.sprite.rotation += this.rotation;
    }
  }]);

  return Supports_Group_2_Bullet;
}(Bullet);
var Supports_Group_3_Bullet =
/*#__PURE__*/
function (_Bullet16) {
  _inherits(Supports_Group_3_Bullet, _Bullet16);

  function Supports_Group_3_Bullet(x, y, dir, owner) {
    var _this16;

    _classCallCheck(this, Supports_Group_3_Bullet);

    _this16 = _possibleConstructorReturn(this, _getPrototypeOf(Supports_Group_3_Bullet).call(this, x, y, dir, owner));
    _this16.speed = 0.35;
    _this16.rotation = 0.14;
    _this16._dirX = _this16.sprite.x < 0 ? Math.random() : -Math.random();
    return _this16;
  }

  _createClass(Supports_Group_3_Bullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_8",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      _get(_getPrototypeOf(Supports_Group_3_Bullet.prototype), "destroy", this).call(this);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.x += delta * this.speed * this._dirX;
      this.sprite.rotation += this.rotation;
    }
  }]);

  return Supports_Group_3_Bullet;
}(Bullet);
var Supports_Group_4_Bullet =
/*#__PURE__*/
function (_Bullet17) {
  _inherits(Supports_Group_4_Bullet, _Bullet17);

  function Supports_Group_4_Bullet(x, y, dir, owner) {
    var _this17;

    _classCallCheck(this, Supports_Group_4_Bullet);

    _this17 = _possibleConstructorReturn(this, _getPrototypeOf(Supports_Group_4_Bullet).call(this, x, y, dir, owner));
    _this17.speed = 0.35;
    _this17.rotation = 0.3;
    _this17._dirX = _this17.sprite.x < 0 ? Math.random() : -Math.random();
    return _this17;
  }

  _createClass(Supports_Group_4_Bullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_1",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this.sprite.scale).to({
        y: [0.6, 1],
        x: [0.6, 1]
      }, 500).repeat(Infinity).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      _get(_getPrototypeOf(Supports_Group_4_Bullet.prototype), "destroy", this).call(this);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.x += delta * this.speed * this._dirX;
      this.sprite.rotation += this.rotation;
    }
  }]);

  return Supports_Group_4_Bullet;
}(Bullet);
var Supports_Group_5_Bullet =
/*#__PURE__*/
function (_Bullet18) {
  _inherits(Supports_Group_5_Bullet, _Bullet18);

  function Supports_Group_5_Bullet(x, y, dir, owner) {
    var _this18;

    _classCallCheck(this, Supports_Group_5_Bullet);

    _this18 = _possibleConstructorReturn(this, _getPrototypeOf(Supports_Group_5_Bullet).call(this, x, y, dir, owner));
    _this18.speed = 0.35;
    _this18.rotation = 0.3;
    _this18._dirX = _this18.sprite.x < 0 ? Math.random() : -Math.random();
    return _this18;
  }

  _createClass(Supports_Group_5_Bullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "bullet_11",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_5__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      _get(_getPrototypeOf(Supports_Group_5_Bullet.prototype), "destroy", this).call(this);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.x += delta * this.speed * this._dirX;
      this.sprite.rotation += this.rotation;
    }
  }]);

  return Supports_Group_5_Bullet;
}(Bullet);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Explosion; });
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Explosion =
/*#__PURE__*/
function () {
  function Explosion() {
    _classCallCheck(this, Explosion);
  }

  _createClass(Explosion, [{
    key: "animate",
    value: function animate(alias, x, y, speed) {
      var textures = Explosion._textures;

      if (!textures[alias]) {
        var _alias$split = alias.split(/[:(?:\.\.)]+/),
            _alias$split2 = _slicedToArray(_alias$split, 3),
            prefix = _alias$split2[0],
            from = _alias$split2[1],
            to = _alias$split2[2];

        textures[alias] = [];

        for (var i = from; i <= to; i++) {
          textures[alias].push(pixi_js__WEBPACK_IMPORTED_MODULE_1__["Texture"].fromLoader(_images__WEBPACK_IMPORTED_MODULE_0__["default"]["".concat(prefix).concat(i)]));
        }
      }

      var animatedSprite = new pixi_js__WEBPACK_IMPORTED_MODULE_1__["AnimatedSprite"](textures[alias]);
      animatedSprite.anchor.set(0.5, 0.5);
      animatedSprite.x = x;
      animatedSprite.y = y;
      animatedSprite.animationSpeed = speed || 0.2;
      animatedSprite.loop = false;

      animatedSprite.onComplete = function () {
        animatedSprite.stop();
        _Starter__WEBPACK_IMPORTED_MODULE_2__["default"].field.removeChild(animatedSprite);
        animatedSprite.destroy();
      };

      _Starter__WEBPACK_IMPORTED_MODULE_2__["default"].field.addChild(animatedSprite);
      animatedSprite.play();
    }
  }]);

  return Explosion;
}();


Explosion._textures = {};

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyEasyLevel", function() { return EnemyEasyLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyMediumLevel", function() { return EnemyMediumLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyHardLevel", function() { return EnemyHardLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterEnemy", function() { return WaterEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireEnemy", function() { return FireEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthEnemy", function() { return EarthEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindEnemy", function() { return WindEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ozmen", function() { return Ozmen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrapDiller", function() { return TrapDiller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Liunk", function() { return Liunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dekodans", function() { return Dekodans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvoiBratan", function() { return TvoiBratan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "St228", function() { return St228; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ganjamurder", function() { return Ganjamurder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THC", function() { return THC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jekson", function() { return Jekson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Syava", function() { return Syava; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pozytron", function() { return Pozytron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHEMIUS", function() { return CHEMIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tetraceklinur", function() { return Tetraceklinur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZIB3ken", function() { return SIZIB3ken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpMeDude", function() { return HelpMeDude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoodenShield", function() { return WoodenShield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoneShield", function() { return StoneShield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronShield", function() { return IronShield; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var _Money__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80);
/* harmony import */ var _Explosion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_AvatarsController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












var Enemy =
/*#__PURE__*/
function () {
  function Enemy(_ref) {
    var x = _ref.x,
        y = _ref.y;

    _classCallCheck(this, Enemy);

    // will be registered from outside
    // this.tick
    // this.container
    //TODO: remove this logic or change
    this.heights = {
      1: 86,
      2: 83,
      3: 101,
      4: 75,
      5: 75,
      6: 101,
      7: 103,
      8: 90,
      9: 103,
      10: 94
    };
    this.container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createContainer({
      x: x,
      y: y
    });
    this.maxLives = 0;
    this.lives = this.maxLives;
    this.healthBarWidth = 75;
    this.sprite = null;
    this.healthBar = null;
    this.init();
    this.sprite.setParent(this.container);
    this.healthBar.setParent(this.container);

    this._updateHealthBar();

    this.moveAnimationTween = null;
    this.moveAnimation();
    this._interaction = true;
    this.setInteraction();
    this.blinkingTween = null;
    new component_emitter__WEBPACK_IMPORTED_MODULE_2___default.a(this);
    this._destroyed = false;
  }

  _createClass(Enemy, [{
    key: "init",
    value: function init() {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "bullet_1",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: width,
        height: 8,
        alpha: 0.8,
        color: 0xffffff
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var startX = this.container.x;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        x: [startX - 100, startX, startX + 100, startX]
      }, 3000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this = this;

      return {
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(500, 5000),
        getStartPosition: function getStartPosition() {
          var _this$container = _this.container,
              base_x = _this$container.x,
              base_y = _this$container.y;
          var _this$sprite = _this.sprite,
              width = _this$sprite.width,
              height = _this$sprite.height,
              x = _this$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y + height / 2
          };
        },
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["EasyBulletWater"],
        direction: -1
      };
    }
  }, {
    key: "setInteraction",
    value: function setInteraction() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this._interaction = value;
      this.sprite.tint = value ? 0xffffff : 0x999999;
    }
  }, {
    key: "canInteract",
    value: function canInteract() {
      return this._interaction;
    }
  }, {
    key: "onCollision",
    value: function onCollision() {
      this.lives -= 1;
      this.blink();

      this._updateHealthBar();

      if (this.lives <= 0) {
        this.destroy();
      }
    }
  }, {
    key: "_shoot",
    value: function _shoot(delta) {
      var info = this._bulletInfo = this._bulletInfo || this.getBulletInfo();
      info.timeBetweenShot -= delta;

      if (info.timeBetweenShot <= 0) {
        var _info$getStartPositio = info.getStartPosition(),
            x = _info$getStartPositio.x,
            y = _info$getStartPositio.y;

        gameManager.registerBullet(new info.bulletType(x, y, info.direction, this));
        this._bulletInfo = this.getBulletInfo();
      }
    }
  }, {
    key: "_updateHealthBar",
    value: function _updateHealthBar() {
      this.healthBar.width = this.healthBarWidth / this.maxLives * this.lives;
    }
  }, {
    key: "blink",
    value: function blink() {
      this.blinkingTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.sprite).to({
        alpha: [0.5, 1]
      }, 200).repeat(3).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this._destroyed = true;
      this.emit("destroy");

      if (this.moveAnimationTween) {
        this.moveAnimationTween.stop();
        this.moveAnimationTween = null;
      }

      if (this.blinkingTween) {
        this.blinkingTween.stop();
        this.blinkingTween = null;
      }

      if (animate) {
        new _Money__WEBPACK_IMPORTED_MODULE_5__["default"](this.container.x + this.sprite.width / 2, this.container.y + this.sprite.height / 2);
        new _Explosion__WEBPACK_IMPORTED_MODULE_6__["default"]().animate("a:1..10", this.collisionInfo.center.x, this.collisionInfo.center.y);
      }

      this.container.destroy(true);
      this.container = null;
      this.sprite = null;
    }
  }, {
    key: "tick",
    value: function tick(delta) {
      this._shoot(delta);
    }
  }, {
    key: "collisionInfo",
    get: function get() {
      var _this$container2 = this.container,
          base_x = _this$container2.x,
          base_y = _this$container2.y;
      var _this$sprite2 = this.sprite,
          width = _this$sprite2.width,
          height = _this$sprite2.height,
          x = _this$sprite2.x,
          y = _this$sprite2.y;
      return {
        x: base_x + x,
        y: base_y + y,
        width: width,
        height: height,
        center: {
          x: base_x + x + width / 2,
          y: base_y + y + height / 2
        }
      };
    }
  }, {
    key: "reward",
    get: function get() {
      return 0;
    }
  }, {
    key: "avatar",
    get: function get() {}
  }, {
    key: "destroyed",
    get: function get() {
      return this._destroyed;
    }
  }]);

  return Enemy;
}();


var EnemyEasyLevel =
/*#__PURE__*/
function (_Enemy) {
  _inherits(EnemyEasyLevel, _Enemy);

  function EnemyEasyLevel() {
    _classCallCheck(this, EnemyEasyLevel);

    return _possibleConstructorReturn(this, _getPrototypeOf(EnemyEasyLevel).apply(this, arguments));
  }

  _createClass(EnemyEasyLevel, [{
    key: "getBulletInfo",
    value: function getBulletInfo() {
      return _objectSpread({}, _get(_getPrototypeOf(EnemyEasyLevel.prototype), "getBulletInfo", this).call(this), {
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(3000, 5000)
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.maxLives = 2;
      this.lives = this.maxLives;
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "enemyEasy",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xffffff
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 1;
    }
  }]);

  return EnemyEasyLevel;
}(Enemy);
var EnemyMediumLevel =
/*#__PURE__*/
function (_Enemy2) {
  _inherits(EnemyMediumLevel, _Enemy2);

  function EnemyMediumLevel() {
    _classCallCheck(this, EnemyMediumLevel);

    return _possibleConstructorReturn(this, _getPrototypeOf(EnemyMediumLevel).apply(this, arguments));
  }

  _createClass(EnemyMediumLevel, [{
    key: "init",
    value: function init() {
      this.maxLives = 3;
      this.lives = this.maxLives;
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "enemyMedium",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      return _objectSpread({}, _get(_getPrototypeOf(EnemyMediumLevel.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["MediumBulletWater"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(2500, 5000)
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 2;
    }
  }]);

  return EnemyMediumLevel;
}(Enemy);
var EnemyHardLevel =
/*#__PURE__*/
function (_Enemy3) {
  _inherits(EnemyHardLevel, _Enemy3);

  function EnemyHardLevel() {
    _classCallCheck(this, EnemyHardLevel);

    return _possibleConstructorReturn(this, _getPrototypeOf(EnemyHardLevel).apply(this, arguments));
  }

  _createClass(EnemyHardLevel, [{
    key: "init",
    value: function init() {
      this.maxLives = 4;
      this.lives = this.maxLives;
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "enemyHard",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      return _objectSpread({}, _get(_getPrototypeOf(EnemyHardLevel.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["FireBullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1500, 7000)
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 3;
    }
  }]);

  return EnemyHardLevel;
}(Enemy);
var WaterEnemy =
/*#__PURE__*/
function (_Enemy4) {
  _inherits(WaterEnemy, _Enemy4);

  function WaterEnemy() {
    _classCallCheck(this, WaterEnemy);

    return _possibleConstructorReturn(this, _getPrototypeOf(WaterEnemy).apply(this, arguments));
  }

  _createClass(WaterEnemy, [{
    key: "getBulletInfo",
    value: function getBulletInfo() {
      return _objectSpread({}, _get(_getPrototypeOf(WaterEnemy.prototype), "getBulletInfo", this).call(this), {
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(3000, 5000)
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.maxLives = 5;
      this.lives = this.maxLives;
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "waterEnemy",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xffffff
      });
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      return _objectSpread({}, _get(_getPrototypeOf(WaterEnemy.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["WaterBullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(2500, 5000)
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 4;
    }
  }]);

  return WaterEnemy;
}(Enemy);
var FireEnemy =
/*#__PURE__*/
function (_Enemy5) {
  _inherits(FireEnemy, _Enemy5);

  function FireEnemy() {
    _classCallCheck(this, FireEnemy);

    return _possibleConstructorReturn(this, _getPrototypeOf(FireEnemy).apply(this, arguments));
  }

  _createClass(FireEnemy, [{
    key: "getBulletInfo",
    value: function getBulletInfo() {
      return _objectSpread({}, _get(_getPrototypeOf(FireEnemy.prototype), "getBulletInfo", this).call(this), {
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(3000, 5000)
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.maxLives = 6;
      this.lives = this.maxLives;
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "fireEnemy",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xffffff
      });
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      return _objectSpread({}, _get(_getPrototypeOf(FireEnemy.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["FireBullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(2500, 5000)
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 5;
    }
  }]);

  return FireEnemy;
}(Enemy);
var EarthEnemy =
/*#__PURE__*/
function (_Enemy6) {
  _inherits(EarthEnemy, _Enemy6);

  function EarthEnemy() {
    _classCallCheck(this, EarthEnemy);

    return _possibleConstructorReturn(this, _getPrototypeOf(EarthEnemy).apply(this, arguments));
  }

  _createClass(EarthEnemy, [{
    key: "getBulletInfo",
    value: function getBulletInfo() {
      return _objectSpread({}, _get(_getPrototypeOf(EarthEnemy.prototype), "getBulletInfo", this).call(this), {
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(3000, 5000)
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.maxLives = 7;
      this.lives = this.maxLives;
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "earthEnemy",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xffffff
      });
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      return _objectSpread({}, _get(_getPrototypeOf(EarthEnemy.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["EarthBullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(2500, 5000)
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 6;
    }
  }]);

  return EarthEnemy;
}(Enemy);
var WindEnemy =
/*#__PURE__*/
function (_Enemy7) {
  _inherits(WindEnemy, _Enemy7);

  function WindEnemy() {
    _classCallCheck(this, WindEnemy);

    return _possibleConstructorReturn(this, _getPrototypeOf(WindEnemy).apply(this, arguments));
  }

  _createClass(WindEnemy, [{
    key: "getBulletInfo",
    value: function getBulletInfo() {
      return _objectSpread({}, _get(_getPrototypeOf(WindEnemy.prototype), "getBulletInfo", this).call(this), {
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(3000, 5000)
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.maxLives = 8;
      this.lives = this.maxLives;
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "windEnemy",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xffffff
      });
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      return _objectSpread({}, _get(_getPrototypeOf(WindEnemy.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["WindBullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(2500, 5000)
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 7;
    }
  }]);

  return WindEnemy;
}(Enemy); //1st Bosses group

var Ozmen =
/*#__PURE__*/
function (_Enemy8) {
  _inherits(Ozmen, _Enemy8);

  function Ozmen() {
    _classCallCheck(this, Ozmen);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ozmen).apply(this, arguments));
  }

  _createClass(Ozmen, [{
    key: "init",
    value: function init() {
      this.maxLives = 15;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "boss_board_1",
        x: -80,
        y: +10
      });
      this.board.setParent(this.container);
      this.board.scale.set(1.3);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "MainBossOzmen",
        x: -50,
        y: -150,
        width: 200,
        height: 208
      });
      this.healthBarWidth = 150;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -165;
      this.healthBar.x = -20;
      this.healthBar.setParent(this.container);
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "OZMEN",
        x: 50,
        y: 120,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_x = this.container.x;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        x: [base_x + 30, base_x, base_x - 30, base_x]
      }, 7000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this2 = this;

      return _objectSpread({}, _get(_getPrototypeOf(Ozmen.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Boss_Group_1_Bullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 3000),
        getStartPosition: function getStartPosition() {
          var _this2$container = _this2.container,
              base_x = _this2$container.x,
              base_y = _this2$container.y;
          var _this2$sprite = _this2.sprite,
              width = _this2$sprite.width,
              height = _this2$sprite.height,
              x = _this2$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 25;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_OZMEN";
    }
  }]);

  return Ozmen;
}(Enemy);
var TrapDiller =
/*#__PURE__*/
function (_Enemy9) {
  _inherits(TrapDiller, _Enemy9);

  function TrapDiller() {
    _classCallCheck(this, TrapDiller);

    return _possibleConstructorReturn(this, _getPrototypeOf(TrapDiller).apply(this, arguments));
  }

  _createClass(TrapDiller, [{
    key: "init",
    value: function init() {
      this.maxLives = 8;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "support_board_1",
        x: -50,
        y: 0
      });
      this.board.setParent(this.container);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "BossTrapDiller",
        x: 0,
        y: -130
      });
      this.healthBarWidth = 90;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -150;
      this.healthBar.x = 10;
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "TrapDiller",
        x: 50,
        y: 80,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_y = this.container.y;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        y: [base_y + 10, base_y, base_y - 10, base_y]
      }, 5000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this3 = this;

      return _objectSpread({}, _get(_getPrototypeOf(TrapDiller.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Supports_Group_1_Bullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 3500),
        getStartPosition: function getStartPosition() {
          var _this3$container = _this3.container,
              base_x = _this3$container.x,
              base_y = _this3$container.y;
          var _this3$sprite = _this3.sprite,
              width = _this3$sprite.width,
              height = _this3$sprite.height,
              x = _this3$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 15;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_TrapDiller";
    }
  }]);

  return TrapDiller;
}(Enemy);
var Liunk =
/*#__PURE__*/
function (_Enemy10) {
  _inherits(Liunk, _Enemy10);

  function Liunk() {
    _classCallCheck(this, Liunk);

    return _possibleConstructorReturn(this, _getPrototypeOf(Liunk).apply(this, arguments));
  }

  _createClass(Liunk, [{
    key: "init",
    value: function init() {
      this.maxLives = 8;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "support_board_1",
        x: -50,
        y: 0
      });
      this.board.setParent(this.container);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "MiniBossLiunk",
        x: 0,
        y: -150
      });
      this.healthBarWidth = 90;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -165;
      this.healthBar.x = 20;
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "Liunk",
        x: 50,
        y: 80,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_y = this.container.y;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        y: [base_y + 10, base_y, base_y - 10, base_y]
      }, 5000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this4 = this;

      return _objectSpread({}, _get(_getPrototypeOf(Liunk.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Supports_Group_1_Bullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 3500),
        getStartPosition: function getStartPosition() {
          var _this4$container = _this4.container,
              base_x = _this4$container.x,
              base_y = _this4$container.y;
          var _this4$sprite = _this4.sprite,
              width = _this4$sprite.width,
              height = _this4$sprite.height,
              x = _this4$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 15;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_Liunk";
    }
  }]);

  return Liunk;
}(Enemy); //2st Bosses group

var Dekodans =
/*#__PURE__*/
function (_Enemy11) {
  _inherits(Dekodans, _Enemy11);

  function Dekodans() {
    _classCallCheck(this, Dekodans);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dekodans).apply(this, arguments));
  }

  _createClass(Dekodans, [{
    key: "init",
    value: function init() {
      this.maxLives = 20;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "boss_board_2",
        x: -80,
        y: +115
      });
      this.board.setParent(this.container);
      this.board.scale.set(1.3);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "BossDekodans",
        x: -50,
        y: -140,
        width: 200,
        height: 208
      });
      this.healthBarWidth = 150;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -165;
      this.healthBar.x = -20;
      this.healthBar.setParent(this.container);
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "dekodans",
        x: 50,
        y: 210,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_x = this.container.x;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        x: [base_x + 30, base_x, base_x - 30, base_x]
      }, 7000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this5 = this;

      return _objectSpread({}, _get(_getPrototypeOf(Dekodans.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["WindBullet"],
        //TODO
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 2800),
        getStartPosition: function getStartPosition() {
          var _this5$container = _this5.container,
              base_x = _this5$container.x,
              base_y = _this5$container.y;
          var _this5$sprite = _this5.sprite,
              width = _this5$sprite.width,
              height = _this5$sprite.height,
              x = _this5$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 40;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_dekodans";
    }
  }]);

  return Dekodans;
}(Enemy);
var TvoiBratan =
/*#__PURE__*/
function (_Enemy12) {
  _inherits(TvoiBratan, _Enemy12);

  function TvoiBratan() {
    _classCallCheck(this, TvoiBratan);

    return _possibleConstructorReturn(this, _getPrototypeOf(TvoiBratan).apply(this, arguments));
  }

  _createClass(TvoiBratan, [{
    key: "init",
    value: function init() {
      this.maxLives = 12;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "support_board_2",
        x: -45,
        y: -20
      });
      this.board.setParent(this.container);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "MiniBossTvoiBratan",
        x: 0,
        y: -75
      });
      this.healthBarWidth = 90;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -100;
      this.healthBar.x = 5;
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "tvoi bratan",
        x: 55,
        y: 85,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_y = this.container.y;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        y: [base_y + 10, base_y, base_y - 10, base_y]
      }, 5000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this6 = this;

      return _objectSpread({}, _get(_getPrototypeOf(TvoiBratan.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Supports_Group_2_Bullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 3200),
        getStartPosition: function getStartPosition() {
          var _this6$container = _this6.container,
              base_x = _this6$container.x,
              base_y = _this6$container.y;
          var _this6$sprite = _this6.sprite,
              width = _this6$sprite.width,
              height = _this6$sprite.height,
              x = _this6$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 25;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_tvoi_bratan";
    }
  }]);

  return TvoiBratan;
}(Enemy);
var St228 =
/*#__PURE__*/
function (_Enemy13) {
  _inherits(St228, _Enemy13);

  function St228() {
    _classCallCheck(this, St228);

    return _possibleConstructorReturn(this, _getPrototypeOf(St228).apply(this, arguments));
  }

  _createClass(St228, [{
    key: "init",
    value: function init() {
      this.maxLives = 12;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "support_board_2",
        x: -25,
        y: -20
      });
      this.board.setParent(this.container);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "MiniBossSt228",
        x: 20,
        y: -70
      });
      this.healthBarWidth = 90;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -100;
      this.healthBar.x = 30;
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "st228",
        x: 80,
        y: 95,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_y = this.container.y;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        y: [base_y + 10, base_y, base_y - 10, base_y]
      }, 5000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this7 = this;

      return _objectSpread({}, _get(_getPrototypeOf(St228.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Supports_Group_2_Bullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 3200),
        getStartPosition: function getStartPosition() {
          var _this7$container = _this7.container,
              base_x = _this7$container.x,
              base_y = _this7$container.y;
          var _this7$sprite = _this7.sprite,
              width = _this7$sprite.width,
              height = _this7$sprite.height,
              x = _this7$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 25;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_st228";
    }
  }]);

  return St228;
}(Enemy); //3st Bosses group

var Ganjamurder =
/*#__PURE__*/
function (_Enemy14) {
  _inherits(Ganjamurder, _Enemy14);

  function Ganjamurder() {
    _classCallCheck(this, Ganjamurder);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ganjamurder).apply(this, arguments));
  }

  _createClass(Ganjamurder, [{
    key: "init",
    value: function init() {
      this.maxLives = 25;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "boss_board_3",
        x: -80,
        y: -20
      });
      this.board.setParent(this.container);
      this.board.scale.set(1.3);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "BossGanjamurder",
        x: -50,
        y: -150,
        width: 200,
        height: 208
      });
      this.healthBarWidth = 150;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -165;
      this.healthBar.x = -20;
      this.healthBar.setParent(this.container);
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "ganjamurder",
        x: 55,
        y: 110,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_x = this.container.x;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        x: [base_x + 30, base_x, base_x - 30, base_x]
      }, 7000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this8 = this;

      return _objectSpread({}, _get(_getPrototypeOf(Ganjamurder.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Boss_Group_3_Bullet"],
        //TODO
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 2500),
        getStartPosition: function getStartPosition() {
          var _this8$container = _this8.container,
              base_x = _this8$container.x,
              base_y = _this8$container.y;
          var _this8$sprite = _this8.sprite,
              width = _this8$sprite.width,
              height = _this8$sprite.height,
              x = _this8$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 65;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_ganjamurder";
    }
  }]);

  return Ganjamurder;
}(Enemy);
var THC =
/*#__PURE__*/
function (_Enemy15) {
  _inherits(THC, _Enemy15);

  function THC() {
    _classCallCheck(this, THC);

    return _possibleConstructorReturn(this, _getPrototypeOf(THC).apply(this, arguments));
  }

  _createClass(THC, [{
    key: "init",
    value: function init() {
      this.maxLives = 16;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "support_board_3",
        x: -10,
        y: 70
      });
      this.board.setParent(this.container);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "MiniBoss99THC",
        x: 30,
        y: -60
      });
      this.healthBarWidth = 90;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -80;
      this.healthBar.x = 25;
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "99THC",
        x: 85,
        y: 170,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_y = this.container.y;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        y: [base_y + 10, base_y, base_y - 10, base_y]
      }, 5000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this9 = this;

      return _objectSpread({}, _get(_getPrototypeOf(THC.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Supports_Group_3_Bullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 2900),
        getStartPosition: function getStartPosition() {
          var _this9$container = _this9.container,
              base_x = _this9$container.x,
              base_y = _this9$container.y;
          var _this9$sprite = _this9.sprite,
              width = _this9$sprite.width,
              height = _this9$sprite.height,
              x = _this9$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 40;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_99THC";
    }
  }]);

  return THC;
}(Enemy);
var Jekson =
/*#__PURE__*/
function (_Enemy16) {
  _inherits(Jekson, _Enemy16);

  function Jekson() {
    _classCallCheck(this, Jekson);

    return _possibleConstructorReturn(this, _getPrototypeOf(Jekson).apply(this, arguments));
  }

  _createClass(Jekson, [{
    key: "init",
    value: function init() {
      this.maxLives = 16;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "support_board_3",
        x: -55,
        y: 50
      });
      this.board.setParent(this.container);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "MiniBossJekson",
        x: -10,
        y: -80
      });
      this.healthBarWidth = 90;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -85;
      this.healthBar.x = -5;
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "JEKS0N",
        x: 45,
        y: 155,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_y = this.container.y;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        y: [base_y + 10, base_y, base_y - 10, base_y]
      }, 5000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this10 = this;

      return _objectSpread({}, _get(_getPrototypeOf(Jekson.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Supports_Group_3_Bullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 2900),
        getStartPosition: function getStartPosition() {
          var _this10$container = _this10.container,
              base_x = _this10$container.x,
              base_y = _this10$container.y;
          var _this10$sprite = _this10.sprite,
              width = _this10$sprite.width,
              height = _this10$sprite.height,
              x = _this10$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 40;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_jEKS0N";
    }
  }]);

  return Jekson;
}(Enemy); //4st Bosses group NOT COMPLETE

var Syava =
/*#__PURE__*/
function (_Enemy17) {
  _inherits(Syava, _Enemy17);

  function Syava() {
    _classCallCheck(this, Syava);

    return _possibleConstructorReturn(this, _getPrototypeOf(Syava).apply(this, arguments));
  }

  _createClass(Syava, [{
    key: "init",
    value: function init() {
      this.maxLives = 30;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "boss_board_4",
        x: -80,
        y: -20
      });
      this.board.setParent(this.container);
      this.board.scale.set(1.3);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "BossSyava",
        x: 0,
        y: -150,
        width: 200,
        height: 208
      });
      this.healthBarWidth = 150;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -165;
      this.healthBar.x = 30;
      this.healthBar.setParent(this.container);
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "Syava",
        x: 120,
        y: 270,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_x = this.container.x;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        x: [base_x + 30, base_x, base_x - 30, base_x]
      }, 7000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this11 = this;

      return _objectSpread({}, _get(_getPrototypeOf(Syava.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Boss_Group_4_Bullet"],
        //TODO
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 2200),
        getStartPosition: function getStartPosition() {
          var _this11$container = _this11.container,
              base_x = _this11$container.x,
              base_y = _this11$container.y;
          var _this11$sprite = _this11.sprite,
              width = _this11$sprite.width,
              height = _this11$sprite.height,
              x = _this11$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 90;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_Syava";
    }
  }]);

  return Syava;
}(Enemy);
var Pozytron =
/*#__PURE__*/
function (_Enemy18) {
  _inherits(Pozytron, _Enemy18);

  function Pozytron() {
    _classCallCheck(this, Pozytron);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pozytron).apply(this, arguments));
  }

  _createClass(Pozytron, [{
    key: "init",
    value: function init() {
      this.maxLives = 20;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "support_board_4",
        x: -40,
        y: 15
      });
      this.board.setParent(this.container);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "MiniBossPozytron",
        x: 20,
        y: -80
      });
      this.healthBarWidth = 90;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -100;
      this.healthBar.x = 25;
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "pozytron",
        x: 63,
        y: 145,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_y = this.container.y;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        y: [base_y + 10, base_y, base_y - 10, base_y]
      }, 5000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this12 = this;

      return _objectSpread({}, _get(_getPrototypeOf(Pozytron.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Supports_Group_4_Bullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 2500),
        getStartPosition: function getStartPosition() {
          var _this12$container = _this12.container,
              base_x = _this12$container.x,
              base_y = _this12$container.y;
          var _this12$sprite = _this12.sprite,
              width = _this12$sprite.width,
              height = _this12$sprite.height,
              x = _this12$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 60;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_pozytron";
    }
  }]);

  return Pozytron;
}(Enemy);
var CHEMIUS =
/*#__PURE__*/
function (_Enemy19) {
  _inherits(CHEMIUS, _Enemy19);

  function CHEMIUS() {
    _classCallCheck(this, CHEMIUS);

    return _possibleConstructorReturn(this, _getPrototypeOf(CHEMIUS).apply(this, arguments));
  }

  _createClass(CHEMIUS, [{
    key: "init",
    value: function init() {
      this.maxLives = 20;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "support_board_4",
        x: -30,
        y: 35
      });
      this.board.setParent(this.container);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "MiniBossChemius",
        x: 20,
        y: -80
      });
      this.healthBarWidth = 90;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -100;
      this.healthBar.x = 25;
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "CHEMIUS",
        x: 68,
        y: 165,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_y = this.container.y;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        y: [base_y + 10, base_y, base_y - 10, base_y]
      }, 5000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this13 = this;

      return _objectSpread({}, _get(_getPrototypeOf(CHEMIUS.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Supports_Group_4_Bullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 2500),
        getStartPosition: function getStartPosition() {
          var _this13$container = _this13.container,
              base_x = _this13$container.x,
              base_y = _this13$container.y;
          var _this13$sprite = _this13.sprite,
              width = _this13$sprite.width,
              height = _this13$sprite.height,
              x = _this13$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 90;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_Chemius";
    }
  }]);

  return CHEMIUS;
}(Enemy); //5st Bosses group NOT COMPLETE

var Tetraceklinur =
/*#__PURE__*/
function (_Enemy20) {
  _inherits(Tetraceklinur, _Enemy20);

  function Tetraceklinur() {
    _classCallCheck(this, Tetraceklinur);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tetraceklinur).apply(this, arguments));
  }

  _createClass(Tetraceklinur, [{
    key: "init",
    value: function init() {
      this.maxLives = 35;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "boss_board_1",
        x: -80,
        y: 0
      });
      this.board.setParent(this.container);
      this.board.scale.set(1.3);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "BossTetraceklinur",
        x: -50,
        y: -150,
        width: 200,
        height: 208
      });
      this.healthBarWidth = 150;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -165;
      this.healthBar.x = -20;
      this.healthBar.setParent(this.container);
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "tetraceklinur",
        x: 50,
        y: 100,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_x = this.container.x;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        x: [base_x + 30, base_x, base_x - 30, base_x]
      }, 7000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this14 = this;

      return _objectSpread({}, _get(_getPrototypeOf(Tetraceklinur.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Boss_Group_5_Bullet"],
        //TODO
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 1900),
        getStartPosition: function getStartPosition() {
          var _this14$container = _this14.container,
              base_x = _this14$container.x,
              base_y = _this14$container.y;
          var _this14$sprite = _this14.sprite,
              width = _this14$sprite.width,
              height = _this14$sprite.height,
              x = _this14$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 120;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_Tetraceklinur";
    }
  }]);

  return Tetraceklinur;
}(Enemy);
var SIZIB3ken =
/*#__PURE__*/
function (_Enemy21) {
  _inherits(SIZIB3ken, _Enemy21);

  function SIZIB3ken() {
    _classCallCheck(this, SIZIB3ken);

    return _possibleConstructorReturn(this, _getPrototypeOf(SIZIB3ken).apply(this, arguments));
  }

  _createClass(SIZIB3ken, [{
    key: "init",
    value: function init() {
      this.maxLives = 25;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "boss_board_1",
        x: -30,
        y: 15
      });
      this.board.setParent(this.container);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "MiniBossSizib3ken",
        x: 20,
        y: -100
      });
      this.healthBarWidth = 90;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -100;
      this.healthBar.x = 30;
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "SIZIB3ken",
        x: 70,
        y: 100,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_y = this.container.y;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        y: [base_y + 10, base_y, base_y - 10, base_y]
      }, 5000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this15 = this;

      return _objectSpread({}, _get(_getPrototypeOf(SIZIB3ken.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Supports_Group_5_Bullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 2200),
        getStartPosition: function getStartPosition() {
          var _this15$container = _this15.container,
              base_x = _this15$container.x,
              base_y = _this15$container.y;
          var _this15$sprite = _this15.sprite,
              width = _this15$sprite.width,
              height = _this15$sprite.height,
              x = _this15$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 90;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_Cizib3ken";
    }
  }]);

  return SIZIB3ken;
}(Enemy);
var HelpMeDude =
/*#__PURE__*/
function (_Enemy22) {
  _inherits(HelpMeDude, _Enemy22);

  function HelpMeDude() {
    _classCallCheck(this, HelpMeDude);

    return _possibleConstructorReturn(this, _getPrototypeOf(HelpMeDude).apply(this, arguments));
  }

  _createClass(HelpMeDude, [{
    key: "init",
    value: function init() {
      this.maxLives = 25;
      this.lives = this.maxLives;
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "boss_board_1",
        x: -40,
        y: 15
      });
      this.board.setParent(this.container);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "MiniBossAndruha",
        x: 0,
        y: -60
      });
      this.healthBarWidth = 90;
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -90;
      this.healthBar.x = 15;
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "Help_me_dude",
        x: 63,
        y: 95,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var base_y = this.container.y;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        y: [base_y + 10, base_y, base_y - 10, base_y]
      }, 5000).repeat(Infinity).start();
    }
  }, {
    key: "getBulletInfo",
    value: function getBulletInfo() {
      var _this16 = this;

      return _objectSpread({}, _get(_getPrototypeOf(HelpMeDude.prototype), "getBulletInfo", this).call(this), {
        bulletType: _Bullet__WEBPACK_IMPORTED_MODULE_3__["Supports_Group_5_Bullet"],
        timeBetweenShot: _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 1800),
        getStartPosition: function getStartPosition() {
          var _this16$container = _this16.container,
              base_x = _this16$container.x,
              base_y = _this16$container.y;
          var _this16$sprite = _this16.sprite,
              width = _this16$sprite.width,
              height = _this16$sprite.height,
              x = _this16$sprite.x;
          return {
            x: base_x + x + width / 2,
            y: base_y
          };
        }
      });
    }
  }, {
    key: "reward",
    get: function get() {
      return 90;
    }
  }, {
    key: "avatar",
    get: function get() {
      return "avatar_Help_me_dude";
    }
  }]);

  return HelpMeDude;
}(Enemy); //SHIELDS

var WoodenShield =
/*#__PURE__*/
function (_Enemy23) {
  _inherits(WoodenShield, _Enemy23);

  function WoodenShield() {
    _classCallCheck(this, WoodenShield);

    return _possibleConstructorReturn(this, _getPrototypeOf(WoodenShield).apply(this, arguments));
  }

  _createClass(WoodenShield, [{
    key: "init",
    value: function init() {
      this.maxLives = 10;
      this.lives = this.maxLives;
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "whoodenShield",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xffffff
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var startX = this.container.x;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        x: [startX - 100, startX, startX + 100, startX]
      }, 10000).repeat(Infinity).start();
    }
  }, {
    key: "_shoot",
    value: function _shoot() {}
  }, {
    key: "reward",
    get: function get() {
      return 1;
    }
  }]);

  return WoodenShield;
}(Enemy);
var StoneShield =
/*#__PURE__*/
function (_Enemy24) {
  _inherits(StoneShield, _Enemy24);

  function StoneShield() {
    _classCallCheck(this, StoneShield);

    return _possibleConstructorReturn(this, _getPrototypeOf(StoneShield).apply(this, arguments));
  }

  _createClass(StoneShield, [{
    key: "init",
    value: function init() {
      this.maxLives = 15;
      this.lives = this.maxLives;
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "stoneShield",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xffffff
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var startX = this.container.x;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        x: [startX - 100, startX, startX + 100, startX]
      }, 10000).repeat(Infinity).start();
    }
  }, {
    key: "_shoot",
    value: function _shoot() {}
  }, {
    key: "reward",
    get: function get() {
      return 1;
    }
  }]);

  return StoneShield;
}(Enemy);
var IronShield =
/*#__PURE__*/
function (_Enemy25) {
  _inherits(IronShield, _Enemy25);

  function IronShield() {
    _classCallCheck(this, IronShield);

    return _possibleConstructorReturn(this, _getPrototypeOf(IronShield).apply(this, arguments));
  }

  _createClass(IronShield, [{
    key: "init",
    value: function init() {
      this.maxLives = 25;
      this.lives = this.maxLives;
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "ironShield",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthBarWidth,
        height: 8,
        alpha: 0.8,
        color: 0xffffff
      });
    }
  }, {
    key: "moveAnimation",
    value: function moveAnimation() {
      var startX = this.container.x;
      this.moveAnimationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        x: [startX - 100, startX, startX + 100, startX]
      }, 10000).repeat(Infinity).start();
    }
  }, {
    key: "_shoot",
    value: function _shoot() {}
  }, {
    key: "reward",
    get: function get() {
      return 1;
    }
  }]);

  return IronShield;
}(Enemy);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Money =
/*#__PURE__*/
function () {
  function Money(x, y) {
    var _this = this;

    _classCallCheck(this, Money);

    this._sprite = null;
    this._coinTween = null;
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
      _this._init(x, y);

      _this._animate();
    });
  }

  _createClass(Money, [{
    key: "_init",
    value: function _init(x, y) {
      this._sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createSprite({
        name: "coin",
        x: x,
        y: y
      });

      this._sprite.setParent(_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field);

      this._sprite.anchor.set(0.5);
    }
  }, {
    key: "_animate",
    value: function _animate() {
      var _this2 = this;

      this._coinTween = new tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.Tween(this._sprite).to({
        y: this._sprite.y - 150
      }, 1600).easing(tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.Easing.Quadratic.Out).onUpdate(function (k) {
        _this2._sprite.alpha = 1 - k;
      }).start(); // TODO: investigate why sometimes sprite width is 0 immediately after initialization

      new tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.Tween(this._sprite).to({
        width: [0, 40]
      }, 400).repeat(4).onComplete(function () {
        // NOTE: do not destroy current tween!
        // as it will be destroyed automatically after onComplete
        _this2._destroy();
      }).start();
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.removeChild(this._sprite);

      this._sprite.destroy();

      this._sprite = null;
      tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.remove(this._coinTween);
      this._coinTween = null;
    }
  }]);

  return Money;
}();

/* harmony default export */ __webpack_exports__["default"] = (Money);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerGun; });
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PlayerGun =
/*#__PURE__*/
function () {
  function PlayerGun(x, y) {
    _classCallCheck(this, PlayerGun);

    this.container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer({
      x: x,
      y: y
    });
    this.gun = null;
    this.muzzle = null;
    this.gunTween = null;
    this.init();
  }

  _createClass(PlayerGun, [{
    key: "init",
    value: function init() {
      // debug
      // const rect = GraphicsHelper.drawRect({
      //     width: 50,
      //     height: 50,
      // });
      // this.container.addChild(rect);
      // move gun on 20px to right to remove offset shift
      var gunX = 20; // muzzle position - in the top of the gun

      var muzzleY = -90;
      this.gun = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSprite({
        name: "gun_1",
        x: gunX
      }); // start gun start point

      this.gun.anchor.set(0.5, 0.7);
      this.gun.setParent(this.container);
      this.muzzle = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createSprite({
        name: "Muzzle",
        // same offset for as for gun
        x: gunX,
        y: muzzleY
      });
      this.muzzle.anchor.set(0.5);
      this.muzzle.setParent(this.container); // hide muzzle

      this.muzzle.alpha = 0;
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this = this;

      if (this.gunTween) {
        this.gunTween.stop();
        this.gun.pivot.x = 0;
      }

      this.muzzle.alpha = 1;
      this.gunTween = new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(this.gun.pivot).to({
        y: [-10, 0]
      }, 60).easing(tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Easing.Quadratic.Out).onUpdate(function (k) {
        _this.muzzle.alpha = 1 - k;
      }).start();
    }
  }, {
    key: "getBulletStartPosition",
    value: function getBulletStartPosition() {
      var _this$container = this.container,
          base_x = _this$container.x,
          base_y = _this$container.y;
      var _this$gun = this.gun,
          gun_x = _this$gun.x,
          gun_height = _this$gun.height,
          anchorY = _this$gun.anchor.y;
      var gunHeight = gun_height * anchorY;
      return {
        x: base_x + gun_x,
        y: base_y - gunHeight
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.container.destroy(true);
      this.container = null;
      this.gun = null;
      this.muzzle = null;
      this.gunTween = null;
    }
  }]);

  return PlayerGun;
}();



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HealthBar; });
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var HealthBar =
/*#__PURE__*/
function () {
  function HealthBar(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        maxHealth = _ref.maxHealth;

    _classCallCheck(this, HealthBar);

    this.container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createContainer({
      x: x - width / 2,
      y: y
    }); // debug
    // const rect = GraphicsHelper.drawRect({
    //     width: 50,
    //     height: 50,
    // });
    // this.container.addChild(rect);

    this._barColors = [0xc63232, 0xc68b32, 0xc6c632, 0x3cc632];
    this._maxHealth = maxHealth;
    this._health = maxHealth;
    this._maxWidth = width;

    this._drawBar();
  }

  _createClass(HealthBar, [{
    key: "_drawBar",
    value: function _drawBar() {
      this._healthBar = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Sprite"](pixi_js__WEBPACK_IMPORTED_MODULE_2__["Texture"].WHITE);
      this._healthBar.tint = this._barColors[this._barColors.length - 1];
      this._healthBar.width = this._maxWidth;
      this._healthBar.height = 8;

      this._healthBar.setParent(this.container);
    }
  }, {
    key: "decreaseHealth",
    value: function decreaseHealth() {
      var damage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this._health = Math.max(0, this._health - damage);

      this._updateHealthBar();
    }
  }, {
    key: "reset",
    value: function reset() {
      this._health = this._maxHealth;

      this._updateHealthBar();
    }
  }, {
    key: "_updateHealthBar",
    value: function _updateHealthBar() {
      this._updateColor();

      this._animation = new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(this._healthBar).to({
        width: 100 / this._maxHealth * this._health
      }, 500).start();
    }
  }, {
    key: "_updateColor",
    value: function _updateColor() {
      /* substract 1 - to make ranges:
          0..25
          26..50
          51..75
          76..100
      */
      var healthPercentageLeft = this._health / this._maxHealth * 100 - 1;
      var color = this._barColors[(healthPercentageLeft - healthPercentageLeft % 25) / 25];

      if (this._healthBar.color != color) {
        this._healthBar.tint = color;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._animation && this._animation.stop();

      this._healthBar.destroy();
    }
  }, {
    key: "health",
    get: function get() {
      return this._health;
    }
  }]);

  return HealthBar;
}();



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var _Manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var ControlPanel =
/*#__PURE__*/
function () {
  function ControlPanel() {
    var _this = this;

    _classCallCheck(this, ControlPanel);

    this._container = null;
    this._pauseButton = null;
    this._restartButton = null;
    this._moneyText = null;
    this._money = 0;

    this._init();

    _Manager_js__WEBPACK_IMPORTED_MODULE_4__["default"].on("updateScore", function (data) {
      switch (data.action) {
        case "enemy:destroy":
          {
            //this.increaseMoney = data.info.reward;
            _this._money += data.info.reward;
            _this._moneyText.text = "$ ".concat(_this._money);
            break;
          }

        default:
          console.info("Cannot update reward due to unknown action '".concat(data.action, "'"));
      }
    });
  }

  _createClass(ControlPanel, [{
    key: "_init",
    value: function _init() {
      this._container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createContainer({
        x: 0,
        y: _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height / 2 - 30
      });
      _Starter_js__WEBPACK_IMPORTED_MODULE_0__["default"].field.addChild(this._container);
      this._pauseButton = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "pause",
        x: -(_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2) + 50,
        y: -10,
        onClick: function onClick() {
          _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].showScene("pause");
        }
      });
      this._pauseButton.buttonMode = true;

      this._pauseButton.anchor.set(0.5);

      this._pauseButton.scale.set(0.6);

      this._pauseButton.setParent(this._container);

      this._restartButton = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "restart",
        x: -(_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2) + 115,
        y: -10,
        onClick: function onClick() {
          _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].showScene("restart");
        }
      });
      this._restartButton.buttonMode = true;

      this._restartButton.anchor.set(0.5);

      this._restartButton.scale.set(0.6);

      this._restartButton.setParent(this._container);

      this._shopButton = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "shop",
        x: -(_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2) + 175,
        y: -10,
        onClick: function onClick() {
          _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].showScene("shop");
        }
      });
      this._shopButton.buttonMode = true;

      this._shopButton.anchor.set(0.5);

      this._shopButton.scale.set(0.6);

      this._shopButton.setParent(this._container);

      this._moneyText = _utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].drawText({
        parent: this._container,
        text: "$ ".concat(this._money),
        x: -(_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2) + 250,
        y: -10,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_6__["default"].score
      });
    }
  }]);

  return ControlPanel;
}();

/* harmony default export */ __webpack_exports__["default"] = (ControlPanel);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SceneManager =
/*#__PURE__*/
function () {
  function SceneManager() {
    _classCallCheck(this, SceneManager);

    this._scenes = {};
    this._activeScene = null;
  }

  _createClass(SceneManager, [{
    key: "showScene",
    value: function showScene(name) {
      if (this._activeScene !== null && this._scenes[name] === this._activeScene) {
        console.info("Scene ".concat(name, " is already displaying"));
      }

      if (this._scenes.hasOwnProperty(name)) {
        if (this._activeScene !== null) {
          this._activeScene.hide();
        }

        this._scenes[name].show();

        this._activeScene = this._scenes[name];
        console.info("active scene ".concat(name));
      } else {
        console.error("Scene ".concat(name, " is not found"));
      }
    }
  }, {
    key: "registerScene",
    value: function registerScene(name, scene) {
      this._scenes[name] = scene;
    }
  }]);

  return SceneManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SceneManager());

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scenes_MainGameScene_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Manager =
/*#__PURE__*/
function () {
  function Manager() {
    _classCallCheck(this, Manager);

    this.tick = this.tick.bind(this);
    this._player = null;
    this._enemies = {};
    this._bullets = {};
    this._muteEvents = false;
    new component_emitter__WEBPACK_IMPORTED_MODULE_3___default.a(this);
  }

  _createClass(Manager, [{
    key: "destroyBullets",
    value: function destroyBullets() {
      var prevMuteEvents = this._muteEvents;
      this._muteEvents = true;
      Object.values(this._bullets).forEach(function (x) {
        return x.destroy();
      });
      this._muteEvents = prevMuteEvents;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._muteEvents = true;
      this._player && this._player.destroy();
      Object.values(this._enemies).forEach(function (x) {
        return x.destroy(false);
      });
      Object.values(this._bullets).forEach(function (x) {
        return x.destroy();
      });
      this._muteEvents = false;
    }
  }, {
    key: "registerEnemy",
    value: function registerEnemy(enemy) {
      var _this = this;

      var id = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].getGuid();
      this._enemies[id] = enemy;
      _scenes_MainGameScene_js__WEBPACK_IMPORTED_MODULE_4__["default"].addChild(enemy);
      enemy.once("destroy", function () {
        _scenes_MainGameScene_js__WEBPACK_IMPORTED_MODULE_4__["default"].removeChild(enemy);
        delete _this._enemies[id];

        if (!_this._muteEvents) {
          _this.emit("updateScore", {
            action: "enemy:destroy",
            info: {
              enemyType: enemy.enemyType,
              reward: enemy.reward
            }
          });
        }
      });
    }
  }, {
    key: "registerPlayer",
    value: function registerPlayer(player) {
      var _this2 = this;

      this._player = player;
      _scenes_MainGameScene_js__WEBPACK_IMPORTED_MODULE_4__["default"].addChild(player);
      player.once("destroy", function () {
        _scenes_MainGameScene_js__WEBPACK_IMPORTED_MODULE_4__["default"].removeChild(player);
        _this2._player = null;
      });
    }
  }, {
    key: "registerBullet",
    value: function registerBullet(bullet) {
      var _this3 = this;

      var id = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].getGuid();
      this._bullets[id] = bullet;
      _scenes_MainGameScene_js__WEBPACK_IMPORTED_MODULE_4__["default"].addChild(bullet);
      bullet.once("destroy", function () {
        _scenes_MainGameScene_js__WEBPACK_IMPORTED_MODULE_4__["default"].removeChild(bullet);
        delete _this3._bullets[id];
      });
    }
  }, {
    key: "_drawCollisionInfo",
    value: function _drawCollisionInfo(source) {
      var _this4 = this;

      this._devModeGraphics = this._devModeGraphics || {};
      Object.keys(source).forEach(function (key) {
        var o = source[key];
        var rect = o.collisionInfo;

        if (!_this4._devModeGraphics[key]) {
          _this4._devModeGraphics[key] = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].drawRect({
            x: 0,
            y: 0,
            width: rect.width,
            height: rect.height
          });
          _Starter_js__WEBPACK_IMPORTED_MODULE_0__["default"].field.addChild(_this4._devModeGraphics[key]);
        }

        _this4._devModeGraphics[key].x = rect.x;
        _this4._devModeGraphics[key].y = rect.y;
      });
    }
  }, {
    key: "_isCollide",
    value: function _isCollide(obj1, obj2) {
      if (!obj1 || !obj2 || obj1.destroyed || obj2.destroyed) {
        return false;
      }

      var ci1 = obj1.collisionInfo;
      var ci2 = obj2.collisionInfo; // rectangle collision

      return ci2.x < ci1.x + ci1.width && ci2.x + ci2.width > ci1.x && ci2.y < ci1.y + ci1.height && ci2.y + ci2.height > ci1.y && obj1.canInteract(obj2) && obj2.canInteract(obj1); // const distance = obj1.collisionInfo.size + obj2.collisionInfo.size;
      // const dx = obj1.collisionInfo.x - obj2.collisionInfo.x;
      // const dy = obj1.collisionInfo.y - obj2.collisionInfo.y;
      // return distance > Math.sqrt(dx * dx + dy * dy) && obj1.canInteract(obj2) && obj2.canInteract(obj1);
    }
  }, {
    key: "_checkCollision",
    value: function _checkCollision() {
      var _this5 = this;

      var enemies = Object.values(this._enemies);
      var bullets = Object.values(this._bullets);
      bullets.forEach(function (b) {
        if (_this5._isCollide(_this5._player, b)) {
          _this5._player.onCollision();

          b.onCollision();
        }

        enemies.forEach(function (o) {
          if (_this5._isCollide(o, b)) {
            o.onCollision();
            b.onCollision();
          }
        });
      });
    }
  }, {
    key: "tick",
    value: function tick(delta) {
      this._checkCollision(); // dev mode
      // this._drawCollisionInfo(this._bullets);
      // this._drawCollisionInfo(this._enemies);

    }
  }, {
    key: "enemiesExist",
    get: function get() {
      return Object.values(this._enemies).length !== 0;
    }
  }, {
    key: "playerExists",
    get: function get() {
      return this._player !== null;
    }
  }]);

  return Manager;
}();

var gameManager = new Manager();
_scenes_MainGameScene_js__WEBPACK_IMPORTED_MODULE_4__["default"].addChild(gameManager);
/* harmony default export */ __webpack_exports__["default"] = (gameManager); // dev mode

window.gameManager = gameManager;

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _GraphicsHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _Starter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _TickerHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var MainGameScene =
/*#__PURE__*/
function () {
  function MainGameScene() {
    var _this = this;

    _classCallCheck(this, MainGameScene);

    this._tickerHelper = new _TickerHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    var _starter$size = _Starter_js__WEBPACK_IMPORTED_MODULE_3__["default"].size,
        width = _starter$size.width,
        height = _starter$size.height;
    this.container = _GraphicsHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"].createContainer({
      width: width,
      height: height,
      x: width / 2,
      y: height / 2
    });
    _Starter_js__WEBPACK_IMPORTED_MODULE_3__["default"].initiated.then(function () {
      _Starter_js__WEBPACK_IMPORTED_MODULE_3__["default"].app.stage.addChild(_this.container);

      _this.hide();
    });
    this._registrations = new WeakMap();
  }

  _createClass(MainGameScene, [{
    key: "addChild",
    value: function addChild(obj) {
      var success = false;

      if (obj.container && obj.container.constructor === pixi_js__WEBPACK_IMPORTED_MODULE_2__["Container"]) {
        this.container.addChild(obj.container);
        success = true;
      }

      if (obj && _utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].isFunction(obj.tick)) {
        var registration = this._tickerHelper.registerTick(obj.tick, obj);

        this._registrations.set(obj, registration);

        success = true;
      }

      if (!success) {
        throw new Error("Cannot add object ".concat(obj, " without 'container' and 'tick'"));
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(obj) {
      var success = false;

      if (obj.container && obj.container.constructor === pixi_js__WEBPACK_IMPORTED_MODULE_2__["Container"]) {
        this.container.removeChild(obj.container);
        success = true;
      }

      if (_utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].isFunction(obj.tick) && this._registrations.has(obj)) {
        var registration = this._registrations.get(obj);

        this._tickerHelper.unregisterTick(registration);

        success = true;
      }

      if (!success) {
        throw new Error("Cannot remove object ".concat(obj, " without 'container' and 'tick'"));
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this._tickerHelper.stop();
    }
  }, {
    key: "resume",
    value: function resume() {
      this._tickerHelper.start();
    }
  }, {
    key: "show",
    value: function show() {
      this.resume();
      this.container.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.pause();
      this.container.visible = false;
    }
  }]);

  return MainGameScene;
}();

var mainGameScene = new MainGameScene();
/* harmony default export */ __webpack_exports__["default"] = (mainGameScene);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TickerHelper; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TickerHelper =
/*#__PURE__*/
function () {
  function TickerHelper() {
    _classCallCheck(this, TickerHelper);

    this._ticker = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Ticker"]();
  }

  _createClass(TickerHelper, [{
    key: "registerTick",
    value: function registerTick(action, context) {
      var _this = this;

      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFunction(action)) {
        // wrap origin action to pass elapsedMS
        var registration = context ? function () {
          return action.call(context, _this._ticker.elapsedMS);
        } : function () {
          return action(_this._ticker.elapsedMS);
        };

        this._ticker.add(registration);

        return registration;
      }

      console.error("registerTick: cannot register object");
    }
  }, {
    key: "unregisterTick",
    value: function unregisterTick(registration) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFunction(registration)) {
        this._ticker.remove(registration);

        return;
      }

      console.error("unregisterTick: cannot unregister object");
    }
  }, {
    key: "start",
    value: function start() {
      this._ticker.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this._ticker.stop();
    }
  }]);

  return TickerHelper;
}();



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_levelSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85);
/* harmony import */ var _ScoreBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90);
/* harmony import */ var _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67);
/* harmony import */ var _scenes_MainGameScene__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var ENEMY_BY_ID = {
  1: _Enemy__WEBPACK_IMPORTED_MODULE_1__["EnemyEasyLevel"],
  2: _Enemy__WEBPACK_IMPORTED_MODULE_1__["EnemyMediumLevel"],
  3: _Enemy__WEBPACK_IMPORTED_MODULE_1__["EnemyHardLevel"],
  4: _Enemy__WEBPACK_IMPORTED_MODULE_1__["WaterEnemy"],
  5: _Enemy__WEBPACK_IMPORTED_MODULE_1__["FireEnemy"],
  6: _Enemy__WEBPACK_IMPORTED_MODULE_1__["EarthEnemy"],
  7: _Enemy__WEBPACK_IMPORTED_MODULE_1__["WindEnemy"],
  8: _Enemy__WEBPACK_IMPORTED_MODULE_1__["WoodenShield"],
  9: _Enemy__WEBPACK_IMPORTED_MODULE_1__["StoneShield"],
  10: _Enemy__WEBPACK_IMPORTED_MODULE_1__["IronShield"],
  50: _Enemy__WEBPACK_IMPORTED_MODULE_1__["TrapDiller"],
  51: _Enemy__WEBPACK_IMPORTED_MODULE_1__["Liunk"],
  52: _Enemy__WEBPACK_IMPORTED_MODULE_1__["TvoiBratan"],
  53: _Enemy__WEBPACK_IMPORTED_MODULE_1__["St228"],
  54: _Enemy__WEBPACK_IMPORTED_MODULE_1__["Jekson"],
  55: _Enemy__WEBPACK_IMPORTED_MODULE_1__["THC"],
  56: _Enemy__WEBPACK_IMPORTED_MODULE_1__["Pozytron"],
  57: _Enemy__WEBPACK_IMPORTED_MODULE_1__["CHEMIUS"],
  58: _Enemy__WEBPACK_IMPORTED_MODULE_1__["HelpMeDude"],
  59: _Enemy__WEBPACK_IMPORTED_MODULE_1__["SIZIB3ken"],
  70: _Enemy__WEBPACK_IMPORTED_MODULE_1__["Ozmen"],
  71: _Enemy__WEBPACK_IMPORTED_MODULE_1__["Dekodans"],
  72: _Enemy__WEBPACK_IMPORTED_MODULE_1__["Ganjamurder"],
  73: _Enemy__WEBPACK_IMPORTED_MODULE_1__["Syava"],
  74: _Enemy__WEBPACK_IMPORTED_MODULE_1__["Tetraceklinur"]
};

var EnemiesManager =
/*#__PURE__*/
function () {
  function EnemiesManager() {
    _classCallCheck(this, EnemiesManager);

    this._enemies = [];
  }

  _createClass(EnemiesManager, [{
    key: "init",
    value: function init(levelInfo) {
      this._initEnemies(levelInfo);
    }
  }, {
    key: "updateInteraction",
    value: function updateInteraction() {
      console.info("updateInteraction"); // only first enemy is available
      // this._enemies.forEach((enemy, index) => {
      //     enemy.setInteraction(index === 0);
      // });
      // bosses  become available only after all other enemies have been destroyed

      var bosses = this._enemies.filter(function (_ref) {
        var id = _ref.id;
        return id >= 70;
      });

      var other = this._enemies.filter(function (_ref2) {
        var id = _ref2.id;
        return id < 70;
      });

      if (bosses.length && other.length) {
        bosses.forEach(function (_ref3) {
          var enemy = _ref3.enemy;
          return enemy.setInteraction(false);
        });
        return;
      }

      this._enemies.forEach(function (_ref4) {
        var enemy = _ref4.enemy;
        return enemy.setInteraction(true);
      });
    }
  }, {
    key: "_createEnemy",
    value: function _createEnemy(settings) {
      var id = settings.id;
      var enemyClass = ENEMY_BY_ID[id] || ENEMY_BY_ID[1];
      var enemy = new enemyClass(settings);
      return enemy;
    }
  }, {
    key: "_initEnemies",
    value: function _initEnemies(levelInfo) {
      var _this = this;

      var y = -_settings_js__WEBPACK_IMPORTED_MODULE_6__["default"].appSizes.height / 2 + 40;
      var maxRowHeight = 0;
      var idAvatar = 0;

      for (var i = 0; i < levelInfo.length; i++) {
        var step = _settings_js__WEBPACK_IMPORTED_MODULE_6__["default"].appSizes.width / levelInfo[i].length - 15;
        var x = -(_settings_js__WEBPACK_IMPORTED_MODULE_6__["default"].appSizes.width / 2) + 100; //TODO : remove this logic or change

        if (levelInfo[i].includes(70) || levelInfo[i].includes(71) || levelInfo[i].includes(72) || levelInfo[i].includes(73) || levelInfo[i].includes(74)) {
          y += 150;
        }

        for (var j = 0; j < levelInfo[i].length; j++) {
          var id = levelInfo[i][j];

          if (levelInfo[i][j] === 0) {
            continue;
          }

          var enemy = this._createEnemy({
            x: x + step * j + 20,
            y: y,
            id: id
          });

          this._enemies.push({
            id: id,
            enemy: enemy
          });

          maxRowHeight = Math.max(maxRowHeight, enemy.heights[id]);
        }

        y += maxRowHeight + 25;
      }

      this.updateInteraction();

      this._enemies.forEach(function (_ref5) {
        var enemy = _ref5.enemy;
        _Manager__WEBPACK_IMPORTED_MODULE_2__["default"].registerEnemy(enemy);
        enemy.on("destroy", function () {
          _this._enemies = _this._enemies.filter(function (x) {
            return x.enemy !== enemy;
          });

          _this.updateInteraction();
        });
      });
    }
  }]);

  return EnemiesManager;
}();

var LevelManager =
/*#__PURE__*/
function () {
  function LevelManager() {
    var _this2 = this;

    _classCallCheck(this, LevelManager);

    this.tick = this.tick.bind(this);
    this.level = 1;
    this._waitingLevelChange = 0;
    this.scoreBar = new _ScoreBar__WEBPACK_IMPORTED_MODULE_3__["default"]();
    _Manager__WEBPACK_IMPORTED_MODULE_2__["default"].on("updateScore", function (data) {
      switch (data.action) {
        case "enemy:destroy":
          {
            // TODO: use different value depending on data.info
            _this2.scoreBar.update(100);

            break;
          }

        default:
          console.info("Cannot update score due to unknown action '".concat(data.action, "'"));
      }
    });
    this.avatars = [];
    this.container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createContainer({
      x: _settings_js__WEBPACK_IMPORTED_MODULE_6__["default"].appSizes.width / 2 - 200,
      y: _settings_js__WEBPACK_IMPORTED_MODULE_6__["default"].appSizes.height / 2 - 70
    });
  }

  _createClass(LevelManager, [{
    key: "restart",
    value: function restart() {
      console.info("restart level");
      this.scoreBar.reset();
      _Manager__WEBPACK_IMPORTED_MODULE_2__["default"].reset();

      this._initLevelObjets();
    }
  }, {
    key: "_initLevelObjets",
    value: function _initLevelObjets() {
      var levelInfo = _settings_levelSettings__WEBPACK_IMPORTED_MODULE_0__["default"][this.level];

      if (!levelInfo) {
        console.log("Cannot find level info for level ".concat(this.level));
        return;
      }

      var manager = new EnemiesManager();
      manager.init(levelInfo);
    }
  }, {
    key: "tick",
    value: function tick(delta) {
      // check GAME OVER
      if (!_Manager__WEBPACK_IMPORTED_MODULE_2__["default"].playerExists) {
        // show startGame scene to choose the player
        _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_4__["default"].showScene("startGame");
        return;
      } // check NEXT LEVEL


      if (!_Manager__WEBPACK_IMPORTED_MODULE_2__["default"].enemiesExist) {
        this._waitingLevelChange += delta; // delay to wait until all animations done

        if (this._waitingLevelChange > 700) {
          this._waitingLevelChange = 0;
          this.level += 1;
          _Manager__WEBPACK_IMPORTED_MODULE_2__["default"].destroyBullets();
          _scenes_SceneManager__WEBPACK_IMPORTED_MODULE_4__["default"].showScene("continueGame");

          this._initLevelObjets();

          return;
        }
      }
    }
  }]);

  return LevelManager;
}();

var levelManager = new LevelManager();
_scenes_MainGameScene__WEBPACK_IMPORTED_MODULE_7__["default"].addChild(levelManager);
/* harmony default export */ __webpack_exports__["default"] = (levelManager);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var levelSettings = {
  // 1: [[0, 50, 0, 70, 0, 51, 0]],
  1: [[0, 1, 0, 1, 0, 1, 0, 1, 0], [1, 0, 1, 0, 1, 0, 1, 0, 1]],
  2: [[0, 1, 0, 1, 0, 1, 0, 1, 0], [1, 0, 1, 0, 1, 0, 1, 0, 1], [2, 0, 2, 0, 2, 0, 2, 0, 2]],
  3: [[0, 1, 0, 1, 0, 1, 0, 1, 0], [1, 0, 1, 0, 1, 0, 1, 0, 1], [2, 0, 2, 0, 2, 0, 2, 0, 2]],
  4: [[0, 2, 0, 2, 0, 2, 0, 2, 0], [1, 0, 1, 0, 1, 0, 1, 0, 1], [2, 0, 2, 0, 2, 0, 2, 0, 2]],
  5: [[0, 50, 0, 70, 0, 51, 0]],
  6: [[0, 2, 0, 2, 0, 2, 0, 2, 0], [2, 0, 2, 0, 2, 0, 2, 0, 2], [0, 2, 0, 2, 0, 2, 0, 2, 0]],
  7: [[0, 2, 0, 2, 0, 2, 0, 2, 0], [0, 0, 2, 0, 2, 0, 2, 0, 0]],
  8: [[0, 2, 0, 2, 0, 2, 0, 2, 0], [0, 0, 2, 0, 2, 0, 2, 0, 0], [0, 2, 0, 2, 0, 2, 0, 2, 0]],
  9: [[0, 2, 0, 2, 0, 2, 0, 2, 0], [0, 3, 0, 8, 0, 8, 0, 3, 0], [0, 8, 0, 3, 0, 3, 0, 8, 0]],
  10: [[0, 52, 0, 71, 0, 53, 0]],
  11: [[0, 8, 0, 0, 8, 0, 0, 8, 0], [0, 0, 3, 0, 3, 0, 3, 0, 0], [0, 3, 0, 0, 0, 0, 3, 0]],
  12: [[0, 8, 0, 0, 8, 0, 0, 8, 0], [0, 3, 0, 3, 0, 3, 0, 3, 0], [3, 0, 3, 0, 3, 0, 3, 0, 3]],
  13: [[0, 9, 0, 0, 9, 0, 0, 9, 0], [0, 4, 0, 4, 0, 4, 0, 4, 0], [4, 0, 4, 0, 4, 0, 4, 0, 4]],
  14: [[0, 9, 0, 0, 9, 0, 0, 9, 0], [0, 4, 0, 4, 0, 4, 0, 4, 0], [4, 0, 4, 0, 4, 0, 4, 0, 4]],
  15: [[0, 54, 0, 72, 0, 55, 0]],
  16: [[0, 4, 0, 0, 4, 0, 0, 4, 0], [0, 0, 5, 0, 5, 0, 5, 0, 0], [5, 0, 5, 0, 5, 0, 5, 0, 5]],
  17: [[0, 6, 0, 6, 0, 6, 0, 6, 0], [0, 9, 0, 9, 0, 9, 0, 9, 0], [0, 6, 0, 6, 0, 6, 0, 6, 0]],
  18: [[0, 6, 0, 6, 0, 6, 0, 6, 0], [0, 6, 0, 6, 0, 6, 0, 6, 0], [0, 5, 0, 5, 0, 5, 0, 5, 0]],
  19: [[0, 6, 0, 6, 0, 6, 0, 6, 0], [0, 6, 0, 6, 0, 6, 0, 6, 0], [0, 6, 0, 6, 0, 6, 0, 6, 0]],
  20: [[0, 56, 0, 73, 0, 57, 0]],
  21: [[0, 7, 0, 7, 0, 7, 0, 7, 0], [0, 0, 10, 0, 10, 0, 10, 0, 0], [6, 0, 6, 0, 6, 0, 6, 0, 6]],
  22: [[0, 7, 0, 7, 0, 7, 0, 7, 0], [0, 10, 0, 10, 0, 10, 0, 10, 0], [0, 7, 0, 7, 0, 7, 0, 7, 0]],
  23: [[0, 7, 9, 7, 0, 7, 0, 9, 0], [0, 7, 0, 7, 0, 7, 0, 7, 0], [0, 6, 0, 6, 0, 6, 0, 6, 0]],
  24: [[0, 7, 9, 7, 0, 7, 0, 9, 0], [0, 7, 0, 7, 0, 7, 0, 7, 0], [0, 7, 0, 7, 0, 7, 0, 7, 0]],
  25: [[0, 58, 0, 74, 0, 59, 0]]
};
/* harmony default export */ __webpack_exports__["default"] = (levelSettings);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScoreBar; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_5__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var ScoreBar =
/*#__PURE__*/
function () {
  function ScoreBar() {
    var _this = this;

    _classCallCheck(this, ScoreBar);

    this._container = null;
    this._scoreText = null;
    this._substrate = null;
    this._score = 0;
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
      _this._init();

      _this._startAnimation();
    });
  }

  _createClass(ScoreBar, [{
    key: "_init",
    value: function _init() {
      this._container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createContainer({
        x: -(_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2) + 70,
        y: -(_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height / 2) + 10
      });

      this._container.setParent(_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field);

      this._substrate = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "score_substrate"
      });

      this._substrate.setParent(this._container);

      this._substrate.scale.set(0.6);

      this._substrate.anchor.set(0.5, 0);

      this._scoreText = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].drawText({
        parent: this._container,
        text: this._score,
        x: 0,
        y: 70,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].score
      });
    }
  }, {
    key: "_startAnimation",
    value: function _startAnimation() {
      new tween_js__WEBPACK_IMPORTED_MODULE_5___default.a.Tween(this._container).to({
        rotation: [-0.1, 0, 0.1, 0]
      }, 5000).repeat(Infinity).start();
    }
  }, {
    key: "update",
    value: function update(val) {
      this._score += val;
      this._scoreText.text = this._score;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._score = 0;
      this._scoreText.text = this._score;
    }
  }]);

  return ScoreBar;
}(); //TODO Вынести очки куда-то в настройки, так как за всех врагов будут разные очки и боссов!




/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GamePauseScene; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _SceneManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var GamePauseScene =
/*#__PURE__*/
function () {
  function GamePauseScene() {
    _classCallCheck(this, GamePauseScene);

    this.init();
  }

  _createClass(GamePauseScene, [{
    key: "init",
    value: function init() {
      this.background = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawSvgSprite({
        parent: _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage,
        name: "bg_1",
        width: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width,
        height: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height,
        x: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width / 2,
        y: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height / 2,
        anchor: 0.5
      });
      this.playButton = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawSvgSprite({
        parent: this.background,
        name: "play",
        width: 100,
        height: 100,
        anchor: 0.5,
        x: 0,
        y: 0,
        onClick: function onClick() {
          _SceneManager_js__WEBPACK_IMPORTED_MODULE_3__["default"].showScene("continueGame");
        }
      });
      this.playButton.buttonMode = true;
      this.hide();
    }
  }, {
    key: "show",
    value: function show() {
      this.background.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.background.visible = false;
    }
  }]);

  return GamePauseScene;
}();



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RestartScene; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _LevelManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88);
/* harmony import */ var _SceneManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var RestartScene =
/*#__PURE__*/
function () {
  function RestartScene() {
    _classCallCheck(this, RestartScene);

    var container = new pixi_js__WEBPACK_IMPORTED_MODULE_3__["Container"]();
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage.addChild(container);
    container.x = _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width / 2;
    container.y = _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height / 2;
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;
    this.container = container;
    this.init();
  }

  _createClass(RestartScene, [{
    key: "init",
    value: function init() {
      this.background = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawSvgSprite({
        parent: _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage,
        name: "bg_1",
        width: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width,
        height: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height,
        x: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width / 2,
        y: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height / 2,
        anchor: 0.5
      });
      this.playButton = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawSvgSprite({
        parent: this.background,
        name: "restart",
        width: 100,
        height: 100,
        anchor: 0.5,
        x: 0,
        y: 0,
        onClick: function onClick() {
          _LevelManager_js__WEBPACK_IMPORTED_MODULE_4__["default"].restart();
          _SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].showScene("continueGame");
        }
      });
      this._scoreText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.background,
        text: "Restart game ?",
        x: 0,
        y: 60,
        style: {
          align: "center",
          dropShadow: true,
          dropShadowAngle: 0.4,
          dropShadowColor: "#0d1144",
          dropShadowDistance: 2,
          fill: "#857833",
          fillGradientStops: [1],
          fontFamily: "Comic Sans MS",
          fontSize: 20,
          fontWeight: 900,
          letterSpacing: 2,
          lineJoin: "round",
          miterLimit: 5,
          padding: 4,
          stroke: "#f64949",
          strokeThickness: 2,
          whiteSpace: "normal"
        }
      });
      this.playButton.buttonMode = true;
      this.hide();
    }
  }, {
    key: "show",
    value: function show() {
      this.background.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.background.visible = false;
    }
  }]);

  return RestartScene;
}();



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartScene; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var StartScene =
/*#__PURE__*/
function () {
  function StartScene(completeCallback) {
    var _this = this;

    _classCallCheck(this, StartScene);

    this._container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].crateSceneContainer({
      background: "bg_1"
    });
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage.addChild(_this._container);
    });
    this._completeCallback = completeCallback;
    this._selectedPlayerIndex = 0;
    this._players = [];

    this._init();
  }

  _createClass(StartScene, [{
    key: "_init",
    value: function _init() {
      var _this2 = this;

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        text: "LEGALAXY",
        x: 0,
        y: -280,
        color: 0xff43c3,
        parent: this._container,
        style: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].logo
      });
      this.name = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        text: "",
        x: 0,
        y: 80,
        color: 0xff43c3,
        parent: this._container,
        style: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].IntroPlayerName
      });
      var leftArrow = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "left_arrow",
        x: -400,
        y: -100,
        width: 200,
        height: 112,
        onClick: function onClick() {
          _this2.changePlayer(1);
        }
      });
      leftArrow.setParent(this._container);
      var rightArrow = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "right_arrow",
        x: 200,
        y: -100,
        width: 200,
        height: 112,
        onClick: function onClick() {
          _this2.changePlayer(-1);
        }
      });
      rightArrow.setParent(this._container); // play button

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawSvgSprite({
        parent: this._container,
        name: "play",
        width: 100,
        height: 100,
        anchor: 0.5,
        x: 0,
        y: 180,
        onClick: function onClick() {
          var _this2$_players$_this = _this2._players[_this2._selectedPlayerIndex],
              name = _this2$_players$_this.name,
              displayName = _this2$_players$_this.displayName,
              type = _this2$_players$_this.type;

          _this2._completeCallback({
            player: {
              name: name,
              displayName: displayName,
              type: type
            }
          });
        }
      });
      this.initPlayers();
      this.hide();
    }
  }, {
    key: "changePlayer",
    value: function changePlayer(dir) {
      this._selectedPlayerIndex += dir;

      if (this._selectedPlayerIndex >= this._players.length) {
        this._selectedPlayerIndex = 0;
      }

      if (this._selectedPlayerIndex < 0) {
        this._selectedPlayerIndex = this._players.length - 1;
      }

      this._updatePreview();
    }
  }, {
    key: "initPlayers",
    value: function initPlayers() {
      var _this3 = this;

      this._players = _Player__WEBPACK_IMPORTED_MODULE_5__["default"].getAvailablePlayerTypes().map(function (type) {
        var _type$previewInfo = type.previewInfo,
            name = _type$previewInfo.name,
            displayName = _type$previewInfo.displayName;

        var sprite = _this3._createPlayerSprite(name);

        return {
          name: name,
          displayName: displayName,
          type: type,
          sprite: sprite
        };
      });
      this._selectedPlayerIndex = 0;

      this._updatePreview();
    }
  }, {
    key: "_createPlayerSprite",
    value: function _createPlayerSprite(name) {
      var player = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: name,
        x: 0,
        y: -50,
        width: 150,
        height: 205
      });
      player.anchor.set(0.5);
      player.alpha = 0;
      player.setParent(this._container);
      return player;
    }
  }, {
    key: "_updatePreview",
    value: function _updatePreview() {
      var player = this._players[this._selectedPlayerIndex]; // hide all and show current

      this._players.forEach(function (p) {
        p.sprite.alpha = +(p === player);
      }); // update player name


      this.name.text = player.displayName;
    }
  }, {
    key: "show",
    value: function show() {
      this._container.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      this._container.visible = false;
    }
  }]);

  return StartScene;
}();



/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShopScene; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);
/* harmony import */ var _components_Lamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68);
/* harmony import */ var _SceneManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







 //import { PlayerConfiguration } from "../Player.js";

var ShopScene =
/*#__PURE__*/
function () {
  function ShopScene(playerConfiguration) {
    var _this = this;

    _classCallCheck(this, ShopScene);

    this._container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createContainer({
      x: _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2,
      y: _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height / 2
    });
    this._playerConfiguration = playerConfiguration;
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage.addChild(this._container);
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
      _this._init();
    });
  }

  _createClass(ShopScene, [{
    key: "_init",
    value: function _init() {
      var _this2 = this;

      this._background = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createSprite({
        name: "bg_1",
        x: -_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2,
        y: -_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height / 2
      });

      this._background.setParent(this._container);

      this._shopBackGround = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createSprite({
        name: "shop_board"
      });

      this._shopBackGround.anchor.set(0.5);

      this._shopBackGround.setParent(this._container);

      this._chair = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createSprite({
        name: "chair",
        y: 0
      });

      this._chair.anchor.set(0.5);

      this._chair.scale.set(1.3);

      this._chair.setParent(this._container);

      this._shoper = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createSprite({
        name: "shoper",
        y: -170
      });

      this._shoper.anchor.set(0.5);

      this._shoper.setParent(this._container);

      this._table = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createSprite({
        name: "shop_table",
        y: -50
      });

      this._table.anchor.set(0.5);

      this._table.scale.set(1, 0.7);

      this._table.setParent(this._container);

      this._closeButton = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createSprite({
        name: "close",
        x: _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2 - 50,
        y: -(_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height / 2) + 50,
        onClick: function onClick() {
          _SceneManager_js__WEBPACK_IMPORTED_MODULE_6__["default"].showScene("nextLevelScene");
        }
      });
      this._closeButton.buttonMode = true;

      this._closeButton.anchor.set(0.5);

      this._closeButton.scale.set(0.6);

      this._closeButton.setParent(this._container); //-----------------------TEXTS-------------------------------//


      this.shopName = _utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].drawText({
        text: "☯L☮E☮S☯",
        x: 0,
        y: -(_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height / 2) + 30,
        color: 0xff43c3,
        parent: this._container,
        style: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].shop
      });
      this._substrateName = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createSprite({
        name: "level_substrate",
        x: 230,
        y: -250
      });

      this._substrateName.anchor.set(0.5);

      this._substrateName.setParent(this._container);

      this.firstName = _utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].drawText({
        text: "SHELDON",
        x: 0,
        y: 10,
        color: 0xff43c3,
        parent: this._substrateName,
        style: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].shoperName
      });
      this.LastName = _utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].drawText({
        text: "RO$$",
        x: 0,
        y: 45,
        color: 0xff43c3,
        parent: this._substrateName,
        style: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].shoperName
      });
      this._leftLamp = new _components_Lamp__WEBPACK_IMPORTED_MODULE_4__["default"](this._container, -360, -450, 6000);
      this._rightLamp = new _components_Lamp__WEBPACK_IMPORTED_MODULE_4__["default"](this._container, 370, -450, 8000); //-----------------------CELLS-------------------------------//

      this._cellContainer = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createContainer({
        x: -250,
        y: 120
      });

      this._container.addChild(this._cellContainer);

      var stepY = 0;
      var tiles = [{
        name: "live",
        cost: 10,
        action: function action() {
          _this2._playerConfiguration.increaseSetting("lives", 1);
        }
      }, {
        name: "healthBar",
        cost: 10,
        action: function action() {
          _this2._playerConfiguration.increaseSetting("maxHealth");
        }
      }];

      for (var i = 0; i < 2; i++) {
        var stepX = 0;

        for (var j = 0; j < 4; j++) {
          this.createItem(tiles[i * 2 + j], stepX, stepY);
          stepX += 170;
        }

        stepY += 150;
      }

      this.hide();
    }
  }, {
    key: "createItem",
    value: function createItem(itemInfo, x, y) {
      var cell = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createSprite({
        name: "shop_cell",
        x: x,
        y: y
      });
      cell.anchor.set(0.5);
      cell.scale.set(1);
      cell.setParent(this._cellContainer);

      if (itemInfo) {
        var name = itemInfo.name,
            cost = itemInfo.cost,
            action = itemInfo.action;
        var item = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createSprite({
          name: name,
          x: x - 20,
          y: y + 10
        });
        item.anchor.set(0.5);
        item.scale.set(0.8);
        item.setParent(this._cellContainer);
        var ok = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createSprite({
          name: "ok",
          x: 105,
          y: -25,
          onClick: action
        });
        ok.buttonMode = true;
        ok.anchor.set(0.5);
        ok.scale.set(0.8);
        ok.setParent(item);
        _utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].drawText({
          text: "+1",
          x: 0,
          y: 0,
          color: 0xff43c3,
          parent: item,
          style: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].shoperName
        });
        _utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].drawText({
          text: "".concat(cost, "$"),
          x: 25,
          y: 50,
          parent: item,
          style: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].shoperName
        });
      }
    }
  }, {
    key: "show",
    value: function show() {
      this._container.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      this._container.visible = false;
    }
  }]);

  return ShopScene;
}();



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lamp; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Lamp =
/*#__PURE__*/
function () {
  function Lamp(owner, x, y, animationTime) {
    var _this = this;

    _classCallCheck(this, Lamp);

    this.rotationTween = null;
    this._animationTime = animationTime;
    this._container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createContainer({
      x: x,
      y: y
    });
    owner.addChild(this._container);
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
      _this._init();
    });
  }

  _createClass(Lamp, [{
    key: "_init",
    value: function _init() {
      this.light = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createSprite({
        name: "shop_light",
        x: -25,
        y: 440
      });
      this.light.anchor.set(0.5);
      this.light.setParent(this._container);
      this.lamp = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createSprite({
        name: "lamp",
        x: 0,
        y: 100
      });
      this.lamp.anchor.set(0.5);
      this.lamp.setParent(this._container);
      this.runAnimation();
    }
  }, {
    key: "runAnimation",
    value: function runAnimation() {
      //generated random alpha
      var transparency = Array.from({
        length: 40
      }, function () {
        return Math.random();
      });
      this.rotationTween = new tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.Tween(this._container).to({
        rotation: [-0.06, 0, 0.06, 0]
      }, this._animationTime).yoyo(false).repeat(Infinity).start();
      this.blinking = new tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.Tween(this.light).to({
        alpha: transparency
      }, 4000).yoyo(false).repeat(Infinity).start();
    }
  }]);

  return Lamp;
}();



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContinueGameScene; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _Manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
/* harmony import */ var _LevelManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88);
/* harmony import */ var _SceneManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var ContinueGameScene =
/*#__PURE__*/
function () {
  function ContinueGameScene() {
    var _this = this;

    _classCallCheck(this, ContinueGameScene);

    this._container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_7__["default"].createContainer({
      x: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width / 2,
      y: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height / 2
    });
    this._countDownText = ["3", "2", "1", "Start!"];
    this._countDownInterval = 400;
    this._currentCountDownInterval = 0;
    this._currentCountDownTextIndex = 0;
    this.hide();
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage.addChild(_this._container);

      _this._init();
    });
  }

  _createClass(ContinueGameScene, [{
    key: "_init",
    value: function _init() {
      this._level = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        x: -30,
        y: -100,
        color: 0xffffff,
        parent: this._container,
        style: _styles__WEBPACK_IMPORTED_MODULE_8__["default"].shop,
        text: ""
      });
      this._countDown = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        x: -30,
        y: 0,
        color: 0xffffff,
        parent: this._container,
        style: _styles__WEBPACK_IMPORTED_MODULE_8__["default"].shop,
        text: ""
      });
    }
  }, {
    key: "_tick",
    value: function _tick(delta) {
      this._currentCountDownInterval -= delta;

      if (this._currentCountDownInterval < 0) {
        if (this._currentCountDownTextIndex === this._countDownText.length) {
          _SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].showScene("main");
          return;
        }

        this._countDown.text = this._countDownText[this._currentCountDownTextIndex];
        this._currentCountDownInterval = this._countDownInterval;
        this._currentCountDownTextIndex++;
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      this._level.text = "LEVEL ".concat(_LevelManager__WEBPACK_IMPORTED_MODULE_4__["default"].level);
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].registerTick(function (delta) {
        return _this2._tick(delta);
      }).then(function (registration) {
        _this2._tickRegistration = registration;
      });
      this._container.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this._tickRegistration) {
        _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].unregisterTick(this._tickRegistration);
      }

      this._tickRegistration = null;
      this._currentCountDownInterval = 0;
      this._currentCountDownTextIndex = 0;
      this._container.visible = false;
    }
  }]);

  return ContinueGameScene;
}();



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NextLevelScene; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _Manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
/* harmony import */ var _LevelManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88);
/* harmony import */ var _SceneManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73);
/* harmony import */ var _Lives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72);
/* harmony import */ var _TickerHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }













var NextLevelScene =
/*#__PURE__*/
function () {
  function NextLevelScene() {
    var _this = this;

    _classCallCheck(this, NextLevelScene);

    this._container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_7__["default"].crateSceneContainer({
      background: "bg_1"
    }); // debug

    window.containerNextLevelScene = this._container;

    this._init();

    this.hide();
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage.addChild(_this._container);
    });
  }

  _createClass(NextLevelScene, [{
    key: "_init",
    value: function _init() {
      this._title = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        x: 0,
        y: -320,
        color: 0xffffff,
        parent: this._container,
        style: _objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_8__["default"].shop, {
          fontSize: 45
        }),
        text: ""
      });

      this._title.anchor.set(0.5);

      this._continueButton = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_7__["default"].createSprite({
        name: "play",
        x: 60,
        y: -25,
        onClick: function onClick() {
          _SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].showScene("continueGame");
        }
      });

      this._continueButton.anchor.set(0.5);

      this._continueButton.setParent(this._container);

      this._shopButton = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_7__["default"].createSprite({
        name: "shop",
        x: -60,
        y: -25,
        onClick: function onClick() {
          _SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].showScene("shop");
        }
      });

      this._shopButton.anchor.set(0.5);

      this._shopButton.setParent(this._container); // TODO: inherit from Player and disable maxHealth on init
      // also mock move logic
      // this.player = new Player(0, 300, "Gerard");
      // this.player.container.setParent(this._container);

    }
  }, {
    key: "_tick",
    value: function _tick(delta) {}
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].registerTick(function (delta) {
        return _this2._tick(delta);
      }).then(function (registration) {
        _this2._tickRegistration = registration;
      });
      this._container.alpha = 1;
      this._container.visible = true;
      this._title.text = "Level ".concat(_LevelManager__WEBPACK_IMPORTED_MODULE_4__["default"].level, " completed");
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this._tickRegistration) {
        _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].unregisterTick(this._tickRegistration);
      }

      this._container.alpha = 0;
      this._container.visible = false;
    }
  }]);

  return NextLevelScene;
}();



/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var AvatarsController =
/*#__PURE__*/
function () {
  function AvatarsController() {
    _classCallCheck(this, AvatarsController);

    this._container = null;
    this.avatars = [];
    this.avatarsCounter = 0;
  }

  _createClass(AvatarsController, [{
    key: "registerAvatar",
    value: function registerAvatar(settings) {
      var name = settings.name,
          id = settings.id;

      if (!this._container) {
        this._container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createContainer({
          x: _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2 - 120,
          y: _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height / 2 - 100
        });
        _Starter_js__WEBPACK_IMPORTED_MODULE_0__["default"].field.addChild(this._container);
      }

      var avatar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].createSprite({
        name: name,
        x: 0 - this.avatarsCounter * 100,
        y: 0
      });
      avatar.id = id;
      avatar.scale.set(0.6);
      avatar.setParent(this._container);
      this.avatars.push(avatar);
      this.avatarsCounter++;
    }
  }, {
    key: "fill",
    value: function fill(id) {
      var avatar = this.avatars.filter(function (sprite) {
        return sprite.id === id;
      });
      avatar.tint = 0x999999;
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this = this;

      this.avatars.forEach(function (el) {
        _this._container.removeChild(el);
      });
      this.avatarsCounter = 0;
    }
  }]);

  return AvatarsController;
}();

var panel = new AvatarsController();
/* harmony default export */ __webpack_exports__["default"] = (panel);

/***/ })
/******/ ]);